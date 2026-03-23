import { useState, useMemo } from "react";
import { Search, Filter, X } from "lucide-react";
import { projects, domains, methods, artefactTypes, Domain, ArtefactType, filterProjects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const ProjectsHub = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDomain, setSelectedDomain] = useState<Domain | undefined>();
  const [selectedMethod, setSelectedMethod] = useState<string | undefined>();
  const [selectedArtefact, setSelectedArtefact] = useState<ArtefactType | undefined>();

  const filteredProjects = useMemo(() => {
    return filterProjects(selectedDomain, selectedMethod, selectedArtefact, searchQuery);
  }, [selectedDomain, selectedMethod, selectedArtefact, searchQuery]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedDomain(undefined);
    setSelectedMethod(undefined);
    setSelectedArtefact(undefined);
  };

  const hasActiveFilters = searchQuery || selectedDomain || selectedMethod || selectedArtefact;

  return (
    <div className="space-y-8">
      {/* Search and Filters */}
      <div className="space-y-4">
        {/* Search bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search projects, skills, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Filter row */}
        <div className="flex flex-wrap gap-3 items-center">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Filter className="h-4 w-4" />
            <span>Filter by:</span>
          </div>

          <Select
            value={selectedDomain}
            onValueChange={(value) => setSelectedDomain(value as Domain)}
          >
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Domain" />
            </SelectTrigger>
            <SelectContent>
              {domains.map((domain) => (
                <SelectItem key={domain} value={domain}>
                  {domain}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={selectedMethod}
            onValueChange={setSelectedMethod}
          >
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Method" />
            </SelectTrigger>
            <SelectContent>
              {methods.map((method) => (
                <SelectItem key={method} value={method}>
                  {method}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={selectedArtefact}
            onValueChange={(value) => setSelectedArtefact(value as ArtefactType)}
          >
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Artefact Type" />
            </SelectTrigger>
            <SelectContent>
              {artefactTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="gap-1 text-muted-foreground"
            >
              <X className="h-4 w-4" />
              Clear all
            </Button>
          )}
        </div>

        {/* Active filters */}
        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2">
            {selectedDomain && (
              <Badge variant="secondary" className="gap-1">
                {selectedDomain}
                <button onClick={() => setSelectedDomain(undefined)}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {selectedMethod && (
              <Badge variant="secondary" className="gap-1">
                {selectedMethod}
                <button onClick={() => setSelectedMethod(undefined)}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {selectedArtefact && (
              <Badge variant="secondary" className="gap-1">
                {selectedArtefact}
                <button onClick={() => setSelectedArtefact(undefined)}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
          </div>
        )}
      </div>

      {/* Results count */}
      <p className="text-sm text-muted-foreground">
        Showing {filteredProjects.length} of {projects.length} projects
      </p>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No projects match your filters.</p>
          <Button variant="link" onClick={clearFilters}>
            Clear all filters
          </Button>
        </div>
      )}
    </div>
  );
};
