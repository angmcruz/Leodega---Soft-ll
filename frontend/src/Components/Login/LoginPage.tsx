import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import logo from "../../img/LOGO_H_1.png";
import illustrationLogin from "../../img/illustrationLogin.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with", { email, password });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      <div className="flex flex-col justify-center w-full md:w-1/2 px-10 md:px-24 py-12">
        <div className="flex items-center gap-2 mb-10">
          <img src={logo} alt="Leodega logo" className="w-32" />
        </div>

        <div className="w-full max-w-sm">
          <h1 className="text-3xl font-semibold mb-2 text-gray-800">Login</h1>
          <p className="text-sm text-gray-500 mb-8">
            Login to access your travelwise account
          </p>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="user@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="•••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="accent-indigo-600" />
                Remember me
              </label>
              <a href="#" className="text-pink-400 hover:underline">
                Forgot Password
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-medium py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      <div className="hidden md:flex flex-1 items-center justify-center bg-white">
        <div className="bg-gray-50 rounded-[2rem] p-12 flex items-center justify-center shadow-sm">
          <img
            src={illustrationLogin}
            alt="Login illustration"
            className="w-[320px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
