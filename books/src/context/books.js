import { createContext, useState } from "react";

const BookContext = createContext();

function Provider({children}) {
    // const [count, setCount] = useState(5);
    // const valueToShare = {
    //     count,
    //     incrementCount: () => {
    //         setCount(count + 1)
    //     }
    // };

    return <BookContext.Provider value={{}}>
        {children}
    </BookContext.Provider>
}

export default BookContext;
export {Provider};