import { ArrowRight, Shield, Clock, CheckCircle, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-20 pb-16 text-center max-w-3xl mx-auto px-4">
      <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
        Check your insurance coverage <br className="hidden sm:inline" /> in seconds!
      </h1>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
        Upload your homeowners insurance PDF and get a plain-English summary, risk analysis, and actionable recommendations—powered by AI.
      </p>
      <div className="mt-8 flex flex-wrap justify-center items-center gap-8 text-gray-600">
        <div className="flex items-center space-x-2">
          <Shield className="h-6 w-6 text-gray-500" />
          <span>Bank-level security</span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="h-6 w-6 text-gray-500" />
          <span>Results in 30 seconds</span>
        </div>
        <div className="flex items-center space-x-2">
          <CheckCircle className="h-6 w-6 text-green-500" />
          <span>Data deleted after analysis</span>
        </div>
      </div>
      <button className="mt-10 inline-flex items-center bg-gradient-to-r from-blue-600 to-teal-400 hover:from-blue-700 hover:to-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition">
        Start Your Analysis <ArrowRight className="h-5 w-5 ml-2" />
      </button>
      <div className="mt-6 flex items-center justify-center space-x-2">
        <Star className="h-5 w-5 text-yellow-400" />
        <Star className="h-5 w-5 text-yellow-400" />
        <Star className="h-5 w-5 text-yellow-400" />
        <Star className="h-5 w-5 text-yellow-400" />
        <Star className="h-5 w-5 text-yellow-400" />
        <span className="ml-2 text-gray-700">4.9/5 (2,847 reviews)</span>
      </div>
    </section>
  );
};

export default HeroSection;