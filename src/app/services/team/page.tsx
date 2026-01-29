import type { Metadata } from 'next';
import { ArrowRight, Users, Heart, Sparkles, CheckCircle2, Clock } from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: '团建拓展 - 之江文化中心 | 企业活动服务',
  description: '之江文化中心团建拓展服务，提供非遗手作、养生疗愈、青年交友等特色团建活动，文化滋养与精神升华，提升团队文化软实力。',
  keywords: '团建拓展,企业团建,杭州团建活动策划,非遗手作团建,养生疗愈团建',
};

export default function TeamBuildingPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navigation currentPath="/services/team" />

      {/* Hero Section */}
      <section className="pt-20 pb-8 px-4 md:px-6 md:pb-12 relative overflow-hidden">
        {/* 背景图片 */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/首页背景.png")' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFC107]/80 to-[#FF9F43]/80">
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFC107]/30 via-transparent to-[#FF9F43]/30"></div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 mt-8 md:mt-12 text-white">
            团建拓展
          </h1>
          <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
            在文化沉浸中提升团队文化软实力
            <br />
            打破传统模式
          </p>
        </div>
      </section>

      {/* 服务介绍 */}
      <section className="py-12 px-4 md:px-6 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Users className="h-6 w-6 text-[#FFE15D]" />
              <span className="text-[#FF9F43] font-semibold">服务特色</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#2D2D2D]">
              文化沉浸，心灵滋养
            </h2>
            <p className="text-base md:text-lg text-[#6B7280] max-w-3xl mx-auto">
              依托之江文化中心资源，将文化活动与团队建设深度融合，打造独具特色的团建体验
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center mb-6">
            {/* 左侧：图片 */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="relative aspect-[4/3] bg-cover bg-center"
                style={{ backgroundImage: 'url("/assets/团建拓展服务介绍配图.jpg")' }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-full flex items-center justify-center">
                      <Heart className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-semibold text-lg">文化滋养 · 团队共创</span>
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
                    <Heart className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#2D2D2D]">文化滋养</h3>
                    <p className="text-[#6B7280] text-sm">文化体验中放松身心，缓解压力</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-[#FFE15D]/8 to-transparent border-l-2 border-[#FFE15D]/60 hover:from-[#FFE15D]/12 hover:border-[#FFE15D] transition-all">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#2D2D2D]">团队共创</h3>
                    <p className="text-[#6B7280] text-sm">协作完成非遗作品，增强凝聚力</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-[#FFE15D]/8 to-transparent border-l-2 border-[#FFE15D]/60 hover:from-[#FFE15D]/12 hover:border-[#FFE15D] transition-all">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#2D2D2D]">软实力提升</h3>
                    <p className="text-[#6B7280] text-sm">文化浸润提升人文素养</p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-11">
            {/* 产品 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="aspect-[16/10] relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/assets/非遗体验.jpg")' }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-[#2D2D2D]">非遗体验</h3>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-[#FFE15D]" />
                  <span className="text-xs text-[#6B7280]">1~2小时</span>
                </div>
                <p className="text-[#6B7280] mb-4 leading-relaxed text-sm">
                  分组协作完成非遗作品，在动手实践中感受传统文化魅力，打破部门壁垒
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>大师现场教学</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>团队协作体验</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>作品带走留念</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <a
                    href="https://www.kdocs.cn/l/ckyInDq87fV1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-[#FFE15D] to-[#FF9F43] text-[#2D2D2D] font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all text-sm"
                  >
                    了解更多手作项目
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* 产品 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="aspect-[16/10] relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/assets/博物馆精讲.jpg")' }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-[#2D2D2D]">博物馆精讲</h3>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-[#FFE15D]" />
                  <span className="text-xs text-[#6B7280]">1~2小时</span>
                </div>
                <p className="text-[#6B7280] mb-4 leading-relaxed text-sm">
                  专业讲解员带领深度参观博物馆，了解藏品背后的历史文化故事
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>专业讲解服务</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>深度文化解读</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>互动问答交流</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 产品 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="aspect-[16/10] relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/assets/机器人体验.jpg")' }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-[#2D2D2D]">机器人体验</h3>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-[#FFE15D]" />
                  <span className="text-xs text-[#6B7280]">1~2小时</span>
                </div>
                <p className="text-[#6B7280] mb-4 leading-relaxed text-sm">
                  体验前沿科技魅力，了解机器人工作原理，在互动中激发创新思维
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>机器人互动体验</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>科技知识学习</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>团队协作编程</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 产品 4 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="aspect-[16/10] relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/assets/亲子研学.jpg")' }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-[#2D2D2D]">亲子研学</h3>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-[#FFE15D]" />
                  <span className="text-xs text-[#6B7280]">1~2小时</span>
                </div>
                <p className="text-[#6B7280] mb-4 leading-relaxed text-sm">
                  亲子共同参与文化探索活动，在互动中增进亲子关系，拓展视野
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>互动体验活动</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>文化知识学习</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>亲子协作挑战</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 产品 5 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="aspect-[16/10] relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/assets/音乐疗愈.jpg")' }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-[#2D2D2D]">音乐疗愈</h3>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-[#FFE15D]" />
                  <span className="text-xs text-[#6B7280]">1小时</span>
                </div>
                <p className="text-[#6B7280] mb-4 leading-relaxed text-sm">
                  颂钵手碟体验，音乐冥想，在声音疗愈中放松身心，释放压力
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>颂钵手碟体验</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>音乐冥想</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>身心放松</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 产品 6 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="aspect-[16/10] relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/assets/青年交友.jpg")' }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-[#2D2D2D]">青年交友</h3>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-[#FFE15D]" />
                  <span className="text-xs text-[#6B7280]">2~3小时</span>
                </div>
                <p className="text-[#6B7280] mb-4 leading-relaxed text-sm">
                  "宋风雅颂"非遗交友局、MBTI社交专场，在文化体验中轻松交友
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>文化主题社交</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>趣味互动游戏</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>轻松交友氛围</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 产品 7 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="aspect-[16/10] relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/assets/读书会.jpg")' }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-[#2D2D2D]">文化读书会</h3>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-[#FFE15D]" />
                  <span className="text-xs text-[#6B7280]">1~2小时</span>
                </div>
                <p className="text-[#6B7280] mb-4 leading-relaxed text-sm">
                  开展主题读书会，分享阅读心得，提升团队文化素养
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>精选图书推荐</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>深度阅读分享</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>思想碰撞交流</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 产品 8 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="aspect-[16/10] relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/assets/财富沙盘.jpg")' }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-[#2D2D2D]">财富沙盘活动</h3>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-[#FFE15D]" />
                  <span className="text-xs text-[#6B7280]">2~3小时</span>
                </div>
                <p className="text-[#6B7280] mb-4 leading-relaxed text-sm">
                  通过沙盘模拟财富管理，提升团队财商意识，增强决策能力
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>沙盘模拟体验</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>财商知识学习</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>决策能力提升</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 产品 9 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="aspect-[16/10] relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/assets/山野清修.jpg")' }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-[#2D2D2D]">山野清修（之江周边合作项目）</h3>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-[#FFE15D]" />
                  <span className="text-xs text-[#6B7280]">一日</span>
                </div>
                <p className="text-[#6B7280] mb-4 leading-relaxed text-sm">
                  走进自然，在山野中感受宁静，通过户外活动净化心灵，缓解压力
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>自然风光体验</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>户外冥想修行</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>团队协作挑战</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 产品 10 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="aspect-[16/10] relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/assets/定制团建活动.jpg")' }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-[#2D2D2D]">定制团建活动</h3>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-[#FFE15D]" />
                  <span className="text-xs text-[#6B7280]">时长可定制</span>
                </div>
                <p className="text-[#6B7280] mb-4 leading-relaxed text-sm">
                  根据团队特点和需求，量身定制特色团建方案
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>团队需求分析</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>专属方案设计</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>全程专业执行</span>
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
            打造独具特色的团建活动
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
      <Footer />
    </div>
  );
}
