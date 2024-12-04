import { IoIosPeople } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { GiReceiveMoney, GiPayMoney } from "react-icons/gi";
import { GrTransaction } from "react-icons/gr";
import { MdAccountCircle } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { Menu } from "@utils/types/menu.type";

export const menus: Menu[] = [
  {
    routeTo: "/dashboard",
    menuText: "Dashboard",
    icon: <FaHome className="text-xl" />,
  },
  {
    routeTo: "/components",
    menuText: "Components",
    icon: <FaHome className="text-xl" />,
  },
  {
    routeTo: "/users",
    icon: <IoIosPeople className="text-xl" />,
    menuText: "User",
  },
  {
    id: "dropdown",
    icon: <IoIosPeople className="text-xl" />,
    menuText: "Dropdown",
    routeTo: "/dropdown",
    dropdownMenu: [
      { children: "List User", routeTo: "#" },
      { children: "Role User", routeTo: "#" },
    ],
  },
  {
    routeTo: "/accounts",
    icon: <MdAccountCircle className="text-xl" />,
    menuText: "Akun",
  },
  {
    routeTo: "/incomes",
    icon: <GiReceiveMoney className="text-xl" />,
    menuText: "Pemasukan",
  },
  {
    routeTo: "/expenses",
    icon: <GiPayMoney className="text-xl" />,
    menuText: "Pengeluaran",
  },
  {
    routeTo: "/transactions",
    icon: <GrTransaction className="text-xl" />,
    menuText: "Transaksi",
  },
  {
    routeTo: "/mutations",
    icon: <FaBook className="text-xl" />,
    menuText: "Mutasi",
  },
];
