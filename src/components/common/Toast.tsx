import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-[#e8a8bf] text-[#16152b] px-5 py-3 rounded-2xl font-medium text-sm shadow-2xl flex items-center gap-3 animate-bounce">
      <CheckCircle2 className="w-5 h-5 text-[#16152b]" />
      {message}
    </div>
  );
};
