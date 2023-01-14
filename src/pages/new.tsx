import { useCallback, useState } from "react"
import Link from "next/link"
// import { useRecoilState } from "recoil"
// import { sessionStorageState } from "../states/session-storage"
import InputText from "@/components/atoms/InputText"

export default function New() {
  const [value1, setValue1] = useState("")
  const [value2, setValue2] = useState("")
  const [value3, setValue3] = useState("")
  const [value4, setValue4] = useState("")
  const [value5, setValue5] = useState("")
  // const [localValue, setLocalValue] = useRecoilState(sessionStorageState)
  const handleOnChange1 = useCallback(
    (value: string) => {
      setValue1(value)
    },
    [setValue1],
  )
  const handleOnChange2 = useCallback(
    (value: string) => {
      setValue2(value)
    },
    [setValue2],
  )
  const handleOnChange3 = useCallback(
    (value: string) => {
      setValue3(value)
    },
    [setValue3],
  )
  const handleOnChange4 = useCallback(
    (value: string) => {
      setValue4(value)
    },
    [setValue4],
  )
  const handleOnChange5 = useCallback(
    (value: string) => {
      setValue5(value)
    },
    [setValue5],
  )

  const handleSave = useCallback(() => {
    console.log(value1)
    console.log(value2)
    console.log(value3)
    console.log(value4)
    console.log(value5)
  }, [value1, value2, value3, value4, value5])

  return (
    <div>
      <div>
        <span>心配内容</span>
        <div>
          <InputText value={value1} onChange={handleOnChange1} />
        </div>
        <br />
        <span>心配事に対する想定する最小の出来事</span>
        <div>
          <InputText value={value2} onChange={handleOnChange2} />
        </div>
        <br />
        <span>心配事に対する想定する最大の出来事</span>
        <div>
          <InputText value={value3} onChange={handleOnChange3} />
        </div>
        <br />
        <span>実際に発生した出来事</span>
        <div>
          <InputText value={value4} onChange={handleOnChange4} />
        </div>
        <br />
        <span>実際の出来事は想定した最大の何割だったか？</span>
        <div>
          <InputText value={value5} onChange={handleOnChange5} />
        </div>
        <br />
        <button onClick={handleSave}>送信</button>
      </div>
    </div>
  )
}
