export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="grid min-h-[100dvh] place-items-center bg-white"
    >
      <span
        aria-hidden
        className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-accent"
      />
    </div>
  );
}
