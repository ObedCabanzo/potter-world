import { Metadata } from "next";
import { Book } from "../../models/book";
import { bookService } from "../../lib/api/apiServices";
import CustomButton from "../../components/customButton";
import { linksMap } from "../../data/links";

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
    .catch((_) => undefined);

  return (
    <div className="flex flex-col  py-8 h-full w-full items-center justify-center ">
      <h1 className="text-xl font-bold">Books</h1>

      {books &&
        books.map((book) => (
          <div className="flex flex-col  w-96  bg-white p-4 text-center items-center" key={`book-${book.index}`}>
            <h2 className="text-lg font-semibold" > {book.title}</h2>
            <h2 className="text-lg font-semibold" > {book.releaseDate}</h2>
            <p className="text-base font-semibold">Pages: {book.pages}</p>

            <CustomButton 
                text="Read more"
                url={`${linksMap["books"].url}/${book.index}`}
                trackText="Read more" 
                className="bg-black text-white rounded-lg py-2 px-8 text-sm font-bold mt-2"            />
          </div>
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
