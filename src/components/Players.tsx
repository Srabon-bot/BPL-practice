import { use } from 'react';
import type { Player } from '../types/types';
import AllPlayers from './AllPlayers';

interface PlayersProps {
    playersPromise: Promise<Player[]>
}

const Players = ({ playersPromise }: PlayersProps) => {
    const players = use(playersPromise);
    console.log(players);
    return (
        <div className='container mx-auto'>
            <div className='flex justify-between gap-4 mb-2'>
                <h2 className='font-bold text-xl'>
                    All Players
                </h2>
                <div>
                    <button className="btn btn-success">Show All</button>
                    <button className="btn">Selected</button>
                </div>
            </div>

            <div>
                <AllPlayers players={players} />
            </div>
        </div>
    );
};

export default Players;