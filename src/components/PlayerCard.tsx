import React from 'react';
import type { Player } from '../types/types';
import { IoIosFootball } from 'react-icons/io';

const PlayerCard = ({player}:{player:Player}) => {
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <img src={player.playerImg} alt={player.alt} />
            </figure>
            <div className="card-body">
                <h2 className="card-title"><IoIosFootball />{player.playerName}</h2>
                <p>{player.nationality}</p>
                <div className="divider"></div>
                <p>{player.origin}</p>
                <p>{player.club}</p>
                <p>{player.positions}</p>
                <p>{player.marketValue}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Add to team</button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;