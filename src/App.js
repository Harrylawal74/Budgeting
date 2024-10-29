// imports ColorModeContext and useMode from themes.js //
import { ColorModeContext, useMode } from './theme';

// imports normal CSS themes (CssBaseline) and allows us to pass our themes into material ui (ThemeProvider)) //
import { CssBaseline, ThemeProvider } from "@mui/material";


// imports top bar component from scenes folder //
import Topbar from "./scenes/global/Topbar";

function App() {
  //gives us access the the theme and color mode //
  const [theme, colorMode] = useMode();
  

  return (
    // gives access to colorcontext everywhere //
    // gives material ui access to colorcontext  //
    // <CssBaseline /> resets css to defaults //
    <ColorModeContext.Provider value = {colorMode}>
      <ThemeProvider theme = {theme}>
        <CssBaseline />
        <div className="app">
          <main className='content'>
            <Topbar/>
            </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
