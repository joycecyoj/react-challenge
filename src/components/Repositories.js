import * as React from "react";
import RepositorySearchResults from "./RepositorySearchResults";

export default function Repositories() {
  const [searchString, setSearch] = React.useState("");

  React.useEffect(() => {
  }, [searchString]);

  return (
    <div>
      <input name="search-terms" placeholder="Search for..."
        onChange={(e) => setSearch(e.target.value)} />

      {searchString ? (
        <RepositorySearchResults searchString={searchString} />
      ) : (
        <div>Enter some test to search github repositories</div>
      )}

      <div>
        {searchString}
      </div>

    </div>

  );
};
