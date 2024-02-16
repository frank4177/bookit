import { PiAirplaneTilt } from "react-icons/pi";
import { PiHouse } from "react-icons/pi";
import { LuWallet } from "react-icons/lu";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { RiPieChart2Line } from "react-icons/ri";
import { PiGear } from "react-icons/pi";

export const sidebarMenuData = [
  {
    id: 1,
    route: "/dashboard",
    title: "Dashboard",
    icon: <PiHouse color="#C99C33" size={25} />,
  },
  {
    id: 2,
    route: "/",
    title: "Flights",
    icon: <PiAirplaneTilt color="#C99C33" size={25} />,
  },
  {
    id: 3,
    route: "/wallet",
    title: "Wallet",
    icon: <LuWallet color="#C99C33" size={25} />,
  },
  {
    id: 4,
    route: "/reports",
    title: "Reports",
    icon: <HiOutlineNewspaper color="#C99C33" size={25} />,
  },
  {
    id: 5,
    route: "/statistics",
    title: "Statistics",
    icon: <RiPieChart2Line color="#C99C33" size={25} />,
  },
  {
    id: 6,
    route: "/settings",
    title: "Settings",
    icon: <PiGear color="#C99C33" size={25} />,
  },
];

export const avatarData = [
  {
    id: 1,
    image:
      "https://img.freepik.com/free-photo/cheerful-african-guy-with-narrow-dark-eyes-fluffy-hair-dressed-elegant-white-shirt_273609-14082.jpg",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/free-photo/man-wearing-round-eyeglasses-casual-t-shirt_273609-19641.jpg",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/free-photo/indoor-shot-glad-young-bearded-man-mustache-wears-denim-shirt-smiles-happily_273609-8698.jpg",
  },
  {
    id: 4,
    image:
      "https://img.freepik.com/free-photo/handsome-man-smiling-happy-face-portrait-close-up_53876-139608.jpg",
  },
  {
    id: 5,
    image:
      "https://img.freepik.com/free-photo/happy-african-american-young-man-colorful-shirt-wearing-glasses-looking-camera-smiling-cheerfully_141793-108881.jpg",
  },
  {
    id: 6,
    image:
      "https://img.freepik.com/premium-photo/headshot-ambitious-handsome-young-creative-african-american-freelancer-with-pierced-nose-afro-hairstyle-glasses-smiling_176420-43754.jpg",
  },
];

export const tripData = [
  { id: 1, title: "ONE WAY" },
  { id: 2, title: "ROUND TRIP" },
  { id: 3, title: "MULTI CITY" },
];

export const travellerOptions = [
  { id: 1, option: "2 TRAVELLER" },
  { id: 2, option: "3 TRAVELLER" },
];

export const classOptions = [
  { id: 1, option: "FIRST CLASS" },
  { id: 2, option: "SECOND CLASS" },
];

export const ticketsData = [
  {
    id: "1",
    airlineLogo: "/thrEmirate.PNG",
    airport_dept: "JFK",
    time_dept: "13:00",
    airline: "Emirates",
    duration: "11H 20M",
    type: "NON-STOP",
    airport_arrival: "BOM",
    time_arrival: "14:20",
    price: "1,572",
  },
  {
    id: "2",
    airlineLogo: "/thrquater.PNG",
    airport_dept: "JFK",
    time_dept: "13:00",
    airline: "Qatar Airways",
    duration: "11H 20M",
    type: "NON-STOP",
    airport_arrival: "BOM",
    time_arrival: "14:20",
    price: "2,072",
  },
  {
    id: "3",
    airlineLogo: "/thrLuf.PNG",
    airport_dept: "JFK",
    time_dept: "13:00",
    airline: "Lufthansa",
    duration: "11H 20M",
    type: "NON-STOP",
    airport_arrival: "BOM",
    time_arrival: "14:20",
    price: "1,872",
  },

  {
    id: "4",
    airlineLogo: "/thrEmirate.PNG",
    airport_dept: "BOM",
    time_dept: "13:00",
    airline: "Emirates",
    duration: "11H 20M",
    type: "NON-STOP",
    airport_arrival: "JFK",
    time_arrival: "14:20",
    price: "1,872",
  },
];
