import { NextPage } from "next"

import WorryLayout from "../components/Layouts/WorryLayout"
import WorryForm from "../components/organisms/WorryForm"

const New: NextPage = () => {
  return (
    <WorryLayout>
      <WorryForm />
    </WorryLayout>
  )
}

export default New
