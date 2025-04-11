export const getSearchParamsAsObj = (url: string) =>
  Object.fromEntries([...new URL(url).searchParams]);
