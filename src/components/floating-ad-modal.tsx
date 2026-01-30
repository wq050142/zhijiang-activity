'use client';

import { useEffect, useState } from 'react';
import { X, Sparkles, Calendar, Phone } from 'lucide-react';
import Link from 'next/link';

export default function FloatingAdModal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 检查是否已经关闭过弹窗
    const hasClosed = localStorage.getItem('ad-modal-closed');
    if (!hasClosed) {
      // 延迟 1.5 秒后显示弹窗
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // 记录已关闭状态，24 小时后不再显示
    localStorage.setItem('ad-modal-closed', 'true');
  };

  // 清除 localStorage（用于测试）
  // useEffect(() => {
  //   localStorage.removeItem('ad-modal-closed');
  // }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* 背景遮罩 */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* 弹窗内容 */}
      <div className="relative w-full max-w-md bg-gradient-to-br from-white via-[#FFF9E6] to-white rounded-3xl shadow-2xl overflow-hidden">
        {/* 关闭按钮 */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all hover:scale-110 shadow-md"
          aria-label="关闭"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* 顶部装饰 */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FFC107] via-[#FF9F43] to-[#FFC107]" />

        {/* 内容区域 */}
        <div className="p-8">
          {/* 顶部标签 */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-[#FF9F43]" />
            <span className="text-sm font-semibold text-[#FF9F43] tracking-wider">
              限时活动
            </span>
            <Sparkles className="w-5 h-5 text-[#FF9F43]" />
          </div>

          {/* 标题 */}
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 text-[#2D2D2D] leading-tight">
            三八节特别企划
          </h2>

          {/* 副标题 */}
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-6 bg-gradient-to-r from-[#FF9F43] to-[#FFC107] bg-clip-text text-transparent">
            仿点翠DIY手作体验
          </h3>

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
              href="/contact"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FFC107] to-[#FF9F43] hover:from-[#FFB300] hover:to-[#FF8F33] text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
              onClick={handleClose}
            >
              <Phone className="w-4 h-4" />
              立即预约
            </Link>
            <button
              onClick={handleClose}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold transition-all"
            >
              稍后再说
            </button>
          </div>
        </div>

        {/* 底部装饰 */}
        <div className="px-8 pb-6">
          <div className="text-center text-xs text-gray-500">
            * 活动时间：2025年3月1日 - 3月31日
          </div>
        </div>
      </div>
    </div>
  );
}
