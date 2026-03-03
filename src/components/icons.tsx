/**
 * Shared SVG icons used across the site.
 * Each icon accepts an optional className for sizing/color overrides.
 */

interface IconProps {
  className?: string;
}

// ── Navigation ──

export const HamburgerIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

export const CloseIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

// ── Arrows ──

export const ChevronDownIcon = ({ className = "w-12 h-12" }: IconProps) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

export const ArrowDownIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 14l-7 7m0 0l-7-7m7 7V3"
    />
  </svg>
);

// ── Contact ──

export const PhoneIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

export const EmailIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
    />
  </svg>
);

// ── Social ──

export const FacebookIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export const LinkedInIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export const InstagramIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

// ── Services ──

export const EyeIcon = ({ className = "w-7 h-7" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 4C5.5 4 1 12 1 12s4.5 8 11 8 11-8 11-8-4.5-8-11-8zm0 13a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"
    />
    <circle cx="12" cy="12" r="2.5" />
    {/* Plus sign */}
    <circle cx="19.5" cy="5.5" r="4" fill="black" />
    <line
      x1="19.5"
      y1="3"
      x2="19.5"
      y2="8"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="17"
      y1="5.5"
      x2="22"
      y2="5.5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const PerformanceMediaIcon = ({
  className = "w-16 h-16",
}: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 93 86"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.79"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M44.5219 71.917V85.2322M27.9032 85.2322H61.1405M5.05313 0.897179H88.1422C88.1422 0.897179 92.2979 0.897179 92.2979 5.337V67.4772C92.2979 67.4772 92.2979 71.917 88.1422 71.917H5.05313C5.05313 71.917 0.897461 71.917 0.897461 67.4772V5.337C0.897461 5.337 0.897461 0.897179 5.05313 0.897179Z" />
    <path d="M40.7277 50.5644L36.2348 52.8342C34.2586 53.7729 32.017 53.8486 29.9892 53.0449C27.9614 52.2413 26.3083 50.6222 25.383 48.5336C24.4578 46.445 24.334 44.0527 25.0379 41.8678C25.7419 39.6829 27.2178 37.8789 29.1503 36.8413L33.6431 34.5671L40.7277 50.5644ZM40.7277 50.5644C49.509 46.1192 59.3266 44.5546 68.9399 46.0681L71.9176 46.5368L56.347 11.3437L54.7952 14.0996C49.7953 23.0062 42.4358 30.1289 33.6472 34.5671L40.7277 50.5644ZM40.7277 50.5644C41.6549 52.659 42.971 54.5305 44.596 56.0652C46.221 57.5998 48.1209 58.7656 50.1805 59.4917" />
  </svg>
);

