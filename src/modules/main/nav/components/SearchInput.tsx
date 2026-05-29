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
    job.company.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <Button
        onClick={() => setOpen(true)}
        variant="outline"
        size="icon-lg"
      >
        <Search className="h-5 w-5" />
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command className="p-2">
          <div className="mb-2">
            <CustomInput
              placeholder="Search jobs..."
              value={query}
              onChange={setQuery}
              type="search"
              icon="Search"
            />
          </div>

          <CommandList>
            <CommandEmpty className="py-12">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="mb-3 rounded-full bg-muted p-3">
                  <Briefcase className="h-6 w-6 text-muted-foreground" />
                </div>

                <p className="mb-1 text-sm font-medium">
                  No jobs found
                </p>

                <p className="max-w-[240px] text-xs text-muted-foreground">
                  Try a different search term
                </p>
              </div>
            </CommandEmpty>

            <CommandGroup>
              {filteredJobs.slice(0, 5).map((job) => (
                <CommandItem
                  key={job.id}
                  value={job.company}
                  className="cursor-pointer"
                  onSelect={() => {
                    navigate(`/jobs/${job.id}`);
                    setOpen(false);
                  }}
                >
                  <Building2 className="mr-2 h-4 w-4" />
                  <span>{job.company}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  );
}