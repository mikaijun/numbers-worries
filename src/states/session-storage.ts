import { useCallback } from "react"
import { atom, useRecoilState } from "recoil"

export default function New() {
  // TODO: バックエンド実装ができるまでの仮のデータ
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
    effects: [sessionStorageEffect("[]")],
  })

  const [localValue, setLocalValue] = useRecoilState(sessionStorageState)
  const default2 = JSON.parse(localValue)
}
