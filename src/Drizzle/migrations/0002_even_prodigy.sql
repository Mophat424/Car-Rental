ALTER TABLE "users" ADD COLUMN "verificationCode" varchar(6);--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "isVerified" boolean DEFAULT false NOT NULL;