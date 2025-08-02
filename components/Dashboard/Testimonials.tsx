import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    location: "Portland, OR",
    content: "Made my insurance so much clearer! I discovered I was missing earthquake coverage and saved $200/year by adjusting my deductible. The AI analysis was spot-on and easy to understand.",
    rating: 5,
    avatar: "/api/placeholder/40/40",
    initials: "SJ"
  },
  {
    name: "Michael Chen",
    role: "First-time buyer",
    location: "Austin, TX",
    content: "As a new homeowner, this tool gave me peace of mind. The recommendations were incredibly detailed and helped me understand exactly what I was paying for. Highly recommend!",
    rating: 5,
    avatar: "/api/placeholder/40/40",
    initials: "MC"
  },
  {
    name: "Lisa Rodriguez",
    role: "Insurance agent",
    location: "Miami, FL",
    content: "I recommend this to all my clients. It helps them understand their policies before we meet, making our conversations much more productive. The analysis quality is impressive.",
    rating: 5,
    avatar: "/api/placeholder/40/40",
    initials: "LR"
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`h-4 w-4 ${
            i < rating 
              ? 'text-yellow-400 fill-current' 
              : 'text-muted-foreground/30'
          }`} 
        />
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What homeowners are saying
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied homeowners who&apos;ve gained clarity and saved money 
            with our AI-powered insurance analysis.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="card-elevated card-hover bg-card border-0 shadow-soft animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/20" />
                </div>

                {/* Star Rating */}
                <div className="mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                {/* User Info */}
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12 border-2 border-border">
                    <AvatarImage 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="object-cover"
                      loading="lazy"
                    />
                    <AvatarFallback className="bg-gradient-primary text-white font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground bg-card/60 backdrop-blur border border-border/50 rounded-full px-6 py-3">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="font-medium text-foreground">4.9/5 rating</span>
            <span>•</span>
            <span>2,847+ reviews</span>
            <span>•</span>
            <span>50,000+ satisfied customers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;