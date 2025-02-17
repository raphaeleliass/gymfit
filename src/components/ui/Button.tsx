interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-bold rounded-lg transition-all duration-200 transform hover:scale-105';

  const variants = {
    primary: 'bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-primary/50',
    secondary: 'bg-secondary hover:bg-secondary/90 text-white shadow-lg hover:shadow-secondary/50',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-primary'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
