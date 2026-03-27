import { useState } from "react";

export const usePagination = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () => setCurrentPage((prev) => prev + 1);

  return { currentPage, handleNextPage, handlePrevPage };
};
