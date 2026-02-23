'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-nature.jpg"
          alt="식물 배경"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-accent-light text-sm md:text-lg font-semibold tracking-[0.2em] mb-6"
        >
          SESEO 식물하나:담다
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
        >
          두피와 모발,<br />
          식물의 힘으로 담다
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          6단계 두피·모발 케어 루틴으로 <br className="md:hidden" />
          건강하고 아름다운 모발을 완성하세요
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="/products"
            className="inline-block bg-accent hover:bg-accent-dark text-white px-8 py-3.5 font-semibold text-sm tracking-wide transition-colors"
          >
            지금 쇼핑하기
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
        <ChevronDown size={24} />
      </div>
    </section>
  )
}
