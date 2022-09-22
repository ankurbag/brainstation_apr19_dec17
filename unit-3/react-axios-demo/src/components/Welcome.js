import RandomRecipe from "./RandomRecipe";

function Welcome() {
    return (
        <main>
            <h1>Seafood Selector 9001</h1>
            <p>Please choose a recipe from the sidebar.</p>
            <p>Or, click the button for a random recipe.</p>
            <RandomRecipe />
        </main>
    );
}

export default Welcome;
