import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <h2>Article not found</h2>
      <p>The article you're looking for doesn't exist</p>
      <Link href="/articles">Back to all articles</Link>
    </>
  );
};

export default NotFound;
