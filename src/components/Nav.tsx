import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex gap-6">
      <Link href="/articles">Articles</Link>
      <Link href="/topics">Topics</Link>
    </nav>
  );
};

export default Nav;
