import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useIsMobile } from "@/shared/hooks/useMobile";
import { Briefcase, Search } from "lucide-react";
import { useState } from "react";
import CustomInput from "../../jobs/components/create-job/input/custom-input";
import { useSearch } from "../hooks/useSearch";
import SearchItem from "./SearchItem";
import SpinningLoader from "@/components/loader/spinningloader";

const SearchInput = () => {
  const isMobile = useIsMobile();
  const { query, setQuery, searchLoading, searchresults } = useSearch();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          size={isMobile ? "icon-lg" : "lg"}
          className="group transition-all duration-150"
        >
          <Search className="" />
          <p className="hidden md:block">Search</p>
        </Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false} className="">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <div className="space-y-3">
          <CustomInput
            placeholder="Start Typing..."
            value={query}
            onChange={setQuery}
            type="search"
            icon="Search"
          />

          <div className="flex justify-center items-center flex-col">
            <div>
              {searchresults?.data.length === 0 && (
                <div className="flex flex-col items-center justify-center text-center w-full">
                  <div className="mb-3 rounded-full bg-muted p-3">
                    <Briefcase className="h-6 w-6 text-muted-foreground" />
                  </div>

                  <p className="mb-1 text-sm font-medium">No jobs found</p>

                  <p className="max-w-60 text-xs text-muted-foreground">
                    Try a different search term
                  </p>
                </div>
              )}
            </div>
            <div>{searchLoading && <SpinningLoader />}</div>
            <div className="mt-5 w-full">
              {searchresults?.data.map((job) => (
                <SearchItem
                  job={job}
                  key={job.id}
                  onSelect={() => setIsOpen(false)}
                />
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchInput;
