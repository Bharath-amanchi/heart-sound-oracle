
const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#1A1F2C]">Welcome Back</h2>
          <p className="text-gray-600 mt-2">Login to access the prediction system</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <form>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                required
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#0EA5E9] text-white py-2 px-4 rounded-md hover:bg-[#0EA5E9]/90 transition-colors"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
