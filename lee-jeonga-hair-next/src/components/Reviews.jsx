'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

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
        animate={{
          y: isHovered ? -8 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn(
          "relative rounded-2xl p-6 transition-all duration-300",
          "bg-[#F5EDE4] border border-[#D4A574]/20",
          isHovered ? "shadow-2xl shadow-[#8B6F47]/20" : "shadow-lg shadow-[#8B6F47]/10"
        )}
      >
        {/* Avatar/Image */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#D4A574] shadow-lg">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-[#8B6F47] rounded-full p-2 shadow-md">
              <Quote className="w-4 h-4 text-[#FAF6F1]" />
            </div>
          </div>
        </div>

        {/* Star Rating */}
        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, starIndex) => (
              <Star
                key={starIndex}
                className={cn(
                  "w-5 h-5 transition-all duration-200",
                  starIndex < testimonial.rating
                    ? "fill-[#D4A574] text-[#D4A574]"
                    : "fill-transparent text-[#C4956A]/30"
                )}
              />
            ))}
          </div>
        </div>

        {/* Review Text */}
        <div className="mb-6">
          <p className="text-[#3D2B1F] text-center text-sm leading-relaxed italic">
            &ldquo;{testimonial.review}&rdquo;
          </p>
        </div>

        {/* Service Badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#8B6F47] text-[#FAF6F1] text-xs font-medium shadow-sm">
            {testimonial.service}
          </span>
        </div>

        {/* Author Details */}
        <div className="text-center border-t border-[#D4A574]/20 pt-4">
          <h3 className="text-[#3D2B1F] font-semibold text-base mb-1">
            {testimonial.name}
          </h3>
          {testimonial.role && (
            <p className="text-[#8B6F47] text-xs">{testimonial.role}</p>
          )}
        </div>

        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#D4A574]/10 to-transparent" />
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
    <section id="reviews" className="py-16 md:py-24 bg-[#FAF6F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#3D2B1F] mb-4">
            고객 후기
          </h2>
          <p className="text-[#8B6F47] text-lg max-w-2xl mx-auto">
            저희 살롱을 방문해주신 고객님들의 소중한 경험을 들어보세요
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-[#C4956A] via-[#D4A574] to-[#C4956A] rounded-full" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <p className="text-[#8B6F47] mb-6">
            당신의 아름다운 변화를 함께 만들어가고 싶습니다
          </p>
          <motion.a
            href="#reservation"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-[#8B6F47] text-[#FAF6F1] rounded-full font-medium shadow-lg hover:bg-[#3D2B1F] transition-colors duration-300"
          >
            예약하기
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
