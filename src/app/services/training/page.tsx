import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, Phone, ArrowRight, BookOpen, GraduationCap, Sparkles, CheckCircle2, Calendar, Award, Users, MapPin, Clock, Lightbulb, Search, Compass, FileText, MessageSquare, Globe } from 'lucide-react';
import Navigation from '@/components/navigation';

export const metadata: Metadata = {
  title: '访学培训 - 之江文化中心 | 企业活动服务',
  description: '之江文化中心访学培训服务，名家讲座引领、专业课程赋能，聚焦浙江文化探源与现代治理，为企业提供高端培训课程。',
  keywords: '访学培训,企业培训,杭州企业培训,文化课程培训,名家讲座',
};

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* 顶部导航栏 */}
      <Navigation currentPath="/services/training" />

      {/* Hero Section */}
      <section className="pt-20 pb-8 px-4 md:px-6 md:pb-12 relative overflow-hidden">
        {/* 背景图片 */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/assets/访学培训服务介绍配图.jpg")' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFC107]/80 to-[#FF9F43]/80">
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFC107]/30 via-transparent to-[#FF9F43]/30"></div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 mt-12 md:mt-16 text-white">
            访学培训
          </h1>
          <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
            学在文化地标
            <br />
            聚焦浙江文化探源与现代治理
          </p>
        </div>
      </section>

      {/* 服务介绍 */}
      <section className="py-12 px-4 md:px-6 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <BookOpen className="h-6 w-6 text-[#FFE15D]" />
              <span className="text-[#FF9F43] font-semibold">服务特色</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#2D2D2D]">
              高端培训课程，专业赋能成长
            </h2>
            <p className="text-base md:text-lg text-[#6B7280] max-w-3xl mx-auto">
              依托之江文化中心资源，提供名家讲座、专业培训、行业交流等全方位培训服务
            </p>
          </div>

          {/* 培训场景展示 */}
          <div className="mb-12">
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
                  <div className="aspect-[16/10] bg-gradient-to-br from-[#6B7280] to-[#4B5563] rounded-2xl overflow-hidden shadow-2xl">
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

          {/* 右侧：活动亮点 */}
          <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 mb-6">
                <Sparkles className="h-6 w-6 text-[#FFE15D]" />
                <span className="text-[#FF9F43] font-semibold">活动亮点</span>
              </div>
              
              <div className="space-y-5">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-[#FFE15D]/8 to-transparent border-l-2 border-[#FFE15D]/60 hover:from-[#FFE15D]/12 hover:border-[#FFE15D] transition-all">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#2D2D2D]">高端课程</h3>
                    <p className="text-[#6B7280] text-sm">知名专家学者授课，提供前沿知识</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-[#FFE15D]/8 to-transparent border-l-2 border-[#FFE15D]/60 hover:from-[#FFE15D]/12 hover:border-[#FFE15D] transition-all">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#2D2D2D]">行业交流</h3>
                    <p className="text-[#6B7280] text-sm">搭建行业交流平台，促进企业合作</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-[#FFE15D]/8 to-transparent border-l-2 border-[#FFE15D]/60 hover:from-[#FFE15D]/12 hover:border-[#FFE15D] transition-all">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#2D2D2D]">学习成果</h3>
                    <p className="text-[#6B7280] text-sm">系统化学习体系，确保培训实效</p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 产品 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="aspect-[16/10] relative overflow-hidden">
                <img src="/assets/文旅创新融合.jpg" alt="文旅创新融合" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-[#2D2D2D]">文旅创新融合 ——公共文化空间一体化运营</h3>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-[#FFE15D]" />
                  <span className="text-xs text-[#6B7280]">1~2小时</span>
                </div>
                <p className="text-[#6B7280] mb-4 leading-relaxed text-sm">
                  学习"之江模式"的文旅融合创新经验与实践
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <Lightbulb className="h-4 w-4 text-[#FFE15D]" />
                    <span>之江模式解析</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <Compass className="h-4 w-4 text-[#FFE15D]" />
                    <span>创新实践分享</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <MapPin className="h-4 w-4 text-[#FFE15D]" />
                    <span>实地走访调研</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 产品 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="aspect-[16/10] relative overflow-hidden">
                <img src="/assets/共富讲堂.jpg" alt="共富讲堂" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-[#2D2D2D]">共富讲堂：传统工艺的活化与创新</h3>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-[#FFE15D]" />
                  <span className="text-xs text-[#6B7280]">1~2小时</span>
                </div>
                <p className="text-[#6B7280] mb-4 leading-relaxed text-sm">
                  探索传统工艺的活化与创新路径，传承非遗文化
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <Search className="h-4 w-4 text-[#FFE15D]" />
                    <span>传统工艺展示</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <FileText className="h-4 w-4 text-[#FFE15D]" />
                    <span>创新案例分析</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <Users className="h-4 w-4 text-[#FFE15D]" />
                    <span>现场互动体验</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 产品 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="aspect-[16/10] relative overflow-hidden">
                <img src="/assets/名家讲堂.jpg" alt="文化讲座" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-[#2D2D2D]">文化讲座</h3>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-[#FFE15D]" />
                  <span className="text-xs text-[#6B7280]">1~2小时</span>
                </div>
                <p className="text-[#6B7280] mb-3 leading-relaxed text-sm">
                  邀请知名专家学者开展专题讲座，分享前沿知识与行业洞察
                </p>
                <div className="mb-4 inline-block px-3 py-1.5 bg-[#FFE15D]/20 rounded-lg border border-[#FFE15D]/50">
                  <span className="text-sm text-[#DC2626] font-bold">讲座主题、专家可定制邀约</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <GraduationCap className="h-4 w-4 text-[#FFE15D]" />
                    <span>专家学者授课</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <Globe className="h-4 w-4 text-[#FFE15D]" />
                    <span>前沿知识分享</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <MessageSquare className="h-4 w-4 text-[#FFE15D]" />
                    <span>互动问答交流</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 产品 4 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="aspect-[16/10] relative overflow-hidden">
                <img src="/assets/系列专业课程培训.jpg" alt="系列专业课程培训" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-[#2D2D2D]">系列专业课程培训</h3>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-[#FFE15D]" />
                  <span className="text-xs text-[#6B7280]">时长可定制</span>
                </div>
                <p className="text-[#6B7280] mb-3 leading-relaxed text-sm">
                  针对特定行业或领域，提供系统化专业课程培训
                </p>
                <div className="mb-4 inline-block px-3 py-1.5 bg-[#FFE15D]/20 rounded-lg border border-[#FFE15D]/50">
                  <span className="text-sm text-[#DC2626] font-bold">课程主题可定制</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>课程体系完善</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>实战案例分析</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>课后跟踪辅导</span>
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
                  <p className="text-[8px] md:text-sm text-white/90 leading-tight md:leading-normal relative z-10">培训总结优化</p>
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
    </div>
  );
}
