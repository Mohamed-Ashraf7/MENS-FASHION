import g_logo from "./img/G_logo.webp";
import hero from "./img/hero.webp";
import about from "./img/about.webp";
import aboutOne from "./img/about-2.webp";
import aboutTwo from "./img/about-3.webp";
import classic from "./img/classic.jpg";
import blog_1 from "./img/blog-1.webp";
import blog_2 from "./img/blog-2.webp";
import blog_3 from "./img/blog-3.webp";
import blog_4 from "./img/blog-4.jpeg";
import model_1 from "./img/model-1.webp";
import model_2 from "./img/model-2.webp";
import model_3 from "./img/model-3.webp";
import darkWatch from "./img/dark-watch.webp";
import cardAvatar from "./img/media-5.webp";
import cardImg from "./img/watch-2.webp";
import stepOne from "./img/media-1.webp";
import stepTwo from "./img/media-3.webp";
import gallery2 from "./img/media-2.webp";
import gallery4 from "./img/media-4.webp";
import mainimg from "./img/classical.webp";
import team_1 from "./img/team-1.webp";
import team_3 from "./img/team-3.webp";
import team_4 from "./img/team-4.webp";
import PricingLogo from "./img/pricingLogo.png";
import state1 from "./img/state1.png";
import state2 from "./img/state2.png";
import state3 from "./img/state3.png";
import state4 from "./img/state4.png";
import state5 from "./img/state5.png";
import state6 from "./img/state6.png";
import {
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io";
import { AiOutlineGlobal } from "react-icons/ai";
import { FcCallback } from "react-icons/fc";
import {
  IoHeartOutline,
  IoArrowRedoOutline,
  IoLocation,
} from "react-icons/io5";
import { GiLobArrow, GiMoneyStack } from "react-icons/gi";
import { GoComment } from "react-icons/go";
import { SiMoneygram } from "react-icons/si";
import { GrFacebookOption, GrPhone } from "react-icons/gr";
import { MdLibraryAddCheck } from "react-icons/md";
import { TbHomeStar, TbMedal } from "react-icons/tb";

export const headerData = {
  g_logo: g_logo,
};
export const navData = {
  items: [
    { name: "HOME" },
    { name: "ABOUT" },
    { name: "BLOG" },
    { name: "COMMUNITY" },
    { name: "GALLERY" },
    { name: "TEAM" },
    { name: "MEMBERSHIP" },
    { name: "CONTACT" },
  ],
};

export const socialData = [
  { href: "/", icon: <GrFacebookOption /> },
  { href: "/", icon: <IoLogoInstagram /> },
  { href: "/", icon: <IoLogoPinterest /> },
  { href: "/", icon: <IoLogoTwitter /> },
  { href: "/", icon: <IoLogoYoutube /> },
];
export const heroData = {
  image: hero,
  title: "Mens Style Blog",
  subTitle: "James Evans",
  btnText: "Find Out",
  btnIcon: <GiLobArrow />,
};

export const descrData = {
  Title: "A Well-Tied Tie Is The First Serious Step In Life",
  subTitle: "Growing with Fashion",
};

export const aboutData = {
  about: about,
  subTeams: [
    {
      image: aboutOne,
      name: "RAFAEL ARNOLD",
      job: "Stylist",
    },
    { image: aboutTwo, name: "LARRY WALTERS", job: "Fashion Designer" },
  ],
  Title: "The world starts with us  ",
  subTitle: "Every Gentleman Should Subscribe To",
  spanOne: "Simple",
  spanTwo: "Fashion",
  spanThree: "650 Views",
  bottomTitle: "How to Pose for Photos: The Professional Guide",
  spans: [
    "Exciting Elite",
    "Animi looks",
    "Impedit Libero",
    "Exciting look",
  ],
  check: <MdLibraryAddCheck />,
};

export const community = {
  title: "Old Fashion",
  testimonials: [
    {
      image: aboutOne,
      name: "Lauren K.",
      message:
        "“Gymme changed my life. Not only physically but mentally as well. I’m a better mother.”",
    },
    {
      image: classic,
      name: "Mark A.",
      message:
        "“Great location, great price and great, helpful people. What to want more?”",
    },
    {
      image: aboutTwo,
      name: "Jhon D.",
      message:
        "“Love these workouts! Trainers are knowledgeable and motivating”",
    },
  ],
};

export const Blogs = {
  bref: [
    {
      icon: <TbHomeStar />,
      title: "Featuring donations",
      des: " perferendis provident veniam vitae voluptatibus! Adipisci corporis cumque provident velit voluptate.",
    },
    {
      icon: <SiMoneygram />,
      title: "Across the Industry",
      des: "Exercitationem id incidunt iste neque obcaecati , perferendis provident veniam vitae.",
    },
    {
      icon: <GiMoneyStack />,
      title: "Raise Money",
      des: "Adipisci animi et eum ipsum iste obcaecati , Aperiam asperiores blanditiis ducimus..",
    },
  ],
  post: {
    subTitle: "NEXT POST",
    title: "Make an Old Fashioned",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit Adipisci animi et eum ipsum iste obcaecati quaerat voluptate ,consectetur adipisicing elit Adipisci animi et eum ipsum iste obcaecati quaerat voluptate",
  },
  sessionOne: [blog_1, blog_2, blog_4, blog_3],
  sessionTwo: [model_1, model_2, model_3],
  darkWatch: darkWatch,
};
export const statusData = {
  stData: [
    { number: "50+", title: "Client", image: state1 },
    { number: "89+", title: "followers", image: state2 },
    { number: "60+", title: "published articls", image: state3 },
    { number: "8", title: "ted Talks", image: state4 },
    { number: "22", title: "years of experience", image: state5 },
    { number: "10", title: "Workshops", image: state6 },
  ],
};
export const StepsData = {
  cardImg: cardImg,
  cardTitle: "Every Man Should Have A Unique Style",
  cardDes:
    "Metus potenti velit sollicitudin porttitor magnis elit lacini mpor varius, ut cras orci vitae parturient id nisi vulputate consectetur, primis venenatis cursus tristique malesuada viverra congue risus.",
  cardAvatar: cardAvatar,
  stepone: stepOne,
  steptwo: stepTwo,
  stepHeader: "Find Your best Fashion",
  stepDes:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentiumsit soluta iure incidunt labore explicabo eaque, quia  architecto veritatis dolore enim consequatur nihil ipsum.",
  step2Header: "Choose The Way You Styled",
  step2Des:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentiumsit soluta iure incidunt labore explicabo eaque, quia  architecto veritatis dolore enim consequatur nihil ipsum.",
};
export const NewsData = {
  mainImg: mainimg,
  leftSide: [
    {
      icon: <MdLibraryAddCheck />,
      title: "EXCLUSIVE",
      parag: "Donec sed elit quis odio mollis dignissim eget et nulla.",
      sub: "47 minutes ago by",
      author: "Leroy Jenkins",
    },
    {
      icon: <MdLibraryAddCheck />,
      title: "Fashioned",
      parag: "Donec sed elit quis odio mollis dignissim eget et nulla.",
      sub: "1 Hour ago by",
      author: "john matt",
    },
    {
      icon: <MdLibraryAddCheck />,
      title: "Classic",
      parag: "Donec sed elit quis odio mollis dignissim eget et nulla.",
      sub: "2 Hours ago by",
      author: "cristena Dimond",
    },
  ],
  rightSide: [
    {
      image: blog_2,
      title: "Aenean ac tristique lorem, ut mollis dui.",
      time: "5 minutes ago",
      sub: "classic",
    },
    {
      image: model_1,
      title: "Nulla consectetur efficitur..",
      time: "14 minutes ago",
      sub: "Fashion",
    },
    {
      image: aboutOne,
      title: "Vitae semper augue purus tincidunt libero..",
      time: "22 minutes ago",
      sub: "business",
    },
    {
      image: aboutTwo,
      title: "Suspendisse potenti.",
      time: "37 minutes ago",
      sub: "World",
    },
  ],
};

export const quoteData = {
  image: darkWatch,
  title: "Get Our Updates",
  parag: "Find out about events and other new collections",
  btnText: "Subscribe",
  summery: [
    {
      title: "Every Start of Season !",
      parag:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque in fugiat magni, quas animi enim veritatis deleniti ex.Impedit.",
    },
    {
      title: "ordering what You Need ..",
      parag:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Estaspernatur quae maiores corrupti! Libero voluptate a doloribus?.",
    },
  ],
  quots: [
    {
      medal: <TbMedal />,
      arrow: <IoArrowRedoOutline />,
      quote:
        "If people turn to look at you on the street, you are not well dressed, but either too stiff, too tight, or too fashionable..",
      image: blog_2,
      span: "Read full story",
      author: "Hardy Amies",
      sub: "Founder, company",
    },
    {
      medal: <TbMedal />,
      arrow: <IoArrowRedoOutline />,
      quote:
        "To achieve the nonchalance, which is absolutely necessary for a man, one article at least must not match.",
      image: model_1,
      span: "Read full story",
      author: "Marc Jacobs",
      sub: "manger, designer",
    },
  ],
};
export const galleryData = {
  title: "Social Gallery",
  heart: <IoHeartOutline />,
  Comment: <GoComment />,
  gallery: [
    stepOne,
    hero,
    gallery4,
    stepTwo,
    gallery2,
    aboutTwo,
    cardAvatar,
    about,
    darkWatch,
    stepOne,
    mainimg,
    stepTwo,
  ],
};
export const teamData = {
  subtitle: "DEVELOPMENT TEAM",
  title: "The talented people behind the scenes",
  cards: [
    {
      img: team_1,
      author: "Sam smith",
      work: "Visual Designer",
      des: "Product designer with interests in immersive computing and XR,",
    },
    {
      img: team_4,
      author: "tom wide",
      work: "Graphic Design",
      des: "Our services encompass the assessment and repair of property",
    },
    {
      img: team_3,
      author: "John william",
      work: "Social Manger",
      des: "CEO's role in raising company's corporate is to establish an atmosphere",
    },
  ],
};
export const Membership = {
  memberTitle: "Premium Membership Plan",
  memberText:
    "  Metus potenti velit sollicitudin porttitor magnis elit lacinia tempor varius, ut cras orci vitae parturient id nisi vulputateconsectetur, primis venenatis cursus tristique malesuada viverra congue risus. className dui ut ullamcorper ultrices  arcu ad varius adipiscing, aliquet imperdiet hendrerit orci fusce ante felis, mi mus vel finibus viverra nibh taciti.",
  subText: "What's included",
  btnText: "Get Access",
  btnIcon: <GiLobArrow />,
  monthText:
    "  You can contact us whenever you need help or just curious about something.",
  Features: [
    { CheckIcon: <MdLibraryAddCheck />, text: "Private access" },
    { CheckIcon: <MdLibraryAddCheck />, text: "Access to new updates" },
    { CheckIcon: <MdLibraryAddCheck />, text: "Additional  Resources" },
    { CheckIcon: <MdLibraryAddCheck />, text: "Extensive documentation" },
    { CheckIcon: <MdLibraryAddCheck />, text: "Personal license" },
    { CheckIcon: <MdLibraryAddCheck />, text: "Email support" },
  ],
  Logo: PricingLogo,
};

export const contactData = {
  image: mainimg,
  info: [
    { icon: <AiOutlineGlobal />, text: "United States" },
    { icon: <IoLocation />, text: "New York, 94126" },
    { icon: <GrPhone />, text: "+ 01 234 567 89" },
    { icon: <FcCallback />, text: "Tax ID: 273 384" },
  ],
};
export const footerData = {
  logo: g_logo,
  ul_one: [
    { text: "Features" },
    { text: "Integrations" },
    { text: "Pricing" },
    { text: "FAQ" },
  ],
  ul_two: [{ text: "Privacy" }, { text: "Terms of Service" }],
  ul_three: [
    { text: "Public API" },
    { text: "Documentation" },
    { text: "Guides" },
  ],
};
