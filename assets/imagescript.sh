#!/bin/bash
# do not move the script!
# manually add images to the local folder and it simply generates the links required
# TODO: figure out a better way so i dont have to change the '_' every time

rm imagelinks.txt
touch imagelinks.txt

# find jpg and png in local folder, remove './'
find . -maxdepth 1 -type f \( -name "*.jpg" -or -name "*.png" \) -exec echo '{}' \; | cut -c 3- > temp.txt

# format output into .md image link format
input="temp.txt"
while IFS= read -r line
do
  echo "![/assets/post_images/_/$line](/assets/post_images/_/$line)" >> imagelinks.txt
done < "$input"

rm temp.txt
