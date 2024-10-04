import TopNavbar from "./components/TopNavbar";
import Home from "./routes/Home.route";

function App() {
  return (
    <>
      <div className="mx-auto max-w-[1230px]">
        <TopNavbar />
        <Home />
      </div>
    </>
  );
}

export default App;
