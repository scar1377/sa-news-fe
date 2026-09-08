import Link from "next/link";

const Nav = () => {
  const navLinkClass =
    "mt-4 border-b-2 border-transparent pb-1 font-medium transition duration-200 hover:border-orange-400 hover:text-orange-600";
  return (
    <nav className="flex gap-6 mt-4">
      <Link href="/" className={navLinkClass}>
        Home
      </Link>
      <Link href="/articles" className={navLinkClass}>
        Articles
      </Link>
      <Link
        href="/topics"
        className={
          "mt-4 border-b-2 border-transparent pb-1 font-medium transition duration-200 hover:border-orange-400 hover:text-orange-600"
        }
      >
        Topics
      </Link>
    </nav>
  );
};

export default Nav;
