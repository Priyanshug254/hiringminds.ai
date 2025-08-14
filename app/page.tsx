"use client"
import Image from "next/image"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { Check, ChevronRight, Menu, X, Moon, Sun, ArrowRight, Star, Brain, Shield, Users, BarChart, Globe, Video, Zap, Target, Award, Building2, Rocket, GraduationCap, Gavel } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { useMotionTemplate } from "framer-motion"
import FloatingPaths from "@/components/FloatingPaths"
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa"



export default function HiringMindsLanding() {

  const icons = [
    { icon: <FaTwitter className="text-[#1DA1F2]"  />, link: "https://twitter.com" },
    { icon: <FaLinkedin className="text-[#0077B5]" />, link: "https://linkedin.com" },
    { icon: <FaInstagram  className="text-pink-500"/>, link: "https://instagram.com" },
    { icon: <FaFacebook className="text-[#1877F2]" />, link: "https://facebook.com" },
  ]
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Cursor tracking for interactive background (remove the cursor: none CSS)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)


  const backgroundStyle = useMotionTemplate`
  radial-gradient(150px circle at ${cursorXSpring}px ${cursorYSpring}px, rgba(255,255,255,0.2), transparent 80%)`

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [cursorX, cursorY])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const features = [
    {
      title: "AI-Driven Structured Interviews",
      description: "Automatically generate and conduct personalized interview sessions aligned with job descriptions using generative AI.",
      icon: <Brain className="size-6" />,
    },
    {
      title: "Cheat Detection & Verification",
      description: "Robust anti-cheating mechanisms with face tracking, tab switching detection, and behavioral analytics.",
      icon: <Shield className="size-6" />,
    },
    {
      title: "Multilingual Support",
      description: "Regional language integration enables inclusive recruitment across diverse geographies and cultures.",
      icon: <Globe className="size-6" />,
    },
    {
      title: "Smart Skills Assessments",
      description: "Real-world, scenario-based technical and non-technical assessments verified by AI intelligence.",
      icon: <Target className="size-6" />,
    },
    {
      title: "Live & Recorded Interviews",
      description: "Secure, structured interviews with smart analysis and comprehensive behavioral insights.",
      icon: <Video className="size-6" />,
    },
    {
      title: "Instant Analytics Dashboard",
      description: "Real-time insights into candidate performance, strengths, weaknesses, and cultural fit scores.",
      icon: <BarChart className="size-6" />,
    },
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col relative overflow-hidden">
      {/* Interactive cursor background effect for dark mode */}
      {mounted && theme === "dark" && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[999] opacity-90"
          style={{
            background: backgroundStyle,
            mixBlendMode: "screen",
           }}
        />
      )}

      {/* Main gradient background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-background via-background to-muted/20 dark:from-black dark:via-gray-900 dark:to-black" />
      
      {/* Grid pattern overlay */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />
      <FloatingPaths position={1 } />
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-xl transition-all duration-300 ${
          isScrolled ? "bg-background/80 dark:bg-black/80 shadow-lg border-b border-border/20" : "bg-transparent"
        }`}
      >
        <div className="container flex h-16 items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 font-bold text-xl"
          >
            <div className="rounded-xl  flex items-center justify-center ">
              <Image
               src="/logo.png"   // or "/logo.svg"
               alt="HiringMinds.ai Logo"
               width={60}        // adjust size
               height={80}
               className="object-cover"
               />
            </div>
            <span className="bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              HiringMinds.ai
            </span>
          </motion.div>

          <nav className="hidden md:flex gap-8">
            {["Features", "Pricing", "About", "FAQ"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-300 group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="hidden md:flex gap-4 items-center">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Sign In
            </Link>
            <Button className="rounded-full bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-200 text-white dark:text-black hover:opacity-90">
              Get Early Access
              <ChevronRight className="ml-1 size-4" />
            </Button>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 inset-x-0 bg-background/95 dark:bg-black/95 backdrop-blur-xl border-b border-border/20"
          >
            <div className="container py-4 flex flex-col gap-4">
              {["Features", "Pricing", "About", "FAQ"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="py-2 text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-2 border-t border-border/20">
                <Link href="#" className="py-2 text-sm font-medium">
                  Sign In
                </Link>
                <Button className="rounded-full bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-200 text-white dark:text-black">
                  Get Early Access
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </header>

      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Badge className="mb-6 rounded-full px-6 py-2 text-sm font-medium bg-white/10 dark:bg-black/10 border border-black/20 dark:border-white/20 text-black dark:text-white backdrop-blur-sm">
                  🚀 Launching September 1, 2025
                </Badge>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-r from-black via-gray-800 to-black dark:from-white dark:via-gray-200 dark:to-white bg-clip-text "
              >
                Revolutionize Hiring with Hiringminds.ai
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="text-lg md:text-xl text-gray-700 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed"
              >
                HiringMinds.ai automates the hiring process — faster, smarter, and without bias.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              >
                <Button size="lg" className="rounded-full h-14 px-8 text-base bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-200 text-white dark:text-black hover:opacity-90">
                  Join Waitlist
                  <ArrowRight className="ml-2 size-5" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5">
                  Watch Demo
                </Button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="flex items-center justify-center gap-6 text-sm text-muted-foreground"
              >
                <div className="flex items-center gap-2">
                  <Check className="size-4 text-green-600" />
                  <span>Free during beta</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="size-4 text-green-600" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="size-4 text-green-600" />
                  <span>Early access benefits</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero visual element */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative mx-auto max-w-5xl"
            >
              <div className="relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-gradient-to-b from-white/50 to-gray-100/50 dark:from-gray-900/50 dark:to-black/50 backdrop-blur-sm">
                <div className="aspect-video bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-black dark:to-gray-800 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Brain className="size-16 mx-auto text-black/60 dark:text-white/60" />
                    <p className="text-lg font-medium text-black/80 dark:text-white/80">AI-Powered Recruitment Platform</p>
                    <p className="text-sm text-black/60 dark:text-white/60">Coming September 2025</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium bg-white/10 dark:bg-black/10 border border-black/20 dark:border-white/20 text-black dark:text-white backdrop-blur-sm">
                Features
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-200 bg-clip-text">
                Intelligent Recruitment Solutions
              </h2>
              <p className="max-w-3xl mx-auto text-muted-foreground md:text-lg">
              HiringMinds.ai transforms recruitment with intelligent automation, delivering faster, fairer, and smarter hiring decisions.</p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {features.map((feature, i) => (
                <motion.div key={i} variants={item}>
                  <Card className="h-full group hover:shadow-xl transition-all duration-300 border-black/10 dark:border-white/10 bg-gradient-to-b from-white/50 to-gray-50/50 dark:from-gray-900/50 dark:to-black/50 backdrop-blur-sm">
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="size-14 rounded-2xl bg-gradient-to-br from-black/10 to-gray-800/10 dark:from-white/10 dark:to-gray-200/10 flex items-center justify-center text-black dark:text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-black dark:text-white">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="w-full py-20 md:py-32 ">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium bg-white/10 dark:bg-black/10 border border-black/20 dark:border-white/20 text-black dark:text-white backdrop-blur-sm">
                Who We Serve
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-200 bg-clip-text ">
                Built for Every Organization
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Startups",
                  description: "Rapid, cost-efficient hiring to help you scale without slowing down.",
                  icon: <Rocket className="size-6" />,
                },
                {
                  title: "Enterprises",
                  description: "Enterprise-grade AI hiring that’s secure, scalable, and bias-free.",
                  icon: <Building2 className="size-6" />,
                },
                {
                  title: "EdTech & HRTech",
                  description: "Plug-and-play AI assessments that integrate seamlessly with your platform.",
                  icon: <GraduationCap className="size-6" />,
                },
                {
                  title: "Government",
                  description: "Transparent, compliant recruitment to serve the public with integrity.",
                  icon: <Gavel className="size-6" />,
                },
              ].map((audience, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full text-center p-6 border-black/10 dark:border-white/10 bg-gradient-to-b from-white/50 to-gray-50/50 dark:from-gray-900/50 dark:to-black/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="size-12 rounded-xl bg-gradient-to-br from-black/10 to-gray-800/10 dark:from-white/10 dark:to-gray-200/10 flex items-center justify-center text-black dark:text-white mb-4 mx-auto">
                        {audience.icon}
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-black dark:text-white">{audience.title}</h3>
                      <p className="text-sm text-muted-foreground">{audience.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium bg-white/10 dark:bg-black/10 border border-black/20 dark:border-white/20 text-black dark:text-white backdrop-blur-sm">
                Pricing
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-200 bg-clip-text">
                Simple, Transparent Pricing
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg">
                Choose the plan that fits your hiring needs. All plans include our core AI features.
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              {[
                {
                  name: "Starter",
                  price: "Free",
                  period: "during beta",
                  description: "Perfect for small teams and startups",
                  features: [
                    "Up to 50 candidates/month",
                    "Basic AI interviews",
                    "Standard assessments",
                    "Email support",
                    "Basic analytics"
                  ],
                  cta: "Join Beta",
                  popular: false,
                },
                {
                  name: "Professional",
                  price: "$99",
                  period: "/month",
                  description: "Ideal for growing companies",
                  features: [
                    "Up to 500 candidates/month",
                    "Advanced AI interviews",
                    "Cheat detection",
                    "Multilingual support",
                    "Priority support",
                    "Advanced analytics",
                    "ATS integrations"
                  ],
                  cta: "Get Early Access",
                  popular: true,
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  period: "pricing",
                  description: "For large organizations",
                  features: [
                    "Unlimited candidates",
                    "Custom AI models",
                    "White-label solution",
                    "Dedicated support",
                    "Custom integrations",
                    "Advanced security",
                    "SLA guarantee"
                  ],
                  cta: "Contact Sales",
                  popular: false,
                },
              ].map((plan, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className={`relative h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl ${plan.popular ? "border-black/30 dark:border-white/30 shadow-xl scale-105" : "border-black/10 dark:border-white/10"} bg-gradient-to-b from-white/50 to-gray-50/50 dark:from-gray-900/50 dark:to-black/50 backdrop-blur-sm`}>
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-200 text-white dark:text-black">
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">{plan.name}</h3>
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-black dark:text-white">{plan.price}</span>
                        <span className="text-muted-foreground ml-1">{plan.period}</span>
                      </div>
                      <p className="text-muted-foreground mb-6">{plan.description}</p>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, j) => (
                          <li key={j} className="flex items-center text-sm">
                            <Check className="mr-3 size-4 text-green-600 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        className={`w-full rounded-full ${plan.popular ? "bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-200 text-white dark:text-black" : "bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-black dark:text-white hover:opacity-90"}`}
                      >
                        {plan.cta}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-20 md:py-32  dark:to-white/5">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium bg-white/10 dark:bg-black/10 border border-black/20 dark:border-white/20 text-black dark:text-white backdrop-blur-sm">
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-200 bg-clip-text">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {[
                  {
                    question: "When will HiringMinds.ai be available?",
                    answer: "HiringMinds.ai will officially launch on September 1, 2025. However, we're offering early access to beta users starting in Q2 2025. Join our waitlist to be among the first to experience our AI-powered recruitment platform."
                  },
                  {
                    question: "How does the cheat detection system work?",
                    answer: "Our advanced cheat detection uses multiple layers including face tracking, tab switching detection, behavioral analytics, and AI-powered pattern recognition. The system monitors candidate behavior in real-time during assessments and interviews to ensure authentic evaluations while maintaining candidate privacy."
                  },
                  {
                    question: "Which languages are supported for multilingual interviews?",
                    answer: "We support major Indian languages including Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati, Kannada, Malayalam, Punjabi, and Urdu, along with international languages like English, Spanish, French, German, and Mandarin. Our AI can conduct interviews and assessments in the candidate's preferred language."
                  },
                  {
                    question: "Can HiringMinds.ai integrate with our existing HR systems?",
                    answer: "Yes! HiringMinds.ai offers seamless integrations with popular ATS platforms like Workday, BambooHR, Greenhouse, Lever, and many others. We also provide REST APIs for custom integrations with your existing HR tech stack."
                  },
                  {
                    question: "How does the AI ensure bias-free hiring?",
                    answer: "Our bias-resistant algorithms use anonymized evaluations, diverse training data, and continuous monitoring to identify and mitigate unconscious bias. The system focuses on skills, competencies, and job-relevant factors while promoting diversity and inclusion in the hiring process."
                  }
                ].map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <AccordionItem 
                      value={`item-${i}`} 
                      className="border border-black/10 dark:border-white/10 rounded-lg px-6 bg-gradient-to-b from-white/50 to-gray-50/50 dark:from-gray-900/50 dark:to-black/50 backdrop-blur-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                    >
                      <AccordionTrigger className="text-left font-semibold hover:no-underline text-black dark:text-white">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
      <section className="w-full py-20 md:py-32  dark:to-white/5 relative overflow-hidden">
  
      <div className="container px-4 md:px-6 relative">
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center space-y-8"
     >
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-200 bg-clip-text">
        Ready to Transform Your Hiring?
      </h2>
      <p className="mx-auto max-w-2xl text-muted-foreground md:text-xl">
        Join the waitlist and be among the first to experience the future of AI-powered recruitment.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="rounded-full h-14 px-8 text-base bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-200 text-white dark:text-black hover:opacity-90">
          Join Waitlist Now
          <ArrowRight className="ml-2 size-5" />
        </Button>
        <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5">
          Schedule Demo
        </Button>
      </div>
      <p className="text-sm text-muted-foreground">
        🎉 Early access includes free beta period and exclusive launch benefits
      </p>
      </motion.div>
     </div>
</section>

    <section className="w-full py-20 md:py-32  dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 md:px-6 text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-200 bg-clip-text"
        >
          Connect With Us
        </motion.h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Follow us and stay updated with the latest news from HiringMinds.ai
        </p>

        {/* Icons */}
        <div className="flex flex-wrap gap-10 justify-center text-4xl sm:text-5xl md:text-6xl">
          {icons.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </section>

      </main>

      {/* Footer */}
      <footer className="w-full border-t border-black/10 dark:border-white/10 bg-gradient-to-b from-white/50 to-gray-50/50 dark:from-gray-900/50 dark:to-black/50 backdrop-blur-sm">
        <div className="container px-4 py-12 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3 font-bold text-xl">
                <div className="size-20 flex items-center justify-center">
                <Image
                 src="/logo.png"
                 alt="HiringMinds.ai Logo"
                 width={50}
                 height={50}
                  className="object-cover"
                />
               </div>

                <span className="bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  HiringMinds.ai
                </span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                Revolutionizing recruitment with AI-powered intelligence, bias-free assessments, and inclusive hiring solutions.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-black dark:text-white">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#features" className="hover:text-foreground transition-colors">Features</Link></li>
                <li><Link href="#pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">API</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Integrations</Link></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-black dark:text-white">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#about" className="hover:text-foreground transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-black dark:text-white">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">Help Center</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Documentation</Link></li>
                <li><Link href="#faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Status</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-black/10 dark:border-white/10 pt-8 mt-8">
            <p className="text-xs text-muted-foreground">
              © 2025 HiringMinds.ai. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
