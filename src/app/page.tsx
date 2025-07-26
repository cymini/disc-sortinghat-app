'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-white mb-4">
            🎩 DISC Sorting Hat
          </h1>
          <p className="text-xl text-purple-200 mb-6">
            당신의 성격 유형을 발견하세요
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
          <div className="text-4xl mb-6">✨</div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            DISC 성격 유형 테스트
          </h2>
          <p className="text-purple-100 mb-6 leading-relaxed">
            간단한 질문들에 답하시면 당신의 성격 유형을 분석해드립니다.
            <br />
            <strong>D</strong>ominance, <strong>I</strong>nfluence, 
            <strong>S</strong>teadiness, <strong>C</strong>onscientiousness
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-red-500/20 rounded-lg p-4 border border-red-400/30">
              <div className="text-2xl mb-2">🔥</div>
              <div className="text-sm font-semibold text-red-200">D - 지배형</div>
              <div className="text-xs text-red-100">직접적, 도전적</div>
            </div>
            <div className="bg-yellow-500/20 rounded-lg p-4 border border-yellow-400/30">
              <div className="text-2xl mb-2">⭐</div>
              <div className="text-sm font-semibold text-yellow-200">I - 영향형</div>
              <div className="text-xs text-yellow-100">낙관적, 사교적</div>
            </div>
            <div className="bg-green-500/20 rounded-lg p-4 border border-green-400/30">
              <div className="text-2xl mb-2">🌱</div>
              <div className="text-sm font-semibold text-green-200">S - 안정형</div>
              <div className="text-xs text-green-100">인내심, 협조적</div>
            </div>
            <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-400/30">
              <div className="text-2xl mb-2">📊</div>
              <div className="text-sm font-semibold text-blue-200">C - 신중형</div>
              <div className="text-xs text-blue-100">정확성, 체계적</div>
            </div>
          </div>
        </div>

        {/* Start Button */}
        <Link 
          href="/quiz"
          className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          🚀 테스트 시작하기
        </Link>

        {/* Footer */}
        <div className="mt-8 text-purple-200 text-sm">
          <p>약 5분 소요 • 24개 질문</p>
        </div>
      </div>
    </div>
  );
}
