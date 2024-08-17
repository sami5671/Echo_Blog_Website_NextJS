import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div>
      Page Not Found
      <h1>Sorry</h1>
      <button className="bg-green-400 px-2 py-1 rounded-xl">
        <Link href="/">Return Home</Link>
      </button>
    </div>
  );
};

export default NotFoundPage;
