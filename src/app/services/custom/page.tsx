import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, Phone, ArrowRight, Calendar, Sparkles, CheckCircle2, Award, Users, PartyPopper, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: '定制活动 - 之江文化中心 | 企业活动服务',
  description: '之江文化中心定制活动服务，高端商务定制、尊享文化礼遇，企业年会、产品发布会、客户答谢会、行业峰会等定制化服务。',
  keywords: '定制活动,企业年会,产品发布会,杭州活动策划,高端商务活动',
};

export default function CustomEventsPage() {
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
            <Link href="/services/custom" className="text-[#FFE15D] font-bold">
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
      <section className="pt-20 pb-8 px-4 md:px-6 md:pb-12 relative overflow-hidden">
        {/* 背景图片 */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/客户答谢.png")' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFC107]/80 to-[#FF9F43]/80">
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFC107]/30 via-transparent to-[#FF9F43]/30"></div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 mt-8 md:mt-12 text-white">
            定制活动
          </h1>
          <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
            注入文化魅力与高端格调
            <br />
            私人导览尊享体验
          </p>
        </div>
      </section>

      {/* 服务介绍 */}
      <section className="py-12 px-4 md:px-6 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Calendar className="h-6 w-6 text-[#FFE15D]" />
              <span className="text-[#FF9F43] font-semibold">服务特色</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#2D2D2D]">
              高端定制服务，尊享文化礼遇
            </h2>
            <p className="text-base md:text-lg text-[#6B7280] max-w-3xl mx-auto">
              依托之江文化中心资源，提供企业年会、产品发布会、客户答谢会等高端定制活动服务
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center mb-6">
            {/* 左侧：图片 */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="relative aspect-[4/3] bg-cover bg-center"
                style={{ backgroundImage: 'url("/服务介绍配图.png")' }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-full flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-semibold text-lg">高端格调 · 尊享体验</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 右侧：活动亮点 */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 mb-6">
                <Sparkles className="h-6 w-6 text-[#FFE15D]" />
                <span className="text-[#FF9F43] font-semibold">活动亮点</span>
              </div>
              
              <div className="space-y-5">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-[#FFE15D]/8 to-transparent border-l-2 border-[#FFE15D]/60 hover:from-[#FFE15D]/12 hover:border-[#FFE15D] transition-all">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#2D2D2D]">高端格调</h3>
                    <p className="text-[#6B7280] text-sm">文化地标加持，彰显品牌实力</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-[#FFE15D]/8 to-transparent border-l-2 border-[#FFE15D]/60 hover:from-[#FFE15D]/12 hover:border-[#FFE15D] transition-all">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#2D2D2D]">尊享体验</h3>
                    <p className="text-[#6B7280] text-sm">私人导览服务，一对一专属服务</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-[#FFE15D]/8 to-transparent border-l-2 border-[#FFE15D]/60 hover:from-[#FFE15D]/12 hover:border-[#FFE15D] transition-all">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#2D2D2D]">专业策划</h3>
                    <p className="text-[#6B7280] text-sm">从策划到执行，全流程专业服务</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 服务内容 */}
      <section className="pt-8 pb-12 px-4 md:px-6 md:pt-12 md:pb-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <PartyPopper className="h-6 w-6 text-[#FFE15D]" />
              <span className="text-[#FF9F43] font-semibold">服务内容</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#2D2D2D]">
              适用场景
            </h2>
            <p className="text-sm md:text-lg text-[#6B7280] max-w-2xl mx-auto">
              多元化场景，满足企业不同需求
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-11">
            {/* 场景 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="aspect-[16/10] relative overflow-hidden">
                <img
                  src="/assets/企业年会.png"
                  alt="企业年会"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-[#2D2D2D]">企业年会</h3>
                <p className="text-[#6B7280] mb-4 leading-relaxed text-sm">
                  在艺术空间替代传统宴会厅，打造独具文化特色的年度盛典
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>艺术空间场地</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>全案策划执行</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>文化节目表演</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 场景 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="aspect-[16/10] relative overflow-hidden">
                <img
                  src="/assets/发布会.png"
                  alt="产品发布会"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-[#2D2D2D]">产品发布会</h3>
                <p className="text-[#6B7280] mb-4 leading-relaxed text-sm">
                  文化地标中的产品发布，彰显品牌实力与创新理念
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>专业发布场地</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>媒体邀约服务</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>发布会流程策划</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 场景 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="aspect-[16/10] relative overflow-hidden">
                <img
                  src="/assets/客户答谢会.png"
                  alt="客户答谢会"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-[#2D2D2D]">客户答谢会</h3>
                <p className="text-[#6B7280] mb-4 leading-relaxed text-sm">
                  文化体验增强客户粘性，让答谢活动更有温度
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>私人导览服务</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>文化体验环节</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>尊享礼遇服务</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 场景 4 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="aspect-[16/10] relative overflow-hidden">
                <img
                  src="https://coze-coding-project.tos.coze.site/coze_storage_7599663298044362793/image/generate_image_eddfdebb-a981-41bd-8385-5e8f4e651282.jpeg?sign=1772244353-9943e7abcd-0-968dee96e7e860b78f25748c8ebc3041abdf900b25c41348079e9b07566dbfb6"
                  alt="行业峰会"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-[#2D2D2D]">行业峰会</h3>
                <p className="text-[#6B7280] mb-4 leading-relaxed text-sm">
                  高规格文化场地，打造行业顶级交流盛会
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>高规格场地</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>一站式服务</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>高端定制布置</span>
                  </div>
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
                  <p className="text-[8px] md:text-sm text-white/90 leading-tight md:leading-normal relative z-10">活动总结优化</p>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
            让活动更具文化品味和格调
          </h2>
          <p className="text-sm md:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            依托之江文化中心资源，为您打造独一无二的定制活动
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
