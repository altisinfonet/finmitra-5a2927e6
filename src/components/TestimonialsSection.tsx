import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const testimonials = [
  {
    name: "Ramesh Iyer",
    city: "Chennai",
    type: "LIC Agent",
    avatar: "RI",
    rating: 5,
    review: "FinMitra has completely transformed how I manage my clients. Earlier I used to miss renewal dates — now I get alerts 30 days in advance. My renewal rate has gone up by 40% in just 6 months!",
  },
  {
    name: "Priya Nair",
    city: "Kochi",
    type: "Mutual Fund Distributor",
    avatar: "PN",
    rating: 5,
    review: "The KYC management feature is a lifesaver. I handle over 300 clients and keeping track of documents was a nightmare. FinMitra keeps everything organised and sends me reminders automatically.",
  },
  {
    name: "Suresh Patel",
    city: "Ahmedabad",
    type: "Insurance Broker",
    avatar: "SP",
    rating: 5,
    review: "Birthday greetings sent automatically to all my clients — they love it! It makes them feel special and they always come back to me for new policies. Simple but very powerful feature.",
  },
  {
    name: "Anita Sharma",
    city: "Jaipur",
    type: "FD & Loan Agent",
    avatar: "AS",
    rating: 5,
    review: "Managing FD renewals across multiple banks was a mess before FinMitra. Now I get a dashboard view of everything due this month. My clients trust me more because I never miss their maturity dates.",
  },
  {
    name: "Mohammed Farhan",
    city: "Hyderabad",
    type: "Multi-product Distributor",
    avatar: "MF",
    rating: 5,
    review: "I distribute life insurance, health insurance, and mutual funds. FinMitra handles all product categories in one app. The meeting scheduler alone has saved me 2 hours every day.",
  },
  {
    name: "Kavitha Reddy",
    city: "Bangalore",
    type: "Health Insurance Agent",
    avatar: "KR",
    rating: 5,
    review: "The subscription plan is very affordable for independent agents like me. The app is smooth, works offline too, and the support team is very responsive. Highly recommend to every agent!",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback((idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  }, [current]);

  const next = useCallback(() => go((current + 1) % testimonials.length), [current, go]);
  const prev = useCallback(() => go((current - 1 + testimonials.length) % testimonials.length), [current, go]);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-4">
            <Star size={14} className="text-gold fill-gold" />
            <span className="text-primary text-xs font-bold tracking-widest uppercase">Agent Stories</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
            Loved by <span className="text-transparent bg-clip-text" style={{ backgroundImage: "var(--gradient-gold)" }}>10,000+ Agents</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Real agents. Real results. See how FinMitra is transforming financial businesses across India.
          </p>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          {/* Main card */}
          <div className="relative h-72 md:h-56">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute inset-0"
              >
                <div className="bg-card border border-border rounded-3xl p-8 shadow-lg h-full flex flex-col justify-between relative overflow-hidden">
                  {/* Quote icon */}
                  <Quote size={48} className="absolute top-4 right-6 text-primary/10" />

                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                        <Star key={i} size={16} className="text-gold fill-gold" />
                      ))}
                    </div>
                    <p className="text-foreground/80 text-base leading-relaxed line-clamp-3 md:line-clamp-2">
                      "{testimonials[current].review}"
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4 mt-4">
                    <div className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0" style={{ background: "var(--gradient-gold)" }}>
                      {testimonials[current].avatar}
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-sm">{testimonials[current].name}</div>
                      <div className="text-muted-foreground text-xs">{testimonials[current].type} · {testimonials[current].city}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-2 bg-primary" : "w-2 h-2 bg-border hover:bg-muted-foreground"}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary hover:bg-primary/5 transition-all duration-200"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary hover:bg-primary/5 transition-all duration-200"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* All reviewer chips */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => go(i)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold transition-all duration-200 ${
                  i === current
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:border-primary/40"
                }`}
              >
                <span className="w-5 h-5 rounded-full text-white text-[9px] font-bold flex items-center justify-center flex-shrink-0" style={{ background: "var(--gradient-gold)" }}>
                  {t.avatar}
                </span>
                {t.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
