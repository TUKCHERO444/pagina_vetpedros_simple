export default function WaveDivider({ fill = "#FFFFFF" }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0" aria-hidden="true">
      <svg
        viewBox="0 0 1440 44"
        preserveAspectRatio="none"
        className="block h-8 w-full sm:h-9"
        focusable="false"
      >
        <path d="M0,12 C400,40 1040,40 1440,12 L1440,0 L0,0 Z" fill={fill} />
      </svg>
    </div>
  );
}