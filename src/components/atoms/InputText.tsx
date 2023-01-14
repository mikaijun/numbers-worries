import React from "react"
import { ForwardRefRenderFunction } from "react"

export type InputTextProps = React.ComponentPropsWithRef<"input">

const InputText: ForwardRefRenderFunction<HTMLInputElement, InputTextProps> = (
  { ...props },
  ref,
) => {
  return <input type="text" {...props} ref={ref} />
}

export default React.forwardRef<HTMLInputElement, InputTextProps>(InputText)
