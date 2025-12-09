import { Button } from "../../components/common/Button";
import Card from "../../components/common/Card";

const services = [
  {
    title: "AI Automation",
    description:
      "Streamline your business processes with cutting-edge AI solutions.",
  },
  {
    title: "Cloud Services",
    description:
      "Secure and scalable cloud infrastructure for your enterprise.",
  },
  {
    title: "Data Analytics",
    description:
      "Turn data into actionable insights with our analytics services.",
  },
  {
    title: "Digital Solutions",
    description: "Custom web and mobile application development.",
  },
  {
    title: "Enterprise Solutions",
    description: "Robust software solutions tailored for large organizations.",
  },
  {
    title: "Financial Services",
    description: "Expert financial consulting and technology integration.",
  },
];

const ServicesPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card
            key={index}
            className="h-full flex flex-col hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-bold mb-2">{service.title}</h2>
            <p className="text-gray-600 mb-4 flex-grow">
              {service.description}
            </p>
            <Button variant="outlined" color="primary" className="mt-auto">
              Learn More
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
