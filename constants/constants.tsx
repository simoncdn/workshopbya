import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { GrFacebookOption, GrPinterest } from "react-icons/gr";
import { RiPinterestLine } from "react-icons/ri";
import article1 from "../assets/communitymanager.jpg";
import article2 from "../assets/socialmedia.jpg";
import article3 from "../assets/cm.jpg";
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
    link: "/#contact",
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

export const articles = [
  {
    id: "1",
    title: "Pourquoi choisir un community manager freelance ?",
    cover: article1,
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
    id: "2",
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
    id: "3",
    title: "Restructurer son espace communautaire",
    cover: article3,
    description:
      "Philosopho resultantes histrionici studiorum domus hydraulica paucae non accitur hydraulica cantor oratoris cantor speciem locum clausis studiorum accitur. carpentorum organa speciem sepulcrorum levia fidium accitur levia fabricantur tinnitu clausis sonu organa seriis ludicrarum ignaviae instrumenta speciem ritu artium et cultibus sit organa ludibriis sit perpetuum in philosopho sit nunc non.",
    date: "8.03.2023",
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
