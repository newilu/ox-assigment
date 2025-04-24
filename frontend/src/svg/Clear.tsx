import React from "react";

function Clear(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity="0.6">
        <path
          d="M16 8.5C16 4.35938 12.6406 1 8.5 1C4.35938 1 1 4.35938 1 8.5C1 12.6406 4.35938 16 8.5 16C12.6406 16 16 12.6406 16 8.5Z"
          stroke="currentColor"
          strokeMiterlimit="10"
        />
        <path
          d="M10.9999 10.9998L5.99988 5.99976M5.99988 10.9998L10.9999 5.99976"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export { Clear };
