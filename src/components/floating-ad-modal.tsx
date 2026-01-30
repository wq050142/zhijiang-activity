'use client';

import { useEffect, useState } from 'react';
import { X, Sparkles, Calendar, Phone, ChevronUp, Flower2 } from 'lucide-react';
import Link from 'next/link';

export default function FloatingAdModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  // 延迟2秒后显示弹窗
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setIsMinimized(true);
  };

  const handleExpand = () => {
    setIsVisible(true);
    setIsMinimized(false);
  };

  // 缩小到固定位置的按钮（右下角）
  if (isMinimized) {
    return (
      <div className="fixed bottom-12 right-3 z-50">
        {/* 装饰圆点 */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#FFD700] rounded-full animate-pulse shadow-md"></div>
        <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-[#FF69B4] rounded-full animate-bounce shadow-md"></div>
        
        {/* 主按钮 */}
        <button
          onClick={handleExpand}
          className="relative inline-flex items-center gap-2 bg-gradient-to-r from-[#FF1493] via-[#FF69B4] to-[#FF1493] hover:from-[#FF1493] hover:to-[#FF69B4] text-white px-4 py-2 rounded-2xl font-semibold transition-all shadow-2xl hover:shadow-[0_0_20px_rgba(255,105,180,0.6)] hover:scale-105 group overflow-hidden"
        >
          {/* 背景流光效果 */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
          
          {/* 花朵图标 */}
          <Flower2 className="w-5 h-5 animate-[rotate_3s_ease-in-out_infinite]" />
          
          {/* 文字 */}
          <span className="text-xs relative z-10">妇女节活动</span>
          
          {/* 向上箭头 */}
          <ChevronUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
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

      {/* 弹窗内容 - 缩小尺寸 */}
      <div className="relative w-[90vw] md:w-[80vw] lg:max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[70vh] flex flex-col">
        {/* 关闭按钮 */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all hover:scale-110 shadow-md"
          aria-label="关闭"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* 图片区域 - 固定宽高比 */}
        <div className="relative aspect-[4/3] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/点翠.png")' }}>
          {/* 左上角标签和标题 - 向右向下移动 */}
          <div className="absolute top-6 left-6 right-16 z-10">
            {/* 标签 */}
            <div className="inline-flex items-center gap-1.5 bg-[#FF69B4] text-white px-4 py-2 rounded-full mb-3">
              <span className="text-sm font-bold">
                限时团队定制
              </span>
            </div>

            {/* 标题 */}
            <h2 className="text-white text-xl md:text-2xl font-bold leading-tight drop-shadow-lg">
              妇女节仿点翠DIY手作体验
            </h2>
          </div>
        </div>

        {/* 内容区域 - 占1/3高度 */}
        <div className="p-4 flex-1 flex flex-col justify-center">
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

      {/* 自定义动画样式 */}
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes rotate {
          0%, 100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(15deg);
          }
        }
      `}</style>
    </div>
  );
}
