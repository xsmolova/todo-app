import * as React from "react";
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { localizedText } from "../../localization/strings";

interface Props {
  setValue: (value: string) => void;
}

const SearchInput = ({ setValue }: Props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      setValue(searchValue);
      setSearchValue("");
    }
  };

  return (
    <div className="flex relative mt-3 items-center">
      <input
        type="text"
        value={searchValue}
        placeholder={localizedText.search}
        className="input w-full max-w-xs text-sm"
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <BiSearchAlt className="absolute right-3 text-primary-focus" />
    </div>
  );
};

export default SearchInput;
