import React from "react";

interface IButtonProps {
  title: string;
  height?: string;
  width?: string;
  borderRadius?: string;
  handleClick?: () => void;
  className?: string;
  loader?: JSX.Element;
  loading?: boolean;
}

const Button = ({
  title,
  handleClick,
  className,
  loader,
  loading,
}: IButtonProps) => {
  const btnTitle = title ? title : "Button";
  return (
    <button
      className={`bg-goldenBrown flex flex-row items-center text-[14px] text-white font-[600]  w-full justify-center gap-2 ${className} border-none rounded-[30px]`}
      onClick={handleClick}
    >
      {btnTitle}
      {loading ? <span>{loader}</span> : null}
    </button>
  );
};

export default Button;
