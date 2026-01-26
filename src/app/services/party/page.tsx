'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Building2, Phone, Mail, MapPin, Star, ArrowRight, CheckCircle2, Users, Sparkles } from 'lucide-react';

export default function PartyPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    activityType: 'theme-party',
    estimatedPeople: '',
    estimatedDate: '',
    requirements: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('感谢您的咨询，我们会尽快与您联系！');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* 顶部导航栏 */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-xl flex items-center justify-center">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold text-[#2D2D2D]">之江文化中心</span>
              <p className="text-xs text-[#6B7280]">企业活动服务</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link href="/about" className="text-[#2D2D2D] hover:text-[#FFE15D] transition-colors font-medium">关于我们</Link>
            <Link href="/services/party" className="text-[#FFE15D] font-semibold">主题党建</Link>
            <Link href="/services/team" className="text-[#2D2D2D] hover:text-[#FFE15D] transition-colors font-medium">团建拓展</Link>
            <Link href="/services/training" className="text-[#2D2D2D] hover:text-[#FFE15D] transition-colors font-medium">访学培训</Link>
            <Link href="/services/custom" className="text-[#2D2D2D] hover:text-[#FFE15D] transition-colors font-medium">定制活动</Link>
            <Link href="/cases" className="text-[#2D2D2D] hover:text-[#FFE15D] transition-colors font-medium">案例中心</Link>
            <Link href="/contact" className="text-[#2D2D2D] hover:text-[#FFE15D] transition-colors font-medium">联系我们</Link>
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:191-0658-3798" className="hidden md:flex items-center gap-2 text-[#2D2D2D] font-medium">
              <Phone className="h-4 w-4" />
              191-0658-3798
            </a>
            <Link href="/contact" className="bg-gradient-to-r from-[#FFE15D] to-[#FF9F43] hover:shadow-lg text-[#2D2D2D] px-6 py-2 rounded-full transition-all font-semibold hover:scale-105">
              立即咨询
            </Link>
          </div>
        </div>
      </nav>

      {/* Banner区域 */}
      <section className="pt-32 pb-12 px-6 bg-gradient-to-br from-[#2D2D2D] to-[#4B5563]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4 bg-white/10 px-4 py-2 rounded-full">
            <Sparkles className="h-4 w-4 text-[#FFE15D]" />
            <span className="text-white/90 text-sm font-medium">主题党建</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            沉浸式党建体验 · 红色文化浸润
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            依托之江文化中心丰富的红色文化资源，为企事业单位提供创新的党建活动服务
          </p>
        </div>
      </section>

      {/* 服务介绍 */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#2D2D2D]">服务介绍</h2>
              <div className="space-y-4 text-[#6B7280] leading-relaxed">
                <p className="text-lg">
                  依托之江文化中心丰富的红色文化资源，为企事业单位提供创新的党建活动服务。
                </p>
                <p>
                  我们打破传统党课形式，通过沉浸式体验、互动参与、实地研学等方式，
                  让党史学习教育更生动、更有温度、更有深度。
                </p>
                <p>
                  在博物馆展厅中，以文物为教材，以历史为课堂，
                  让党员在真实的历史场景中学习党史、感悟初心。
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-[#FFE15D] mb-1">1000+</div>
                  <div className="text-sm text-[#6B7280]">党建活动</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2D2D2D] to-[#4B5563] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-[#FFE15D]" />
                  </div>
                  <div className="text-2xl font-bold text-[#FFE15D] mb-1">99%</div>
                  <div className="text-sm text-[#6B7280]">满意度</div>
                </div>
              </div>
            </div>
          </div>

          {/* 活动形式 */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#2D2D2D]">活动形式</h2>
            <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
              多种活动形式，满足不同党建需求
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* 沉浸式党课 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-xl flex items-center justify-center mb-6">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#2D2D2D]">沉浸式党课</h3>
              <p className="text-[#6B7280] mb-6 leading-relaxed">
                在博物馆展厅中，以文物为教材，以历史为课堂，
                让党员在真实的历史场景中学习党史、感悟初心。
              </p>
              <ul className="space-y-2 text-sm text-[#6B7280]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  文物现场教学
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  历史情景重现
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  互动讨论交流
                </li>
              </ul>
            </div>

            {/* 红色文化体验 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2D2D2D] to-[#4B5563] rounded-xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#2D2D2D]">红色文化体验</h3>
              <p className="text-[#6B7280] mb-6 leading-relaxed">
                通过观看红色主题展览、参与红色主题手作、
                聆听红色故事讲述等形式，多维度感受红色文化魅力。
              </p>
              <ul className="space-y-2 text-sm text-[#6B7280]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  红色主题展览
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  红色手作体验
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  红色故事分享
                </li>
              </ul>
            </div>

            {/* 党建主题研学 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#6B7280] to-[#4B5563] rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#2D2D2D]">党建主题研学</h3>
              <p className="text-[#6B7280] mb-6 leading-relaxed">
                组织党员干部走出会议室，在文化场馆中开展实地研学，
                在行走中学习、在体验中思考、在实践中成长。
              </p>
              <ul className="space-y-2 text-sm text-[#6B7280]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  实地参观学习
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  主题研讨交流
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#FFE15D]" />
                  实践心得分享
                </li>
              </ul>
            </div>
          </div>

          {/* 特色优势 */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#2D2D2D]">特色优势</h2>
            <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
              专业团队，资源丰富，创新形式
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Star className="h-6 w-6 text-[#FFE15D]" />,
                title: '红色资源丰富',
                desc: '依托四大场馆馆藏文物与文献'
              },
              {
                icon: <Users className="h-6 w-6 text-[#FFE15D]" />,
                title: '形式创新多样',
                desc: '告别传统说教，注重体验感'
              },
              {
                icon: <CheckCircle2 className="h-6 w-6 text-[#FFE15D]" />,
                title: '专业团队支撑',
                desc: '党史专家+活动策划师双重保障'
              },
              {
                icon: <Star className="h-6 w-6 text-[#FFE15D]" />,
                title: '场地设施完善',
                desc: '满足各种规模党建活动需求'
              }
            ].map((advantage, index) => (
              <div key={index} className="bg-gradient-to-br from-[#2D2D2D] to-[#4B5563] rounded-xl p-6 text-white hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{advantage.title}</h3>
                <p className="text-sm text-white/80">{advantage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 获取策划方案 */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* 表单 */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-4 text-[#2D2D2D]">获取策划方案</h2>
                <p className="text-[#6B7280]">
                  请填写您的需求，我们将为您提供专属的党建活动策划方案
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#2D2D2D] font-semibold mb-2">公司名称 *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#FFE15D] focus:ring-2 focus:ring-[#FFE15D]/20 outline-none transition-all"
                      placeholder="请输入公司名称"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-[#2D2D2D] font-semibold mb-2">联系人 *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#FFE15D] focus:ring-2 focus:ring-[#FFE15D]/20 outline-none transition-all"
                      placeholder="请输入联系人姓名"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#2D2D2D] font-semibold mb-2">联系电话 *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#FFE15D] focus:ring-2 focus:ring-[#FFE15D]/20 outline-none transition-all"
                      placeholder="请输入联系电话"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-[#2D2D2D] font-semibold mb-2">电子邮箱 *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#FFE15D] focus:ring-2 focus:ring-[#FFE15D]/20 outline-none transition-all"
                      placeholder="请输入电子邮箱"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#2D2D2D] font-semibold mb-2">预计人数</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#FFE15D] focus:ring-2 focus:ring-[#FFE15D]/20 outline-none transition-all"
                      placeholder="请输入预计人数"
                      value={formData.estimatedPeople}
                      onChange={(e) => setFormData({ ...formData, estimatedPeople: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-[#2D2D2D] font-semibold mb-2">预计时间</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#FFE15D] focus:ring-2 focus:ring-[#FFE15D]/20 outline-none transition-all"
                      placeholder="请输入预计活动时间"
                      value={formData.estimatedDate}
                      onChange={(e) => setFormData({ ...formData, estimatedDate: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#2D2D2D] font-semibold mb-2">活动需求描述</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#FFE15D] focus:ring-2 focus:ring-[#FFE15D]/20 outline-none transition-all resize-none"
                    placeholder="请详细描述您的活动需求..."
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#FFE15D] to-[#FF9F43] hover:shadow-xl text-[#2D2D2D] px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:scale-[1.02]"
                >
                  提交咨询
                </button>
              </form>
            </div>

            {/* 联系方式 */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-[#2D2D2D]">联系方式</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[#6B7280] text-sm mb-1">联系电话</p>
                    <p className="text-xl font-bold text-[#2D2D2D]">191-0658-3798</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2D2D2D] to-[#4B5563] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[#6B7280] text-sm mb-1">电子邮箱</p>
                    <p className="text-xl font-bold text-[#2D2D2D]">service@zhijiang-culture.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#6B7280] to-[#4B5563] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[#6B7280] text-sm mb-1">场馆地址</p>
                    <p className="text-xl font-bold text-[#2D2D2D]">浙江省杭州市西湖区<br />之江文化中心研学中心</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-[#6B7280] text-sm mb-4">
                  我们的客服团队将在24小时内与您联系，为您提供专业的党建活动策划建议
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[#FFE15D] font-semibold hover:gap-4 transition-all"
                >
                  查看更多联系方式
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
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
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#FFE15D]" />
                  <span>service@zhijiang-culture.com</span>
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
