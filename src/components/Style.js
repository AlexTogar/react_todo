import React from 'react';
import trash from '../img/trash.svg';
// import trashHovered from '../img/trash_hovered.svg';
import starCatIcon from '../img/star_cat_icon.svg';
import home from '../img/home.svg';
import iconCatDefault from '../img/icon_cat_default.svg';
import plus from '../img/plus.svg';
import sidebarIcon from '../img/sidebar_icon.svg';
import checkbox from '../img/checkbox.svg';
import star from '../img/star.svg';
// import starHovered from '../img/star_hovered.svg';
import starActive from '../img/star_acitve.svg';
import arrowDown from '../img/arrow_down.svg';
import arrowRight from '../img/arrow_right.svg';
import themes from '../colorThemes.json';

export default function Style(props) {
  const {
    globalBackgroundColor,
    mainBackgroundColor,
    sidebarBackgroundColor,
    backgroundActiveCatColor,
    backgroundHoveredItemColor,
    defaultGrayColor,
    accentColor,
    splitterLineColor,
    textColor,
  } = themes[props.theme];

  return (
    <style>
      {`
        * {
          box-sizing: border-box;
          margin: 0px;
          padding: 0px;
        }
        :root {
          --global-background-color: ${globalBackgroundColor};
          --main-background-color: ${mainBackgroundColor};
          --sidebar-backgroukd-color: ${sidebarBackgroundColor};
          --background-active-cat-color: ${backgroundActiveCatColor};
          --background-hovered-item-color: ${backgroundHoveredItemColor};
          --default-gray-color: ${defaultGrayColor};
          --accent-color: ${accentColor};
          --splitter-line-color: ${splitterLineColor};
          --text-color: ${textColor};
        }
        html{
          touch-action: manipulation;
        }
        html,
        body {
          height: 100%;
        }
        input {
          color: var(--text-color);
        }
        .application {
          font-family: sans-serif;
          font-size: 16px;
          display: flex;
          height: 100%;
          justify-content: center;
          align-items: center;
          background-color: var(--global-background-color);
          color: var(--text-color);
        }
        .application__trash-icon {
          cursor: pointer;
          background-image: url('${trash}');
          width: 20px;
          height: 20px;
          margin-right: 10px;
        }
        .sidebar {
          background-color: var(--sidebar-backgroukd-color);
          padding: 25px 0px 0px 0px;
          border-right: 2px solid var(--splitter-line-color);
          width: 250px;
          height: 700px;
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
          position: relative;
        }
        .sidebar__title {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding-left: 5px;
          height: 50px;
          color: var(--accent-color);
          vertical-align: center;
        }
        .sidebar__title-text {
          pointer-events: none;
        }
        .sidebar__categories {
          max-height: 550px;
          overflow-y: auto;
        }
        .sidebar__categories::-webkit-scrollbar {
          width: 0px;
        }
        .sidebar__category {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding: 5px;
          height: 50px;
          width: 100%;
        }
        .sidebar__category:hover {
          background-color: var(--background-hovered-item-color);
        }
        .sidebar__category_active {
          background-color: var(--background-active-cat-color);
        }
        .icon {
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;
        }
        .sidebar__cat-icon {
          width: 20px;
          height: 20px;
          margin-right: 8px;
        }
        .sidebar__cat-icon_important {
          background-image: url('${starCatIcon}');
        }
        .sidebar__cat-icon_all-tasks {
          background-image: url('${home}');
        }
        .sidebar__cat-icon_default {
          background-image: url('${iconCatDefault}');
        }
        .sidebar__cat-text {
          cursor: default;
          flex-grow: 1;
        }
        .sidebar__tasks-number {
          font-size: 12px;
          color: var(--default-gray-color);
        }
        .input {
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
        .sidebar__icon {
          background-image: url('${plus}');
          width: 20px;
          height: 20px;
        }
        .input-field {
          width: 100%;
          height: 40px;
          font-size: 16px;
          color: var(--text-color);
          background-color: var(--sidebar-backgroukd-color);
          border-radius: 5px;
          border: none;
          padding-left: 6px;
        }
        .input-field:focus,
        .input-field:active {
          outline: none;
        }
        .sidebar__input {
          margin: 3px;
          padding: 5px;
          height: 50px;
        }
        .main {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          width: 720px;
          height: 700px;
          padding: 25px;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
          background-color: var(--main-background-color);
          position: relative;
        }

        .main__sidebar-icon {
          display: none;
          position: absolute;
          top: 40%;
          left: 0px;
          width: 18px;
          height: 100px;
          background-image: url('${sidebarIcon}');
        }

        .main__title {
          margin-bottom: 10px;
          flex: 0 1 50px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
        .main__title-icon {
          width: 25px;
          height: 25px;
        }
        .main__title-text {
          pointer-events: none;
          font-size: 25px;
          font-weight: 500;
          margin-left: 10px;
          color: var(--accent-color);
        }
        .main__theme-switcher{
          display: flex;
          justify-content: center;
          align-items: center;
          height: 35px;
          width: 35px;
          margin-left: auto;
          border: none;
          cursor: pointer;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }
        .main__theme-switcher-icon{
          border-radius: 100%;
          background-color: var(--text-color);
          width: 20px;
          height: 20px;
        }
        .active-task-container {
          max-height: 77%;
          flex-grow: 1;
          overflow-y: hidden;
        }
        .task-container {
          display: flex;
          max-height: 100%;
          flex-direction: column;
          justify-content: flex-start;
          padding-bottom: 10px;
          overflow-y: scroll;
          transition: 0.13s;
        }
        .task-container_hidden {
          transition: 0.13s;
          opacity: 0;
        }
        /* hide scrollbar */
        .task-container::-webkit-scrollbar {
          width: 0;
        }
        /* checkbox field to click (complete task) */
        .task-container__pseudo-checkbox {
          width: 30px;
          height: 30px;
          background-color: transparent;
          position: absolute;
          top: 10px;
          left: 5px;
          z-index: 10;
          cursor: pointer;
        }
        .task-container__task {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          background-color: var(--sidebar-backgroukd-color);
          min-height: 50px;
          color: var(--text-color);
          padding-left: 40px;
          padding-right: 5px;
          border-radius: 5px;
          margin-top: 5px;
          position: relative;
          transition: 0.13s;
        }
        .task-container__task:hover {
          background-color: var(--background-hovered-item-color);
        }
        .task-container__task_checked {
          color: var(--default-gray-color);
        }
        .task-container__task_checked::after {
          content: '';
          background-image: url('${checkbox}');
          background-position: center;
          background-size: contain;
          width: 19px;
          height: 19px;
          position: absolute;
          left: 10px;
          top: 33%;
        }
        .task-container__task::before {
          content: '';
          cursor: pointer;
          border: 1px solid var(--default-gray-color);
          width: 16px;
          height: 16px;
          position: absolute;
          left: 10px;
          top: 33%;
          border-radius: 50%;
        }
        /* hide original checkbox */
        .task-container__task-checkbox {
          display: none;
        }
        .task-container__task-text {
          background-color: inherit;
          border: none;
          font-size: 16px;
          flex-grow: 1;
        }
        .task-container__task-text:focus,
        .task-container__task-text:active {
          outline: none;
        }
        .task-container__task-star {
          background-image: url('${star}');
          cursor: pointer;
          width: 20px;
          height: 20px;
        }

        /* mark task as important anmation */
        @keyframes star-activation {
          from {
          }
          50% {
            transform: scale(1.3);
          }
          to {
            transform: scale(1);
          }
        }
        /* unmark task as important animation */
        @keyframes star-deactivation {
          from {
          }
          50% {
            transform: scale(0.7);
          }
          to {
            transform: scale(1);
          }
        }
        .task-container__task-star_acitve {
          animation: star-activation 0.3s ease-in-out;
          background-image: url('${starActive}');
        }
        .completed-task-container {
          flex-basis: 30%;
          min-height: 230px;
          overflow-y: hidden;
          padding-bottom: 10px;
          padding-top: 10px;
          color: var(--default-gray-color);
        }
        .completed-task-container_hidden {
          min-height: unset;
          flex-basis: unset;
          height: 45px;
        }
        .completed-task-container__toggle {
          cursor: default;
          -webkit-user-select: none;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: fit-content;
          border-radius: 5px;
          padding: 5px 10px 5px 10px;
          background-color: var(--sidebar-backgroukd-color);
        }
        .completed-task-container__toggle:hover {
          background-color: var(--background-hovered-item-color);
        }
        .completed-task-container__arrow {
          width: 18px;
          height: 18px;
        }
        .completed-task-container__arrow_down {
          background-image: url('${arrowDown}');
        }
        .completed-task-container__arrow_right {
          background-image: url('${arrowRight}');
        }
        .completed-task-container__text {
          flex-grow: 1;
          padding: 0px 10px;
          color: var(--accent-color);
        }
        .completed-task-container__tasks-number {
          color: var(--accent-color);
          font-size: 12px;
          padding-left: 10px;
        }
        .main__input {
          position: relative;
          min-height: 55px;
        }
        .main__icon {
          position: absolute;
          flex-shrink: 1;
          background-image: url('${plus}');
          width: 20px;
          height: 20px;
          left: 10px;
        }
        .main__form {
          width: 100%;
        }
        .main__input-field {
          padding-left: 35px;
        }
      `}
    </style>
  );
}
