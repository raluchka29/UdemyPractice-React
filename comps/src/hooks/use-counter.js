import { useState, useEffect } from 'react';

function useCounterAndLog (initialCount) {
    const [count, setCount] = useState(initialCount);

    useEffect(() => {

    }, [count]);

    const increment = () => {
        setCount(count + 1);
    };

    return {
        count,
        increment,
    };
}

export default useCounterAndLog;