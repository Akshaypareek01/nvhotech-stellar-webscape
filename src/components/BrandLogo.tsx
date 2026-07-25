/** Double-layer interlocking brackets for the NVHO Tech wordmark. */
export const BrandIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="3.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M9 26 V10 Q9 8 11 8 H29" />
    <path d="M15 23 V15 Q15 13 17 13 H25" />
    <path d="M39 22 V38 Q39 40 37 40 H19" />
    <path d="M33 25 V33 Q33 35 31 35 H23" />
  </svg>
);

type BrandLogoProps = {
  /** Sets the wordmark size — icon scales with `em`. */
  className?: string;
};

/** Text-based NVHO Tech logo matching the brand lockup. */
export const BrandLogo = ({ className = '' }: BrandLogoProps) => (
  <span className={`inline-flex items-center gap-[0.45em] leading-none text-white ${className}`}>
    <BrandIcon className="h-[1.35em] w-[1.35em] shrink-0" />
    <span className="font-brand tracking-[0.03em]">NvhoTech</span>
  </span>
);
