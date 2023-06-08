const Button = ({ children, small, sub, className, ...props }) => {
  return (
    <button
      className={`flex w-max transform items-center gap-1  rounded-md text-white shadow-lg outline-none transition-all focus:ring-4 active:scale-x-75 ${
        small ? 'px-2 py-1' : 'px-4 py-3'
      }
      ${
        sub
          ? 'border-2 border-primary hover:border-transparent hover:bg-primary'
          : 'bg-primary '
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
