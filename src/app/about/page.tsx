import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, Phone, ArrowRight, BookOpen, Award, Users, Star, MapPin, Calendar, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: '关于我们 - 之江文化中心 | 企业活动服务',
  description: '了解之江文化中心四大场馆资源，包括浙江省图书馆、博物馆、非遗馆、文学馆，为企业活动提供独特文化空间。',
  keywords: '之江文化中心,浙江省图书馆,浙江省博物馆,浙江省非遗馆,浙江省文学馆,杭州企业活动场地',
};

export default function AboutPage() {
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
            <Link href="/about" className="text-[#FFE15D] font-bold">
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

      {/* Hero Section */}
      <section className="pt-28 pb-12 px-4 md:px-6 md:pb-16 relative overflow-hidden">
        {/* 大图横幅占位符 */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D2D2D] to-[#4B5563] opacity-90">
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D] via-[#2D2D2D]/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFE15D]/20 via-transparent to-[#FF9F43]/20"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <div className="text-center">
              <Building2 className="h-32 md:h-48 w-32 md:w-48 text-white/40 mx-auto" />
              <p className="text-white/40 text-sm mt-4">关于我们横幅图片</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10 pt-12 md:pt-16">
          <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur px-4 py-2 rounded-full text-[#2D2D2D] text-sm font-medium mb-6 shadow-lg border border-gray-200">
            <Sparkles className="h-4 w-4 text-[#FFE15D]" />
            全国最大的省级文化综合体
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            关于我们
          </h1>
          <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
            依托之江文化中心四大场馆资源，打造独具文化深度的企业活动服务
          </p>
        </div>
      </section>

      {/* 中心介绍 */}
      <section className="py-12 px-4 md:px-6 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <Building2 className="h-6 w-6 text-[#FFE15D]" />
                <span className="text-[#FF9F43] font-semibold">关于之江文化中心</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold mb-6 text-[#2D2D2D]">
                国有文化企业的专业担当
              </h2>
              <div className="space-y-4 text-[#6B7280] leading-relaxed">
                <p>
                  之江文化中心位于杭州市西湖区之江板块，是浙江省重点打造的文化地标项目，总建筑面积达32万平方米，是目前全国体量最大的省级现代复合文化综合体。
                </p>
                <p>
                  中心由浙江文化空间发展有限公司运营，依托浙江省图书馆、浙江省博物馆、浙江省非物质文化遗产馆、浙江省文学馆四大省级场馆，为企事业单位提供高品质、有文化深度的党建、团建、培训及定制活动服务。
                </p>
                <p>
                  我们致力于打破传统活动模式，打造"文化+"沉浸式体验，让每一次活动都成为文化之旅，在文化地标中激发组织力量。
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
                    <p className="text-white/40 text-sm mt-4">之江文化中心建筑外观</p>
                  </div>
                </div>
              </div>

              {/* 数据展示 */}
              <div className="grid grid-cols-4 gap-3">
                <div className="aspect-square bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-xl flex flex-col items-center justify-center text-white shadow-lg">
                  <span className="text-lg md:text-xl font-bold">32.1万</span>
                  <span className="text-xs opacity-90">㎡</span>
                </div>
                <div className="aspect-square bg-gradient-to-br from-[#2D2D2D] to-[#4B5563] rounded-xl flex flex-col items-center justify-center text-white shadow-lg">
                  <span className="text-lg md:text-xl font-bold">4</span>
                  <span className="text-xs opacity-90">大场馆</span>
                </div>
                <div className="aspect-square bg-gradient-to-br from-[#6B7280] to-[#4B5563] rounded-xl flex flex-col items-center justify-center text-white shadow-lg">
                  <span className="text-lg md:text-xl font-bold">1000+</span>
                  <span className="text-xs opacity-90">企业</span>
                </div>
                <div className="aspect-square bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-xl flex flex-col items-center justify-center text-white shadow-lg">
                  <span className="text-lg md:text-xl font-bold">100%</span>
                  <span className="text-xs opacity-90">满意度</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 四大场馆介绍 */}
      <section className="py-12 px-4 md:px-6 md:py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Award className="h-6 w-6 text-[#FFE15D]" />
              <span className="text-[#FF9F43] font-semibold">场馆资源</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#2D2D2D]">
              四大核心场馆
            </h2>
            <p className="text-sm md:text-lg text-[#6B7280] max-w-2xl mx-auto">
              每一座场馆都是文化的殿堂，为您活动提供独特文化空间
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 浙江省图书馆 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="aspect-[16/9] bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:scale-105 transition-transform duration-300">
                  <BookOpen className="h-24 w-24 text-white" />
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#2D2D2D]">浙江省图书馆（之江馆）</h3>
                <div className="space-y-3 text-sm text-[#6B7280]">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#FFE15D] mt-0.5 flex-shrink-0" />
                    <p>8.5万平方米智慧图书馆，藏书超700万册</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#FFE15D] mt-0.5 flex-shrink-0" />
                    <p>高端研讨空间，配备先进的会议设施</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#FFE15D] mt-0.5 flex-shrink-0" />
                    <p>浓厚学术氛围，适合高端培训与知识分享</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#FFE15D] mt-0.5 flex-shrink-0" />
                    <p>特色文创空间，可定制化活动场地</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 浙江省博物馆 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="aspect-[16/9] bg-gradient-to-br from-[#2D2D2D] to-[#4B5563] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:scale-105 transition-transform duration-300">
                  <Award className="h-24 w-24 text-white" />
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#2D2D2D]">浙江省博物馆（之江馆）</h3>
                <div className="space-y-3 text-sm text-[#6B7280]">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#FFE15D] mt-0.5 flex-shrink-0" />
                    <p>10万平方米现代化空间，国家一级博物馆</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#FFE15D] mt-0.5 flex-shrink-0" />
                    <p>"浙江一万年"等历史文化陈列，底蕴深厚</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#FFE15D] mt-0.5 flex-shrink-0" />
                    <p>适合历史溯源与党性教育，红色文化浸润</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#FFE15D] mt-0.5 flex-shrink-0" />
                    <p>专业讲解服务，沉浸式导览体验</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 浙江省非遗馆 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="aspect-[16/9] bg-gradient-to-br from-[#6B7280] to-[#4B5563] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:scale-105 transition-transform duration-300">
                  <Users className="h-24 w-24 text-white" />
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#2D2D2D]">浙江省非物质文化遗产馆</h3>
                <div className="space-y-3 text-sm text-[#6B7280]">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#FFE15D] mt-0.5 flex-shrink-0" />
                    <p>全国首座大型区域综合性非遗馆</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#FFE15D] mt-0.5 flex-shrink-0" />
                    <p>展示1000余项非遗项目，技艺传承活态呈现</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#FFE15D] mt-0.5 flex-shrink-0" />
                    <p>非遗手作体验，传统技艺沉浸式学习</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#FFE15D] mt-0.5 flex-shrink-0" />
                    <p>大师工作室，非遗匠人面对面交流</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 浙江省文学馆 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="aspect-[16/9] bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:scale-105 transition-transform duration-300">
                  <Star className="h-24 w-24 text-white" />
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#2D2D2D]">浙江省文学馆</h3>
                <div className="space-y-3 text-sm text-[#6B7280]">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#FFE15D] mt-0.5 flex-shrink-0" />
                    <p>规模仅次于中国现代文学馆，浙江文学殿堂</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#FFE15D] mt-0.5 flex-shrink-0" />
                    <p>文学沙龙空间，人文素养课程</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#FFE15D] mt-0.5 flex-shrink-0" />
                    <p>诗歌朗诵、文学创作 workshop</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#FFE15D] mt-0.5 flex-shrink-0" />
                    <p>浙江作家群展区，感受浙派文学魅力</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 配套设施 */}
      <section className="py-12 px-4 md:px-6 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <TrendingUp className="h-6 w-6 text-[#FFE15D]" />
              <span className="text-[#FF9F43] font-semibold">配套设施</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#2D2D2D]">
              完善的配套设施
            </h2>
            <p className="text-sm md:text-lg text-[#6B7280] max-w-2xl mx-auto">
              集空间、内容、产业于一体的一站式服务
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#FFE15D]/10 to-[#FFE15D]/5 rounded-2xl p-8 border border-[#FFE15D]/20">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-xl flex items-center justify-center mb-6">
                <Building2 className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#2D2D2D]">多功能报告厅</h3>
              <p className="text-[#6B7280] leading-relaxed">
                专业的会议、论坛、发布会场地，配备先进的音视频设备
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#FFE15D]/10 to-[#FFE15D]/5 rounded-2xl p-8 border border-[#FFE15D]/20">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-xl flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#2D2D2D]">会议室</h3>
              <p className="text-[#6B7280] leading-relaxed">
                多种规格会议室，适合培训、研讨、沙龙等不同规模活动
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#FFE15D]/10 to-[#FFE15D]/5 rounded-2xl p-8 border border-[#FFE15D]/20">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-xl flex items-center justify-center mb-6">
                <Calendar className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#2D2D2D]">高品质餐饮</h3>
              <p className="text-[#6B7280] leading-relaxed">
                知味观、星巴克等知名品牌，提供茶歇、用餐服务
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 核心优势 */}
      <section className="py-12 px-4 md:px-6 md:py-16 bg-gradient-to-br from-[#2D2D2D] to-[#4B5563]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-[#FFE15D]" />
              <span className="text-[#FFE15D] font-semibold">核心优势</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
              选择我们的理由
            </h2>
            <p className="text-sm md:text-lg text-white/80 max-w-2xl mx-auto">
              专业团队 · 一站式服务 · 高端定制
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-14 h-14 bg-[#FFE15D] rounded-xl flex items-center justify-center mb-6">
                <Award className="h-7 w-7 text-[#2D2D2D]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">地标级场馆</h3>
              <p className="text-white/80 leading-relaxed">
                全国体量最大的省级公共文化设施集聚群，独特的文化地标，彰显活动品质
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-14 h-14 bg-[#FFE15D] rounded-xl flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-[#2D2D2D]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">一站式服务</h3>
              <p className="text-white/80 leading-relaxed">
                国有文化企业专业团队统筹，提供从策划到执行的全案服务，解决多供应商对接烦恼
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-14 h-14 bg-[#FFE15D] rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="h-7 w-7 text-[#2D2D2D]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">高端定制</h3>
              <p className="text-white/80 leading-relaxed">
                打破传统模式，提供"文化+"沉浸式体验，涵盖艺术展览、非遗手作、学术研讨等多场景
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FFE15D] to-[#FF9F43] hover:shadow-xl text-[#2D2D2D] px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:scale-105"
            >
              立即咨询
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
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
    </div>
  );
}
