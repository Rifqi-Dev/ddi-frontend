import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
    else {
      const payload = jwtDecode(token);
      setUser(payload.username);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div>
      <h3>Hi {user}</h3>
      <button
        type="submit"
        className="p-5 bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onClick={() => logout()}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
