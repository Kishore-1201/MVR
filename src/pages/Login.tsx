import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Hotel, Lock, Mail } from 'lucide-react';
import { TransitionContext } from '../components/Layout';

export function Login() {
  const { isTransitioning, setIsTransitioning, transitionImage } = useContext(TransitionContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  type AnimationPhase = 'start' | 'imageSettling' | 'overlayFadingIn' | 'cardAnimatingIn' | 'done';
  const [animationPhase, setAnimationPhase] = useState<AnimationPhase>(
    isTransitioning ? 'start' : 'done'
  );

  useEffect(() => {
    if (isTransitioning) {
      setAnimationPhase('start');

      const timerImageSettling = setTimeout(() => {
        setAnimationPhase('imageSettling');
      }, 50);

      const timerOverlayFadingIn = setTimeout(() => {
        setAnimationPhase('overlayFadingIn');
      }, 600); // Start overlay while image is still settling

      const timerCardAnimatingIn = setTimeout(() => {
        setAnimationPhase('cardAnimatingIn');
      }, 950); // Start card after image has settled and overlay is appearing

      const timerDone = setTimeout(() => {
        setAnimationPhase('done');
        setIsTransitioning(false);
      }, 1950); // Total: Image (900) + Card (1000) approx

      return () => {
        clearTimeout(timerImageSettling);
        clearTimeout(timerOverlayFadingIn);
        clearTimeout(timerCardAnimatingIn);
        clearTimeout(timerDone);
      };
    } else {
      setAnimationPhase('done');
    }
  }, [isTransitioning, setIsTransitioning]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
    } else {
      setError('');
      alert('Logged in!');
    }
  };

  const currentBackgroundImageSrc = isTransitioning && transitionImage
    ? transitionImage
    : "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";

  return (
    <div className="min-h-screen flex items-center justify-center py-12 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          className={`h-full w-full object-cover transition-all duration-900 ease-out
            ${isTransitioning && animationPhase === 'start' ? 'scale-110 -translate-y-8 opacity-70' : 'scale-100 translate-y-0 opacity-100'}
          `}
          src={currentBackgroundImageSrc}
          alt="Luxury hotel exterior"
        />
        <div className={`absolute inset-0 bg-gray-900/70 backdrop-blur-sm transition-opacity duration-500 ease-in-out
            ${animationPhase === 'overlayFadingIn' || animationPhase === 'cardAnimatingIn' || animationPhase === 'done' ? 'opacity-100' : 'opacity-0'}
          `} />
      </div>

      {/* Content */}
      <div className={`max-w-md w-full mx-auto px-4 sm:px-6 lg:px-8 z-10 transition-all duration-1000 ease-out transform
          ${animationPhase === 'cardAnimatingIn' || animationPhase === 'done' ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}
        `}>
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Welcome Back
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Sign in to manage your bookings and access exclusive guest services
          </p>
        </div>

        <div className="mt-10 bg-white/90 backdrop-blur-md rounded-lg shadow-xl overflow-hidden p-8 transition-all duration-300 ease-out transform hover:shadow-2xl hover:-translate-y-1">
          <div className="flex justify-center mb-8">
            <div className="p-3 rounded-full bg-indigo-100 text-indigo-600 animate-pulse">
              <Hotel className="h-10 w-10" />
            </div>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onFocus={() => setEmailFocused(true)}
                  onBlur={() => setEmailFocused(false)}
                  className="block w-full pl-10 pr-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 transition-all duration-200 bg-white/80 dark:border-gray-600 dark:border"
                />
                <label
                  htmlFor="email"
                  className={`absolute left-10 transition-all duration-200 ${emailFocused || email ? 'text-xs text-indigo-600 -top-2 bg-white px-1' : 'text-gray-500 top-2'}`}
                >
                  Email
                </label>
              </div>
            </div>

            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  onFocus={() => setPasswordFocused(true)}
                  onBlur={() => setPasswordFocused(false)}
                  className="block w-full pl-10 pr-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 transition-all duration-200 bg-white/80 dark:border-gray-600 dark:border"
                />
                <label
                  htmlFor="password"
                  className={`absolute left-10 transition-all duration-200 ${passwordFocused || password ? 'text-xs text-indigo-600 -top-2 bg-white px-1' : 'text-gray-500 top-2'}`}
                >
                  Password
                </label>
              </div>
            </div>

            {error && (
              <div className="text-sm text-red-600 bg-red-50 p-2 rounded-md">{error}</div>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200">
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 hover:scale-105"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;