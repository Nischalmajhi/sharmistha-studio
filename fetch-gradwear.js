#!/usr/bin/env node
/**
 * Fetch Gradwear website for structural analysis
 * Run: node fetch-gradwear.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function fetchGradwearStructure() {
  try {
    console.log('📡 Fetching Gradwear website...');

    const response = await fetch('https://www.gradwear.ca/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/91.0'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const html = await response.text();

    // Save full HTML
    const outputPath = path.join(__dirname, 'reference.html');
    fs.writeFileSync(outputPath, html, 'utf8');

    console.log(`✅ Successfully saved to: ${outputPath}`);
    console.log(`📊 HTML size: ${(html.length / 1024).toFixed(2)} KB`);
    console.log('\n📋 Next steps:');
    console.log('Claude will now analyze reference.html for structure');

  } catch (error) {
    console.error('❌ Error fetching website:', error.message);
    process.exit(1);
  }
}

fetchGradwearStructure();
