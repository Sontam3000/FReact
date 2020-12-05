import React from 'react';
import {Card} from '../card/card.component';

export const CardList= props=>(
   
        <div className="card-list"> 
        {props.guitars.map(guitar=>(
            <Card key={guitar.id} guitar={guitar}/>
            ))} </div>
    
);