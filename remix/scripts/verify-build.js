#!/usr/bin/env node
/* eslint-env node */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const buildDir = path.join(__dirname, "..", "build");
const clientDir = path.join(buildDir, "client");
const serverDir = path.join(buildDir, "server");

console.log("🔍 Verifying Remix build...");

// Check if build directories exist
if (!fs.existsSync(buildDir)) {
  console.error("❌ Build directory does not exist");
  process.exit(1);
}

if (!fs.existsSync(clientDir)) {
  console.error("❌ Client build directory does not exist");
  process.exit(1);
}

if (!fs.existsSync(serverDir)) {
  console.error("❌ Server build directory does not exist");
  process.exit(1);
}

// Check for server entry point
const serverEntry = path.join(serverDir, "index.js");
if (!fs.existsSync(serverEntry)) {
  console.error("❌ Server entry point does not exist");
  process.exit(1);
}

// Check for client assets
const assetsDir = path.join(clientDir, "assets");
if (!fs.existsSync(assetsDir)) {
  console.error("❌ Client assets directory does not exist");
  process.exit(1);
}

// List all assets
const assets = fs.readdirSync(assetsDir);
console.log("📦 Client assets found:");
assets.forEach((asset) => {
  console.log(`  - ${asset}`);
});

// Check for index route asset
const indexAssets = assets.filter((asset) => asset.includes("_index-"));
if (indexAssets.length === 0) {
  console.error("❌ No index route assets found");
  process.exit(1);
}

console.log("✅ Build verification completed successfully!");
console.log(`📊 Total assets: ${assets.length}`);
console.log(`🏠 Index route assets: ${indexAssets.length}`);
