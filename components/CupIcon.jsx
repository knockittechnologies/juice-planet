export default function CupIcon({ color = '#f2c14e', topColor = '#ffffff', size = 56 }) {
  return (
    <svg width={size} height={size * 1.15} viewBox="0 0 56 64" fill="none" aria-hidden="true">
      <path d="M14 10h28l3 4-4 44a4 4 0 0 1-4 3.6H19a4 4 0 0 1-4-3.6L11 14z" fill={color} />
      <path d="M11 14h34l1.6-4H9.4z" fill={topColor} />
      <rect x="26" y="0" width="4" height="12" rx="2" fill="#ffffff" />
    </svg>
  );
}
