import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner, Portland",
    content: "Made my insurance so much clearer! I discovered I was missing earthquake coverage and saved $200/year by adjusting my deductible."
  },
  {
    name: "Michael Chen",
    role: "First-time buyer, Austin",
    content: "As a new homeowner, this tool gave me peace of mind. The recommendations were spot-on and easy to understand."
  },
  {
    name: "Lisa Rodriguez",
    role: "Insurance agent, Miami",
    content: "I recommend this to all my clients. It helps them understand their policies before we meet, making our conversations much more productive."
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">What homeowners are saying</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-gray-700 italic mb-4">
              "{testimonial.content}"
            </p>
            <p className="font-semibold text-gray-800">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;