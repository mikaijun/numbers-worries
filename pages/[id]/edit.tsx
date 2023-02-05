import { gql, useQuery } from "@apollo/client"
import { NextPage } from "next"
import { useRouter } from "next/router"

import WorryLayout from "../../components/Layouts/WorryLayout"
import WorryForm from "../../components/organisms/WorryForm"
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

const Edit: NextPage = () => {
  const router = useRouter()
  const { data, loading, error } = useQuery<WorryQuery>(GET_WORRY, {
    variables: {
      id: Number(router.query.id),
    },
  })
  return <WorryLayout>{data && <WorryForm worry={data.worry} />}</WorryLayout>
}

export default Edit
