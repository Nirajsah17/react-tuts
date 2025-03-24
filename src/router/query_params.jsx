import { useSearchParams } from "react-router-dom";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  return <h2>Search Results for: {query}</h2>;
}

// URL: /search?q=react
