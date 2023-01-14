import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Link href={`/${1}`}>詳細へ</Link>
    </div>
  )
}
