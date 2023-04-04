/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./components/Links";
import routes from "routes.js";

const Sidebar = ({ open, onClose }) => {
  return (
    <div className={`linear fixed flex min-h-full flex-col bg-white p-10 `}>

      <div className={`text-start font-poppins font-bold uppercase`}>
        Stardex
      </div>

      <div class="mt-7 mb-7 h-px bg-gray-300" />
      {/* Nav item */}

      <ul className="mb-auto pt-1 ">
        <Links routes={routes} />
      </ul>

      {/* Nav item end */}
    </div>
  );
};

export default Sidebar;
