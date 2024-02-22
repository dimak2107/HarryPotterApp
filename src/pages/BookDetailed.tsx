import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BookCardDetailed from "../ui-components/BookCard/BookCardDetailed";

export default function BookDetailed() {
    const [book, setBook] = useState();
    const { id } = useParams();

    async function getBookById(bookID: string) {
        try {
            const response = await fetch(`https://api.potterdb.com/v1/books/${bookID}`);

            if (!response.ok) {
                throw new Error(`Could not fetch url, status: ${response.status}`);
            }

            const data = await response.json();

            setBook(() => data.data);
        } catch (e) {
            return console.log("Here's an error!")
        }
    }

    useEffect(() => {
        id && getBookById(id);
    }, [id])

    return (
        <main className="main__content">
            <article className="main__flex-center">
                {book && <BookCardDetailed book={book} />}
            </article>
        </main>
            )
}