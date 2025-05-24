import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const features = [
	{
		title: "Expert Team",
		description:
			"Our team of experienced professionals brings diverse expertise to every project.",
		icon: (
			<svg
				className="w-12 h-12 text-primary"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7ZM14 3C14 4.10457 13.1046 5 12 5C10.8954 5 10 4.10457 10 3C10 1.89543 10.8954 1 12 1C13.1046 1 14 1.89543 14 3Z"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
		color: "from-blue-500 to-cyan-500",
	},
	{
		title: "Innovative Approach",
		description:
			"We leverage the latest technologies and approaches to deliver cutting-edge solutions.",
		icon: (
			<svg
				className="w-12 h-12 text-primary"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M22 12L3 12M22 12L16 6M22 12L16 18"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
		color: "from-purple-500 to-pink-500",
	},
	{
		title: "Client Collaboration",
		description:
			"We work closely with our clients to ensure their vision is brought to life effectively.",
		icon: (
			<svg
				className="w-12 h-12 text-primary"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M13 10C13 12.2091 11.2091 14 9 14C6.79086 14 5 12.2091 5 10C5 7.79086 6.79086 6 9 6C11.2091 6 13 7.79086 13 10Z"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M9 17C5.13401 17 2 20.134 2 24H16C16 20.134 12.866 17 9 17Z"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M19 8H19.01M19 14C16.7909 14 15 12.2091 15 10C15 7.79086 16.7909 6 19 6C21.2091 6 23 7.79086 23 10C23 11.0194 22.6345 11.9594 22.0265 12.7011C21.9055 12.8584 21.8222 13.0414 21.7839 13.2351C21.6946 13.6777 22.0338 14.069 22.4765 13.9985L22.5 14"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
		color: "from-orange-500 to-red-500",
	},
	{
		title: "Quality Assurance",
		description:
			"We maintain rigorous quality standards throughout the development process.",
		icon: (
			<svg
				className="w-12 h-12 text-primary"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M9 12L11 14L15 10M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
		color: "from-green-500 to-emerald-500",
	},
];

export const WhyChoose = () => {
	return (
		<section className="py-0 relative overflow-hidden bg-gradient-to-b from-muted/50 via-muted to-muted/80 dark:from-muted/20 dark:via-muted/10 dark:to-muted/5">
			{/* Background decoration */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl opacity-70"></div>
				<div className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent-teal/5 dark:bg-accent-teal/10 rounded-full blur-3xl opacity-70"></div>
			</div>

			<div className="container-custom relative z-10">
				<motion.div
					className="text-center max-w-3xl mx-auto mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.7 }}
				>
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full text-primary border border-primary/20 dark:border-primary/30 mb-6">
						<span className="text-sm font-medium text-primary dark:text-white">Why CQ Group</span>
					</div>

					<h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
						What Sets Us Apart
					</h2>

					<p className="text-lg text-muted-foreground dark:text-muted-foreground/90 leading-relaxed">
						We're committed to delivering exceptional digital solutions with a
						focus on quality, innovation, and client satisfaction.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{features.map((feature, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							whileHover={{ y: -8, transition: { duration: 0.3 } }}
							className="group"
						>
							<Card className="p-8 h-full bg-background/80 dark:bg-background/40 backdrop-blur-sm border border-border/50 dark:border-border/40 hover:border-primary/30 dark:hover:border-primary/40 transition-all duration-300 hover:shadow-xl overflow-hidden relative">
								{/* Colored gradient background that reveals on hover */}
								<div
									className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-500`}
								></div>

								{/* Icon with gradient background */}
								<div className="mb-6 relative">
									<div
										className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-0.5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
									>
										<div className="w-full h-full bg-background dark:bg-background/80 backdrop-blur-sm rounded-xl flex items-center justify-center">
											{feature.icon}
										</div>
									</div>
									<div
										className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300`}
									></div>
								</div>

								<h3 className="text-xl font-bold mb-3 text-foreground dark:text-foreground group-hover:text-primary dark:group-hover:text-white transition-colors duration-300">
									{feature.title}
								</h3>

								<p className="text-muted-foreground dark:text-muted-foreground/90 leading-relaxed">
									{feature.description}
								</p>

								{/* Decorative corner element */}
								<div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden opacity-30">
									<div
										className={`w-4 h-4 bg-gradient-to-r ${feature.color} rounded-full absolute bottom-2 right-2 group-hover:scale-[5] transition-transform duration-500 origin-bottom-right opacity-20`}
									></div>
								</div>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};
