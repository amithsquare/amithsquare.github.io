import { lazy, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const FarmhouseArchitecture = lazy(
  () => import("./pages/FarmhouseArchitecture"),
);
const CorporateOfficeDesign = lazy(
  () => import("./pages/CorporateOfficeDesign"),
);
const ShowroomDesign = lazy(() => import("./pages/ShowroomDesign"));
const RestaurantCafeDesign = lazy(() => import("./pages/RestaurantCafeDesign"));
const CommercialArchitecture = lazy(
  () => import("./pages/CommercialArchitecture"),
);
const TurnkeyProjects = lazy(() => import("./pages/TurnkeyProjects"));
const InteriorDesign = lazy(() => import("./pages/InteriorDesign"));
const ArchitecturalDesign = lazy(() => import("./pages/ArchitecturalDesign"));
const Renovation = lazy(() => import("./pages/Renovation"));
const Visualization3D = lazy(() => import("./pages/Visualization3D"));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-background selection:bg-gold selection:text-primary">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route
                  path="/farmhouse-architecture"
                  element={<FarmhouseArchitecture />}
                />
                <Route
                  path="/corporate-office-design"
                  element={<CorporateOfficeDesign />}
                />
                <Route path="/showroom-design" element={<ShowroomDesign />} />
                <Route
                  path="/restaurant-cafe-design"
                  element={<RestaurantCafeDesign />}
                />
                <Route
                  path="/commercial-architecture"
                  element={<CommercialArchitecture />}
                />
                <Route path="/turnkey-projects" element={<TurnkeyProjects />} />
                <Route path="/interior-design" element={<InteriorDesign />} />
                <Route
                  path="/architectural-design"
                  element={<ArchitecturalDesign />}
                />
                <Route path="/renovation" element={<Renovation />} />
                <Route path="/3d-visualization" element={<Visualization3D />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:slug" element={<ProjectDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
              </Routes>
            </main>
            <FloatingWhatsApp />
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}
