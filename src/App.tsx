import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import PortalDashboard from './pages/portal/PortalDashboard';
import CourseCatalog from './pages/portal/CourseCatalog';
import CourseView from './pages/portal/CourseView';
import AdminDashboard from './pages/admin/AdminDashboard';
import { AuthProvider, useAuth } from './hooks/useAuth';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  return <>{children}</>;
};

const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isAdmin } = useAuth();
  if (!user || !isAdmin) return <Navigate to="/portal/dashboard" />;
  return <>{children}</>;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            
            {/* E-Learning Portal Routes */}
            <Route path="portal" element={<Navigate to="/portal/catalog" replace />} />
            <Route 
              path="portal/dashboard" 
              element={
                <ProtectedRoute>
                  <PortalDashboard />
                </ProtectedRoute>
              } 
            />
            <Route path="portal/catalog" element={<CourseCatalog />} />
            
            {/* Admin Routes */}
            <Route 
              path="admin" 
              element={
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              } 
            />
          </Route>
          
          {/* Full Screen Course View */}
          <Route 
            path="portal/course/:courseId" 
            element={
              <ProtectedRoute>
                <CourseView />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
