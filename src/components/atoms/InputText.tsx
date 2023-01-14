import { useCallback } from "react"

type InputTextProps = {
  onChange: (value: string) => void
  value: any
}

export default function InputText(props: InputTextProps) {
  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      props.onChange(e.target.value)
    },
    [props],
  )

  return (
    <>
      <input type="text" value={props.value} onChange={handleOnChange} />
    </>
  )
}
