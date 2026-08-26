import Link from "next/link";
import Nav from "./Nav";
import Login from "./Login";

const Header = () => {
  return (
    <header className="bg-orange-100 px-6 py-4 border-b-2 border-orange-200">
      <div className="flex gap-4 items-center justify-between">
        <Link href="/">
          <h1 className="text-3xl font-bold text-orange-600 whitespace-nowrap">
            SA News
          </h1>
        </Link>
        <Login />
      </div>

      <Nav />
    </header>
  );
};

export default Header;
