import React from "react"
import { useCallback, useEffect, useState } from "react"

import { gql, useMutation } from "@apollo/client"
import styled from "@emotion/styled"

import { WorryQuery } from "../../../constants/types"
import { Worry } from "../../../type"
import Button from "../../atoms/Button"
import Spacer from "../../atoms/Spacer"
import InputTextField from "../../molecules/InputTextField"
import LinkButtonBordered from "../../molecules/LinkButtonBordered"

const Wrapper = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  display: inline-flex;
  gap: 16px;
  flex-direction: column;
  padding: 16px;
`

const StyledLinkButtonBordered = styled(LinkButtonBordered)`
  margin: 0 auto;
  width: 100%;
  max-width: 240px;
`

const StyledButton = styled(Button)`
  width: 100%;
  max-width: 240px;
  margin: 0 auto;
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
const WorryForm: React.FC<WorryQuery> = ({ worry }) => {
  const [save] = useMutation(saveWorryMutation)
  const [values, setValues] = useState<Worry>({
    id: undefined,
    worries_content: "",
    minimum_worries: "",
    maximum_worries: "",
    real_event_content: "",
    ratio: 0,
  })

  useEffect(() => {
    if (!worry) return
    setValues({
      id: undefined,
      worries_content: worry.content,
      minimum_worries: worry.suppose_minimum_events,
      maximum_worries: worry.suppose_maximum_events,
      real_event_content: worry.reality_events,
      ratio: worry.damage_rate,
    })
  }, [worry, setValues])

  const handleCreateWorry = useCallback(async () => {
    const data = {
      id: worry.id,
      content: values.worries_content,
      suppose_minimum_events: values.minimum_worries,
      suppose_maximum_events: values.maximum_worries,
      reality_events: values.real_event_content,
      damage_rate: Number(values.ratio),
    }
    await save({
      variables: { data },
    })
  }, [worry, save, values])

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const target = e.target
      setValues({ ...values, [target.name]: target.value })
    },
    [values],
  )

  return (
    <Wrapper>
      <InputTextField
        name="worries_content"
        label="悩んでいること"
        placeholder="貯金がない"
        value={values.worries_content}
        onChange={handleInputChange}
      />
      <InputTextField
        name="minimum_worries"
        label="予想される最小困難"
        placeholder="毎月手取りの10%以上の貯金ができる"
        value={values.minimum_worries}
        onChange={handleInputChange}
      />
      <InputTextField
        name="maximum_worries"
        label="予想される最大困難"
        placeholder="自己破産してしまう"
        value={values.maximum_worries}
        onChange={handleInputChange}
      />
      <InputTextField
        name="real_event_content"
        label="実際の出来事"
        placeholder="毎月手取りの1%の貯金ができてる"
        value={values.real_event_content}
        onChange={handleInputChange}
      />
      <InputTextField
        name="ratio"
        label="困難フィードバック"
        placeholder="10"
        value={values.ratio}
        onChange={handleInputChange}
      />
      <Spacer height={16} />
      <StyledButton onClick={handleCreateWorry}>悩みを管理する</StyledButton>
      <StyledLinkButtonBordered href="/" variant="border">
        戻る
      </StyledLinkButtonBordered>
    </Wrapper>
  )
}

export default WorryForm
