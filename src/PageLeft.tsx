import Page from './Page';
import Players from "./Players";

function PageLeft() {
    return (
        <Page>
            <nav>
                <button>PLAYERS</button>
                <button>NOTES</button>
                <button>NPC</button>
                <button>MONSTERS</button>
                <button>SPELLS</button>
                <button>RULES</button>
            </nav>
            <hr />
            <Players />
        </Page>
    )
}

export default PageLeft;