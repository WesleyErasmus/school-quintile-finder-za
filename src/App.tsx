// Data imports
import { DataProvider } from "./contexts/data-context.hook";

// Component imports
import LoaderFullPage from "./components/LoaderFullPage";

// Route imports
// import routes from "./routes";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Page imports
import Home from "./routes/Home.route";
import MobileFilterResults from "./routes/MobileFilterResults.route";
import PageNotFound from "./routes/PageNotFound.route";
import QuintileSystemBlog from "./routes/Blogs/QuintileSystemBlog.route";
import QuintileReportingBlog from "./routes/Blogs/QuintileReportingBlog.route";
import TopNavbar from "./components/TopNavbar";
import Footer from "./components/Footer";

// Page element exports
export const homePage = "/";
export const mobileFilterResultsPage = "/mobileFilterResults";
export const pageNotFound = "/pageNotFound";
export const quintileSystemBlog = "/blogs/quintileSystemBlog";
export const quintileReportingBlog = "/blogs/QuintileReportingBlog";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <DataProvider>
      <LoaderFullPage />
      <div className="bg-[#FAFBFF] bg-[radial-gradient(ellipse_80%_80%_at_50%_0%,#E5E6F6,rgba(255,255,255,0))]">
        <BrowserRouter>
          <TopNavbar />
          <ScrollToTop />
          <Routes>
            <Route path={homePage} element={<Home />} />
            <Route
              path={mobileFilterResultsPage}
              element={<MobileFilterResults />}
            />
            <Route path={quintileSystemBlog} element={<QuintileSystemBlog />} />
            <Route
              path={quintileReportingBlog}
              element={<QuintileReportingBlog />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </DataProvider>
  );
}

export default App;
