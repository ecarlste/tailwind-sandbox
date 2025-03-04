import BulletedItem from "./bulleted-item";

export default function RecipePrepSection() {
  return (
    <section className="flex flex-col space-y-[16px] p-[24px] bg-rose-50 rounded-xl">
      <h2 className="font-outfit font-semibold text-rose-800">
        Preparation time
      </h2>
      <div className="space-y-[8px]">
        <BulletedItem>
          <span className="font-bold">Total:</span> Approximately 10 minutes
        </BulletedItem>
        <BulletedItem>
          <span className="font-bold">Preparation:</span> 5 minutes
        </BulletedItem>
        <BulletedItem>
          <span className="font-bold">Cooking:</span> 5 minutes
        </BulletedItem>
      </div>
    </section>
  );
}
