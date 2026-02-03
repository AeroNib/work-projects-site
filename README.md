# Chomp Workshop Project Site

This site is a visual catalog of various personal creative projects I've worked on.

It's a static site built with HTML and CSS and minimal JavaScript to accomplish some things like serving dynamic navigation links. The site structure is simple and designed around reuse.

# Adding New Projects

1. **Copy the template folder** and rename it with a year-prefixed serial number (e.g., `202302`, `202303`)
2. **Add images to the new folder**:
   - `thumb.jpg` - Thumbnail for gallery (200px tall)
   - `hero.jpg` - Main project image (page will limit it to 1050px wide x 900px tall)
3. **Edit index.html in the new folder**:
   - Update project title
   - Update year
   - Update external link URL, icon, and aria-label (or comment out if not needed)
   - Update description paragraph (or comment out if not needed)
4. **Update main gallery index.html** with a link to `newfolder`

# Development Testing

To test with a local clone of the repository, run `./serve.sh` to start a Python web server.
