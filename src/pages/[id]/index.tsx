import { NextPage } from "next"
import Link from "next/link"
import { useRouter } from "next/router"

import { useFindWorry } from "@/src/hooks/useFindWorry"

const Detail: NextPage = () => {
  const router = useRouter()
  const { worry } = useFindWorry(Number(router.query.id))
  return (
    <div>
      {worry && (
        <div>
          <span>心配内容</span>
          <p>{worry?.worries_content}</p>
          <span>心配事に対する想定する最小の出来事</span>
          <p>{worry?.minimum_worries}</p>
          <span>心配事に対する想定する最大の出来事</span>
          <p>{worry?.maximum_worries}</p>
          <span>実際に発生した出来事</span>
          <p>{worry?.real_event_content}</p>
          <span>実際の出来事は想定した最大の何割だったか？</span>
          <p>{worry?.ratio}</p>
        </div>
      )}
      {!worry && <div>該当の心配事は存在しません</div>}

      <Link href="/">トップへ</Link>
      <Link href={`/${router.query.id}/edit`}>編集へ</Link>
    </div>
  )
}

export default Detail
