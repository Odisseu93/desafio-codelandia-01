import * as C from './styles'

type SmallProps = {
  children: React.ReactNode
}

const Small = ({ children }: SmallProps) => (
	<C.Small>{children}</C.Small>
)

export default Small