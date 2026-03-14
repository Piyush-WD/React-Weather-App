import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

type NavbarProps = {
  user: any;
};

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <nav
      style={{
        background: "#1e293b",
        color: "white",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2>Weather App</h2>

      <div>
        <Link
          to="/"
          style={{
            color: "white",
            marginRight: "20px",
            textDecoration: "none",
          }}
        >
          Home
        </Link>

        {!user ? (
          <>
            <Link
              to="/signin"
              style={{
                color: "white",
                marginRight: "20px",
                textDecoration: "none",
              }}
            >
              Signin
            </Link>

            <Link
              to="/signup"
              style={{ color: "white", textDecoration: "none" }}
            >
              Signup
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            style={{
              background: "transparent",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
