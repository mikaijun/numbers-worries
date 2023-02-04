import { NextPage } from "next"
import { useRouter } from "next/router"

import WorryLayout from "../../components/Layouts/WorryLayout"
import WorryInput from "../../components/organisms/WorriesForm"

const Edit: NextPage = () => {
  const router = useRouter()
  return (
    <WorryLayout>
      <WorryInput id={router.query.id} />
    </WorryLayout>
  )
}

export default Edit
