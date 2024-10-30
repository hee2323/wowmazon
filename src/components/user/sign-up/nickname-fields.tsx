"use client";

import { forwardRef } from "react";
import { useParams } from "next/navigation";
import { twMerge } from "tailwind-merge";
import CustomButton from "@/components/common/custom-button";
import CustomInput from "@/components/common/custom-input";
import { LocaleTypes } from "@/utils/localization/settings";
import { useTranslation } from "@/utils/localization/client";

const NicknameFields = forwardRef<HTMLInputElement, NicknameFieldProps>(
  (props, ref) => {
    const { message, nicknameAvailable, onClickCheck, value, ...rest } = props;
    const disabled = value === "" || nicknameAvailable || message.error !== "";
    const isError = message.error !== "";

    const { locale } = useParams();
    const { t } = useTranslation(locale as LocaleTypes, "user");

    return (
      <div className="flex flex-col gap-1.5">
        <p className="font-bold">
          {t("sign-up.nickname")}
          <span className="text-SYSTEM-main">*</span>
        </p>
        <div className="grid grid-cols-[auto_auto] gap-2">
          <CustomInput
            className={twMerge(
              "bg-SYSTEM-white border-ELSE-D9 border h-14",
              isError && "border-SYSTEM-main"
            )}
            placeholder="닉네임을 입력해주세요"
            hasDelBtn
            value={value}
            variant="outline"
            size="large"
            ref={ref}
            {...rest}
          />
          <CustomButton
            className="px-[15px]"
            variant={disabled ? "disabled" : "outlineColor"}
            onClick={() => onClickCheck(value)}
            disabled={disabled}
          >
            {t("sign-up.double-check")}
          </CustomButton>
        </div>
        <div
          className={twMerge(
            "text-sm text-SYSTEM-main leading-[18px]",
            !isError && "text-ELSE-48"
          )}
        >
          {isError ? message.error : message.info}
        </div>
      </div>
    );
  }
);

NicknameFields.displayName = "Nickname Fields";

export default NicknameFields;
