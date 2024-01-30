import Npc from "./Npc"

function Npcs() {
    return (
        <div>
            <input type="text" placeholder="Search.."></input>
            <hr />
            <h2><span className="font-bold">Non-Player Characters:</span> </h2>
            <Npc />
            <Npc />
            <Npc />
        </div>
    )
}

export default Npcs;