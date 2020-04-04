import React from 'react';
import '../card/card.styles.css'



export const Card = (props) =>{ //this was sent as a prop from the CardList component which is the parent component of Card
    
 return <div className='card-container'>
            <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="monster"/> {/*using the monser/user id as a parameter to get different pictures */}
            <h3>{props.monster.name}</h3>  {/*monster.user names */} 
            <p>{props.monster.email}</p>  {/*monster.user email */} 
        </div>
    
   
   
        
    
} 