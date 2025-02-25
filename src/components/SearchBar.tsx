
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRecipeStore } from "@/store/recipeStore";
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const { setSearchQuery } = useRecipeStore();
  const debouncedSearch = useDebounce(searchInput, 500);

  useEffect(() => {
    setSearchQuery(debouncedSearch);
  }, [debouncedSearch, setSearchQuery]);

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        type="search"
        placeholder="Search recipes..."
        className="pl-10 w-full bg-background/60 backdrop-blur-sm"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
