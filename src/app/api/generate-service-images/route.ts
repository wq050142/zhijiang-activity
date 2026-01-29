import { ImageGenerationClient, Config } from 'coze-coding-dev-sdk';
import { NextResponse } from 'next/server';

const config = new Config();
const client = new ImageGenerationClient(config);

export async function POST() {
  try {
    // 定义4个场景的图片提示词
    const prompts = [
      {
        prompt: '企业年会活动场景，现代艺术空间中举办的年度盛典，舞台灯光璀璨，氛围热烈欢快，企业文化展示，高端时尚，专业摄影风格',
        size: '1920x1200'
      },
      {
        prompt: '产品发布会场景，文化地标中的科技产品发布活动，现代化会场，专业媒体发布会场景，科技感与文化艺术融合，高端商务氛围',
        size: '1920x1200'
      },
      {
        prompt: '客户答谢会场景，博物馆文化体验活动，私人导览服务，高端商务人士聚会，温馨优雅的氛围，文化交流与商务洽谈',
        size: '1920x1200'
      },
      {
        prompt: '行业峰会场景，高端国际会议中心，专业论坛峰会，知名嘉宾演讲，商务精英云集，专业会议氛围，现代化会场布置',
        size: '1920x1200'
      }
    ];

    // 并行生成4张图片
    const responses = await client.batchGenerate(prompts);

    const results = responses.map((response, index) => {
      const helper = client.getResponseHelper(response);
      
      if (helper.success && helper.imageUrls.length > 0) {
        return {
          index,
          prompt: prompts[index].prompt,
          imageUrl: helper.imageUrls[0],
          success: true
        };
      } else {
        return {
          index,
          prompt: prompts[index].prompt,
          success: false,
          error: helper.errorMessages.join(', ')
        };
      }
    });

    // 检查是否所有图片都生成成功
    const allSuccess = results.every(r => r.success);
    
    return NextResponse.json({
      success: allSuccess,
      results
    });

  } catch (error) {
    console.error('Image generation error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
