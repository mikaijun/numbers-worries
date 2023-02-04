import type { ForwardRefRenderFunction } from "react"
import React from "react"

import styled from "@emotion/styled"

import { colors } from "../../../constants/colors"

const Wrapper = styled.button<{ $isDisabled: boolean; $styles: Styles }>`
  display: inline-block;
  padding: 8px;
  font-size: 14px;
  border-radius: 8px;
  transition: background-color 0.25s ease;
  border: ${(props) => props.$styles.border};
  color: ${(props) => props.$styles.color};
  background-color: ${(props) =>
    props.$isDisabled ? `${colors.disabled}` : props.$styles.backgroundColor};
  cursor: ${(props) => !props.$isDisabled && "pointer"};

  &:hover {
    background-color: ${(props) =>
      !props.$isDisabled && props.$styles.hoverBackgroundColor};
  }
`

type ButtonVariant = "primary" | "border"

type Styles = {
  color: string
  backgroundColor: string
  hoverBackgroundColor: string
  border: string
}
export type ButtonProps = React.ComponentPropsWithRef<"button"> & {
  children: React.ReactNode
  variant?: ButtonVariant
  disabled?: boolean
  onPress?: () => void
}

const stylesFactory = (variant: ButtonVariant): Styles => {
  switch (variant) {
    case "primary":
      return {
        color: colors.white,
        backgroundColor: colors.primary,
        hoverBackgroundColor: colors.secondary,
        border: "none",
      }
    case "border":
      return {
        color: colors.primary,
        backgroundColor: colors.white,
        hoverBackgroundColor: colors.whiteGreen,
        border: `1px solid ${colors.primary}`,
      }
  }
}

const Button: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = ({
  disabled = false,
  variant = "primary",
  onPress,
  ...props
}) => {
  const styles = stylesFactory(variant)
  return (
    <Wrapper {...props} $isDisabled={disabled} $styles={styles}>
      {props.children}
    </Wrapper>
  )
}

export default React.forwardRef<HTMLButtonElement, ButtonProps>(Button)
