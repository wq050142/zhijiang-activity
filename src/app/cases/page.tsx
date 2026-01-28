import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, Phone, ArrowRight, BookOpen, Users, Calendar, Award, Sparkles, MapPin, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: '成功案例 - 之江文化中心 | 企业活动服务',
  description: '之江文化中心成功案例展示，包括儿童节活动、妇女节团建、VIP客户活动、养生团建、学习培训、党建活动等众多知名企业合作案例。',
  keywords: '企业活动案例,活动策划案例,杭州活动案例,党建活动案例,团建活动案例,VIP客户活动,非遗体验',
};

export default function CasesPage() {
  const cases = [
    {
      id: 1,
      client: '上海银行',
      title: '童趣无限·考古总动员',
      category: '儿童节活动',
      year: '2024',
      gradient: 'from-[#FFE15D] to-[#FF9F43]',
      icon: BookOpen,
      description: '依托博物馆馆藏资源，打造沉浸式"小小考古学家"体验。通过模拟探方挖掘与文物修复，让亲子家庭在动手实践中触碰历史，极大提升了客户粘性。',
      highlights: ['镇馆之宝', '考古体验', '探方挖掘', '文物修复']
    },
    {
      id: 2,
      client: '厦门航空',
      title: '自然VR科技秀',
      category: '儿童节活动',
      year: '2024',
      gradient: 'from-[#2D2D2D] to-[#4B5563]',
      icon: Sparkles,
      description: '将自然生态科普与前沿VR技术完美融合，为厦门航空亲子家庭打造一场"赛博自然"探索之旅。以科技手段解锁自然奥秘，激发青少年的探索欲与科学兴趣。',
      highlights: ['自然科普', 'VR技术', '科技融合', '激发兴趣']
    },
    {
      id: 3,
      client: '浙江省财政厅&农商银行',
      title: '联合节日活动',
      category: '儿童节活动',
      year: '2024',
      gradient: 'from-[#6B7280] to-[#4B5563]',
      icon: Award,
      description: '策划跨界联动的节日活动，巧妙融合非遗手作与现代科技体验。同时包含公益捐助项目，在传递社会正能量的同时，不仅丰富了职工子女的节日生活，更促进了政企文化的深度交流。',
      highlights: ['非遗手作', '科技体验', '公益捐助', '跨界联动']
    },
    {
      id: 4,
      client: '浙江省财政厅',
      title: '女神节美学疗愈专场',
      category: '妇女节团建活动',
      year: '2024',
      gradient: 'from-[#F472B6] to-[#EC4899]',
      icon: Star,
      description: '专为女性职工定制的"美学疗愈"专场，将传统非遗技艺与现代数字艺术展陈相结合。通过高品质的文化体验，展现新时代女性风采，提升团队凝聚力。',
      highlights: ['非遗技艺', '数字艺术', '美学疗愈', '女性风采']
    },
    {
      id: 5,
      client: '浙江省档案馆&农商银行',
      title: '三八共建活动',
      category: '妇女节团建活动',
      year: '2024',
      gradient: 'from-[#EC4899] to-[#DB2777]',
      icon: Award,
      description: '组织浙江省档案馆与农商银行两大单位共同走出办公楼，走进非遗馆开展跨界共建活动。让职工在沉浸式的非遗空间中体验传统技艺，通过文化纽带深化了双方单位的联谊与交流。',
      highlights: ['跨界共建', '非遗空间', '传统技艺', '文化交流']
    },
    {
      id: 6,
      client: 'AITO问界汽车',
      title: '车主活动',
      category: 'VIP客户活动',
      year: '2024',
      gradient: 'from-[#34D399] to-[#10B981]',
      icon: Users,
      description: '针对高端车主群体打造的专属非遗体验，将品牌理念与传统工艺深度结合。通过尊享感的文化定制服务，有效强化了车主对品牌的文化认同感与归属感。',
      highlights: ['非遗定制', '品牌理念', '尊享服务', '文化认同']
    },
    {
      id: 7,
      client: '建发地产',
      title: '暑期非遗研学活动',
      category: 'VIP客户活动',
      year: '2024',
      gradient: 'from-[#10B981] to-[#059669]',
      icon: BookOpen,
      description: '配合建发地产总部接待全国各地业主家庭赴杭开展暑期研学。通过"行走中的非遗课堂"，让业主深度体验杭州文化底蕴，打造跨越山海的品牌尊享礼遇。',
      highlights: ['暑期研学', '非遗课堂', '文化底蕴', '品牌尊享']
    },
    {
      id: 8,
      client: '绿城地产',
      title: '业主社群活动',
      category: 'VIP客户活动',
      year: '2024',
      gradient: 'from-[#059669] to-[#047857]',
      icon: Calendar,
      description: '围绕"三十而趣"主题，通过非遗手作搭建高品质社群互动平台。以文化为媒，激活邻里社交活力，助力品牌构建有温度、有深度的生活服务体系。',
      highlights: ['社群互动', '非遗手作', '邻里社交', '服务体系']
    },
    {
      id: 9,
      client: '浙江省直属机关工会委员会',
      title: '红娘荟·宋风雅集',
      category: '浪漫之约',
      year: '2024',
      gradient: 'from-[#F87171] to-[#EF4444]',
      icon: Star,
      description: '摒弃传统相亲模式，创新打造极具江南韵味的"宋风雅集"交友局。通过非遗互动自然破冰，让单身青年在风雅的文化氛围中邂逅良缘，大幅提升牵手成功率。',
      highlights: ['交友活动', '宋韵文化', '非遗互动', '自然破冰']
    },
    {
      id: 10,
      client: '绿城地产',
      title: 'MBTI青年交友活动',
      category: '浪漫之约',
      year: '2024',
      gradient: 'from-[#EF4444] to-[#DC2626]',
      icon: Sparkles,
      description: '紧扣年轻人社交潮流，引入MBTI性格测试与即兴喜剧元素。打造轻松、幽默、高效的"快乐社交"场域，精准击中Z世代青年的社交痛点。',
      highlights: ['MBTI测试', '即兴喜剧', '快乐社交', 'Z世代']
    },
    {
      id: 11,
      client: '海康威视',
      title: '脆皮打工人养生局',
      category: '养生团建',
      year: '2024',
      gradient: 'from-[#60A5FA] to-[#3B82F6]',
      icon: Users,
      description: '针对互联网及科技行业高压人群，定制"身心除锈"的疗愈专场。融合音疗放松与非遗慢生活体验，帮助员工释放职场压力，实现身心的深度充电。',
      highlights: ['养生疗愈', '音疗放松', '非遗体验', '释放压力']
    },
    {
      id: 12,
      client: '厦门航空',
      title: '后山草庐·身心修养',
      category: '养生团建',
      year: '2024',
      gradient: 'from-[#3B82F6] to-[#2563EB]',
      icon: Calendar,
      description: '带领团队回归山野自然，结合传统武术修习与自然疗愈课程。在山水之间修身养性，通过动静结合的体验，重塑团队的内在能量与平衡。',
      highlights: ['山野自然', '武术修习', '自然疗愈', '身心平衡']
    },
    {
      id: 13,
      client: '内蒙通辽市委宣传部/浙江工业大学',
      title: '公共文化空间一体化运营',
      category: '学习培训',
      year: '2023',
      gradient: 'from-[#8B5CF6] to-[#7C3AED]',
      icon: BookOpen,
      description: '依托之江文化中心运营经验，输出公共文化空间建设的"之江方案"。通过实地考察与深度授课，为学员提供可复制、可落地的先进管理模式与创新思路。',
      highlights: ['之江模式', '一体化运营', '管理模式', '创新思路']
    },
    {
      id: 14,
      client: '浙大继教院乡村工匠班',
      title: '传统非遗工艺的活化与创新',
      category: '学习培训',
      year: '2024',
      gradient: 'from-[#7C3AED] to-[#6D28D9]',
      icon: Award,
      description: '聚焦乡村振兴人才培养，探讨传统技艺的现代转化路径。通过案例教学激发工匠精神与创新思维，赋能传统手工艺人，助力非遗技艺"活"在当下。',
      highlights: ['非遗创新', '乡村振兴', '工匠精神', '现代转化']
    },
    {
      id: 15,
      client: '浙商证券',
      title: '青年读书会',
      category: '学习培训',
      year: '2024',
      gradient: 'from-[#6D28D9] to-[#5B21B6]',
      icon: Star,
      description: '为企业青年员工搭建的深度思想交流平台，不仅是知识的输入，更是观点的碰撞。通过结构化的阅读分享，促进员工认知升级与学习型组织的建设。',
      highlights: ['读书会', '思想交流', '认知升级', '学习组织']
    },
    {
      id: 16,
      client: '厦门航空',
      title: '红色剧本杀活动',
      category: '党建活动',
      year: '2024',
      gradient: 'from-[#EF4444] to-[#DC2626]',
      icon: Award,
      description: '打破枯燥的说教形式，引入沉浸式"红色剧本杀"。让党员在角色扮演中穿越历史烽烟，身临其境地感悟革命精神，实现党性教育入脑入心。',
      highlights: ['剧本杀', '红色故事', '角色扮演', '党性教育']
    },
    {
      id: 17,
      client: '西湖大学',
      title: '余村两山理论红色行',
      category: '党建活动',
      year: '2024',
      gradient: 'from-[#DC2626] to-[#B91C1C]',
      icon: BookOpen,
      description: '组织高知群体深入"两山理论"发源地余村，开展实地调研与研学。将生态文明思想与现场教学紧密结合，在绿水青山间深刻领悟可持续发展的真谛。',
      highlights: ['两山理论', '实地调研', '生态文明', '可持续发展']
    },
    {
      id: 18,
      client: '蒙牛迈胜（上海）',
      title: '企业年会',
      category: '专属定制',
      year: '2023',
      gradient: 'from-[#F59E0B] to-[#D97706]',
      icon: Calendar,
      description: '甄选独具格调的文化艺术空间作为年会场域，打破传统宴会厅的刻板印象。提供从空间美陈策划到落地执行的全案服务，以艺术氛围赋能商业盛典，为品牌注入独特的高端质感。',
      highlights: ['场地甄选', '策划布置', '全案执行', '高端质感']
    },
    {
      id: 19,
      client: 'AFLAS（亚洲实验动物学会联合会）',
      title: '2025AFLAS文化活动',
      category: '中外文化交流',
      year: '2025',
      gradient: 'from-[#14B8A6] to-[#0D9488]',
      icon: Sparkles,
      description: '提供高规格的国际会议配套文化服务，精选代表性非遗项目与文艺展演。向国际专家学者生动展示"浙江韵味"，做好文化的传播者与国际交流的桥梁。',
      highlights: ['国际会议', '参访交流', '非遗体验', '文艺展演']
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
        {/* 背景图片 */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFC107] to-[#FF9F43] opacity-95">
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFC107]/30 via-transparent to-[#FF9F43]/30"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10 pt-12 md:pt-16">
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
      <footer className="bg-[#333333] text-white py-8 px-6 md:py-12">
        <div className="max-w-7xl mx-auto">
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
