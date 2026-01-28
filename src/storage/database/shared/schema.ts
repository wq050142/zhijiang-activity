import { sql } from "drizzle-orm";
import {
  pgTable,
  text,
  varchar,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { createSchemaFactory } from "drizzle-zod";
import { z } from "zod";

export const contactInquiries = pgTable(
  "contact_inquiries",
  {
    id: varchar("id", { length: 36 })
      .primaryKey()
      .default(sql`gen_random_uuid()`),
    name: varchar("name", { length: 128 }).notNull(),
    company: varchar("company", { length: 255 }),
    phone: varchar("phone", { length: 20 }).notNull(),
    email: varchar("email", { length: 255 }),
    service: varchar("service", { length: 100 }),
    message: text("message"),
    status: varchar("status", { length: 20 }).default("pending").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }),
  },
  (table) => ({
    statusIdx: index("contact_inquiries_status_idx").on(table.status),
    createdAtIdx: index("contact_inquiries_created_at_idx").on(table.createdAt),
  })
);

// 使用 createSchemaFactory 配置 date coercion（处理前端 string → Date 转换）
const { createInsertSchema: createCoercedInsertSchema } = createSchemaFactory({
  coerce: { date: true },
});

// Zod schemas for validation
export const insertContactInquirySchema = createCoercedInsertSchema(contactInquiries).pick({
  name: true,
  company: true,
  phone: true,
  email: true,
  service: true,
  message: true,
});

export const updateContactInquirySchema = createCoercedInsertSchema(contactInquiries)
  .pick({
    status: true,
  })
  .partial();

// TypeScript types
export type ContactInquiry = typeof contactInquiries.$inferSelect;
export type InsertContactInquiry = z.infer<typeof insertContactInquirySchema>;
export type UpdateContactInquiry = z.infer<typeof updateContactInquirySchema>;





