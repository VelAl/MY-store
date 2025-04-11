import { useLoaderData, useLocation } from "react-router-dom";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { constructPrevOrNextUrl, constructUrl, T_Pagination } from "@/utils";

const constructElipsis = (key: string): React.ReactNode => (
  <PaginationItem key={key}>
    <PaginationEllipsis />
  </PaginationItem>
);

export const PaginationContainer = () => {
  const { meta } = useLoaderData() as { meta: { pagination: T_Pagination } };
  const { pageCount, page } = meta.pagination;
  const { search, pathname } = useLocation();

  if (pageCount < 2) return null;

  const constructButton = (
    pageNumber: number,
    isActive: boolean
  ): React.ReactNode => {
    const url = constructUrl({ pageNumber, search, pathname });

    return (
      <PaginationItem key={pageNumber}>
        <PaginationLink to={url} isActive={isActive}>
          {pageNumber}
        </PaginationLink>
      </PaginationItem>
    );
  };

  const renderPagination = () => {
    const { pageCount } = meta.pagination;
    const pages: React.ReactNode[] = [];

    // first page
    pages.push(constructButton(1, page === 1));

    // elipsis
    if (page > 2) {
      pages.push(constructElipsis("dots-1"));
    }

    // active page
    if (page !== 1 && page !== pageCount) {
      pages.push(constructButton(page, true));
    }

    // elipsis
    if (page < pageCount - 1) {
      pages.push(constructElipsis("dots-2"));
    }

    // last page
    pages.push(constructButton(pageCount, page === pageCount));

    return pages;
  };

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

        {renderPagination()}

        <PaginationItem>
          <PaginationNext to={nextUrl} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
