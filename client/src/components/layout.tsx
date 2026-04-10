import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { Menu, X, Phone, MapPin, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

import logo from "@assets/IMG_3316_1767560018289.jpg";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Expertise", href: "#expertise" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-border py-2"
          : "bg-transparent border-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-4">
          <div className="relative w-12 h-12 overflow-hidden bg-white p-1 rounded-sm shadow-sm group-hover:shadow-md transition-shadow flex items-center justify-center">
            <img 
              src={logo} 
              alt="MASS ENGINEERING Logo" 
              className="max-w-[140%] max-h-[140%] object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className={`text-xl font-bold tracking-tight transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}>
              MASS ENGINEERING
            </span>
            <span className={`text-[0.6rem] tracking-[0.2em] uppercase font-bold ${isScrolled ? "text-primary" : "text-secondary"}`}>
              Architects & Engineers
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-secondary ${
                isScrolled ? "text-foreground/80" : "text-white/90"
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button 
            className={`bg-secondary hover:bg-secondary/90 text-primary-foreground font-semibold rounded-none px-6 ${
              !isScrolled && "bg-white text-black hover:bg-white/90"
            }`}
            asChild
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? "text-foreground" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-foreground" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 shadow-lg"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full bg-primary text-white rounded-none mt-4" asChild>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white py-20 border-t border-white/10 high-authority">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white p-1 rounded-sm overflow-hidden flex items-center justify-center">
                <img src={logo} alt="MASS ENGINEERING" className="max-w-[140%] max-h-[140%] object-contain" />
              </div>
              <h2 className="text-3xl font-bold">MASS ENGINEERING</h2>
            </div>
            <p className="text-gray-300 max-w-md mb-8 leading-relaxed">
              Engineering Safety. Building Trust. Delivering Redevelopment Excellence.
              <br />
              A legacy of over 40 years in structural auditing and redevelopment consultancy.
            </p>
            <div className="flex flex-col gap-2 text-sm text-gray-500">
              <span>© {new Date().getFullYear()} MASS ENGINEERING. All rights reserved.</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest text-xs">Services</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Structural Audit</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Redevelopment</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Repairs & Rehab</a></li>
              <li><a href="#" className="hover:text-white transition-colors">PMC Services</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest text-xs">Contact</h3>
            <div className="space-y-6 text-gray-400">
              <div>
                <strong className="block text-white mb-2 font-medium">Vashi Office</strong>
                <p>9545730344 / 7718015513</p>
              </div>
              <div>
                <strong className="block text-white mb-2 font-medium">Vasai Office</strong>
                <p>83900 69083 / 93210 99506<br/>88560 03576</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
          </div>
          <span>Designed with Precision</span>
        </div>
      </div>
    </footer>
  );
}
