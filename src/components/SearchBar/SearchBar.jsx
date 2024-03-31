import { useState } from "react";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
import { RxMagnifyingGlass } from "react-icons/rx";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) {
      toast.error("Please enter a search query");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <header>
      <form onSubmit={handleSubmit} className={css.form}>
        <div className={css.inputContainer}>
          <button type="submit" className={css.searchButton}>
            <RxMagnifyingGlass size={24} className={css.searchIcon} />
        </button>
          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </form>
    </header>
  );
};

export default SearchBar;