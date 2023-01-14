import Link from "next/link"
import { useRouter } from "next/router"

export default function Detail() {
  const router = useRouter()
  return (
    <div>
      <p>{router.query.id}</p>
      <Link href="/">トップへ</Link>
      <Link href={`/${router.query.id}/edit`}>編集へ</Link>
    </div>
  )
}
