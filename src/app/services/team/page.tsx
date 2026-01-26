'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Building2, Phone, Mail, MapPin, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function TeamPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    activityType: 'team',
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
            <Link href="/services/team" className="text-[#FFE15D] font-medium">团建拓展</Link>
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
            <Link href="/contact" className="bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] hover:bg-gradient-to-br from-[#4B5563] to-[#2D2D2D] text-white px-6 py-2 rounded-full transition-all hover:shadow-lg">
              立即咨询
            </Link>
          </div>
        </div>
      </nav>

      {/* Banner区域 */}
      <section className="pt-32 pb-12 px-6 bg-gradient-to-br from-[#2D2D2D] to-[#4B5563]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            文化沉浸团建 · 非遗手作体验
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            拒绝千篇一律的拓展训练，以文化为载体，为团队打造独具人文气息的团建活动
          </p>
        </div>
      </section>

      {/* 服务介绍 */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#2D2D2D]">服务介绍</h2>
              <div className="space-y-4 text-[#2D2D2D]/80 leading-relaxed">
                <p className="text-lg">
                  拒绝千篇一律的拓展训练，我们以文化为载体，
                  为团队打造独具人文气息的团建活动。
                </p>
                <p>
                  在非遗手作体验中凝聚团队力量，
                  在文化共创中激发团队创意，
                  在艺术鉴赏中提升团队品味。
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-gray-200/10">
                <div className="text-3xl font-bold text-[#FFE15D] mb-1">800+</div>
                <div className="text-sm text-[#2D2D2D]/60">团建活动</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-gray-200/10">
                <div className="text-3xl font-bold text-[#FFE15D] mb-1">98%</div>
                <div className="text-sm text-[#2D2D2D]/60">满意度</div>
              </div>
            </div>
          </div>

          {/* 活动形式 */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#2D2D2D]">活动形式</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* 文化沉浸体验 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-200/10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#6B7280] to-[#4B5563] rounded-xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#2D2D2D]">文化沉浸体验</h3>
              <p className="text-[#2D2D2D]/70 mb-6 leading-relaxed">
                参观主题展览，了解文化脉络；参与文化体验活动，感受文化魅力；在轻松愉悦的氛围中增进团队交流。
              </p>
            </div>

            {/* 非遗手作体验 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-200/10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2D2D2D] to-[#4B5563] rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#2D2D2D]">非遗手作体验</h3>
              <p className="text-[#2D2D2D]/70 mb-6 leading-relaxed">
                邀请非遗传承人现场授课，团队共同完成手作作品，在协作中增强团队凝聚力。
              </p>
            </div>

            {/* 人文团队共创 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-200/10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] rounded-xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#2D2D2D]">人文团队共创</h3>
              <p className="text-[#2D2D2D]/70 mb-6 leading-relaxed">
                围绕文化主题开展团队共创活动，激发团队创造力与文化认同感。
              </p>
            </div>
          </div>

          {/* 特色优势 */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: '活动形式创新', desc: '文化体验替代传统拓展' },
              { title: '体验感强', desc: '动手实践与知识学习相结合' },
              { title: '成果可留存', desc: '团队作品可带走作为纪念' },
              { title: '寓教于乐', desc: '在轻松氛围中实现团建目标' }
            ].map((advantage, index) => (
              <div key={index} className="bg-gradient-to-br from-[#2D2D2D] to-[#4B5563] rounded-xl p-6 text-white">
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
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#2D2D2D]">获取策划方案</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#2D2D2D] font-medium mb-2">公司名称 *</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-200/20 focus:border-[#FFE15D] outline-none" placeholder="请输入公司名称" value={formData.companyName} onChange={(e) => setFormData({ ...formData, companyName: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-[#2D2D2D] font-medium mb-2">联系人 *</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-200/20 focus:border-[#FFE15D] outline-none" placeholder="请输入联系人姓名" value={formData.contactName} onChange={(e) => setFormData({ ...formData, contactName: e.target.value })} />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#2D2D2D] font-medium mb-2">联系电话 *</label>
                    <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-gray-200/20 focus:border-[#FFE15D] outline-none" placeholder="请输入联系电话" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-[#2D2D2D] font-medium mb-2">电子邮箱 *</label>
                    <input type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-200/20 focus:border-[#FFE15D] outline-none" placeholder="请输入电子邮箱" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                </div>

                <div>
                  <label className="block text-[#2D2D2D] font-medium mb-2">活动需求描述</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200/20 focus:border-[#FFE15D] outline-none resize-none" placeholder="请详细描述您的活动需求..." value={formData.requirements} onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}></textarea>
                </div>

                <button type="submit" className="w-full bg-gradient-to-br from-[#FFE15D] to-[#FF9F43] hover:bg-gradient-to-br from-[#4B5563] to-[#2D2D2D] text-white px-8 py-4 rounded-lg font-medium transition-all shadow-lg">
                  提交咨询
                </button>
              </form>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-[#2D2D2D]">联系方式</h3>
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
