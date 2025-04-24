import React from "react";
import { useAuth } from "../../../context/auth";
import api from "../../../shared/utils/api";
import { Input } from "../../../shared/ui/input";
import { Button } from "../../../shared/ui/button";

import * as SC from "./styled";

function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", { username, password });
      login(res.data.accessToken, res.data.refreshToken);
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <SC.Form onSubmit={handleSubmit}>
      <Input
        name="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <Input
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <Button size="large" fullWidth type="submit" label="Login" />
    </SC.Form>
  );
}

export { Login };
