"use client";
import Image from "next/image";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import CustomButton from "./custom-button";
import { useModalStore } from "@/stores/common/stores";

const Modal = () => {
  const {
    isShow,
    handleClose,
    title,
    content,
    btnText,
    handleAction,
    icon,
    optionalBtnText,
    handleOptional,
  } = useModalStore();
  const textAlign = icon ? "text-center" : ""; // icon 있으면 text-align: center 적용

  // 모달 열릴 때 외부 스크롤 차단
  useEffect(() => {
    document.body.style.overflow = isShow ? "hidden" : "";
    return () => {
      document.body.style.overflow = ""; // 컴포넌트 언마운트 시 복원
    };
  }, [isShow]);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose(); // 모달 외부를 클릭했을 때 모달 닫기
    }
  };

  if (!isShow) return null; // 모달이 닫혀있을 경우 렌더링 방지

  return (
    <div
      id="common-popup-modal"
      tabIndex={-1}
      className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-ELSE-A1 bg-opacity-50"
      onClick={handleOutsideClick} // 외부 클릭 시 모달 닫기
    >
      <div
        className={twMerge(
          "relative px-4 py-6 w-[343px] max-h-full bg-white rounded-lg",
          textAlign
        )}
      >
        {icon && (
          <div className="flex justify-center mb-4">
            <Image src={icon} alt="Icon" width={56} height={56} />
          </div>
        )}
        <h1 className="mb-5 text-xl font-bold text-SYSTEM-black">{title}</h1>
        <h3 className="mb-5 text-lg text-ELSE-55">{content}</h3>
        <div className="flex w-full h-14">
          {optionalBtnText && (
            <CustomButton
              variant="outline"
              className="mr-3"
              onClick={handleOptional}
            >
              {optionalBtnText}
            </CustomButton>
          )}
          <CustomButton variant="filled" onClick={handleAction}>
            {btnText}
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Modal;
