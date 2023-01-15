import { useCallback, useEffect, useState } from "react"
import { atom, useRecoilState } from "recoil"

import { Worry } from "@/type"

// TODO: バックエンド未実装のため、代用でsessionStorageに保存している
export const useSessionStorage = (targetWorry?: Worry) => {
  const sessionStorageEffect =
    (key: string) =>
    ({ setSelf, onSet }: any) => {
      if (typeof window === "undefined") return
      const savedValue = sessionStorage.getItem(key)
      if (savedValue != null) {
        setSelf(JSON.parse(savedValue))
      }

      onSet((newValue: any, _: any, isReset: boolean) => {
        isReset
          ? sessionStorage.removeItem(key)
          : sessionStorage.setItem(key, JSON.stringify(newValue))
      })
    }

  const sessionStorageState = atom({
    key: "numbers-worries",
    default: "[]",
    effects: [sessionStorageEffect("numbers-worries")],
  })

  const [jsonValues, setJsonValues] = useRecoilState(sessionStorageState)
  const [worries, setWorries] = useState<Worry[]>([])

  const handleCreateWorry = useCallback(() => {
    if (targetWorry?.id) {
      const updateWorry = worries.map((worry) => {
        return worry.id === targetWorry.id ? targetWorry : worry
      })
      setJsonValues(JSON.stringify(updateWorry))
    } else {
      const postWorry = {
        id: worries.length + 1,
        worries_content: targetWorry?.worries_content,
        minimum_worries: targetWorry?.minimum_worries,
        maximum_worries: targetWorry?.maximum_worries,
        real_event_content: targetWorry?.real_event_content,
        ratio: targetWorry?.ratio,
      }
      setJsonValues(JSON.stringify([...worries, postWorry]))
    }
  }, [setJsonValues, worries, targetWorry])

  useEffect(() => {
    setWorries(JSON.parse(jsonValues))
  }, [setWorries, jsonValues])

  return {
    worries,
    handleCreateWorry,
  }
}
