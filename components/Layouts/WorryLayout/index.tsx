import React from "react"

import styled from "@emotion/styled"

import { colors } from "../../../constants/colors"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const Row = styled.div`
  display: flex;
  height: 100%;
`

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
`

const SIdeBar = styled.div`
  background-color: ${colors.primary};
  color: white;
  width: 200px;
`

const WorryLayout = ({ children }: any) => {
  return (
    <Wrapper>
      <Row>
        <SIdeBar>ここにサイドバーが入る</SIdeBar>
        <Main>{children}</Main>
      </Row>
    </Wrapper>
  )
}

export default WorryLayout
