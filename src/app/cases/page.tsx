'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Building2, Phone, BookOpen, Users, Calendar, Award, Sparkles, MapPin, Star, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function CasesPage() {
  const [expandedImages, setExpandedImages] = useState<{ [key: number]: { isOpen: boolean; currentIndex: number } }>({});
  const scrollRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const cases = [
    {
      id: 1,
      client: '上海银行',
      title: '童趣无限·考古总动员',
      category: '儿童节活动',
      mainImage: '/上海银行考古总动员1.jpg',
      subImages: ['/上海银行考古总动员2.png', '/上海银行考古总动员3.jpg', '/上海银行考古总动员4.jpg'],
      description: '依托博物馆馆藏资源，打造沉浸式"小小考古学家"体验。通过模拟探方挖掘与文物修复，让亲子家庭在动手实践中触碰历史，极大提升了客户粘性。',
      highlights: ['镇馆之宝', '考古体验', '探方挖掘', '文物修复']
    },
    {
      id: 2,
      client: '厦门航空',
      title: '自然VR科技秀',
      category: '儿童节活动',
      mainImage: '/厦门航空自然VR科技秀1.jpg',
      subImages: ['/厦门航空自然VR科技秀2.jpg', '/厦门航空自然VR科技秀3.jpg', '/厦门航空自然VR科技秀4.jpg'],
      description: '将自然生态科普与前沿VR技术完美融合，为厦门航空亲子家庭打造一场"赛博自然"探索之旅。以科技手段解锁自然奥秘，激发青少年的探索欲与科学兴趣。',
      highlights: ['自然科普', 'VR技术', '科技融合', '激发兴趣']
    },
    {
      id: 3,
      client: '浙江省财政厅&农商银行',
      title: '联合活动',
      category: '儿童节活动',
      mainImage: '/财政厅农商行联合活动1.jpg',
      subImages: ['/财政厅农商行联合活动2.jpg', '/财政厅农商行联合活动3.jpg', '/财政厅农商行联合活动4.jpg'],
      description: '策划跨界联动的节日活动，巧妙融合非遗手作与现代科技体验。同时包含公益捐助项目，在传递社会正能量的同时，不仅丰富了职工子女的节日生活，更促进了政企文化的深度交流。',
      highlights: ['非遗手作', '科技体验', '公益捐助', '跨界联动']
    },
    {
      id: 4,
      client: '浙江省财政厅',
      title: '女神节美学疗愈专场',
      category: '妇女节团建活动',
      mainImage: '/浙江省财政厅女神节1.jpg',
      subImages: ['/浙江省财政厅女神节2.jpg', '/浙江省财政厅女神节3.jpg', '/浙江省财政厅女神节4.jpg'],
      description: '专为女性职工定制的"美学疗愈"专场，将传统非遗技艺与现代数字艺术展陈相结合。通过高品质的文化体验，展现新时代女性风采，提升团队凝聚力。',
      highlights: ['非遗技艺', '数字艺术', '美学疗愈', '女性风采']
    },
    {
      id: 5,
      client: '浙江省档案馆&农商银行',
      title: '三八共建活动',
      category: '妇女节团建活动',
      mainImage: '/档案馆三八活动1.jpg',
      subImages: ['/档案馆三八活动2.jpg', '/档案馆三八活动3.jpg', '/档案馆三八活动4.jpg'],
      description: '组织浙江省档案馆与农商银行两大单位共同走出办公楼，走进非遗馆开展跨界共建活动。让职工在沉浸式的非遗空间中体验传统技艺，通过文化纽带深化了双方单位的联谊与交流。',
      highlights: ['跨界共建', '非遗空间', '传统技艺', '文化交流']
    },
    {
      id: 6,
      client: 'AITO问界汽车',
      title: '车主活动',
      category: 'VIP客户活动',
      mainImage: '/问界车主活动1.jpg',
      subImages: ['/问界车主活动2.jpg', '/问界车主活动3.jpg', '/问界车主活动4.jpg'],
      description: '针对高端车主群体打造的专属非遗体验，将品牌理念与传统工艺深度结合。通过尊享感的文化定制服务，有效强化了车主对品牌的文化认同感与归属感。',
      highlights: ['非遗定制', '品牌理念', '尊享服务', '文化认同']
    },
    {
      id: 7,
      client: '建发地产',
      title: '暑期非遗研学活动',
      category: 'VIP客户活动',
      mainImage: '/建发地产活动1.png',
      subImages: ['/建发地产活动2.jpg', '/建发地产活动3.jpg', '/建发地产活动4.jpg'],
      description: '配合建发地产总部接待全国各地业主家庭赴杭开展暑期研学。通过"行走中的非遗课堂"，让业主深度体验杭州文化底蕴，打造跨越山海的品牌尊享礼遇。',
      highlights: ['暑期研学', '非遗课堂', '文化底蕴', '品牌尊享']
    },
    {
      id: 8,
      client: '绿城地产',
      title: '业主社群活动',
      category: 'VIP客户活动',
      mainImage: '/浙江省博物馆.png',
      subImages: ['/浙江省非遗馆.png', '/浙江省文学馆.png', '/浙江省图书馆.png'],
      description: '围绕"三十而趣"主题，通过非遗手作搭建高品质社群互动平台。以文化为媒，激活邻里社交活力，助力品牌构建有温度、有深度的生活服务体系。',
      highlights: ['社群互动', '非遗手作', '邻里社交', '服务体系']
    },
    {
      id: 9,
      client: '浙江省直属机关工会委员会',
      title: '红娘荟·宋风雅集',
      category: '浪漫之约',
      mainImage: '/浙江省博物馆.png',
      subImages: ['/浙江省非遗馆.png', '/浙江省文学馆.png', '/浙江省图书馆.png'],
      description: '摒弃传统相亲模式，创新打造极具江南韵味的"宋风雅集"交友局。通过非遗互动自然破冰，让单身青年在风雅的文化氛围中邂逅良缘，大幅提升牵手成功率。',
      highlights: ['交友活动', '宋韵文化', '非遗互动', '自然破冰']
    },
    {
      id: 10,
      client: '绿城地产',
      title: 'MBTI青年交友活动',
      category: '浪漫之约',
      mainImage: '/浙江省博物馆.png',
      subImages: ['/浙江省非遗馆.png', '/浙江省文学馆.png', '/浙江省图书馆.png'],
      description: '紧扣年轻人社交潮流，引入MBTI性格测试与即兴喜剧元素。打造轻松、幽默、高效的"快乐社交"场域，精准击中Z世代青年的社交痛点。',
      highlights: ['MBTI测试', '即兴喜剧', '快乐社交', 'Z世代']
    },
    {
      id: 11,
      client: '海康威视',
      title: '脆皮打工人养生局',
      category: '养生团建',
      mainImage: '/海康威视脆皮打工人养生局.png',
      subImages: ['/浙江省博物馆.png', '/浙江省非遗馆.png', '/浙江省文学馆.png'],
      description: '针对互联网及科技行业高压人群，定制"身心除锈"的疗愈专场。融合音疗放松与非遗慢生活体验，帮助员工释放职场压力，实现身心的深度充电。',
      highlights: ['养生疗愈', '音疗放松', '非遗体验', '释放压力']
    },
    {
      id: 12,
      client: '厦门航空',
      title: '后山草庐·身心修养',
      category: '养生团建',
      mainImage: '/浙江省博物馆.png',
      subImages: ['/浙江省非遗馆.png', '/浙江省文学馆.png', '/浙江省图书馆.png'],
      description: '带领团队回归山野自然，结合传统武术修习与自然疗愈课程。在山水之间修身养性，通过动静结合的体验，重塑团队的内在能量与平衡。',
      highlights: ['山野自然', '武术修习', '自然疗愈', '身心平衡']
    },
    {
      id: 13,
      client: '内蒙通辽市委宣传部/浙江工业大学',
      title: '公共文化空间一体化运营',
      category: '学习培训',
      mainImage: '/浙江省博物馆.png',
      subImages: ['/浙江省非遗馆.png', '/浙江省文学馆.png', '/浙江省图书馆.png'],
      description: '依托之江文化中心运营经验，输出公共文化空间建设的"之江方案"。通过实地考察与深度授课，为学员提供可复制、可落地的先进管理模式与创新思路。',
      highlights: ['之江模式', '一体化运营', '管理模式', '创新思路']
    },
    {
      id: 14,
      client: '浙大继教院乡村工匠班',
      title: '传统非遗工艺的活化与创新',
      category: '学习培训',
      mainImage: '/浙江省博物馆.png',
      subImages: ['/浙江省非遗馆.png', '/浙江省文学馆.png', '/浙江省图书馆.png'],
      description: '聚焦乡村振兴人才培养，探讨传统技艺的现代转化路径。通过案例教学激发工匠精神与创新思维，赋能传统手工艺人，助力非遗技艺"活"在当下。',
      highlights: ['非遗创新', '乡村振兴', '工匠精神', '现代转化']
    },
    {
      id: 15,
      client: '浙商证券',
      title: '青年读书会',
      category: '学习培训',
      mainImage: '/浙江省博物馆.png',
      subImages: ['/浙江省非遗馆.png', '/浙江省文学馆.png', '/浙江省图书馆.png'],
      description: '为企业青年员工搭建的深度思想交流平台，不仅是知识的输入，更是观点的碰撞。通过结构化的阅读分享，促进员工认知升级与学习型组织的建设。',
      highlights: ['读书会', '思想交流', '认知升级', '学习组织']
    },
    {
      id: 16,
      client: '厦门航空',
      title: '红色剧本杀活动',
      category: '党建活动',
      mainImage: '/浙江省博物馆.png',
      subImages: ['/浙江省非遗馆.png', '/浙江省文学馆.png', '/浙江省图书馆.png'],
      description: '打破枯燥的说教形式，引入沉浸式"红色剧本杀"。让党员在角色扮演中穿越历史烽烟，身临其境地感悟革命精神，实现党性教育入脑入心。',
      highlights: ['剧本杀', '红色故事', '角色扮演', '党性教育']
    },
    {
      id: 17,
      client: '西湖大学',
      title: '余村两山理论红色行',
      category: '党建活动',
      mainImage: '/浙江省博物馆.png',
      subImages: ['/浙江省非遗馆.png', '/浙江省文学馆.png', '/浙江省图书馆.png'],
      description: '组织高知群体深入"两山理论"发源地余村，开展实地调研与研学。将生态文明思想与现场教学紧密结合，在绿水青山间深刻领悟可持续发展的真谛。',
      highlights: ['两山理论', '实地调研', '生态文明', '可持续发展']
    },
    {
      id: 18,
      client: '蒙牛迈胜（上海）',
      title: '企业年会',
      category: '专属定制',
      mainImage: '/浙江省博物馆.png',
      subImages: ['/浙江省非遗馆.png', '/浙江省文学馆.png', '/浙江省图书馆.png'],
      description: '甄选独具格调的文化艺术空间作为年会场域，打破传统宴会厅的刻板印象。提供从空间美陈策划到落地执行的全案服务，以艺术氛围赋能商业盛典，为品牌注入独特的高端质感。',
      highlights: ['场地甄选', '策划布置', '全案执行', '高端质感']
    },
    {
      id: 19,
      client: 'AFLAS（亚洲实验动物学会联合会）',
      title: '2025AFLAS文化活动',
      category: '中外文化交流',
      mainImage: '/浙江省博物馆.png',
      subImages: ['/浙江省非遗馆.png', '/浙江省文学馆.png', '/浙江省图书馆.png'],
      description: '提供高规格的国际会议配套文化服务，精选代表性非遗项目与文艺展演。向国际专家学者生动展示"浙江韵味"，做好文化的传播者与国际交流的桥梁。',
      highlights: ['国际会议', '参访交流', '非遗体验', '文艺展演']
    }
  ];

  // 获取所有图片
  const getAllImages = (caseItem: any) => {
    return [caseItem.mainImage, ...caseItem.subImages];
  };

  // 打开图片放大
  const openImage = (caseId: number, index: number) => {
    setExpandedImages(prev => ({
      ...prev,
      [caseId]: { isOpen: true, currentIndex: index }
    }));
  };

  // 关闭图片放大
  const closeImage = (caseId: number) => {
    setExpandedImages(prev => ({
      ...prev,
      [caseId]: { isOpen: false, currentIndex: 0 }
    }));
  };

  // 切换到上一张图片
  const prevImage = (caseId: number) => {
    setExpandedImages(prev => {
      const current = prev[caseId];
      if (!current) return prev;
      const allImages = cases.find(c => c.id === caseId);
      if (!allImages) return prev;
      const images = getAllImages(allImages);
      const newIndex = (current.currentIndex - 1 + images.length) % images.length;
      return {
        ...prev,
        [caseId]: { isOpen: true, currentIndex: newIndex }
      };
    });
  };

  // 切换到下一张图片
  const nextImage = (caseId: number) => {
    setExpandedImages(prev => {
      const current = prev[caseId];
      if (!current) return prev;
      const allImages = cases.find(c => c.id === caseId);
      if (!allImages) return prev;
      const images = getAllImages(allImages);
      const newIndex = (current.currentIndex + 1) % images.length;
      return {
        ...prev,
        [caseId]: { isOpen: true, currentIndex: newIndex }
      };
    });
  };

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
      <section className="pt-20 pb-8 px-4 md:px-6 md:pb-12 relative overflow-hidden">
        {/* 背景图片 */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/首页背景.png")' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFC107]/80 to-[#FF9F43]/80">
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFC107]/30 via-transparent to-[#FF9F43]/30"></div>
          </div>
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
            {cases.map((caseItem) => {
              const allImages = getAllImages(caseItem);
              const expandedState = expandedImages[caseItem.id];

              return (
                <div key={caseItem.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  {/* 图片滚动区域 */}
                  <div
                    ref={(el) => { scrollRefs.current[caseItem.id] = el; }}
                    className="relative overflow-x-auto scroll-smooth snap-x snap-mandatory cursor-grab active:cursor-grabbing"
                  >
                    <div className="flex gap-3 p-3">
                      {allImages.map((image, index) => (
                        <div
                          key={index}
                          className="flex-shrink-0 w-[400px] snap-start cursor-pointer"
                          onClick={() => openImage(caseItem.id, index)}
                        >
                          <div className="aspect-[16/10] rounded-xl overflow-hidden bg-gray-100 hover:opacity-90 transition-opacity relative">
                            <img
                              src={image}
                              alt={`${caseItem.title} ${index + 1}`}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-[#FFE15D]/20 text-[#2D2D2D] text-xs font-semibold rounded-full">
                        {caseItem.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-[#2D2D2D]">{caseItem.client} - {caseItem.title}</h3>
                    <p className="text-[#6B7280] mb-4 text-sm leading-relaxed">
                      {caseItem.description}
                    </p>

                    {/* 关键词横向排布 */}
                    <div className="flex flex-wrap gap-3 mb-4">
                      {caseItem.highlights.slice(0, 3).map((highlight, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs text-[#6B7280]">
                          <div className="w-1.5 h-1.5 bg-[#FFE15D] rounded-full flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 图片放大浮动效果 */}
                  {expandedState?.isOpen && (
                    <div className="absolute inset-0 z-50 bg-black/80 p-4 flex items-center justify-center" onClick={() => closeImage(caseItem.id)}>
                      <button
                        onClick={(e) => { e.stopPropagation(); closeImage(caseItem.id); }}
                        className="absolute top-4 right-4 text-white hover:text-[#FFC107] transition-colors"
                      >
                        <X className="h-8 w-8" />
                      </button>

                      <button
                        onClick={(e) => { e.stopPropagation(); prevImage(caseItem.id); }}
                        className="absolute left-4 text-white hover:text-[#FFC107] transition-colors"
                      >
                        <ChevronLeft className="h-12 w-12" />
                      </button>

                      <div className="relative max-w-full max-h-[70vh]">
                        <img
                          src={allImages[expandedState.currentIndex]}
                          alt={`${caseItem.title} ${expandedState.currentIndex + 1}`}
                          className="max-w-full max-h-[70vh] object-contain"
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>

                      <button
                        onClick={(e) => { e.stopPropagation(); nextImage(caseItem.id); }}
                        className="absolute right-4 text-white hover:text-[#FFC107] transition-colors"
                      >
                        <ChevronRight className="h-12 w-12" />
                      </button>

                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {allImages.map((_, index) => (
                          <button
                            key={index}
                            onClick={(e) => { e.stopPropagation(); openImage(caseItem.id, index); }}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === expandedState.currentIndex ? 'bg-[#FFC107]' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 为什么选择我们 */}
      <section className="py-12 px-4 md:px-6 md:py-16 bg-gradient-to-br from-[#2D2D2D] to-[#4B5563]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-[#FFC107]" />
              <span className="text-[#FFC107] font-semibold text-sm md:text-base">核心优势</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-white">
              值得信赖的合作伙伴
            </h2>
            <p className="text-sm md:text-lg text-[#6B7280] mt-4">
              已为众多知名企业提供服务
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {[
              '中共浙江省委党校',
              '浙江省教育厅',
              '浙江省财政厅',
              '浙江省直属机关工会',
              '浙江广播电视集团',
              '浙江省大数据发展管理局',
              '浙江省档案馆',
              '杭州市城管局',
              '杭州市上城区法院',
              '杭州市西湖区总工会',
              '杭州市萧山区团委',
              '德清县关工委',
              '浙江大学',
              '西湖大学',
              '浙江工业大学',
              '光明日报',
              '浙教集团',
              '浙江数智交院',
              '厦门航空',
              '海康威视',
              '博世电动',
              '华为问界',
              '北京奔驰',
              '华润置地',
              '银泰集团',
              '绿城物业',
              '宝龙集团',
              '富春山居集团',
              '建发集团',
              '中国移动',
              '传播大脑',
              '上海市政院',
              '交通银行',
              '上海银行',
              '农商银行',
              '杭州联合银行',
              '工商银行',
              '中宏保险',
              '南银法巴消费金融'
            ].map((client, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center hover:bg-white/15 transition-colors">
                <span className="text-white text-xs md:text-sm font-medium leading-relaxed">{client}</span>
              </div>
            ))}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center hover:bg-white/15 transition-colors">
              <span className="text-white text-xs md:text-sm font-medium leading-relaxed opacity-80">更多合作伙伴...</span>
            </div>
          </div>
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
                  className="h-10 md:h-12 w-auto"
                />
                <div>
                  <span className="text-base md:text-lg font-bold">之江文化中心</span>
                  <p className="text-xs text-white/50">企业活动服务</p>
                </div>
              </div>
              <p className="text-sm text-white/70 mb-4">
                依托之江文化中心四大场馆资源，为企业提供党建、团建、培训、定制活动一站式服务
              </p>
              <div className="flex items-center gap-4">
                <a href="tel:191-0658-3798" className="flex items-center gap-2 text-sm text-white/70 hover:text-[#FFC107] transition-colors">
                  <Phone className="h-4 w-4" />
                  191-0658-3798
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-[#FFC107]">服务</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link href="/services/party" className="hover:text-[#FFC107] transition-colors">
                    主题党建
                  </Link>
                </li>
                <li>
                  <Link href="/services/team" className="hover:text-[#FFC107] transition-colors">
                    团建拓展
                  </Link>
                </li>
                <li>
                  <Link href="/services/training" className="hover:text-[#FFC107] transition-colors">
                    访学培训
                  </Link>
                </li>
                <li>
                  <Link href="/services/custom" className="hover:text-[#FFC107] transition-colors">
                    定制活动
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-[#FFC107]">关于</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link href="/about" className="hover:text-[#FFC107] transition-colors">
                    关于我们
                  </Link>
                </li>
                <li>
                  <Link href="/cases" className="hover:text-[#FFC107] transition-colors">
                    案例中心
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-[#FFC107]">联系</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link href="/contact" className="hover:text-[#FFC107] transition-colors">
                    联系我们
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 text-center">
            <p className="text-white/50 text-sm">
              © 2024 浙江文化空间发展有限公司 | 之江文化中心企业活动服务 | 版权所有
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
