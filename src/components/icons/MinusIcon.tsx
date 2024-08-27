export default function MinusIcon({
  className = "w-6 h-6",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 14 2"
      fill="none"
      stroke="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.75 1C0.75 0.539764 1.1231 0.166668 1.58333 0.166668H12.4167C12.8769 0.166668 13.25 0.539764 13.25 1C13.25 1.46024 12.8769 1.83333 12.4167 1.83333H1.58333C1.1231 1.83333 0.75 1.46024 0.75 1Z"
        fill="white"
      />
    </svg>
  );
}
