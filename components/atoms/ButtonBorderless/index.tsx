import type { ForwardRefRenderFunction } from "react"
import React from "react"

import styled from "@emotion/styled"

import { colors } from "../../../constants/colors"

const Button = styled.button<{ $isDisabled: boolean; $styles: Styles }>`
  display: inline-block;
  padding: 0.5rem;
  font-size: 0.875rem;
  border: none;
  border-radius: 8px;
  transition: background-color 0.25s ease;
  color: ${(props) => props.$styles.color};
  background-color: ${(props) =>
    props.$isDisabled ? `${colors.disabled}` : props.$styles.backgroundColor};

  ${(props) =>
    !props.$isDisabled &&
    `
    cursor: pointer;

    &:hover {
      background-color: ${colors.secondary};
    }
  `}
`

type ButtonBorderlessVariant = "primary"

type Styles = {
  color: string
  backgroundColor: string
  hoverBackgroundColor: string
}
type ButtonBorderlessProps = React.ComponentPropsWithRef<"button"> & {
  children: React.ReactNode
  variant?: ButtonBorderlessVariant
  disabled?: boolean
  onPress?: () => void
}

const stylesFactory = (variant: string): Styles => {
  // TODO: primary以外のボタン色が登場したら条件分岐させる
  console.log(variant)
  return {
    color: colors.white,
    backgroundColor: colors.primary,
    hoverBackgroundColor: colors.secondary,
  }
}

const ButtonBorderless: ForwardRefRenderFunction<
  HTMLInputElement,
  ButtonBorderlessProps
> = ({ disabled = false, variant = "primary", ...props }) => {
  const styles = stylesFactory(variant)
  return (
    <Button {...props} $isDisabled={disabled} $styles={styles}>
      {props.children}
    </Button>
  )
}

export default React.forwardRef<HTMLInputElement, ButtonBorderlessProps>(
  ButtonBorderless,
)
