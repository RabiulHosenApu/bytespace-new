export type NavLink = { label: string; href: string };

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/#courses" },
  { label: "Creators", href: "/#creators" },
];

export const avatars = [
  "/images/avatars/a1.jpg",
  "/images/avatars/a2.jpg",
  "/images/avatars/a3.jpg",
  "/images/avatars/a4.jpg",
  "/images/avatars/a5.jpg",
  "/images/avatars/a6.jpg",
];

export const courseTags = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
] as const;

export type CourseTag = (typeof courseTags)[number];

export type Course = {
  id: string;
  title: string;
  author: string;
  image: string;
  rating: number;
  price: number;
  lessons: number;
  duration: string;
  comments: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  enrolled: number;
  tags: CourseTag[];
};

export const courses: Course[] = [
  {
    id: "figma-basics",
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    image: "/images/courses/figma.jpg",
    rating: 4.5,
    price: 25,
    lessons: 17,
    duration: "2 hours 15 mins",
    comments: 69,
    level: "Beginner",
    enrolled: 26,
    tags: ["Featured", "UI/UX Design", "Graphic Design"],
  },
  {
    id: "digital-asset",
    title: "Build Digital Asset",
    author: "purepearl studio",
    image: "/images/courses/digital-asset.jpg",
    rating: 4.5,
    price: 25,
    lessons: 17,
    duration: "2 hours 15 mins",
    comments: 69,
    level: "Beginner",
    enrolled: 26,
    tags: ["Featured", "Digital Illustration", "Web Development"],
  },
  {
    id: "big-data",
    title: "The Power of Big Data",
    author: "purepearl studio",
    image: "/images/courses/big-data.jpg",
    rating: 4.5,
    price: 25,
    lessons: 17,
    duration: "2 hours 15 mins",
    comments: 69,
    level: "Beginner",
    enrolled: 26,
    tags: ["Featured", "Data Science"],
  },
  {
    id: "productivity",
    title: "Balancing Productivity and Wellbeing",
    author: "purepearl studio",
    image: "/images/courses/productivity.jpg",
    rating: 4.5,
    price: 25,
    lessons: 17,
    duration: "2 hours 15 mins",
    comments: 69,
    level: "Beginner",
    enrolled: 26,
    tags: ["Featured", "Productivity"],
  },
  {
    id: "money-management",
    title: "Mastering Money Management",
    author: "purepearl studio",
    image: "/images/courses/money.jpg",
    rating: 4.5,
    price: 25,
    lessons: 17,
    duration: "2 hours 15 mins",
    comments: 69,
    level: "Beginner",
    enrolled: 26,
    tags: ["Featured", "Freelance & Entrepreneurship", "Productivity"],
  },
  {
    id: "idea-to-startup",
    title: "From Idea to Startup Success",
    author: "purepearl studio",
    image: "/images/courses/startup.jpg",
    rating: 4.5,
    price: 25,
    lessons: 17,
    duration: "2 hours 15 mins",
    comments: 69,
    level: "Beginner",
    enrolled: 26,
    tags: ["Featured", "Freelance & Entrepreneurship", "Marketing"],
  },
];

export const categories = [
  { name: "Design", icon: "pen" },
  { name: "Development", icon: "code" },
  { name: "IT & Software", icon: "laptop" },
  { name: "Business", icon: "building" },
  { name: "Marketing", icon: "megaphone" },
  { name: "Photography", icon: "camera" },
] as const;

export const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export const creatorBenefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/avatars/a2.jpg",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/avatars/a1.jpg",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/avatars/a3.jpg",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export const footerLinks: NavLink[][] = [
  [
    { label: "Featured Courses", href: "/#courses" },
    { label: "Featured Categories", href: "/#categories" },
    { label: "Business", href: "/#categories" },
    { label: "IT", href: "/#categories" },
    { label: "Design", href: "/#categories" },
  ],
  [
    { label: "Development", href: "/#categories" },
    { label: "Marketing", href: "/#categories" },
    { label: "Photography", href: "/#categories" },
    { label: "Finance", href: "/#categories" },
    { label: "Sport", href: "/#categories" },
  ],
  [
    { label: "Become a Creator", href: "/signup" },
    { label: "Affiliate Program", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Help", href: "#" },
    { label: "About", href: "#" },
  ],
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookies Settings", href: "#" },
];
