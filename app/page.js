import Link from 'next/link';
import User from './../components/user';

export default function Home() {
  return (
    <main className="flex flex-col items-center mt-2 p-4">
      <Link
        className="inline-block rounded bg-indigo-400 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-300"
        href={'/user'}
      >
        Create New user
      </Link>
      <User />
    </main>
  );
}
