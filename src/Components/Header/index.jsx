import { IconLogOut } from "../Icons"
import Logo from "../Logo"
import UserPreview from "../UserPreview"


function Header() {
  return (
    <header className="p-4 flex items-center justify-between">
      <Logo></Logo>
      <div className="flex gap-3 justify-center items-center">
        <UserPreview />
        <IconLogOut className="text-blue-500" />
      </div>
    </header>
  )
}

export default Header