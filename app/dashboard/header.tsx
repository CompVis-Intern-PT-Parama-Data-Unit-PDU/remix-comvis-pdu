import { MainNav } from "./components/main-nav"
import { Search } from "./components/search"

export default function Header() {
  return (
    <>
        <div className="hidden flex-col md:flex">
            <div className="border-b">
            <div className="flex h-16 items-center px-4 justify-between">
                <h1 className="text-xl font-bold" >Nama Website </h1>
                <MainNav className="mx-6" />
                <div className="ml-auto flex items-center space-x-4">
                <Search />
                </div>
            </div>
            </div>
        </div>
    </>

  )
}
