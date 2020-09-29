import React, { useCallback } from "react";
import ActionButton from "../ActionButton";
import style from "./main.module.css";

function SearchBar({ value, setValue }) {
  const handleInputChange = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [setValue]
  );

  return (
    <form action="" method="">
      <input
        type="text"
        name="name"
        value={value}
        onChange={handleInputChange}
        className={style.input__wrapper}
      />
      <ActionButton name="search" children="Search" />
    </form>
  );
}

export default SearchBar;
