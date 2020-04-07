import React, { useEffect, useState } from 'react'
import PlayDeck from '../../game rules/CardDeck'
/* import { ICard } from '../../interface/card' */
//UI
import './Game.scss'
//Component(s)
import GameTitle from '../game titel/GameTitle'
import Playground from '../playground/Playground'
import GameController from '../game contreoller/GameController'

export default function Game() {

    const [deck] = useState(PlayDeck)
    const [playerHand, setPlayerHand] = useState([])

    useEffect(() => {
        
        return () => {
        }
    }, [])

    return (
        <React.Fragment>
            <GameTitle />
            <div className="game-playground">
                <Playground deck={deck} />
            </div>
            <div className="game-controller">
                <GameController cards={playerHand} getCard={
                    () => {
                        PlayDeck.getCard(playerHand)
                        setPlayerHand(JSON.parse(JSON.stringify(playerHand)))
                    }
                } />
            </div>
        </React.Fragment>
    )
}
