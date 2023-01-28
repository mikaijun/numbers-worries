import type { ForwardRefRenderFunction } from "react"
import React from "react"

import styled from "@emotion/styled"

const Button = styled.button<{ $isDisabled: boolean }>`
  display: inline-block;
  padding: 0.5rem;
  font-size: 0.875rem;
  border: none;
  border-radius: 8px;
  transition: color 0.25s ease, background-color 0.25s ease;
  color: var(
    ${(props) => (props.$isDisabled ? "--disabled-text-color" : "--text-color")}
  );
`

export type ButtonBorderedVariant = "primary"

export type ButtonProps = React.ComponentPropsWithRef<"button"> & {
  variant?: ButtonBorderedVariant
}

const variables = (theme: ButtonBorderedVariant) => {
  if (theme === "primary") {
    return `text-color": "red`
    // "hover-text-color": theme.colors.text[100],
    // "background-color": theme.colors.primary[500],
    // "hover-background-color": theme.colors.primary[400],
    // "border-color": theme.colors.primary[500],
    // "hover-border-color": theme.colors.primary[400],
    // "disabled-text-color": theme.colors.text[100],
    // "disabled-background-color": theme.colors.background[500],
    // "disabled-border-color": theme.colors.border[800],
  }
}

const ButtonBordered: ForwardRefRenderFunction<
  HTMLInputElement,
  ButtonProps
> = ({ variant = "primary", disabled = false, ...props }) => {
  const variables2 = variables(variant)
  return <Button {...props} $isDisabled={disabled} className={variables2} />
}

export default React.forwardRef<HTMLInputElement, ButtonProps>(ButtonBordered)
