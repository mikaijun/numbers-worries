export type WorryQuery = {
  worry: {
    content: string
    damage_rate: number
    id?: number
    reality_events: string
    suppose_maximum_events: string
    suppose_minimum_events: string
  }
}

export type WorriesQuery = {
  worries: {
    content: string
    damage_rate: number
    id: number
    reality_events: string
    suppose_maximum_events: string
    suppose_minimum_events: string
  }[]
}
