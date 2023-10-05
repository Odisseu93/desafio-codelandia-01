import * as C from './styles'

type TitleProps = {
  children: React.ReactNode
}

const Title = ({ children }: TitleProps) => (
  <C.Title>{children}</C.Title>
)

export default Title;