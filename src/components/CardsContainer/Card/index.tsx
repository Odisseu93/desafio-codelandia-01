import * as C from './styles'

import Paragraph from '../../typograpy/Paragraph'
import Small from '../../typograpy/Small'
import Title from '../../typograpy/Title'

import { dateFormat } from '../../../utils/dateFormat'
import Heart from './assets/heart.svg?react'
import { useState } from 'react'

type CardProps = {
	date: Date
	title: string
	paragraph: string
}

const Card = ({ date, title, paragraph }: CardProps) => {
	const [liked, setLiked] = useState<boolean>(false)
 
  const changeReaction = ()=> setLiked(!liked)

	return (
		<C.Card liked={liked}>
			<div className='date-wrapper'>
				<Small>{dateFormat(date)}</Small>

				<Heart  onClick={changeReaction}/>
			</div>

			<Title>{title}</Title>

			<Paragraph>{paragraph}</Paragraph>
		</C.Card>
	)
}

export default Card
