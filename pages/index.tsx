import { gql, useQuery } from "@apollo/client"

import type { NextPage } from "next"

const GET_WORRIES = gql`
  query GetUsers {
    worries {
      content
      suppose_minimum_events
      reality_events
    }
  }
`

const Page: NextPage = () => {
  // const { worries } = useSessionStorage()
  const { data, loading, error } = useQuery(GET_WORRIES)
  if (loading) return <p>ローディング中です</p>
  if (error) return <p>エラーが発生しています</p>

  const { worries } = data

  return (
    <div>
      <main>
        <h1>心配事</h1>
        {worries.map(
          (user: {
            id: number
            content: string
            suppose_minimum_events: string
            reality_events: string
          }) => (
            <div key={user.id}>
              <div>心配内容: {user.content}</div>
              <div>最小の想定内容: {user.suppose_minimum_events}</div>
              <div>実際の出来事: {user.reality_events}</div>
            </div>
          ),
        )}
      </main>
      {/* {worries.map((worry, index) => (
        <div key={index}>
          <Link href={`/${worry.id}`}>
            トップへ
            <span>心配事:</span>
            <span>{worry.worries_content}</span>
            <span>心配事割合:</span>
            <span>{worry.ratio}</span>
          </Link>
        </div>
      ))} */}
    </div>
  )
}
export default Page
