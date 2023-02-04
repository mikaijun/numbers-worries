import { NextPage } from "next"

import WorryLayout from "../components/Layouts/WorryLayout"
import WorryInput from "../components/organisms/WorriesForm"

const New: NextPage = () => {
  return (
    <WorryLayout>
      <WorryInput />
    </WorryLayout>
  )
}

export default New
