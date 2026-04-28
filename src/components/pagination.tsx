import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface PaginationProps {
  currentPage: number;
  handlePrevPage: () => void;
  handleNextPage: () => void;
  maxPages?: number;
}
const Pagination = ({
  currentPage,
  handlePrevPage,
  handleNextPage,
  maxPages,
}: PaginationProps) => {
  return (
    <div className="flex items-center gap-6 justify-center py-4 w-full">
      {/* Previous Button */}
      <Button
        onClick={handlePrevPage}
        color="secondary"
        variant="outline"

        size="icon-lg"
        disabled={currentPage === 1}
        className="disabled:bg-gray-400"
      >
        <ArrowLeft className="h-6 w-6" />
      </Button>

      <span className="pointer-events-none">{currentPage}</span>

      {/* Next Button */}
      <Button
        onClick={handleNextPage}
        color="secondary"
        variant="outline"
        size="icon-lg"
        disabled={currentPage === maxPages}
        className="disabled:bg-gray-400"
      >
        <ArrowRight className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default Pagination;
