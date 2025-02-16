// src/components/navigation/NavItem.tsx
interface NavItemProps {
    name: string;
    img: string;
  }
  
  // Change from 'export const' to 'export default'
  const NavItem = ({ name, img }: NavItemProps) => (
    <div className="flex flex-col items-center w-24 group">
      <div className="w-16 h-16 mb-2 overflow-hidden relative">
        <img 
          src={img}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-200 
                     group-hover:scale-110 group-hover:brightness-125"
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                        bg-blue-500/10 mix-blend-screen transition-opacity duration-200
                        before:content-[''] before:absolute before:inset-0 
                        before:bg-gradient-to-b before:from-transparent before:to-blue-600/20">
        </div>
      </div>
      <a href="#" className="text-center text-blue-600 text-sm transition-colors duration-200
                            group-hover:text-blue-400 relative overflow-hidden
                            hover:after:content-[''] hover:after:absolute 
                            hover:after:bottom-0 hover:after:left-0 hover:after:w-full 
                            hover:after:h-[2px] hover:after:bg-blue-400">
        {name}
      </a>
    </div>
  );
  
  export default NavItem;