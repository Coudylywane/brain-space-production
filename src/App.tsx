import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop";
import Layout from "./components/layout/Layout";
import "./styles/global.css";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const News = lazy(() => import("./pages/News"));
const Contact = lazy(() => import("./pages/Contact"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const NotFound = lazy(() => import("./pages/NotFound"));

function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-live="polite">
      Chargement…
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <a href="#accueil" className="skip-link">
        Aller au contenu principal
      </a>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/projets/les-trois-flammes" element={<ProjectDetails />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/actualites" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;