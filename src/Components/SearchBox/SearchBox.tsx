import React from "react";

interface ISearchChangeProps {
  searchChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

const SearchBox = ({ searchChange }: ISearchChangeProps) => {
  return (
    <div className="pa2">
      <input
        className="pa3 b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
