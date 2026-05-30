CREATE TABLE "metadata" (
	"id" text PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" text NOT NULL,
	"business_name" text NOT NULL,
	"website_url" text NOT NULL,
	"external_link" text NOT NULL,
	"created_at" text DEFAULT now(),
	CONSTRAINT "metadata_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();