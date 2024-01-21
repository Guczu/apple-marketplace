import { MdLaptopMac } from "react-icons/md";
import { FaTabletAlt } from "react-icons/fa";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoWatchOutline } from "react-icons/io5";
import { TbDeviceAirpods } from "react-icons/tb";


export const categories = [
    {
        name: "Mac",
        routeLink: "/",
        icon: <MdLaptopMac className="w-7 h-7"/>
    },
    {
        name: "iPad",
        routeLink: "/",
        icon: <FaTabletAlt className="w-7 h-7"/>
    },
    {
        name: "iPhone",
        routeLink: "/",
        icon: <HiOutlineDevicePhoneMobile className="w-7 h-7"/>
    },
    {
        name: "Watch",
        routeLink: "/",
        icon: <IoWatchOutline className="w-7 h-7"/>
    },
    {
        name: "AirPods",
        routeLink: "/",
        icon: <TbDeviceAirpods className="w-7 h-7"/>
    }
];