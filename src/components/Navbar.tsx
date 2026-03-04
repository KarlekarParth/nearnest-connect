import { useState, useEffect } from "react";
import { MapPin, Menu, X, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import type { User } from "@supabase/supabase-js";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg hero-gradient flex items-center justify-center">
            <MapPin className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">
            Near<span className="text-gradient">Nest</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#listings" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Explore
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            For Owners
          </a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-1" /> Log out
            </Button>
          ) : (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/login">Log in</Link>
              </Button>
              <Button size="sm" asChild>
                <Link to="/signup">Sign up</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card animate-fade-in">
          <div className="container py-4 flex flex-col gap-3">
            <a href="#listings" className="py-2 text-sm font-medium text-muted-foreground">Explore</a>
            <a href="#how-it-works" className="py-2 text-sm font-medium text-muted-foreground">How It Works</a>
            <a href="#" className="py-2 text-sm font-medium text-muted-foreground">For Owners</a>
            <div className="flex gap-2 pt-2">
              {user ? (
                <Button variant="outline" size="sm" className="flex-1" onClick={handleLogout}>
                  Log out
                </Button>
              ) : (
                <>
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <Link to="/login">Log in</Link>
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <Link to="/signup">Sign up</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
