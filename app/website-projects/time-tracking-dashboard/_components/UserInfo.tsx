import Image from "next/image";

function UserInfo() {
  return (
    <div className="bg-purple-600 rounded-[0.9375rem] p-8 h-auto w-full md:w-[45rem] xl:h-[22.125rem] xl:w-[15.9375rem] flex">
      <div className="flex flex-row xl:flex-col gap-6">
        <div className="w-[4.375rem] h-[4.375rem] xl:w-[5.25rem] xl:h-[5.25rem] border-[0.1875rem] border-white rounded-full drop-shadow-avatar">
          <Image
            src="/images/time-tracking-dashboard/image-jeremy.png"
            alt="Profile Avatar Image for Jeremy Robson"
            width={78}
            height={78}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <span className="text-preset-6 text-navy-200">Report for</span>
          <h1 className="text-user-name">Jeremy Robson</h1>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
