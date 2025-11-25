#!/bin/bash

mkdir -p client/public/assets/images/services

# User Agent
UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"

# Function to download and convert
process_image() {
    url=$1
    category=$2
    count=$3
    
    # Create category directory
    mkdir -p "client/public/assets/images/services/$category"
    
    # Filename
    filename="${category}_${count}"
    
    # Download
    echo "Downloading $url to client/public/assets/images/services/$category/$filename.jpg"
    curl -s -L -A "$UA" "$url" -o "client/public/assets/images/services/$category/$filename.jpg"
    
    # Check if file is a valid image (size > 1KB)
    if [ -s "client/public/assets/images/services/$category/$filename.jpg" ] && [ $(stat -c%s "client/public/assets/images/services/$category/$filename.jpg") -gt 1000 ]; then
        # Convert to WebP
        convert "client/public/assets/images/services/$category/$filename.jpg" -resize 1920x\> -quality 80 "client/public/assets/images/services/$category/$filename.webp"
        rm "client/public/assets/images/services/$category/$filename.jpg"
        echo "Converted to client/public/assets/images/services/$category/$filename.webp"
    else
        echo "Failed to download $url (invalid or empty file)"
        rm -f "client/public/assets/images/services/$category/$filename.jpg"
    fi
}

current_category=""
counter=1

while IFS= read -r line || [ -n "$line" ]; do
    # Trim whitespace
    line=$(echo "$line" | xargs)
    
    if [[ -z "$line" ]]; then
        continue
    fi
    
    if [[ "$line" == *":" ]]; then
        # New category
        raw_cat="${line%:*}"
        raw_cat=$(echo "$raw_cat" | xargs) # Trim again
        
        # Normalize category name
        case "$raw_cat" in
            "Brandalama") current_category="brandalama" ;;
            "Deniz aşırı paketleme") current_category="deniz-asiri" ;;
            "flatrack konteyner") current_category="flat-rack-lashing" ;;
            "gemi proje lashing") current_category="gemi-proje-lashing" ;;
            "konteyner lashing") current_category="konteyner-lashing" ;;
            "proje kargo lashing") current_category="proje-kargo-lashing" ;;
            "sandıklama") current_category="sandiklama" ;;
            "shrink wrap paketleme") current_category="shrink-wrap" ;;
            "tekne ve yat lashing") current_category="tekne-yat-lashing" ;;
            *) current_category=$(echo "$raw_cat" | tr '[:upper:]' '[:lower:]' | tr ' ' '-') ;;
        esac
        counter=1
        echo "Processing Category: $current_category"
    elif [[ "$line" == http* ]]; then
        if [[ -n "$current_category" ]]; then
            process_image "$line" "$current_category" "$counter"
            ((counter++))
        fi
    fi
done < "clean_urls.txt"

