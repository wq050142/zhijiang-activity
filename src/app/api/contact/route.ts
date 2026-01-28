import { NextRequest, NextResponse } from "next/server";
import { contactManager } from "@/storage/database/contactManager";
import type { InsertContactInquiry } from "@/storage/database/shared/schema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const inquiryData: InsertContactInquiry = {
      name: body.name,
      company: body.company || null,
      phone: body.phone,
      email: body.email || null,
      service: body.service || null,
      message: body.message || null,
    };

    const inquiry = await contactManager.createInquiry(inquiryData);
    
    return NextResponse.json({
      success: true,
      message: "咨询提交成功！我们会尽快与您联系。",
      data: inquiry,
    });
  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "提交失败，请稍后重试。",
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const status = searchParams.get("status") || undefined;

    const inquiries = await contactManager.getInquiries({
      status,
      limit: 50,
    });

    return NextResponse.json({
      success: true,
      data: inquiries,
    });
  } catch (error) {
    console.error("Get inquiries error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "获取咨询记录失败。",
      },
      { status: 500 }
    );
  }
}
