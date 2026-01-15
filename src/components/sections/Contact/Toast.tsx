"use client";

import { useEffect } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

interface ToastProps {
  message: string;
  type: "success" | "error";
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export default function Toast({
  message,
  type,
  isVisible,
  onClose,
  duration = 4000,
}: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  const Icon = type === "success" ? FaCheckCircle : FaTimesCircle;
  const borderColor = type === "success" ? "border-green-500/50" : "border-red-500/50";

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] animate-slide-down">
      <div
        className={`flex items-center gap-3 px-4 py-3 bg-white text-black border ${borderColor} shadow-lg min-w-[300px] max-w-[90vw]`}
      >
        <Icon
          className={`w-5 h-5 flex-shrink-0 ${
            type === "success" ? "text-green-600" : "text-red-600"
          }`}
        />
        <p className="text-sm font-medium flex-1">{message}</p>
        <button
          onClick={onClose}
          className="text-black/50 hover:text-black transition-colors"
          aria-label="Close notification"
        >
          <FaTimesCircle className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
