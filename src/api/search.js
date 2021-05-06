export function fetchSearchResults(query) {
  const hasQueryTerm = query !== "" && query !== undefined;
  if (typeof query !== "string" && hasQueryTerm) {
    throw new TypeError(
      `TypeError: Expected query to be a string, instead got "${typeof query}"`
    );
  }
  if (!Boolean(query)) {
    // No query or empty query
    return new Promise((resolve) => {
      resolve([]);
    });
  }
  try {
    return fetch(makeSearchUrl(query)).then((results) => results.json());
  } catch (e) {
    throw new Error("Something went wrong");
  }
}

const API_URL = "http://localhost:3001/products";

const makeSearchUrl = (query) => `${API_URL}?q=${encodeURIComponent(query)}`;
