'use client'

import { useState } from 'react'
import { branches } from '@/data/stylists'

export default function Reservation() {
  const [activeTab, setActiveTab] = useState('s')
  const activeBranch = branches.find((b) => b.id === activeTab)

  return (
    <section
      id="reservation"
      className="py-20 md:py-32 bg-black relative overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-white text-center mb-4">
          예약하기
        </h2>
        <p className="text-sm text-white/40 text-center mb-12">
          디자이너를 선택하면 네이버 예약 페이지로 이동합니다
        </p>

        {/* Branch Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {branches.map((branch) => (
            <button
              key={branch.id}
              onClick={() => setActiveTab(branch.id)}
              className={`px-6 py-2.5 text-sm font-semibold tracking-wide transition-colors ${
                activeTab === branch.id
                  ? 'bg-accent text-white'
                  : 'border border-white/20 text-white/50 hover:border-white/40 hover:text-white/80'
              }`}
            >
              {branch.name}
            </button>
          ))}
        </div>

        {/* Branch Info */}
        <div className="text-center mb-8">
          <p className="text-sm text-white/40">{activeBranch.address}</p>
          <a
            href={`tel:${activeBranch.phone}`}
            className="text-sm text-white/50 hover:text-accent transition-colors"
          >
            {activeBranch.phone}
          </a>
        </div>

        {/* Stylist Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {activeBranch.stylists.map((stylist) => (
            <a
              key={stylist.name}
              href={stylist.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center"
            >
              {/* Photo */}
              <div className="w-full aspect-square overflow-hidden bg-white/5 border border-white/10 group-hover:border-accent transition-colors mb-3">
                {stylist.image ? (
                  <img
                    src={stylist.image}
                    alt={stylist.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                )}
              </div>
              {/* Info */}
              {stylist.role && (
                <span className="text-[10px] text-white/30 tracking-wide mb-0.5">
                  {stylist.role}
                </span>
              )}
              <span className="text-sm font-medium text-white/80 group-hover:text-accent transition-colors">
                {stylist.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
