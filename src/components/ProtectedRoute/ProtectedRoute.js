// components/ProtectedRoute.js
import { useRouter } from 'next/router';
import { useAuth } from '../../context/AuthContext';
import { useEffect } from 'react';

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login'); // redirect to login if not logged in
    }
  }, [user, loading, router]);

  if (loading || !user) return null;

  return children;
}