export const StudioCreatifIcon = ({ className = "w-16 h-16" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 66 67"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.79"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5.3705 64.4968L26.5409 41.8991M53.2002 31.8502L46.8631 52.1434C46.7619 52.4687 46.5888 52.7631 46.3583 53.0017C46.1278 53.2403 45.8468 53.4161 45.5391 53.514L6.69116 65.839C6.34117 65.95 5.96938 65.9563 5.61624 65.8574C5.2631 65.7585 4.94215 65.558 4.68831 65.2779C4.43447 64.9978 4.25747 64.6488 4.17657 64.2688C4.09567 63.8887 4.11397 63.4923 4.22948 63.1226L16.8439 22.7352C16.9343 22.4452 17.0821 22.1794 17.2773 21.9557C17.4724 21.7321 17.7104 21.5559 17.975 21.4391L35.8953 13.5633C36.2596 13.4027 36.6603 13.3608 37.0469 13.443C37.4335 13.5251 37.7886 13.7276 38.0676 14.0249L52.7179 29.67C52.98 29.9498 53.164 30.3019 53.2492 30.687C53.3344 31.0721 53.3174 31.4749 53.2002 31.8502Z" />
    <path d="M53.5924 30.6003L63 20.555C64.2473 19.2232 64.948 17.4172 64.948 15.5341C64.948 13.6509 64.2473 11.8449 63 10.5132L55.9476 2.97824C55.3298 2.31848 54.5962 1.79511 53.7889 1.43804C52.9815 1.08097 52.1161 0.897179 51.2422 0.897179C50.3682 0.897179 49.5029 1.08097 48.6955 1.43804C47.8881 1.79511 47.1546 2.31848 46.5367 2.97824L37.1291 13.0236M33.5963 34.3642C33.1328 33.8697 32.5826 33.4775 31.9771 33.21C31.3715 32.9424 30.7226 32.8048 30.0673 32.805C29.4119 32.8051 28.763 32.9431 28.1576 33.2109C27.5522 33.4788 27.0022 33.8713 26.5389 34.366C26.0756 34.8608 25.7082 35.4481 25.4575 36.0944C25.2069 36.7407 25.078 37.4334 25.0781 38.133C25.0783 38.8325 25.2075 39.5251 25.4584 40.1713C25.7094 40.8175 26.0771 41.4046 26.5406 41.8992C27.4767 42.8979 28.7461 43.4588 30.0696 43.4584C31.3931 43.4581 32.6623 42.8966 33.5979 41.8974C34.5336 40.8982 35.0591 39.5432 35.0587 38.1304C35.0584 36.7177 34.5324 35.363 33.5963 34.3642Z" />
  </svg>
);

export const CroissanceOrganiqueIcon = ({
  className = "w-16 h-16",
}: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 88 93"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.79"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.3666 79.2091C8.36107 72.7934 4.27122 64.619 2.61425 55.7198C0.957277 46.8206 1.80762 37.5963 5.05774 29.2135C8.30785 20.8306 13.8118 13.6658 20.8734 8.62495C27.9351 3.58414 36.2373 0.893814 44.7301 0.894203M75.0936 14.3298C81.0991 20.7455 85.189 28.9199 86.846 37.8191C88.5029 46.7183 87.6526 55.9426 84.4025 64.3254C81.1524 72.7083 75.6484 79.8731 68.5868 84.914C61.5251 89.9548 53.2229 92.6451 44.7301 92.6447" />
    <path d="M68.5194 18.8726C72.3648 18.8726 75.4821 15.5421 75.4821 11.4338C75.4821 7.3254 72.3648 3.99491 68.5194 3.99491C64.674 3.99491 61.5566 7.3254 61.5566 11.4338C61.5566 15.5421 64.674 18.8726 68.5194 18.8726Z" />
    <path d="M20.9403 89.5442C24.7857 89.5442 27.903 86.2138 27.903 82.1054C27.903 77.997 24.7857 74.6665 20.9403 74.6665C17.0949 74.6665 13.9775 77.997 13.9775 82.1054C13.9775 86.2138 17.0949 89.5442 20.9403 89.5442Z" />
    <path d="M35.0762 38.1695L42.0411 53.0495L65.2503 50.5699L51.3248 20.8098L35.0762 38.1695Z" />
    <path d="M35.6398 38.0624L26.3562 43.0216C23.5662 44.5108 23.8018 49.9617 25.1957 52.9425C26.5896 55.9232 30.5312 59.3909 33.3211 57.9017L42.6048 52.9425M40.5525 54.2081L46.3548 66.6062L41.713 69.0858L35.9107 56.6878" />
  </svg>
);

export const StudioVideoIcon = ({ className = "w-10 h-10" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="1" y="5" width="15" height="14" rx="2" />
    <polygon points="16 10 21 7 21 17 16 14" />
  </svg>
);

export const ArchitectureMarqueIcon = ({ className = "w-10 h-10" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2L20.5 7V17L12 22L3.5 17V7L12 2Z M9.5 9a2.5 2.5 0 0 1 5 0 a2.5 2.5 0 0 1 -5 0Z M7.5 18a4.5 4.5 0 0 0 9 0Z"
    />
  </svg>
);

export const StrategiePropulsionIcon = ({ className = "w-10 h-10" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" y1="21" x2="4" y2="17" />
    <line x1="9" y1="21" x2="9" y2="13" />
    <line x1="14" y1="21" x2="14" y2="15" />
    <line x1="19" y1="21" x2="19" y2="9" />
    <line x1="12" y1="9" x2="20" y2="2" />
    <polyline points="14 2 20 2 20 8" />
  </svg>
);

// ── Testimonials ──

export const StarIcon = ({
  className = "w-5 h-5",
  filled = false,
}: IconProps & { filled?: boolean }) => (
  <svg
    className={`${className} ${filled ? "text-yellow-400" : "text-gray-600"}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export const SpeechBubbleIcon = ({ className }: IconProps) => (
  <svg
    width="200"
    height="250"
    viewBox="0 0 217 191"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M63.9017 4H190.845C196.656 4.19431 202.164 6.6461 206.205 10.8372C210.246 15.0284 212.503 20.6305 212.5 26.4597V160.619C212.496 162.03 212.094 163.411 211.341 164.603C210.588 165.796 209.514 166.75 208.244 167.357C207.037 167.893 205.711 168.1 204.399 167.955C203.088 167.81 201.838 167.32 200.776 166.533L165.083 138.758H63.9017C57.9604 138.758 52.2625 136.392 48.0613 132.18C43.8602 127.968 41.5 122.255 41.5 116.298V26.4597C41.5 20.503 43.8602 14.7903 48.0613 10.5783C52.2625 6.36628 57.9604 4 63.9017 4Z"
      fill="#666666"
      fillOpacity="0.3"
      filter="url(#speechBlur)"
    />
    <defs>
      <filter id="speechBlur" x="-10" y="-10" width="240" height="210">
        <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
      </filter>
    </defs>
  </svg>
);
