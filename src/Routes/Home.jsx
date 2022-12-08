import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context';
import '../index.css';




const Home = () => {
  const { odontologos, theme } = useContextGlobal();
  const { name, username, id } = odontologos;



	return (
		<main style={{ background: theme.background, color:theme.color}} >
			<h1>Home</h1>

			<div className="card-grid">
				<Card
					name={name}
					username={username}
					id={id}
					odontologos={odontologos}
				/>
       
			</div>
			
		</main>
  )
}

export default Home