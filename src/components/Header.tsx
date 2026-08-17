import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <h1>SA News</h1>
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
