import type { Metadata } from 'next';
import { Building2, Users, Calendar, Star, ArrowRight, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: '之江文化中心 - 企业活动服务',
  description: '之江文化中心提供专业的企业活动服务，包括VIP客户活动、企业年会、品牌发布会等全方位服务',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* 顶部导航栏 */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Building2 className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              之江文化中心
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              服务内容
            </a>
            <a href="#cases" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              服务案例
            </a>
            <a href="#vip" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              VIP活动
            </a>
            <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              联系我们
            </a>
          </div>
        </div>
      </nav>

      {/* Hero 区域 */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950 px-4 py-2 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-8">
            <Star className="h-4 w-4" />
            专业文化活动服务提供商
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-white dark:via-blue-400 dark:to-purple-400">
            之江文化中心
          </h1>
          <p className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-4 font-medium">
            企业活动服务专家
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            为企业提供专业的一站式活动策划与执行服务，包括VIP客户活动、企业年会、品牌发布会、商务会议等各类活动，
            助力企业打造独特品牌形象，提升客户体验
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              立即咨询
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 px-8 py-4 rounded-full text-lg font-medium transition-all border border-slate-200 dark:border-slate-700"
            >
              了解服务
            </a>
          </div>
        </div>
      </section>

      {/* 服务内容 */}
      <section id="services" className="py-20 px-6 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
              服务内容
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              提供全方位的企业活动服务，满足各类活动需求
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 服务卡片 1 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 dark:border-slate-800">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                VIP客户活动
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                为企业VIP客户量身定制的专属活动，包括高端晚宴、艺术鉴赏、文化体验等，
                增强客户忠诚度，深化合作关系
              </p>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  定制化活动方案
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  高端场地支持
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  专属服务团队
                </li>
              </ul>
            </div>

            {/* 服务卡片 2 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950 dark:to-teal-950 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 dark:border-slate-800">
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                企业年会
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                策划并执行企业年会活动，包括场地布置、节目编排、灯光音响等，
                打造难忘的企业年度盛会
              </p>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  全程策划执行
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  专业设备支持
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  创意节目编排
                </li>
              </ul>
            </div>

            {/* 服务卡片 3 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 dark:border-slate-800">
              <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                品牌发布会
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                为企业打造专业的品牌发布会，提供创意策划、媒体邀请、现场执行等
                全方位服务，确保活动圆满成功
              </p>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-orange-600" />
                  创意策划方案
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-orange-600" />
                  媒体资源整合
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-orange-600" />
                  专业现场执行
                </li>
              </ul>
            </div>

            {/* 服务卡片 4 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 dark:border-slate-800">
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                商务会议
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                提供专业的商务会议场地和服务，包括会议室租赁、设备支持、餐饮服务等，
                满足各类商务会议需求
              </p>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600" />
                  多种规格会议室
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600" />
                  先进会议设备
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600" />
                  专业会务服务
                </li>
              </ul>
            </div>

            {/* 服务卡片 5 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950 dark:to-blue-950 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 dark:border-slate-800">
              <div className="w-16 h-16 bg-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                团建活动
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                策划创意团建活动，包括户外拓展、文化体验、趣味运动会等，
                增强团队凝聚力，提升员工归属感
              </p>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600" />
                  多种活动形式
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600" />
                  专业教练团队
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600" />
                  安全保障体系
                </li>
              </ul>
            </div>

            {/* 服务卡片 6 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-rose-50 to-orange-50 dark:from-rose-950 dark:to-orange-950 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 dark:border-slate-800">
              <div className="w-16 h-16 bg-rose-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                文化展览
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                策划各类文化展览活动，包括艺术展览、主题展览、品牌展示等，
                打造沉浸式文化体验
              </p>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-rose-600" />
                  专业策展团队
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-rose-600" />
                  高品质展览空间
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-rose-600" />
                  互动体验设计
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 服务案例 */}
      <section id="cases" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
              服务案例
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              精选优秀案例，见证我们的专业实力
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 案例 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <Calendar className="h-20 w-20 text-white/80" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full">
                    VIP活动
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    2024年度
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                  某大型银行VIP客户答谢会
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  为银行高端客户策划的艺术鉴赏活动，包含大师讲座、VIP晚宴、专场参观等环节
                </p>
              </div>
            </div>

            {/* 案例 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-video bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center">
                <Building2 className="h-20 w-20 text-white/80" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-medium rounded-full">
                    企业年会
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    2024年度
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                  某科技集团年度盛典
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  为科技企业打造的年度盛典，包含颁奖典礼、文艺汇演、互动游戏等丰富内容
                </p>
              </div>
            </div>

            {/* 案例 3 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-video bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <Star className="h-20 w-20 text-white/80" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 text-xs font-medium rounded-full">
                    品牌发布
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    2024年度
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                  某汽车品牌新品发布会
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                    为汽车品牌打造的新品发布活动，采用沉浸式体验设计，吸引众多媒体关注
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIP客户活动 */}
      <section id="vip" className="py-20 px-6 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              VIP客户活动
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              尊享专属服务，打造极致体验
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">专属定制</h3>
                  <p className="text-blue-100 leading-relaxed">
                    根据企业品牌特点和客户需求，量身打造专属活动方案，确保活动独一无二
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">高端场地</h3>
                  <p className="text-blue-100 leading-relaxed">
                    提供之江文化中心等高端场馆资源，打造尊贵舒适的活动环境
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Star className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">贴心服务</h3>
                  <p className="text-blue-100 leading-relaxed">
                    专属服务团队全程跟进，提供从策划到执行的全方位服务
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">活动类型</h3>
              <ul className="space-y-4">
                {[
                  '高端晚宴与品鉴会',
                  '艺术展览与鉴赏活动',
                  '文化体验与互动工坊',
                  '客户答谢与商务洽谈',
                  '主题沙龙与论坛',
                  '私密派对与定制活动'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-blue-100">
                    <CheckCircle2 className="h-5 w-5 text-blue-200 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section id="contact" className="py-20 px-6 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
              联系我们
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              期待与您的合作，共同打造精彩活动
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border border-slate-100 dark:border-slate-800">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">联系电话</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg">400-888-8888</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950 dark:to-teal-950 border border-slate-100 dark:border-slate-800">
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">电子邮箱</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg">service@zhijiang-center.com</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950 border border-slate-100 dark:border-slate-800">
              <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">场馆地址</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg">杭州市之江文化中心</p>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="py-12 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Building2 className="h-8 w-8" />
              <span className="text-xl font-bold">之江文化中心</span>
            </div>
            <div className="flex items-center gap-6 text-slate-400">
              <a href="#services" className="hover:text-white transition-colors">服务内容</a>
              <a href="#cases" className="hover:text-white transition-colors">服务案例</a>
              <a href="#vip" className="hover:text-white transition-colors">VIP活动</a>
              <a href="#contact" className="hover:text-white transition-colors">联系我们</a>
            </div>
            <p className="text-slate-400 text-sm">
              © 2024 之江文化中心. 保留所有权利.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
