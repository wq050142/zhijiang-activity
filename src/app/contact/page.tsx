'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Building2, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    activityType: '',
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
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Building2 className="h-10 w-10 text-[#2D2D2D]" />
            <div>
              <span className="text-2xl font-bold text-[#2D2D2D]">之江文化中心</span>
              <p className="text-xs text-[#FFE15D]">企业活动服务</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link href="/about" className="text-[#2D2D2D] hover:text-[#FFE15D] transition-colors font-medium">关于我们</Link>
            <Link href="/services/party" className="text-[#2D2D2D] hover:text-[#FFE15D] transition-colors font-medium">主题党建</Link>
            <Link href="/services/team" className="text-[#2D2D2D] hover:text-[#FFE15D] transition-colors font-medium">团建拓展</Link>
            <Link href="/services/training" className="text-[#2D2D2D] hover:text-[#FFE15D] transition-colors font-medium">访学培训</Link>
            <Link href="/services/custom" className="text-[#2D2D2D] hover:text-[#FFE15D] transition-colors font-medium">定制活动</Link>
            <Link href="/cases" className="text-[#2D2D2D] hover:text-[#FFE15D] transition-colors font-medium">案例中心</Link>
            <Link href="/contact" className="text-[#FFE15D] font-medium">联系我们</Link>
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:191-0658-3798" className="hidden md:flex items-center gap-2 text-[#2D2D2D] font-medium">
              <Phone className="h-4 w-4" />
              191-0658-3798
            </a>
            <Link href="/contact" className="bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] hover:bg-gradient-to-br from-[#4B5563] to-[#2D2D2D] text-white px-6 py-2 rounded-full transition-all hover:shadow-lg">
              立即咨询
            </Link>
          </div>
        </div>
      </nav>

      {/* Banner区域 */}
      <section className="pt-32 pb-12 px-6 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            联系我们
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            期待与您的合作，共同打造精彩活动
          </p>
        </div>
      </section>

      {/* 联系方式 */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* 联系表单 */}
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#2D2D2D]">在线留言</h2>
              <p className="text-[#2D2D2D]/70 mb-8">
                请填写以下信息，我们将尽快与您联系，为您提供专业的活动策划建议
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#2D2D2D] font-medium mb-2">公司名称 *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200/20 focus:border-[#FFE15D] focus:ring-2 focus:ring-[#FFE15D]/20 outline-none transition-all"
                      placeholder="请输入公司名称"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-[#2D2D2D] font-medium mb-2">联系人 *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200/20 focus:border-[#FFE15D] focus:ring-2 focus:ring-[#FFE15D]/20 outline-none transition-all"
                      placeholder="请输入联系人姓名"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#2D2D2D] font-medium mb-2">联系电话 *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200/20 focus:border-[#FFE15D] focus:ring-2 focus:ring-[#FFE15D]/20 outline-none transition-all"
                      placeholder="请输入联系电话"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-[#2D2D2D] font-medium mb-2">电子邮箱 *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200/20 focus:border-[#FFE15D] focus:ring-2 focus:ring-[#FFE15D]/20 outline-none transition-all"
                      placeholder="请输入电子邮箱"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#2D2D2D] font-medium mb-2">活动类型</label>
                  <select
                    className="w-full px-4 py-3 rounded-lg border border-gray-200/20 focus:border-[#FFE15D] focus:ring-2 focus:ring-[#FFE15D]/20 outline-none transition-all bg-white"
                    value={formData.activityType}
                    onChange={(e) => setFormData({ ...formData, activityType: e.target.value })}
                  >
                    <option value="">请选择活动类型</option>
                    <option value="party">主题党建</option>
                    <option value="team">团建拓展</option>
                    <option value="training">访学培训</option>
                    <option value="custom">定制活动</option>
                    <option value="other">其他</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#2D2D2D] font-medium mb-2">预计人数</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200/20 focus:border-[#FFE15D] focus:ring-2 focus:ring-[#FFE15D]/20 outline-none transition-all"
                      placeholder="请输入预计人数"
                      value={formData.estimatedPeople}
                      onChange={(e) => setFormData({ ...formData, estimatedPeople: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-[#2D2D2D] font-medium mb-2">预计时间</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200/20 focus:border-[#FFE15D] focus:ring-2 focus:ring-[#FFE15D]/20 outline-none transition-all"
                      placeholder="请输入预计活动时间"
                      value={formData.estimatedDate}
                      onChange={(e) => setFormData({ ...formData, estimatedDate: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#2D2D2D] font-medium mb-2">活动需求描述</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200/20 focus:border-[#FFE15D] focus:ring-2 focus:ring-[#FFE15D]/20 outline-none transition-all resize-none"
                    placeholder="请详细描述您的活动需求、预算、时间等详细信息..."
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] hover:bg-gradient-to-br from-[#4B5563] to-[#2D2D2D] text-white px-8 py-4 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
                >
                  提交咨询
                </button>
              </form>
            </div>

            {/* 联系信息 */}
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#2D2D2D]">联系方式</h2>

              <div className="space-y-6 mb-12">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/10">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <p className="text-[#2D2D2D]/60 text-sm mb-2">联系电话</p>
                      <a href="tel:191-0658-3798" className="text-2xl font-bold text-[#2D2D2D] hover:text-[#FFE15D] transition-colors">
                        191-0658-3798
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/10">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#2D2D2D] to-[#4B5563] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <p className="text-[#2D2D2D]/60 text-sm mb-2">电子邮箱</p>
                      <a href="mailto:service@zhijiang-culture.com" className="text-xl font-bold text-[#2D2D2D] hover:text-[#FFE15D] transition-colors">
                        service@zhijiang-culture.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/10">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#6B7280] to-[#4B5563] rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <p className="text-[#2D2D2D]/60 text-sm mb-2">场馆地址</p>
                      <p className="text-xl font-bold text-[#2D2D2D]">
                        浙江省杭州市西湖区
                        <br />
                        之江文化中心研学中心
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">营业时间</h3>
                <div className="space-y-2 text-white/80">
                  <div className="flex justify-between">
                    <span>周一至周日</span>
                    <span>9:00 - 18:00</span>
                  </div>
                </div>

                <div className="border-t border-white/10 mt-6 pt-6">
                  <p className="text-white/70 text-sm mb-4">
                    我们的客服团队将在24小时内与您联系，为您提供专业的活动策划建议
                  </p>
                  <Link
                    href="/services/party"
                    className="inline-flex items-center gap-2 text-[#FFE15D] font-medium hover:gap-4 transition-all"
                  >
                    查看服务详情
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="h-8 w-8 text-[#FFE15D]" />
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
