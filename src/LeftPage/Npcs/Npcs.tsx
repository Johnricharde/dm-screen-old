import Npc from "./Npc"

function Npcs() {
    return (
        <div>
            <input type="text" placeholder="Search.."></input>
            <hr />
            <Npc />
            <Npc />
            <Npc />
        </div>
    )
}

export default Npcs;