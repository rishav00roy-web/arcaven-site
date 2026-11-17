import type { IconName } from "@/lib/site";

/* Line icons sized to sit where the reference used 42px PNG feature icons. */
const PATHS: Record<IconName, React.ReactNode> = {
  badge: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="m8.8 13.5-1.3 7 4.5-2.5 4.5 2.5-1.3-7" />
      <path d="m10 9 1.4 1.4L14.2 7.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  gift: (
    <>
      <rect x="3.5" y="8" width="17" height="4" rx="1" />
      <path d="M5 12v7.5A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V12M12 8v13" />
      <path d="M12 8S10.8 3.5 8.2 3.5a2.2 2.2 0 0 0 0 4.5ZM12 8s1.2-4.5 3.8-4.5a2.2 2.2 0 0 1 0 4.5Z" />
    </>
  ),
};

export default function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg className={className} width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {PATHS[name]}
    </svg>
  );
}
