import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import VideoLibrary from "./pages/VideoLIbrary/VideoLibrary";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import useSyncLogout from "./hooks/useSyncLogout";
import useSyncLogin from "./hooks/useSyncLogin";

function App() {
  useSyncLogin();
  useSyncLogout();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/video-library" element={<VideoLibrary />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
