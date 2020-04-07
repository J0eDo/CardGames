import React, { useEffect, useState } from 'react'
import { ICard } from '../../interface/card'
import './GameController.scss'
import { useDispatch } from 'react-redux'
import { sumScore } from '../../game rules/CardDeck'


export default function GameController(props: any) {
    let { cards, getCard } = props
    const [playerHand, setPlayerHand] = useState([])
    const [scorePlayer, setScorePlayer] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        setPlayerHand(cards)
        const scores: number[] =
            playerHand.map((card: ICard) => card.score)
                .sort((a, b) => b - a)
        //ace 1 or 11 so we shield them last.
        console.log(scores);
        
        setScorePlayer(
            scores.reduce((sum: number, elem: number) => sumScore(elem, sum, dispatch), 0))
        if (scorePlayer < 21) {
            dispatch({ type: "MESSAGE_GAME", message: `Ваши очки:${scorePlayer}` })
        }
        return () => {
        }
    }, [cards, playerHand, dispatch, scorePlayer])

    useEffect(() => {

        return () => {
        }
    }, [])

    return (
        <React.Fragment>
            <div className="gc-action-area">
                <button>Стоп</button>
            </div>
            <div className="gc-card">
                {playerHand.map((card: ICard) => (
                    <img src={window.location.origin + "/Deck/" + card.picture}
                        alt={card.picture}
                        className="player-card"
                        key={card.picture}
                    />
                ))}
            </div>
            <div className="gc-action-area">
                <button onClick={getCard} disabled={scorePlayer >= 21}>Еще</button>
            </div>
        </React.Fragment>
    )
}
