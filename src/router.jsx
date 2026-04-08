import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Accountsetting, Home, Login, Registration } from "./pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Registration />} />
          <Route path="profile" element={<Accountsetting />} />
          <Route path="*" element={<div>Not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
