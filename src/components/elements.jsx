export const Section = ({ children, className }) => (
  <section
    className={` mx-auto mb-20 flex max-w-6xl flex-col gap-12 md:flex-row md:items-center ${className}`}
  >
    {children}
  </section>
);

export const HighLighted = ({ children, thick }) => (
  <span
    className={`relative transition-all after:absolute after:bottom-0 after:left-0 after:-z-10  after:w-full after:bg-primary after:transition-all hover:text-white hover:after:h-full ${
      thick ? 'after:h-8' : 'after:h-[1px]'
    }`}
  >
    {children}
  </span>
);

export const BordersWrapper = ({ children, className }) => (
  <div className={`${className} bordered-wrapper`}>{children}</div>
);

export const PageTitle = ({ children }) => (
  <h1 className='mx-auto mb-4 max-w-6xl'>{children}</h1>
);

export const SectionTitle = ({ children }) => (
  <h2 className='s mx-auto mb-3 flex max-w-6xl items-center gap-2 text-2xl after:hidden  after:h-1 after:w-1/4 after:bg-primary after:transition-all hover:after:w-1/3 sm:after:inline-block'>
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
  <div className='flex items-center gap-2 text-xl'>
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
    <span className='font-bold text-white'>Anas</span>
  </div>
);

export const Davinci = ({ size }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 48 48'
  >
    <path fill='#37474f' d='M24 5a19 19 0 100 38 19 19 0 100-38z'></path>
    <path
      fill='#ff7043'
      d='M25.064 25.167l2.409 6.331c.546.741 1.195 1.389 1.969 1.828 2.419 1.373 5.5.581 6.881-1.769-.001 0-10.983-6.179-11.259-6.39z'
    ></path>
    <path
      fill='#f16461'
      d='M25.064 25.167c.323.129 11.259 6.389 11.259 6.389 1.38-2.351.538-5.369-1.882-6.742-.774-.439-1.669-.667-2.595-.762l-6.782 1.115z'
    ></path>
    <path
      fill='#ff5252'
      d='M33.492 26.545a7.535 7.535 0 00-.929-.435c.104.993-.085 2.024-.632 2.955s-1.36 1.607-2.287 2.015c.276.211.557.408.848.573 3.031 1.72 5.001 1.314 5.83-.096.829-1.411.201-3.292-2.83-5.012z'
    ></path>
    <path
      fill='#ff855f'
      d='M27.664 29.134c.589.71 1.256 1.392 1.981 1.945a4.926 4.926 0 002.287-2.015 4.806 4.806 0 00.632-2.955c-.85-.34-1.785-.567-2.704-.713a3.867 3.867 0 01-.525 2.194 3.955 3.955 0 01-1.671 1.544z'
    ></path>
    <path
      fill='#ff8a65'
      d='M29.645 31.08c-.725-.553-1.392-1.236-1.981-1.945a4.053 4.053 0 01-1.343.384c.317.683.698 1.363 1.153 1.98.749.017 1.49-.12 2.171-.419z'
    ></path>
    <path
      fill='#ff8a80'
      d='M29.859 25.397c.92.147 1.855.373 2.704.713a4.854 4.854 0 00-.717-2.058 11.986 11.986 0 00-2.32.009c.187.424.306.874.333 1.336z'
    ></path>
    <path
      fill='#ffccbc'
      d='M29.334 27.59c.406-.691.57-1.452.525-2.194-2.472-.394-4.795-.229-4.795-.229s1.016 2.06 2.6 3.967a3.947 3.947 0 001.67-1.544z'
    ></path>
    <path
      fill='#ffab91'
      d='M27.664 29.134c-1.584-1.907-2.6-3.967-2.6-3.967a.472.472 0 00-.054.338c.153.742.55 2.379 1.31 4.014a4.06 4.06 0 001.344-.385z'
    ></path>
    <path
      fill='#ffcdd2'
      d='M29.526 24.061c-1.821.17-3.461.651-4.191.892a.484.484 0 00-.27.215s2.323-.165 4.795.229a3.898 3.898 0 00-.334-1.336z'
    ></path>
    <path
      fill='#c6cf47'
      d='M22.922 25.167c-.276.211-11.258 6.389-11.258 6.389 1.381 2.35 4.461 3.142 6.881 1.769.774-.439 1.423-1.087 1.969-1.828l2.408-6.33z'
    ></path>
    <path
      fill='#e1eb8a'
      d='M22.922 25.167l-6.782-1.115c-.926.094-1.822.323-2.595.762-2.419 1.373-3.262 4.391-1.882 6.742.001 0 10.936-6.259 11.259-6.389z'
    ></path>
    <path
      fill='#dce775'
      d='M17.494 31.653a7.65 7.65 0 00.848-.573 4.926 4.926 0 01-2.287-2.015 4.806 4.806 0 01-.632-2.955c-.323.129-.638.27-.929.435-3.031 1.72-3.658 3.6-2.83 5.011.829 1.411 2.799 1.817 5.83.097z'
    ></path>
    <path
      fill='#fff59d'
      d='M18.127 25.397c-.92.147-1.855.373-2.704.713a4.806 4.806 0 00.632 2.955 4.931 4.931 0 002.287 2.015c.725-.553 1.392-1.236 1.981-1.945a3.953 3.953 0 01-1.67-1.544 3.862 3.862 0 01-.526-2.194z'
    ></path>
    <path
      fill='#e6ee9c'
      d='M15.423 26.11c.85-.34 1.785-.567 2.704-.713.028-.462.146-.912.333-1.336-.76-.071-1.55-.087-2.32-.009a4.859 4.859 0 00-.717 2.058z'
    ></path>
    <path
      fill='#ffd740'
      d='M20.323 29.134c-.589.71-1.256 1.392-1.981 1.945.681.3 1.422.437 2.172.419.455-.617.835-1.297 1.153-1.98a4.028 4.028 0 01-1.344-.384z'
    ></path>
    <path
      fill='#fff9c4'
      d='M18.653 27.59a3.953 3.953 0 001.67 1.544c1.584-1.907 2.6-3.967 2.6-3.967s-2.323-.165-4.795.229a3.849 3.849 0 00.525 2.194z'
    ></path>
    <path
      fill='#f0f4c3'
      d='M18.127 25.397c2.472-.394 4.795-.229 4.795-.229a.487.487 0 00-.27-.215c-.731-.241-2.371-.721-4.191-.892a3.875 3.875 0 00-.334 1.336z'
    ></path>
    <path
      fill='#ffe082'
      d='M21.666 29.518c.76-1.635 1.157-3.271 1.31-4.014a.472.472 0 00-.054-.338s-1.016 2.06-2.6 3.967a4.02 4.02 0 001.344.385z'
    ></path>
    <g>
      <path
        fill='#f44336'
        d='M41.37 28.654a17.867 17.867 0 01-1.794 4.339l1.731.999a19.834 19.834 0 001.993-4.821l-1.93-.517z'
      ></path>
      <path
        fill='#ffd740'
        d='M11.272 36.728l-1.414 1.414a20.08 20.08 0 004.15 3.165l.999-1.731a18.07 18.07 0 01-3.735-2.848z'
      ></path>
      <path
        fill='#aed581'
        d='M6 24H4c0 1.792.258 3.519.7 5.172l1.93-.517A17.97 17.97 0 016 24z'
      ></path>
      <path
        fill='#fff176'
        d='M8.424 32.993l-1.731.999a20.106 20.106 0 003.165 4.15l1.414-1.414a18.07 18.07 0 01-2.848-3.735z'
      ></path>
      <path
        fill='#dce775'
        d='M6.63 28.654l-1.93.518a19.89 19.89 0 001.993 4.821l1.731-.999a17.874 17.874 0 01-1.794-4.34z'
      ></path>
      <path
        fill='#ffca28'
        d='M15.007 39.576l-.999 1.731a19.873 19.873 0 004.821 1.993l.517-1.93a17.85 17.85 0 01-4.339-1.794z'
      ></path>
      <path
        fill='#ff7043'
        d='M32.993 39.576l.999 1.731a20.08 20.08 0 004.15-3.165l-1.414-1.414a18.07 18.07 0 01-3.735 2.848z'
      ></path>
      <path
        fill='#fb8c00'
        d='M28.654 41.37l.517 1.93a19.89 19.89 0 004.821-1.993l-.999-1.731a17.85 17.85 0 01-4.339 1.794z'
      ></path>
      <path
        fill='#ff5252'
        d='M36.728 36.728l1.414 1.414a20.08 20.08 0 003.165-4.15l-1.731-.999a18.07 18.07 0 01-2.848 3.735z'
      ></path>
      <path
        fill='#ffb74d'
        d='M19.346 41.37l-.517 1.93c1.652.442 3.379.7 5.171.7v-2c-1.612 0-3.167-.232-4.654-.63z'
      ></path>
      <path
        fill='#ffa726'
        d='M24 42v2c1.792 0 3.519-.258 5.172-.7l-.517-1.93A17.97 17.97 0 0124 42z'
      ></path>
      <path
        fill='#64b5f6'
        d='M19.346 6.63l-.518-1.93a19.89 19.89 0 00-4.821 1.993l.999 1.731a17.874 17.874 0 014.34-1.794z'
      ></path>
      <path
        fill='#9575cd'
        d='M41.37 19.346l1.93-.517a19.89 19.89 0 00-1.993-4.821l-1.731.999a17.85 17.85 0 011.794 4.339z'
      ></path>
      <path
        fill='#7986cb'
        d='M39.576 15.007l1.731-.999a20.08 20.08 0 00-3.165-4.15l-1.414 1.414a18.07 18.07 0 012.848 3.735z'
      ></path>
      <path
        fill='#8c9eff'
        d='M36.728 11.272l1.414-1.414a20.08 20.08 0 00-4.15-3.165l-.999 1.731a18.07 18.07 0 013.735 2.848z'
      ></path>
      <path
        fill='#82b1ff'
        d='M32.993 8.424l.999-1.731a19.787 19.787 0 00-4.82-1.993l-.517 1.93a17.86 17.86 0 014.338 1.794z'
      ></path>
      <path
        fill='#f06292'
        d='M42 24h2c0-1.792-.258-3.519-.7-5.172l-1.93.517A17.97 17.97 0 0142 24z'
      ></path>
      <path
        fill='#9ccc65'
        d='M6.63 19.346l-1.93-.518C4.258 20.481 4 22.208 4 24h2c0-1.612.232-3.167.63-4.654z'
      ></path>
      <path
        fill='#ef5350'
        d='M41.37 28.654l1.93.517c.442-1.652.7-3.379.7-5.171h-2c0 1.612-.232 3.167-.63 4.654z'
      ></path>
      <path
        fill='#64b5f6'
        d='M28.654 6.63l.517-1.93A19.953 19.953 0 0024 4v2c1.612 0 3.167.232 4.654.63z'
      ></path>
      <path
        fill='#68c1b8'
        d='M11.272 11.272L9.858 9.858a20.08 20.08 0 00-3.165 4.15l1.731.999a18.07 18.07 0 012.848-3.735z'
      ></path>
      <path
        fill='#81c784'
        d='M8.424 15.007l-1.731-.999a19.787 19.787 0 00-1.993 4.82l1.93.517a17.86 17.86 0 011.794-4.338z'
      ></path>
      <path
        fill='#4db6ac'
        d='M15.007 8.424l-.999-1.731a20.08 20.08 0 00-4.15 3.165l1.414 1.414a18.07 18.07 0 013.735-2.848z'
      ></path>
      <path
        fill='#4ba9f5'
        d='M24 6V4c-1.792 0-3.519.258-5.172.7l.517 1.93A17.97 17.97 0 0124 6z'
      ></path>
    </g>
    <g>
      <path
        fill='#7986cb'
        d='M24.001 11L24 24c.115 0 .23-.042.324-.125C25.433 22.896 29 19.477 29 16.059c0-2.794-2.238-5.058-4.999-5.059z'
      ></path>
      <path
        fill='#26a69a'
        d='M24 11c-.001 0-.001 0 0 0-2.761 0-5 2.265-5 5.059 0 3.418 3.567 6.837 4.676 7.816A.489.489 0 0024 24V11z'
      ></path>
      <path
        fill='#82b1ff'
        d='M24 11c-1.658 0-3 1.5-3 5 0 3.59 3 8 3 8s3-4.41 3-8c0-3.5-1.343-5-3-5z'
      ></path>
      <path
        fill='#4db6ac'
        d='M24 11c.543 0 .941.092.997.105C26.723 11.498 28 12.872 28 14.5c0 .91-.41 1.74-1.06 2.36.01-.07-2.659-5.83-2.94-5.86z'
      ></path>
      <path
        fill='#90caf9'
        d='M25.82 20.66C24.98 22.56 24 24 24 24s-.98-1.44-1.82-3.34a5.03 5.03 0 003.64 0z'
      ></path>
      <path
        fill='#8dd0ca'
        d='M21.06 16.86C20.4 16.25 20 15.41 20 14.5c0-1.69 1.37-3.1 3.19-3.43.16-.03.641-.07.81-.07-1.51.18-2.98 5.57-2.94 5.86z'
      ></path>
      <path
        fill='#80cbc4'
        d='M27 16c0 .14 0 .29-.02.43 0 .14-.02.29-.04.43-.73.7-1.78 1.14-2.94 1.14s-2.21-.44-2.94-1.14c-.04-.29-.06-.58-.06-.86 0-3.28 1.18-4.8 2.69-4.98.1-.02.21-.02.31-.02s.21 0 .31.02c.28.03.56.11.81.25.08.04.16.09.24.14s.16.11.24.19c.07.06.14.12.2.19.23.24.44.54.6.91.05.11.1.22.14.33.05.12.09.24.13.37.04.11.07.23.09.35.04.16.08.32.1.49.04.19.07.4.09.61.03.35.05.74.05 1.15z'
      ></path>
      <path
        fill='#9fa8da'
        d='M28.98 16.45c-.25 3.29-3.59 6.49-4.66 7.43-.09.08-.2.12-.32.12 0 0 .98-1.44 1.82-3.34a5.044 5.044 0 003.16-4.21z'
      ></path>
      <path
        fill='#81c784'
        d='M24 24c-.12 0-.23-.04-.32-.12-1.07-.94-4.41-4.14-4.66-7.43a5.044 5.044 0 003.16 4.21C23.02 22.56 24 24 24 24z'
      ></path>
    </g>
  </svg>
);
