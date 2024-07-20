import Button from "../components/button";
import { useReducer } from "react";
import Panel from "../components/Panel";



const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                count: state.count + 1
            };
        case 'decrement':
            return {
                ...state,
                count: state.count - 1
            };
        case 'change-value-to-add':
            return {
                ...state,
                valueToAdd: action.payload
            };
        case 'add-value':
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd: 0
            };
        default:
            return state;
    }
};

function CounterPage({ initialCount }) {
    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0
    });
    
    const increment = () => {
        dispatch({ type: 'increment' });
    };

    const decrement = () => {
        dispatch({ type: 'decrement' });
    };

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        dispatch({
            type: 'change-value-to-add',
            payload: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({ type: 'add-value' });
    };

    return (
        <Panel className="p-3">
            <h1 className="text-lg">Count is {state.count}</h1>
            <div className="flex flex-row">
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input 
                    value={state.valueToAdd || ''}
                    onChange={handleChange}
                    type="number" 
                    className="p-1 m-3 bg-gray-50 border border-gray-300"
                />
                <Button type="submit">Add it!</Button>
            </form>
        </Panel>
    );
}

export default CounterPage;
