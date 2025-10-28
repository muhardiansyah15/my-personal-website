#!/bin/bash

# HTML Template Converter Script
# This script helps convert existing HTML files to use the new template system

echo "🚀 Converting HTML files to use template system..."

# Backup original files
echo "📋 Creating backup of original files..."
mkdir -p backup
cp *.html backup/ 2>/dev/null

# Array of HTML files to process
html_files=("index.html" "about.html" "contact.html" "portfolio.html" "resume.html" "services.html" "publication.html" "portfolio-details.html" "service-details.html" "starter-page.html")

for file in "${html_files[@]}"; do
    if [ -f "$file" ]; then
        echo "🔄 Processing $file..."
        
        # Create temporary file for processing
        temp_file="${file}.temp"
        
        # Extract main content (between <main> and </main>)
        awk '
        /<main class="main">/{flag=1}
        flag && /<\/main>/{print; flag=0; next}
        flag
        ' "$file" > "${file}.main"
        
        # Create new template structure
        cat > "$temp_file" << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <!-- Head content will be loaded dynamically -->
</head>
<body>
    <!-- Header container -->
    <div id="header-container"></div>

EOF

        # Add the extracted main content
        cat "${file}.main" >> "$temp_file"
        
        # Add footer and scripts
        cat >> "$temp_file" << 'EOF'

    <!-- Footer container -->
    <div id="footer-container"></div>

    <!-- Template System Scripts - Load these first -->
    <script src="assets/js/components/head-config.js"></script>
    <script src="assets/js/components/header.js"></script>
    <script src="assets/js/components/footer.js"></script>
    <script src="assets/js/components/template-loader.js"></script>
</body>
</html>
EOF

        # Replace original file with processed version
        mv "$temp_file" "${file}"
        
        # Clean up temporary files
        rm -f "${file}.main"
        
        echo "✅ Converted $file"
    else
        echo "⚠️  $file not found, skipping..."
    fi
done

echo ""
echo "🎉 Conversion complete!"
echo "📂 Original files backed up to 'backup/' directory"
echo "🔧 You may need to manually adjust some content-specific elements"
echo ""
echo "🌐 Test your website by opening any HTML file in a browser"
echo "📝 To make updates to header/footer, edit the respective component files:"
echo "   - Header: assets/js/components/header.js"
echo "   - Footer: assets/js/components/footer.js" 
echo "   - Head config: assets/js/components/head-config.js"