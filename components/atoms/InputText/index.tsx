import type { ForwardRefRenderFunction } from "react"
import React from "react"

import styled from "@emotion/styled"

import { colors } from "../../../constants/colors"

const Input = styled.input`
  margin: 0;
  outline: 0;
  padding: 0.4rem;
  line-height: 1;
  border-radius: 8px;
  color: ${colors.black};
  background-color: transparent;
  border: solid 1px ${colors.primary};
`

export type InputTextProps = React.ComponentPropsWithRef<"input">

const InputText: ForwardRefRenderFunction<HTMLInputElement, InputTextProps> = (
  { ...props },
  ref,
) => {
  return <Input type="text" {...props} ref={ref} />
}

export default React.forwardRef<HTMLInputElement, InputTextProps>(InputText)
