import WorryInput from "@/components/organisms/worryInput"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Edit() {
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
