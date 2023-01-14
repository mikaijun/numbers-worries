import React from "react"
import { useCallback } from "react"
import type { NextPage } from "next"
import Link from "next/link"
import { useRecoilState } from "recoil"
import { sessionStorageState } from "../states/session-storage"

const Page: NextPage = () => {
  const [localValue, setLocalValue] = useRecoilState(sessionStorageState)
  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLocalValue(e.target.value)
    },
    [setLocalValue],
  )

  return (
    <div>
      <div>
        <span>LocalStorage Input</span>
        <div>
          <input type="text" value={localValue} onChange={handleOnChange} />
        </div>
        <br />
      </div>
    </div>
  )
}
export default Page
