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
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-xl flex items-center justify-center">
              <Building2 className="h-5 w-5 md:h-6 md:w-6 text-white" />
            </div>
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
              className="bg-gradient-to-r from-[#FFE15D] to-[#FF9F43] hover:shadow-lg text-[#2D2D2D] px-6 py-2 rounded-full transition-all font-semibold hover:scale-105"
            >
              立即咨询
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero 区域 */}
      <section className="pt-24 pb-12 px-4 md:px-6 md:pb-16 relative overflow-hidden">
        {/* 大图横幅占位符 */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D2D2D] to-[#4B5563] opacity-90">
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D] via-[#2D2D2D]/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFE15D]/20 via-transparent to-[#FF9F43]/20"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <div className="text-center">
              <Building2 className="h-32 md:h-48 w-32 md:w-48 text-white/40 mx-auto" />
              <p className="text-white/40 text-sm mt-4">横幅图片占位符</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10 pt-12 md:pt-16">
          <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur px-4 py-2 rounded-full text-[#2D2D2D] text-sm font-medium mb-6 shadow-lg border border-gray-200">
            <Sparkles className="h-4 w-4 text-[#FFE15D]" />
            全国最大的省级文化综合体
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            文化赋能 · 企业活动
            <br />
            <span className="bg-gradient-to-r from-[#FFE15D] to-[#FF9F43] bg-clip-text text-transparent">
              一站式解决方案
            </span>
          </h1>

          <p className="text-base md:text-xl lg:text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed font-medium">
            依托浙江省之江文化中心四大场馆资源
          </p>
          <p className="text-base md:text-lg lg:text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            打造独具文化深度的党建、团建、商务活动新范式
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FFE15D] to-[#FF9F43] hover:shadow-xl text-[#2D2D2D] px-5 py-2.5 md:px-8 md:py-4 rounded-full text-sm md:text-lg font-semibold transition-all shadow-lg hover:scale-105"
            >
              立即获取策划方案
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/services/party"
              className="inline-flex items-center justify-center gap-2 bg-white/90 backdrop-blur hover:bg-white text-[#2D2D2D] px-5 py-2.5 md:px-8 md:py-4 rounded-full text-sm md:text-lg font-medium transition-all border-2 border-white/30 hover:border-[#FFE15D]"
            >
              查看服务详情
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
                <Building2 className="h-6 w-6 text-[#FFE15D]" />
                <span className="text-[#FF9F43] font-semibold">关于我们</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold mb-6 text-[#2D2D2D]">
                之江文化中心
              </h2>
              <p className="text-sm md:text-lg text-[#6B7280] mb-6 font-semibold">
                全国最大的省级文化综合体
              </p>
              <div className="space-y-4 text-[#6B7280] leading-relaxed">
                <p>
                  之江文化中心位于杭州市西湖区之江板块，是浙江省重点打造的文化地标项目，总建筑面积达32万平方米，是目前全国体量最大的省级现代复合文化综合体。
                </p>
                <p>
                  中心采用"四馆一中心"布局，涵盖浙江省图书馆、浙江省博物馆、浙江省非物质文化遗产馆、浙江省文学馆四大省级文化场馆，以及之江文化中心研学中心。
                </p>
                <p>
                  由浙江文化空间发展有限公司运营，我们整合"四馆一中心"独特资源，为企事业单位提供高品质、有文化深度的活动服务，让每一次活动都成为文化之旅。
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* 主图片占位符 */}
              <div className="aspect-[4/3] bg-gradient-to-br from-[#2D2D2D] to-[#4B5563] rounded-3xl overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFE15D]/20 via-transparent to-[#FF9F43]/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Building2 className="h-24 w-24 text-white/30 mx-auto" />
                    <p className="text-white/40 text-sm mt-4">之江文化中心全景图</p>
                  </div>
                </div>
              </div>

              {/* 五小图展示 - 四馆一中心 */}
              <div className="grid grid-cols-5 gap-2 md:gap-3">
                <div className="aspect-square bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-xl overflow-hidden shadow-lg relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="h-6 md:h-8 w-6 md:w-8 text-white/60" />
                  </div>
                </div>
                <div className="aspect-square bg-gradient-to-br from-[#2D2D2D] to-[#4B5563] rounded-xl overflow-hidden shadow-lg relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Award className="h-6 md:h-8 w-6 md:w-8 text-white/60" />
                  </div>
                </div>
                <div className="aspect-square bg-gradient-to-br from-[#6B7280] to-[#4B5563] rounded-xl overflow-hidden shadow-lg relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="h-6 md:h-8 w-6 md:w-8 text-white/60" />
                  </div>
                </div>
                <div className="aspect-square bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-xl overflow-hidden shadow-lg relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Star className="h-6 md:h-8 w-6 md:w-8 text-white/60" />
                  </div>
                </div>
                <div className="aspect-square bg-gradient-to-br from-[#FF9F43] to-[#FFE15D] rounded-xl overflow-hidden shadow-lg relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building2 className="h-6 md:h-8 w-6 md:w-8 text-white/60" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心服务概览 */}
      <section className="py-12 px-4 md:px-6 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Calendar className="h-6 w-6 text-[#FFE15D]" />
              <span className="text-[#FF9F43] font-semibold">核心服务</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#2D2D2D]">
              四大服务板块
            </h2>
            <p className="text-sm md:text-lg text-[#6B7280] max-w-2xl mx-auto">
              依托四大场馆资源，提供全方位企业活动服务
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {/* 服务 1 */}
            <Link href="/services/party" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-40">
                    <Star className="h-20 w-20 text-white" />
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-2xl font-bold mb-4 text-[#2D2D2D]">主题党建</h3>
                  <p className="text-[#6B7280] mb-3 leading-relaxed text-sm">
                    沉浸式党建体验 · 红色文化浸润
                  </p>
                  <div className="space-y-2 text-xs text-[#6B7280]">
                    <p>✓ 沉浸式党课</p>
                    <p>✓ 红色文化体验</p>
                    <p>✓ 党建主题研学</p>
                  </div>
                  <div className="mt-6 text-[#FF9F43] font-semibold flex items-center gap-2 group-hover:gap-4 transition-all text-sm">
                    了解更多
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>

            {/* 服务 2 */}
            <Link href="/services/team" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#2D2D2D] to-[#4B5563] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-40">
                    <Users className="h-20 w-20 text-white" />
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-2xl font-bold mb-4 text-[#2D2D2D]">团建拓展</h3>
                  <p className="text-[#6B7280] mb-3 leading-relaxed text-sm">
                    文化沉浸团建 · 非遗手作体验
                  </p>
                  <div className="space-y-2 text-xs text-[#6B7280]">
                    <p>✓ 文化沉浸体验</p>
                    <p>✓ 非遗手作体验</p>
                    <p>✓ 人文团队共创</p>
                  </div>
                  <div className="mt-6 text-[#FF9F43] font-semibold flex items-center gap-2 group-hover:gap-4 transition-all text-sm">
                    了解更多
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>

            {/* 服务 3 */}
            <Link href="/services/training" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#6B7280] to-[#4B5563] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-40">
                    <BookOpen className="h-20 w-20 text-white" />
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-2xl font-bold mb-4 text-[#2D2D2D]">访学培训</h3>
                  <p className="text-[#6B7280] mb-3 leading-relaxed text-sm">
                    名家讲座引领 · 专业课程赋能
                  </p>
                  <div className="space-y-2 text-xs text-[#6B7280]">
                    <p>✓ 名家讲座</p>
                    <p>✓ 专业培训</p>
                    <p>✓ 行业交流</p>
                  </div>
                  <div className="mt-6 text-[#FF9F43] font-semibold flex items-center gap-2 group-hover:gap-4 transition-all text-sm">
                    了解更多
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>

            {/* 服务 4 */}
            <Link href="/services/custom" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-40">
                    <Calendar className="h-20 w-20 text-white" />
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-2xl font-bold mb-4 text-[#2D2D2D]">定制活动</h3>
                  <p className="text-[#6B7280] mb-3 leading-relaxed text-sm">
                    高端商务定制 · 尊享文化礼遇
                  </p>
                  <div className="space-y-2 text-xs text-[#6B7280]">
                    <p>✓ 高端商务活动</p>
                    <p>✓ 品牌发布会</p>
                    <p>✓ VIP客户答谢</p>
                  </div>
                  <div className="mt-6 text-[#FF9F43] font-semibold flex items-center gap-2 group-hover:gap-4 transition-all text-sm">
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-2">值得信赖的合作伙伴</h2>
            <p className="text-[#6B7280]">已为众多知名企业提供服务</p>
          </div>

          <div className="overflow-hidden">
            <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center gap-8">
                  {[
                    '浙江省教育厅',
                    '海康威视',
                    '厦门航空',
                    '中国移动',
                    '中国建设银行',
                    '阿里巴巴',
                    '浙江大学',
                    '浙江省交通投资集团'
                  ].map((partner, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-3 px-6 py-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-[#FFE15D] hover:shadow-md transition-all"
                    >
                      <Building2 className="h-5 w-5 text-[#2D2D2D]" />
                      <span className="text-[#2D2D2D] font-medium whitespace-nowrap">{partner}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 精选案例 */}
      <section className="py-12 px-4 md:px-6 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Award className="h-6 w-6 text-[#FFE15D]" />
              <span className="text-[#FF9F43] font-semibold">成功案例</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#2D2D2D]">
              精选案例
            </h2>
            <p className="text-sm md:text-lg text-[#6B7280] max-w-2xl mx-auto">
              见证我们的专业实力，打造高品质活动体验
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {/* 案例 1 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="aspect-[16/9] bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-50">
                  <BookOpen className="h-24 w-24 text-white" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur text-[#2D2D2D] text-xs font-bold rounded-full">
                    VIP活动
                  </span>
                </div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-[#2D2D2D]">上海银行考古活动</h3>
                <p className="text-[#6B7280] mb-4 text-xs md:text-sm leading-relaxed">
                  探索千年文明 · 传承文化力量。组织VIP客户参与考古研学活动，
                  通过文物修复体验、考古现场参观等形式，打造高端客户深度文化体验。
                </p>
                <Link href="/cases/shanghai-bank" className="text-[#FF9F43] font-semibold flex items-center gap-2 group-hover:gap-4 transition-all text-sm">
                  查看详情
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* 案例 2 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="aspect-[16/9] bg-gradient-to-br from-[#2D2D2D] to-[#4B5563] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-50">
                  <Users className="h-24 w-24 text-white" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur text-[#2D2D2D] text-xs font-bold rounded-full">
                    团建活动
                  </span>
                </div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-[#2D2D2D]">海康威视养生局</h3>
                <p className="text-[#6B7280] mb-4 text-xs md:text-sm leading-relaxed">
                  中医文化溯源 · 健康生活探索。结合博物馆中医文化展区资源，
                  为员工打造养生主题团建活动，在文化探索中关注健康生活。
                </p>
                <Link href="/cases/hikvision" className="text-[#FF9F43] font-semibold flex items-center gap-2 group-hover:gap-4 transition-all text-sm">
                  查看详情
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* 案例 3 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="aspect-[16/9] bg-gradient-to-br from-[#6B7280] to-[#4B5563] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-50">
                  <Calendar className="h-24 w-24 text-white" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur text-[#2D2D2D] text-xs font-bold rounded-full">
                    年会活动
                  </span>
                </div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-[#2D2D2D]">蒙牛迈胜年会</h3>
                <p className="text-[#6B7280] mb-4 text-xs md:text-sm leading-relaxed">
                  品牌文化融合 · 年度盛典呈现。将蒙牛品牌文化与传统艺术元素深度融合，
                  打造独具特色的年度盛典，彰显企业文化底蕴与品牌实力。
                </p>
                <Link href="/cases/mengniu" className="text-[#FF9F43] font-semibold flex items-center gap-2 group-hover:gap-4 transition-all text-sm">
                  查看详情
                  <ArrowRight className="h-4 w-4" />
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
      <section className="py-12 px-4 md:px-6 md:py-16 bg-gradient-to-br from-[#2D2D2D] to-[#4B5563]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white">
            让文化赋能您的企业活动
          </h2>
          <p className="text-sm md:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            依托之江文化中心四大场馆资源，为您打造独一无二的文化体验
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 text-white/90">
              <Phone className="h-5 w-5 text-[#FFE15D]" />
              <span className="text-lg font-medium">191-0658-3798</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2 text-white/90">
              <Mail className="h-5 w-5 text-[#FFE15D]" />
              <span className="text-lg">service@zhijiang-culture.com</span>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FFE15D] to-[#FF9F43] hover:shadow-xl text-[#2D2D2D] px-6 py-3 md:px-10 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all shadow-lg hover:scale-105"
          >
            立即获取策划方案
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-[#2D2D2D] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-lg flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold">之江文化中心</span>
                  <p className="text-xs text-[#FFE15D]">企业活动服务</p>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                依托四大场馆资源，为企业提供高品质、有文化深度的活动服务
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-[#FFE15D]">服务内容</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><Link href="/services/party" className="hover:text-white transition-colors">主题党建</Link></li>
                <li><Link href="/services/team" className="hover:text-white transition-colors">团建拓展</Link></li>
                <li><Link href="/services/training" className="hover:text-white transition-colors">访学培训</Link></li>
                <li><Link href="/services/custom" className="hover:text-white transition-colors">定制活动</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-[#FFE15D]">关于我们</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><Link href="/about" className="hover:text-white transition-colors">品牌故事</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">场馆资源</Link></li>
                <li><Link href="/cases" className="hover:text-white transition-colors">成功案例</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">联系我们</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-[#FFE15D]">联系方式</h3>
              <ul className="space-y-3 text-white/70 text-sm">
                <li className="flex items-start gap-2">
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#FFE15D]" />
                  <span>191-0658-3798</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#FFE15D]" />
                  <span>service@zhijiang-culture.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#FFE15D]" />
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
