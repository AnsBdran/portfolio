export const H2 = () => hi;

export const HighLighted = ({ children, thick }) => (
  <span
    className={`relative transition-all after:absolute after:bottom-0 after:left-0 after:-z-10  after:w-full after:bg-primary after:transition-all hover:text-white hover:after:h-full ${
      thick ? 'after:h-1' : 'after:h-[1px]'
    }`}
  >
    {children}
  </span>
);

export const BordersWrapper = ({ children, className }) => (
  <div className={`${className} bordered-wrapper`}>{children}</div>
);

export const SectionTitle = ({ children }) => (
  <h2 className='mb-3 mt-16 flex items-center gap-2 text-2xl after:inline-block after:h-1 after:w-1/4 after:bg-primary after:transition-all hover:after:w-1/3'>
    #{children}
  </h2>
);

export const OutlinedSquare = ({ size = 8 }) => (
  <div
    className='aspect-square border-2 border-gray-400'
    style={{ width: `${size}rem` }}
  ></div>
);

export const Logo = (props) => (
  <svg
    width={24}
    height={24}
    viewBox='0 0 52 52'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M39 0H26v13H0v39h26V39h26V0H39zM13 39h13V26h13V13H26v13H13v13z'
      fill='#fff'
    />
  </svg>
);

export const Icon = (IconComponent) => <IconComponent size={20} />;
