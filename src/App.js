import { CssBaseline } from "@mui/material";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
// import globalTheme from "./helpers/theme.js";
import { data } from "./helpers/data";

function App() {
    document.head.title = "Shlomo Halperin's Portfolio";
    return (
        <>
            <CssBaseline />
            <Navbar />
            <main style={{ backgroundColor: "#00000035" }}>
                <Homepage data={data} />
            </main>
            <Footer />
        </>
    );
}

export default App;
