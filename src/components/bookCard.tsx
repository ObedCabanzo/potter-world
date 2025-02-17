import { Book } from "../models/book";
export default function BookCard({ book }: { book: Book }) {
  return (
    <div className="flex flex-col gap-4 w-64  bg-white shadow-lg rounded-lg p-4">
      <div className="flex justify-center">
        <img
          src={book.cover}
          alt={book.title}
          className="w-48 h-48 object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-bold">{book.title}</h1>
        <h2 className="text-base font-semibold">{book.originalTitle}</h2>
        <h2 className="text-sm font-semibold">{book.releaseDate}</h2>
        <p className="text-sm">{book.description}</p>
        <p>Pages: {book.pages}</p>
      </div>
    </div>
  );
}
