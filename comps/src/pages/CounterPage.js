import Button from "../components/button";
import useCounterAndLog from "../hooks/use-counter";


function CounterPage ({ initialCount }) {
    
const { count, increment} = useCounterAndLog(initialCount);
    return <div>
        <h1>Count is {count}</h1>
        <Button onClick={increment}>
            Increment
        </Button>
    </div>
}

export default CounterPage;