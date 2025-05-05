import IconCheck from "./icon-check";

const benefits = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!",
];

function CallToActionSection() {
  return (
    <section className="flex flex-col gap-6 lg:gap-8">
      <h1 className="text-preset-1">Stay Updated!</h1>
      <p className="text-preset-2">
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <ul className="flex flex-col gap-2 text-preset-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex gap-4">
            <IconCheck />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CallToActionSection;
