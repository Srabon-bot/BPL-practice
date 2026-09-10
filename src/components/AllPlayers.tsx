import PlayerCard from "./PlayerCard";

const AllPlayers = ({ players }) => {
    console.log(players, 'AllPlayers list')
    return (
        <div className="grid grid-cols-3 gap-4 mt-6">
            {
                players.map(player => {
                    return (
                       <PlayerCard player={player}/>

                    )
                })
            }
        </div>
    );
};

export default AllPlayers;