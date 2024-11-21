import React from "react";

export default function IconWithnumber({
  count,
  icon,
}: {
  count: number;
  icon: React.ReactNode;
}) {
  return (
    <div className="relative">
      {icon}
      <span className="absolute top-0 right-0 bg-[#467699] text-white flex items-center justify-center rounded-full text-center text-[18px] w-[16px] h-[16px] p-1">
        <span className="text-[8px]">{count}</span>
      </span>
    </div>
  );
}
