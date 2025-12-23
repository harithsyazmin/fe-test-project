import CardComponent from "./CardComponent";
import gfx1 from "../assets/gfx1.svg";
import gfx2 from "../assets/gfx2.svg";
import gfx3 from "../assets/gfx3.svg";
import gfx4 from "../assets/gfx4.svg";
import gfx5 from "../assets/gfx5.svg";

const cards = [
  {
    title: "Customised Development",
    subtitle: "Tailor-made solutions for your business",
    description:
      "Can’t find a ready-made solution that fits? We can custom build mobile & web applications to suit your business needs.",
    imgSrc: gfx1,
  },
  {
    title: "Integration & API Management",
    subtitle: "Achieve digital transformation via an API management ecosystem",
    description:
      "Connect your systems, products and partners with secure, well-managed APIs. We help you design, build and govern integrations so data flows reliably across your entire ecosystem.",
    imgSrc: gfx2,
  },
  {
    title: "Cloud-native Development",
    subtitle: "Enhance your business in a cloud-native environment",
    description:
      "Improve business agility, velocity and flexibility through the cloud – we are here to guide you through the entire process.",
    imgSrc: gfx3,
  },
  {
    title: "Mobile Development",
    subtitle: "Become an anywhere business",
    description:
      "From mobile-first websites to mobile apps, we’re ready to help you develop a mobile solution that works.",
    imgSrc: gfx4,
  },
  {
    title: "Application Modernisation",
    subtitle: "Breathing new life into old technology",
    description:
      "Give legacy or aging systems a new lease on life. We can help you modernise them to better serve your business needs.",
    imgSrc: gfx5,
  },
] as const;

function DevelopmentSection() {
  return (
    <main className="page bg-light">
      <section className="content">
        <div className="section-heading">
          <span className="section-title">
            <strong>Development & Integration</strong>
          </span>
          <p className="lede">
            A flexible set of services to take you from idea to impact. Pick
            what you need or let us tailor a team for your next launch.
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

export default DevelopmentSection;
