export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="gutter mx-auto flex min-h-screen max-w-page items-end pb-20"
    >
      <p className="label text-faint">
        Loading<span className="animate-caret">_</span>
      </p>
    </div>
  );
}
