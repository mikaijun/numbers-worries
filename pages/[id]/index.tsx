import { gql, useQuery } from "@apollo/client"
import { NextPage } from "next"
import { useRouter } from "next/router"

import WorryLayout from "../../components/Layouts/WorryLayout"
import WorryDetail from "../../components/organisms/WorryDetail"
import { WorryQuery } from "../../constants/types"

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

const Detail: NextPage = () => {
  const router = useRouter()
  const { data, loading, error } = useQuery<WorryQuery>(GET_WORRY, {
    variables: {
      id: Number(router.query.id),
    },
  })
  if (loading) return <p>ローディング中です</p>
  if (error) return <p>エラーが発生しています</p>
  return <WorryLayout>{data && <WorryDetail worry={data.worry} />}</WorryLayout>
}

export default Detail
