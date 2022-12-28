import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" legacyBehavior>
      <Image
        src="/images/nav/logo.png"
        alt="Logo"
        width={200}
        height={54}
        
      />
    </Link>
  );
};

export default Logo;
