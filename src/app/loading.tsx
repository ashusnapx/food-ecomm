const Loading = () => {
  return (
    <div 
      className="flex items-center justify-center min-h-[60vh]"
      role="status"
      aria-label="Loading content"
    >
      <div className="flex flex-col items-center gap-4">
        {/* Animated spinner */}
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200 dark:border-gray-800" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-600 animate-spin" />
        </div>
        
        {/* Loading text */}
        <p className="text-sm text-gray-500 dark:text-gray-400 animate-pulse-subtle">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loading;
