'use client';
import { useState } from "react";
import { Button } from "@headlessui/react";
import BookCard from "./book-card";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addBook, selectBooksList } from "@/lib/features/books/booksSlice";
import BookActionModal from "./book-action-modal";
import BookForm from "./book-form";

function BooksPage() {
  const booksList = useAppSelector(selectBooksList);
  const dispatch = useAppDispatch();

  const [isAddBookModalOpen, setIsAddBookModalOpen] = useState(false);

  const closeAddBookModal = () => setIsAddBookModalOpen(false);

  return (
    <main className="min-h-screen p-8">
      <div className="mb-4 flex justify-end">
        <Button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setIsAddBookModalOpen(true)}
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

      <BookActionModal
        isOpen={isAddBookModalOpen}
        onClose={closeAddBookModal}
        bookForm={
          <BookForm
            title="Add a Book"
            onSubmit={(book) => {
              dispatch(addBook({ ...book, id: new Date().getTime() }));
              closeAddBookModal();
            }}
          />
        }
      />
    </main>
  );
}

export default BooksPage;