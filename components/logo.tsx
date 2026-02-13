export default function MPLogo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={Math.round(size * (13/28))}
      viewBox="0 0 28 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="3" height="13" fill="#2A3132"/>
      <rect x="13" width="3" height="13" fill="#2A3132"/>
      <rect x="25" y="2" width="3" height="5" fill="#2A3132"/>
      <rect x="6" y="2" width="4" height="11" fill="#2A3132"/>
      <rect width="6" height="2" fill="#2A3132"/>
      <rect x="10" width="3" height="2" fill="#2A3132"/>
      <rect x="16" width="9" height="2" fill="#2A3132"/>
      <rect x="16" y="7" width="9" height="2" fill="#2A3132"/>
      <rect x="26" y="11" width="2" height="2" fill="#2A3132"/>
    </svg>
  )
}
