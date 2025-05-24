import { motion } from "framer-motion";
import { Code, Palette, Rocket, Shield, Smartphone, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
	{
		icon: Code,
		title: "Custom Development",
		description:
			"Tailored solutions built with cutting-edge technologies to meet your unique business requirements.",
		color: "from-blue-500 to-cyan-500",
	},
	{
		icon: Palette,
		title: "UI/UX Design",
		description:
			"Beautiful, intuitive interfaces that provide exceptional user experiences across all devices.",
		color: "from-purple-500 to-pink-500",
	},
	{
		icon: Rocket,
		title: "Performance Optimization",
		description:
			"Lightning-fast websites and applications optimized for speed, SEO, and user engagement.",
		color: "from-orange-500 to-red-500",
	},
	{
		icon: Shield,
		title: "Security First",
		description:
			"Enterprise-grade security measures to protect your data and ensure compliance.",
		color: "from-green-500 to-emerald-500",
	},
	{
		icon: Smartphone,
		title: "Mobile Excellence",
		description:
			"Responsive designs and native mobile apps that deliver seamless experiences.",
		color: "from-indigo-500 to-purple-500",
	},
	{
		icon: Globe,
		title: "Global Reach",
		description:
			"Scalable solutions designed to grow with your business and reach global audiences.",
		color: "from-teal-500 to-cyan-500",
	},
];

export const FeaturesSection = () => {
	return (
		<section className="py-0 bg-gradient-to-b from-background via-background to-muted/30 dark:from-background dark:via-background dark:to-muted/10 overflow-hidden relative">
			{/* Background effects */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute -top-1/2 left-1/2 w-[800px] h-[800px] bg-grid-pattern opacity-[0.02] dark:opacity-[0.05] rounded-full transform -translate-x-1/2 rotate-12"></div>
				<motion.div
					className="absolute top-1/4 -right-32 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"
					animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
					transition={{ duration: 8, repeat: Infinity }}
				/>
			</div>

			<div className="container-custom relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12 max-w-3xl mx-auto"
				>
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full text-primary border border-primary/20 dark:border-primary/30 mb-6">
						<Rocket size={16} className="text-primary dark:text-white" />
						<span className="text-sm font-medium text-primary dark:text-white">Powerful Capabilities</span>
					</div>

					<h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-normal pb-1">
						Technology That Drives Results
					</h2>

					<p className="text-lg text-muted-foreground dark:text-muted-foreground/90 leading-relaxed">
						We combine technical excellence with creative innovation to deliver
						digital solutions that exceed expectations and drive measurable
						business growth.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
					{features.map((feature, index) => (
						<motion.div
							key={feature.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							className="group"
						>
							<div className="relative h-full">
								{/* Enhanced glow effect with higher opacity in dark mode */}
								<div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent-teal/20 dark:from-primary/40 dark:to-accent-teal/40 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>

								<Card className="h-full bg-background/80 dark:bg-background/40 backdrop-blur-sm border border-border/50 dark:border-border/30 p-8 relative z-10 rounded-xl overflow-hidden group-hover:shadow-xl transition-all duration-300 group-hover:bg-background/95 dark:group-hover:bg-background/60">
									<div className="relative">
										<div
											className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} p-0.5 transition-transform duration-300 group-hover:scale-105`}
										>
											<div className="w-full h-full bg-background dark:bg-background/80 rounded-lg flex items-center justify-center">
												<feature.icon className="w-7 h-7 text-primary dark:text-white" />
											</div>
										</div>
									</div>

									<div className="mt-6 space-y-4">
										<h3 className="text-xl font-bold text-foreground dark:text-foreground group-hover:text-primary dark:group-hover:text-white transition-colors duration-300">
											{feature.title}
										</h3>
										<p className="text-muted-foreground dark:text-muted-foreground/90 leading-relaxed group-hover:text-foreground/90 dark:group-hover:text-foreground/80 transition-colors duration-300">
											{feature.description}
										</p>
									</div>

									{/* Improved border effect with higher opacity in dark mode */}
									<div className="absolute inset-0 border border-primary/0 dark:border-primary-foreground/0 rounded-xl group-hover:border-primary/50 dark:group-hover:border-primary-foreground/50 transition-colors duration-300 pointer-events-none"></div>

									{/* Stronger background glow with higher opacity in dark mode */}
									<motion.div
										className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-tr ${feature.color} rounded-full opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 blur-2xl transition-opacity duration-500`}
										initial={false}
										whileHover={{ scale: 1.2 }}
									/>
								</Card>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};