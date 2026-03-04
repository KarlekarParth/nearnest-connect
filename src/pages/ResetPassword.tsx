import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Listen for the PASSWORD_RECOVERY event
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") {
        setReady(true);
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 6) {
      toast({ title: "Password too short", description: "Must be at least 6 characters.", variant: "destructive" });
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });
    setLoading(false);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Password updated!", description: "You can now log in with your new password." });
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="h-9 w-9 rounded-lg hero-gradient flex items-center justify-center">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Near<span className="text-gradient">Nest</span>
            </span>
          </div>
          <h1 className="text-2xl font-bold text-foreground">Set new password</h1>
          <p className="text-muted-foreground mt-2">Choose a strong password for your account.</p>
        </div>

        <form onSubmit={handleUpdate} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="password">New Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Min. 6 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Updating..." : "Update password"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
