import React from "react";
// import { css, styled } from "styled-components";

type props = {
  size: "large" | "small";
  styleType: "cancel" | "delete" | "submit";
  children: React.ReactNode;
  // onClick?: (id: string) => void;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

// type ButtonFormProps = {
//   size?: "large" | "small";
//   styleType?: "cancel" | "delete" | "submit";
//   onClick?: (id: string) => void;
// };

type ButtonConfigType = {
  [key: string]: string;
};

const buttonConfig: ButtonConfigType = {
  cancel: "bg-[#beebfd]",
  delete: "bg-[#fdb7ba]",
  submit: "bg-[#d3c0d3]",
  large: "w-20 h-7",
  small: "w-12 h-7",
};

function Button({ size, children, styleType, onClick }: props) {
  return (
    <button
      className={`border-[1px] border-black ${buttonConfig[size]} ${buttonConfig[styleType]}`}
      // size={size}
      // styleType={styleType}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// const ButtonForm = styled.button<ButtonFormProps>`
//   ${(props) => {
//     switch (props.size) {
//       case "large":
//         return css`
//           width: 70px;
//           height: 29px;
//         `;
//       case "small":
//         return css`
//           width: 50px;
//           height: 29px;
//         `;
//       default:
//         return;
//     }
//   }}
//   ${(props) => {
//     switch (props.styleType) {
//       case "cancel":
//         return css`
//           background-color: #beebfd;
//         `;
//       case "delete":
//         return css`
//           background-color: #fdb7ba;
//         `;
//       case "submit":
//         return css`
//           background-color: #d3c0d3;
//         `;
//       default:
//         return;
//     }
//   }}
//   border: 1px solid;
//   padding: 0;
//   &:hover {
//     cursor: pointer;
//   }
// `;

export default Button;
