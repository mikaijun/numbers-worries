import { useCallback, useEffect, useState } from "react"

import { gql, useMutation, useQuery } from "@apollo/client"
import styled from "@emotion/styled"

import { Worry } from "../../../type"
import ButtonBorderless from "../../atoms/ButtonBorderless"
import BackLink from "../../molecules/BackLink"
import InputTextField from "../../molecules/InputTextField"

const Wrapper = styled.div`
  display: inline-flex;
  gap: 8px;
  flex-direction: column;
`

export type WorryInputProps = {
  id?: string | string[]
}

const GET_WORRY = gql`
  query GetWorries($id: ID!) {
    worry(id: $id) {
      id
      content
      suppose_minimum_events
      suppose_maximum_events
      reality_events
      damage_rate
    }
  }
`
export const saveWorryMutation = gql`
  mutation saveWorry($data: SaveWorryInput!) {
    saveWorry(data: $data) {
      content
      suppose_minimum_events
      suppose_maximum_events
      reality_events
      damage_rate
      created_at
      update_at
    }
  }
`
const WorriesForm: React.FC<WorryInputProps> = ({ id }) => {
  const [save] = useMutation(saveWorryMutation)
  const { data, loading, error } = useQuery(GET_WORRY, {
    variables: {
      id: Number(id),
    },
  })
  const [values, setValues] = useState<Worry>({
    id: undefined,
    worries_content: "",
    minimum_worries: "",
    maximum_worries: "",
    real_event_content: "",
    ratio: 0,
  })

  useEffect(() => {
    if (!data?.worry) return
    setValues({
      id: undefined,
      worries_content: data.worry.content,
      minimum_worries: data.worry.suppose_minimum_events,
      maximum_worries: data.worry.suppose_maximum_events,
      real_event_content: data.worry.reality_events,
      ratio: data.worry.damage_rate,
    })
  }, [data, setValues])

  const handleCreateWorry = useCallback(async () => {
    const data = {
      id: id,
      content: values.worries_content,
      suppose_minimum_events: values.minimum_worries,
      suppose_maximum_events: values.maximum_worries,
      reality_events: values.real_event_content,
      damage_rate: Number(values.ratio),
    }
    await save({
      variables: { data },
    })
  }, [save, values])

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const target = e.target
      setValues({ ...values, [target.name]: target.value })
    },
    [values],
  )

  return (
    <Wrapper>
      <BackLink href={`/${id}`} />
      <InputTextField
        name="worries_content"
        label="悩んでいること"
        value={values.worries_content}
        onChange={handleInputChange}
      />
      <InputTextField
        name="minimum_worries"
        label="想定最小被害"
        value={values.minimum_worries}
        onChange={handleInputChange}
      />
      <InputTextField
        name="maximum_worries"
        label="想定最大被害"
        value={values.maximum_worries}
        onChange={handleInputChange}
      />
      <InputTextField
        name="real_event_content"
        label="現実に発生した出来事"
        value={values.real_event_content}
        onChange={handleInputChange}
      />
      <InputTextField
        name="ratio"
        label="現実に発生した出来事は想定最大被害の何割か？"
        value={values.ratio}
        onChange={handleInputChange}
      />
      <ButtonBorderless onClick={handleCreateWorry}>送信</ButtonBorderless>
    </Wrapper>
  )
}

export default WorriesForm
