import FourCardFeatureSection from "./_components/four-card-feature-section";
import TitleSection from "./_components/title-section";

const titleSectionData = {
  title1: "Reliable, efficient delivery",
  title2: "Powered by Technology",
  description:
    "Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful",
};

export default function FourCardFeatureSitePage() {
  return (
    <div className="flex flex-col gap-[60px] w-full max-w-[350px] items-center md:max-w-[768px] xl:max-w-[1280px]">
      <TitleSection {...titleSectionData} />
      <FourCardFeatureSection />
    </div>
  );
}
