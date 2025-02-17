import { useState } from "react";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Início", href: "#" },
    { name: "Sobre Nós", href: "#about" },
    { name: "Planos", href: "#plans" },
    { name: "Aulas", href: "#classes" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <Container>
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-orange-500">GymFit</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Button variant="primary" size="sm">
              Matricule-se agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <span className="sr-only">Abrir menu</span>
            {/* Ícone de menu aqui */}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-1 pb-2 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-orange-500"
                >
                  {item.name}
                </a>
              ))}
              <Button variant="primary" size="sm" className="w-full mt-4">
                Matricule-se agora
              </Button>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
