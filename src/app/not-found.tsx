import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Home = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='flex flex-col items-center space-y-6'>
        <h1 className='text-4xl font-bold text-center'>
          I know that you&apos;re testing my dev skills. Thanks for landing on
          this page.
        </h1>
        <Button className='border rounded-3xl'>
          <Link href='/'>Take me back to home &rarr;</Link>
        </Button>
      </div>
    </div>
  );
};
export default Home;
