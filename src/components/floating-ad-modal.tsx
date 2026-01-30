'use client';

import { useEffect, useState } from 'react';
import { X, Sparkles, Calendar, Phone, ChevronDown } from 'lucide-react';
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

  // 缩小到固定位置的按钮（右上角）
  if (isMinimized) {
    return (
      <button
        onClick={handleExpand}
        className="fixed top-4 right-4 z-50 inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6B9D] to-[#FF69B4] hover:from-[#FF5A90] hover:to-[#FF5AA0] text-white px-4 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
      >
        <Sparkles className="w-4 h-4" />
        <span className="text-sm">妇女节活动</span>
        <ChevronDown className="w-4 h-4" />
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

        {/* 图片区域 - 占2/3高度 */}
        <div className="aspect-[2/3] bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: 'url("/点翠.png")' }}>
          {/* 左上角标签和标题 */}
          <div className="absolute top-4 left-4 right-16 z-10">
            {/* 标签 */}
            <div className="inline-flex items-center gap-1.5 bg-[#FF69B4] text-white px-4 py-2 rounded-full mb-3">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-bold">
                限时团队定制
              </span>
            </div>

            {/* 标题 */}
            <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight drop-shadow-lg">
              妇女节仿点翠DIY手作体验
            </h2>
          </div>
        </div>

        {/* 内容区域 - 占1/3高度 */}
        <div className="p-4">
          {/* 亮点列表 */}
          <div className="space-y-2 mb-4">
            <div className="flex items-start gap-2">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FFE4EC] flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-[#FF69B4]" />
              </div>
              <span className="text-xs text-gray-700 leading-relaxed">
                传统工艺与现代审美的完美融合
              </span>
            </div>
            <div className="flex items-start gap-2">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FFE4EC] flex items-center justify-center">
                <Calendar className="w-3 h-3 text-[#FF69B4]" />
              </div>
              <span className="text-xs text-gray-700 leading-relaxed">
                之江文化中心专业场地支持
              </span>
            </div>
            <div className="flex items-start gap-2">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FFE4EC] flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-[#FF69B4]" />
              </div>
              <span className="text-xs text-gray-700 leading-relaxed">
                专业导师全程指导，零基础也能完成作品
              </span>
            </div>
          </div>

          {/* 按钮区域 - 始终横向排列 */}
          <div className="flex gap-2">
            <Link
              href="https://mp.weixin.qq.com/s/_d0bQN_wzyHo7TNcvitUuA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 bg-white border-2 border-[#FF69B4] hover:bg-[#FFE4EC] text-[#FF69B4] px-4 py-2.5 rounded-full font-semibold transition-all text-sm"
              onClick={handleClose}
            >
              <Sparkles className="w-3.5 h-3.5" />
              详情介绍
            </Link>
            <Link
              href="/contact"
              className="flex-1 inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#FF6B9D] to-[#FF69B4] hover:from-[#FF5A90] hover:to-[#FF5AA0] text-white px-4 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105 text-sm"
              onClick={handleClose}
            >
              <Phone className="w-3.5 h-3.5" />
              立即预约
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
