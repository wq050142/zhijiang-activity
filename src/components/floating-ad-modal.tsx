'use client';

import { useEffect, useState } from 'react';
import { X, Sparkles, Calendar, Phone, ChevronUp } from 'lucide-react';
import Link from 'next/link';

export default function FloatingAdModal() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
    setIsMinimized(true);
  };

  const handleExpand = () => {
    setIsVisible(true);
    setIsMinimized(false);
  };

  // 缩小到固定位置的按钮
  if (isMinimized) {
    return (
      <button
        onClick={handleExpand}
        className="fixed bottom-20 left-4 md:left-8 z-50 inline-flex items-center gap-2 bg-gradient-to-r from-[#FFC107] to-[#FF9F43] hover:from-[#FFB300] hover:to-[#FF8F33] text-white px-4 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
      >
        <Sparkles className="w-4 h-4" />
        <span className="text-sm">三八节活动</span>
        <ChevronUp className="w-4 h-4" />
      </button>
    );
  }

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* 背景遮罩 */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* 弹窗内容 */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* 关闭按钮 */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all hover:scale-110 shadow-md"
          aria-label="关闭"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* 图片区域 */}
        <div className="aspect-[4/3] bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: 'url("/点翠.png")' }}>
          {/* 左上角标签和标题 */}
          <div className="absolute top-4 left-4 right-16 z-10">
            {/* 标签 */}
            <div className="inline-flex items-center gap-1.5 bg-[#FF9F43] text-white px-3 py-1 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-xs font-semibold">
                限时活动 · 团队定制
              </span>
            </div>

            {/* 标题 */}
            <h2 className="text-white text-lg md:text-xl font-bold leading-tight drop-shadow-lg">
              三八节仿点翠DIY手作体验
            </h2>
          </div>

          {/* 底部渐变遮罩 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        {/* 内容区域 */}
        <div className="p-6">
          {/* 亮点列表 */}
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FFF3E0] flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-[#FF9F43]" />
              </div>
              <span className="text-sm text-gray-700 leading-relaxed">
                传统工艺与现代审美的完美融合
              </span>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FFF3E0] flex items-center justify-center">
                <Calendar className="w-3.5 h-3.5 text-[#FF9F43]" />
              </div>
              <span className="text-sm text-gray-700 leading-relaxed">
                之江文化中心专业场地支持
              </span>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FFF3E0] flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-[#FF9F43]" />
              </div>
              <span className="text-sm text-gray-700 leading-relaxed">
                专业导师全程指导，零基础也能完成作品
              </span>
            </div>
          </div>

          {/* 按钮区域 */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="https://mp.weixin.qq.com/s/_d0bQN_wzyHo7TNcvitUuA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-white border-2 border-[#FFC107] hover:bg-[#FFF9E6] text-[#2D2D2D] px-6 py-3 rounded-full font-semibold transition-all"
              onClick={handleClose}
            >
              <Sparkles className="w-4 h-4" />
              详情介绍
            </Link>
            <Link
              href="/contact"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FFC107] to-[#FF9F43] hover:from-[#FFB300] hover:to-[#FF8F33] text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
              onClick={handleClose}
            >
              <Phone className="w-4 h-4" />
              立即预约
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
