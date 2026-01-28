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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert('感谢您的咨询！我们会尽快与您联系。');
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          service: '',
          message: ''
        });
      } else {
        alert(result.message || '提交失败，请稍后重试。');
      }
    } catch (error) {
      console.error('表单提交错误:', error);
      alert('网络错误，请稍后重试。');
    }
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
      <section className="pt-28 md:pt-32 pb-12 px-4 md:px-6 relative overflow-hidden">
        {/* 背景图片 */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/首页背景.png")' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFC107]/80 to-[#FF9F43]/80">
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFC107]/30 via-transparent to-[#FF9F43]/30"></div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10 pt-4 md:pt-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            联系我们
          </h1>
          <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
            告诉我们您的诉求
          </p>
          <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
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
                <div className="mt-3 md:mt-4 bg-white rounded-2xl p-3 md:p-4 border border-gray-100">
                  <p className="text-center text-xs md:text-sm text-[#6B7280] mb-2 md:mb-3">微信二维码</p>
                  <div className="aspect-square max-w-[150px] md:max-w-[200px] mx-auto bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                    <img src="/xiaoxuemei.jpg" alt="微信二维码" className="w-full h-full object-cover" />
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
              <div className="mt-8 bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-[#FF9F43]" />
                    <span className="text-[#2D2D2D] font-semibold">之江文化中心位置</span>
                  </div>
                </div>
                <div className="aspect-video w-full">
                  <img
                    src="/contact-map.png"
                    alt="之江文化中心地图"
                    className="w-full h-full object-cover"
                  />
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
            让我们为您创造精彩
          </h2>
          <p className="text-sm md:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            依托之江文化中心资源，为您打造独一无二的活动体验
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:191-0658-3798"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FFE15D] to-[#FF9F43] hover:shadow-lg text-[#2D2D2D] px-6 py-2 rounded-full transition-all font-semibold hover:scale-105"
            >
              <Phone className="h-4 w-4" />
              立即致电
            </a>
          </div>
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
