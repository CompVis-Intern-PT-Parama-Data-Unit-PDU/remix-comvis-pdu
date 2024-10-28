import { NavLink } from "@remix-run/react";

export default function Header() {
  return (
    <div className="flex">
        <div className="text-3xl">Header</div>
        <NavLink to="/about" className="text-3xl">About</NavLink>

    </div>
  )
}
