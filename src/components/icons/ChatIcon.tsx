export default function ChatIcon({
  className = "w-6 h-6",
  color = false,
}: {
  className?: string;
  color?: boolean;
}) {
  return (
    <svg
      className={className}
      //   width="24"
      //   height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_96_54493)">
        <path
          d="M18 3H6C5.20435 3 4.44129 3.31607 3.87868 3.87868C3.31607 4.44129 3 5.20435 3 6L3 15C3 15.7956 3.31607 16.5587 3.87868 17.1213C4.44129 17.6839 5.20435 18 6 18H8.175L11.5133 20.8223C11.6487 20.9369 11.8203 20.9997 11.9977 20.9997C12.1752 20.9997 12.3468 20.9369 12.4823 20.8223L15.825 18H18C18.7956 18 19.5587 17.6839 20.1213 17.1213C20.6839 16.5587 21 15.7956 21 15V6C21 5.20435 20.6839 4.44129 20.1213 3.87868C19.5587 3.31607 18.7956 3 18 3V3ZM8.25 6.75H12C12.1989 6.75 12.3897 6.82902 12.5303 6.96967C12.671 7.11032 12.75 7.30109 12.75 7.5C12.75 7.69891 12.671 7.88968 12.5303 8.03033C12.3897 8.17098 12.1989 8.25 12 8.25H8.25C8.05109 8.25 7.86032 8.17098 7.71967 8.03033C7.57902 7.88968 7.5 7.69891 7.5 7.5C7.5 7.30109 7.57902 7.11032 7.71967 6.96967C7.86032 6.82902 8.05109 6.75 8.25 6.75ZM15.75 14.25H8.25C8.05109 14.25 7.86032 14.171 7.71967 14.0303C7.57902 13.8897 7.5 13.6989 7.5 13.5C7.5 13.3011 7.57902 13.1103 7.71967 12.9697C7.86032 12.829 8.05109 12.75 8.25 12.75H15.75C15.9489 12.75 16.1397 12.829 16.2803 12.9697C16.421 13.1103 16.5 13.3011 16.5 13.5C16.5 13.6989 16.421 13.8897 16.2803 14.0303C16.1397 14.171 15.9489 14.25 15.75 14.25ZM15.75 11.25H8.25C8.05109 11.25 7.86032 11.171 7.71967 11.0303C7.57902 10.8897 7.5 10.6989 7.5 10.5C7.5 10.3011 7.57902 10.1103 7.71967 9.96967C7.86032 9.82902 8.05109 9.75 8.25 9.75H15.75C15.9489 9.75 16.1397 9.82902 16.2803 9.96967C16.421 10.1103 16.5 10.3011 16.5 10.5C16.5 10.6989 16.421 10.8897 16.2803 11.0303C16.1397 11.171 15.9489 11.25 15.75 11.25Z"
          fill={color ? "#2086BF" : "#858D9D"}
        />
      </g>
      <defs>
        <clipPath id="clip0_96_54493">
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
