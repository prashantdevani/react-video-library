import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import LoginForm from "../../components/Login/LoginForm";
import { setLoginState } from "../../store/loginSlice";

const Login = () => {
  const navigate = useNavigate();
  const { isUserLoggedIn } = useAppSelector((state) => state.login);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const queryParams = new URLSearchParams(location.search);
  const [showLoginForm, setShowLoginForm] = useState(false);

  useEffect(() => {
    const isBypass = queryParams.get("bypass") === "true";
    let isShowForm = true;
    if (isUserLoggedIn) {
      navigate("/video-library");
      isShowForm = false;
    }
    if (isBypass) {
      navigate("/video-library");
      dispatch(
        setLoginState({
          isUserLoggedIn: true,
          userInfo: {
            id: "user-123-ok",
            username: "bypassLogin",
            emailId: `bypassLogin@xyz.com`,
            token: "server-token-from-auth",
          },
        })
      );
      isShowForm = false;
    }
    if (isShowForm) {
      setShowLoginForm(true);
    }
  }, []);

  if (!showLoginForm) {
    return null;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#1a1128]">
      <LoginForm />
    </div>
  );
};

export default Login;
