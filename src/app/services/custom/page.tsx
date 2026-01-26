'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Building2, Phone, Mail, MapPin, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CustomPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    activityType: 'custom',
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
        <div className="max-w-7xl mx-auto px-4 py-3 md:px-6 md:py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-xl flex items-center justify-center">
                <Building2 className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
            <div>
              <span className="text-lg md:text-2xl font-bold text-[#2D2D2D]">之江文化中心</span>
              <p className="text-xs text-[#FFE15D]">企业活动服务</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link href="/about" className="text-[#2D2D2D] hover:text-[#FFE15D] transition-colors font-medium">关于我们</Link>
            <Link href="/services/party" className="text-[#2D2D2D] hover:text-[#FFE15D] transition-colors font-medium">主题党建</Link>
            <Link href="/services/team" className="text-[#2D2D2D] hover:text-[#FFE15D] transition-colors font-medium">团建拓展</Link>
            <Link href="/services/training" className="text-[#2D2D2D] hover:text-[#FFE15D] transition-colors font-medium">访学培训</Link>
            <Link href="/services/custom" className="text-[#FFE15D] font-medium">定制活动</Link>
            <Link href="/cases" className="text-[#2D2D2D] hover:text-[#FFE15D] transition-colors font-medium">案例中心</Link>
            <Link href="/contact" className="text-[#2D2D2D] hover:text-[#FFE15D] transition-colors font-medium">联系我们</Link>
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:191-0658-3798" className="hidden md:flex items-center gap-2 text-[#2D2D2D] font-medium">
              <Phone className="h-4 w-4" />
              191-0658-3798
            </a>
            <Link href="/contact" className="bg-gradient-to-r from-[#FFE15D] to-[#FF9F43] hover:shadow-lg text-[#2D2D2D] px-4 py-1.5 md:px-6 md:py-2 rounded-full transition-all font-semibold hover:scale-105">
              立即咨询
            </Link>
          </div>
        </div>
      </nav>

      {/* Banner区域 */}
      <section className="pt-28 pb-12 px-4 md:px-6 bg-gradient-to-br from-[#C9A86C] to-[#8B4513]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-white">
            高端商务定制 · 尊享文化礼遇
          </h1>
          <p className="text-sm md:text-lg text-white/80 max-w-3xl mx-auto">
            根据企业品牌调性与需求，量身定制专属活动，让每一次活动都彰显企业品位与文化底蕴
          </p>
        </div>
      </section>

      {/* 服务介绍 */}
      <section className="py-12 px-4 md:px-6 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-center mb-20">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-6 text-[#2D2D2D]">服务介绍</h2>
              <div className="space-y-4 text-[#2D2D2D]/80 leading-relaxed">
                <p className="text-lg">
                  根据企业品牌调性、活动目标与预算规模，
                  为企业量身定制专属活动。
                </p>
                <p>
                  从前期策划、场地布置、内容执行到后续服务，
                  提供一站式全流程解决方案。
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg text-center border border-gray-200/10">
                <div className="text-2xl md:text-3xl font-bold text-[#FFE15D] mb-1">300+</div>
                <div className="text-sm text-[#2D2D2D]/60">定制活动</div>
              </div>
              <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg text-center border border-gray-200/10">
                <div className="text-2xl md:text-3xl font-bold text-[#FFE15D] mb-1">99%</div>
                <div className="text-sm text-[#2D2D2D]/60">满意度</div>
              </div>
            </div>
          </div>

          {/* 服务范围 */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#2D2D2D]">服务范围</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-20">
            <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all border border-gray-200/10">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#2D2D2D] to-[#4B5563] rounded-xl flex items-center justify-center mb-6">
                <Calendar className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-4 text-[#2D2D2D]">高端商务活动</h3>
              <p className="text-[#2D2D2D]/70 leading-relaxed">
                企业周年庆典、战略合作签约仪式、高端商务接待、行业峰会等。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all border border-gray-200/10">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2 className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-4 text-[#2D2D2D]">品牌发布会</h3>
              <p className="text-[#2D2D2D]/70 leading-relaxed">
                新产品发布会、品牌战略发布会、媒体见面会等。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all border border-gray-200/10">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#6B7280] to-[#4B5563] rounded-xl flex items-center justify-center mb-6">
                <Calendar className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-4 text-[#2D2D2D]">VIP客户答谢</h3>
              <p className="text-[#2D2D2D]/70 leading-relaxed">
                客户答谢晚宴、尊享文化体验日、高端客户沙龙等。
              </p>
            </div>
          </div>

          {/* 特色优势 */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: '定制化服务', desc: '根据企业需求量身打造' },
              { title: '资源整合强', desc: '四大场馆资源灵活配置' },
              { title: '执行经验丰富', desc: '服务众多知名企业案例' },
              { title: '注重细节', desc: '从策划到执行全程把控' }
            ].map((advantage, index) => (
              <div key={index} className="bg-gradient-to-br from-[#C9A86C] to-[#8B4513] rounded-xl p-6 text-white">
                <h3 className="text-lg font-bold mb-2">{advantage.title}</h3>
                <p className="text-sm text-white/80">{advantage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 获取策划方案 */}
      <section className="py-12 px-4 md:px-6 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-6 text-[#2D2D2D]">获取策划方案</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-[#2D2D2D] font-medium mb-2">公司名称 *</label>
                    <input type="text" required className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg border border-gray-200/20 focus:border-[#FFE15D] outline-none" placeholder="请输入公司名称" value={formData.companyName} onChange={(e) => setFormData({ ...formData, companyName: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-[#2D2D2D] font-medium mb-2">联系人 *</label>
                    <input type="text" required className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg border border-gray-200/20 focus:border-[#FFE15D] outline-none" placeholder="请输入联系人姓名" value={formData.contactName} onChange={(e) => setFormData({ ...formData, contactName: e.target.value })} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-[#2D2D2D] font-medium mb-2">联系电话 *</label>
                    <input type="tel" required className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg border border-gray-200/20 focus:border-[#FFE15D] outline-none" placeholder="请输入联系电话" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-[#2D2D2D] font-medium mb-2">电子邮箱 *</label>
                    <input type="email" required className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg border border-gray-200/20 focus:border-[#FFE15D] outline-none" placeholder="请输入电子邮箱" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                </div>

                <div>
                  <label className="block text-[#2D2D2D] font-medium mb-2">活动需求描述</label>
                  <textarea rows={4} className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg border border-gray-200/20 focus:border-[#FFE15D] outline-none resize-none" placeholder="请详细描述您的活动需求..." value={formData.requirements} onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}></textarea>
                </div>

                <button type="submit" className="w-full bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] hover:bg-gradient-to-br from-[#4B5563] to-[#2D2D2D] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-medium transition-all shadow-lg">
                  提交咨询
                </button>
              </form>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl p-8">
              <h3 className="text-lg md:text-2xl font-bold mb-6 text-[#2D2D2D]">联系方式</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-[#2D2D2D] mt-1" />
                  <div>
                    <p className="text-[#2D2D2D]/60 text-sm mb-1">联系电话</p>
                    <p className="text-xl font-bold text-[#2D2D2D]">191-0658-3798</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-[#2D2D2D] mt-1" />
                  <div>
                    <p className="text-[#2D2D2D]/60 text-sm mb-1">电子邮箱</p>
                    <p className="text-xl font-bold text-[#2D2D2D]">service@zhijiang-culture.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-[#2D2D2D] mt-1" />
                  <div>
                    <p className="text-[#2D2D2D]/60 text-sm mb-1">场馆地址</p>
                    <p className="text-xl font-bold text-[#2D2D2D]">浙江省杭州市西湖区之江文化中心研学中心</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/50 text-sm">© 2024 浙江文化空间发展有限公司 | 版权所有</p>
        </div>
      </footer>
    </div>
  );
}
