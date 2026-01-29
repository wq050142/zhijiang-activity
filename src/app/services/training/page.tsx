import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, Phone, ArrowRight, BookOpen, GraduationCap, Sparkles, CheckCircle2, Calendar, Award, Users, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: '访学培训 - 之江文化中心 | 企业活动服务',
  description: '之江文化中心访学培训服务，名家讲座引领、专业课程赋能，聚焦浙江文化探源与现代治理，为企业提供高端培训课程。',
  keywords: '访学培训,企业培训,杭州企业培训,文化课程培训,名家讲座',
};

export default function TrainingPage() {
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
            <Link href="/services/training" className="text-[#FFE15D] font-bold">
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

      {/* Hero Section */}
      <section className="pt-28 pb-12 px-4 md:px-6 md:pb-16 relative overflow-hidden">
        {/* 大图横幅 */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/访学培训.png")' }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10 pt-12 md:pt-16">
          <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur px-4 py-2 rounded-full text-[#2D2D2D] text-sm font-medium mb-6 shadow-lg border border-gray-200">
            <GraduationCap className="h-4 w-4 text-[#FFE15D]" />
            名家讲座 · 专业课程
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            访学培训
          </h1>
          <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium mb-8">
            学在文化地标，聚焦浙江文化探源与现代治理
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FFE15D] to-[#FF9F43] text-[#2D2D2D] px-5 py-2.5 md:px-8 md:py-4 rounded-full text-sm md:text-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              立即预约
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/cases"
              className="inline-flex items-center justify-center gap-2 bg-white/90 backdrop-blur hover:bg-white text-[#2D2D2D] px-5 py-2.5 md:px-8 md:py-4 rounded-full text-sm md:text-lg font-medium transition-all border-2 border-white/30 hover:border-[#FFE15D]"
            >
              查看案例
            </Link>
          </div>
        </div>
      </section>

      {/* 服务介绍 */}
      <section className="py-12 px-4 md:px-6 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <BookOpen className="h-6 w-6 text-[#FFE15D]" />
                <span className="text-[#FF9F43] font-semibold">服务特色</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold mb-6 text-[#2D2D2D]">
                高端培训课程，专业赋能成长
              </h2>
              <div className="space-y-4 text-[#6B7280] leading-relaxed">
                <p>
                  依托之江文化中心图书馆、博物馆、文学馆等场馆资源，我们提供名家讲座、专业培训、行业交流等全方位培训服务。
                </p>
                <p>
                  聚焦浙江文化探源、文旅融合创新、现代治理等前沿课题，邀请知名专家学者授课，为企业和机构提供高端培训课程，助力组织发展。
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-2 text-[#2D2D2D] font-medium">
                  <CheckCircle2 className="h-5 w-5 text-[#FFE15D]" />
                  <span>名家讲座</span>
                </div>
                <div className="flex items-center gap-2 text-[#2D2D2D] font-medium">
                  <CheckCircle2 className="h-5 w-5 text-[#FFE15D]" />
                  <span>专业课程</span>
                </div>
                <div className="flex items-center gap-2 text-[#2D2D2D] font-medium">
                  <CheckCircle2 className="h-5 w-5 text-[#FFE15D]" />
                  <span>行业交流</span>
                </div>
                <div className="flex items-center gap-2 text-[#2D2D2D] font-medium">
                  <CheckCircle2 className="h-5 w-5 text-[#FFE15D]" />
                  <span>定制化培训</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#FFE15D]/10 to-[#FFE15D]/5 rounded-2xl p-8 border border-[#FFE15D]/20">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#2D2D2D] mb-2">高端课程</h3>
                    <p className="text-[#6B7280] text-sm">
                      知名专家学者授课，提供前沿知识和实用技能
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#2D2D2D] mb-2">行业交流</h3>
                    <p className="text-[#6B7280] text-sm">
                      搭建行业交流平台，促进企业间合作与学习
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#2D2D2D] mb-2">学习成果</h3>
                    <p className="text-[#6B7280] text-sm">
                      系统化学习体系，确保培训实效与成果落地
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 服务内容 */}
      <section className="py-12 px-4 md:px-6 md:py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-[#FFE15D]" />
              <span className="text-[#FF9F43] font-semibold">服务内容</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#2D2D2D]">
              核心服务产品
            </h2>
            <p className="text-sm md:text-lg text-[#6B7280] max-w-2xl mx-auto">
              多元化培训服务，满足不同学习需求
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 产品 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#2D2D2D]">名家讲座</h3>
              <p className="text-[#6B7280] mb-6 leading-relaxed">
                邀请知名专家学者开展专题讲座，分享前沿知识与行业洞察
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  <span>专家学者授课</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  <span>前沿知识分享</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  <span>互动问答交流</span>
                </div>
              </div>
            </div>

            {/* 产品 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2D2D2D] to-[#4B5563] rounded-2xl flex items-center justify-center mb-6">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#2D2D2D]">专业课程培训</h3>
              <p className="text-[#6B7280] mb-6 leading-relaxed">
                针对特定行业或领域，提供系统化专业课程培训
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  <span>课程体系完善</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  <span>实战案例分析</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  <span>课后跟踪辅导</span>
                </div>
              </div>
            </div>

            {/* 产品 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#6B7280] to-[#4B5563] rounded-2xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#2D2D2D]">行业交流论坛</h3>
              <p className="text-[#6B7280] mb-6 leading-relaxed">
                搭建行业交流平台，促进企业间合作与经验分享
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  <span>企业经验分享</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  <span>资源对接合作</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  <span>人脉拓展交流</span>
                </div>
              </div>
            </div>

            {/* 产品 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-2xl flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#2D2D2D]">非遗与共同富裕</h3>
              <p className="text-[#6B7280] mb-6 leading-relaxed">
                探索非遗传承与乡村振兴、共同富裕的实践路径
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  <span>非遗传承实践</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  <span>乡村振兴案例</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  <span>共同富裕路径</span>
                </div>
              </div>
            </div>

            {/* 产品 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2D2D2D] to-[#4B5563] rounded-2xl flex items-center justify-center mb-6">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#2D2D2D]">文旅融合创新</h3>
              <p className="text-[#6B7280] mb-6 leading-relaxed">
                学习"之江模式"的文旅融合创新经验与实践
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  <span>之江模式解析</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  <span>创新实践分享</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  <span>实地走访调研</span>
                </div>
              </div>
            </div>

            {/* 产品 6 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#6B7280] to-[#4B5563] rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#2D2D2D]">定制化培训</h3>
              <p className="text-[#6B7280] mb-6 leading-relaxed">
                根据企业需求和特点，量身定制培训课程方案
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  <span>需求深度调研</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  <span>专属课程设计</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  <span>全程专业执行</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 服务流程 */}
      <section className="py-12 px-4 md:px-6 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#2D2D2D]">
              服务流程
            </h2>
          </div>

          <div className="space-y-6 md:space-y-8">
            {/* 第一行：01、02、03 */}
            <div className="grid grid-cols-3 gap-3 md:gap-6">
              <div className="relative group">
                <div className="bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-xl md:rounded-2xl p-3 md:p-6 text-center relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                  <div className="text-lg md:text-3xl font-bold text-white mb-1 md:mb-4 relative z-10">01</div>
                  <h3 className="text-[10px] md:text-lg font-bold text-white mb-0.5 md:mb-2 relative z-10">需求对接</h3>
                  <p className="text-[8px] md:text-sm text-white/90 leading-tight md:leading-normal relative z-10">深入了解需求</p>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                {/* 右箭头 */}
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <ArrowRight className="h-3.5 w-3.5 text-[#FF9F43]" />
                  </div>
                </div>
                {/* 手机端右箭头 */}
                <div className="md:hidden absolute top-1/2 -right-1.5 transform -translate-y-1/2 z-10">
                  <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-md">
                    <ArrowRight className="h-2 w-2 text-[#FF9F43]" />
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-xl md:rounded-2xl p-3 md:p-6 text-center relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                  <div className="text-lg md:text-3xl font-bold text-white mb-1 md:mb-4 relative z-10">02</div>
                  <h3 className="text-[10px] md:text-lg font-bold text-white mb-0.5 md:mb-2 relative z-10">方案设计</h3>
                  <p className="text-[8px] md:text-sm text-white/90 leading-tight md:leading-normal relative z-10">定制活动方案</p>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                {/* 右箭头 */}
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <ArrowRight className="h-3.5 w-3.5 text-[#FF9F43]" />
                  </div>
                </div>
                {/* 手机端右箭头 */}
                <div className="md:hidden absolute top-1/2 -right-1.5 transform -translate-y-1/2 z-10">
                  <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-md">
                    <ArrowRight className="h-2 w-2 text-[#FF9F43]" />
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-xl md:rounded-2xl p-3 md:p-6 text-center relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                  <div className="text-lg md:text-3xl font-bold text-white mb-1 md:mb-4 relative z-10">03</div>
                  <h3 className="text-[10px] md:text-lg font-bold text-white mb-0.5 md:mb-2 relative z-10">确认签约</h3>
                  <p className="text-[8px] md:text-sm text-white/90 leading-tight md:leading-normal relative z-10">方案确认签约</p>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                {/* 下箭头 */}
                <div className="hidden md:block absolute -bottom-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <ArrowRight className="h-3.5 w-3.5 text-[#FF9F43] rotate-90" />
                  </div>
                </div>
                {/* 手机端下箭头 */}
                <div className="md:hidden absolute -bottom-2 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-md">
                    <ArrowRight className="h-2 w-2 text-[#FF9F43] rotate-90" />
                  </div>
                </div>
              </div>
            </div>

            {/* 第二行：04、05（居中） */}
            <div className="flex justify-center gap-3 md:gap-6 max-w-lg mx-auto">
              <div className="relative group flex-1">
                <div className="bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-xl md:rounded-2xl p-3 md:p-6 text-center relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                  <div className="text-lg md:text-3xl font-bold text-white mb-1 md:mb-4 relative z-10">04</div>
                  <h3 className="text-[10px] md:text-lg font-bold text-white mb-0.5 md:mb-2 relative z-10">执行落地</h3>
                  <p className="text-[8px] md:text-sm text-white/90 leading-tight md:leading-normal relative z-10">专业执行服务</p>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                {/* 右箭头 */}
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <ArrowRight className="h-3.5 w-3.5 text-[#FF9F43]" />
                  </div>
                </div>
                {/* 手机端右箭头 */}
                <div className="md:hidden absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-md">
                    <ArrowRight className="h-2.5 w-2.5 text-[#FF9F43]" />
                  </div>
                </div>
              </div>

              <div className="relative group flex-1">
                <div className="bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-xl md:rounded-2xl p-3 md:p-6 text-center relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                  <div className="text-lg md:text-3xl font-bold text-white mb-1 md:mb-4 relative z-10">05</div>
                  <h3 className="text-[10px] md:text-lg font-bold text-white mb-0.5 md:mb-2 relative z-10">后续评价</h3>
                  <p className="text-[8px] md:text-sm text-white/90 leading-tight md:leading-normal relative z-10">培训总结优化</p>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 培训场景展示 */}
      <section className="py-12 px-4 md:px-6 md:py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Award className="h-6 w-6 text-[#FFE15D]" />
              <span className="text-[#FF9F43] font-semibold">培训场景</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#2D2D2D]">
              沉浸式学习体验
            </h2>
            <p className="text-sm md:text-lg text-[#6B7280] max-w-2xl mx-auto">
              在文化地标中学习，感受浙江文化的深厚底蕴
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#2D2D2D]">
                    高品质学习环境
                  </h3>
                  <p className="text-[#6B7280] leading-relaxed mb-4">
                    依托之江文化中心四大场馆资源，提供沉浸式学习体验。现代化的设施设备，舒适的学习环境，让培训效果更上一层楼。
                  </p>
                  <p className="text-[#6B7280] leading-relaxed">
                    无论是大型讲座、专业培训，还是小班研讨，我们都能提供合适的场地支持，确保每一次培训都能获得最佳体验。
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="text-2xl font-bold text-[#FFE15D] mb-1">100+</div>
                    <div className="text-sm text-[#6B7280]">服务企业</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="text-2xl font-bold text-[#FFE15D] mb-1">500+</div>
                    <div className="text-sm text-[#6B7280]">培训场次</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="text-2xl font-bold text-[#FFE15D] mb-1">98%</div>
                    <div className="text-sm text-[#6B7280]">满意度</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="text-2xl font-bold text-[#FFE15D] mb-1">5000+</div>
                    <div className="text-sm text-[#6B7280]">参训人次</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#6B7280] to-[#4B5563] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/图片3.png"
                    alt="访学培训场景"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-2xl p-6 shadow-xl hidden md:block">
                  <div className="text-4xl font-bold text-white mb-1">专业</div>
                  <div className="text-sm text-white/90">品质保障</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 md:px-6 md:py-16 bg-gradient-to-br from-[#2D2D2D] to-[#4B5563]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white">
            让培训更具深度和价值
          </h2>
          <p className="text-sm md:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            依托之江文化中心资源，为您打造高品质培训课程
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FFE15D] to-[#FF9F43] hover:shadow-xl text-[#2D2D2D] px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:scale-105"
          >
            立即预约
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
                  src="/之江文化中心logo_画板 1.png"
                  alt="之江文化中心 logo"
                  className="h-10 w-auto"
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
    </div>
  );
}
