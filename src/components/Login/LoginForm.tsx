import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/store";
import { setLoginState } from "../../store/loginSlice";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    username: "admin",
    password: "HN6*Z^6^msFWF*Zq",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form Submitted:", formData);
      dispatch(
        setLoginState({
          isUserLoggedIn: true,
          userInfo: {
            id: "user-123-ok",
            username: formData.username,
            emailId: `${formData.username}@gmail.com`,
            token: "server-token-from-auth",
          },
        })
      );

      localStorage.setItem("login", Date.now().toString());
      navigate("/video-library");
    }
  };

  return (
    <div className="w-full max-w-md rounded-lg bg-[#1f162f] p-8 shadow-2xl border border-[#3b2a55]">
      <h2 className="mb-6 text-center text-2xl font-bold text-white tracking-wide">
        Login
      </h2>

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="mb-2 block text-sm font-medium text-gray-400"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={`w-full rounded-md border bg-[#2d2042] text-gray-200 px-3 py-2 focus:outline-none focus:ring-2 placeholder-gray-500 transition-all ${
              errors.username
                ? "border-red-500 focus:ring-red-500/20"
                : "border-[#3b2a55] focus:border-purple-500 focus:ring-purple-500/20"
            }`}
            placeholder="Enter your username"
          />
          {errors.username && (
            <p className="mt-1 text-sm text-red-400">{errors.username}</p>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-gray-400"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full rounded-md border bg-[#2d2042] text-gray-200 px-3 py-2 focus:outline-none focus:ring-2 placeholder-gray-500 transition-all ${
              errors.password
                ? "border-red-500 focus:ring-red-500/20"
                : "border-[#3b2a55] focus:border-purple-500 focus:ring-purple-500/20"
            }`}
            placeholder="••••••••"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-400">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 text-white font-semibold shadow-lg hover:from-purple-500 hover:to-pink-500 transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-[#1f162f]"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
