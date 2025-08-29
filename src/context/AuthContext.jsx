import React, { createContext, useContext, useReducer, useEffect } from 'react';

const AuthContext = createContext();

const initialState = {
  user: null,
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: true,
  error: null
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'USER_LOADED':
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
        error: null
      };
    case 'REGISTER_SUCCESS':
    case 'LOGIN_SUCCESS':
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
        error: null
      };
    case 'REGISTER_FAIL':
    case 'AUTH_ERROR':
    case 'LOGIN_FAIL':
    case 'LOGOUT':
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload
      };
    case 'CLEAR_ERRORS':
      return {
        ...state,
        error: null
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load user
  const loadUser = async () => {
    if (localStorage.token) {
      try {
        const res = await fetch('/api/auth/me', {
          headers: {
            'Authorization': `Bearer ${localStorage.token}`
          }
        });
        const data = await res.json();
        
        if (data.success) {
          dispatch({
            type: 'USER_LOADED',
            payload: data.user
          });
        } else {
          dispatch({ type: 'AUTH_ERROR' });
        }
      } catch (err) {
        dispatch({ type: 'AUTH_ERROR' });
      }
    } else {
      dispatch({ type: 'AUTH_ERROR' });
    }
  };

  // Register User
  const register = async (formData) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      
      if (data.success) {
        dispatch({
          type: 'REGISTER_SUCCESS',
          payload: data
        });
        return { success: true, message: data.message };
      } else {
        dispatch({
          type: 'REGISTER_FAIL',
          payload: data.message
        });
        return { success: false, message: data.message, errors: data.errors };
      }
    } catch (err) {
      dispatch({
        type: 'REGISTER_FAIL',
        payload: 'Server error'
      });
      return { success: false, message: 'Server error' };
    }
  };

  // Login User
  const login = async (formData) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      
      if (data.success) {
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: data
        });
        return { success: true, message: data.message };
      } else {
        dispatch({
          type: 'LOGIN_FAIL',
          payload: data.message
        });
        return { success: false, message: data.message };
      }
    } catch (err) {
      dispatch({
        type: 'LOGIN_FAIL',
        payload: 'Server error'
      });
      return { success: false, message: 'Server error' };
    }
  };

  // Logout
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  // Clear Errors
  const clearErrors = () => {
    dispatch({ type: 'CLEAR_ERRORS' });
  };

  // Enroll in Course
  const enrollInCourse = async (courseId, courseName) => {
    try {
      const res = await fetch('/api/auth/enroll-course', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({ courseId, courseName })
      });
      
      const data = await res.json();
      
      if (data.success) {
        // Reload user to get updated enrolled courses
        await loadUser();
        return { success: true, message: data.message };
      } else {
        return { success: false, message: data.message };
      }
    } catch (err) {
      return { success: false, message: 'Server error' };
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        register,
        login,
        logout,
        clearErrors,
        loadUser,
        enrollInCourse
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
