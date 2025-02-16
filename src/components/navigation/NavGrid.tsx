// src/components/navigation/NavGrid.tsx
import NavItem from './NavItem';  // Change this line

export const NavGrid = () => {
  const navItems = [
    { name: "Glitch Lines", img: "/images/glitch1.jpg" },
    { name: "Wave Pattern", img: "/images/glitch2.jpg" },
    { name: "Scan Lines", img: "/images/glitch3.jpg" },
    { name: "Static", img: "/images/glitch4.jpg" }
  ];

  return (
    <div className="flex justify-center gap-4 mb-8 flex-wrap">
      {navItems.map((item) => (
        <NavItem key={item.name} {...item} />
      ))}
    </div>
  );
};