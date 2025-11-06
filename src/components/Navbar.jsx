import { useState } from "react";
import { Menu, X } from "lucide-react"; // simple icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Vrinda Dixit</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
          <li><a href="#hero" className="hover:text-blue-500">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sliding Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center mt-20 space-y-8 text-lg">
          <a href="#hero" onClick={() => setIsOpen(false)} className="hover:text-blue-500">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-blue-500">About</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-blue-500">Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-blue-500">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
