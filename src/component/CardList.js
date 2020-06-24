import React from 'react';
import Card from './Card';

const CardList = ({pokemonData}) => {
    return(
        <div>
            {
                pokemonData.map((pokemon,i) => {
                    return(
                        <Card
                            key  = {i}
                            id   = {pokemonData[i].id}
                            name = {pokemonData[i].name}
                            height = {pokemonData[i].height}
                            weight = {pokemonData[i].weight}
                        />
                    )
                })
            }
        </div>
    )
}

export default CardList;