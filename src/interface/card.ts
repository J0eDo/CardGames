//seniority "card 2" - "card ace"
export type TCardSeniority = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14
export type TSuit = "clubs" | "diamonds" | "hearts" | "spades"

export interface ICard {
    score: number,
    picture: string,
    seniority: TCardSeniority,
    suit: TSuit,
}