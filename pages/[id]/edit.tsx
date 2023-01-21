import { NextPage } from "next"
import Link from "next/link"
import { useRouter } from "next/router"

import WorryInput from "../../components/organisms/WorryInput"

const Edit: NextPage = () => {
  const router = useRouter()
  return (
    <div>
      <p>{router.query.id}</p>
      <WorryInput id={Number(router.query.id)} />
      <Link href="/">トップへ</Link>
      <Link href={`/${router.query.id}/`}>詳細へ</Link>
    </div>
  )
}

export default Edit
