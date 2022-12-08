import React from "react";

import { useContextGlobal } from "../Components/utils/global.context";


const Favs = () => {
  const { theme,  statefavs} = useContextGlobal();
    
  

    return (
      <div style={{ background: theme.background, color:theme.color}}> 
      <h1>Dentists Favs</h1>
		<div className="card-grid" >
     
			{ 
				<div >
				  
          { statefavs.map((odontologo) => (
				<div className="card" key={odontologo.id}>
					<h2>{odontologo.name}</h2>
					<h3>{odontologo.username}</h3>
					<h3 >{odontologo.id}</h3>
						
				</div>
			))}

				</div>
			}
		</div>
    </div>
  );
      
    
  
};

export default Favs;
