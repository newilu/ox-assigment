import React from "react";
import api from "../../shared/utils/api";

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
}

interface AuthContextType {
  auth: AuthState;
  login: (accessToken: string, refreshToken: string) => void;
  logout: () => void;
  refreshAccessToken: () => Promise<string>;
}

const AuthContext = React.createContext<AuthContextType>({
  auth: { accessToken: null, refreshToken: null },
  login: () => {},
  logout: () => {},
  refreshAccessToken: async () => "",
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [auth, setAuth] = React.useState<AuthState>({
    accessToken: localStorage.getItem("accessToken"),
    refreshToken: localStorage.getItem("refreshToken"),
  });

  React.useLayoutEffect(() => {
    api.defaults.headers.common["Authorization"] = auth.accessToken
      ? `Bearer ${auth.accessToken}`
      : "";
  }, [auth.accessToken]);

  const login = (accessToken: string, refreshToken: string) => {
    setAuth({ accessToken, refreshToken });
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  };

  const logout = () => {
    setAuth({ accessToken: null, refreshToken: null });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  const refreshAccessToken = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken) {
        const res = await api.post("/auth/refresh", { refreshToken });
        const newAccessToken = res.data.accessToken;
        login(newAccessToken, refreshToken);
        return newAccessToken;
      } else {
        logout();
        throw new Error("No refresh token");
      }
    } catch (err) {
      logout();
      throw err;
    }
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout, refreshAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
