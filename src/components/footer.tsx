import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';
import OptimizedImage from './optimized-image';

export default function Footer() {
  return (
    <footer className="bg-[#2D2D2D] text-white pt-8 pb-8 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 mb-6 md:mb-8">
          {/* Logo */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <OptimizedImage
                src="/assets/之江文化中心logo.png"
                alt="之江文化中心 logo"
                width={80}
                height={80}
                className="h-10 md:h-14 w-auto"
                priority
                sizes="(max-width: 768px) 40px, 56px"
              />
              <div>
                <span className="text-xl font-bold">之江文化中心</span>
                <p className="text-xs text-[#FFC107]">企业活动服务</p>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              依托之江文化中心资源，提供主题党建、团建拓展、访学培训、定制活动等全方位企业活动服务，助力企业文化建设和团队发展。
            </p>
          </div>

          {/* 服务内容 */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#FFC107]">服务内容</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <Link href="/services/party" className="hover:text-white transition-colors">
                  主题党建
                </Link>
              </li>
              <li>
                <Link href="/services/team" className="hover:text-white transition-colors">
                  团建拓展
                </Link>
              </li>
              <li>
                <Link href="/services/training" className="hover:text-white transition-colors">
                  访学培训
                </Link>
              </li>
              <li>
                <Link href="/services/custom" className="hover:text-white transition-colors">
                  定制活动
                </Link>
              </li>
              <li>
                <Link href="/cases" className="hover:text-white transition-colors">
                  案例中心
                </Link>
              </li>
            </ul>
          </div>

          {/* 关于我们 */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#FFC107]">关于我们</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#FFC107]">联系方式</h3>
            <ul className="space-y-3 text-white/70 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#FFC107]" />
                <span>191-0658-3798</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#FFC107]" />
                <span className="leading-relaxed">
                  浙江省杭州市西湖区
                  <br />
                  之江文化中心
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/50 text-sm">
            © 2024 浙江文化空间发展有限公司 | 之江文化中心企业活动服务 | 版权所有
          </p>
        </div>
      </div>
    </footer>
  );
}
