import React from 'react';

/**
 * Reusable Card component.
 */
interface CardProps {
  children: React.ReactNode;
  className?: string;
  shadow?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  shadow = true,
}) => {
  const baseClasses = 'bg-surface-light dark:bg-surface-dark rounded-lg border border-gray-100 dark:border-gray-700 p-6';
  const shadowClasses = shadow ? 'shadow-lg' : '';

  return (
    <div className={`${baseClasses} ${shadowClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card;