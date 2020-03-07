import * as React from "react";
import RepositoryResult from "./RepositoryResult";

export default function RepositorySearchResults(props) {
  const [searchResults, setResults] = React.useState([]);

  async function fetchData(searchString) {
    const response = await fetch("https://api.github.com/search/repositories?q=" + searchString);
    let resultsRes = await response.json()

    setResults(...resultsRes.items);
  }

  React.useEffect(() => {
    fetchData(props.searchString);
  }, [props.searchString]);

  return (
    <div>
      <ul>
          {searchResults ?
            (searchResults.map(result => (<RepositoryResult key={result.id} result={result} />
            )) ): (
             <div>No results to show</div>
            )}
      </ul>
    </div>
  );
};
