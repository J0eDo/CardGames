import { ICard, TCardSeniority, TSuit } from '../interface/card'

const suits: TSuit[] = ['clubs', 'diamonds', 'hearts', 'spades']
const senioritys: TCardSeniority[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]


class PokerDeck {
    cards: ICard[];
    constructor() {
        this.cards = []
        this.HangOutTheDeck()
    }
    HangOutTheDeck = (): void => {
        const pokerDeck: ICard[] = []
        senioritys.forEach(seniority => {
            suits.forEach(suit => {
                const picture = `${seniority}_of_${suit}.png`
                let score = +seniority
                if (seniority > 10 && seniority !== 14) {
                    //J Q K case
                    score = 10
                }
                else if (seniority === 14) {
                    //ACE case
                    score = 0
                }
                pokerDeck.push({
                    score,
                    picture,
                    seniority,
                    suit
                })
            })
        })
        pokerDeck.sort(() => {
            return Math.random() - 0.5;
        });
        this.cards = pokerDeck
    }
    getCard = (targetHand: any[]): void => {
        const card = this.cards.shift()
        targetHand.push(card)
    }
}
export const sumScore = (elem: number, current: number, dispatch: any): number => {
    let sum = 0
    if (elem === 0) {
        //Ace case
        if (current + 11 > 21) {
            sum = current + 1
        } else {
            sum = current + 11
        }
    } else {
        sum = current + elem
    }

    if (sum > 21) {
        dispatch({ type: "MESSAGE_GAME", message: `ПЕРЕБОР:${sum}` })
    } else if (sum === 21) {
        dispatch({ type: "MESSAGE_GAME", message: `21!` })
    }
    return sum
}

export default new PokerDeck()