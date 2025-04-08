import { useLoaderData, useLocation } from "react-router-dom";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  constructPrevOrNextUrl,
  // ProductsResponseWithParams,
  constructUrl,
  T_ProductsResponse,
} from "@/utils";

export const PaginationContainer = () => {
  const { meta } = useLoaderData() as T_ProductsResponse;
  const { pageCount, page } = meta.pagination;
  const { search, pathname } = useLocation();

  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  if (pageCount < 2) return null;

  const renderPagination = pages.map((pageNumber) => {
    const url = constructUrl({ pageNumber, search, pathname });

    return (
      <PaginationItem key={pageNumber}>
        <PaginationLink to={url} isActive={page === pageNumber}>
          {pageNumber}
        </PaginationLink>
      </PaginationItem>
    );
  });

  const { prevUrl, nextUrl } = constructPrevOrNextUrl({
    currentPage: page,
    pageCount,
    pathname,
    search,
  });

  return (
    <Pagination className="mt-16">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious to={prevUrl} />
        </PaginationItem>

        {renderPagination}

        <PaginationItem>
          <PaginationNext to={nextUrl} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
