import type { ForwardRefRenderFunction } from "react"
import React, { useCallback } from "react"

import InputText from "../atoms/InputText"

import type { InputTextProps } from "../atoms/InputText"

const InputTextField: ForwardRefRenderFunction<
  HTMLInputElement,
  InputTextProps
> = ({ onChange, ...props }) => {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) onChange(event)
    },
    [onChange],
  )

  return <InputText {...props} type="text" onChange={handleChange} />
}

export default React.forwardRef<HTMLInputElement, InputTextProps>(
  InputTextField,
)
