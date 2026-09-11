import { useState, type Dispatch, type SetStateAction } from 'react';
import type { Player } from '../types/types';
import { IoIosFootball } from 'react-icons/io';
import { FaDollarSign } from 'react-icons/fa';
import { toast } from 'react-toastify';

interface PlayerCardProps {
    player: Player;
    coins: number;
    setCoins: Dispatch<React.SetStateAction<number>>;
    setSelectedPlayers: Dispatch<SetStateAction<Player[]>>;
    selectedPlayers: Player[];
}

const PlayerCard = ({ player, coins, setCoins, setSelectedPlayers }: PlayerCardProps) => {
    // ^ note: selectedPlayers itself isn't even needed as a prop anymore
    const [isAddToTeam, setIsAddToTeam] = useState(false);

    const handlePlayers = () => {
        if (coins >= player.marketValue) {
            setIsAddToTeam(true);
            setCoins((prevCoins) => prevCoins - player.marketValue);
            toast.success(`${player.playerName} added to the team`);

            setSelectedPlayers((prev) => [...(prev ?? []), player]);
        } else {
            toast.error("Not enough coins to add this player");
        }
    };


    return (
        <div className="group w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            {/* Image */}
            <figure className="relative h-56 w-full overflow-hidden bg-slate-100">
                <img
                    src={player.playerImg}
                    alt={player.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-slate-900/75 px-3 py-1 text-xs font-semibold text-white shadow-sm backdrop-blur-md whitespace-nowrap">
                    <FaDollarSign className="shrink-0 text-emerald-400" />
                    <span>{player.marketValue}</span>
                </span>
            </figure>

            {/* Body */}
            <div className="p-5">
                <div className="flex items-center gap-2">
                    <IoIosFootball className="text-emerald-600 text-lg shrink-0" />
                    <h2 className="text-lg font-bold text-slate-900 truncate">
                        {player.playerName}
                    </h2>
                </div>
                <p className="mt-1 text-sm text-slate-500">{player.nationality}</p>

                <div className="my-4 h-px bg-slate-200" />

                <dl className="space-y-2 text-sm">
                    <div className="flex justify-between">
                        <dt className="text-slate-400">Origin</dt>
                        <dd className="font-medium text-slate-700">{player.origin}</dd>
                    </div>
                    <div className="flex justify-between">
                        <dt className="text-slate-400">Club</dt>
                        <dd className="font-medium text-slate-700">{player.club}</dd>
                    </div>
                    <div className="flex justify-between items-center">
                        <dt className="text-slate-400">Position</dt>
                        <dd className="flex gap-1">
                            {(Array.isArray(player.position)
                                ? player.position
                                : [player.position]
                            ).map((pos) => (
                                <span
                                    key={pos}
                                    className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700"
                                >
                                    {pos}
                                </span>
                            ))}
                        </dd>
                    </div>
                </dl>

                <button
                    onClick={() => { handlePlayers(); }}
                    className={`mt-5 w-full rounded-xl
                     bg-emerald-600 py-2.5 text-sm font-semibold
                     text-white transition-colors
                     hover:bg-emerald-700 active:bg-emerald-800
                     disabled:bg-gray-400 disabled:hover:bg-gray-400
                        disabled:cursor-not-allowed disabled:opacity-70`}
                    disabled={isAddToTeam}
                >
                    {isAddToTeam ? "Added to team" : "Add to team"}
                </button>
            </div>
        </div>
    );
};

export default PlayerCard;