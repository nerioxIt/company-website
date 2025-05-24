import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const features = [
	{
		title: "Trusted Experts",
		description:
			"Our certified professionals have years of industry experience and a proven track record of successful projects.",
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
		color: "from-blue-500 to-cyan-500",
	},
	{
		title: "Fast Turnaround",
		description:
			"We prioritize efficiency without compromising quality, delivering projects on schedule and within budget.",
		icon: (
			<svg
				className="w-12 h-12 text-primary"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
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
		title: "Tailored Solutions",
		description:
			"We create custom solutions designed specifically for your unique business needs and challenges.",
		icon: (
			<svg
				className="w-12 h-12 text-primary"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M14 7L8 13M8 7L14 13M5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z"
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
		title: "Ongoing Support",
		description:
			"We provide comprehensive after-service support and maintenance to ensure your systems run smoothly.",
		icon: (
			<svg
				className="w-12 h-12 text-primary"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M18 18.7023C18.5978 18.3647 19.1213 17.9106 19.5307 17.3565M19.5307 6.64349C19.1213 6.08938 18.5978 5.63533 18 5.29771M6 5.29771C5.40225 5.63533 4.87875 6.08938 4.46928 6.64349M4.46928 17.3565C4.87875 17.9106 5.40225 18.3647 6 18.7023M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
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
		<section className="py-12 relative overflow-hidden bg-gradient-to-b from-muted/50 via-muted to-muted/80 dark:from-muted/20 dark:via-muted/10 dark:to-muted/5">
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
