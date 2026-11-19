import { MessageCircle } from "lucide-react";
import { AppProvider } from "./context/AppContext.jsx";
import { useHashRoute } from "./hooks/useHashRoute.js";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import BookingModal from "./components/BookingModal.jsx";
import ItemModal from "./components/ItemModal.jsx";
import CartDrawer from "./components/CartDrawer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import Fragrances from "./pages/Fragrances.jsx";
import Packages from "./pages/Packages.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import { whatsappLink } from "./config/site.js";

function Page({ route }) {
  switch (route) {
    case "about": return <About />;
    case "hair": return <ServicePage categoryKey="hair" />;
    case "makeup": return <ServicePage categoryKey="makeup" />;
    case "nails": return <ServicePage categoryKey="nails" />;
    case "eyebrows": return <ServicePage categoryKey="eyebrows" />;
    case "tattoos": return <ServicePage categoryKey="tattoos" />;
    case "fragrances": return <Fragrances />;
    case "packages": return <Packages />;
    case "gallery": return <Gallery />;
    case "contact": return <Contact />;
    default: return <Home />;
  }
}

export default function App() {
  const route = useHashRoute();
  return (
    <AppProvider>
      <Navbar route={route} />
      <main><Page route={route} /></main>
      <Footer />
      <BookingModal />
      <ItemModal />
      <CartDrawer />
      <a className="wa-float" href={whatsappLink("Hello Glow with Gladness!")} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <MessageCircle size={26} />
      </a>
    </AppProvider>
  );
}
