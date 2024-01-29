import Page from './Page';
import Players from "./Players";
import Notes from "./Notes";
import Npc from "./Npc";
import Monsters from "./Monsters";
import Spells from "./Spells";
import Rules from "./Rules";
import React, { useState } from "react";

function PageLeft() {

    const [activeComponent, setActiveComponent] = useState("Players");

    return (
        <Page>
            <nav>
                <button onClick={() => setActiveComponent("Players")}>PLAYERS</button>
                <button onClick={() => setActiveComponent("Notes")}>NOTES</button>
                <button onClick={() => setActiveComponent("Npc")}>NPC</button>
                <button onClick={() => setActiveComponent("Monsters")}>MONSTERS</button>
                <button onClick={() => setActiveComponent("Spells")}>SPELLS</button>
                <button onClick={() => setActiveComponent("Rules")}>RULES</button>
            </nav>
            <hr />
            {activeComponent === 'Players' && <Players />}
            {activeComponent === 'Notes' && <Notes />}
            {activeComponent === 'Npc' && <Npc />}
            {activeComponent === 'Monsters' && <Monsters />}
            {activeComponent === 'Spells' && <Spells />}
            {activeComponent === 'Rules' && <Rules />}
            <hr />
        </Page>
    )
}

export default PageLeft;