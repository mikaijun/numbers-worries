import { Worry } from "@/type"
import { atom } from "recoil"

// TODO: バックエンド実装ができるまでの仮のデータ
const sessionStorageEffect =
  (key: Worry[]) =>
  ({ setSelf, onSet }: any) => {
    if (typeof window === "undefined") return
    const keyString = key.toString()
    const savedValue = sessionStorage.getItem(keyString)
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue))
    }

    onSet((newValue: any, _: any, isReset: boolean) => {
      isReset
        ? sessionStorage.removeItem(keyString)
        : sessionStorage.setItem(keyString, JSON.stringify(newValue))
    })
  }

export const sessionStorageState = atom({
  key: "numbers-worries",
  default: "",
  effects: [sessionStorageEffect([])],
})
