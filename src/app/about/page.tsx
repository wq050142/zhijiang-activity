import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, Phone, Mail, MapPin, BookOpen, Award, Users, Star, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: '关于我们 | 之江文化中心企业活动服务',
  description: '浙江文化空间发展有限公司专注大型文化综合体运营，依托之江文化中心四大场馆资源，为企业提供高品质活动服务。',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* 顶部导航栏 */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-[#4A3728]/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Building2 className="h-10 w-10 text-[#4A3728]" />
            <div>
              <span className="text-2xl font-bold text-[#4A3728]">之江文化中心</span>
              <p className="text-xs text-[#C9A86C]">企业活动服务</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link href="/about" className="text-[#C9A86C] font-medium">关于我们</Link>
            <Link href="/services/party" className="text-[#4A3728] hover:text-[#C9A86C] transition-colors font-medium">主题党建</Link>
            <Link href="/services/team" className="text-[#4A3728] hover:text-[#C9A86C] transition-colors font-medium">团建拓展</Link>
            <Link href="/services/training" className="text-[#4A3728] hover:text-[#C9A86C] transition-colors font-medium">访学培训</Link>
            <Link href="/services/custom" className="text-[#4A3728] hover:text-[#C9A86C] transition-colors font-medium">定制活动</Link>
            <Link href="/cases" className="text-[#4A3728] hover:text-[#C9A86C] transition-colors font-medium">案例中心</Link>
            <Link href="/contact" className="text-[#4A3728] hover:text-[#C9A86C] transition-colors font-medium">联系我们</Link>
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:191-0658-3798" className="hidden md:flex items-center gap-2 text-[#4A3728] font-medium">
              <Phone className="h-4 w-4" />
              191-0658-3798
            </a>
            <Link href="/contact" className="bg-[#4A3728] hover:bg-[#2F4F4F] text-white px-6 py-2 rounded-full transition-all hover:shadow-lg">
              立即咨询
            </Link>
          </div>
        </div>
      </nav>

      {/* 页面标题 */}
      <section className="pt-32 pb-12 px-6 bg-gradient-to-br from-[#4A3728] to-[#2F4F4F]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            关于我们
          </h1>
          <p className="text-xl text-white/80">
            文化空间运营专家 · 打造有温度的活动体验
          </p>
        </div>
      </section>

      {/* 品牌故事 */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <Building2 className="h-6 w-6 text-[#C9A86C]" />
                <span className="text-[#C9A86C] font-medium">品牌故事</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-[#4A3728]">
                浙江文化空间发展有限公司
              </h2>
              <p className="text-xl text-[#4A3728]/70 mb-6 font-medium">
                文化空间运营专家
              </p>
              <div className="space-y-4 text-[#4A3728]/80 leading-relaxed mb-8">
                <p>
                  浙江文化空间发展有限公司专注于大型文化综合体运营，
                  拥有专业的活动策划、执行团队和丰富的场馆资源整合能力。
                </p>
                <p>
                  我们致力于将文化场馆打造成为企业活动的重要载体，
                  通过创新的活动形式和深度的文化体验，
                  为企业提供超越传统活动场景的价值。
                </p>
                <p>
                  自成立以来，我们已为众多知名企业、政府机构提供了
                  高质量的活动服务，积累了丰富的行业经验与良好的市场口碑。
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#C9A86C] mb-1">500+</div>
                  <div className="text-sm text-[#4A3728]/60">服务企业</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#C9A86C] mb-1">1000+</div>
                  <div className="text-sm text-[#4A3728]/60">活动案例</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#C9A86C] mb-1">98%</div>
                  <div className="text-sm text-[#4A3728]/60">客户满意度</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#4A3728]/10">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4A3728] rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#4A3728] mb-2">专业团队</h3>
                    <p className="text-[#4A3728]/70 text-sm">
                      拥有专业的活动策划师、文化顾问、执行团队，
                      确保每个活动都能达到最佳效果
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C9A86C] rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#4A3728] mb-2">资源整合</h3>
                    <p className="text-[#4A3728]/70 text-sm">
                      整合四大场馆独特资源，为企业提供独一无二的活动体验
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#8B4513] rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#4A3728] mb-2">创新形式</h3>
                    <p className="text-[#4A3728]/70 text-sm">
                      突破传统活动模式，打造沉浸式、互动式的文化体验活动
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2F4F4F] rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#4A3728] mb-2">品质保障</h3>
                    <p className="text-[#4A3728]/70 text-sm">
                      从策划到执行全程把控，确保每个环节都达到高品质标准
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 场馆资源介绍 */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Building2 className="h-6 w-6 text-[#C9A86C]" />
              <span className="text-[#C9A86C] font-medium">场馆资源</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#4A3728]">
              四大场馆资源
            </h2>
            <p className="text-xl text-[#4A3728]/70 max-w-2xl mx-auto">
              依托全国最大的省级文化综合体，提供独一无二的活动场地
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 浙江省图书馆 */}
            <div className="bg-gradient-to-br from-[#4A3728] to-[#2F4F4F] rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-10 w-10 text-[#C9A86C]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">浙江省图书馆</h3>
                  <div className="flex items-center gap-2 mb-4 text-white/80">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm">8.5万平方米</span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm">700万册藏书</span>
                  </div>
                  <p className="text-white/80 leading-relaxed mb-4">
                    总建筑面积8.5万平方米，馆藏图书超700万册。拥有现代化设施与舒适的学习环境，是企业读书会、知识分享会、培训活动的理想场所。
                  </p>
                  <div className="space-y-2 text-sm text-white/70">
                    <p>✓ 多功能会议厅</p>
                    <p>✓ 专业演播厅</p>
                    <p>✓ 阅览活动空间</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 浙江省博物馆 */}
            <div className="bg-gradient-to-br from-[#8B4513] to-[#C9A86C] rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">浙江省博物馆</h3>
                  <div className="flex items-center gap-2 mb-4 text-white/80">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm">国家一级博物馆</span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm">10万+文物</span>
                  </div>
                  <p className="text-white/80 leading-relaxed mb-4">
                    国家一级博物馆，馆藏文物10万余件。以"浙江七千年"为主线，是企业文化研学、历史教育、艺术鉴赏的首选之地。
                  </p>
                  <div className="space-y-2 text-sm text-white/70">
                    <p>✓ 历史展览区</p>
                    <p>✓ 艺术展厅</p>
                    <p>✓ 文物修复观摩</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 浙江省非遗馆 */}
            <div className="bg-gradient-to-br from-[#2F4F4F] to-[#4A3728] rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="h-10 w-10 text-[#C9A86C]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">浙江省非遗馆</h3>
                  <div className="flex items-center gap-2 mb-4 text-white/80">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm">省级非遗馆</span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm">1000+项目</span>
                  </div>
                  <p className="text-white/80 leading-relaxed mb-4">
                    国内最大的省级非遗主题展馆。展示1000余项非遗项目，为非遗手作体验、文化传承活动提供丰富素材。
                  </p>
                  <div className="space-y-2 text-sm text-white/70">
                    <p>✓ 非遗展示区</p>
                    <p>✓ 手作体验工坊</p>
                    <p>✓ 演艺活动空间</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 浙江省文学馆 */}
            <div className="bg-gradient-to-br from-[#C9A86C] to-[#8B4513] rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Star className="h-10 w-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">浙江省文学馆</h3>
                  <div className="flex items-center gap-2 mb-4 text-white/80">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm">文学殿堂</span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm">文化活动中心</span>
                  </div>
                  <p className="text-white/80 leading-relaxed mb-4">
                    以浙江文学发展脉络为脉络，展示浙江籍作家的文学成就。适合举办文学讲座、读书沙龙、文学创作工坊等活动。
                  </p>
                  <div className="space-y-2 text-sm text-white/70">
                    <p>✓ 文学展厅</p>
                    <p>✓ 报告厅</p>
                    <p>✓ 创作交流空间</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 团队介绍 */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Users className="h-6 w-6 text-[#C9A86C]" />
              <span className="text-[#C9A86C] font-medium">团队介绍</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#4A3728]">
              专业团队
            </h2>
            <p className="text-xl text-[#4A3728]/70 max-w-2xl mx-auto">
              汇聚行业精英，打造卓越服务
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center border border-[#4A3728]/10">
              <div className="w-20 h-20 bg-[#4A3728] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#4A3728]">策划团队</h3>
              <p className="text-[#4A3728]/70 text-sm leading-relaxed">
                拥有10年以上活动策划经验的专业团队，
                擅长将文化与商业活动完美结合
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center border border-[#4A3728]/10">
              <div className="w-20 h-20 bg-[#C9A86C] rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#4A3728]">文化顾问</h3>
              <p className="text-[#4A3728]/70 text-sm leading-relaxed">
                汇聚知名学者、文化专家，
                为活动注入深厚的文化底蕴
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center border border-[#4A3728]/10">
              <div className="w-20 h-20 bg-[#8B4513] rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#4A3728]">执行团队</h3>
              <p className="text-[#4A3728]/70 text-sm leading-relaxed">
                经验丰富的现场执行团队，
                确保每个活动都能顺利圆满完成
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 资质荣誉 */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Award className="h-6 w-6 text-[#C9A86C]" />
              <span className="text-[#C9A86C] font-medium">资质荣誉</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#4A3728]">
              资质荣誉
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              '浙江省重点文化企业',
              '浙江省文化产业示范基地',
              '杭州市文化创意产业领军企业',
              'ISO9001质量管理体系认证'
            ].map((honor, index) => (
              <div key={index} className="bg-[#F5F1E8] rounded-xl p-6 text-center border border-[#4A3728]/10">
                <Award className="h-10 w-10 text-[#C9A86C] mx-auto mb-4" />
                <p className="text-[#4A3728] font-medium text-sm leading-relaxed">{honor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 区域 */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#4A3728] to-[#2F4F4F]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            期待与您合作
          </h2>
          <p className="text-xl text-white/80 mb-8">
            让文化赋能您的企业活动，打造独一无二的文化体验
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#C9A86C] hover:bg-[#8B4513] text-white px-10 py-4 rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            立即联系我们
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-[#4A3728] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="h-8 w-8 text-[#C9A86C]" />
                <div>
                  <span className="text-xl font-bold">之江文化中心</span>
                  <p className="text-xs text-[#C9A86C]">企业活动服务</p>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                依托四大场馆资源，为企业提供高品质、有文化深度的活动服务
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-[#C9A86C]">服务内容</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><Link href="/services/party" className="hover:text-white transition-colors">主题党建</Link></li>
                <li><Link href="/services/team" className="hover:text-white transition-colors">团建拓展</Link></li>
                <li><Link href="/services/training" className="hover:text-white transition-colors">访学培训</Link></li>
                <li><Link href="/services/custom" className="hover:text-white transition-colors">定制活动</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-[#C9A86C]">关于我们</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><Link href="/about" className="hover:text-white transition-colors">品牌故事</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">场馆资源</Link></li>
                <li><Link href="/cases" className="hover:text-white transition-colors">成功案例</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">联系我们</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-[#C9A86C]">联系方式</h3>
              <ul className="space-y-3 text-white/70 text-sm">
                <li className="flex items-start gap-2">
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#C9A86C]" />
                  <span>191-0658-3798</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#C9A86C]" />
                  <span>service@zhijiang-culture.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#C9A86C]" />
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
