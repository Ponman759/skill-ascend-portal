import { useState, useEffect, createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem('ponman_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Simulated auth logic
    const users = JSON.parse(localStorage.getItem('ponman_users') || '[]');
    const foundUser = users.find((u: any) => u.email === email && u.password === password);

    if (foundUser) {
      const userData = {
        id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
        role: foundUser.role,
      };
      setUser(userData);
      localStorage.setItem('ponman_user', JSON.stringify(userData));
      toast.success(`Welcome back, ${foundUser.name}!`);
      navigate(foundUser.role === 'admin' ? '/admin' : '/portal/dashboard');
    } else {
      // Check for default admin
      if (email === 'ponmangloballtd@gmail.com' && password === 'admin123') {
        const adminData = {
          id: 'admin-1',
          name: 'Ponman Admin',
          email: 'ponmangloballtd@gmail.com',
          role: 'admin' as const,
        };
        setUser(adminData);
        localStorage.setItem('ponman_user', JSON.stringify(adminData));
        toast.success('Admin login successful');
        navigate('/admin');
        return;
      }
      toast.error('Invalid email or password');
      throw new Error('Invalid credentials');
    }
  };

  const register = async (name: string, email: string, password: string) => {
    const users = JSON.parse(localStorage.getItem('ponman_users') || '[]');
    if (users.find((u: any) => u.email === email)) {
      toast.error('Email already exists');
      throw new Error('User exists');
    }

    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      password,
      role: 'user' as const,
    };

    users.push(newUser);
    localStorage.setItem('ponman_users', JSON.stringify(users));

    const userData = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    };
    setUser(userData);
    localStorage.setItem('ponman_user', JSON.stringify(userData));
    toast.success('Account created successfully!');
    navigate('/portal/dashboard');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('ponman_user');
    toast.info('Logged out');
    navigate('/');
  };

  const isAdmin = user?.role === 'admin';

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
