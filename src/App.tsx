// Data imports
import { DataProvider } from "./contexts/data-context.hook";

// Component imports
import LoaderFullPage from "./components/LoaderFullPage";

// Route imports
import routes from "./routes";

function App() {
  return (
    <DataProvider>
      <LoaderFullPage />
      <div className="bg-[#FAFBFF] bg-[radial-gradient(ellipse_80%_80%_at_50%_0%,#E5E6F6,rgba(255,255,255,0))]">
        {routes}
      </div>
    </DataProvider>
  );
}

export default App;
