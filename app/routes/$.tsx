import { Link } from "@remix-run/react";

export default function CatchAllRoute() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8">The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-blue-500 hover:text-blue-600 underline">
        Go back to homepage
      </Link>
    </div>
  );
}