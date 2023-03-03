import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { GrFacebookOption, GrPinterest } from "react-icons/gr";
import { RiPinterestLine } from "react-icons/ri";

export const navLinks = [
  {
    id: "about",
    title: "À propos",
    link: "#about",
  },
  {
    id: "services",
    title: "Services",
    link: "#services",
  },
  {
    id: "blog",
    title: "Blog",
    link: "#blog",
  },
  {
    id: "contact",
    title: "Contact",
    link: "#contact",
  },
];

export const socialMedias = [
  {
    id: "instagram",
    icon: <AiOutlineInstagram />,
    link: "#",
  },
  {
    id: "facebook",
    icon: <GrFacebookOption />,
    link: "#",
  },
  {
    id: "linkedIn",
    icon: <AiOutlineLinkedin />,
    link: "#",
  },
  {
    id: "pinterest",
    icon: <RiPinterestLine />,
    link: "#",
  },
];
