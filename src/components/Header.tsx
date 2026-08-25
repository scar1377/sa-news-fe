import Link from "next/link";
import Nav from "./Nav";
import Login from "./Login";

const Header = () => {
  return (
    <header className="px-6 py-4 border-b">
      <div className="flex items-center justify-between">
        <Link href="/">
          <h1 className="text-3xl font-bold text-orange-600">SA News</h1>
        </Link>
        <Login />
      </div>

      <Nav />
    </header>
  );
};

export default Header;
