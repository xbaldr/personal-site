// src/components/navigation/NavGrid.tsx
import { NavItem } from './NavItem';

export const NavGrid = () => {
  const navItems = [
    { name: "Glitch Lines", img: "/glitch1.jpg" },
    { name: "Wave Pattern", img: "/glitch2.jpg" },
    { name: "Scan Lines", img: "/glitch3.jpg" },
    { name: "Static", img: "/glitch4.jpg" },
    { name: "Projects", img: "/api/placeholder/60/60" },
    { name: "Contact", img: "/api/placeholder/60/60" }
  ];

  return (
    <div className="flex justify-center gap-4 mb-8 flex-wrap">
      {navItems.map((item) => (
        <NavItem key={item.name} {...item} />
      ))}
    </div>
  );
};