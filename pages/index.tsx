import WorryList from "@/components/organisms/WorryList"

import WorryLayout from "../components/Layouts/WorryLayout"

import type { NextPage } from "next"

const Page: NextPage = () => {
  return (
    <WorryLayout>
      <WorryList />
    </WorryLayout>
  )
}
export default Page
