import { useCallback, useEffect, useState } from "react"
import Link from "next/link"
import InputTextField from "@/components/molecules/InputTextField"
import { useSessionStorage } from "../hooks/useSessionStorage"

export default function New() {
  const [values, setValues] = useState({
    worries_content: "",
    minimum_worries: "",
    maximum_worries: "",
    real_event_content: "",
    ratio: "",
  })
  const { handleCreateWorry } = useSessionStorage(values)

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
