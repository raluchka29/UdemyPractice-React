import Button from "./button";

function App() {
    return <div>
        <div>
            <Button success rounded outline>Click me!</Button>
        </div>
        <div>
            <Button danger outline>Buy now!</Button>
        </div>
        <div>
            <Button warning>See Deal!</Button>
        </div>
        <div>
            <Button secondary outline>Add to wishlist!</Button>
        </div>
        <div>
            <Button primary rounded>Hide ads!</Button>
        </div>
        </div>
}

export default App;