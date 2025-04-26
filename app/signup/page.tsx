export default function SignupPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Create an Account</h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
          <button
            type="submit"
            className="w-full p-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:scale-105 transition"
          >
            Create Account
          </button>
        </form>
        <div className="mt-6">
          <p className="text-center text-sm text-gray-600 mb-4">Or sign up with</p>
          <div className="flex justify-center space-x-4">
            <button className="p-3 rounded-lg bg-gray-100 border border-gray-300 hover:bg-gray-200 transition">
              <img src="/github-icon.svg" alt="GitHub" className="h-6 w-6" />
            </button>
            <button className="p-3 rounded-lg bg-gray-100 border border-gray-300 hover:bg-gray-200 transition">
              <img src="/google-icon.svg" alt="Google" className="h-6 w-6" />
            </button>
            <button className="p-3 rounded-lg bg-gray-100 border border-gray-300 hover:bg-gray-200 transition">
              <img src="/facebook-icon.svg" alt="Facebook" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}