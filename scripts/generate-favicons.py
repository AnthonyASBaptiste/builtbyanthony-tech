import os
from PIL import Image, ImageDraw

def create_svg():
    svg_content = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <defs>
    <linearGradient id="cyan-emerald" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06b6d4" />
      <stop offset="100%" stop-color="#10b981" />
    </linearGradient>
  </defs>
  <style>
    .bg { fill: #07090e; }
    .glyph { stroke: url(#cyan-emerald); stroke-width: 2.2px; fill: none; stroke-linecap: round; stroke-linejoin: round; }
    .cursor { stroke: #06b6d4; stroke-width: 2.2px; stroke-linecap: round; }
    @media (prefers-color-scheme: light) {
      .bg { fill: #0b1120; }
    }
  </style>
  <!-- Background squircle -->
  <rect class="bg" width="32" height="32" rx="7" stroke="#1e293b" stroke-width="0.8" />

  <!-- Monogram 'B' -->
  <!-- Stem -->
  <line class="glyph" x1="7" y1="8.5" x2="7" y2="23.5" />
  <!-- Upper loop -->
  <path class="glyph" d="M7,8.5 L12,8.5 C14.5,8.5 16,9.8 16,12 C16,14.2 14.5,15.5 12,15.5 L7,15.5" />
  <!-- Lower loop -->
  <path class="glyph" d="M7,15.5 L13,15.5 C15.8,15.5 17.5,17 17.5,19.5 C17.5,22 15.8,23.5 13,23.5 L7,23.5" />

  <!-- Builder terminal cursor '>_' -->
  <!-- Arrow '>' -->
  <path class="glyph" d="M20,13.5 L23.5,16.5 L20,19.5" />
  <!-- Cursor '_' -->
  <line class="cursor" x1="25" y1="21" x2="28" y2="21" />
</svg>
'''
    return svg_content

def generate_icons():
    target_app = "/home/anthony/Projects/builtbyanthony-tech/src/app"
    public_dir = "/home/anthony/Projects/builtbyanthony-tech/public"
    os.makedirs(target_app, exist_ok=True)
    os.makedirs(public_dir, exist_ok=True)

    # 1. Save SVG
    svg_str = create_svg()
    with open(os.path.join(public_dir, "favicon.svg"), "w") as f:
        f.write(svg_str)
    with open(os.path.join(target_app, "icon.svg"), "w") as f:
        f.write(svg_str)

    # 2. Render 512x512 high-res raster
    base_size = 512
    img = Image.new("RGBA", (base_size, base_size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Background squircle
    draw.rounded_rectangle([(16, 16), (496, 496)], radius=112, fill=(7, 9, 14, 255), outline=(30, 41, 59, 255), width=8)

    # Color definitions
    cyan = (6, 182, 212, 255)
    emerald = (16, 185, 129, 255)
    line_w = 34

    # 'B' stem: x=112, y=136 to 376
    draw.line([(112, 136), (112, 376)], fill=cyan, width=line_w)

    # 'B' top bar & arc:
    draw.line([(112, 136), (192, 136)], fill=cyan, width=line_w)
    draw.arc([(130, 136), (256, 250)], start=270, end=90, fill=cyan, width=line_w)
    draw.line([(112, 250), (196, 250)], fill=cyan, width=line_w)

    # 'B' bottom arc:
    draw.arc([(140, 250), (280, 376)], start=270, end=90, fill=emerald, width=line_w)
    draw.line([(112, 376), (210, 376)], fill=emerald, width=line_w)

    # Arrow '>'
    draw.line([(320, 216), (376, 264)], fill=cyan, width=line_w, joint="round")
    draw.line([(376, 264), (320, 312)], fill=cyan, width=line_w, joint="round")

    # Cursor '_'
    draw.line([(400, 336), (452, 336)], fill=cyan, width=line_w)

    # Apple Touch Icon (180x180)
    apple_img = img.resize((180, 180), Image.Resampling.LANCZOS)
    apple_img.save(os.path.join(public_dir, "apple-touch-icon.png"), "PNG")
    apple_img.save(os.path.join(target_app, "apple-icon.png"), "PNG")

    # Icon (32x32)
    icon_32 = img.resize((32, 32), Image.Resampling.LANCZOS)
    icon_32.save(os.path.join(public_dir, "icon-32x32.png"), "PNG")
    icon_32.save(os.path.join(target_app, "icon.png"), "PNG")

    # Multi-resolution ICO (16, 32, 48)
    ico_imgs = [img.resize((s, s), Image.Resampling.LANCZOS) for s in (16, 32, 48)]
    ico_imgs[1].save(
        os.path.join(public_dir, "favicon.ico"),
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)],
        append_images=ico_imgs
    )
    ico_imgs[1].save(
        os.path.join(target_app, "favicon.ico"),
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)],
        append_images=ico_imgs
    )

    print("Generated favicons successfully!")

if __name__ == "__main__":
    generate_icons()
