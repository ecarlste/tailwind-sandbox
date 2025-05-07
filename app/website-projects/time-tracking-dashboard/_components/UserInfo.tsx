import Image from "next/image";

function UserInfo() {
  return (
    <div className="bg-purple-600 rounded-[0.9375rem] p-8 h-auto w-full xl:h-[22.125rem] xl:w-[15.9375rem] flex">
      <div className="flex flex-row xl:flex-col gap-6">
        <Image
          src="/images/time-tracking-dashboard/image-jeremy.png"
          alt="Profile Avatar Image for Jeremy Robson"
          width={64}
          height={64}
        />
        <div className="flex flex-col gap-2 justify-center">
          <span className="text-preset-6 text-navy-200">Report for</span>
          <h1 className="text-user-name">Jeremy Robson</h1>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
