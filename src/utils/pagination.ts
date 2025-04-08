type T_ConstructUrlProps = {
  pageNumber: number;
  search: string;
  pathname: string;
};

export const constructUrl = ({
  pageNumber,
  pathname,
  search,
}: T_ConstructUrlProps): string => {
  const searchParams = new URLSearchParams(search);
  searchParams.set("page", `${pageNumber}`);

  return `${pathname}?${searchParams.toString()}`;
};

type T_ConstructPrevOrNextProps = {
  currentPage: number;
  pageCount: number;
  search: string;
  pathname: string;
};

export const constructPrevOrNextUrl = ({
  currentPage,
  pageCount,
  pathname,
  search,
}: T_ConstructPrevOrNextProps): { prevUrl: string; nextUrl: string } => {
  const prevPage = currentPage - 1 || pageCount;
  const nextPage = currentPage + 1 > pageCount ? 1 : currentPage + 1;

  const prevUrl = constructUrl({ pageNumber: prevPage, pathname, search });
  const nextUrl = constructUrl({ pageNumber: nextPage, pathname, search });

  return { prevUrl, nextUrl };
};
