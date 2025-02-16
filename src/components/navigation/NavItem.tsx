// src/components/navigation/NavItem.tsx
interface NavItemProps {
    name: string;
    img: string;
  }
  
  export const NavItem = ({ name, img }: NavItemProps) => (
    <div className="flex flex-col items-center w-24">
      <img 
        src={`/api/placeholder/60/60`}
        alt={name}
        className="w-16 h-16 mb-2"
      />
      <a href="#" className="text-center text-red-600 text-sm hover:underline">
        {name}
      </a>
    </div>
  );