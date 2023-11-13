import { Input } from "@material-tailwind/react";
import { IconMagniFyingGlass } from "../Components/Icons";

function Search({ searchValue, setSearchValue }) {
  return (
    <div className="w-full">
      <Input
        label="Search"
        color="blue"
        icon={<IconMagniFyingGlass />}
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />
    </div>
  )
}

export { Search }
