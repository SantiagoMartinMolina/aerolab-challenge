import React from "react";

const Icon = () => {
  return (
    <svg height="50" viewBox="0 0 50 50" width="50" xmlns="http://www.w3.org/2000/svg">
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
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-652 -634)">
          <g transform="translate(132 624)">
            <g>
              <g filter="url(#filter-1)" transform="translate(300)">
                <g transform="translate(222 12)">
                  <circle cx="21" cy="21" fill="#FFF" r="21" />
                  <path
                    d="M29.995 29.108L28.882 15.53a.598.598 0 00-.604-.542h-3.033v-1.06c0-1.615-1.36-2.929-3.032-2.929h-2.426c-1.672 0-3.032 1.314-3.032 2.93v1.06h-3.033a.598.598 0 00-.604.54l-1.113 13.577c-.038.487.136.971.48 1.33.343.358.83.563 1.334.563h14.362c.505 0 .991-.205 1.335-.563.343-.359.517-.843.479-1.33zM18 14.25c0-1.24.807-2.25 1.8-2.25h2.4c.993 0 1.8 1.01 1.8 2.25V15h-6v-.75z"
                    fill="#0AD4FA"
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
