import { 
  createBrowserRouter, 
  RouterProvider, 
  Outlet, 
  Navigate, 
  Link 
} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AdminDashboard } from './pages/AdminDashboard';
import { AuthModal } from '@/features/auth/ui/AuthModal';
import { useAuthModalStore } from '@/features/auth/model/authModalStore';

const RootLayout = () => {
  const openModal = useAuthModalStore((state) => state.openModal);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <header className="p-4 bg-white border-b border-slate-200 flex justify-between items-center sticky top-0 bg-background/80 backdrop-blur-sm z-50">
        <Link to="/" className="font-extrabold text-xl tracking-tight text-indigo-600 hover:opacity-80 transition-opacity" style={{ fontFamily: 'var(--font-display)' }}>
          DriveFleet
        </Link>
        <nav className="flex gap-6 font-semibold text-sm items-center">
          <Link to="/" className="text-slate-600 hover:text-indigo-600 transition-colors">Catalog</Link>
          <Link to="/admin" className="text-slate-600 hover:text-indigo-600 transition-colors">Dashboard</Link>
          
          <button 
            onClick={() => openModal('login')}
            className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors cursor-pointer"
          >
            Sign In
          </button>
        </nav>
      </header>

      <main className="flex-1">
        <Outlet /> 
      </main>

     <AuthModal />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'admin',
        element: <AdminDashboard />
      }
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}