import { Button } from "@/components/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useJobs } from "@/modules/main/jobs/store/useJobs";
import { Building2, Search } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function SearchInput() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const { jobs } = useJobs();
  const navigate = useNavigate();

  const filteredJobs = jobs.filter((job) =>
    job.company.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="flex flex-col gap-4">
      <Button onClick={() => setOpen(true)} className="" size={`lg`}>
        <Search />
        Search Jobs
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput
            placeholder="Search jobs..."
            value={query}
            onValueChange={setQuery}
          />

          <CommandList>
            <CommandEmpty>No jobs found.</CommandEmpty>

            {filteredJobs.length > 0 && (
              <CommandGroup heading="Jobs">
                {filteredJobs.map((job) => (
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
            )}
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  );
}
