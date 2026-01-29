'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Phone, Menu, X, Search } from 'lucide-react';
import { useState, FormEvent } from 'react';
import OptimizedImage from './optimized-image';

interface NavigationProps {
  currentPath?: string;
}

export default function Navigation({ currentPath }: NavigationProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 md:px-6 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <OptimizedImage
            src="/之江文化中心logo_画板 1.png"
            alt="之江文化中心 logo"
            width={80}
            height={80}
            className="h-14 md:h-20 w-auto"
            priority
            sizes="(max-width: 768px) 56px, 80px"
          />
          <div>
            <span className="text-lg md:text-2xl font-bold text-[#2D2D2D]">之江文化中心</span>
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
                  ? 'text-[#FFE15D] font-bold'
                  : 'text-[#2D2D2D] hover:text-[#FFE15D]'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Search Button */}
          <button
            onClick={() => {
              if (window.innerWidth >= 1024) {
                setSearchOpen(!searchOpen);
              } else {
                // 移动端直接打开移动菜单并聚焦到搜索框
                setMobileMenuOpen(true);
              }
            }}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:border-[#FFE15D] hover:bg-[#FFE15D]/10 transition-all"
            aria-label="搜索"
          >
            <Search className="h-5 w-5 text-[#2D2D2D]" />
          </button>

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

      {/* Search Bar */}
      {searchOpen && (
        <div className="border-t border-gray-200 bg-white/95 backdrop-blur-md px-4 py-4">
          <form onSubmit={handleSearch} className="max-w-7xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜索服务、案例、活动..."
                className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-full border-2 border-transparent focus:border-[#FFE15D] focus:bg-white focus:outline-none transition-all"
                autoFocus
              />
            </div>
          </form>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="px-3 py-3 space-y-1">
            {/* Mobile Search */}
            <div className="relative mb-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜索..."
                className="w-full pl-10 pr-3 py-2.5 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFE15D]/30"
              />
            </div>

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg transition-colors font-medium text-sm ${
                  isActive(item.href)
                    ? 'bg-[#FFE15D]/20 text-[#FFE15D]'
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
