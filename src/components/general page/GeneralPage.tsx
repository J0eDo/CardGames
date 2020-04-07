import React from 'react'
import { useHistory } from 'react-router-dom'
//UI
import './GeneralPage.scss'


export default function GeneralPage() {
    const history = useHistory()
    const newGame = () => {
       history.push('game')
    }

    return (
        <React.Fragment>
            <div className='head-block'>
                <h2>Poker Run</h2>
            </div>
            <div className='game-menu'>
                <h4>Меню</h4>
                <button onClick={newGame}>Новая игра</button>
            </div>
        </React.Fragment>
    )
}
