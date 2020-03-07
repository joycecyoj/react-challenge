import * as React from "react";

export default function RepositoryResult(props) {
  let result = props.searchResult;

  return (
    <div>
      <li>{result.full_name}</li>
    </div>
  );
};
