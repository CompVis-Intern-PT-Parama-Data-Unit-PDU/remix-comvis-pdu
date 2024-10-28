import { NavLink } from "@remix-run/react";

export default function Sidebar() {
  return (
    <div className="flex flex-col">
        <div className="text-3xl mb-5">Sidebar</div>
        <NavLink to="/" className="text-2xl">Home</NavLink>
        <NavLink to="/cutting-analysis" className="text-2xl">Cutting Analysis</NavLink>
        <NavLink to="/drilling-monitoring" className="text-2xl">Drilling Monitoring</NavLink>
    </div>
  )
}
