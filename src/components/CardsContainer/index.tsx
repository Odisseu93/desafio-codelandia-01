import * as C from './styles'

import Card from "./Card";
import { CardAttributes } from './types/CardAttributes';


const CardsContainer = ({ data }:{ data: CardAttributes[] }) => (
  <C.CardsContainer>

    { data.map((card, index: number) => <Card date={card.date} title={card.title} paragraph={card.paragraph} key={index}/>) }    

  </C.CardsContainer>
) 

export default CardsContainer;