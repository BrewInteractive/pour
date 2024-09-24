import { ISearchInput } from "./search-input.type";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

const SearchInput = ({
  size = "md",
  placeholder = "Search",
  className,
  disabled,
}: ISearchInput) => {
  return (
    <div className="relative h-fit w-full">
      <input
        type="text"
        disabled={disabled}
        placeholder={placeholder}
        className={cn(
          "w-full px-3 pl-8 py-2 rounded-md border border-input focus:outline-none focus:border-primary placeholder:text-muted-foreground placeholder:text-sm h-10",
          disabled && "opacity-disabled",
          size === "sm" && "h-8",
          className
        )}
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className={`text-muted-foreground w-4 h-4`} />
      </div>
    </div>
  );
};

export default SearchInput;
