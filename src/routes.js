import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import Manif from "views/admin/manifs";

// Icon Imports
import {
  MdHome,
  MdBarChart,
} from "react-icons/md";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Manifs",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "manifestations",
    component: <Manif />,
  }
  // {
  //   name: "Profile",
  //   layout: "/admin",
  //   path: "profile",
  //   icon: <MdPerson className="h-6 w-6" />,
  //   component: <Profile />,
  // },
  // {
  //   name: "Manifestation",
  //   layout: "/admin",
  //   path: "nft-marketplace",
  //   icon: <MdBarChart className="h-6 w-6" />,
  //   component: <NFTMarketplace />,
  //   secondary: true,
  // },

  // {
  //   name: "Data Tables",
  //   layout: "/admin",
  //   icon: <MdBarChart className="h-6 w-6" />,
  //   path: "data-tables",
  //   component: <DataTables />,
  // },
];
export default routes;
