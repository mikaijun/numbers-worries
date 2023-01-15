import { useCallback, useEffect, useState } from "react"
import { atom, useRecoilState } from "recoil"

export const useSessionStorage = (current: any) => {
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

  const [values, setValues] = useRecoilState(sessionStorageState)
  const [parse, setParse] = useState([])

  const handleSave = useCallback(() => {
    setValues(JSON.stringify([...parse, current]))
  }, [setValues, parse, current])

  useEffect(() => {
    setParse(JSON.parse(values))
  }, [setParse, values])
  return {
    parse,
    handleSave,
  }
}
