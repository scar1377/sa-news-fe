import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <Link href="/articles">Articles</Link>
      <Link href="/topics">Topics</Link>
    </nav>
  );
};

export default Nav;
