import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  isMobile?: boolean;
}

const Logo = ({ isMobile }: LogoProps) => {
  return (
    <Link href={'/'}>
      <div className="flex items-center ">
        {!isMobile ? (
          <span className="shadows  text-primary text-[28px] sm:text-[28px]">
            PDF AI Chatbot
          </span>
        ) : null}
      </div>
    </Link>
  );
};

export default Logo;
