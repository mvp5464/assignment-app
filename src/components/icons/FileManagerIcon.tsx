export default function FileManagerIcon({
  className = "w-6 h-6",
  color = false,
}: {
  className?: string;
  color?: boolean;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_128_40019)">
        <path
          d="M3 9.74292V16.4997C3.0025 18.5697 4.67998 20.2472 6.75001 20.2497H17.25C19.32 20.2472 20.9975 18.5697 21 16.4997V9.65967L3 9.74292Z"
          fill={color ? "#2086BF" : "#858D9D"}
        />
        <path
          d="M17.25 5.24998H12.354C12.238 5.25075 12.1234 5.22509 12.0187 5.17499L9.65174 3.98699C9.33927 3.83139 8.99505 3.75028 8.64599 3.75H6.74998C4.67998 3.75246 3.0025 5.42994 3 7.49998V8.24322L20.8972 8.15996C20.5064 6.45963 18.9947 5.25346 17.25 5.24998Z"
          fill={color ? "#2086BF" : "#858D9D"}
        />
      </g>
      <defs>
        <clipPath id="clip0_128_40019">
          <rect
            width="18"
            height="18"
            fill="white"
            transform="translate(3 3)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
