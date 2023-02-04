import { NextPage } from "next"
import { useRouter } from "next/router"

import WorryLayout from "../../components/Layouts/WorryLayout"
import WorryForm from "../../components/organisms/WorryForm"

const Edit: NextPage = () => {
  const router = useRouter()
  return (
    <WorryLayout>
      <WorryForm id={Number(router.query.id)} />
    </WorryLayout>
  )
}

export default Edit
