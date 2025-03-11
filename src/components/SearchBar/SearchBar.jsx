import { useState } from "react";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

const SearchBar = ({ handleSetQuery }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) {
      toast.error("Please enter a search term", { duration: 2000 });
      return;
    }
    handleSetQuery(value);
    setValue("");
  };
  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };
  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          type="text"
          onChange={handleChangeValue}
          value={value}
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};
export default SearchBar;
