import styled from "@emotion/styled"

import { colors } from "../../../constants/colors"
import { WorryQuery } from "../../../constants/types"
import LinkButtonBordered from "../../molecules/LinkButtonBordered"

const Wrapper = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  display: inline-flex;
  gap: 16px;
  flex-direction: column;
  padding: 16px;
`

const Lead = styled.p`
  font-weight: 700;
  color: ${colors.primary};
`

const Content = styled.p`
  margin-bottom: 20px;
`

const StyledLinkButtonBordered = styled(LinkButtonBordered)`
  margin: 0 auto;
  width: 100%;
  max-width: 240px;
`

const WorryDetail: React.FC<WorryQuery> = ({ worry }) => {
  return (
    <Wrapper>
      {worry && (
        <div>
          <Lead>心配内容</Lead>
          <Content>{worry.content}</Content>
          <Lead>心配事に対する想定する最小の出来事</Lead>
          <Content>{worry.suppose_minimum_events}</Content>
          <Lead>心配事に対する想定する最大の出来事</Lead>
          <Content>{worry.suppose_maximum_events}</Content>
          <Lead>実際に発生した出来事</Lead>
          <Content>{worry.reality_events}</Content>
          <Lead>実際の出来事は想定した最大の何割だったか？</Lead>
          <Content>{worry.damage_rate}</Content>
        </div>
      )}
      <StyledLinkButtonBordered href={`/${worry.id}/edit`}>
        悩みを考え直す
      </StyledLinkButtonBordered>
      <StyledLinkButtonBordered href="/" variant="border">
        悩み一覧へ戻る
      </StyledLinkButtonBordered>
    </Wrapper>
  )
}

export default WorryDetail
