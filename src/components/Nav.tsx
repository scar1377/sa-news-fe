import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex gap-6 mt-4">
      <Link href="/articles" className="font-medium hover:text-orange-600">
        Articles
      </Link>
      <Link href="/topics" className="font-medium hover:text-orange-600">
        Topics
      </Link>
    </nav>
  );
};

export default Nav;
