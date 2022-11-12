import * as React from "react"

const Blue1 = (props) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={16} cy={16} r={16} fill="#2250F4" />
    <g clipPath="url(#a)">
      <path
        d="M16 6.313A9.686 9.686 0 0 0 6.312 16 9.686 9.686 0 0 0 16 25.688 9.686 9.686 0 0 0 25.688 16 9.686 9.686 0 0 0 16 6.312Zm3.613 12.226-.781.977a.624.624 0 0 1-.879.097l-2.617-1.942a1.565 1.565 0 0 1-.586-1.22v-6.076a.625.625 0 0 1 .625-.625h1.25a.625.625 0 0 1 .625.625V16l2.266 1.66a.624.624 0 0 1 .097.88Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(6 6)" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default Blue1