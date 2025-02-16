import { Logo } from '../components/layout/Logo';
import { Divider } from '../components/layout/Divider';
import { Welcome } from '../components/welcome/Welcome';
import { NavGrid } from '../components/navigation/NavGrid';
import { Footer } from '../components/footer/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-8">
      <Logo />
      <div className="w-full max-w-2xl">
        <Divider />
        <Welcome />
        <NavGrid />
        <Divider />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;