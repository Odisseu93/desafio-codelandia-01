type NavProps = {
  children: React.ReactNode
} 

const Nav = ({ children }: NavProps) => (
	<nav>
		{children}
	</nav>
)

export default Nav