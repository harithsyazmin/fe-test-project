import CardComponent from "./CardComponent";
import gfx6 from "../assets/gfx6.svg";
import gfx7 from "../assets/gfx7.svg";
import gfx8 from "../assets/gfx8.svg";

const cards = [
  {
    title: "User Experience",
    subtitle: "Intuitive digital experiences to elevate your business",
    description:
      "Through good UX design, we can help you capture and retain the trust, business and loyalty of key customer groups.",
    imgSrc: gfx6,
  },
  {
    title: "User Interface",
    subtitle: "Deliver memorable brand experiences using human-centred design",
    description:
      "Connect your systems, products and partners with secure, well-managed APIs. We help you design, build and govern integrations so data flows reliably across your entire ecosystem.",
    imgSrc: gfx7,
  },
  {
    title: "Cloud-native Development",
    subtitle: "Enhance your business in a cloud-native environment",
    description:
      "We meld innovation and technology with content and design best practices to translate your business goals into experiences that are meaningful to customers.",
    imgSrc: gfx8,
  },
] as const;

function DesignSection() {
  return (
    <main id="design" className="page bg-white">
      <section className="content">
        <div className="section-heading">
          <span className="section-title">
            <strong>UI & UX Design</strong>
          </span>
          <p className="lede">
            We bring value to your business by producing seamless,
            multi-platform digital experiences that result in strong, meaningful
            user engagements. Read more about our services below.
          </p>
        </div>

        <div className="card-grid">
          {cards.map((card) => (
            <CardComponent
              key={card.title}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              imgSrc={card.imgSrc}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default DesignSection;
