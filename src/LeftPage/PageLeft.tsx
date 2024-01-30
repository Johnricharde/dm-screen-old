import Page from '../Page';
import Players from "./Players";
import Notes from "./Notes";
import Npcs from "./Npcs";
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
                <button onClick={() => setActiveComponent("Npcs")}>CHARACTERS</button>
                <button onClick={() => setActiveComponent("Monsters")}>MONSTERS</button>
                <button onClick={() => setActiveComponent("Spells")}>SPELLS</button>
                <button onClick={() => setActiveComponent("Rules")}>RULES</button>
            </nav>
            <hr />
            {activeComponent === 'Players' && <Players />}
            {activeComponent === 'Notes' && <Notes />}
            {activeComponent === 'Npcs' && <Npcs />}
            {activeComponent === 'Monsters' && <Monsters />}
            {activeComponent === 'Spells' && <Spells />}
            {activeComponent === 'Rules' && <Rules />}
        </Page>
    )
}

export default PageLeft;