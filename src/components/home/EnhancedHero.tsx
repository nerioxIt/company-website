import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Users, Zap, Award, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";

const stats = [
	{ icon: Users, label: "Happy Clients", value: "500+" },
	{ icon: Zap, label: "Projects Completed", value: "1000+" },
	{ icon: Star, label: "5-Star Reviews", value: "98%" },
	{ icon: Award, label: "Years Experience", value: "8+" },
];

export const EnhancedHero = () => {
	const { theme } = useTheme();
	const isDark = theme === "dark";

	return (
		<section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background/95 to-muted/50 dark:from-background dark:via-background/90 dark:to-muted/20 py-12 md:py-4">
			{/* Animated background elements */}
			<div className="absolute inset-0 overflow-hidden">
				<motion.div
					className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.3, 0.5, 0.3],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-teal/10 dark:bg-accent-teal/20 rounded-full blur-3xl"
					animate={{
						scale: [1.2, 1, 1.2],
						opacity: [0.3, 0.5, 0.3],
					}}
					transition={{
						duration: 10,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
				<div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />
			</div>

			<div className="container-custom relative z-10 mx-auto px-4">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Content */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="space-y-8"
					>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full text-primary border border-primary/20 dark:border-primary/30"
						>
							<Zap size={16} className="text-primary dark:text-white" />
							<span className="text-sm font-medium text-primary dark:text-white">
								CQ Group Digital Solutions
							</span>
						</motion.div>

						<div className="space-y-6">
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-accent-teal bg-clip-text text-transparent leading-tight">
								Smarter Software for Smoother Business
							</h1>

							<p className="text-lg md:text-xl text-muted-foreground dark:text-muted-foreground/90 leading-relaxed max-w-2xl">
								We build powerful digital tools — from sleek websites to
								intelligent business systems — to make your operations faster,
								simpler, and more profitable.
							</p>
						</div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="flex flex-col sm:flex-row gap-4"
						>
							<Button
								className="group bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground px-6 py-5 rounded-xl text-base md:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
								asChild
							>
								<Link to="/services">
									Explore Our Services
									<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
								</Link>
							</Button>

							<Button
								variant="outline"
								className="group border-2 border-border dark:border-border/60 hover:border-primary dark:hover:border-primary px-6 py-5 rounded-xl text-base md:text-lg font-semibold bg-background/60 dark:bg-background/40 backdrop-blur-sm"
								asChild
							>
								<Link to="/contact">
									Get a Free Consultation
									<ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
								</Link>
							</Button>
						</motion.div>

						{/* Stats */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.6 }}
							className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8"
						>
							{stats.map((stat, index) => (
								<motion.div
									key={stat.label}
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
									className="text-center space-y-2"
								>
									<stat.icon className="w-7 h-7 text-primary dark:text-white mx-auto" />
									<div className="text-xl font-bold text-foreground dark:text-foreground">
										{stat.value}
									</div>
									<div className="text-sm text-muted-foreground dark:text-muted-foreground/80">
										{stat.label}
									</div>
								</motion.div>
							))}
						</motion.div>
					</motion.div>

					{/* Visual */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="relative"
					>
						<div className="relative">
							<motion.div
								animate={{
									y: [-8, 8, -8],
								}}
								transition={{
									duration: 5,
									repeat: Infinity,
									ease: "easeInOut",
								}}
								className="relative z-10"
							>
								<div className="rounded-xl overflow-hidden shadow-2xl border border-border/30 dark:border-border/40">
									<img
										src="/hero.jpg"
										alt="Business Dashboard"
										className="w-full h-auto object-cover"
									/>
									<div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent-teal/20 dark:from-primary/30 dark:to-accent-teal/30"></div>
								</div>

								{/* Feature callouts */}
								<motion.div
									className="absolute -right-4 -top-4 bg-background rounded-lg p-3 shadow-lg border border-border/50 dark:border-border/60"
									animate={{
										y: [-4, 2, -4],
									}}
									transition={{
										duration: 4,
										repeat: Infinity,
										ease: "easeInOut",
										delay: 1,
									}}
								>
									<div className="flex items-center gap-2">
										<div className="w-8 h-8 rounded-full bg-primary/20 dark:bg-blue-500 flex items-center justify-center">
											<Zap className="w-4 h-4 text-primary dark:text-primary-foreground" />
										</div>
										<span className="text-sm font-medium text-foreground dark:text-white">
											Fast & Responsive
										</span>
									</div>
								</motion.div>

								<motion.div
									className="absolute -left-4 bottom-1/4 bg-background rounded-lg p-3 shadow-lg border border-border/50 dark:border-border/60"
									animate={{
										y: [2, -4, 2],
									}}
									transition={{
										duration: 4.5,
										repeat: Infinity,
										ease: "easeInOut",
										delay: 0.5,
									}}
								>
									<div className="flex items-center gap-2">
										<div className="w-8 h-8 rounded-full bg-accent-teal/20 dark:bg-accent-teal/30 flex items-center justify-center">
											<Users className="w-4 h-4 text-accent-teal dark:text-accent-teal" />
										</div>
										<span className="text-sm font-medium text-foreground dark:text-white">
											User-Friendly
										</span>
									</div>
								</motion.div>

								<motion.div
									className="absolute left-1/4 -bottom-4 bg-background rounded-lg p-3 shadow-lg border border-border/50 dark:border-border/60"
									animate={{
										y: [0, -6, 0],
									}}
									transition={{
										duration: 5,
										repeat: Infinity,
										ease: "easeInOut",
										delay: 1.5,
									}}
								>
									<div className="flex items-center gap-2">
										<div className="w-8 h-8 rounded-full bg-accent-amber/20 dark:bg-accent-amber/30 flex items-center justify-center">
											<Star className="w-4 h-4 text-accent-amber dark:text-accent-amber" />
										</div>
										<span className="text-sm font-medium text-foreground dark:text-white">
											Results-Driven
										</span>
									</div>
								</motion.div>
							</motion.div>
						</div>
					</motion.div>
				</div>

			
			</div>
		</section>
	);
};