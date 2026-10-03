/** Flag of Morocco as inline SVG (flag emoji don't render on Windows). */
const MoroccoFlag = ({ className = 'flag', title = 'Morocco' }) => (
  <svg className={className} viewBox="0 0 90 60" role="img" aria-label={title}>
    <rect width="90" height="60" fill="#c1272d" />
    <path
      d="M45 17.5 52.35 40.11 33.11 26.14h23.78L37.65 40.11z"
      fill="none"
      stroke="#006233"
      strokeWidth="2.6"
      strokeLinejoin="round"
    />
  </svg>
);

export default MoroccoFlag;
