import React from 'react';
import { LucideProps } from 'lucide-react';

// This is a helper to render Lucide icons dynamically if needed, 
// though direct imports are preferred for tree-shaking.
// Leaving this simple for now.
export const IconWrapper: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
  <div className={`flex items-center justify-center ${className}`}>
    {children}
  </div>
);