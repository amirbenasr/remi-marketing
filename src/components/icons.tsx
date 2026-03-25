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
  className = "w-full h-full",
}: IconProps) => (
  <img src="/images/icons/speaker.png" alt="Performance Média" className={`${className} object-contain`} />
);

export const StudioCreatifIcon = ({ className = "w-full h-full" }: IconProps) => (
  <img src="/images/icons/pen.png" alt="Studio Créatif" className={`${className} object-contain`} />
);

export const CroissanceOrganiqueIcon = ({
  className = "w-full h-full",
}: IconProps) => (
  <img src="/images/icons/screen.png" alt="Croissance Organique" className={`${className} object-contain`} />
);

export const StudioVideoIcon = ({ className = "w-full h-full" }: IconProps) => (
  <img src="/images/icons/video.png" alt="Studio Vidéo" className={`${className} object-contain`} />
);

export const ArchitectureMarqueIcon = ({ className = "w-full h-full" }: IconProps) => (
  <img src="/images/icons/person.png" alt="Architecture de Marque" className={`${className} object-contain`} />
);

export const StrategiePropulsionIcon = ({ className = "w-full h-full" }: IconProps) => (
  <img src="/images/icons/analyse.png" alt="Stratégie et Propulsion" className={`${className} object-contain`} />
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
