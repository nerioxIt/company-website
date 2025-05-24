import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
	{
		quote: "Working with CQ Group transformed our online presence. Their team delivered a website that exceeded our expectations and has significantly improved our conversion rates.",
		author: "Sarah Johnson",
		role: "CEO, TechStart Inc.",
	},
	{
		quote: "The mobile app developed by CQ Group has revolutionized how we interact with our customers. Their attention to detail and innovative approach made all the difference.",
		author: "Michael Chen",
		role: "Product Manager, NexGen Solutions",
	},
	{
		quote: "We've worked with several digital agencies in the past, but CQ Group stands out for their strategic thinking, technical expertise, and commitment to quality.",
		author: "Emma Wilson",
		role: "Marketing Director, Global Retail",
	},
	{
		quote: "CQ Group's cloud solutions have completely transformed our business operations. Their expertise in creating seamless digital experiences is unmatched.",
		author: "James Rodriguez",
		role: "CTO, CloudFlex Systems",
	},
];

export const TestimonialSnippet = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
		);
	};

	const handlePrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
		);
	};

	// Setup auto sliding
	useEffect(() => {
		// Start the interval immediately
		if (!isPaused) {
			intervalRef.current = setInterval(() => {
				handleNext();
			}, 6000); // Slower transition - change from 4000ms to 6000ms
		}

		// Cleanup function
		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, [isPaused]);

	// Pause on hover
	const handleMouseEnter = () => setIsPaused(true);
	const handleMouseLeave = () => setIsPaused(false);

	return (
		<section className="section bg-gradient-to-b from-muted to-background py-0">
			<div className="container-custom">
				<div className="text-center mb-10">
					<h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-4">
						What Our Clients Say
					</h2>
					<p className="text-muted-foreground dark:text-muted-foreground/90 text-lg max-w-2xl mx-auto">
						Don't just take our word for it – hear what our clients have to say
						about working with us.
					</p>
				</div>

				<div
					className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					{/* Testimonial Slider */}
					<div className="overflow-hidden">
						<div
							className="flex transition-transform duration-700 ease-out"
							style={{ transform: `translateX(-${currentIndex * 100}%)` }}
						>
							{testimonials.map((testimonial, index) => (
								<div key={index} className="w-full flex-shrink-0 px-4">
									<Card className="p-8 relative bg-card dark:bg-card shadow-lg h-full">
										<div className="absolute top-6 left-8 text-5xl text-primary opacity-20">
											"
										</div>
										<div className="relative z-10">
											<p className="italic text-lg text-muted-foreground dark:text-muted-foreground/90 mb-8">
												"{testimonial.quote}"
											</p>
											<div className="flex items-center">
												<img
													src={`https://i.pravatar.cc/150?img=${index + 10}`}
													alt={testimonial.author}
													className="w-12 h-12 rounded-full mr-4 border-2 border-primary/20"
												/>
												<div>
													<p className="font-bold">{testimonial.author}</p>
													<p className="text-sm text-muted-foreground">
														{testimonial.role}
													</p>
												</div>
											</div>
										</div>
									</Card>
								</div>
							))}
						</div>
					</div>

					{/* Navigation controls */}
					<div className="flex justify-center mt-8 space-x-2">
						<Button
							variant="outline"
							size="icon"
							className="rounded-full"
							onClick={handlePrev}
						>
							<ArrowLeft className="h-4 w-4" />
						</Button>

						{testimonials.map((_, index) => (
							<Button
								key={index}
								variant="ghost"
								size="sm"
								className={`w-2 h-2 p-0 rounded-full ${
									currentIndex === index
										? "bg-primary"
										: "bg-primary/30"
								}`}
								onClick={() => setCurrentIndex(index)}
							/>
						))}

						<Button
							variant="outline"
							size="icon"
							className="rounded-full"
							onClick={handleNext}
						>
							<ArrowRight className="h-4 w-4" />
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};
