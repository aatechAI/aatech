/**
 * AATech logo — uses the brand PNG in /public/logo.png (AATECH.PK).
 * Pass a className to control size in different contexts.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.png"
      alt="AATech.pk"
      className={`logo__img ${className}`.trim()}
      width={650}
      height={208}
    />
  );
}
