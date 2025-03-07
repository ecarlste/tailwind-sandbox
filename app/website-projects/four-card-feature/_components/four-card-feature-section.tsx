import FeatureCard from "./feature-card";

import iconSupervisor from "@/public/images/four-card-feature/icon-supervisor.svg";
import iconTeamBuilder from "@/public/images/four-card-feature/icon-team-builder.svg";
import iconKarma from "@/public/images/four-card-feature/icon-karma.svg";
import iconCalculator from "@/public/images/four-card-feature/icon-calculator.svg";

const featureCardDataList = [
  {
    title: "Supervisor",
    description: "Monitors activity to identify project roadblocks",
    icon: iconSupervisor,
  },
  {
    title: "Team Builder",
    description:
      "Scans our talent network to create the optimal team for your project",
    icon: iconTeamBuilder,
  },
  {
    title: "Karma",
    description: "Regularly evaluates our talent to ensure quality",
    icon: iconKarma,
  },
  {
    title: "Calculator",
    description:
      "Uses data from past projects to provide better delivery estimates",
    icon: iconCalculator,
  },
];

export default function FourCardFeatureSection() {
  return (
    <section className="flex flex-col justify-center items-center gap-8 xl:flex-row">
      <h2 className="sr-only">Feature Highlights</h2>

      <FeatureCard data={featureCardDataList[0]} accentColor="bg-cyan" />

      <div className="flex flex-col gap-8 md:flex-row xl:flex-col">
        <FeatureCard data={featureCardDataList[1]} accentColor="bg-red" />
        <FeatureCard data={featureCardDataList[2]} accentColor="bg-orange" />
      </div>
      <FeatureCard data={featureCardDataList[3]} accentColor="bg-blue" />
    </section>
  );
}
