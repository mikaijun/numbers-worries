import { useMemo } from "react"

import { useSessionStorage } from "@/src/hooks/useSessionStorage"

// TODO: バックエンド未実装のため、代用でget処理をfindで代用する
export const useFindWorry = (id?: number) => {
  const { worries } = useSessionStorage()
  const worry = useMemo(() => {
    if (!id) return undefined
    return worries.find((worry) => worry.id === id)
  }, [worries, id])

  return {
    worry,
  }
}
