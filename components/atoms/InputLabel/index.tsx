import type { ForwardRefRenderFunction } from "react"
import React from "react"

import styled from "@emotion/styled"

import { colors } from "../../../constants/colors"

const Wrapper = styled.label`
  display: flex;
  font-weight: 700;
  justify-content: space-between;
  color: ${colors.black};
`

const Text = styled.div`
  font-size: 12px;
`

const TextWrapper = styled.div`
  display: flex;
  gap: 4px;
`

export type InputLabelProps = React.ComponentPropsWithRef<"label"> & {
  required?: boolean
}

const InputLabel: ForwardRefRenderFunction<
  HTMLLabelElement,
  InputLabelProps
> = ({ children, required = false, ...props }, ref) => {
  return (
    <Wrapper {...props} ref={ref}>
      <TextWrapper>
        <Text>{children}</Text>
        {required && <Text>※</Text>}
      </TextWrapper>
    </Wrapper>
  )
}

export default React.forwardRef<HTMLLabelElement, InputLabelProps>(InputLabel)
