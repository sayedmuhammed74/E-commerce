import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <header className="relative flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="120"
          height="120"
          className="absolute right-0 z-10 top-[50%]"
        >
          <path
            d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"
            fill="rgba(255,255,255,1)"
          ></path>
        </svg>
        <div className="h-full w-full">
          <img
            src="./offers/phone.png"
            alt="sweet-shirt"
            className="absolute"
          />
          <img src="./offers/lab.png" alt="sweet-shirt" className="absolute" />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="120"
          height="120"
          className="absolute z-10 top-[50%]"
        >
          <path
            d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"
            fill="rgba(255,255,255,1)"
          ></path>
        </svg>
      </header>
    </div>
  );
}
