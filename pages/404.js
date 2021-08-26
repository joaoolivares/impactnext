import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    },3000)
  },[]);
  return (
    <div>
      <h1>Ooops..</h1>
      <h2>Pagina incorreta</h2>
      <p>Volte para a página <Link href="/"><a>Home</a></Link></p>
    </div>
  );
}
 
export default NotFound;