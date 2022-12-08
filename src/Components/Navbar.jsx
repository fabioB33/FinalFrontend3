import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context';



const Navbar = () => {
	const { changeTheme, theme } = useContextGlobal();

  return (
  	<nav style={{ background: theme.background, color:theme.color}} >
			<Link to="/" style={{ background: theme.background, color:theme.color}}>Home </Link>
			<Link to="/contact" style={{ background: theme.background, color:theme.color}}>Contact </Link>
			<Link to="/favs" style={{ background: theme.background, color:theme.color}}> Favs </Link>

			<button onClick={changeTheme}
        
        >Change Theme</button>
		</nav>
  )
}

export default Navbar