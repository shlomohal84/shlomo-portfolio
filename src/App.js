import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import globalTheme from "./helpers/theme.js";
import { data } from "./helpers/data";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <main>
        <Homepage data={data} />
      </main>
      <Footer />
    </>
  );
}

export default App;
