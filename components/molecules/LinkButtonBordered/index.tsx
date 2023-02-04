import React from "react"

import styled from "@emotion/styled"
import Link from "next/link"

import ButtonBorderless, {
  ButtonBorderlessProps,
} from "../../atoms/ButtonBorderless"

const StyledButtonBorderless = styled(ButtonBorderless)`
  padding: 0;
`

const StyleLink = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: inherit;
  padding: 8px;
`

export type LinkButtonBorderedProps = ButtonBorderlessProps & {
  href: string
}

const LinkButtonBordered = ({
  href,
  children,
  ...props
}: LinkButtonBorderedProps) => {
  return (
    <StyledButtonBorderless {...props}>
      <StyleLink href={href}>{children}</StyleLink>
    </StyledButtonBorderless>
  )
}

export default LinkButtonBordered
