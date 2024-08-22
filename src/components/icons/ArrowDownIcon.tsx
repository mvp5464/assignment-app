export default function ArrowDownIcon({
  className = "w-6 h-6",
  color = "#858D9D",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      className={className}
      //   width="18"
      //   height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.81051 6.75H13.1895C13.3378 6.75003 13.4828 6.79404 13.6061 6.87645C13.7294 6.95886 13.8255 7.07598 13.8823 7.21301C13.939 7.35003 13.9539 7.50081 13.9249 7.64627C13.896 7.79174 13.8246 7.92536 13.7198 8.03025L9.53026 12.2197C9.38961 12.3603 9.19888 12.4393 9.00001 12.4393C8.80114 12.4393 8.6104 12.3603 8.46976 12.2197L4.28026 8.03025C4.1754 7.92536 4.104 7.79174 4.07507 7.64627C4.04615 7.50081 4.061 7.35003 4.11775 7.21301C4.1745 7.07598 4.27061 6.95886 4.39392 6.87645C4.51722 6.79404 4.6622 6.75003 4.81051 6.75Z"
        fill={color}
      />
    </svg>
  );
}
