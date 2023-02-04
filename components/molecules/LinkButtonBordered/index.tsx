import React from "react"

import styled from "@emotion/styled"
import Link from "next/link"

import Button, { ButtonProps } from "../../atoms/Button"

const StyledButton = styled(Button)`
  padding: 0;
`

const StyleLink = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: inherit;
  padding: 8px;
`

export type LinkButtonBorderedProps = ButtonProps & {
  href: string
}

const LinkButtonBordered = ({
  href,
  children,
  ...props
}: LinkButtonBorderedProps) => {
  return (
    <StyledButton {...props}>
      <StyleLink href={href}>{children}</StyleLink>
    </StyledButton>
  )
}

export default LinkButtonBordered
