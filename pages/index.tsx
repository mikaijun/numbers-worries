import { gql, useQuery } from "@apollo/client"
import Link from "next/link"

import type { NextPage } from "next"

const GET_WORRIES = gql`
  query GetUsers {
    worries {
      id
      content
      suppose_minimum_events
      reality_events
      damage_rate
    }
  }
`

const Page: NextPage = () => {
  const { data, loading, error } = useQuery(GET_WORRIES)
  if (loading) return <p>ローディング中です</p>
  if (error) return <p>エラーが発生しています</p>
  const { worries } = data
  return (
    <div>
      {worries.map((worry: any, index: number) => (
        <div key={index}>
          <Link href={`/${worry.id}`}>
            トップへ
            <span>心配事:</span>
            <span>{worry.content}</span>
            <span>心配事割合:</span>
            <span>{worry.damage_rate}</span>
          </Link>
        </div>
      ))}
    </div>
  )
}
export default Page
