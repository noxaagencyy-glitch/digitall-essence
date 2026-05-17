import { useEffect, useState, type ReactNode } from "react";

const EMAIL_USER = "contact";
const EMAIL_DOMAIN = "noxaweb.com";

export const EMAIL_ADDRESS = `${EMAIL_USER}@${EMAIL_DOMAIN}`;

export function EmailText() {
  return (
    <span className="inline-flex flex-wrap items-baseline">
      <span>{EMAIL_USER}</span>
      <span aria-hidden="true">@</span>
      <span>{EMAIL_DOMAIN}</span>
    </span>
  );
}

export function EmailLink({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  const [href, setHref] = useState("#contact");

  useEffect(() => {
    setHref(`mailto:${EMAIL_ADDRESS}`);
  }, []);

  return (
    <a href={href} className={className} suppressHydrationWarning>
      {children ?? <EmailText />}
    </a>
  );
}