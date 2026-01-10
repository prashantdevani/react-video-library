import { Bell, Gem, ShoppingCart } from "lucide-react";
import { setLoginState } from "../../store/loginSlice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/store";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    navigate("/login");
    localStorage.setItem("logout", Date.now().toString());
    dispatch(setLoginState({ isUserLoggedIn: false, userInfo: null }));
  };

  const GITHUB_URL = window?._env_?.GITHUB_URL;
  const GITHUB_BUTTON_LABEL =
    window?._env_?.GITHUB_BUTTON_LABEL ?? "Github CodeBase";

  return (
    <header className="h-16 border-b border-[#3b2a55] flex items-center justify-between px-4 bg-[#251838] shrink-0">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
          <span className="font-bold text-lg">C</span>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <button className="p-2 hover:bg-[#3b2a55] rounded-full transition-colors relative">
          <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-pink-500 rounded flex items-center justify-center text-xs font-bold">
            <Gem size={22} />
          </div>
        </button>
        <button className="relative p-1 hover:text-pink-400 transition-colors">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 bg-blue-500 text-xs rounded-full w-4 h-4 flex items-center justify-center">
            12
          </span>
        </button>
        <button className="p-1 hover:text-pink-400 transition-colors">
          <ShoppingCart size={20} />
        </button>
        <button className="p-1 hover:text-pink-400 transition-colors">
          <div className="w-8 h-8 rounded-full bg-gray-600 overflow-hidden border-2 border-green-400">
            <img
              src="https://ui-avatars.com/api/?name=User&background=random"
              alt="User"
            />
          </div>
        </button>
        <div className="flex flex-col items-center">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white p-2 rounded"
          >
            Log Out
          </button>
        </div>
        {GITHUB_URL && (
          <div className="flex flex-col items-center">
            <a
              target="_blank"
              href={GITHUB_URL}
              className="bg-red-500 text-white p-2 rounded"
            >
              {GITHUB_BUTTON_LABEL}
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
