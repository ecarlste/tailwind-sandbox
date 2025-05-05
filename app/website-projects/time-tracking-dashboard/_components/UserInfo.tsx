import Image from "next/image";

function UserInfo() {
  return (
    <div className="bg-purple-600 rounded-[0.9375rem] p-8">
      <div className="flex gap-6">
        <Image
          src="/images/time-tracking-dashboard/image-jeremy.png"
          alt="Profile Avatar Image for Jeremy Robson"
          width={64}
          height={64}
        />
        <div className="flex flex-col gap-2 justify-center">
          <span className="text-preset-6 text-navy-200">Report for</span>
          <h1 className="text-preset-4">Jeremy Robson</h1>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
