import { Book } from "../../../models/book";
import { bookService } from "../../../lib/api/apiServices";
import BookCard from "../../../components/bookCard";
import { stringToNumber } from "../../../utils/utils";
import { Metadata } from "next";

async function getBookById(id: string): Promise<Book | undefined> {
  const books: Book[] | undefined = await bookService
    .getAll()
    .catch(() => undefined);
  return books?.find((b) => b.index === stringToNumber(id));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const id = (await params).id
  const book = await getBookById(id);
  return {
    title: book   ? `${book.title} - Books` : "Not Found - Books",
  };
}

export default async function LoadingPage({
  params,
}: {
  params: { id: string };
}) {
  const id = (await params).id
  const book = await getBookById(id);

  return (
    <div className="flex flex-col gap-4 py-8 h-full w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        {book ? (
          <BookCard book={book} key={`card-${book.index}`} />
        ) : (
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold">Something happened!!!</h1>
            <h1 className="text-xl font-bold">No book found</h1>
            <h2 className="text-lg font-semibold mt-2">
              Please, come back later
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}
