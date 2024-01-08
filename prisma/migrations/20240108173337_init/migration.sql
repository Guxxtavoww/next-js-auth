-- CreateTable
CREATE TABLE "user" (
    "user_id" TEXT NOT NULL PRIMARY KEY,
    "user_name" TEXT,
    "user_email" TEXT,
    "email_verified_at" DATETIME,
    "user_image_url" TEXT,
    "user_password" TEXT,
    "user_role" TEXT NOT NULL DEFAULT 'user',
    "is_two_factor_enabled" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "account" (
    "account_id" TEXT NOT NULL PRIMARY KEY,
    "account_provider" TEXT NOT NULL,
    "provider_account_id" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "account_expiration_timestamp" INTEGER,
    "token_type" TEXT,
    "token_scope" TEXT,
    "token_id" TEXT,
    "session_state" TEXT,
    "user_id" TEXT NOT NULL,
    CONSTRAINT "account_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "user_user_email_key" ON "user"("user_email");

-- CreateIndex
CREATE UNIQUE INDEX "account_account_provider_provider_account_id_key" ON "account"("account_provider", "provider_account_id");
