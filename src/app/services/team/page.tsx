import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, Phone, ArrowRight, Users, Heart, Sparkles, CheckCircle2, Calendar, Award, Smile } from 'lucide-react';

export const metadata: Metadata = {
  title: '团建拓展 - 之江文化中心 | 企业活动服务',
  description: '之江文化中心团建拓展服务，提供非遗手作、养生疗愈、青年交友等特色团建活动，心灵滋养与精神升华，提升团队文化软实力。',
  keywords: '团建拓展,企业团建,杭州团建活动策划,非遗手作团建,养生疗愈团建',
};

export default function TeamBuildingPage() {
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
            <Link href="/services/team" className="text-[#FFE15D] font-bold">
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFE15D]/10 via-white to-[#FFE15D]/5"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-[#2D2D2D] text-sm font-medium mb-6 shadow-sm border border-gray-200">
            <Heart className="h-4 w-4 text-[#FFE15D]" />
            心灵滋养 · 精神升华
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-[#2D2D2D]">
            团建拓展
          </h1>
          <p className="text-base md:text-xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed font-medium mb-8">
            在文化沉浸中提升团队文化软实力，打破传统模式
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
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#2D2D2D] px-5 py-2.5 md:px-8 md:py-4 rounded-full text-sm md:text-lg font-medium transition-all border-2 border-gray-200 hover:border-[#FFE15D]"
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
                <Users className="h-6 w-6 text-[#FFE15D]" />
                <span className="text-[#FF9F43] font-semibold">服务特色</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold mb-6 text-[#2D2D2D]">
                文化沉浸团建，心灵滋养体验
              </h2>
              <div className="space-y-4 text-[#6B7280] leading-relaxed">
                <p>
                  依托之江文化中心非遗馆、图书馆等场馆资源，我们打破传统团建模式，将文化活动与团队建设深度融合。
                </p>
                <p>
                  通过非遗手作、养生疗愈、青年交友等形式，在文化体验中增强团队凝聚力，在身心放松中提升团队软实力，让团建活动更有温度和深度。
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-2 text-[#2D2D2D] font-medium">
                  <CheckCircle2 className="h-5 w-5 text-[#FFE15D]" />
                  <span>非遗手作体验</span>
                </div>
                <div className="flex items-center gap-2 text-[#2D2D2D] font-medium">
                  <CheckCircle2 className="h-5 w-5 text-[#FFE15D]" />
                  <span>养生疗愈课程</span>
                </div>
                <div className="flex items-center gap-2 text-[#2D2D2D] font-medium">
                  <CheckCircle2 className="h-5 w-5 text-[#FFE15D]" />
                  <span>青年社交活动</span>
                </div>
                <div className="flex items-center gap-2 text-[#2D2D2D] font-medium">
                  <CheckCircle2 className="h-5 w-5 text-[#FFE15D]" />
                  <span>定制化团建</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#FFE15D]/10 to-[#FFE15D]/5 rounded-2xl p-8 border border-[#FFE15D]/20">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#2D2D2D] mb-2">心灵滋养</h3>
                    <p className="text-[#6B7280] text-sm">
                      在文化体验中放松身心，缓解工作压力，实现心灵滋养
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#2D2D2D] mb-2">团队共创</h3>
                    <p className="text-[#6B7280] text-sm">
                      通过协作完成非遗作品，打破部门壁垒，增强团队凝聚力
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#2D2D2D] mb-2">软实力提升</h3>
                    <p className="text-[#6B7280] text-sm">
                      文化浸润提升团队人文素养，打造有文化底蕴的团队
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
              多元化团建服务，满足不同团队需求
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 产品 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-2xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#2D2D2D]">非遗手作</h3>
              <p className="text-[#6B7280] mb-6 leading-relaxed">
                分组协作完成非遗作品，在动手实践中感受传统文化魅力，打破部门壁垒
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  <span>大师现场教学</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  <span>团队协作体验</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  <span>作品带走留念</span>
                </div>
              </div>
            </div>

            {/* 产品 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2D2D2D] to-[#4B5563] rounded-2xl flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#2D2D2D]">养生疗愈</h3>
              <p className="text-[#6B7280] mb-6 leading-relaxed">
                音疗放松、八段锦、中医讲座，针对高压人群"身心除锈"
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  <span>音疗放松课程</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  <span>八段锦教学</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  <span>中医养生讲座</span>
                </div>
              </div>
            </div>

            {/* 产品 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#6B7280] to-[#4B5563] rounded-2xl flex items-center justify-center mb-6">
                <Smile className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#2D2D2D]">青年交友</h3>
              <p className="text-[#6B7280] mb-6 leading-relaxed">
                "宋风雅颂"非遗交友局、MBTI社交专场，在文化体验中轻松交友
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  <span>文化主题社交</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  <span>趣味互动游戏</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  <span>轻松交友氛围</span>
                </div>
              </div>
            </div>

            {/* 产品 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-2xl flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#2D2D2D]">文化读书会</h3>
              <p className="text-[#6B7280] mb-6 leading-relaxed">
                在浙江图书馆开展主题读书会，分享阅读心得，提升团队文化素养
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  <span>精选图书推荐</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  <span>深度阅读分享</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  <span>思想碰撞交流</span>
                </div>
              </div>
            </div>

            {/* 产品 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2D2D2D] to-[#4B5563] rounded-2xl flex items-center justify-center mb-6">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#2D2D2D]">艺术体验</h3>
              <p className="text-[#6B7280] mb-6 leading-relaxed">
                参观艺术展览，参与艺术创作，在审美中陶冶情操，提升艺术修养
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  <span>艺术展览导览</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  <span>艺术创作 workshop</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  <span>美学鉴赏课程</span>
                </div>
              </div>
            </div>

            {/* 产品 6 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#6B7280] to-[#4B5563] rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#2D2D2D]">定制化团建</h3>
              <p className="text-[#6B7280] mb-6 leading-relaxed">
                根据团队特点和需求，量身定制特色团建方案
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  <span>团队需求分析</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  <span>专属方案设计</span>
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
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Calendar className="h-6 w-6 text-[#FFE15D]" />
              <span className="text-[#FF9F43] font-semibold">服务流程</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#2D2D2D]">
              5步标准流程
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: '01', title: '需求对接', desc: '深入了解团建活动需求' },
              { step: '02', title: '方案设计', desc: '量身定制团建活动方案' },
              { step: '03', title: '确认签约', desc: '方案确认，签订合同' },
              { step: '04', title: '执行落地', desc: '全程专业执行服务' },
              { step: '05', title: '后续评价', desc: '活动总结，持续优化' }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-4">{item.step}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/90">{item.desc}</p>
                </div>
                {index < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-[#FFE15D]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 md:px-6 md:py-16 bg-gradient-to-br from-[#2D2D2D] to-[#4B5563]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white">
            让团建活动更有温度和深度
          </h2>
          <p className="text-sm md:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            依托之江文化中心资源，为您打造独具特色的团建活动
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
                  <Calendar className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#FFE15D]" />
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
