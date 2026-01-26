import Link from 'next/link';
import { Building2, Phone, Award, ArrowRight, BookOpen, Users, Calendar } from 'lucide-react';

export default function CasesPage() {
  const cases = [
    {
      id: 'shanghai-bank',
      title: '上海银行考古活动',
      type: 'VIP活动',
      year: '2024年度',
      color: 'from-[#4A3728] to-[#2F4F4F]',
      icon: <BookOpen className="h-20 w-20" />,
      client: '上海银行',
      people: '50人',
      location: '浙江省博物馆',
      summary: '探索千年文明 · 传承文化力量',
      description: '组织上海银行VIP客户参与考古研学活动，通过文物修复体验、考古现场参观等形式，打造高端客户深度文化体验。',
      background: '为感谢上海银行高端客户的长期支持，打造一次具有独特文化价值的客户体验活动，增强客户黏性与品牌认同。',
      content: [
        '专家导览：由考古专家带领参观考古展区，深入了解浙江考古发现与历史脉络。',
        '文物修复体验：在专业修复师指导下，参与模拟文物修复过程，感受文物保护的重要性。',
        '考古现场参观：实地参观考古发掘现场（模拟），了解考古工作的流程与意义。',
        '文化交流晚宴：与考古学者共进晚宴，深入交流文化感悟。'
      ],
      results: ['客户满意度达98%以上', '增强了客户对银行的认同感与忠诚度', '打造了区别于传统银行客户服务的差异化体验', '获得客户的高度评价与持续关注'],
      quote: '"这是一次非常有意义的文化体验，让我们在轻松愉快的氛围中感受到了中华文明的博大精深，也让我们对上海银行的专业服务有了更深的认识。" ——上海银行VIP客户代表'
    },
    {
      id: 'hikvision',
      title: '海康威视养生局',
      type: '团建活动',
      year: '2024年度',
      color: 'from-[#8B4513] to-[#C9A86C]',
      icon: <Users className="h-20 w-20" />,
      client: '海康威视',
      people: '120人',
      location: '浙江省博物馆 + 浙江省非遗馆',
      summary: '中医文化溯源 · 健康生活探索',
      description: '结合博物馆中医文化展区资源，为海康威视员工打造养生主题团建活动，在文化探索中关注健康生活。',
      background: '关注员工健康生活，打造具有文化深度的团建活动，在轻松愉悦的氛围中传递健康理念，增强团队凝聚力。',
      content: [
        '中医文化讲座：邀请中医专家讲解中医养生知识，结合博物馆中医展区文物进行讲解。',
        '中药材辨识体验：学习辨识常见中药材，了解中药材的功效与使用方法。',
        '传统养生功法体验：学习传统养生功法，如太极拳、八段锦等。',
        '健康茶歇：提供养生茶饮与传统点心，在品茶交流中增进团队感情。'
      ],
      results: ['员工参与度与满意度双高', '传递了健康生活理念，提升了员工健康意识', '增强了团队凝聚力与归属感', '打造了有温度的企业文化氛围'],
      quote: '"这次活动让我们在体验传统文化的同时，也学到了很多养生知识，团队氛围也更加融洽了。" ——海康威视员工'
    },
    {
      id: 'mengniu',
      title: '蒙牛迈胜年会',
      type: '年会活动',
      year: '2023年度',
      color: 'from-[#2F4F4F] to-[#C9A86C]',
      icon: <Calendar className="h-20 w-20" />,
      client: '蒙牛迈胜',
      people: '300人',
      location: '之江文化中心多功能厅',
      summary: '品牌文化融合 · 年度盛典呈现',
      description: '将蒙牛品牌文化与传统艺术元素深度融合，打造独具特色的年度盛典，彰显企业文化底蕴与品牌实力。',
      background: '为蒙牛迈胜打造具有品牌特色与艺术感的年度盛典，彰显企业文化实力，提升团队士气。',
      content: [
        '品牌文化主题演绎：将蒙牛品牌文化与中国传统艺术元素深度融合，打造开篇表演。',
        '年度工作总结与表彰：回顾年度成果，表彰优秀员工与团队。',
        '艺术表演环节：邀请专业艺术团体演出，结合员工才艺展示，打造精彩晚会。',
        '互动抽奖环节：设置丰富的奖品，增强活动参与感与趣味性。'
      ],
      results: ['年会氛围热烈，员工满意度达99%', '充分展示了蒙牛迈胜的品牌实力与文化底蕴', '有效提升了团队士气与凝聚力', '打造了具有行业影响力的年度盛典'],
      quote: '"这次年会太精彩了！不仅展现了我们蒙牛的品牌文化，也让大家感受到了艺术的魅力。" ——蒙牛迈胜员工'
    }
  ];

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
            <Link href="/about" className="text-[#4A3728] hover:text-[#C9A86C] transition-colors font-medium">关于我们</Link>
            <Link href="/services/party" className="text-[#4A3728] hover:text-[#C9A86C] transition-colors font-medium">主题党建</Link>
            <Link href="/services/team" className="text-[#4A3728] hover:text-[#C9A86C] transition-colors font-medium">团建拓展</Link>
            <Link href="/services/training" className="text-[#4A3728] hover:text-[#C9A86C] transition-colors font-medium">访学培训</Link>
            <Link href="/services/custom" className="text-[#4A3728] hover:text-[#C9A86C] transition-colors font-medium">定制活动</Link>
            <Link href="/cases" className="text-[#C9A86C] font-medium">案例中心</Link>
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

      {/* Banner区域 */}
      <section className="pt-32 pb-12 px-6 bg-gradient-to-br from-[#4A3728] to-[#2F4F4F]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Award className="h-6 w-6 text-[#C9A86C]" />
            <span className="text-white/80 font-medium">成功案例</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            精选案例
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            见证我们的专业实力，打造高品质活动体验
          </p>
        </div>
      </section>

      {/* 案例列表 */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            {cases.map((caseItem, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-xl border border-[#4A3728]/10">
                <div className="grid lg:grid-cols-2">
                  {/* 左侧图片区域 */}
                  <div className={`aspect-video lg:aspect-auto bg-gradient-to-br ${caseItem.color} flex items-center justify-center`}>
                    <div className="text-white/30">
                      {caseItem.icon}
                    </div>
                  </div>

                  {/* 右侧内容区域 */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-[#4A3728]/10 text-[#4A3728] text-xs font-medium rounded-full">
                        {caseItem.type}
                      </span>
                      <span className="text-sm text-[#4A3728]/50">{caseItem.year}</span>
                    </div>

                    <h2 className="text-3xl font-bold mb-3 text-[#4A3728]">{caseItem.title}</h2>
                    <p className="text-xl text-[#C9A86C] font-medium mb-4">{caseItem.summary}</p>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div>
                        <p className="text-[#4A3728]/60 text-sm mb-1">客户名称</p>
                        <p className="font-bold text-[#4A3728]">{caseItem.client}</p>
                      </div>
                      <div>
                        <p className="text-[#4A3728]/60 text-sm mb-1">参与人数</p>
                        <p className="font-bold text-[#4A3728]">{caseItem.people}</p>
                      </div>
                      <div>
                        <p className="text-[#4A3728]/60 text-sm mb-1">活动地点</p>
                        <p className="font-bold text-[#4A3728]">{caseItem.location}</p>
                      </div>
                    </div>

                    <p className="text-[#4A3728]/70 leading-relaxed mb-6">{caseItem.description}</p>

                    <Link
                      href={`/cases/${caseItem.id}`}
                      className="inline-flex items-center gap-2 text-[#C9A86C] font-medium hover:gap-4 transition-all"
                    >
                      查看详情
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
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
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/50 text-sm">© 2024 浙江文化空间发展有限公司 | 版权所有</p>
        </div>
      </footer>
    </div>
  );
}
