import Link from 'next/link';

export function Nav() {
  return (
    <div className="my-4 mx-6 sm:mx-16 lg:mx-28 text-[#30574e]">
      <nav className="flex items-center justify-between h-20 text-lg">
        <Link href="/" className="font-bold text-2xl">
          Brooklyn Montgomery
        </Link>
        <div className="flex space-x-6 sm:space-x-12">
          <Link
            className="hover:text-white transition-colors ease-in-out font-thin"
            href="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-white transition-colors ease-in-out font-thin"
            href="/portfolio"
          >
            Mapping Portfolio
          </Link>
        </div>
      </nav>
    </div>
  );
}
