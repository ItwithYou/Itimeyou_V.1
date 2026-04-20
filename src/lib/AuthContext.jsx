import React, { createContext, useState, useContext, useEffect } from 'react';
import { base44 } from '@/api/base44Client';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
      const [isLoadingAuth, setIsLoadingAuth] = useState(true);
        const [authError, setAuthError] = useState(null);

          useEffect(() => {
              checkAppState();
                }, []);

                  const checkAppState = async () => {
                      try {
                            setAuthError(null);
                                  const currentUser = await base44.auth.me();
                                        setUser(currentUser);
                                              setIsAuthenticated(true);
                                                    setIsLoadingAuth(false);
                                                        } catch (error) {
                                                              console.error('Auth check failed:', error);
                                                                    setIsLoadingAuth(false);
                                                                          setIsAuthenticated(false);
                                                                                if (error.status === 401 || error.status === 403) {
                                                                                        setAuthError({
                                                                                                  type: 'auth_required',
                                                                                                            message: 'Authentication required'
                                                                                                                    });
                                                                                                                          } else {
                                                                                                                                  setAuthError({
                                                                                                                                            type: 'unknown',
                                                                                                                                                      message: error.message || 'Failed to authenticate'
                                                                                                                                                              });
                                                                                                                                                                    }
                                                                                                                                                                        }
                                                                                                                                                                          };
                                                                                                                                                                          
                                                                                                                                                                            const logout = (shouldRedirect = true) => {
                                                                                                                                                                                setUser(null);
                                                                                                                                                                                    s
