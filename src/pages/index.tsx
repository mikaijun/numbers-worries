import React from "react"
import type { NextPage } from "next"
import Link from "next/link"
import { useSessionStorage } from "@/hooks/useSessionStorage"

const Page: NextPage = () => {
  const { worries } = useSessionStorage()

  return (
    <div>
      {worries.map((worry, index) => (
        <div key={index}>
          <Link href={`/${worry.id}`}>
            トップへ
            <span>心配事:</span>
            <span>{worry.worries_content}</span>
            <span>心配事割合:</span>
            <span>{worry.ratio}</span>
          </Link>
        </div>
      ))}
    </div>
  )
}
export default Page
