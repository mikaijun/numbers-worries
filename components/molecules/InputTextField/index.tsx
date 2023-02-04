import React, { useCallback } from "react"

import styled from "@emotion/styled"

import InputLabel from "../../atoms/InputLabel"
import InputText from "../../atoms/InputText"

import type { InputTextProps } from "../../atoms/InputText"

export type InputTextFieldProps = InputTextProps & {
  label?: string
}

const Wrapper = styled.div`
  display: inline-flex;
  gap: 8px;
  flex-direction: column;
`

const InputTextField = ({
  onChange,
  label,
  ...props
}: InputTextFieldProps): React.ReactElement => {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) onChange(event)
    },
    [onChange],
  )

  return (
    <Wrapper>
      {label && (
        <InputLabel required={props.required} htmlFor={props.name}>
          {label}
        </InputLabel>
      )}
      <InputText
        {...props}
        id={props.name}
        type="text"
        onChange={handleChange}
      />
    </Wrapper>
  )
}

export default InputTextField
