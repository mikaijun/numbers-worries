import { gql, useQuery } from "@apollo/client"
import styled from "@emotion/styled"
import Link from "next/link"

import { colors } from "../../../constants/colors"

const GET_WORRIES = gql`
  query GetWorries {
    worries {
      id
      content
      suppose_minimum_events
      reality_events
      damage_rate
    }
  }
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
`

const Header = styled.article`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  color: ${colors.black};
  font-weight: bold;
`

const Item = styled.article`
  background-color: ${colors.white};
  transition: background-color 0.2s ease;
  cursor: pointer;
  border-bottom: solid 1px ${colors.gray};
  margin-bottom: 16px;

  &:hover {
    background-color: ${colors.whiteGreen};
  }
`

const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  padding-bottom: 4px;
`

const Content = styled.p`
  color: ${colors.black};
`

const Rate = styled.p`
  color: ${colors.primary};
  font-weight: bold;
`

const WorryList: React.FC = () => {
  const { data, loading, error } = useQuery(GET_WORRIES)
  if (loading) return <p>ローディング中です</p>
  if (error) return <p>エラーが発生しています</p>
  const { worries } = data
  return (
    <Wrapper>
      <Header>
        <p>悩み事</p>
        <p>困難度</p>
      </Header>
      {worries.map((worry: any, index: number) => (
        <Item key={index}>
          <StyledLink href={`/${worry.id}`}>
            <Content>{worry.content}</Content>
            <Rate>{worry.damage_rate}</Rate>
          </StyledLink>
        </Item>
      ))}
    </Wrapper>
  )
}
export default WorryList
