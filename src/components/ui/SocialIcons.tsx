type IconProps = {
  className?: string;
};

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v3H6v4h3v8h4v-8h3.2L17 12h-4V9c0-.6.4-1 1-1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12.04 2c-5.46 0-9.91 4.44-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.77 14.17c-.24.67-1.4 1.24-1.94 1.32-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.65-.61-2.91-1.26-4.8-4.2-4.95-4.39-.14-.2-1.18-1.57-1.18-3 0-1.42.74-2.12 1.01-2.41.24-.26.64-.38 1.02-.38.12 0 .23 0 .33.01.3.01.44.03.64.5.24.58.83 2.02.9 2.17.07.15.12.33.02.53-.09.2-.14.32-.27.5-.14.17-.29.38-.41.51-.14.14-.28.3-.12.58.16.29.7 1.15 1.5 1.86 1.03.91 1.9 1.19 2.18 1.33.28.13.44.11.61-.07.16-.17.7-.81.89-1.09.18-.28.37-.23.62-.14.25.09 1.58.75 1.85.88.27.14.45.2.52.31.07.12.07.67-.17 1.34Z" />
    </svg>
  );
}
