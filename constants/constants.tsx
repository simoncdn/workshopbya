import { GrFacebookOption } from "react-icons/gr";
import { TbBrandTiktok } from "react-icons/tb";
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { BsBook } from "react-icons/bs";

import brandingPicture from "../assets/servicespictures/Branding-community-management.png";
import strategyPicture from "../assets/servicespictures/Planning-editorial-community-management.png";
import creationPicture from "../assets/servicespictures/Grid-planner-community-management.png";
import analysePicture from "../assets/servicespictures/Statistiques-community-management.png";

export const navLinks = [
  {
    id: "accueil",
    title: "Accueil",
    link: "/",
  },
  {
    id: "about",
    title: "À propos",
    link: "/about",
  },
  {
    id: "services",
    title: "Tarifs",
    subtitle: [
      {
        id: "forfaits",
        title: "Forfaits",
        link: "/services/forfaits",
      },
      {
        id: "oneshots",
        title: "One shots",
        link: "/services/oneshots",
      },
    ],
  },
  {
    id: "blog",
    title: "Blog",
    link: "/blog",
  },
  {
    id: "contact",
    title: "Contact",
    link: "/contact",
  },
];

export const socialMedias = [
  {
    id: "instagram",
    icon: <AiOutlineInstagram />,
    link: "https://www.instagram.com/workshopbya/",
  },
  {
    id: "facebook",
    icon: <GrFacebookOption />,
    link: "https://www.facebook.com/profile.php?id=100088169302029",
  },
  {
    id: "linkedIn",
    icon: <AiOutlineLinkedin />,
    link: "https://www.linkedin.com/in/alizeeeplazen",
  },
  {
    id: "tiktok",
    icon: <TbBrandTiktok />,
    link: "https://www.tiktok.com/@workshopbya",
  },
  {
    id: "book",
    icon: <BsBook />,
    link: "https://book-plazen-alizee.my.canva.site/",
  },
];

export const services = [
  {
    id: "1",
    title: "#Branding",
    picture: brandingPicture,
    alt: "Branding community management",
    description:
      "Le branding permet d'identifier les valeurs fondamentales de l'entreprise, de créer une voix de marque et de développer une image visuellement cohérente. En renforçant l'indentité, les clients peuvent être en mesure de se démarquer de leurs concurrents  et d'attirer l'attention de leur public cible.",
  },
  {
    id: "2",
    title: "#Stratégie",
    picture: strategyPicture,
    alt: "Planning editiorial community management",
    description:
      "La stratégie doit être adaptée aux objectifs de l'entreprise et aux besoins de sa communauté. Elle doit également inclure des élements tels que l'image de la marque, les plateformes sociales à utiliser, la fréquence de publication et les types de contenu à partager.",
  },
  {
    id: "3",
    title: "#Création et gestion",
    picture: creationPicture,
    alt: "Grid planner community management",
    description:
      "Une fois que la stratégie de communication est définie, la prochaine étape consiste à créer et à gérer du contenu de qualité. Cela comprends la création de textes, d'images et de vidéos qui sont pertinents pour la communauté de l'entreprise. La gestion de contenu implique également de veiller à la cohérence et à la qualité du contenu publié.",
  },
  {
    id: "4",
    title: "#Analyse",
    picture: analysePicture,
    alt: "Statistiques community manager",
    description:
      "Enfin, il est important d'analyser les résultats de la présence en ligne de l'entreprise pour comprendre ce qui fonctionne bien et ce qui peut être amélioré. Cela implique de suivre les indicateurs de performance clés, tels que le taux d'engagement, le nombre de followers, les conversions et le retour sur investissement. L'analyse des résultats permet d'ajuster la stratégie de communication en ligne et les tactiques utilisées pour atteindre les objectifs commerciaux de l'entreprise.",
  },
];

export const packs = [
  {
    title: "Forfait Découverte",
    price: "300",
    subtitle: "Gestion d'un Réseau social",
    cardColor: "white",
    textColor: "primary",
    animationDelay: 1,
    description: [
      "1 post par semaine",
      "2 stories par semaine",
      "Analyses",
      "Veille et recherche de contenus",
      "Création de contenu",
      "Création d'un grid planner",
      "Preset sur mesure",
      "Mise en place d'une stratégie social media",
    ],
  },
  {
    title: "Forfait Basique",
    price: "450",
    subtitle: "Gestion de deux Réseaux sociaux",
    cardColor: "secondary",
    textColor: "primary",
    animationDelay: 1.4,
    description: [
      "2 posts par semaine",
      "4 stories par semaine",
      "Analyses",
      "Veille et recherche de contenus",
      "Création de contenu",
      "Création d'un grid planner",
      "Preset sur mesure",
      "Mise en place d'une stratégie social media",
    ],
  },
  {
    title: "Fortfait professionnel",
    price: "600",
    subtitle: "Gestion de trois Réseau social",
    cardColor: "grey",
    textColor: "primary",
    animationDelay: 1.8,
    description: [
      "3 posts par semaine",
      "6 stories par semaine",
      "Analyses",
      "Veille et recherche de contenus",
      "Création de contenu",
      "Création d'un grid planner",
      "Preset sur mesure",
      "Mise en place d'une stratégie social media",
    ],
  },
  {
    title: "Forfait premium",
    price: "850",
    subtitle: "Gestion de + de trois Réseau social",
    cardColor: "tertiary",
    textColor: "primary",
    animationDelay: 2.2,
    description: ["Contactez moi pour discuter ensemble de votre projet"],
  },
];

export const oneShots = [
  {
    title: "InstaProfil+",
    price: "150",
    description:
      "Êtes-vous à la recherche d'un moyen efficace pour améliorer votre présence en ligne ? Cette prestation pourrait vous aider ! Elle comprend la rédaction optimisée de votre biographie, la mise à jour de votre photo de profil et la création des différentes stories à la une.",
    cardColor: "white",
    animationDelay: 1,
  },
  {
    title: "Campagne publicitaire",
    price: "250",
    description:
      "Vous souhaitez atteindre de nouveaux clients et développer votre entreprise sur les réseaux sociaux ? Ce One Shot est concu pour vous aider à atteindre vos objectifs. Je crée des contenus uniques et engageants adaptés à votre entreprise et je les diffuse auprès de votre public cible pour maximiser votre visibilité en ligne.",
    cardColor: "secondary",
    animationDelay: 1.4,
  },
  {
    title: "Créateur de concours",
    price: "150",
    description:
      "Vous cherchez un moyen efficace de renforcer l'engagement de votre public sur les réseaux sociaux tout en augmentant la visibilité de votre entreprise ? Mon One Shot d'organisation de jeu concours sur les réseaux sociaux est la solution qu'il faut. Je crée des jeux concours créatifs et attrayants adaptés à votre entreprise et à votre public cible pour stimuler l'engage,emt et la participation de votre audience.",
    cardColor: "grey",
    animationDelay: 1.8,
  },
  {
    title: "Identité visuelle",
    price: "300",
    description:
      "Je vous propose un One Shot 'identitié visuelle' pour donner à votre entreprise une image professionnelle et originale. Je crée pour vous une palette de couleurs harmonieuse adaptée à votre image de marque et à votre logo, en passant par le design des cartes de visites ou grille tarifaire. Donnez à votre entreprise l'identité visuelle qu'elle mérite.",
    cardColor: "tertiary",
    animationDelay: 2.2,
  },
];
