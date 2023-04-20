import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Advice from "./pages/Advice";
import Signin from "./pages/Signin"; // Corrigé : le chemin d'importation a été modifié pour inclure le dossier './pages'
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AuthContextProvider from "./AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/advice" element={<Advice />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
