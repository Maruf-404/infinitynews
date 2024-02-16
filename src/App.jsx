import {useState} from 'react'
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import News  from "./components/News/News";
import { Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ModeProvider } from './contexts/modeContext';

function App() {
  const [progress, setProgress] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });


  return (        
     <ModeProvider value={{darkMode, setDarkMode}} >
    <ThemeProvider theme={darkTheme}>    
          <CssBaseline />                        
    <div style={{height: "100vh", width: "100vw"}}>
      <Navbar />
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      <Routes>
        <Route exact path="/" element={<News setProgress={setProgress} category={"general"}  key={"general"}  />} />
        <Route exact path="/home" element={<News setProgress={setProgress} category={"general"}  key={"general"}  />} />
        <Route exact path="/business"  element={<News setProgress={setProgress} category={"business"} />} key={"business"} />
        <Route
          path="/entertainment"
          element={<News setProgress={setProgress} category={"entertainment"} key={"entertainment"} />}
        />
        <Route exact path="/general" element={<News setProgress={setProgress} category={"general"} key={"general"} />} />
        <Route exact path="/health" element={<News setProgress={setProgress} category={"health"} />} key={"health"} />
        <Route exact path="/science" element={<News setProgress={setProgress} category={"science"} />} key={"science"} />
        <Route exact path="/sports" element={<News setProgress={setProgress} category={"sport"} />} key={"sports"} />
        <Route exact path="/technology" element={<News setProgress={setProgress} category={"technology"} />} key={"technology"} />
      </Routes>
    </div>
  </ThemeProvider>
  </ModeProvider>
  );
}

export default App;
