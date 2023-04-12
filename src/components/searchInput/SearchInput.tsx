import * as React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { localizedText } from "../../localization/strings";

const SearchInput = () => {
  return (
    <div className="flex relative mt-3 items-center">
      <input
        type="text"
        placeholder="Search your Todos"
        className="input w-full max-w-xs text-sm"
      />
      <BiSearchAlt className="absolute right-3 text-primary-focus" />
    </div>
  );
};

export default SearchInput;
