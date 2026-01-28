'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Building2, Phone, Mail, MapPin, ArrowRight, CheckCircle2, Calendar, Sparkles, Award } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('表单提交:', formData);
    alert('感谢您的咨询！我们会尽快与您联系。');
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      service: '',
      message: ''
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
            <Link href="/cases" className="text-[#2D2D2D] hover:text-[#FFE15D] transition-colors font-medium">
              案例中心
            </Link>
            <Link href="/contact" className="text-[#FFE15D] font-bold">
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D2D2D] to-[#4B5563] opacity-90">
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D] via-[#2D2D2D]/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFE15D]/20 via-transparent to-[#FF9F43]/20"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <div className="text-center">
              <Sparkles className="h-32 md:h-48 w-32 md:w-48 text-white/40 mx-auto" />
              <p className="text-white/40 text-sm mt-4">联系我们横幅图片</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10 pt-12 md:pt-16">
          <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur px-4 py-2 rounded-full text-[#2D2D2D] text-sm font-medium mb-6 shadow-lg border border-gray-200">
            <Sparkles className="h-4 w-4 text-[#FFE15D]" />
            专业服务 · 快速响应
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            联系我们
          </h1>
          <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium mb-8">
            告诉我们您的诉求
          </p>
          <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium mb-8">
            我们为您定制专属活动方案
          </p>
        </div>
      </section>

      {/* 联系方式与表单 */}
      <section className="py-12 px-4 md:px-6 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* 联系方式 */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <Phone className="h-6 w-6 text-[#FFE15D]" />
                <span className="text-[#FF9F43] font-semibold">联系方式</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold mb-8 text-[#2D2D2D]">
                随时为您服务
              </h2>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-[#2D2D2D] mb-1">咨询热线</h3>
                    <p className="text-sm md:text-base text-[#6B7280]">191-0658-3798</p>
                    <p className="text-xs md:text-sm text-[#6B7280] mt-1">工作日 9:00-18:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#2D2D2D] to-[#4B5563] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="h-5 w-5 md:h-6 md:w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-[#2D2D2D] mb-1">微信</h3>
                    <p className="text-sm md:text-base text-[#6B7280]">之学小助理</p>
                    <p className="text-xs md:text-sm text-[#6B7280] mt-1">添加微信，快速沟通</p>
                  </div>
                </div>

                {/* 微信二维码 */}
                <div className="mt-3 md:mt-4 bg-white rounded-2xl p-3 md:p-4 shadow-md border border-gray-100">
                  <p className="text-center text-xs md:text-sm text-[#6B7280] mb-2 md:mb-3">微信二维码</p>
                  <div className="aspect-square max-w-[150px] md:max-w-[200px] mx-auto bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                    <p className="text-xs text-[#999]">二维码占位</p>
                  </div>
                  <p className="text-center text-[10px] md:text-xs text-[#6B7280] mt-2">扫描添加微信</p>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#6B7280] to-[#4B5563] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-[#2D2D2D] mb-1">地址</h3>
                    <p className="text-sm md:text-base text-[#6B7280]">浙江省杭州市西湖区之江文化中心</p>
                  </div>
                </div>
              </div>

              {/* 地图 */}
              <div className="mt-8 bg-gradient-to-br from-[#FFE15D]/10 to-[#FFE15D]/5 rounded-2xl overflow-hidden border border-[#FFE15D]/20">
                <div className="p-4 border-b border-[#FFE15D]/20">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-[#FFE15D]" />
                    <span className="text-[#2D2D2D] font-semibold">之江文化中心位置</span>
                  </div>
                </div>
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.amap.com/iframe?mode=map&uid=2F000004053067&point=120.103518,30.201353&zoom=15&srch=1&referer=wb_sh"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="之江文化中心地图"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* 联系表单 */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <Sparkles className="h-6 w-6 text-[#FFE15D]" />
                <span className="text-[#FF9F43] font-semibold">在线咨询</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold mb-8 text-[#2D2D2D]">
                告诉我们您的需求
              </h2>

              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-[#2D2D2D] font-semibold mb-2">
                      联系人 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFE15D] focus:border-transparent transition-all"
                      placeholder="请输入您的姓名"
                    />
                  </div>

                  <div>
                    <label className="block text-[#2D2D2D] font-semibold mb-2">
                      公司名称
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFE15D] focus:border-transparent transition-all"
                      placeholder="请输入公司名称"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-[#2D2D2D] font-semibold mb-2">
                      联系电话 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFE15D] focus:border-transparent transition-all"
                      placeholder="请输入您的手机号"
                    />
                  </div>

                  <div>
                    <label className="block text-[#2D2D2D] font-semibold mb-2 text-sm md:text-base">
                      电子邮箱
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFE15D] focus:border-transparent transition-all bg-white"
                      placeholder="请输入您的邮箱"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-[#2D2D2D] font-semibold mb-2">
                    服务类型
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFE15D] focus:border-transparent transition-all bg-white"
                  >
                    <option value="">请选择服务类型</option>
                    <option value="主题党建">主题党建</option>
                    <option value="团建拓展">团建拓展</option>
                    <option value="访学培训">访学培训</option>
                    <option value="定制活动">定制活动</option>
                    <option value="其他">其他</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-[#2D2D2D] font-semibold mb-2">
                    活动需求
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFE15D] focus:border-transparent transition-all resize-none"
                    placeholder="请简要描述您的活动需求、时间、人数等信息"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#FFE15D] to-[#FF9F43] hover:shadow-xl text-[#2D2D2D] px-6 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg hover:scale-105"
                >
                  提交咨询
                  <ArrowRight className="inline-block ml-2 h-5 w-5" />
                </button>

                <p className="text-sm text-[#6B7280] text-center mt-4">
                  提交后我们会在24小时内与您联系
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 服务流程 */}
      <section className="py-12 px-4 md:px-6 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Calendar className="h-6 w-6 text-[#FFE15D]" />
              <span className="text-[#FF9F43] font-semibold">服务流程</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#2D2D2D]">
              5步标准流程
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {[
              { step: '01', title: '需求对接', desc: '深入了解您的活动需求' },
              { step: '02', title: '方案设计', desc: '量身定制活动方案' },
              { step: '03', title: '确认签约', desc: '方案确认，签订合同' },
              { step: '04', title: '执行落地', desc: '全程专业执行服务' },
              { step: '05', title: '后续评价', desc: '活动总结，持续优化' }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-2xl p-4 md:p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">{item.step}</div>
                  <h3 className="text-sm md:text-lg font-bold text-white mb-1 md:mb-2">{item.title}</h3>
                  <p className="text-[10px] md:text-sm text-white/90">{item.desc}</p>
                </div>
                {index < 4 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-[#FFE15D]" />
                  </div>
                )}
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:191-0658-3798"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FFE15D] to-[#FF9F43] hover:shadow-xl text-[#2D2D2D] px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              立即致电
            </a>
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
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#FFE15D]" />
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
