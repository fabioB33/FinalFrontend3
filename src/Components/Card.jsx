import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";




const Card = ({ name, username, id, odontologos }) => {
	const { theme, dispatchFavs } = useContextGlobal();
  
	const addFav = (odontologo)=>{
	dispatchFavs({type:'ADD_FAV', payload:odontologo})
  }

  return (
		<>
			{odontologos.map((odontologo) => (
				<div className="card" key={odontologo.id}>
					<h2>{odontologo.name}</h2>
					<h3>{odontologo.username}</h3>
					<h3 >{odontologo.id}</h3>
					<Link to={`/detail/${odontologo.id}`} style={{ background: theme.background, color:theme.color}}>Detail </Link>
					
					<button onClick={()=>addFav(odontologo)} className="favButton" style={{ background: theme.background, color:theme.color}}>
						Add fav
					</button>
				</div>
			))}
		</>
  );
};

export default Card;


