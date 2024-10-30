import React from 'react';
import { Palette, Code, Settings, Smartphone, Gauge, Users } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Custom Theme Development',
    description: 'Unique, responsive themes tailored to your brand identity and business needs.',
  },
  {
    icon: Code,
    title: 'Platform Integration',
    description: 'Seamless integration of third-party services and APIs with your Zid store.',
  },
  {
    icon: Settings,
    title: 'Store Optimization',
    description: 'Performance tuning and optimization for faster loading times and better UX.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Responsive designs that work flawlessly across all devices and screen sizes.',
  },
  {
    icon: Gauge,
    title: 'Speed Optimization',
    description: 'Performance optimization to ensure your store loads quickly and efficiently.',
  },
  {
    icon: Users,
    title: 'Consultation',
    description: 'Expert advice on e-commerce strategy and platform optimization.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-muted-foreground">
            Comprehensive solutions to help you succeed on the Zid platform. From custom development to optimization, we've got you covered.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-lg border bg-card p-6 transition-all hover:border-primary hover:shadow-sm"
            >
              <service.icon className="h-10 w-10 transition-colors group-hover:text-primary" />
              <h3 className="mt-4 font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;