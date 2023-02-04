import { gql, useQuery } from "@apollo/client"
import styled from "@emotion/styled"

import { colors } from "../../../constants/colors"
import LinkButtonBordered from "../../molecules/LinkButtonBordered"

export type WorryInputProps = {
  id?: string | string[]
}

const GET_WORRY = gql`
  query GetWorries($id: ID!) {
    worry(id: $id) {
      id
      content
      suppose_minimum_events
      suppose_maximum_events
      reality_events
      damage_rate
    }
  }
`

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

const WorryDetail: React.FC<WorryInputProps> = ({ id }) => {
  const { data, loading, error } = useQuery(GET_WORRY, {
    variables: {
      id: Number(id),
    },
  })
  if (loading) return <p>ローディング中です</p>
  if (error) return <p>エラーが発生しています</p>
  return (
    <Wrapper>
      {data.worry && (
        <div>
          <Lead>心配内容</Lead>
          <Content>{data.worry.content}</Content>
          <Lead>心配事に対する想定する最小の出来事</Lead>
          <Content>{data.worry.suppose_minimum_events}</Content>
          <Lead>心配事に対する想定する最大の出来事</Lead>
          <Content>{data.worry.suppose_maximum_events}</Content>
          <Lead>実際に発生した出来事</Lead>
          <Content>{data.worry.reality_events}</Content>
          <Lead>実際の出来事は想定した最大の何割だったか？</Lead>
          <Content>{data.worry.damage_rate}</Content>
        </div>
      )}
      <StyledLinkButtonBordered href={`/${id}/edit`}>
        悩みを考え直す
      </StyledLinkButtonBordered>
      <StyledLinkButtonBordered href="/" variant="border">
        悩み一覧へ戻る
      </StyledLinkButtonBordered>
    </Wrapper>
  )
}

export default WorryDetail
