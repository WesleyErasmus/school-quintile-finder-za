import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "./routes/Home.route";
import MobileFilterResults from "./routes/MobileFilterResults.route";
import PageNotFound from './routes/PageNotFound.route'
import { useEffect } from "react";

export const homePage = "/";
export const mobileFilterResultsPage = "/mobileFilterResults";
export const pageNotFound = "pageNotFound"

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
