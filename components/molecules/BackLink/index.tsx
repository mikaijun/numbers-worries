import React, { ForwardRefRenderFunction } from "react"

import styled from "@emotion/styled"
import Link from "next/link"

import { colors } from "../../../constants/colors"
import IconArrow from "../../atoms/IconArrow"

import type { InputTextProps } from "../../atoms/InputText"

export type InputTextFieldProps = InputTextProps & {
  label?: string
}

const StyleLink = styled(Link)`
  display: inline-flex;
  gap: 4px;
  align-items: center;
  text-decoration: none;
`

const StyledIconArrow = styled(IconArrow)`
  color: ${colors.primary};
`

const Text = styled.p`
  font-weight: 300;
  text-align: center;
  color: ${colors.primary};
  font-weight: 500;
`

export type LinkTextProps = {
  href: string
}

const BackLink: ForwardRefRenderFunction<HTMLAnchorElement, LinkTextProps> = ({
  href,
  ...props
}): React.ReactElement => {
  return (
    <StyleLink href={href} {...props}>
      <StyledIconArrow />
      <Text>戻る</Text>
    </StyleLink>
  )
}

export default React.forwardRef<HTMLAnchorElement, LinkTextProps>(BackLink)
