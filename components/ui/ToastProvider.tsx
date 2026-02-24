"use client";
import React, { createContext, useContext, useState, useCallback } from "react";
import { X, CheckCircle, AlertCircle } from "lucide-react";

interface Toast {
  id: string;
  message: string;
  type: "success" | "error";
}

interface ToastContextValue {
  showToast: (message: string, type?: "success" | "error") => void;
}

const ToastContext = createContext<ToastContextValue>({ showToast: () => {} });

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, type: "success" | "error" = "success") => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed top-24 right-4 z-[100] flex flex-col gap-3 max-w-sm w-full">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`flex items-start gap-3 p-4 rounded-xl shadow-2xl border animate-slide-up ${
              toast.type === "success"
                ? "bg-white border-green-200"
                : "bg-white border-red-200"
            }`}
          >
            {toast.type === "success" ? (
              <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={18} />
            ) : (
              <AlertCircle className="text-red-500 shrink-0 mt-0.5" size={18} />
            )}
            <p className="text-sm text-charcoal-500 flex-1">{toast.message}</p>
            <button
              onClick={() => setToasts((p) => p.filter((t) => t.id !== toast.id))}
              className="text-gray-400 hover:text-charcoal-500"
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
