import type { ForwardRefRenderFunction } from "react"
import React from "react"

import styled from "@emotion/styled"

const Wrapper = styled.div`
  display: inline-block;
  line-height: 0;
`

export type IconArrowProps = React.ComponentPropsWithRef<"div">

const IconArrow: ForwardRefRenderFunction<HTMLDivElement, IconArrowProps> = (
  props,
  ref,
) => {
  return (
    <Wrapper {...props} ref={ref}>
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 80 80"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 67a3 3 0 0 1-2.12-.88l-24-24a3 3 0 0 1 0-4.24l24-24a3 3 0 0 1 4.24 4.24L30.22 40l21.92 21.92a3 3 0 0 1 0 4.24A3 3 0 0 1 50 67Z" />
      </svg>
    </Wrapper>
  )
}

export default React.forwardRef<HTMLDivElement, IconArrowProps>(IconArrow)
