type Link = {
  url: string,
  text: string,
};

export const linksMap: { [key: string]: Link } = {
  home: { url: "/", text: "Home" },
  houses: { url: "/houses", text: "Houses" },
  books: { url: "/books", text: "Books" },
  spells: { url: "/spells", text: "Spells" },
  characters: { url: "/characters", text: "Characters" },
};
