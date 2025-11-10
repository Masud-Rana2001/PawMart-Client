import { FaPaw, FaBone, FaTshirt, FaCapsules, FaGrinStars } from 'react-icons/fa';


export const categories = [
    { 
        id: 1, 
        name: "Pets (Adoption)", 
        icon: <FaPaw size={32} className="text-emerald-700 dark:text-emerald-300" />, 
        color: "bg-emerald-100 dark:bg-emerald-800",
        route: "Pets_Adoption", 
        description: "Find your forever furry friend today!"
    },
    { 
        id: 2, 
        name: "Pet Food & Treats", 
        icon: <FaBone size={32} className="text-orange-700 dark:text-orange-300" />, 
        color: "bg-orange-100 dark:bg-orange-800",
        route: "Pet_Food", 
        description: "Nutritious meals and delicious snacks."
    },
    { 
        id: 3, 
        name: "Accessories", 
        icon: <FaTshirt size={32} className="text-indigo-700 dark:text-indigo-300" />, 
        color: "bg-indigo-100 dark:bg-indigo-800",
        route: "Accessories", 
        description: "Collars, leashes, beds, and more essentials."
    },
    { 
        id: 4, 
        name: "Pet Health & Care", 
        icon: <FaCapsules size={32} className="text-pink-700 dark:text-pink-300" />, 
        color: "bg-pink-100 dark:bg-pink-800",
        route: "Pet_Care_Products", 
        description: "Vitamins, grooming, and health supplements."
    },
    { 
        id: 5, 
        name: "Toys & Play", 
        icon: <FaGrinStars size={32} className="text-yellow-700 dark:text-yellow-300" />, 
        color: "bg-yellow-100 dark:bg-yellow-800",
        route: "Pet_Toys", 
        description: "Interactive and fun toys for all pets."
    },
];

export const petHeroes = [
    {
        id: 1,
        name: "Nabila Faria",
        role: "Adopter of 'Tigris' (Cat)",
        quote: "Tigris brought so much warmth and fun into our lives. Adopting her was the best decision we ever made!",
        image: "https://parkofideas.com/ricky/demo/wp-content/uploads/2022/11/ricky-169.jpg" 
    },
    {
        id: 2,
        name: "Salman Khan",
        role: "Volunteer Caregiver",
        quote: "Seeing the transformation in a rescued dog is incredibly rewarding. Every pet deserves this chance.",
        image: "/images/heroes/salman_khan.jpg"
    },
    {
        id: 3,
        name: "Dr. Emon",
        role: "Adopter of 'Buddy' (Dog)",
        quote: "Buddy is our furry best friend. PawMart made the adoption process so easy and supportive.",
        image: "https://parkofideas.com/ricky/demo/wp-content/uploads/2022/11/ricky-172.jpg"
    },
    {
        id: 4,
        name: "Jahanara Alom",
        role: "Adopter of 'Buddy' (Dog)",
        quote: ".",
        image: "https://parkofideas.com/ricky/demo/wp-content/uploads/2022/11/ricky-168.jpg"
    }
    
];