import * as C from './styles'

type ParagraphProps = {
  children: React.ReactNode
}

const Paragraph = ({ children }: ParagraphProps) => (
	<C.Paragraph>{children}</C.Paragraph>
)

export default Paragraph