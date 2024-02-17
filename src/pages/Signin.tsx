import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Signin = () => {
  const [username, setUsername] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleUsername: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setUsername(e.target.value);

  const fromPage = location.state?.from?.pathname || "/";

  return (
    <>
      <input type="text" value={username} onChange={handleUsername} />
      <button type="submit">Sign in</button>
      {fromPage}
    </>
  );
};

export default Signin;
