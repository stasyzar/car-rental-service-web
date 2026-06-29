import { X } from 'lucide-react';
import { useAuthModalStore } from '../model/authModalStore';
import { LoginContainer } from './LoginContainer';
import { RegisterContainer } from './RegisterContainer';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/shared/ui/tabs';


export const AuthModal = () => {
  const { isOpen, defaultTab, closeModal } = useAuthModalStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl border bg-background p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        
        <button 
          onClick={closeModal}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none z-10"
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </button>

        {/* Tabs for switching */}
        <Tabs defaultValue={defaultTab} className="w-full mt-2">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login">Sign In</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="focus-visible:outline-none">
            <LoginContainer />
          </TabsContent>
          
          <TabsContent value="register" className="focus-visible:outline-none">
            <RegisterContainer />
          </TabsContent>
        </Tabs>

      </div>
    </div>
  );
};