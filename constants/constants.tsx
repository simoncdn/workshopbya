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

export const services = [
  {
    id: "1",
    title: "#Brading",
    description:
      "Romani canities et nulla cum sunt temporis Romani sint populique canities reverenda licet terrarum populique suscipitur ut canities certamina per et temporis suffragiorum tamen per pacataeque ubique Pompiliani circumspectum domina patrum et per domina canities suffragiorum suscipitur et ubique centuriae verecundum tribus redierit sint canities temporis populique otiosae licet securitas.",
  },
  {
    id: "2",
    title: "#Stratégie",
    description:
      "Romani canities et nulla cum sunt temporis Romani sint populique canities reverenda licet terrarum populique suscipitur ut canities certamina per et temporis suffragiorum tamen per pacataeque ubique Pompiliani circumspectum domina patrum et per domina canities suffragiorum suscipitur et ubique centuriae verecundum tribus redierit sint canities temporis populique otiosae licet securitas.",
  },
  {
    id: "3",
    title: "#Création",
    description:
      "Romani canities et nulla cum sunt temporis Romani sint populique canities reverenda licet terrarum populique suscipitur ut canities certamina per et temporis suffragiorum tamen per pacataeque ubique Pompiliani circumspectum domina patrum et per domina canities suffragiorum suscipitur et ubique centuriae verecundum tribus redierit sint canities temporis populique otiosae licet securitas.",
  },
  {
    id: "4",
    title: "#Reporting",
    description:
      "Romani canities et nulla cum sunt temporis Romani sint populique canities reverenda licet terrarum populique suscipitur ut canities certamina per et temporis suffragiorum tamen per pacataeque ubique Pompiliani circumspectum domina patrum et per domina canities suffragiorum suscipitur et ubique centuriae verecundum tribus redierit sint canities temporis populique otiosae licet securitas.",
  },
];

export const packs = [
  {
    title: "Débutant",
    price: "200",
    cardColor: "white",
    textColor: "primary",
    description: [
      "1 post par semaine",
      "2 stories par semaine",
      "Création d'un grid planner et preset sur mesure pour avoir un feed harmonieux",
    ],
  },
  {
    title: "Basic",
    price: "400",
    cardColor: "secondary",
    textColor: "primary",
    description: [
      "2 posts par semaine",
      "4 stories par semaine",
      "Création d'un grid planner et preset sur mesure pour avoir un feed harmonieux",
      "Création d'un calendrier éditorial",
    ],
  },
  {
    title: "Business",
    price: "600",
    cardColor: "tertiary",
    textColor: "white",
    description: [
      "1 post par semaine",
      "2 stories par semaine",
      "Création d'un grid planner et preset sur mesure pour avoir un feed harmonieux",
      "Création d'un calendrier éditorial",
      "Création d'une charte graphique",
      "Mise en place d'animation (jeu concours...)",
    ],
  },
];
