import styled from "@emotion/styled"
import Link from "next/link"

import { colors } from "../../../constants/colors"
import { WorriesQuery } from "../../../constants/types"

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

const WorryList: React.FC<WorriesQuery> = ({ worries }) => {
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
