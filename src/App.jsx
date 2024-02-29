// import React from "react";
// import { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import "./App.css";
// import { ThemeProvider } from "./contexts/theme";
// import ThemeBtn from "./components/ThemeBtn";
// import Home from "./pages/Home";
// import About from "./pages/About";

// function App() {
//   const storedTheme = localStorage.getItem("theme") || "light";
//   const [themeMode, setThemeMode] = useState(storedTheme);

//   const lightTheme = () => {
//     setThemeMode("light");
//   };

//   const darkTheme = () => {
//     setThemeMode("dark");
//   };

//   useEffect(() => {
//     document.body.classList.remove("light", "dark");
//     document.body.classList.add(themeMode);
//     localStorage.setItem("theme", themeMode);
//   }, [themeMode]);

//   return (
//     <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
//       <Router>
//         <ThemeBtn />
//         <nav>
//           <ul className="text-yellow-900 flex space-x-4 p-4">
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//           </ul>
//         </nav>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </Router>
//     </ThemeProvider>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import ThemeBtn from "./components/ThemeBtn";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ThemeBtn />
        <nav>
          <ul className="text-yellow-900 flex space-x-4 p-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
