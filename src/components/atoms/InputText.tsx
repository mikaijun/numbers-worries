import React, { ForwardRefRenderFunction } from "react"

export type InputTextProps = React.ComponentPropsWithRef<"input">

const InputText: ForwardRefRenderFunction<HTMLInputElement, InputTextProps> = ({
  ...props
}) => {
  return <input type="text" {...props} />
}

export default React.forwardRef<HTMLInputElement, InputTextProps>(InputText)
