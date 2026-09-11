import { use, useState, type Dispatch } from 'react';
import type { Player } from '../types/types';
import AllPlayers from './AllPlayers';
import Selected from './Selected';

interface PlayersProps {
    playersPromise: Promise<Player[]>;
    coins: number;
    setCoins: Dispatch<React.SetStateAction<number>>;
}

const Players = ({ playersPromise, coins, setCoins }: PlayersProps) => {
const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);

    const [buttonType, setButtonType] = useState("showAll");
    const players = use(playersPromise);

    const handleButton = (type) => {
        setButtonType(type);
    }

    return (
        <div className='container mx-auto'>
            <div className='flex justify-between gap-4 mb-2'>
                <h2 className='font-bold text-xl'>
                    {buttonType === "showAll" ? "All players" : "Selected players"}
                </h2>
                <div>
                    <button onClick={() => handleButton("showAll")} 
                    className={`btn ${buttonType === "showAll" ? `btn-success` : ``} rounded-r-none`}>Show All</button>
                    <button onClick={() => handleButton("selected")}
                     className={`btn ${buttonType === "selected" ? `btn-success` : ``} rounded-l-none`}>Selected</button>
                </div>
            </div>

            <div>
                {buttonType === "showAll" ? <AllPlayers coins={coins} setCoins={setCoins} players={players} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}/> : 
                <Selected selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}/>}

            </div>
        </div>
    );
};

export default Players;