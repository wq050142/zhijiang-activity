"use client";

import { useState, useEffect } from "react";
import { Trash2, Phone, Mail, Building2, CheckCircle2, Clock } from "lucide-react";

interface ContactInquiry {
  id: string;
  name: string;
  company: string | null;
  phone: string;
  email: string | null;
  service: string | null;
  message: string | null;
  status: string;
  createdAt: string;
  updatedAt: string | null;
}

export default function AdminContactPage() {
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    fetchInquiries();
  }, [filter]);

  const fetchInquiries = async () => {
    try {
      setLoading(true);
      const url = filter === "all" ? "/api/contact" : `/api/contact?status=${filter}`;
      const response = await fetch(url);
      const result = await response.json();
      
      if (result.success) {
        setInquiries(result.data);
      }
    } catch (error) {
      console.error("获取咨询记录失败:", error);
      alert("获取咨询记录失败");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">
            <Clock className="h-3 w-3" />
            待处理
          </span>
        );
      case "processing":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
            <Clock className="h-3 w-3" />
            处理中
          </span>
        );
      case "completed":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
            <CheckCircle2 className="h-3 w-3" />
            已完成
          </span>
        );
      default:
        return <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">{status}</span>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 简单导航栏 */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">咨询管理后台</h1>
            <a href="/" className="text-sm text-blue-600 hover:underline">
              返回网站
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* 筛选器 */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-700">状态筛选：</span>
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              全部 ({inquiries.length})
            </button>
            <button
              onClick={() => setFilter("pending")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === "pending"
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              待处理 ({inquiries.filter((i) => i.status === "pending").length})
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === "completed"
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              已完成 ({inquiries.filter((i) => i.status === "completed").length})
            </button>
          </div>
        </div>

        {/* 咨询列表 */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
            <p className="mt-4 text-gray-600">加载中...</p>
          </div>
        ) : inquiries.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <p className="text-gray-500">暂无咨询记录</p>
          </div>
        ) : (
          <div className="space-y-4">
            {inquiries.map((inquiry) => (
              <div
                key={inquiry.id}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">{inquiry.name}</h3>
                      {getStatusBadge(inquiry.status)}
                    </div>
                    {inquiry.company && (
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <Building2 className="h-4 w-4" />
                        <span>{inquiry.company}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <a
                        href={`tel:${inquiry.phone}`}
                        className="flex items-center gap-1 hover:text-blue-600"
                      >
                        <Phone className="h-4 w-4" />
                        {inquiry.phone}
                      </a>
                      {inquiry.email && (
                        <a
                          href={`mailto:${inquiry.email}`}
                          className="flex items-center gap-1 hover:text-blue-600"
                        >
                          <Mail className="h-4 w-4" />
                          {inquiry.email}
                        </a>
                      )}
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">{formatDate(inquiry.createdAt)}</span>
                </div>

                {inquiry.service && (
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">
                      服务类型：{inquiry.service}
                    </span>
                  </div>
                )}

                {inquiry.message && (
                  <div className="bg-gray-50 rounded-lg p-3 mb-3">
                    <p className="text-sm text-gray-700 whitespace-pre-wrap">
                      {inquiry.message}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
