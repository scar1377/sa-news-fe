import Link from "next/link";
import Nav from "./Nav";
import Login from "./Login";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b">
      <Link href="/">
        <h1 className="text-2xl font-bold">SA News</h1>
      </Link>
      <Nav />
      <Login />
    </header>
  );
};

export default Header;
