'use client';

import { Button } from "@headlessui/react";
import BookCard from "./book-card";
import { useAppSelector } from "@/lib/hooks";
import { selectBooksList } from "@/lib/features/books/booksSlice";

function BooksPage() {
  const booksList = useAppSelector(selectBooksList);

  return (
    <main className="min-h-screen p-8">
      <div className="mb-4 flex justify-end">
        <Button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => { }}
        >
          Add a Book
        </Button>
      </div>

      <section>
        {
          booksList.length
            ? (
              <ul className="grid grid-flow-row-dense grid-cols-4 gap-4">
                {booksList.map(book => (
                  <BookCard
                    key={book.id}
                    book={book}
                    onClick={() => { }}
                    onDelete={() => { }}
                  />
                ))}
              </ul>
            )
            : <p>No books have been added yet.</p>
        }
      </section>
    </main>
  );
}

export default BooksPage;