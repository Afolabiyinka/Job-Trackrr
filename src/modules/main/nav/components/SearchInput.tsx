import { Button } from "@/components/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useJobs } from "@/modules/main/jobs/store/useJobs";
import { Briefcase, Building2, Search } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../jobs/components/create-job/input/custom-input";

export default function SearchInput() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const { jobs } = useJobs();
  const navigate = useNavigate();

  const filteredJobs = jobs.filter((job) =>
    job.company.trim().toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="flex flex-col gap-4">
      <Button
        onClick={() => setOpen(true)}
        className=""
        variant="outline"
        size={`icon-lg`}
      >
        <Search />
        {/* Search */}
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command className="p-2">
          <CustomInput
            placeholder="Search jobs..."
            value={query}
            onChange={setQuery}
            type="search"
            icon={`Search`}
          />

          <CommandList>

            <CommandEmpty className="py-12">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="rounded-full bg-muted p-3 mb-3">
                  <Briefcase className="h-6 w-6 text-muted-foreground" />
                </div>
                <p className="text-sm font-medium mb-1">No jobs found</p>
                <p className="text-xs text-muted-foreground max-w-[240px]">
                  Try a different search term or check your filters
                </p>
              </div>
            </CommandEmpty>
            <CommandGroup heading="Jobs" className="">
              {filteredJobs.slice(0, 3).map((job) => (
                <CommandItem
                  className="cursor-pointer"
                  key={job.id}
                  onSelect={() => {
                    navigate(`jobs/${job.id}`);
                    setOpen(false);
                  }}
                >
                  <Building2 />
                  {job.company}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  );
}
