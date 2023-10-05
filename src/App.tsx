import { useLayoutEffect, useState } from 'react'

import Header from './components/Header'
import CardsContainer from './components/CardsContainer'
import Footer from './components/Footer'

import { parseDate } from './utils/parseDate'

import { CardAttributes } from './components/CardsContainer/types/CardAttributes'

const App = () => {
	const [cards, setCards] = useState<CardAttributes[] | null>(null);

const getData = async () => {
	const { cards } = await (await fetch('assets/mock/cards.json')).json()
	
	if(cards && cards.length > 0 ) {
		setCards(cards.map((card:CardAttributes)  => ({...card, date: parseDate(card.date)})))
	}
}

	useLayoutEffect(()=>{
		getData()
	},[])

	return (
		<>
			<Header />
			{cards && <CardsContainer data={cards}/>}
			<Footer/>
		</>
	)
}

export default App
