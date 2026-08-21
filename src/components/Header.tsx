import Link from "next/link";
import Nav from "./Nav";
import Login from "./Login";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <h1>SA News</h1>
      </Link>
      <Login />
      <Nav />
    </header>
  );
};

export default Header;
