import Footer from "./components/Footer";
import LoaderFullPage from "./components/LoaderFullPage";
// import TopNavbar from "./components/TopNavbar";
import { DataProvider } from "./contexts/data-context.hook";
import routes from "./routes";
// import Home from "./routes/Home.route";

function App() {
  return (
    <DataProvider>
      <LoaderFullPage />
      <div className="bg-[#FAFBFF] bg-[radial-gradient(ellipse_80%_80%_at_50%_0%,#E5E6F6,rgba(255,255,255,0))]">
        {/* <TopNavbar /> */}
        {/* <Home /> */}
        {routes}
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
