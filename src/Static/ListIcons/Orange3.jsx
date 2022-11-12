import React from "react";

const Orange3 = (props) => {
  return (
    <svg
      width={32}
      height={32}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={16} cy={16} r={16} fill="#FF8000" />
      <g clipPath="url(#a)">
        <path
          d="M21.003 12.665h-.834V11c0-2.3-1.866-4.167-4.166-4.167a4.168 4.168 0 0 0-4.167 4.167v1.666h-.833c-.921 0-1.667.746-1.667 1.667v8.333c0 .921.746 1.667 1.667 1.667h10c.92 0 1.666-.746 1.666-1.667v-8.333c0-.92-.746-1.667-1.666-1.667Zm-5 7.5a1.666 1.666 0 1 1-.001-3.332 1.666 1.666 0 0 1 0 3.332Zm2.583-7.5h-5.167V11a2.586 2.586 0 0 1 2.584-2.584A2.586 2.586 0 0 1 18.586 11v1.666Z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" transform="translate(6 6)" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Orange3;
