import Link from "next/link"
import { useRouter } from "next/router"

export default function Edit() {
  const router = useRouter()
  console.log(router)
  return (
    <div>
      <p>{router.query.id}</p>
      <Link href="/">トップへ</Link>
      <Link href={`/${router.query.id}/`}>詳細へ</Link>
    </div>
  )
}
