import { gql, useQuery } from "@apollo/client"

import WorryList from "@/components/organisms/WorryList"

import WorryLayout from "../components/Layouts/WorryLayout"
import { WorriesQuery } from "../constants/types"

import type { NextPage } from "next"

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

const Page: NextPage = () => {
  const { data, loading, error } = useQuery<WorriesQuery>(GET_WORRIES)
  return (
    <WorryLayout>{data && <WorryList worries={data.worries} />}</WorryLayout>
  )
}
export default Page
