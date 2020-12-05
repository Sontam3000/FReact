import React from 'react';
import './card.component.css';

export const Card = props=>(
    <div className="card-container">
        <img src={props.guitar.image} alt="guitar" height="280px;" width="170px"/>
   <h2> {props.guitar.name}
   </h2></div>
   )