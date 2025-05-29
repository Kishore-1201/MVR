import React, { createContext, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Building2, Calendar, Home, Hotel, MapPin, Menu, Moon, Sun, User, Utensils, Waves, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';

type TransitionContextType = {
  isTransitioning: boolean;
  setIsTransitioning: (value: boolean) => void;
  transitionImage: string | null;
  setTransitionImage: (value: string | null) => void;
};

export const TransitionContext = createContext<TransitionContextType>({
  isTransitioning: false,
  setIsTransitioning: () => {},
  transitionImage: null,
  setTransitionImage: () => {},
});

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Rooms', href: '/rooms', icon: Hotel },
  { name: 'Banquet Halls', href: '/banquet-halls', icon: Building2 },
  // { name: 'Travel Services', href: '/travel', icon: MapPin },
  // { name: 'Dining', href: '/dining', icon: Utensils },
  // { name: 'Spa & Wellness', href: '/spa', icon: Waves },
  // { name: 'My Bookings', href: '/bookings', icon: Calendar },
];

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionImage, setTransitionImage] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  // Handle login click with animation
  const handleLoginClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    // Get the current page's main image or fallback to a default
    const mainImage = document.querySelector('.hero-image') as HTMLImageElement;
    const defaultImage = "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
    
    setTransitionImage(mainImage ? mainImage.src : defaultImage);
    setIsTransitioning(true);
    
    // Navigate after a slightly longer delay for smoother animation
    setTimeout(() => {
      navigate('/login');
    }, 150); // Increased from 100ms to 150ms for smoother transition
  };

  return (
    <TransitionContext.Provider value={{ isTransitioning, setIsTransitioning, transitionImage, setTransitionImage }}>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <nav className="bg-background border-b border-border shadow-md fixed top-0 left-0 right-0 z-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between items-center">
              <div className="flex items-center">
                <Link to="/" className="flex flex-shrink-0 items-center">
                  <Hotel className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                  <span className="ml-2 text-xl font-bold text-foreground">MVR Residency</span>
                </Link>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                        location.pathname === item.href
                          ? 'text-indigo-600 border-b-2 border-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                          : 'text-muted-foreground hover:text-foreground hover:border-b-2 hover:border-indigo-300'
                      }`}
                    >
                      <item.icon className={`mr-2 h-4 w-4 ${
                        location.pathname === item.href
                          ? 'text-indigo-600 dark:text-indigo-400'
                          : 'text-muted-foreground group-hover:text-foreground'
                      }`} />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="hidden sm:flex sm:items-center sm:space-x-4">
                <button
                  onClick={toggleTheme}
                  className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === 'light' ? (
                    <Moon className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <Sun className="h-5 w-5" aria-hidden="true" />
                  )}
                </button>
                <Link
                  to="/profile"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-b-2 hover:border-indigo-300"
                >
                  <User className="h-4 w-4 mr-2 text-muted-foreground group-hover:text-foreground" />
                  Profile
                </Link>
                <a
                  href="/login"
                  onClick={handleLoginClick}
                  className="inline-flex items-center px-4 py-2 rounded-md text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors dark:bg-indigo-500 dark:hover:bg-indigo-600"
                >
                  Login
                </a>
              </div>

              <div className="flex sm:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-indigo-400 dark:hover:bg-gray-800"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? (
                    <X className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="sm:hidden bg-background border-b border-border">
              <div className="space-y-1 pb-3 pt-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block py-2 px-3 text-base font-medium ${
                      location.pathname === item.href
                        ? 'bg-secondary text-indigo-600 dark:text-indigo-400'
                        : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="flex items-center">
                      <item.icon className={`mr-2 h-5 w-5 ${
                        location.pathname === item.href
                          ? 'text-indigo-600 dark:text-indigo-400'
                          : 'text-muted-foreground group-hover:text-foreground'
                      }`} />
                      {item.name}
                    </div>
                  </Link>
                ))}
                <button
                  onClick={() => {
                    toggleTheme();
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 px-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-indigo-400"
                >
                  <div className="flex items-center">
                    {theme === 'light' ? (
                      <Moon className="mr-2 h-5 w-5" aria-hidden="true" />
                    ) : (
                      <Sun className="mr-2 h-5 w-5" aria-hidden="true" />
                    )}
                    {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                  </div>
                </button>
                <Link
                  to="/profile"
                  className="block py-2 px-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-indigo-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex items-center">
                    <User className="mr-2 h-5 w-5" />
                    Profile
                  </div>
                </Link>
                <a
                  href="/login"
                  className="block mx-3 mt-2 py-2 px-3 rounded-md text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 text-center shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors dark:bg-indigo-500 dark:hover:bg-indigo-600"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleLoginClick(e);
                  }}
                >
                  Login
                </a>
              </div>
            </div>
          )}
        </nav>

        {/* Spacer div to prevent content from going under the fixed navbar */}
        <div className="h-16 w-full"></div>

        <main className="flex-grow relative">
          <Outlet />
        </main>

        <footer className="bg-card mt-auto border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-card-foreground">About Us</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Company</a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Careers</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-card-foreground">Services</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-card-foreground">Legal</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-card-foreground">Contact</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="mailto:support@luxstay.com" className="text-sm text-muted-foreground hover:text-foreground">
                      support@luxstay.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-foreground">
                      +1 (234) 567-890
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </TransitionContext.Provider>
  );
}
