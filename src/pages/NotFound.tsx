import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "@/context/ThemeContext";
import { 
  Home, 
  ArrowLeft, 
  Search, 
  RefreshCw, 
  Compass, 
  Zap, 
  Star,
  AlertTriangle,
  ExternalLink,
  Clock,
  MapPin,
  Sun,
  Moon
} from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [isAnimated, setIsAnimated] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [timeOnPage, setTimeOnPage] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsAnimated(true), 100);
    
    // Track time on page
    const timeTimer = setInterval(() => {
      setTimeOnPage(prev => prev + 1);
    }, 1000);
    
    // Easter egg after 10 seconds
    const easterEggTimer = setTimeout(() => {
      setShowEasterEgg(true);
    }, 10000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(timeTimer);
      clearTimeout(easterEggTimer);
    };
  }, [location.pathname]);

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  const popularPages = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: Compass },
    { name: "Services", path: "/services", icon: Zap },
    { name: "Contact", path: "/contact", icon: MapPin },
  ];

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 relative overflow-hidden">
      {/* Theme Toggle Button */}
      <div className="absolute top-4 right-4 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={toggleTheme}
          className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300"
        >
          {theme === 'light' ? (
            <Moon className="w-4 h-4" />
          ) : (
            <Sun className="w-4 h-4" />
          )}
        </Button>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs with Mouse Parallax */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-600/30 dark:to-purple-600/30 rounded-full blur-3xl animate-pulse-subtle"
          style={{
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
            top: '10%',
            left: '10%',
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-indigo-400/20 to-pink-400/20 dark:from-indigo-600/30 dark:to-pink-600/30 rounded-full blur-3xl animate-pulse-subtle"
          style={{
            transform: `translate(${-mousePosition.x * 0.05}px, ${-mousePosition.y * 0.05}px)`,
            top: '60%',
            right: '10%',
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-500 dark:to-purple-500 rounded-full animate-particle opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 20}s`,
            }}
          />
        ))}
        
        {/* Constellation Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10 dark:opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="constellation" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="currentColor" />
              <circle cx="150" cy="100" r="1" fill="currentColor" />
              <circle cx="100" cy="150" r="1" fill="currentColor" />
              <line x1="50" y1="50" x2="150" y2="100" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
              <line x1="150" y1="100" x2="100" y2="150" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#constellation)" className="text-slate-400 dark:text-slate-500" />
        </svg>
      </div>

      <div className="relative z-10 flex items-center justify-center py-8 px-4 min-h-screen">
        <div className="max-w-4xl w-full">
          <Card className={`shadow-2xl border-0 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl transition-all duration-1000 transform hover:shadow-3xl hover-glow ${
            isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <CardContent className="p-8 lg:p-12">
              {/* Header Section */}
              <div className="text-center mb-8">
                {/* Status Badge */}
                <div className={`mb-6 transition-all duration-1000 delay-200 transform ${
                  isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  <Badge variant="destructive" className="px-4 py-2 text-sm font-medium bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/50">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Error 404
                  </Badge>
                </div>

                {/* Animated 404 Number with Glitch Effect */}
                <div className="relative mb-6">
                  <h1 className={`text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent transition-all duration-1000 transform hover:scale-105 ${
                    isAnimated ? 'scale-100 rotate-0' : 'scale-75 rotate-12'
                  }`}>
                    404
                  </h1>
                  {/* Glitch layers */}
                  <div className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl font-bold text-red-500 opacity-20 animate-pulse" style={{ transform: 'translate(2px, 2px)' }}>
                    404
                  </div>
                  <div className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl font-bold text-blue-500 opacity-20 animate-pulse" style={{ transform: 'translate(-2px, -2px)' }}>
                    404
                  </div>
                  <div className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl font-bold text-slate-200 dark:text-slate-700 -z-10 blur-sm">
                    404
                  </div>
                </div>

                {/* Error Message */}
                <div className={`mb-6 transition-all duration-1000 delay-300 transform ${
                  isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent text-shimmer">
                    Lost in the Digital Cosmos
                  </h2>
                  <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-4 max-w-2xl mx-auto leading-relaxed">
                    The page you're seeking has drifted into the void. But don't worry, even the best explorers sometimes take wrong turns.
                  </p>
                  <div className="flex items-center justify-center gap-2 mb-4 flex-wrap">
                    <Badge variant="outline" className="font-mono text-xs border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300">
                      {location.pathname}
                    </Badge>
                    <Badge variant="secondary" className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                      <Clock className="w-3 h-3 mr-1" />
                      {formatTime(timeOnPage)}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Interactive Elements Section */}
              <div className={`mb-8 transition-all duration-1000 delay-500 transform ${
                isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                {/* Floating Search Animation */}
                <div className="relative mb-6 h-24 md:h-32 overflow-hidden">
                  <div className="absolute inset-0">
                    <div className="animate-float absolute top-4 left-1/4 w-6 md:w-8 h-6 md:h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full shadow-lg"></div>
                    <div className="animate-float-delayed absolute top-8 right-1/4 w-4 md:w-6 h-4 md:h-6 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full shadow-lg"></div>
                    <div className="animate-float-slow absolute bottom-4 left-1/3 w-3 md:w-4 h-3 md:h-4 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full shadow-lg"></div>
                    <div className="animate-bounce absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-700 rounded-full p-3 md:p-4 shadow-xl">
                      <Search className="w-8 md:w-12 h-8 md:h-12 text-slate-400 dark:text-slate-300" />
                    </div>
                  </div>
                </div>

                {/* Popular Pages Grid */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-4 text-center">Popular Destinations</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {popularPages.map((page, index) => {
                      const Icon = page.icon;
                      return (
                        <Button
                          key={page.path}
                          asChild
                          variant="ghost"
                          className={`h-16 md:h-20 flex-col bg-gradient-to-br from-white to-slate-50 dark:from-slate-700 dark:to-slate-800 border border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                            isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                          }`}
                          style={{ animationDelay: `${600 + index * 100}ms` }}
                        >
                          <Link to={page.path}>
                            <Icon className="w-5 md:w-6 h-5 md:h-6 mb-2 text-slate-600 dark:text-slate-300" />
                            <span className="text-xs md:text-sm font-medium text-slate-700 dark:text-slate-200">{page.name}</span>
                          </Link>
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <Separator className="mb-6 opacity-20 dark:opacity-30" />

              {/* Action Buttons */}
              <div className={`flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 transition-all duration-1000 delay-700 transform ${
                isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                <Button asChild size="lg" className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Link to="/">
                    <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Back to Home
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => window.history.back()}
                  className="group border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Go Back
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="lg" 
                  onClick={handleRefresh}
                  className="group hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <RefreshCw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                  Refresh
                </Button>
              </div>

              {/* Easter Egg */}
              {showEasterEgg && (
                <div className="text-center animate-fade-in mb-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 text-yellow-800 dark:text-yellow-300 rounded-full text-sm font-medium shadow-md">
                    <Star className="w-4 h-4 animate-spin" />
                    You've been here for a while! Here's a virtual cookie 🍪
                    <Star className="w-4 h-4 animate-spin" />
                  </div>
                </div>
              )}

              {/* Help Section */}
              <div className={`text-center transition-all duration-1000 delay-1000 transform ${
                isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                <div className="flex items-center justify-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                  <span>Need assistance?</span>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline underline-offset-4 transition-colors"
                  >
                    Contact Support
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
