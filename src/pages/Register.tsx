import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Hotel, Lock, Mail, User } from 'lucide-react';
import { TransitionContext } from '../components/Layout';

export function Register() {
  const { isTransitioning, setIsTransitioning, transitionImage } = useContext(TransitionContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password || !formData.name) {
      setError('Please fill all required fields.');
    } else if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
    } else {
      setError('');
      alert('Registration successful!');
    }
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
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
            ${isTransitioning ? 'scale-110 -translate-y-8 opacity-70' : 'scale-100 translate-y-0 opacity-100'}
          `}
          src={currentBackgroundImageSrc}
          alt="Luxury hotel exterior"
        />
        <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="max-w-md w-full mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Create Account
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Join our exclusive community and unlock premium benefits
          </p>
        </div>

        <div className="mt-10 bg-white/90 backdrop-blur-md rounded-lg shadow-xl overflow-hidden p-8 transition-all duration-300 ease-out transform hover:shadow-2xl hover:-translate-y-1">
          <div className="flex justify-center mb-8">
            <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
              <User className="h-10 w-10" />
            </div>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 transition-all duration-200 bg-white/80 dark:border-gray-600"
                />
                <label 
                  htmlFor="name" 
                  className={`absolute left-10 transition-all duration-200 ${focusedField === 'name' || formData.name ? 'text-xs text-indigo-600 -top-2 bg-white px-1' : 'text-gray-500 top-2'}`}
                >
                  Full Name
                </label>
              </div>
            </div>

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
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 transition-all duration-200 bg-white/80 dark:border-gray-600"
                />
                <label 
                  htmlFor="email" 
                  className={`absolute left-10 transition-all duration-200 ${focusedField === 'email' || formData.email ? 'text-xs text-indigo-600 -top-2 bg-white px-1' : 'text-gray-500 top-2'}`}
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
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  onFocus={() => handleFocus('password')}
                  onBlur={handleBlur}
                  className="block w-full pl-10 pr-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 transition-all duration-200 bg-white/80 dark:border-gray-600 dark:border"
                />
                <label 
                  htmlFor="password" 
                  className={`absolute left-10 transition-all duration-200 ${focusedField === 'password' || formData.password ? 'text-xs text-indigo-600 -top-2 bg-white px-1' : 'text-gray-500 top-2'}`}
                >
                  Password
                </label>
              </div>
            </div>

            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  onFocus={() => handleFocus('confirmPassword')}
                  onBlur={handleBlur}
                  className="block w-full pl-10 pr-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 transition-all duration-200 bg-white/80 dark:border-gray-600 dark:border"
                />
                <label 
                  htmlFor="confirmPassword" 
                  className={`absolute left-10 transition-all duration-200 ${focusedField === 'confirmPassword' || formData.confirmPassword ? 'text-xs text-indigo-600 -top-2 bg-white px-1' : 'text-gray-500 top-2'}`}
                >
                  Confirm Password
                </label>
              </div>
            </div>

            {error && (
              <div className="text-sm text-red-600 bg-red-50 p-2 rounded-md">{error}</div>
            )}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 hover:scale-105"
              >
                Create Account
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;