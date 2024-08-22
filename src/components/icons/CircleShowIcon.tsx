export default function CircleShowIcon({
  className = "w-6 h-6",
  percentage,
  color,
  type,
}: {
  className?: string;
  percentage: number;
  color: string;
  type: "half" | "full";
}) {
  return (
    <svg className={className} viewBox="0 0 36 36">
      <path
        d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray={`${
          type === "half" ? percentage / 2 : percentage
        }, 100`}
      />
    </svg>
  );
}
