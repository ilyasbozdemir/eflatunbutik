import { MdOutlineFiberNew } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { CiDiscount1 } from "react-icons/ci";

export const linkItems = [
  {
    label: "Yeni Gelenler",
    icon: MdOutlineFiberNew,
    href: "/yeni-gelenler",
    childrens: [],
  },
  {
    label: "Elbise",
    icon: GiClothes,
    href: "/elbise",
    childrens: [],
  },
  {
    label: "Triko",
    icon: GiClothes,
    href: "/triko",
    childrens: [],
  },
  {
    label: "İç Giyim",
    icon: GiClothes,
    href: "/ic-giyim",
    childrens: [],
  },
  {
    label: "Üst Giyim",
    icon: GiClothes,
    href: "/ust-giyim",
    childrens: [
      {
        label: "Sweatshirt",
        icon: GiClothes,
        href: "/sweatshirt",
      },
      {
        label: "Tişört",
        icon: GiClothes,
        href: "/tshirt",
      },
      {
        label: "Tunik",
        icon: GiClothes,
        href: "/tunik",
      },
      {
        label: "Gömlek",
        icon: GiClothes,
        href: "/gomlek",
      },
      {
        label: "Bluz",
        icon: GiClothes,
        href: "/bluz",
      },
    ],
  },
  {
    label: "Alt Giyim",
    icon: GiClothes,
    href: "/alt-giyim",
    childrens: [
      {
        label: "Etek",
        icon: GiClothes,
        href: "/etek",
      },
      {
        label: "Pantolon",
        icon: GiClothes,
        href: "/pantolon",
      },
      {
        label: "Pijama Takımı",
        icon: GiClothes,
        href: "/pijama-takimi",
      },
      {
        label: "Etek Takımı",
        icon: GiClothes,
        href: "/etek-takimi",
      },
    ],
  },
  {
    label: "Dış Giyim",
    icon: GiClothes,
    href: "/dis-giyim",
    childrens: [
      {
        label: "Yelek",
        icon: GiClothes,
        href: "/yelek",
      },
      {
        label: "Trençkot",
        icon: GiClothes,
        href: "/trenckot",
      },
      {
        label: "Kaban",
        icon: GiClothes,
        href: "/kaban",
      },
      {
        label: "Kap",
        icon: GiClothes,
        href: "/kap",
      },
      {
        label: "Yağmurluk",
        icon: GiClothes,
        href: "/yagmurluk",
      },
      {
        label: "Kazak",
        icon: GiClothes,
        href: "/kazak",
      },
      {
        label: "Takım",
        icon: GiClothes,
        href: "/takim",
      },
      {
        label: "Hırka",
        icon: GiClothes,
        href: "/hirka",
      },
      {
        label: "Süveter",
        icon: GiClothes,
        href: "/suveter",
      },
    ],
  },
  {
    label: "Outlet",
    icon: GiClothes,
    href: "/outlet",
    childrens: [],
  },
  {
    label: "Kombin",
    icon: GiClothes,
    href: "/kombin",
    childrens: [
      {
        label: "Etekli Kombin",
        icon: GiClothes,
        href: "/etekli-kombin",
      },
      {
        label: "Pantolonlu Kombin",
        icon: GiClothes,
        href: "/pantolonlu-kombin",
      },
    ],
  },
  {
    label: "İndirim",
    icon: CiDiscount1,
    href: "/indirim",
    childrens: [],
  },
];
