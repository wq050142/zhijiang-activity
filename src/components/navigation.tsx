'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import OptimizedImage from './optimized-image';

interface NavigationProps {
  currentPath?: string;
}

export default function Navigation({ currentPath }: NavigationProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: '关于我们', href: '/about', icon: null },
    { name: '主题党建', href: '/services/party', icon: null },
    { name: '团建拓展', href: '/services/team', icon: null },
    { name: '访学培训', href: '/services/training', icon: null },
    { name: '定制活动', href: '/services/custom', icon: null },
    { name: '案例中心', href: '/cases', icon: null },
    { name: '联系我们', href: '/contact', icon: null },
  ];

  const isActive = (href: string) => {
    const current = currentPath || pathname;
    if (href === '/') return current === '/';
    return current.startsWith(href);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 py-0.5 md:px-6 md:py-0.75 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <OptimizedImage
            src="/assets/之江文化中心logo.png"
            alt="之江文化中心 logo"
            width={80}
            height={80}
            className="h-10 md:h-14 w-auto mt-2 md:mt-3"
            priority
            sizes="(max-width: 768px) 40px, 56px"
          />
          <div>
            <span className="text-xl md:text-2xl font-bold text-[#2D2D2D]">之江文化中心</span>
            <p className="text-xs text-[#6B7280]">企业活动服务</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors font-medium ${
                isActive(item.href)
                  ? 'text-[#D97706] font-bold'
                  : 'text-[#2D2D2D] hover:text-[#D97706]'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <a href="tel:191-0658-3798" className="hidden md:flex items-center gap-2 text-[#2D2D2D] font-medium">
            <Phone className="h-4 w-4" />
            191-0658-3798
          </a>
          <Link
            href="/contact"
            className="hidden md:inline-flex bg-gradient-to-r from-[#FFE15D] to-[#FF9F43] hover:shadow-lg text-[#2D2D2D] px-6 py-2 rounded-full transition-all font-semibold hover:scale-105"
          >
            立即咨询
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#2D2D2D]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden border-t border-gray-200"
          style={{ backgroundColor: 'rgba(243, 244, 246, 0.3)' }}
        >
          <div className="px-3 py-3 space-y-1">
            {/* 首页选项 */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-lg transition-colors font-medium text-sm ${
                isActive('/') && pathname === '/'
                  ? 'bg-[#FFE15D]/20 text-[#D97706]'
                  : 'text-[#2D2D2D] hover:bg-gray-100'
              }`}
            >
              首页
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg transition-colors font-medium text-sm ${
                  isActive(item.href)
                    ? 'bg-[#FFE15D]/20 text-[#D97706]'
                    : 'text-[#2D2D2D] hover:bg-gray-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 mt-2 border-t border-gray-200 space-y-1">
              <a
                href="tel:191-0658-3798"
                className="flex items-center gap-2 px-3 py-2 text-[#2D2D2D] font-medium text-sm"
              >
                <Phone className="h-4 w-4" />
                191-0658-3798
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block mt-1 text-center w-full bg-gradient-to-r from-[#FFE15D] to-[#FF9F43] text-[#2D2D2D] px-6 py-2.5 rounded-lg font-semibold text-sm hover:shadow-md transition-shadow"
              >
                立即咨询
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
