export default function ECommerceIcon({
  className = "w-6 h-6",
  color = false,
}: {
  className?: string;
  color?: boolean;
}) {
  return (
    <svg
      className={className}
      // width="24"
      // height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_96_54471)">
        <path
          d="M20.0347 6.05775C19.8238 5.80458 19.5597 5.60096 19.2612 5.46136C18.9626 5.32176 18.637 5.2496 18.3075 5.25H6.1815L6.15 4.98675C6.08554 4.43956 5.82254 3.93505 5.41087 3.56886C4.9992 3.20267 4.46747 3.00026 3.9165 3L3.75 3C3.55109 3 3.36032 3.07902 3.21967 3.21967C3.07902 3.36032 3 3.55109 3 3.75C3 3.94891 3.07902 4.13968 3.21967 4.28033C3.36032 4.42098 3.55109 4.5 3.75 4.5H3.9165C4.1002 4.50002 4.2775 4.56747 4.41478 4.68954C4.55206 4.81161 4.63976 4.97981 4.66125 5.16225L5.69325 13.9373C5.80039 14.8498 6.23886 15.6913 6.92543 16.302C7.612 16.9127 8.49889 17.25 9.41775 17.25H17.25C17.4489 17.25 17.6397 17.171 17.7803 17.0303C17.921 16.8897 18 16.6989 18 16.5C18 16.3011 17.921 16.1103 17.7803 15.9697C17.6397 15.829 17.4489 15.75 17.25 15.75H9.41775C8.95354 15.7487 8.5011 15.6038 8.12245 15.3353C7.7438 15.0668 7.45748 14.6877 7.30275 14.25H16.2428C17.122 14.2501 17.9733 13.9412 18.6479 13.3773C19.3225 12.8135 19.7775 12.0305 19.9335 11.1652L20.5223 7.89975C20.581 7.57576 20.5678 7.2428 20.4836 6.92448C20.3993 6.60616 20.2461 6.31026 20.0347 6.05775Z"
          fill={color ? "#2086BF" : "#858D9D"}

          // fill="#858D9D"
        />
        <path
          d="M8.25 21.0005C9.07842 21.0005 9.74999 20.3289 9.74999 19.5005C9.74999 18.6721 9.07842 18.0005 8.25 18.0005C7.42157 18.0005 6.75 18.6721 6.75 19.5005C6.75 20.3289 7.42157 21.0005 8.25 21.0005Z"
          fill={color ? "#2086BF" : "#858D9D"}
        />
        <path
          d="M15.75 21.0005C16.5784 21.0005 17.25 20.3289 17.25 19.5005C17.25 18.6721 16.5784 18.0005 15.75 18.0005C14.9216 18.0005 14.25 18.6721 14.25 19.5005C14.25 20.3289 14.9216 21.0005 15.75 21.0005Z"
          fill={color ? "#2086BF" : "#858D9D"}
        />
      </g>
      <defs>
        <clipPath id="clip0_96_54471">
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
