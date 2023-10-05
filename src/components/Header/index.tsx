import * as C from './styles'

import Nav from '../Nav'
import Ul from '../Ul'
import Input from '../Input'

const likList = [
	{
		name: 'Codelândia',
		src: 'https://discord.gg/tMvbMtGN',
		target: '_blank',
	},
	{
		name: 'blog',
		src: '/',
		target: '_self',
	}
]

const Header = () => (
	<C.Header>
		<Nav>
			<Ul
				childrenList= {
					likList
						.map((link, index: number) => <a key={index} href={link.src} target={link.target}>{link.name}</a>)}
			/>
		</Nav>
		<div className="input-wrapper">
			<Input type='text' placeholder='Pesquisar no blog'/>
		</div>
	</C.Header>
)

export default Header