type Link = {
  url: string,
  text: string,
};

export const linksMap: { [key: string]: Link } = {
  home: { url: "/", text: "Home" },
  houses: { url: "/houses", text: "Houses" },
  elixirs: { url: "/elixirs", text: "Elixirs" },
  spells: { url: "/spells", text: "Spells" },
  wizards: { url: "/wizards", text: "Wizards" },
};
