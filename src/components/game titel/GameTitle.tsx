import React from 'react'
import { useSelector } from 'react-redux'
import './GameTitle.scss'



export default function GameTitle() {
    const title = useSelector((state: any) => state.theGame.message)
    return (
        <div className="game-title">
            {title}
        </div>
    )
}
