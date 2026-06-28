import { LoginContainer } from "@/features/auth/ui/LoginContainer";

export const LoginPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-muted/30 font-sans">
      <div className="w-full max-w-md p-8 bg-background border rounded-lg shadow-sm space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-slate-900" style={{ fontFamily: 'var(--font-display)' }}>
            Sign In
          </h1>
          <p className="text-xs text-muted-foreground">
            Sign in to access vehicle management and rentals
          </p>
        </div>
        
        <LoginContainer />
      </div>
    </div>
  );
};

export default LoginPage;