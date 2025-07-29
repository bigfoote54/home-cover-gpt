import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner, Portland",
    content: "Made my insurance so much clearer! I discovered I was missing earthquake coverage and saved $200/year by adjusting my deductible.",
    rating: 5,
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    role: "First-time buyer, Austin",
    content: "As a new homeowner, this tool gave me peace of mind. The recommendations were spot-on and easy to understand.",
    rating: 5,
    avatar: "MC"
  },
  {
    name: "Lisa Rodriguez",
    role: "Insurance agent, Miami",
    content: "I recommend this to all my clients. It helps them understand their policies before we meet, making our conversations much more productive.",
    rating: 5,
    avatar: "LR"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            What homeowners are saying
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of homeowners who've gained clarity and confidence in their insurance coverage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-card hover:shadow-soft transition-all duration-300 border-0 bg-background/60 backdrop-blur">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-muted-foreground/30" />
                  </div>
                  
                  <blockquote className="text-foreground leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="flex items-center space-x-3 pt-4 border-t border-border/50">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-background/80 backdrop-blur rounded-full px-6 py-3 shadow-card">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-warning text-warning" />
              ))}
            </div>
            <span className="text-lg font-semibold text-foreground">4.9/5</span>
            <span className="text-muted-foreground">from 2,847+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;