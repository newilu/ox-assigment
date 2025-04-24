import React from "react";

import * as SC from "./styled";
import { Link } from "react-router-dom";
import { Button } from "../../../shared/ui/button";
import { useAuth } from "../../../context/auth/AuthContext";

function Navbar() {
  const { auth, logout } = useAuth();
  return (
    <>
      <div style={{ marginBottom: 85 }} />
      <SC.Root>
        <div className="container">
          <Link to="/">Employees</Link>
          {auth.accessToken ? (
            <Button onClick={logout} variant="outlined" label="Log Out" />
          ) : (
            <Button as="a" to="/login" variant="outlined" label="Log In" />
          )}
        </div>
      </SC.Root>
    </>
  );
}

export { Navbar };
