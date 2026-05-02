"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Zap, User, Lock, Eye, EyeOff } from "lucide-react";

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const from = params.get("from") || "/admin";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        router.push(from);
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.error || "Incorrect username or password");
      }
    } catch {
      setError("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-xl"
    >
      <div className="mb-4">
        <label className="block font-rubik text-gray-400 text-xs uppercase tracking-wider mb-2">
          Username
        </label>
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <User className="w-4 h-4 text-gray-500" />
          </div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Enter username"
            autoComplete="username"
            className="w-full bg-gray-800 border border-gray-700 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20 text-white placeholder-gray-500 font-rubik text-sm rounded-xl pl-10 py-3 transition-colors"
          />
        </div>
      </div>

      <div className="mb-5">
        <label className="block font-rubik text-gray-400 text-xs uppercase tracking-wider mb-2">
          Password
        </label>
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <Lock className="w-4 h-4 text-gray-500" />
          </div>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter password"
            autoComplete="current-password"
            className="w-full bg-gray-800 border border-gray-700 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20 text-white placeholder-gray-500 font-rubik text-sm rounded-xl pl-10 pr-10 py-3 transition-colors"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {error && (
        <p className="font-rubik text-red-400 text-sm bg-red-950/50 border border-red-900/50 rounded-lg px-4 py-3 mb-4">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading || !username || !password}
        className="w-full bg-electric hover:bg-electric-light text-white font-outfit font-bold text-sm py-3 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>
    </form>
  );
}

export default function AdminLogin() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-electric flex items-center justify-center shadow-lg mb-4">
            <Zap className="w-7 h-7 text-white" />
          </div>
          <h1 className="font-outfit font-black text-white text-2xl">Bluefin Admin</h1>
          <p className="font-rubik text-gray-400 text-sm mt-1">Sign in to manage your website</p>
        </div>

        <Suspense fallback={<div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 h-40" />}>
          <LoginForm />
        </Suspense>

        <p className="text-center font-rubik text-gray-600 text-xs mt-6">
          <a href="/" className="hover:text-gray-400 transition-colors">← Back to website</a>
        </p>
      </div>
    </div>
  );
}
