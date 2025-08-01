#!/bin/bash

# Fix linting errors script
# Copy this script to your PR branch and run it

echo "🔧 Starting to fix linting errors..."

# Files to fix based on the CI error output
files=(
  "pages/accessibility.tsx"
  "pages/agent-resources.tsx"
  "pages/contact.tsx"
  "pages/cookies.tsx"
  "pages/data-deletion.tsx"
  "pages/faq.tsx"
  "pages/help.tsx"
  "pages/how-it-works.tsx"
  "pages/pricing.tsx"
  "pages/privacy.tsx"
  "pages/sample-reports.tsx"
  "pages/security.tsx"
  "pages/sitemap.tsx"
  "pages/terms.tsx"
  "pages/upgrade.tsx"
)

fixed_count=0
total_files=0

for file in "${files[@]}"; do
  total_files=$((total_files + 1))
  
  if [ ! -f "$file" ]; then
    echo "⚠️  File not found: $file"
    continue
  fi
  
  # Create backup
  cp "$file" "$file.backup"
  
  # Fix unescaped single quotes
  sed -i "s/'/\&apos;/g" "$file"
  
  # Fix unescaped double quotes (but be careful with JSX)
  # This is a simplified approach - you may need to manually review
  sed -i 's/"/\&quot;/g' "$file"
  
  # Fix HTML links - add Link import if needed
  if ! grep -q "import Link from 'next/link'" "$file" && ! grep -q 'import Link from "next/link"' "$file"; then
    # Add import after the last import statement
    sed -i '/^import.*from.*$/a import Link from '\''next/link'\'';' "$file"
  fi
  
  # Replace <a> tags with <Link> for internal navigation
  sed -i 's/<a href="\//<Link href="\//g' "$file"
  sed -i 's/<\/a>/<\/Link>/g' "$file"
  
  # Check if file was modified
  if ! cmp -s "$file" "$file.backup"; then
    echo "✅ Fixed: $file"
    fixed_count=$((fixed_count + 1))
  else
    echo "ℹ️  No changes needed: $file"
  fi
  
  # Clean up backup
  rm "$file.backup"
done

echo ""
echo "📊 Summary:"
echo "   Files processed: $total_files"
echo "   Files fixed: $fixed_count"
echo "   Files unchanged: $((total_files - fixed_count))"

if [ $fixed_count -gt 0 ]; then
  echo ""
  echo "🎉 Linting errors have been fixed!"
  echo "   Run 'npm run lint' to verify the fixes."
else
  echo ""
  echo "ℹ️  No files needed fixing or files not found."
  echo "   Make sure you are in the correct repository branch."
fi