import Link from 'next/link';

export function Nav() {
  return (
    <div className="my-4 mx-28">
      <nav className="flex items-center justify-between h-20">
        <Link href="/">Brooklyn Montgomery</Link>
        <div className="flex">
          <div className="flex-row space-x-12">
            <Link href="/">Home</Link>
            <Link href="/portfolio">Mapping Portfolio</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
