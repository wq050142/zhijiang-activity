import { eq, desc, and, SQL } from "drizzle-orm";
import { getDb } from "coze-coding-dev-sdk";
import {
  contactInquiries,
  insertContactInquirySchema,
  updateContactInquirySchema,
} from "./shared/schema";
import type {
  ContactInquiry,
  InsertContactInquiry,
  UpdateContactInquiry,
} from "./shared/schema";

export class ContactManager {
  async createInquiry(data: InsertContactInquiry): Promise<ContactInquiry> {
    const db = await getDb();
    const validated = insertContactInquirySchema.parse(data);
    const [inquiry] = await db.insert(contactInquiries).values(validated).returning();
    return inquiry;
  }

  async getInquiries(options: {
    skip?: number;
    limit?: number;
    status?: string;
  } = {}): Promise<ContactInquiry[]> {
    const { skip = 0, limit = 100, status } = options;
    const db = await getDb();

    const conditions: SQL[] = [];
    if (status !== undefined) {
      conditions.push(eq(contactInquiries.status, status));
    }

    if (conditions.length > 0) {
      return db
        .select()
        .from(contactInquiries)
        .where(and(...conditions))
        .orderBy(desc(contactInquiries.createdAt))
        .limit(limit)
        .offset(skip);
    }

    return db
      .select()
      .from(contactInquiries)
      .orderBy(desc(contactInquiries.createdAt))
      .limit(limit)
      .offset(skip);
  }

  async getInquiryById(id: string): Promise<ContactInquiry | null> {
    const db = await getDb();
    const [inquiry] = await db
      .select()
      .from(contactInquiries)
      .where(eq(contactInquiries.id, id));
    return inquiry || null;
  }

  async updateInquiryStatus(
    id: string,
    data: UpdateContactInquiry
  ): Promise<ContactInquiry | null> {
    const db = await getDb();
    const validated = updateContactInquirySchema.parse(data);
    const [inquiry] = await db
      .update(contactInquiries)
      .set({ ...validated, updatedAt: new Date() })
      .where(eq(contactInquiries.id, id))
      .returning();
    return inquiry || null;
  }

  async deleteInquiry(id: string): Promise<boolean> {
    const db = await getDb();
    const result = await db
      .delete(contactInquiries)
      .where(eq(contactInquiries.id, id));
    return (result.rowCount ?? 0) > 0;
  }
}

export const contactManager = new ContactManager();
