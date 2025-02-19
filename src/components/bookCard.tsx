import { Book } from "../models/book";
export default function BookCard({ book }: { book: Book }) {
  return (
    <div className="flex flex-col gap-4 w-96  bg-white  rounded-lg p-4 text-center items-center">
      <div className="flex justify-center">
        <img
          src={book.cover}
          alt={book.title}
          className="w-48 h-48 object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-bold">{book.title}</h1>
        <h2 className="text-sm font-semibold">{book.releaseDate}</h2>
        <p className="text-sm">{book.description}</p>
        <p>Pages: {book.pages}</p>
      </div>
    </div>
  );
}
