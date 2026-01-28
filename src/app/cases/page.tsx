import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, Phone, ArrowRight, BookOpen, Users, Calendar, Award, Sparkles, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: '精彩案例 - 之江文化中心 | 企业活动服务',
  description: '之江文化中心成功案例展示，包括上海银行考古活动、海康威视养生局、蒙牛迈胜年会等众多知名企业合作案例。',
  keywords: '企业活动案例,活动策划案例,杭州活动案例,党建活动案例,团建活动案例',
};

export default function CasesPage() {
  const cases = [
    {
      id: 1,
      client: '上海银行',
      title: '考古总动员',
      category: 'VIP活动',
      year: '2024',
      gradient: 'from-[#FFE15D] to-[#FF9F43]',
      icon: BookOpen,
      description: '探索千年文明 · 传承文化力量。组织VIP客户参与考古研学活动，通过文物修复体验、考古现场参观等形式，打造高端客户深度文化体验。',
      highlights: ['文物修复体验', '考古现场参观', '专家讲解服务', '文化知识竞赛']
    },
    {
      id: 2,
      client: '海康威视',
      title: '脆皮打工人养生局',
      category: '团建活动',
      year: '2024',
      gradient: 'from-[#2D2D2D] to-[#4B5563]',
      icon: Users,
      description: '中医文化溯源 · 健康生活探索。结合博物馆中医文化展区资源，为员工打造养生主题团建活动，在文化探索中关注健康生活。',
      highlights: ['音疗放松课程', '八段锦教学', '中医养生讲座', '健康检查服务']
    },
    {
      id: 3,
      client: '蒙牛迈胜',
      title: '企业年会',
      category: '年会活动',
      year: '2023',
      gradient: 'from-[#6B7280] to-[#4B5563]',
      icon: Calendar,
      description: '品牌文化融合 · 年度盛典呈现。将蒙牛品牌文化与传统艺术元素深度融合，打造独具特色的年度盛典，彰显企业文化底蕴与品牌实力。',
      highlights: ['艺术空间场地', '文化节目表演', '品牌文化融合', '全案策划执行']
    },
    {
      id: 4,
      client: 'AITO问界',
      title: '车主非遗体验',
      category: 'VIP活动',
      year: '2024',
      gradient: 'from-[#FFE15D] to-[#FF9F43]',
      icon: Award,
      description: '专属非遗体验，强化品牌归属感。为AITO问界车主打造专属非遗手作体验活动，在文化体验中加深客户对品牌的认同。',
      highlights: ['专属非遗课程', '私人导览服务', '品牌文化融合', '客户关系维护']
    },
    {
      id: 5,
      client: '内蒙通辽市委宣传部',
      title: '公共文化空间培训',
      category: '培训活动',
      year: '2023',
      gradient: 'from-[#2D2D2D] to-[#4B5563]',
      icon: BookOpen,
      description: '聚焦浙江文化探源与现代治理。组织通辽市委宣传部人员来浙学习"公共文化空间一体化运营"经验，提升公共文化服务能力。',
      highlights: ['名家专题讲座', '实地考察学习', '经验交流研讨', '培训成果落地']
    },
    {
      id: 6,
      client: '浙江省教育厅',
      title: '党建主题活动',
      category: '党建活动',
      year: '2024',
      gradient: 'from-[#6B7280] to-[#4B5563]',
      icon: Award,
      description: '红色文化浸润 · 理想信念教育。依托浙江省博物馆红色文化展区，开展沉浸式党建主题活动，在文化浸润中感悟革命精神。',
      highlights: ['红色主题展览', '沉浸式党课', '党史知识竞赛', '初心使命研讨']
    }
  ];

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
            <Link href="/cases" className="text-[#FFE15D] font-bold">
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] opacity-90">
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFE15D]/90 via-[#FFE15D]/70 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <div className="text-center">
              <Award className="h-32 md:h-48 w-32 md:w-48 text-white/40 mx-auto" />
              <p className="text-white/40 text-sm mt-4">精彩案例横幅图片</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10 pt-12 md:pt-16">
          <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur px-4 py-2 rounded-full text-[#2D2D2D] text-sm font-medium mb-6 shadow-lg border border-gray-200">
            <Award className="h-4 w-4 text-[#FFE15D]" />
            成功案例 · 见证实力
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            精选案例
          </h1>
          <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium mb-8">
            见证我们的专业实力，打造高品质活动体验
          </p>
        </div>
      </section>

      {/* 案例列表 */}
      <section className="py-12 px-4 md:px-6 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((caseItem) => (
              <div key={caseItem.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className={`aspect-video bg-gradient-to-br ${caseItem.gradient} flex items-center justify-center`}>
                  <caseItem.icon className="h-20 w-20 text-white/60" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-[#FFE15D]/20 text-[#2D2D2D] text-xs font-semibold rounded-full">
                      {caseItem.category}
                    </span>
                    <span className="text-sm text-[#6B7280]">{caseItem.year}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#2D2D2D]">{caseItem.client} - {caseItem.title}</h3>
                  <p className="text-[#6B7280] mb-4 text-sm leading-relaxed">
                    {caseItem.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    {caseItem.highlights.slice(0, 3).map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs text-[#6B7280]">
                        <div className="w-1.5 h-1.5 bg-[#FFE15D] rounded-full" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-[#FF9F43] font-semibold text-sm group-hover:gap-4 transition-all">
                    了解更多
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 合作伙伴 */}
      <section className="py-12 px-4 md:px-6 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-[#FFE15D]" />
              <span className="text-[#FF9F43] font-semibold">合作伙伴</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#2D2D2D]">
              值得信赖的合作伙伴
            </h2>
            <p className="text-sm md:text-lg text-[#6B7280]">
              已为众多知名企业提供服务
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              '浙江省教育厅',
              '海康威视',
              '厦门航空',
              '中国移动',
              '上海银行',
              '吉利汽车',
              '博世电动',
              '中国建设银行'
            ].map((partner, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-4 bg-[#F8FAFC] rounded-xl border border-gray-200 hover:border-[#FFE15D] hover:shadow-md transition-all"
              >
                <Building2 className="h-5 w-5 text-[#2D2D2D]" />
                <span className="text-[#2D2D2D] font-medium text-sm">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 md:px-6 md:py-16 bg-gradient-to-br from-[#2D2D2D] to-[#4B5563]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white">
            让我们为您创造精彩
          </h2>
          <p className="text-sm md:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            依托之江文化中心资源，为您打造独一无二的活动体验
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FFE15D] to-[#FF9F43] hover:shadow-xl text-[#2D2D2D] px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:scale-105"
          >
            立即咨询
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
