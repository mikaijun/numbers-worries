import { gql, useQuery } from "@apollo/client"
import { NextPage } from "next"
import Link from "next/link"
import { useRouter } from "next/router"

const GET_WORRY = gql`
  query GetUsers($id: ID!) {
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

const Detail: NextPage = () => {
  const router = useRouter()
  const { data, loading, error } = useQuery(GET_WORRY, {
    variables: {
      id: Number(router.query.id),
    },
  })
  if (loading) return <p>ローディング中です</p>
  if (error) return <p>エラーが発生しています</p>
  return (
    <div>
      {data.worry && (
        <div>
          <span>心配内容</span>
          <p>{data.worry?.worries_content}</p>
          <span>心配事に対する想定する最小の出来事</span>
          <p>{data.worry?.minimum_worries}</p>
          <span>心配事に対する想定する最大の出来事</span>
          <p>{data.worry?.maximum_worries}</p>
          <span>実際に発生した出来事</span>
          <p>{data.worry?.real_event_content}</p>
          <span>実際の出来事は想定した最大の何割だったか？</span>
          <p>{data.worry?.ratio}</p>
        </div>
      )}

      <Link href="/">トップへ</Link>
      <Link href={`/${router.query.id}/edit`}>編集へ</Link>
    </div>
  )
}

export default Detail
