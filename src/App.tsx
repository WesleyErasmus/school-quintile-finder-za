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
import { LoadingProvider } from "./contexts/loading-context.hook";
import { ErrorProvider } from "./contexts/error-context.hook";

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
      <LoadingProvider>
        <ErrorProvider>
          <LoaderFullPage />
          <div className="top-0 z-[-2] h-full w-full bg-slate-100 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(226,232,240,.5)_100%)]">
            <BrowserRouter>
              <TopNavbar />
              <ScrollToTop />
              <Routes>
                <Route path={homePage} element={<Home />} />
                <Route
                  path={mobileFilterResultsPage}
                  element={<MobileFilterResults />}
                />
                <Route
                  path={quintileSystemBlog}
                  element={<QuintileSystemBlog />}
                />
                <Route
                  path={quintileReportingBlog}
                  element={<QuintileReportingBlog />}
                />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </div>
        </ErrorProvider>
      </LoadingProvider>
    </DataProvider>
  );
}

export default App;
