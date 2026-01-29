import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { Building2, Phone, Mail, MapPin, ArrowRight, CheckCircle2, Star, Users, Calendar, Award, BookOpen, Sparkles } from 'lucide-react';
import Navigation from '@/components/navigation';
import OptimizedImage from '@/components/optimized-image';

export const metadata: Metadata = {
  title: '之江文化中心 | 文化赋能 · 企业活动一站式解决方案',
  description: '依托之江文化中心四大场馆资源，为企业提供党建、团建、培训、定制活动一站式服务，打造有文化深度的企业活动新范式。',
  keywords: '之江文化中心,企业活动服务,党建活动,团建活动,杭州企业活动策划,浙江省文化场馆团建',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* 顶部导航栏 */}
      <Navigation />

      {/* Hero 区域 */}
      <section className="pt-28 md:pt-32 pb-12 px-4 md:px-6 relative overflow-hidden min-h-[420px] md:min-h-[480px]">
        {/* 大图横幅背景 */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/首页背景.png")' }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFC107]/10 via-transparent to-[#FFC107]/10"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10 pt-12 md:pt-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-5 text-white leading-tight">
            文化赋能 · 企业活动
            <br />
            <span className="bg-gradient-to-r from-[#FFE15D] to-[#FF9F43] bg-clip-text text-transparent">
              一站式解决方案
            </span>
          </h1>

          <p className="text-base md:text-xl lg:text-2xl text-white/90 mb-3 max-w-3xl mx-auto leading-relaxed font-medium">
            依托之江文化中心，全国最大的省级文化综合体
          </p>
          <p className="text-base md:text-lg lg:text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            打造独具文化深度的党建、团建、商务活动新范式
          </p>

          <div className="flex sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur hover:bg-white/30 text-white px-5 py-2.5 md:px-8 md:py-3 rounded-full text-sm md:text-base font-medium transition-all border border-white/30"
            >
              查看服务详情
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#FFC107] hover:bg-[#FFB300] text-[#2D2D2D] px-5 py-2.5 md:px-8 md:py-3 rounded-full text-sm md:text-base font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              立即咨询
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 品牌介绍 */}
      <section className="py-12 px-4 md:px-6 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <Building2 className="h-6 w-6 text-[#FFC107]" />
                <span className="text-[#FF9F43] font-semibold">关于我们</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold mb-3 text-[#333333]">
                之江文化中心
              </h2>
              <p className="text-sm md:text-lg text-[#666666] mb-4 font-semibold">
                全国最大的省级文化综合体
              </p>
              <div className="mb-6">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 bg-[#FFC107] hover:bg-[#FFD54F] text-[#333333] px-6 py-2.5 rounded-full text-sm md:text-base font-semibold transition-all shadow-md hover:shadow-lg hover:scale-105"
                >
                  了解更多
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="space-y-4 text-[#666666] leading-relaxed">
                <p>
                  之江文化中心位于杭州市西湖区之江板块，是浙江省重点打造的文化地标项目，总建筑面积达32万平方米，是目前全国体量最大的省级现代复合文化综合体。
                </p>
                <p>
                  中心采用"四馆一中心"布局，涵盖浙江图书馆、浙江省博物馆、浙江省非物质文化遗产馆、浙江文学馆四大省级文化场馆，以及之江文化中心研学中心。
                </p>
                <p>
                  由浙江文化空间发展有限公司运营，我们整合"四馆一中心"独特资源，为企事业单位提供高品质、有文化深度的活动服务，让每一次活动都成为文化之旅。
                </p>
              </div>
            </div>

            {/* 场馆图片展示 */}
            <div className="space-y-6 lg:space-y-8">
              {/* 主图片 - 顶部 */}
              <div>
                <div className="aspect-[16/9] lg:aspect-[21/9] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl relative">
                  <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/之江文化中心全景.png")' }}></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFC107]/10 via-transparent to-[#FF9F43]/10"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="text-white text-sm md:text-base font-bold drop-shadow-md bg-black/30 px-3 py-1.5 rounded-full">
                      之江文化中心全貌
                    </span>
                  </div>
                </div>
              </div>

              {/* 四馆一中心图片 - 下方网格 */}
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-4">
                {/* 浙江图书馆 */}
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg relative group">
                  <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/浙江省图书馆.png")' }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="text-white text-xs md:text-sm font-bold drop-shadow-md">浙江图书馆</span>
                  </div>
                </div>

                {/* 浙江省博物馆 */}
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg relative group">
                  <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/浙江省博物馆.png")' }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="text-white text-xs md:text-sm font-bold drop-shadow-md">浙江省博物馆</span>
                  </div>
                </div>

                {/* 浙江省非物质文化遗产馆 */}
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg relative group">
                  <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/浙江省非遗馆.png")' }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="text-white text-xs md:text-sm font-bold drop-shadow-md">浙江省非遗馆</span>
                  </div>
                </div>

                {/* 浙江文学馆 */}
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg relative group">
                  <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/浙江省文学馆.png")' }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="text-white text-xs md:text-sm font-bold drop-shadow-md">浙江文学馆</span>
                  </div>
                </div>

                {/* 公共服务中心 */}
                <div className="hidden lg:block aspect-[4/3] rounded-xl overflow-hidden shadow-lg relative group">
                  <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/研学中心.png")' }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FFC107]/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="flex items-center justify-center">
                      <span className="text-white text-xs md:text-sm font-bold drop-shadow-md">公共服务中心</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 移动端单独显示的公服中心 */}
              <div className="lg:hidden aspect-[4/3] rounded-xl overflow-hidden shadow-lg relative group">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/研学中心.png")' }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#FFC107]/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="flex items-center justify-center">
                    <span className="text-white text-sm md:text-sm font-bold drop-shadow-md">公共服务中心</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心服务概览 */}
      <section id="services" className="py-12 px-4 md:px-6 md:py-16 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Calendar className="h-6 w-6 text-[#FFE15D]" />
              <span className="text-[#FF9F43] font-semibold">核心服务</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#333333]">
              四大服务板块
            </h2>
            <p className="text-sm md:text-lg text-[#666666] max-w-2xl mx-auto">
              依托四大场馆资源，提供全方位企业活动服务
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
            {/* 服务 1 */}
            <Link href="/services/party" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="aspect-[16/10] bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{ backgroundImage: 'url("/主题党建.png")' }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl md:text-3xl font-bold text-white mb-2">主题党建</h3>
                  </div>
                </div>
                <div className="p-4 md:p-5">
                  <p className="text-[#666666] mb-3 leading-relaxed text-sm font-medium">
                    沉浸式党建体验 · 红色文化浸润
                  </p>
                  <div className="space-y-2 text-xs text-[#666666]">
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#FFC107] flex-shrink-0" />
                      沉浸式党课
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#FFC107] flex-shrink-0" />
                      红色文化体验
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#FFC107] flex-shrink-0" />
                      党建主题研学
                    </p>
                  </div>
                  <div className="mt-4 bg-white border-2 border-[#FFC107] text-[#FFC107] font-bold flex items-center justify-center gap-2 px-4 py-3 rounded-full transition-all hover:bg-[#FFC107] hover:text-white text-sm md:text-base">
                    了解更多
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>

            {/* 服务 2 */}
            <Link href="/services/team" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="aspect-[16/10] bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{ backgroundImage: 'url("/团建拓展.png")' }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl md:text-3xl font-bold text-white mb-2">团建拓展</h3>
                  </div>
                </div>
                <div className="p-4 md:p-5">
                  <p className="text-[#666666] mb-3 leading-relaxed text-sm font-medium">
                    文化沉浸团建 · 非遗手作体验
                  </p>
                  <div className="space-y-2 text-xs text-[#666666]">
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#FFC107] flex-shrink-0" />
                      文化沉浸体验
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#FFC107] flex-shrink-0" />
                      非遗手作体验
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#FFC107] flex-shrink-0" />
                      人文团队共创
                    </p>
                  </div>
                  <div className="mt-4 bg-white border-2 border-[#FFC107] text-[#FFC107] font-bold flex items-center justify-center gap-2 px-4 py-3 rounded-full transition-all hover:bg-[#FFC107] hover:text-white text-sm md:text-base">
                    了解更多
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>

            {/* 服务 3 */}
            <Link href="/services/training" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="aspect-[16/10] bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{ backgroundImage: 'url("/访学培训.png")' }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl md:text-3xl font-bold text-white mb-2">访学培训</h3>
                  </div>
                </div>
                <div className="p-4 md:p-5">
                  <p className="text-[#666666] mb-3 leading-relaxed text-sm font-medium">
                    名家讲座引领 · 专业课程赋能
                  </p>
                  <div className="space-y-2 text-xs text-[#666666]">
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#FFC107] flex-shrink-0" />
                      名家讲座
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#FFC107] flex-shrink-0" />
                      专业培训
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#FFC107] flex-shrink-0" />
                      行业交流
                    </p>
                  </div>
                  <div className="mt-4 bg-white border-2 border-[#FFC107] text-[#FFC107] font-bold flex items-center justify-center gap-2 px-4 py-3 rounded-full transition-all hover:bg-[#FFC107] hover:text-white text-sm md:text-base">
                    了解更多
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>

            {/* 服务 4 */}
            <Link href="/services/custom" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="aspect-[16/10] bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{ backgroundImage: 'url("/定制活动.png")' }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl md:text-3xl font-bold text-white mb-2">定制活动</h3>
                  </div>
                </div>
                <div className="p-4 md:p-5">
                  <p className="text-[#666666] mb-3 leading-relaxed text-sm font-medium">
                    高端商务定制 · 尊享文化礼遇
                  </p>
                  <div className="space-y-2 text-xs text-[#666666]">
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#FFC107] flex-shrink-0" />
                      高端商务活动
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#FFC107] flex-shrink-0" />
                      品牌发布会
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#FFC107] flex-shrink-0" />
                      VIP客户答谢
                    </p>
                  </div>
                  <div className="mt-4 bg-white border-2 border-[#FFC107] text-[#FFC107] font-bold flex items-center justify-center gap-2 px-4 py-3 rounded-full transition-all hover:bg-[#FFC107] hover:text-white text-sm md:text-base">
                    了解更多
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 合作伙伴滚动 */}
      <section className="py-10 md:py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#333333] mb-2">合作伙伴</h2>
            <p className="text-[#666666]">已为众多知名企业提供服务</p>
          </div>

          {/* Logo墙展示 */}
          <div className="mb-6 md:mb-8">
            <img
              src="/logo.png"
              alt="合作伙伴logo墙"
              className="w-full h-auto rounded-2xl"
            />
          </div>

          <div className="overflow-hidden">
            <div className="flex items-center gap-2 md:gap-3 lg:gap-4 animate-marquee-fast whitespace-nowrap">
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  {[
                    '中共浙江省委党校',
                    '浙江省教育厅',
                    '浙江省财政厅',
                    '浙江省直属机关工会',
                    '浙江广播电视集团',
                    '浙江省大数据发展管理局',
                    '浙江省档案馆',
                    '杭州市城管局',
                    '杭州市上城区法院',
                    '杭州市西湖区总工会'
                  ].map((partner, j) => (
                    <div
                      key={`${i}-${j}`}
                      className="flex items-center gap-1.5 md:gap-2 px-1.5 md:px-2 py-1 md:py-1.5 min-w-max"
                    >
                      <span className="text-[#666666] font-medium text-sm md:text-base whitespace-nowrap">{partner}</span>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
            <div className="flex items-center gap-3 md:gap-4 lg:gap-5 animate-marquee-medium whitespace-nowrap mt-1">
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  {[
                    '杭州市萧山区团委',
                    '德清县关工委',
                    '浙江大学',
                    '西湖大学',
                    '浙江工业大学',
                    '光明日报',
                    '浙教集团',
                    '浙江数智交院',
                    '厦门航空',
                    '海康威视'
                  ].map((partner, j) => (
                    <div
                      key={`reverse-${i}-${j}`}
                      className="flex items-center gap-2 md:gap-2.5 px-2 md:px-2.5 py-1 md:py-1.5 min-w-max"
                    >
                      <span className="text-[#666666] font-medium text-sm md:text-base whitespace-nowrap">{partner}</span>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
            <div className="flex items-center gap-4 md:gap-5 lg:gap-6 animate-marquee-slow whitespace-nowrap mt-1">
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  {[
                    '博世电动',
                    '华为问界',
                    '北京奔驰',
                    '华润置地',
                    '银泰集团',
                    '绿城物业',
                    '宝龙集团',
                    '富春山居集团',
                    '建发集团',
                    '中国移动'
                  ].map((partner, j) => (
                    <div
                      key={`third-${i}-${j}`}
                      className="flex items-center gap-2.5 md:gap-3 px-2.5 md:px-3 py-1 md:py-1.5 min-w-max"
                    >
                      <span className="text-[#666666] font-medium text-sm md:text-base whitespace-nowrap">{partner}</span>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
            <div className="flex items-center gap-2.5 md:gap-3.5 lg:gap-4.5 animate-marquee-extra-slow whitespace-nowrap mt-0.5">
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  {[
                    '传播大脑',
                    '上海市政院',
                    '交通银行',
                    '上海银行',
                    '农商银行',
                    '杭州联合银行',
                    '工商银行',
                    '中宏保险',
                    '南银法巴消费金融',
                    '更多合作伙伴'
                  ].map((partner, j) => (
                    <div
                      key={`fourth-${i}-${j}`}
                      className="flex items-center gap-1.5 md:gap-2 px-1.5 md:px-2 py-1 md:py-1.5 min-w-max"
                    >
                      <span className="text-[#666666] font-medium text-sm md:text-base whitespace-nowrap">{partner}</span>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 精选案例 */}
      <section className="py-12 px-4 md:px-6 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#333333]">
              精选案例
            </h2>
            <p className="text-sm md:text-lg text-[#666666] max-w-2xl mx-auto">
              见证我们的专业实力，打造高品质活动体验
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {/* 案例 1 */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="aspect-[16/10] relative overflow-hidden">
                <img
                  src="/上海银行考古.png"
                  alt="上海银行考古总动员"
                  className="w-full h-full object-cover brightness-[1.15]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 right-2 md:right-3 z-10">
                  <span className="inline-block px-2 md:px-3 py-1 bg-white/90 backdrop-blur text-[#333333] text-[10px] md:text-xs font-bold rounded-full mb-2">
                    儿童节活动
                  </span>
                  <h3 className="text-white text-lg md:text-xl font-bold line-clamp-2 drop-shadow-md">上海银行考古总动员</h3>
                </div>
              </div>
              <div className="p-3 md:p-4">
                <p className="text-[#666666] mb-3 md:mb-4 text-sm md:text-base leading-relaxed line-clamp-2">
                  依托博物馆馆藏资源，打造沉浸式"小小考古学家"体验，通过模拟探方挖掘与文物修复，让亲子家庭在动手实践中触碰历史。
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-block px-2 py-1 bg-[#FFE15D]/20 text-[#333333] text-xs rounded-full">镇馆之宝</span>
                  <span className="inline-block px-2 py-1 bg-[#FFE15D]/20 text-[#333333] text-xs rounded-full">考古体验</span>
                  <span className="inline-block px-2 py-1 bg-[#FFE15D]/20 text-[#333333] text-xs rounded-full">文物修复</span>
                </div>
              </div>
            </div>

            {/* 案例 2 */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="aspect-[16/10] relative overflow-hidden">
                <img
                  src="/MBTI青年交友1.jpg"
                  alt="绿城MBTI青年交友活动"
                  className="w-full h-full object-cover brightness-[1.15]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 right-2 md:right-3 z-10">
                  <span className="inline-block px-2 md:px-3 py-1 bg-white/90 backdrop-blur text-[#333333] text-[10px] md:text-xs font-bold rounded-full mb-2">
                    浪漫之约
                  </span>
                  <h3 className="text-white text-lg md:text-xl font-bold line-clamp-2 drop-shadow-md">绿城MBTI青年交友活动</h3>
                </div>
              </div>
              <div className="p-3 md:p-4">
                <p className="text-[#666666] mb-3 md:mb-4 text-sm md:text-base leading-relaxed line-clamp-2">
                  紧扣年轻人社交潮流，引入MBTI性格测试与即兴喜剧元素，打造轻松、幽默、高效的"快乐社交"场域。
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-block px-2 py-1 bg-[#FFE15D]/20 text-[#333333] text-xs rounded-full">MBTI测试</span>
                  <span className="inline-block px-2 py-1 bg-[#FFE15D]/20 text-[#333333] text-xs rounded-full">即兴喜剧</span>
                  <span className="inline-block px-2 py-1 bg-[#FFE15D]/20 text-[#333333] text-xs rounded-full">快乐社交</span>
                </div>
              </div>
            </div>

            {/* 案例 3 */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="aspect-[16/10] relative overflow-hidden">
                <img
                  src="/读书会1.jpg"
                  alt="浙商证券青年读书会"
                  className="w-full h-full object-cover brightness-[1.15]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 right-2 md:right-3 z-10">
                  <span className="inline-block px-2 md:px-3 py-1 bg-white/90 backdrop-blur text-[#333333] text-[10px] md:text-xs font-bold rounded-full mb-2">
                    学习培训
                  </span>
                  <h3 className="text-white text-lg md:text-xl font-bold line-clamp-2 drop-shadow-md">浙商证券青年读书会</h3>
                </div>
              </div>
              <div className="p-3 md:p-4">
                <p className="text-[#666666] mb-3 md:mb-4 text-sm md:text-base leading-relaxed line-clamp-2">
                  为企业青年员工搭建深度思想交流平台，不仅是知识的输入，更是观点的碰撞，促进员工认知升级。
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-block px-2 py-1 bg-[#FFE15D]/20 text-[#333333] text-xs rounded-full">读书会</span>
                  <span className="inline-block px-2 py-1 bg-[#FFE15D]/20 text-[#333333] text-xs rounded-full">思想交流</span>
                  <span className="inline-block px-2 py-1 bg-[#FFE15D]/20 text-[#333333] text-xs rounded-full">认知升级</span>
                </div>
              </div>
            </div>

            {/* 案例 4 */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="aspect-[16/10] relative overflow-hidden">
                <img
                  src="/浙江省财政厅女生节活动.png"
                  alt="浙江省财政厅女神节活动"
                  className="w-full h-full object-cover brightness-[1.15]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 right-2 md:right-3 z-10">
                  <span className="inline-block px-2 md:px-3 py-1 bg-white/90 backdrop-blur text-[#333333] text-[10px] md:text-xs font-bold rounded-full mb-2">
                    妇女节团建活动
                  </span>
                  <h3 className="text-white text-lg md:text-xl font-bold line-clamp-2 drop-shadow-md">浙江省财政厅女神节活动</h3>
                </div>
              </div>
              <div className="p-3 md:p-4">
                <p className="text-[#666666] mb-3 md:mb-4 text-sm md:text-base leading-relaxed line-clamp-2">
                  专为女性职工定制的"美学疗愈"专场，将传统非遗技艺与现代数字艺术展陈相结合，展现新时代女性风采。
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-block px-2 py-1 bg-[#FFE15D]/20 text-[#333333] text-xs rounded-full">非遗技艺</span>
                  <span className="inline-block px-2 py-1 bg-[#FFE15D]/20 text-[#333333] text-xs rounded-full">数字艺术</span>
                  <span className="inline-block px-2 py-1 bg-[#FFE15D]/20 text-[#333333] text-xs rounded-full">美学疗愈</span>
                </div>
              </div>
            </div>

            {/* 案例 5 */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="aspect-[16/10] relative overflow-hidden">
                <img
                  src="/AITO问界车主活动.png"
                  alt="AITO问界车主活动"
                  className="w-full h-full object-cover brightness-[1.15]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 right-2 md:right-3 z-10">
                  <span className="inline-block px-2 md:px-3 py-1 bg-white/90 backdrop-blur text-[#333333] text-[10px] md:text-xs font-bold rounded-full mb-2">
                    VIP客户活动
                  </span>
                  <h3 className="text-white text-lg md:text-xl font-bold line-clamp-2 drop-shadow-md">AITO问界车主活动</h3>
                </div>
              </div>
              <div className="p-3 md:p-4">
                <p className="text-[#666666] mb-3 md:mb-4 text-sm md:text-base leading-relaxed line-clamp-2">
                  针对高端车主群体打造的专属非遗体验，将品牌理念与传统工艺深度结合，强化车主对品牌的文化认同感。
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-block px-2 py-1 bg-[#FFE15D]/20 text-[#333333] text-xs rounded-full">非遗定制</span>
                  <span className="inline-block px-2 py-1 bg-[#FFE15D]/20 text-[#333333] text-xs rounded-full">品牌理念</span>
                  <span className="inline-block px-2 py-1 bg-[#FFE15D]/20 text-[#333333] text-xs rounded-full">尊享服务</span>
                </div>
              </div>
            </div>

            {/* 案例 6 */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="aspect-[16/10] relative overflow-hidden">
                <img
                  src="/海康威视脆皮打工人养生局.png"
                  alt="海康威视脆皮打工人养生局"
                  className="w-full h-full object-cover brightness-[1.15]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 right-2 md:right-3 z-10">
                  <span className="inline-block px-2 md:px-3 py-1 bg-white/90 backdrop-blur text-[#333333] text-[10px] md:text-xs font-bold rounded-full mb-2">
                    养生团建
                  </span>
                  <h3 className="text-white text-lg md:text-xl font-bold line-clamp-2 drop-shadow-md">海康威视脆皮打工人养生局</h3>
                </div>
              </div>
              <div className="p-3 md:p-4">
                <p className="text-[#666666] mb-3 md:mb-4 text-sm md:text-base leading-relaxed line-clamp-2">
                  针对互联网及科技行业高压人群，定制"身心除锈"的疗愈专场，融合音疗放松与非遗慢生活体验。
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-block px-2 py-1 bg-[#FFE15D]/20 text-[#333333] text-xs rounded-full">养生疗愈</span>
                  <span className="inline-block px-2 py-1 bg-[#FFE15D]/20 text-[#333333] text-xs rounded-full">音疗放松</span>
                  <span className="inline-block px-2 py-1 bg-[#FFE15D]/20 text-[#333333] text-xs rounded-full">非遗体验</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/cases"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#FFE15D] to-[#FF9F43] text-[#2D2D2D] px-6 py-4 md:px-10 md:py-5 rounded-full text-base md:text-xl font-bold transition-all shadow-xl hover:shadow-2xl hover:scale-110"
            >
              查看更多案例
              <ArrowRight className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA 区域 */}
      <section className="py-12 px-4 md:px-6 md:py-16 bg-gradient-to-br from-[#FFC107] to-[#FF9F43]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white">
            文化赋能·企业活动
          </h2>
          <div className="text-sm md:text-lg text-white/90 mb-8 max-w-2xl mx-auto space-y-2">
            <p>依托之江文化中心四大场馆资源</p>
            <p>为您打造独一无二的文化体验</p>
          </div>
          <div className="flex flex-col items-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-white">
              <Phone className="h-5 w-5 text-white" />
              <span className="text-lg font-medium">191-0658-3798</span>
            </div>
            <img
              src="/xiaoxuemei.jpg"
              alt="小助理微信二维码"
              className="w-32 h-32 rounded-lg shadow-lg object-cover"
            />
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white hover:shadow-xl text-[#FFC107] px-6 py-3 md:px-10 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all shadow-lg hover:scale-105 border-2 border-white"
          >
            立即咨询
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="relative text-white py-8 px-6 md:py-12">
        {/* 背景图 */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/首页背景.png")' }}>
          <div className="absolute inset-0 bg-[#333333]/90"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 mb-6 md:mb-8">
            <div className="col-span-2 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/assets/之江文化中心logo.png"
                  alt="之江文化中心 logo"
                  className="h-10 md:h-14 w-auto"
                />
                <div>
                  <span className="text-xl font-bold">之江文化中心</span>
                  <p className="text-xs text-[#FFC107]">企业活动服务</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-[#FFC107]">服务内容</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><Link href="/services/party" className="hover:text-white transition-colors">主题党建</Link></li>
                <li><Link href="/services/team" className="hover:text-white transition-colors">团建拓展</Link></li>
                <li><Link href="/services/training" className="hover:text-white transition-colors">访学培训</Link></li>
                <li><Link href="/services/custom" className="hover:text-white transition-colors">定制活动</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-[#FFC107]">联系方式</h3>
              <ul className="space-y-3 text-white/70 text-sm">
                <li className="flex items-start gap-2">
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#FFC107]" />
                  <span>191-0658-3798</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#FFC107]" />
                  <span>浙江省杭州市西湖区<br />之江文化中心</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/50 text-sm">
              © 2024 浙江文化空间发展有限公司 | 之江文化中心企业活动服务 | 版权所有
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
