"use client";

import { useEffect, useState } from "react";
import { CircleCheck } from "kubai-icons-react";
import { COMPANY } from "@/lib/site";

/* Email address with a one-tap copy. Useful when a mailto link has nowhere
   to go (no mail app set up); the check animates in to confirm the copy. */
export default function CopyEmail({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(COMPANY.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${COMPANY.email}`;
    }
  }

  return (
    <button
      type="button"
      className={`copy-email copy-email--${tone}`}
      data-copied={copied}
      onClick={copy}
      aria-label={copied ? `Copied ${COMPANY.email}` : `Copy ${COMPANY.email}`}
    >
      <span>{COMPANY.email}</span>
      <span className="copy-email__hint" aria-hidden="true">
        {copied ? (
          <>
            <CircleCheck size={14} trigger="parent" /> Copied
          </>
        ) : (
          "Copy"
        )}
      </span>
      <span className="sr-only" aria-live="polite">{copied ? "Email address copied" : ""}</span>
    </button>
  );
}
