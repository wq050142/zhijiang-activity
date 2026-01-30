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
      // 延迟 5 秒后显示弹窗
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5000);
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
        <div className="aspect-[4/3] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/点翠.png")' }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>

        {/* 内容区域 */}
        <div className="p-6">
          {/* 顶部标签 */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-[#FF9F43]" />
            <span className="text-xs font-semibold text-[#FF9F43] tracking-wider">
              限时活动
            </span>
            <Sparkles className="w-4 h-4 text-[#FF9F43]" />
          </div>

          {/* 标题 */}
          <h2 className="text-xl md:text-2xl font-bold text-center mb-4 text-[#2D2D2D] leading-tight">
            三八节仿点翠DIY手作体验
          </h2>

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
