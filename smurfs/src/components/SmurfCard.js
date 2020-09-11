import React from 'react';

export default function SmurfCard(props){
    const smurf = props.smurf
    return(
        <div>
            <h3>Smurf Info</h3>
            <h4>Name: {smurf.name}</h4>
            <h4>Age: {smurf.age}</h4>
            <h4>Height: {smurf.height}</h4>
        </div>
    )
}