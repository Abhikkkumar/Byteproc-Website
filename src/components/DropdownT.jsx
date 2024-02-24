import { NavLink } from "react-router-dom";


export default function DropdownT({ arr }) {
  return (
    
      <div className="flex flex-col w-max absolute top-[98%] left-[0px] bg-[var(--col3)] text-[var(--col1)] border-1  rounded divide-y">
        {arr.map((item, i) => (
          <NavLink
            className="uppercase px-2 py-1 hover:bg-[var(--col5)] transition ease-in-out delay-[.1s] "
            to="/"
            key={i}
          >
            {item}
          </NavLink>
        ))}
      </div>
    
  );
}
