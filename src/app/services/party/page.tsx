import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, Phone, ArrowRight, Star, Users, BookOpen, Sparkles, CheckCircle2, Calendar, Award, MapPin, Clock, Music, PenTool, Eye, Palette, Heart, Gift, GraduationCap, Target, Trophy } from 'lucide-react';
import Navigation from '@/components/navigation';

export const metadata: Metadata = {
  title: '主题党建 - 之江文化中心 | 企业活动服务',
  description: '之江文化中心主题党建服务，提供沉浸式党建体验、红色文化浸润、党建主题研学等专业服务，打造有文化深度的党建活动。',
  keywords: '主题党建,党建活动,杭州党建活动策划,沉浸式党课,红色文化研学',
};

export default function PartyBuildingPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* 顶部导航栏 */}
      <Navigation currentPath="/services/party" />

      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-12 px-4 md:px-6 relative overflow-hidden">
        {/* 背景图片 */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/assets/定制化党建活动.jpg")' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFC107]/80 to-[#FF9F43]/80">
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFC107]/30 via-transparent to-[#FF9F43]/30"></div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 mt-12 md:mt-16 text-white">
            主题党建
          </h1>
          <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
            打破传统会议室模式
            <br />
            "党建+文化"沉浸式学习
          </p>
        </div>
      </section>

      {/* 服务介绍 */}
      <section className="py-12 px-4 md:px-6 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Star className="h-6 w-6 text-[#FFE15D]" />
              <span className="text-[#FF9F43] font-semibold">服务特色</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#2D2D2D]">
              创新党建模式，沉浸式学习体验
            </h2>
            <p className="text-base md:text-lg text-[#6B7280] max-w-3xl mx-auto">
              依托之江文化中心资源，将党建活动与文化体验深度融合，提升党建活动感染力和实效性
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center mb-6">
            {/* 左侧：图片 */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="relative aspect-[4/3] bg-cover"
                style={{ backgroundImage: 'url("/assets/主题党建服务介绍配图.jpg")', backgroundPosition: 'center 20%' }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-full flex items-center justify-center">
                      <BookOpen className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-semibold text-lg">文化赋能 · 教育实效</span>
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
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-gradient-to-br from-[#FFE15D]/8 to-[#FFC107]/4 border border-[#FFE15D]/20 hover:from-[#FFE15D]/12 hover:border-[#FFE15D]/40 transition-all text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#2D2D2D] mb-1">文化赋能</h3>
                    <p className="text-[#6B7280] text-xs leading-relaxed">将党建活动与文化体验深度融合</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-gradient-to-br from-[#FFE15D]/8 to-[#FFC107]/4 border border-[#FFE15D]/20 hover:from-[#FFE15D]/12 hover:border-[#FFE15D]/40 transition-all text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#2D2D2D] mb-1">互动性强</h3>
                    <p className="text-[#6B7280] text-xs leading-relaxed">通过角色扮演、实地调研增强参与感</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-gradient-to-br from-[#FFE15D]/8 to-[#FFC107]/4 border border-[#FFE15D]/20 hover:from-[#FFE15D]/12 hover:border-[#FFE15D]/40 transition-all text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#2D2D2D] mb-1">教育实效</h3>
                    <p className="text-[#6B7280] text-xs leading-relaxed">沉浸式学习让党史教育入脑入心</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-gradient-to-br from-[#FFE15D]/8 to-[#FFC107]/4 border border-[#FFE15D]/20 hover:from-[#FFE15D]/12 hover:border-[#FFE15D]/40 transition-all text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#2D2D2D] mb-1">定制服务</h3>
                    <p className="text-[#6B7280] text-xs leading-relaxed">根据企业需求量身定制专属党建方案</p>
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
              多元化党建服务，满足不同需求
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-11">
            {/* 产品 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="aspect-[16/10] relative overflow-hidden">
                <img src="/assets/浙江精神.jpg" alt="红色溯源·浙江精神" className="w-full h-full object-cover" style={{ objectPosition: 'top' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-[#2D2D2D]">红色溯源·浙江精神</h3>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-[#FFE15D]" />
                  <span className="text-xs text-[#6B7280]">2~3小时</span>
                </div>
                <p className="text-[#6B7280] mb-4 leading-relaxed text-sm">
                  参观浙江省博物馆"浙江一万年"陈列，了解浙江红色革命历史，弘扬浙江精神
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <MapPin className="h-4 w-4 text-[#FFE15D]" />
                    <span>专业讲解服务</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <Eye className="h-4 w-4 text-[#FFE15D]" />
                    <span>沉浸式导览体验</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 产品 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="aspect-[16/10] relative overflow-hidden">
                <img src="/assets/红色剧本杀.jpg" alt="红色剧本杀" className="w-full h-full object-cover" style={{ objectPosition: 'top' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-[#2D2D2D]">红色剧本杀</h3>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-[#FFE15D]" />
                  <span className="text-xs text-[#6B7280]">2~3小时</span>
                </div>
                <p className="text-[#6B7280] mb-4 leading-relaxed text-sm">
                  沉浸式角色扮演，通过剧本演绎感悟革命精神，在互动中学习党史
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <PenTool className="h-4 w-4 text-[#FFE15D]" />
                    <span>真实革命历史故事</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <Users className="h-4 w-4 text-[#FFE15D]" />
                    <span>沉浸式角色扮演</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <Star className="h-4 w-4 text-[#FFE15D]" />
                    <span>团队协作体验</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 产品 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="aspect-[16/10] relative overflow-hidden">
                <img src="/assets/红色音乐会.jpg" alt="红色音乐会" className="w-full h-full object-cover" style={{ objectPosition: 'top' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-[#2D2D2D]">红色音乐会</h3>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-[#FFE15D]" />
                  <span className="text-xs text-[#6B7280]">1.5~2小时</span>
                </div>
                <p className="text-[#6B7280] mb-4 leading-relaxed text-sm">
                  通过红色经典歌曲的演绎，重温革命岁月，传承红色精神
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <Music className="h-4 w-4 text-[#FFE15D]" />
                    <span>经典红歌演唱</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <Sparkles className="h-4 w-4 text-[#FFE15D]" />
                    <span>合唱互动体验</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <Award className="h-4 w-4 text-[#FFE15D]" />
                    <span>革命故事讲述</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 产品 4 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="aspect-[16/10] relative overflow-hidden">
                <img src="/assets/红色非遗手作.png" alt="红色非遗手作" className="w-full h-full object-cover" style={{ objectPosition: 'top' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-[#2D2D2D]">红色非遗手作</h3>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-[#FFE15D]" />
                  <span className="text-xs text-[#6B7280]">1~1.5小时</span>
                </div>
                <p className="text-[#6B7280] mb-3 leading-relaxed text-sm">
                  体验红色非遗手作，传承传统文化，弘扬工匠精神
                </p>
                <div className="mb-4 inline-block px-3 py-1.5 bg-[#FFE15D]/20 rounded-lg border border-[#FFE15D]/50">
                  <span className="text-sm text-[#DC2626] font-bold">多款手作项目可选</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <Palette className="h-4 w-4 text-[#FFE15D]" />
                    <span>红色主题手工</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <Heart className="h-4 w-4 text-[#FFE15D]" />
                    <span>非遗技艺体验</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <Gift className="h-4 w-4 text-[#FFE15D]" />
                    <span>作品带走留念</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 产品 5 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="aspect-[16/10] relative overflow-hidden">
                <img src="/assets/红色主题展览.jpg" alt="红色主题展览" className="w-full h-full object-cover" style={{ objectPosition: 'top' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-[#2D2D2D]">红色主题展览（结合当前临展）</h3>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-[#FFE15D]" />
                  <span className="text-xs text-[#6B7280]">半日</span>
                </div>
                <p className="text-[#6B7280] mb-4 leading-relaxed text-sm">
                  依托博物馆红色文化展区，开展主题展览学习，感受革命精神
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <GraduationCap className="h-4 w-4 text-[#FFE15D]" />
                    <span>主题展览讲解</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <Target className="h-4 w-4 text-[#FFE15D]" />
                    <span>互动体验环节</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <Trophy className="h-4 w-4 text-[#FFE15D]" />
                    <span>党史知识竞赛</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 产品 6 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="aspect-[16/10] relative overflow-hidden">
                <img src="/assets/革命精神讲座.png" alt="革命精神讲座" className="w-full h-full object-cover" style={{ objectPosition: 'top' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-[#2D2D2D]">革命精神讲座</h3>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-[#FFE15D]" />
                  <span className="text-xs text-[#6B7280]">2~3小时</span>
                </div>
                <p className="text-[#6B7280] mb-4 leading-relaxed text-sm">
                  学习红船精神、浙江精神，在文化浸润中感悟初心使命
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>专题党课学习</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>红色文化讲座</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>初心使命研讨</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 产品 7 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="aspect-[16/10] relative overflow-hidden">
                <img src="/assets/两山理论研学.jpg" alt="两山理论研学" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-[#2D2D2D]">两山理论研学（安吉余村合作项目）</h3>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-[#FFE15D]" />
                  <span className="text-xs text-[#6B7280]">半日~一日</span>
                </div>
                <p className="text-[#6B7280] mb-4 leading-relaxed text-sm">
                  余村实地调研，深入理解"两山"理论，领悟生态文明思想
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>实地走访调研</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>专业主题讲解</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>分组研讨交流</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 产品 8 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="aspect-[16/10] relative overflow-hidden">
                <img src="/assets/定制化党建活动.jpg" alt="定制化党建方案" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-[#2D2D2D]">定制化党建方案</h3>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-[#FFE15D]" />
                  <span className="text-xs text-[#6B7280]">时长可定制</span>
                </div>
                <p className="text-[#6B7280] mb-4 leading-relaxed text-sm">
                  根据单位需求，量身定制特色党建活动方案
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                    <span>需求深度调研</span>
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

          {/* 手机端：两行布局 */}
          <div className="md:hidden space-y-6">
            {/* 第一行：01、02、03 */}
            <div className="grid grid-cols-3 gap-3">
              <div className="relative group">
                <div className="bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-xl p-3 text-center relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                  <div className="text-lg font-bold text-white mb-1 relative z-10">01</div>
                  <h3 className="text-[10px] font-bold text-white mb-0.5 relative z-10">需求对接</h3>
                  <p className="text-[8px] text-white/90 leading-tight relative z-10">深入了解需求</p>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute top-1/2 -right-1.5 transform -translate-y-1/2 z-10">
                  <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-md">
                    <ArrowRight className="h-2 w-2 text-[#FF9F43]" />
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-xl p-3 text-center relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                  <div className="text-lg font-bold text-white mb-1 relative z-10">02</div>
                  <h3 className="text-[10px] font-bold text-white mb-0.5 relative z-10">方案设计</h3>
                  <p className="text-[8px] text-white/90 leading-tight relative z-10">定制活动方案</p>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute top-1/2 -right-1.5 transform -translate-y-1/2 z-10">
                  <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-md">
                    <ArrowRight className="h-2 w-2 text-[#FF9F43]" />
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-xl p-3 text-center relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                  <div className="text-lg font-bold text-white mb-1 relative z-10">03</div>
                  <h3 className="text-[10px] font-bold text-white mb-0.5 relative z-10">确认签约</h3>
                  <p className="text-[8px] text-white/90 leading-tight relative z-10">方案确认签约</p>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-md">
                    <ArrowRight className="h-2 w-2 text-[#FF9F43] rotate-90" />
                  </div>
                </div>
              </div>
            </div>

            {/* 第二行：04、05（居中） */}
            <div className="flex justify-center gap-3 max-w-lg mx-auto">
              <div className="relative group flex-1">
                <div className="bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-xl p-3 text-center relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                  <div className="text-lg font-bold text-white mb-1 relative z-10">04</div>
                  <h3 className="text-[10px] font-bold text-white mb-0.5 relative z-10">执行落地</h3>
                  <p className="text-[8px] text-white/90 leading-tight relative z-10">专业执行服务</p>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                  <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-md">
                    <ArrowRight className="h-2 w-2 text-[#FF9F43]" />
                  </div>
                </div>
              </div>

              <div className="relative group flex-1">
                <div className="bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-xl p-3 text-center relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                  <div className="text-lg font-bold text-white mb-1 relative z-10">05</div>
                  <h3 className="text-[10px] font-bold text-white mb-0.5 relative z-10">后续评价</h3>
                  <p className="text-[8px] text-white/90 leading-tight relative z-10">活动总结优化</p>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* 电脑端：一行5列布局 */}
          <div className="hidden md:grid md:grid-cols-5 md:gap-6">
            <div className="relative group">
              <div className="bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-2xl p-6 text-center relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                <div className="text-3xl font-bold text-white mb-4 relative z-10">01</div>
                <h3 className="text-lg font-bold text-white mb-2 relative z-10">需求对接</h3>
                <p className="text-sm text-white/90 leading-normal relative z-10">深入了解需求</p>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <ArrowRight className="h-3.5 w-3.5 text-[#FF9F43]" />
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-2xl p-6 text-center relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                <div className="text-3xl font-bold text-white mb-4 relative z-10">02</div>
                <h3 className="text-lg font-bold text-white mb-2 relative z-10">方案设计</h3>
                <p className="text-sm text-white/90 leading-normal relative z-10">定制活动方案</p>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <ArrowRight className="h-3.5 w-3.5 text-[#FF9F43]" />
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-2xl p-6 text-center relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                <div className="text-3xl font-bold text-white mb-4 relative z-10">03</div>
                <h3 className="text-lg font-bold text-white mb-2 relative z-10">确认签约</h3>
                <p className="text-sm text-white/90 leading-normal relative z-10">方案确认签约</p>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <ArrowRight className="h-3.5 w-3.5 text-[#FF9F43]" />
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-2xl p-6 text-center relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                <div className="text-3xl font-bold text-white mb-4 relative z-10">04</div>
                <h3 className="text-lg font-bold text-white mb-2 relative z-10">执行落地</h3>
                <p className="text-sm text-white/90 leading-normal relative z-10">专业执行服务</p>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <ArrowRight className="h-3.5 w-3.5 text-[#FF9F43]" />
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-2xl p-6 text-center relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                <div className="text-3xl font-bold text-white mb-4 relative z-10">05</div>
                <h3 className="text-lg font-bold text-white mb-2 relative z-10">后续评价</h3>
                <p className="text-sm text-white/90 leading-normal relative z-10">活动总结优化</p>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 md:px-6 md:py-16 bg-gradient-to-br from-[#2D2D2D] to-[#4B5563]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white">
            让党建活动更有温度和深度
          </h2>
          <p className="text-sm md:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            依托之江文化中心资源，为您打造独具特色的党建活动
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
