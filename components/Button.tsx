import React from "react";

interface IButtonProps {
  title: string;
  height?: string;
  width?: string;
  borderRadius?: string;
  handleClick?: () => void;
  classNam?: string;
  loader?: JSX.Element;
  loading?: boolean;
}

const Button = ({
  title,
  handleClick,
  classNam,
  loader,
  loading,
}: IButtonProps) => {
  const btnTitle = title ? title : "Button";
  return (
    <button
      className={`bg-goldenBrown flex flex-row items-center text-[14px] text-white font-[600] justify-center gap-2 ${classNam} border-none rounded-[30px]`}
      onClick={handleClick}
    >
      {btnTitle}
      {loading ? <span>{loader}</span> : null}
    </button>
  );
};

export default Button;
