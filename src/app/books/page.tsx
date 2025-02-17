import { Metadata } from "next";
import { Book } from "../../models/book";
import BookCard from "../../components/bookCard";
import { bookService } from "../../lib/api/apiServices";

export const metadata: Metadata = {
  title: {
    default: "Books",
    template: "%s - Books",
  },
  description: "Explore the books of Hogwarts",
};

export default async function Page() {
  const books: Book[] | undefined = await bookService
    .getAll()
    .catch((error) => undefined);

  return (
    <div className="flex flex-col gap-8 py-8 h-full w-full items-center justify-center ">
      <h1 className="text-xl font-bold">Books</h1>

      {books &&
        books.map((book) => (
          <BookCard book={book} key={`card-${book.index}`} />
        ))}
      {!books && (
        <div className="flex flex-col items-center ">
        <h1 className="text-xl font-bold">Something happened!!!</h1>
        <h1 className="text-xl font-bold">No books found</h1>
        <h2 className="text-lg font-semibold mt-2">Please, come back later</h2>
      </div>
      )}
    </div>
  );
}
