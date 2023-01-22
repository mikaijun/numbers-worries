import { useCallback, useEffect, useState } from "react"

import { gql, useMutation } from "@apollo/client"

import InputTextField from "components/molecules/InputTextField"

import { useFindWorry } from "../../hooks/useFindWorry"
import { Worry } from "../../type"

export type WorryInputProps = {
  id?: number
}
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
const WorryInput: React.FC<WorryInputProps> = ({ id }) => {
  const [save] = useMutation(saveWorryMutation)
  const { worry } = useFindWorry(Number(id))
  const [values, setValues] = useState<Worry>({
    id: undefined,
    worries_content: "",
    minimum_worries: "",
    maximum_worries: "",
    real_event_content: "",
    ratio: 0,
  })

  useEffect(() => {
    setValues({
      id: worry ? worry.id : undefined,
      worries_content: worry ? worry.worries_content : "",
      minimum_worries: worry ? worry.minimum_worries : "",
      maximum_worries: worry ? worry.maximum_worries : "",
      real_event_content: worry ? worry.real_event_content : "",
      ratio: worry ? worry.ratio : 0,
    })
  }, [worry, setValues])

  const handleCreateWorry = useCallback(async () => {
    const data = {
      id: null,
      content: values.worries_content,
      suppose_minimum_events: values.minimum_worries,
      suppose_maximum_events: values.maximum_worries,
      reality_events: values.real_event_content,
      damage_rate: values.ratio,
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
    <div>
      <div>
        <span>心配内容</span>
        <div>
          <InputTextField
            name="worries_content"
            value={values.worries_content}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <span>心配事に対する想定する最小の出来事</span>
        <div>
          <InputTextField
            name="minimum_worries"
            value={values.minimum_worries}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <span>心配事に対する想定する最大の出来事</span>
        <div>
          <InputTextField
            name="maximum_worries"
            value={values.maximum_worries}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <span>実際に発生した出来事</span>
        <div>
          <InputTextField
            name="real_event_content"
            value={values.real_event_content}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <span>実際の出来事は想定した最大の何割だったか？</span>
        <div>
          <InputTextField
            name="ratio"
            value={values.ratio}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <button onClick={handleCreateWorry}>送信</button>
      </div>
    </div>
  )
}

export default WorryInput
