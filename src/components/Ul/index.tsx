type UlProps = {
  childrenList: React.ReactNode[]
} & React.ComponentProps<'ul'>

const Ul = ({ childrenList, ...rest }: UlProps) => (
	<ul {...rest}>
		{childrenList.map((children, index: number) => <li key={index}>{children}</li>)}
	</ul>
)

export default Ul