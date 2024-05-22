import BookShow from "./BookShow";
import { useContext } from "react";
import BookContext from "../context/books";

function BookList() {
    const { books } = useContext(BookContext);

    const renderedBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} />;
    });

    return (
        <div className="book-list">
            {/* {count}
            <button onClick={incrementCount}>Click</button> */}
            {renderedBooks}
        </div>
    );
}

export default BookList;
