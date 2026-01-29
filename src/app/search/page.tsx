'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Clock, Tag, ArrowRight } from 'lucide-react';
import Navigation from '@/components/navigation';

interface SearchResult {
  type: 'service' | 'case';
  title: string;
  description: string;
  href: string;
  category: string;
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);

  // 模拟搜索数据
  const mockData: SearchResult[] = [
    {
      type: 'service',
      title: '主题党建',
      description: '沉浸式党建体验、红色文化浸润，依托四大场馆资源打造党建新范式',
      href: '/services/party',
      category: '服务'
    },
    {
      type: 'service',
      title: '团建拓展',
      description: '多样化团建活动，提升团队凝聚力和协作能力',
      href: '/services/team',
      category: '服务'
    },
    {
      type: 'service',
      title: '访学培训',
      description: '专业培训课程，助力企业人才培养和发展',
      href: '/services/training',
      category: '服务'
    },
    {
      type: 'service',
      title: '定制活动',
      description: '根据企业需求定制专属活动方案',
      href: '/services/custom',
      category: '服务'
    },
    {
      type: 'case',
      title: '上海银行考古总动员',
      description: '依托博物馆馆藏资源，打造沉浸式"小小考古学家"体验',
      href: '/cases',
      category: '案例'
    },
    {
      type: 'case',
      title: '厦门航空自然VR科技秀',
      description: '将自然生态科普与前沿VR技术完美融合',
      href: '/cases',
      category: '案例'
    },
    {
      type: 'case',
      title: '浙江省财政厅女神节活动',
      description: '专为女性职工定制的"美学疗愈"专场活动',
      href: '/cases',
      category: '案例'
    },
    {
      type: 'case',
      title: '海康威视脆皮打工人养生局',
      description: '针对互联网及科技行业高压人群，定制"身心除锈"的疗愈专场',
      href: '/cases',
      category: '案例'
    }
  ];

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      // 模拟搜索延迟
      const timer = setTimeout(() => {
        const filtered = mockData.filter(item =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
        setIsLoading(false);
      }, 300);

      return () => clearTimeout(timer);
    } else {
      setResults([]);
      setIsLoading(false);
    }
  }, [query]);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navigation />

      <main className="pt-24 pb-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* 搜索标题 */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#333333] mb-2">
              搜索结果
            </h1>
            {query && (
              <p className="text-[#666666]">
                关键词: <span className="font-semibold text-[#333333]">{query}</span>
                <span className="ml-3 text-[#999999]">找到 {results.length} 个结果</span>
              </p>
            )}
          </div>

          {/* 搜索结果 */}
          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-[#FFE15D] border-t-transparent"></div>
              <p className="mt-4 text-[#666666]">搜索中...</p>
            </div>
          ) : query && results.length > 0 ? (
            <div className="space-y-4">
              {results.map((result, index) => (
                <Link
                  key={index}
                  href={result.href}
                  className="block bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#FFE15D]/20 text-[#333333]">
                          <Tag className="h-3 w-3" />
                          {result.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-[#333333] mb-2 group-hover:text-[#FFC107] transition-colors">
                        {result.title}
                      </h3>
                      <p className="text-[#666666] leading-relaxed">
                        {result.description}
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-[#FFC107] flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          ) : query ? (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
                <Search className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-[#333333] mb-3">
                未找到相关结果
              </h3>
              <p className="text-[#666666] mb-6">
                尝试使用其他关键词搜索
              </p>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FFE15D] to-[#FF9F43] hover:shadow-lg text-[#2D2D2D] px-6 py-3 rounded-full font-semibold transition-all hover:scale-105"
              >
                返回首页
              </Link>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
                <Search className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-[#333333] mb-3">
                开始搜索
              </h3>
              <p className="text-[#666666] mb-6">
                输入关键词搜索我们的服务和案例
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="/search?q=党建"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:border-[#FFE15D] hover:bg-[#FFE15D]/10 transition-all text-sm"
                >
                  <Clock className="h-4 w-4" />
                  党建
                </Link>
                <Link
                  href="/search?q=团建"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:border-[#FFE15D] hover:bg-[#FFE15D]/10 transition-all text-sm"
                >
                  <Clock className="h-4 w-4" />
                  团建
                </Link>
                <Link
                  href="/search?q=培训"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:border-[#FFE15D] hover:bg-[#FFE15D]/10 transition-all text-sm"
                >
                  <Clock className="h-4 w-4" />
                  培训
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
