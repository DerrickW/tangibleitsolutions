import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs() {
  const benefits = [
    "24/7 Technical Support",
    "Experienced IT Professionals",
    "Custom Solutions",
    "Competitive Pricing",
    "Latest Technology",
    "Reliable Service"
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Tangible IT Solutions?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We bring years of expertise and a commitment to excellence in every project we undertake.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}