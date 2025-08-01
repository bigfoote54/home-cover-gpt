#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Files to fix based on the CI error output
const filesToFix = [
  'pages/accessibility.tsx',
  'pages/agent-resources.tsx',
  'pages/contact.tsx',
  'pages/cookies.tsx',
  'pages/data-deletion.tsx',
  'pages/faq.tsx',
  'pages/help.tsx',
  'pages/how-it-works.tsx',
  'pages/pricing.tsx',
  'pages/privacy.tsx',
  'pages/sample-reports.tsx',
  'pages/security.tsx',
  'pages/sitemap.tsx',
  'pages/terms.tsx',
  'pages/upgrade.tsx'
];

function fixUnescapedEntities(content) {
  // Fix single quotes
  content = content.replace(/(?<!&)(?<!&#)(?<!&#x)'/g, '&apos;');
  
  // Fix double quotes (but be careful not to break JSX attributes)
  // Only replace quotes that are not in JSX attributes
  content = content.replace(/(?<!<[^>]*)"(?![^<]*>)/g, '&quot;');
  
  return content;
}

function fixHtmlLinks(content) {
  // Add import statement if not already present
  if (!content.includes("import Link from 'next/link'") && !content.includes('import Link from "next/link"')) {
    // Find the last import statement
    const importMatch = content.match(/import.*from\s+['"][^'"]+['"];?\s*\n/g);
    if (importMatch) {
      const lastImport = importMatch[importMatch.length - 1];
      const linkImport = "import Link from 'next/link';\n";
      content = content.replace(lastImport, lastImport + linkImport);
    } else {
      // If no imports, add at the top after any comments
      const commentMatch = content.match(/^(\s*\/\*[\s\S]*?\*\/\s*|\s*\/\/.*\n)*/);
      if (commentMatch) {
        const afterComments = content.substring(commentMatch[0].length);
        content = commentMatch[0] + "import Link from 'next/link';\n" + afterComments;
      } else {
        content = "import Link from 'next/link';\n" + content;
      }
    }
  }
  
  // Replace <a> tags with <Link> for internal navigation
  content = content.replace(
    /<a\s+href="\/([^"]+)"([^>]*)>/g,
    '<Link href="/$1"$2>'
  );
  
  // Close tags
  content = content.replace(/<\/a>/g, '</Link>');
  
  return content;
}

function fixFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${filePath}`);
    return false;
  }
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix unescaped entities
    content = fixUnescapedEntities(content);
    
    // Fix HTML links
    content = fixHtmlLinks(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    } else {
      console.log(`ℹ️  No changes needed: ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function main() {
  console.log('🔧 Starting to fix linting errors...\n');
  
  let fixedCount = 0;
  let totalFiles = 0;
  
  filesToFix.forEach(filePath => {
    totalFiles++;
    if (fixFile(filePath)) {
      fixedCount++;
    }
  });
  
  console.log(`\n📊 Summary:`);
  console.log(`   Files processed: ${totalFiles}`);
  console.log(`   Files fixed: ${fixedCount}`);
  console.log(`   Files unchanged: ${totalFiles - fixedCount}`);
  
  if (fixedCount > 0) {
    console.log('\n🎉 Linting errors have been fixed!');
    console.log('   Run "npm run lint" to verify the fixes.');
  } else {
    console.log('\nℹ️  No files needed fixing or files not found.');
  }
}

// Run the script
main();