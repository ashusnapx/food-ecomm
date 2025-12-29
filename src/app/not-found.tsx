import Link from "next/link";
import { Home, Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div 
      className="flex items-center justify-center min-h-[60vh] px-4"
      role="main"
    >
      <div className="max-w-md w-full text-center">
        {/* 404 Display */}
        <div className="mb-8">
          <span className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">
            404
          </span>
        </div>

        {/* Message */}
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          Page not found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            asChild
            variant="default"
            className="rounded-full gap-2"
          >
            <Link href="/">
              <Home className="w-4 h-4" />
              Go Home
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full gap-2"
          >
            <Link href="/projects">
              <Search className="w-4 h-4" />
              View Projects
            </Link>
          </Button>
        </div>

        {/* Skills link */}
        <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          Curious about my work?{" "}
          <Link 
            href="/skills" 
            className="text-purple-600 dark:text-purple-400 hover:underline"
          >
            Check out my skills
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
