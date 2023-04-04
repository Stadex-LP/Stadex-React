import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import Manif from "views/admin/manifs";

// Icon Imports
import {
  MdHome,
  MdBarChart,
} from "react-icons/md";
import Transports from "views/admin/transports";
import Equipements from "views/admin/equipementS";
import Organisateurs from "views/admin/organisateurs";
import Materiel from "views/admin/materiel";

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
  },
  {
    name: "Transports",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "transports",
    component: <Transports />,
  },
  {
    name: "Equipement",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "equipements",
    component: <Equipements />,
  },
  {
    name: "Organisateurs",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "organisateurs",
    component: <Organisateurs />,
  },
  {
    name: "Materiel",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "materiel",
    component: <Materiel />,
  }
];
export default routes;
