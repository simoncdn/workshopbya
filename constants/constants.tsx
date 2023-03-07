import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { TbBrandTiktok } from "react-icons/tb";

import brandingPicture from "../assets/servicespictures/Branding-community-management.png";
import strategyPicture from "../assets/servicespictures/Planning-editorial-community-management.png";
import creationPicture from "../assets/servicespictures/Grid-planner-community-management.png";
import analysePicture from "../assets/servicespictures/Statistiques-community-management.png";

import article2 from "../assets/socialmedia.jpg";
import article4 from "../assets/instagram.jpg";
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
    title: "Services",
    link: "/#services",
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

export const articles = [
  {
    id: "2",
    title:
      "Pourquoi faire confiance aux réseaux sociaux pour développer son entreprise ?",
    cover: article2,
    description:
      "Philosopho resultantes histrionici studiorum domus hydraulica paucae non accitur hydraulica cantor oratoris cantor speciem locum clausis studiorum accitur. carpentorum organa speciem sepulcrorum levia fidium accitur levia fabricantur tinnitu clausis sonu organa seriis ludicrarum ignaviae instrumenta speciem ritu artium et cultibus sit organa ludibriis sit perpetuum in philosopho sit nunc non.",
    date: "6.03.2023",
    author: "Workshop by A",
    article: [
      {
        subtitle: "Qu’est-ce que ChatGPT ?",
        description:
          "Le GPT-3 (Generative Pre-trained Transformer 3) est une technologie d’intelligence artificielle qui peut générer du texte créatif à partir de données d’entrée. Il est utilisé pour créer des conversations de chat automatisées qui sont plus naturelles et plus engageantes pour les utilisateurs. Début 2023, l’engouement pour ChatGPT a enfin explosé aux yeux du grand public. On entend parlé partout depuis, même dans cet article !",
      },
      {
        subtitle: "ChatGPT et community manager : deux rôles différents",
        description:
          "lui est responsable de la gestion de la communauté en ligne de l’entreprise ou de la marque, y compris l’engagement des clients et la résolution de problèmes.Bien que ChatGPT puisse être un outil utile pour les community managers, il ne peut pas remplacer complètement leur rôle dans la gestion de la communauté en ligne. Les community managers doivent encore être en mesure de personnaliser les réponses en fonction des besoins individuels des clients et de fournir une expérience de service client exceptionnelle.D’autant plus qu’aujourd’hui beaucoup d’utilisateurs des réseaux sociaux cherchent du contenu authentique. ChatGPT reste quand même assez en surface et n’a aucune émotion à transmettre.",
      },
    ],
  },
  {
    id: "3",
    title:
      "Pourquoi faire confiance aux réseaux sociaux pour développer son entreprise ?",
    cover: article2,
    description:
      "Philosopho resultantes histrionici studiorum domus hydraulica paucae non accitur hydraulica cantor oratoris cantor speciem locum clausis studiorum accitur. carpentorum organa speciem sepulcrorum levia fidium accitur levia fabricantur tinnitu clausis sonu organa seriis ludicrarum ignaviae instrumenta speciem ritu artium et cultibus sit organa ludibriis sit perpetuum in philosopho sit nunc non.",
    date: "4.03.2023",
    author: "Workshop by A",
    article: [
      {
        subtitle: "Qu’est-ce que ChatGPT ?",
        description:
          "Le GPT-3 (Generative Pre-trained Transformer 3) est une technologie d’intelligence artificielle qui peut générer du texte créatif à partir de données d’entrée. Il est utilisé pour créer des conversations de chat automatisées qui sont plus naturelles et plus engageantes pour les utilisateurs. Début 2023, l’engouement pour ChatGPT a enfin explosé aux yeux du grand public. On entend parlé partout depuis, même dans cet article !",
      },
      {
        subtitle: "ChatGPT et community manager : deux rôles différents",
        description:
          "lui est responsable de la gestion de la communauté en ligne de l’entreprise ou de la marque, y compris l’engagement des clients et la résolution de problèmes.Bien que ChatGPT puisse être un outil utile pour les community managers, il ne peut pas remplacer complètement leur rôle dans la gestion de la communauté en ligne. Les community managers doivent encore être en mesure de personnaliser les réponses en fonction des besoins individuels des clients et de fournir une expérience de service client exceptionnelle.D’autant plus qu’aujourd’hui beaucoup d’utilisateurs des réseaux sociaux cherchent du contenu authentique. ChatGPT reste quand même assez en surface et n’a aucune émotion à transmettre.",
      },
    ],
  },
  {
    id: "4",
    title: "Comment augmenter votre nombre d'abonnés Instagram en 2023",
    cover: article4,
    description:
      "Philosopho resultantes histrionici studiorum domus hydraulica paucae non accitur hydraulica cantor oratoris cantor speciem locum clausis studiorum accitur. carpentorum organa speciem sepulcrorum levia fidium accitur levia fabricantur tinnitu clausis sonu organa seriis ludicrarum ignaviae instrumenta speciem ritu artium et cultibus sit organa ludibriis sit perpetuum in philosopho sit nunc non.",
    date: "12.03.2023",
    author: "Workshop by A",
    article: [
      {
        subtitle: "Qu’est-ce que ChatGPT ?",
        description:
          "Le GPT-3 (Generative Pre-trained Transformer 3) est une technologie d’intelligence artificielle qui peut générer du texte créatif à partir de données d’entrée. Il est utilisé pour créer des conversations de chat automatisées qui sont plus naturelles et plus engageantes pour les utilisateurs. Début 2023, l’engouement pour ChatGPT a enfin explosé aux yeux du grand public. On entend parlé partout depuis, même dans cet article !",
      },
      {
        subtitle: "ChatGPT et community manager : deux rôles différents",
        description:
          "lui est responsable de la gestion de la communauté en ligne de l’entreprise ou de la marque, y compris l’engagement des clients et la résolution de problèmes.Bien que ChatGPT puisse être un outil utile pour les community managers, il ne peut pas remplacer complètement leur rôle dans la gestion de la communauté en ligne. Les community managers doivent encore être en mesure de personnaliser les réponses en fonction des besoins individuels des clients et de fournir une expérience de service client exceptionnelle.D’autant plus qu’aujourd’hui beaucoup d’utilisateurs des réseaux sociaux cherchent du contenu authentique. ChatGPT reste quand même assez en surface et n’a aucune émotion à transmettre.",
      },
    ],
  },
];
