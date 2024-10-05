import Footer from "./components/Footer";
import TopNavbar from "./components/TopNavbar";
import Home from "./routes/Home.route";

function App() {
  return (
    <>
      <div className="mx-auto max-w-[1230px]">
        <TopNavbar />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
