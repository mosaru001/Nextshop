import Link from "next/link";
import { forwardRef } from "react";
import Hamburger from "../../../home/top/hamburger";
import withClickOutside from "./withClickOutside";
const Dropdown = forwardRef(({ open, setOpen }: any, ref: any): JSX.Element => {
  // const [open, setOpen] = useState(false);
  // const toggle = () => {
  //   setOpen((open: any) => !open);
  // };
  return (
    <>
      <div className="relative inline-block text-left" ref={ref}>
        <div>
          <button
            className="flex xl:w-56 w-screen justify-center border-b-4 border-green-600
              bg-slate-600 h-10
              shadow-sm items-center space-x-1"
            type="button"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={() => setOpen(!open)}
          >
            <span className="text-sm font-medium text-white ">สินค้า</span>
            <svg className="h-5 text-white" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M11.65 14.65q.15.15.35.15q.2 0 .35-.15l2.8-2.8q.25-.25.125-.55q-.125-.3-.475-.3H9.2q-.35 0-.475.3t.125.55ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-10Zm0 8q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Z"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="absolute left-0 z-10 w-56 origin-top-right text-black rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          {open && <Hamburger></Hamburger>}
        </div>
      </div>
    </>
  );
});
Dropdown.displayName = "dropdown"
export default withClickOutside(Dropdown);
