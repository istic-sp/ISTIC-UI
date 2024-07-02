import React, { createContext, useContext, useState, useCallback } from 'react';
import { Toast, ToastProps } from '../../components';
import { v4 as uuidv4 } from 'uuid';

interface ToastWithId extends ToastProps {
  id: string;
}

interface ToastContextType {
  showToast: (options: ToastProps) => void;
  position: ToastProps['position'];
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{
  children: React.ReactNode;
  position?: ToastProps['position'];
}> = ({ children, position = 'top-right' }) => {
  const [toasts, setToasts] = useState<ToastWithId[]>([]);

  const showToast = useCallback((options: ToastProps) => {
    const id = uuidv4();
    setToasts((prevToasts) => [...prevToasts, { ...options, id }]);
  }, []);

  const handleClose = useCallback((id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast, position }}>
      {children}
      <div style={{ position: 'fixed', zIndex: 100 }}>
        {toasts.map((toast, index) => (
          <Toast
            key={toast.id}
            index={index}
            {...toast}
            position={position}
            onClose={() => {
              toast.onClose?.();
              handleClose(toast.id);
            }}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
