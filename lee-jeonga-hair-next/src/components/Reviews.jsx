'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TestimonialCard = ({ testimonial, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <motion.div
        animate={{ y: isHovered ? -4 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`relative border transition-all duration-300 p-6 ${
          isHovered ? "border-accent shadow-lg" : "border-[#EEEEEE]"
        }`}
      >
        {/* Quote icon */}
        <div className="mb-4">
          <Quote className="w-6 h-6 text-accent" />
        </div>

        {/* Star Rating */}
        <div className="flex items-center gap-0.5 mb-4">
          {Array.from({ length: 5 }).map((_, starIndex) => (
            <Star
              key={starIndex}
              className={`w-4 h-4 ${
                starIndex < testimonial.rating
                  ? "fill-accent text-accent"
                  : "fill-transparent text-[#EEEEEE]"
              }`}
            />
          ))}
        </div>

        {/* Review Text */}
        <p className="text-sm leading-relaxed text-[#333333] mb-6">
          &ldquo;{testimonial.review}&rdquo;
        </p>

        {/* Service Badge */}
        <span className="inline-block px-3 py-1 text-[10px] font-semibold tracking-wide uppercase bg-[#111111] text-white mb-4">
          {testimonial.service}
        </span>

        {/* Author */}
        <div className="flex items-center gap-3 border-t border-[#EEEEEE] pt-4">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-[#EEEEEE]">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#111111]">
              {testimonial.name}
            </h3>
            {testimonial.role && (
              <p className="text-[11px] text-[#999999]">{testimonial.role}</p>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const testimonials = [
  {
    id: 1,
    name: "지은 김",
    service: "헤어 컬러링",
    rating: 5,
    review: "정말 만족스러운 서비스였어요. 원하던 색상이 완벽하게 나왔고, 머리 결도 건강하게 유지되었습니다. 강력 추천합니다!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    role: "단골 고객",
  },
  {
    id: 2,
    name: "민수 박",
    service: "남성 커트",
    rating: 5,
    review: "세심한 상담과 전문적인 시술로 항상 만족합니다. 스타일리스트분의 센스가 정말 좋아요.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    role: "정기 고객",
  },
  {
    id: 3,
    name: "수진 이",
    service: "펌 & 트리트먼트",
    rating: 5,
    review: "자연스러운 웨이브가 너무 예쁘게 나왔어요. 트리트먼트 덕분에 머리카락이 윤기나고 부드러워졌습니다.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    role: "신규 고객",
  },
  {
    id: 4,
    name: "현우 최",
    service: "헤어 스타일링",
    rating: 4,
    review: "깔끔하고 세련된 스타일로 변신했습니다. 직장에서도 많은 칭찬을 받았어요.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    role: "단골 고객",
  },
  {
    id: 5,
    name: "서연 정",
    service: "헤어 케어",
    rating: 5,
    review: "손상된 머리카락이 건강하게 회복되었어요. 전문적인 케어 프로그램이 정말 효과적입니다.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
    role: "VIP 고객",
  },
  {
    id: 6,
    name: "태희 강",
    service: "브라이덜 헤어",
    rating: 5,
    review: "결혼식 당일 완벽한 헤어스타일로 가장 아름다운 순간을 만들어주셨어요. 감사합니다!",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face",
    role: "특별 고객",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-32 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-accent mb-4">
            Reviews
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-black">
            고객 후기
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#reservation"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-8 py-3.5 bg-accent text-white font-semibold text-sm tracking-wide hover:bg-accent-dark transition-colors"
          >
            예약하기
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
