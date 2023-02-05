import type { ForwardRefRenderFunction } from "react"
import React, { useMemo } from "react"

type SpacerProps = Omit<React.ComponentPropsWithRef<"div">, "children"> & {
  width?: number
  height?: number
}

const Spacer: ForwardRefRenderFunction<HTMLDivElement, SpacerProps> = (
  { width, height, ...props }: SpacerProps,
  ref,
) => {
  const style = useMemo(() => {
    const widthWithUnit = width && `${width}px`
    const heightWithUnit = height && `${height}px`
    return {
      ...props.style,
      width: widthWithUnit,
      height: heightWithUnit,
    }
  }, [width, height, props.style])

  return <div {...props} ref={ref} style={style} />
}

export default React.forwardRef<HTMLDivElement, SpacerProps>(Spacer)
