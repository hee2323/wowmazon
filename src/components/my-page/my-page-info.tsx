import Image from "next/image";

import Rename from "@/assets/icons/mypage_rename.svg";

const MyPageInfo = ({ data }: MyPageInfoProps) => {
  return (
    <div className="py-5 px-4">
      <div className="flex flex-row gap-[6px]">
        <p className="text-xl font-bold">안녕하세요, {data.nickname}님</p>
        <Image
          className="cursor-pointer hover:scale-110"
          src={Rename}
          alt="mypage-rename"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};
export default MyPageInfo;
