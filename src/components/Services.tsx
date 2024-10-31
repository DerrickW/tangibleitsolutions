import React from 'react';
import { Network, Monitor, Code2, ShoppingBag, Shield, Cpu } from 'lucide-react';
import ServiceCard from './ServiceCard';

export default function Services() {
  const services = [
    {
      Icon: Network,
      title: "Network Infrastructure",
      description: "Design, implementation, and maintenance of robust network solutions for your business."
    },
    {
      Icon: Shield,
      title: "Technical Support",
      description: "24/7 technical support to ensure your systems run smoothly and efficiently."
    },
    {
      Icon: Code2,
      title: "Web Development",
      description: "Custom web solutions built with modern technologies to enhance your online presence."
    },
    {
      Icon: Cpu,
      title: "Software Development",
      description: "Tailored software solutions to automate and optimize your business processes."
    },
    {
      Icon: ShoppingBag,
      title: "POS Systems",
      description: "Implementation and support of point-of-sale systems for retail businesses."
    },
    {
      Icon: Monitor,
      title: "System Maintenance",
      description: "Proactive system monitoring and maintenance to prevent downtime."
    }
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive suite of IT services to help your business thrive in the digital age.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              Icon={service.Icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}