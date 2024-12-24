import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/outline';
export default function Header() {
  return (
    <header className="flex justify-between h-14 bg-slate-300 text-black">
      <div className="flex items-center">
        <h1 className="ml-2 font-roboto text-xl">Amulya</h1>
      </div>
      <div className='mt-4'>
        <Link href="/">
          <HomeIcon className="w-6" />
        </Link>


      </div>
      <div className="flex items-center">
        Link to come
      </div>
    </header>
  );
}
