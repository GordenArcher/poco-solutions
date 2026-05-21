import { useLocation } from "react-router-dom";
import PageRoutes from "./routes/Routes";
import Footer from "./layout/Footer";
import { useContext, useEffect, useState } from "react";
import Privacy from "./components/Privacy";
import { AuthContext } from "./utils/context/Context";
import Login from "./pages/Auth/Login";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  const [showPolicy, setShowPolicy] = useState(false);

  const location = useLocation();
  const { showLogin } = useContext(AuthContext);

  useEffect(() => {
    setShowPolicy(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  return (
    <>
      <PageRoutes />

      <div>
        <Footer setShowPolicy={setShowPolicy} />
      </div>

      <WhatsAppButton />
      {showPolicy && <Privacy setShowPolicy={setShowPolicy} />}
      {showLogin && <Login />}
    </>
  );
}

export default App;
