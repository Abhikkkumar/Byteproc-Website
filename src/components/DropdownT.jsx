import { NavLink } from "react-router-dom";

export default function DropdownT({ arr }) {
  return (
    <div className="dropdown flex flex-col w-max absolute top-[120%] left-[-50%] bg-[var(--col1)] text-[var(--col4)] divide-y ">
      {arr.map((item, i) => (
        <NavLink
          className="uppercase px-5 py-3 hover:bg-[var(--col5)] hover:text-[var(--col1)] transition ease-in-out delay-[.1s] "
          to="/"
          key={i}
        >
          {item}
        </NavLink>
      ))}
    </div>
  );
}
