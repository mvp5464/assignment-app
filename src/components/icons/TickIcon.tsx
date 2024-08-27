export default function TickIcon({
  className = "w-6 h-6",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 13 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9471 0.773856C12.3021 1.06674 12.3525 1.59197 12.0596 1.94699L4.91046 10.6126C4.76057 10.7943 4.49 10.8157 4.31338 10.6598L0.44874 7.24987C0.103637 6.94536 0.0707236 6.41875 0.375227 6.07365C0.67973 5.72855 1.20634 5.69563 1.55144 6.00014L4.44716 8.55518L10.7739 0.886348C11.0668 0.531333 11.5921 0.480968 11.9471 0.773856Z"
        fill="white"
      />
    </svg>
  );
}
