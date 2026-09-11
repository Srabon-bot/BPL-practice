import type { Dispatch, SetStateAction } from "react";
import type { Player } from "../types/types";

interface selectedProps {
    setSelectedPlayers: Dispatch<SetStateAction<Player[]>>;
    selectedPlayers: Player[];
}

const Selected = ({selectedPlayers, setSelectedPlayers}:selectedProps) => {
    console.log(selectedPlayers, setSelectedPlayers);
    return (
        <div>
            <h2>Selected</h2>
        </div>
    );
};

export default Selected;