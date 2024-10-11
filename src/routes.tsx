// React router dom imports
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Page imports
import Home from "./routes/Home.route";
import MobileFilterResults from "./routes/MobileFilterResults.route";
import PageNotFound from "./routes/PageNotFound.route";
import { useEffect } from "react";

// Page element exports
export const homePage = "/";
export const mobileFilterResultsPage = "/mobileFilterResults";
export const pageNotFound = "pageNotFound";

// eslint-disable-next-line react-refresh/only-export-components
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const routes = (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path={homePage} element={<Home />} />
      <Route path={mobileFilterResultsPage} element={<MobileFilterResults />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);

export default routes;
