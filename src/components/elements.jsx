export const H2 = () => hi;

export const HighLighted = ({ children }) => (
  <span className='font-semibold'>{children}</span>
);

export const BordersWrapper = ({ children, className }) => (
  <div className={`${className} bordered-wrapper`}>{children}</div>
);

export const SectionTitle = ({ children }) => <h2>#{children}</h2>;

export const OutlinedSquare = ({ size = 8 }) => (
  <div
    className='aspect-square border-2 border-gray-400'
    style={{ width: `${size}rem` }}
  ></div>
);
