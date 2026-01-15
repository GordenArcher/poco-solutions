import { useLocation } from "react-router-dom";
import PageRoutes from "./routes/Routes";
import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";
import { useContext, useEffect, useState } from "react";
import Privacy from "./components/Privacy";
import { AuthContext } from "./utils/context/Context";
import Login from "./pages/Auth/Login";

function App() {
  const [showPolicy, setShowPolicy] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const { showLogin } = useContext(AuthContext);

  useEffect(() => {
    setShowPolicy(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 100);
      });
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <PageRoutes />

      <div>
        <Footer setShowPolicy={setShowPolicy} />
      </div>

      {showPolicy && <Privacy setShowPolicy={setShowPolicy} />}
      {showLogin && <Login />}
    </>
  );
}

export default App;
