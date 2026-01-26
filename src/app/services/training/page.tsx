'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Building2, Phone, Mail, MapPin, BookOpen, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function TrainingPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    activityType: 'training',
    estimatedPeople: '',
    estimatedDate: '',
    requirements: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('感谢您的咨询，我们会尽快与您联系！');
  };

  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* 顶部导航栏 */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-[#4A3728]/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Building2 className="h-10 w-10 text-[#4A3728]" />
            <div>
              <span className="text-2xl font-bold text-[#4A3728]">之江文化中心</span>
              <p className="text-xs text-[#C9A86C]">企业活动服务</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link href="/about" className="text-[#4A3728] hover:text-[#C9A86C] transition-colors font-medium">关于我们</Link>
            <Link href="/services/party" className="text-[#4A3728] hover:text-[#C9A86C] transition-colors font-medium">主题党建</Link>
            <Link href="/services/team" className="text-[#4A3728] hover:text-[#C9A86C] transition-colors font-medium">团建拓展</Link>
            <Link href="/services/training" className="text-[#C9A86C] font-medium">访学培训</Link>
            <Link href="/services/custom" className="text-[#4A3728] hover:text-[#C9A86C] transition-colors font-medium">定制活动</Link>
            <Link href="/cases" className="text-[#4A3728] hover:text-[#C9A86C] transition-colors font-medium">案例中心</Link>
            <Link href="/contact" className="text-[#4A3728] hover:text-[#C9A86C] transition-colors font-medium">联系我们</Link>
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:191-0658-3798" className="hidden md:flex items-center gap-2 text-[#4A3728] font-medium">
              <Phone className="h-4 w-4" />
              191-0658-3798
            </a>
            <Link href="/contact" className="bg-[#4A3728] hover:bg-[#2F4F4F] text-white px-6 py-2 rounded-full transition-all hover:shadow-lg">
              立即咨询
            </Link>
          </div>
        </div>
      </nav>

      {/* Banner区域 */}
      <section className="pt-32 pb-12 px-6 bg-gradient-to-br from-[#2F4F4F] to-[#4A3728]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            名家讲座引领 · 专业课程赋能
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            依托之江文化中心丰富的学术资源与专家网络，为企事业单位提供高质量的访学培训服务
          </p>
        </div>
      </section>

      {/* 服务介绍 */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#4A3728]">服务介绍</h2>
              <div className="space-y-4 text-[#4A3728]/80 leading-relaxed">
                <p className="text-lg">
                  依托之江文化中心丰富的学术资源与专家网络，
                  为企事业单位提供高质量的访学培训服务。
                </p>
                <p>
                  从前沿行业知识到人文素养提升，
                  为企业人才发展提供全方位支持。
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-[#4A3728]/10">
                <div className="text-3xl font-bold text-[#C9A86C] mb-1">500+</div>
                <div className="text-sm text-[#4A3728]/60">培训课程</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-[#4A3728]/10">
                <div className="text-3xl font-bold text-[#C9A86C] mb-1">97%</div>
                <div className="text-sm text-[#4A3728]/60">满意度</div>
              </div>
            </div>
          </div>

          {/* 课程体系 */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#4A3728]">课程体系</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-[#4A3728]/10">
              <div className="w-16 h-16 bg-[#2F4F4F] rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#4A3728]">名家讲座</h3>
              <p className="text-[#4A3728]/70 leading-relaxed">
                邀请知名学者、行业专家开展专题讲座，涵盖历史文化、艺术鉴赏、行业趋势等多个领域。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-[#4A3728]/10">
              <div className="w-16 h-16 bg-[#C9A86C] rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#4A3728]">专业培训</h3>
              <p className="text-[#4A3728]/70 leading-relaxed">
                根据企业需求定制培训课程，涵盖管理能力、专业技能、沟通技巧等方面。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-[#4A3728]/10">
              <div className="w-16 h-16 bg-[#4A3728] rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#4A3728]">行业交流</h3>
              <p className="text-[#4A3728]/70 leading-relaxed">
                组织企业间的学习交流活动，搭建资源共享与经验交流平台。
              </p>
            </div>
          </div>

          {/* 特色优势 */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: '师资力量雄厚', desc: '汇聚知名学者与行业专家' },
              { title: '课程体系完善', desc: '可根据需求定制培训方案' },
              { title: '学习环境优越', desc: '文化场馆营造沉浸式学习氛围' },
              { title: '后续服务跟进', desc: '提供学习资料与持续交流机会' }
            ].map((advantage, index) => (
              <div key={index} className="bg-gradient-to-br from-[#2F4F4F] to-[#4A3728] rounded-xl p-6 text-white">
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
              <h2 className="text-4xl font-bold mb-6 text-[#4A3728]">获取策划方案</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#4A3728] font-medium mb-2">公司名称 *</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-[#4A3728]/20 focus:border-[#C9A86C] outline-none" placeholder="请输入公司名称" value={formData.companyName} onChange={(e) => setFormData({ ...formData, companyName: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-[#4A3728] font-medium mb-2">联系人 *</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-[#4A3728]/20 focus:border-[#C9A86C] outline-none" placeholder="请输入联系人姓名" value={formData.contactName} onChange={(e) => setFormData({ ...formData, contactName: e.target.value })} />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#4A3728] font-medium mb-2">联系电话 *</label>
                    <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-[#4A3728]/20 focus:border-[#C9A86C] outline-none" placeholder="请输入联系电话" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-[#4A3728] font-medium mb-2">电子邮箱 *</label>
                    <input type="email" required className="w-full px-4 py-3 rounded-lg border border-[#4A3728]/20 focus:border-[#C9A86C] outline-none" placeholder="请输入电子邮箱" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                </div>

                <div>
                  <label className="block text-[#4A3728] font-medium mb-2">培训需求描述</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-[#4A3728]/20 focus:border-[#C9A86C] outline-none resize-none" placeholder="请详细描述您的培训需求..." value={formData.requirements} onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}></textarea>
                </div>

                <button type="submit" className="w-full bg-[#4A3728] hover:bg-[#2F4F4F] text-white px-8 py-4 rounded-lg font-medium transition-all shadow-lg">
                  提交咨询
                </button>
              </form>
            </div>

            <div className="bg-[#F5F1E8] rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-[#4A3728]">联系方式</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-[#4A3728] mt-1" />
                  <div>
                    <p className="text-[#4A3728]/60 text-sm mb-1">联系电话</p>
                    <p className="text-xl font-bold text-[#4A3728]">191-0658-3798</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-[#4A3728] mt-1" />
                  <div>
                    <p className="text-[#4A3728]/60 text-sm mb-1">电子邮箱</p>
                    <p className="text-xl font-bold text-[#4A3728]">service@zhijiang-culture.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-[#4A3728] mt-1" />
                  <div>
                    <p className="text-[#4A3728]/60 text-sm mb-1">场馆地址</p>
                    <p className="text-xl font-bold text-[#4A3728]">浙江省杭州市西湖区之江文化中心研学中心</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-[#4A3728] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/50 text-sm">© 2024 浙江文化空间发展有限公司 | 版权所有</p>
        </div>
      </footer>
    </div>
  );
}
