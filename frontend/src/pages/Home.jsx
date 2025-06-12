import React, {useEffect, useState} from "react";
import './Home.css'
import Card from "../components/card";
import ApiService from "../services/api.service"

export default function Home() {
    const [cards, setCards] = useState(null)
    const [mode, setMode] = useState('loading')

    useEffect(() => {
        ApiService.getCards().then(cards => {
            console.log(cards)
            setCards(cards)
            setMode('cards')
        })

    }, []);

    function changeMode(str) {
        setMode(str)
    }

    return (
        <div className='home-wrapper'>
            <menu className='home-menu-container'>
                <button onClick={() => changeMode('cards')}>Cards</button>
                <button onClick={() => changeMode('calendar')}>Calendar</button>
            </menu>

            {mode === 'loading' ? <div className='home-cards-container'>
                LOADING
            </div> : null}

            {mode === 'cards' ? <div className='home-cards-container'>
                Card Container

                {cards && cards.map(card => (
                    <Card key={card.id} card={card}></Card>
                ))}
            </div> : null}

            {mode === 'calendar' ? <div className='home-calendar-container'>
                Calendar Container
            </div> : null}
        </div>
    )
}