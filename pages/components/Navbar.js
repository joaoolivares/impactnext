import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" alt="logo" width={187} height={66} />
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/sobre"><a>Sobre</a></Link>
      <Link href="/usuarios"><a>Usuários</a></Link>
    </nav>
  );
}
 
export default Navbar;