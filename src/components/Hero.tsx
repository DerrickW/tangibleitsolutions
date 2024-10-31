import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Transforming Businesses Through
            <span className="text-blue-600"> Technology</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to your business needs. From infrastructure to software, we've got you covered.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition flex items-center">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#services" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md hover:bg-gray-50 transition">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}