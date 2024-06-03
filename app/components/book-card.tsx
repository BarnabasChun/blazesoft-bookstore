import { Book } from "@/lib/features/books/booksSlice";
import { Button } from "@headlessui/react";

export interface BookCard {
  book: Book
  onClick(): void;
  onDelete(): void;
}

function BookCard({ book, onClick, onDelete }: BookCard) {
  return (
    <li
      className="rounded shadow-lg bg-white text-left px-6 py-4"
      aria-label={`View details about ${book.name}`}
      onClick={onClick}
    >
      <h2 className="font-bold text-xl">
        {book.name}
      </h2>
      <p className="text-gray-500 text-base">
        {book.category}
      </p>
      <p className="text-gray-700 text-base">
        {Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(book.price)}
      </p>

      <div className="mt-4 flex justify-end">
        <Button
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          Delete
        </Button>
      </div>
    </li>
  );
}

export default BookCard;