import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
	{
		title: "Web Development",
		icon: (
			<svg
				className="w-12 h-12 text-primary"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
		description:
			"Custom websites and web applications tailored to your business needs.",
		bgClass: "bg-blue-50 dark:bg-blue-900/10",
		iconBgClass: "bg-blue-100 dark:bg-blue-900/20",
		borderClass: "border-blue-200 dark:border-blue-800/30",
	},
	{
		title: "Mobile Apps",
		icon: (
			<svg
				className="w-12 h-12 text-primary"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					x="7"
					y="2"
					width="10"
					height="20"
					rx="2"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<line
					x1="7"
					y1="6"
					x2="17"
					y2="6"
					stroke="currentColor"
					strokeWidth="2"
				/>
				<line
					x1="7"
					y1="18"
					x2="17"
					y2="18"
					stroke="currentColor"
					strokeWidth="2"
				/>
				<line
					x1="12"
					y1="21"
					x2="12"
					y2="21"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
				/>
			</svg>
		),
		description:
			"Native and cross-platform mobile applications with intuitive interfaces.",
		bgClass: "bg-purple-50 dark:bg-purple-900/10",
		iconBgClass: "bg-purple-100 dark:bg-purple-900/20",
		borderClass: "border-purple-200 dark:border-purple-800/30",
	},
	{
		title: "IT Support & Monitoring",
		icon: (
			<svg
				className="w-12 h-12 text-primary"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M12 4V5M12 19V20M4 12H5M19 12H20M6.3 6.3L7 7M17 17L17.7 17.7M6.3 17.7L7 17M17 7L17.7 6.3"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<circle
					cx="12"
					cy="12"
					r="4"
					stroke="currentColor"
					strokeWidth="2"
				/>
				<path
					d="M15 9L16 8"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
				/>
			</svg>
		),
		description:
			"Comprehensive IT support and proactive monitoring to keep your systems running smoothly and securely.",
		bgClass: "bg-pink-50 dark:bg-pink-900/10",
		iconBgClass: "bg-pink-100 dark:bg-pink-900/20",
		borderClass: "border-pink-200 dark:border-pink-800/30",
	},
	{
		title: "EPOS Solutions",
		icon: (
			<svg
				className="w-12 h-12 text-primary"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					x="2"
					y="5"
					width="20"
					height="14"
					rx="2"
					stroke="currentColor"
					strokeWidth="2"
				/>
				<path
					d="M6 9H6.01"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
				/>
				<path
					d="M6 13H6.01"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
				/>
				<path
					d="M6 17H6.01"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
				/>
				<path
					d="M10 9H18"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
				/>
				<path
					d="M10 13H18"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
				/>
				<path
					d="M10 17H14"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
				/>
			</svg>
		),
		description:
			"Advanced electronic point of sale systems for seamless retail and hospitality operations.",
		bgClass: "bg-green-50 dark:bg-green-900/10",
		iconBgClass: "bg-green-100 dark:bg-green-900/20",
		borderClass: "border-green-200 dark:border-green-800/30",
	},
	{
		title: "CRM Systems",
		icon: (
			<svg
				className="w-12 h-12 text-primary"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M3 21C3 16.0294 7.02944 12 12 12C16.9706 12 21 16.0294 21 21"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
		description:
			"Custom customer relationship management solutions to optimize your client interactions and sales processes.",
		bgClass: "bg-amber-50 dark:bg-amber-900/10",
		iconBgClass: "bg-amber-100 dark:bg-amber-900/20",
		borderClass: "border-amber-200 dark:border-amber-800/30",
	},
	{
		title: "Cloud Services",
		icon: (
			<svg
				className="w-12 h-12 text-primary"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M6.5 19C3.46243 19 1 16.5376 1 13.5C1 10.4624 3.46243 8 6.5 8C6.93058 8 7.34958 8.04952 7.75 8.14287C8.73071 5.19839 11.5469 3 14.9091 3C18.9502 3 22.2201 6.28026 22.2201 10.3333C22.2201 14.3863 18.9502 17.6667 14.9091 17.6667C14.2425 17.6667 13.5976 17.5724 12.9877 17.3968C11.9999 18.3635 10.6703 19 9.18182 19H6.5Z"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
		description:
			"Scalable and secure cloud infrastructure for your business applications.",
		bgClass: "bg-cyan-50 dark:bg-cyan-900/10",
		iconBgClass: "bg-cyan-100 dark:bg-cyan-900/20",
		borderClass: "border-cyan-200 dark:border-cyan-800/30",
	},
];

export const ServicesGrid = () => {
	return (
		<section className="py-0 bg-background">
			<div className="container-custom">
				<motion.div
					className="text-center max-w-3xl mx-auto mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.7 }}
				>
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full text-primary border border-primary/20 dark:border-primary/30 mb-6">
						<span className="text-sm font-medium text-primary dark:text-white">
							Our Expertise
						</span>
					</div>

					<h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-normal pb-1">
						Comprehensive Digital Services
					</h2>

					<p className="text-lg text-muted-foreground dark:text-muted-foreground/90 leading-relaxed">
						We offer a comprehensive range of digital services to help your
						business thrive in the digital landscape.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							whileHover={{ y: -8, transition: { duration: 0.3 } }}
							className="group"
						>
							<Card
								className={`h-full overflow-hidden border-0 shadow-lg ${service.bgClass} dark:bg-background/20 backdrop-blur-sm`}
							>
								<div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/5 to-accent-teal/5 dark:from-primary/10 dark:to-accent-teal/10 transition-opacity duration-700"></div>

								<div className="p-8 relative z-10">
									{/* Service icon */}
									<div className="mb-6 relative">
										<div
											className={`w-20 h-20 rounded-2xl ${service.iconBgClass} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border ${service.borderClass}`}
										>
											{service.icon}
										</div>
										<div className="absolute top-0 left-0 w-20 h-20 rounded-2xl bg-primary/10 dark:bg-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
									</div>

									{/* Content */}
									<h3 className="text-2xl font-bold mb-4 text-foreground dark:text-foreground group-hover:text-primary dark:group-hover:text-white transition-colors duration-300">
										{service.title}
									</h3>

									<p className="text-muted-foreground dark:text-muted-foreground/90 mb-6 leading-relaxed">
										{service.description}
									</p>

									
								</div>

								{/* Decorative corner element */}
								<div className="absolute bottom-0 right-0 w-32 h-32 overflow-hidden opacity-30">
									<div
										className={`w-8 h-8 rounded-full ${service.iconBgClass} absolute bottom-4 right-4 group-hover:scale-[3] transition-all duration-500 origin-bottom-right opacity-40`}
									></div>
								</div>
							</Card>
						</motion.div>
					))}
				</div>

				<motion.div
					className="text-center mt-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7, delay: 0.2 }}
				>
					<Button
						size="lg"
						className="px-8 py-6 rounded-xl text-lg font-medium bg-primary hover:bg-primary/90 shadow-lg group"
						asChild
					>
						<Link to="/services">
							Explore All Services
							<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
						</Link>
					</Button>
				</motion.div>
			</div>
		</section>
	);
};
