import React from "react";

const Icon = () => {
  return (
    <svg height="34" viewBox="0 0 34 34" width="34" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter
          filterUnits="objectBoundingBox"
          height="128.3%"
          id="filter-1"
          width="128.3%"
          x="-9.1%"
          y="-9.1%"
        >
          <feOffset dx="2" dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2" />
          <feColorMatrix
            in="shadowBlurOuter1"
            result="shadowMatrixOuter1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" id="radialGradient-2" r="68.628%">
          <stop offset="0%" stopColor="#FFCF00" />
          <stop offset="100%" stopColor="#F7AE15" />
        </radialGradient>
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-609 -731)">
          <g transform="translate(132 622)">
            <g>
              <g filter="url(#filter-1)" transform="translate(300)">
                <g transform="translate(71 100) translate(108 11)">
                  <circle cx="13" cy="13" fill="url(#radialGradient-2)" r="13" />
                  <path
                    d="M13 3.095c-5.454 0-9.905 4.452-9.905 9.905 0 5.454 4.452 9.905 9.905 9.905 5.454 0 9.905-4.452 9.905-9.905 0-5.454-4.452-9.905-9.905-9.905zm0 18.649c-4.821 0-8.744-3.923-8.744-8.744S8.179 4.256 13 4.256 21.744 8.179 21.744 13 17.821 21.744 13 21.744z"
                    fill="#F8B013"
                    fillRule="nonzero"
                  />
                  <path
                    d="M13 5.296C8.768 5.296 5.296 8.77 5.296 13c0 4.232 3.474 7.704 7.704 7.704 4.232 0 7.704-3.474 7.704-7.704 0-4.232-3.474-7.704-7.704-7.704zm0 14.229A6.532 6.532 0 016.475 13 6.532 6.532 0 0113 6.475 6.532 6.532 0 0119.525 13 6.532 6.532 0 0113 19.525z"
                    fill="#F8B013"
                    fillRule="nonzero"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Icon;
