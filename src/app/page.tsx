import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, Phone, Mail, MapPin, ArrowRight, CheckCircle2, Star, Users, Calendar, Award, BookOpen, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: '之江文化中心 | 文化赋能 · 企业活动一站式解决方案',
  description: '依托之江文化中心四大场馆资源，为企业提供党建、团建、培训、定制活动一站式服务，打造有文化深度的企业活动新范式。',
  keywords: '之江文化中心,企业活动服务,党建活动,团建活动,杭州企业活动策划,浙江省文化场馆团建',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* 顶部导航栏 */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 md:px-6 md:py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/之江文化中心logo_画板 1.png"
              alt="之江文化中心 logo"
              className="h-12 md:h-16 w-auto"
            />
            <div>
              <span className="text-lg md:text-2xl font-bold text-[#2D2D2D]">之江文化中心</span>
              <p className="text-xs text-[#6B7280]">企业活动服务</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link href="/about" className="text-[#2D2D2D] hover:text-[#FFE15D] transition-colors font-medium">
              关于我们
            </Link>
            <Link href="/services/party" className="text-[#2D2D2D] hover:text-[#FFE15D] transition-colors font-medium">
              主题党建
            </Link>
            <Link href="/services/team" className="text-[#2D2D2D] hover:text-[#FFE15D] transition-colors font-medium">
              团建拓展
            </Link>
            <Link href="/services/training" className="text-[#2D2D2D] hover:text-[#FFE15D] transition-colors font-medium">
              访学培训
            </Link>
            <Link href="/services/custom" className="text-[#2D2D2D] hover:text-[#FFE15D] transition-colors font-medium">
              定制活动
            </Link>
            <Link href="/cases" className="text-[#2D2D2D] hover:text-[#FFE15D] transition-colors font-medium">
              案例中心
            </Link>
            <Link href="/contact" className="text-[#2D2D2D] hover:text-[#FFE15D] transition-colors font-medium">
              联系我们
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:191-0658-3798" className="hidden md:flex items-center gap-2 text-[#2D2D2D] font-medium">
              <Phone className="h-4 w-4" />
              191-0658-3798
            </a>
            <Link
              href="/contact"
              className="bg-[#FFC107] hover:shadow-lg text-white px-6 py-2 rounded-full transition-all font-semibold hover:scale-105"
            >
              立即咨询
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero 区域 */}
      <section className="pt-24 pb-8 px-4 md:px-6 md:pb-12 relative overflow-hidden min-h-[420px] md:min-h-[480px]">
        {/* 大图横幅背景 */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/首页背景.png")' }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFC107]/10 via-transparent to-[#FFC107]/10"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10 pt-8 md:pt-12">
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
              <h2 className="text-2xl md:text-4xl font-bold mb-6 text-[#333333]">
                之江文化中心
              </h2>
              <p className="text-sm md:text-lg text-[#666666] mb-6 font-semibold">
                全国最大的省级文化综合体
              </p>
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
            <div className="lg:grid lg:grid-cols-5 lg:gap-6 space-y-4 lg:space-y-0">
              {/* 主图片 - 左侧大图 */}
              <div className="lg:col-span-3">
                <div className="aspect-[16/9] lg:aspect-[4/3] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl relative">
                  <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/之江文化中心全景.png")' }}></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFC107]/10 via-transparent to-[#FF9F43]/10"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-[#FFC107] text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                      之江文化中心
                    </span>
                  </div>
                </div>
              </div>

              {/* 四馆一中心小图 - 右侧网格 */}
              <div className="lg:col-span-2 grid grid-cols-2 gap-3 relative">
                {/* 浙江图书馆 */}
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg relative group">
                  <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/浙江省图书馆.png")' }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="text-white text-xs font-bold drop-shadow-md">浙江图书馆</span>
                  </div>
                </div>

                {/* 浙江省博物馆 */}
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg relative group">
                  <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/浙江省博物馆.png")' }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-auto right-2 text-right">
                    <span className="text-white text-xs font-bold drop-shadow-md">浙江省博物馆</span>
                  </div>
                </div>

                {/* 浙江省非物质文化遗产馆 */}
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg relative group">
                  <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/浙江省非遗馆.png")' }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="text-white text-xs font-bold drop-shadow-md">浙江省非物质文化遗产馆</span>
                  </div>
                </div>

                {/* 浙江文学馆 */}
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg relative group">
                  <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/浙江省文学馆.png")' }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-auto right-2 text-right">
                    <span className="text-white text-xs font-bold drop-shadow-md">浙江文学馆</span>
                  </div>
                </div>

                {/* 公共服务中心 - 圆形居中覆盖 */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
                    <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl border-4 border-white/90">
                      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/研学中心.png")' }}></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-full"></div>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                      <span className="text-white text-xs md:text-sm font-bold drop-shadow-md bg-black/50 px-3 py-1.5 rounded-full">
                        公共服务中心
                      </span>
                    </div>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            {/* 服务 1 */}
            <Link href="/services/party" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="aspect-[4/3] bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{ backgroundImage: 'url("/主题党建.png")' }}>
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
                <div className="aspect-[4/3] bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{ backgroundImage: 'url("/团建拓展.png")' }}>
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
                <div className="aspect-[4/3] bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{ backgroundImage: 'url("/访学培训.png")' }}>
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
                <div className="aspect-[4/3] bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{ backgroundImage: 'url("/定制活动.png")' }}>
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
                <>
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
                </>
              ))}
            </div>
            <div className="flex items-center gap-3 md:gap-4 lg:gap-5 animate-marquee-medium whitespace-nowrap mt-1">
              {[...Array(2)].map((_, i) => (
                <>
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
                </>
              ))}
            </div>
            <div className="flex items-center gap-4 md:gap-5 lg:gap-6 animate-marquee-slow whitespace-nowrap mt-1">
              {[...Array(2)].map((_, i) => (
                <>
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
                </>
              ))}
            </div>
            <div className="flex items-center gap-2.5 md:gap-3.5 lg:gap-4.5 animate-marquee-extra-slow whitespace-nowrap mt-0.5">
              {[...Array(2)].map((_, i) => (
                <>
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
                </>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
            {/* 案例 1 */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-50">
                  <BookOpen className="h-16 w-16 md:h-20 md:w-20 text-white" />
                </div>
                <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4">
                  <span className="px-2 md:px-3 py-1 bg-white/90 backdrop-blur text-[#333333] text-[10px] md:text-xs font-bold rounded-full">
                    VIP活动
                  </span>
                </div>
              </div>
              <div className="p-3 md:p-4">
                <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2 text-[#333333]">上海银行考古活动</h3>
                <p className="text-[#666666] mb-2 md:mb-3 text-[10px] md:text-xs leading-relaxed line-clamp-2">
                  探索千年文明 · 传承文化力量。组织VIP客户参与考古研学活动。
                </p>
                <Link href="/cases/shanghai-bank" className="text-[#FFC107] font-semibold flex items-center gap-2 group-hover:gap-4 transition-all text-xs md:text-sm">
                  查看详情
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                </Link>
              </div>
            </div>

            {/* 案例 2 */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#2D2D2D] to-[#4B5563] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-50">
                  <Users className="h-16 w-16 md:h-20 md:w-20 text-white" />
                </div>
                <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4">
                  <span className="px-2 md:px-3 py-1 bg-white/90 backdrop-blur text-[#333333] text-[10px] md:text-xs font-bold rounded-full">
                    团建活动
                  </span>
                </div>
              </div>
              <div className="p-3 md:p-4">
                <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2 text-[#333333]">海康威视养生局</h3>
                <p className="text-[#666666] mb-2 md:mb-3 text-[10px] md:text-xs leading-relaxed line-clamp-2">
                  中医文化溯源 · 健康生活探索。结合博物馆中医文化展区资源。
                </p>
                <Link href="/cases/hikvision" className="text-[#FFC107] font-semibold flex items-center gap-2 group-hover:gap-4 transition-all text-xs md:text-sm">
                  查看详情
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                </Link>
              </div>
            </div>

            {/* 案例 3 */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#6B7280] to-[#4B5563] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-50">
                  <Calendar className="h-16 w-16 md:h-20 md:w-20 text-white" />
                </div>
                <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4">
                  <span className="px-2 md:px-3 py-1 bg-white/90 backdrop-blur text-[#333333] text-[10px] md:text-xs font-bold rounded-full">
                    年会活动
                  </span>
                </div>
              </div>
              <div className="p-3 md:p-4">
                <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2 text-[#333333]">蒙牛迈胜年会</h3>
                <p className="text-[#666666] mb-2 md:mb-3 text-[10px] md:text-xs leading-relaxed line-clamp-2">
                  品牌文化融合 · 年度盛典呈现。将蒙牛品牌文化与传统艺术元素。
                </p>
                <Link href="/cases/mengniu" className="text-[#FFC107] font-semibold flex items-center gap-2 group-hover:gap-4 transition-all text-xs md:text-sm">
                  查看详情
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/cases"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FFE15D] to-[#FF9F43] text-[#2D2D2D] px-5 py-2.5 md:px-8 md:py-4 rounded-full text-sm md:text-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              查看更多案例
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA 区域 */}
      <section className="py-12 px-4 md:px-6 md:py-16 bg-gradient-to-br from-[#FFC107] to-[#FF9F43]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white">
            让文化赋能您的企业活动
          </h2>
          <p className="text-sm md:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            依托之江文化中心四大场馆资源，为您打造独一无二的文化体验
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 text-white">
              <Phone className="h-5 w-5 text-white" />
              <span className="text-lg font-medium">191-0658-3798</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/50"></div>
            <div className="flex items-center gap-2 text-white">
              <Mail className="h-5 w-5 text-white" />
              <span className="text-lg">service@zhijiang-culture.com</span>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white hover:shadow-xl text-[#FFC107] px-6 py-3 md:px-10 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all shadow-lg hover:scale-105 border-2 border-white"
          >
            立即获取策划方案
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-[#333333] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/之江文化中心logo_画板 1.png"
                  alt="之江文化中心 logo"
                  className="h-10 w-auto"
                />
                <div>
                  <span className="text-xl font-bold">之江文化中心</span>
                  <p className="text-xs text-[#FFC107]">企业活动服务</p>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                依托四大场馆资源，为企业提供高品质、有文化深度的活动服务
              </p>
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
              <h3 className="text-lg font-bold mb-4 text-[#FFC107]">关于我们</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><Link href="/about" className="hover:text-white transition-colors">品牌故事</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">场馆资源</Link></li>
                <li><Link href="/cases" className="hover:text-white transition-colors">成功案例</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">联系我们</Link></li>
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
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#FFC107]" />
                  <span>service@zhijiang-culture.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#FFC107]" />
                  <span>浙江省杭州市西湖区<br />之江文化中心研学中心</span>
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
