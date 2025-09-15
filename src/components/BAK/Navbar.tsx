// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { useTheme } from "./ThemeProvider";
// import { Button } from "@/components/ui/button";
// import { Microscope, Menu, X, Moon, Sun } from "lucide-react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const { theme, setTheme } = useTheme();
//   const location = useLocation();

//   const navigation = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     { name: "Services", href: "/services" },
//     { name: "Solutions", href: "/solutions" },
//     { name: "Partners", href: "/partners" },
//     { name: "Insights", href: "/insights" },
//     { name: "Careers", href: "/careers" },
//     { name: "Contact", href: "/contact" },
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <Link
//             to="/"
//             className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
//             data-testid="logo-link"
//           >
//             {/* <Microscope className="h-8 w-8 text-primary" /> */}
//             <img src='logo-01.png' width='80px'/>
//             <span className="text-xl font-bold">Central Lab Ventures</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.href}
//                 className={`text-sm font-medium transition-colors hover:text-primary ${
//                   isActive(item.href) ? "text-primary" : "text-foreground"
//                 }`}
//                 data-testid={`nav-${item.name.toLowerCase()}`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>

//           <div className="flex items-center space-x-4">
//             {/* Theme Toggle */}
//             <Button
//               variant="outline"
//               size="icon"
//               onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//               data-testid="theme-toggle"
//             >
//               {theme === "light" ? (
//                 <Moon className="h-4 w-4" />
//               ) : (
//                 <Sun className="h-4 w-4" />
//               )}
//             </Button>

//             {/* Mobile Menu Button */}
//             <Button
//               variant="outline"
//               size="icon"
//               className="md:hidden"
//               onClick={() => setIsOpen(!isOpen)}
//               data-testid="mobile-menu-toggle"
//             >
//               {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-background border-t border-border"
//           >
//             <div className="px-4 py-2 space-y-2">
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.href}
//                   className={`block py-2 transition-colors hover:text-primary ${
//                     isActive(item.href) ? "text-primary" : "text-foreground"
//                   }`}
//                   onClick={() => setIsOpen(false)}
//                   data-testid={`mobile-nav-${item.name.toLowerCase()}`}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }
