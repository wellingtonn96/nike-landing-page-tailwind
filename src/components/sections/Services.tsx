import { services } from "@/constants";
import ServiceCard from "./ui/ServicesCard";

const Services = () => {
  return (
    <section
      id="services"
      className="max-container flex justify-center flex-wrap gap-9"
    >
      {services.map((service) => (
        <ServiceCard
          iconURL={service.imgURL}
          subtext={service.subtext}
          text={service.label}
        />
      ))}
    </section>
  );
};
export default Services;
