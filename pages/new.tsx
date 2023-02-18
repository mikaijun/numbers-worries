import { NextPage } from "next"

import WorryLayout from "../components/Layouts/WorryLayout"
import WorryForm from "../components/organisms/WorryForm"
const worry = {
  id: undefined,
  content: "",
  suppose_minimum_events: "",
  suppose_maximum_events: "",
  reality_events: "",
  damage_rate: 0,
}
const New: NextPage = () => {
  return (
    <WorryLayout>
      <WorryForm worry={worry} />
    </WorryLayout>
  )
}

export default New
