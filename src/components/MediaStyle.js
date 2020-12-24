import React from 'react';

export default function MediaStyle(props) {
  return (
    <style>
      {`
        @media (max-width: 650px) {
          .sidebar {
            width: 50%;
            height: 100%;
            position: absolute;
            transition: 0.2s ease-in;
            z-index: 15;
            left: 0;
            transform: translateX(-100%);
          }
        
          .sidebar__tasks-number {
            margin-right: 15px;
          }
        
          .sidebar_shown {
            transform: translateX(0%);
            transition: 0.2s ease-in;
            z-index: 15;
            width: 70%;
          }
        
          .main {
            height: 100%;
          }
        
          .main__sidebar-icon {
            display: inline-block;
            z-index: 20;
          }
        
          @keyframes icon-open-animation {
            from {
              transform: rotate(180deg) translateX(18px);
            }
        
            to {
              transform: rotate(180deg) translateX(18px) translateX(-70vw);
            }
          }
        
          .main__sidebar-icon_closing {
            animation: icon-open-animation 0.2s ease-in;
            animation-fill-mode: forwards;
          }
        }
        
      `}
    </style>
  );
}
