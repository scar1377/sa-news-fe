import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <h2>Topic not found</h2>
      <p>The topic you're looking for doesn't exist</p>
      <Link href="/topics">Back to all topics</Link>
    </>
  );
};

export default NotFound;
