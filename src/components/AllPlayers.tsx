import type { Dispatch, SetStateAction } from "react";
import type { Player } from "../types/types";
import PlayerCard from "./PlayerCard";

interface AllPlayersProps {
    players: Player[];
    coins: number;
    setCoins: Dispatch<React.SetStateAction<number>>;
    setSelectedPlayers: Dispatch<SetStateAction<Player[]>>;
    selectedPlayers: Player[];
}

const AllPlayers = ({ players, coins, setCoins, selectedPlayers, setSelectedPlayers }: AllPlayersProps) => {
    console.log(players, 'AllPlayers list')
    return (
        <div className="grid grid-cols-3 gap-4 mt-6">
            {
                players.map((player: Player, ind: number) => {
                    return (
                       <PlayerCard coins={coins} setCoins={setCoins} key={ind} player={player} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}/>

                    )
                })
            }
        </div>
    );
};

export default AllPlayers;