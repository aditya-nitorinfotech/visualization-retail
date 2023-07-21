import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./pages/common/TopBar";
import SideBar from "./pages/common/SideBar";
import Dashboard from "./pages/dashboard";
// import BarGraph from "./pages/barGraph";
// import PieChart from "./pages/pieChart";
// import LineChart from "./pages/lineChart";

import { Routes, Route } from "react-router-dom";
import FAQ from "./components/FAQ";

function App() {
  const [theme, ColorMode] = useMode();

  return (
    <ColorModeContext.Provider value={ColorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/bar" element={<BarGraph />} />
              <Route path="/pie" element={<PieChart />} />
              <Route path="/line" element={<LineChart />} /> */}
              <Route path="/faq" element={<FAQ/>} />
            
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
