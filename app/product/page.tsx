"use client"

import { motion } from "framer-motion"

export default function ProductPage() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          🚀 Coming Soon
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          We’re working hard to bring you something amazing. Stay tuned!
        </p>
      </motion.div>
    </section>
  )
}
