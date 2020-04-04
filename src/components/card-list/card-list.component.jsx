import  React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component'

export const CardList = (props) =>{ //this.state is brought in from the parent component App as a 'prop'

    console.log(props)
    return <div className='card-list'> 
        {props.monster.map(monster => (
            <Card key={monster.id} monster={monster}>  </Card> //sending the prop (state object sent from the App) to the child component card
        ))}

    </div>
    
}   