

const DataImageFull = [
  {
    hero: "assets/image-full.png",
    type: "image",
    icon: "image",
    name: "Full Image",
    description: "Any image with the contents filling all areas of the frame.",
      DetailDo: [   "Display using fill or cover.", 
                    "Define the image focus area if possible. Use the <a href=\"#\">background position</a> technique.", 
                    "Define if the image is a foreground or background element to inform how it's used."],
      DetailDont: [ "Cropping with contain fill modes.", 
                    "Using behind text without adding an overlay or adjusting it's contrast."],

    examples: ""
  },
  {
    hero: "assets/image-full.png",
    type: "image",
    name: "Single Focal Point",
    icon: "image",
    description: "An image with a clear single point of focus",

    DetailDo: [   "Define the image focus area is possible. Use the <a href=\"#\">background position</a> technique.", 
                  "Likely best suited as hero foreground content where the single point of focus can engage the viewers eye.", 
                  "Consider fading the image & content background together to draw more attention to the single point of focus"],
    DetailDont: [ "Using as an image background behind text. The strong focus point can distract from the text legibility.", 
                  "", 
                  ""],

    examples: "assets/image-full.png"
  },
  {
    hero: "assets/image-full.png",
    type: "image",
    name: "Multi Point Focus",
    icon: "image",
    description: "An image with multiple points of focus.",

    DetailDo: [ "Usually optimial to display using fill or cover.", 
                "Define the image focus area is possible, although, this can be more diffuclt with plultipls focus points. Use the <a href=\"#\">background position</a> technique.", 
                "If using 'contain' sizing consider the image aspect ratio. A more square ratio will work better in more layouts."],
    DetailDont: [ "Using as an image background behind text. The strong focus point can distract from the text legibility.", 
                  "", 
                  ""],

    examples: "assets/image-full.png"
  },
  {
    hero: "assets/image-full.png",
    type: "image",
    name: "Texture",
    icon: "image",
    description: "An image with a very shallow focus, like a close up image of a texture, surface or abstract forms.",

    DetailDo: [ "Use as a primarily a background element. e.g. behind text with an overlay if needed.", 
                "Consider the size & scale of the image. e.g. if it's very shallow in focus it may be overwhelming as a large background", 
                "Consider using tiling if the image can be repeated. This saves on file size & the size is then adjustable."],
    DetailDont: [ "Using as a hero foreground element. Textural images are aesthetic but don't 'say' much.", 
                  "Display using 'contain or fit' sizing.", 
                  ""],

    examples: "assets/image-full.png"
  },
  {
    hero: "assets/image-full.png",
    type: "image",
    name: "Deep Focus",
    icon: "image",
    description: "An image with a deep & often multi point focus.",

    DetailDo: [ "Use as a background image with or without an overlay for higher contrast.", 
                "Consider the scale of the the image. The deeper focus will be more appreciated at larger sizes.", 
                "Define the image focus in the center if possible. Use the <a href=\"#\">background position</a> technique"],
    DetailDont: [ "Using this image at smaller sizes as the deep focus will be less effective.", 
                  "Display using 'contain or fit' sizing.", 
                  ""],

    examples: "assets/image-full.png"
  }
];



const DataImageTransparent = [
  {
    hero: "assets/image-full.png",
    type: "image",
    name: "Float",
    icon: "image",
    description: "Any image with the contents extending to all edges of the frame.",

    DetailDo: [ "Display using 'Fit' or 'contain' to ensure the entire image is visible.", 
                "", 
                ""],
    DetailDont: [ "", 
                  "", 
                  ""],
  },
  {
    hero: "assets/image-full.png",
    type: "image",
    name: "Bleeds 1 Edge",
    icon: "image",
    description: "An image with a clear single point of focus",

    DetailDo: [ "Display using 'Fit' or 'contain' to ensure the entire image is visible.", 
                "Define the image focus area to align wiht the bleeding edge. Use the <a href=\"#\">background position.</a> technique.", 
                "Allowing the parent wrapper to have a visible overflow to prevent clipping, althought this can cause layout overlap & should be managed carefully."],
    DetailDont: [ "", 
                  "", 
                  ""],
  },
  {
    hero: "assets/image-full.png",
    type: "image",
    name: "Bleeds 2 Connected Edges",
    icon: "image",
    description: "An image with multiple points of focus.",

    DetailDo: [ "Display using the 'cover' or 'fill' background size.", 
                "Define the image focus area to align wiht the bleeding edge. Use the <a href=\"#\">background position.</a>", 
                "Aligning the bleed alignment witht the overall layout. e.g. if the image bleeds bottom left, place the image on the left of the layout."],
    DetailDont: [ "", 
                  "", 
                  ""],
  },
  {
    hero: "assets/image-full.png",
    type: "image",
    name: "Bleeds 2 Opposed Edges",
    icon: "image",
    description: "A close us image of a texture or surface.",

    DetailDo: [ "", 
                "", 
                ""],
    DetailDont: [ "", 
                  "", 
                  ""],
  },
  {
    hero: "assets/image-full.png",
    type: "image",
    name: "Bleeds 3 Edges",
    icon: "image",
    description: "An image with a deep & often multi point focus.",

    DetailDo: [ "Display using 'cover' or 'Fill' background size."],
    DetailDont: [ "", 
                  "", 
                  ""],
  }
];



const DataImageColour = [
  {
    hero: "assets/image-full.png",
    type: "image",
    name: "Full Colour",
    icon: "image",
    description: "Any image with the contents extending to all edges of the frame.",

    DetailDo: [ "Making this a hero asset & the main focus. Full colour assets are harder to layer with other elements.", 
                "Using the image repeated in the backgroudn with a heavy blur to provide a harmonious colour & contrast for content.", 
                ""],
    DetailDont: [ "Layer this image with text or smaller graphics, because it's full colour, it may not reliably have good contrast.", 
                  "", 
                  ""],
  },
  {
    hero: "assets/image-full.png",
    type: "image",
    name: "Black & White",
    icon: "image",
    description: "An image with a clear single point of focus",

    DetailDo: [ "Displaying this as a background for text and smaller graphics. Adding a black or white overlay can make it contrast reliably.", 
                "Consider using a coloured overlay to customise the images colour. Blend modes paired with opacity can inhance this effect.", 
                "Mainting a monotone or duotone colour theme, this will compliment the image best.",
                "Using this image as a watermark, placed lightly in the background."],
    DetailDont: [ "Mix with a multi coloured theme, the black and white will look out of place.", 
                  "", 
                  ""],
  },
  {
    hero: "assets/image-full.png",
    type: "image",
    name: "Desaturated",
    icon: "image",
    description: "An image with multiple points of focus.",

    DetailDo: [ "", 
                "", 
                ""],
    DetailDont: [ "", 
                  "", 
                  ""],
  },
  {
    hero: "assets/image-full.png",
    type: "image",
    name: "2 Colour - Monochromatic",
    icon: "image",
    description: "A close us image of a texture or surface.",
  
    DetailDo: [ "Matching the a colour in the palette with one of the image colours & fading the content & image together", 
                "If the two colours are distinct, layer these with white or black contrasting text or smaller graphics.", 
                ""],
    DetailDont: [ "Mismatching between the UI theme & the images colours.", 
                  "", 
                  ""],
  },
  {
    hero: "assets/image-full.png",
    type: "image",
    name: "3 Colours - Triadic",
    icon: "image",
    description: "An image with a deep & often multi point focus.",

    DetailDo: [ "", 
                "", 
                ""],
    DetailDont: [ "", 
                  "", 
                  ""],
  },
  {
    hero: "assets/image-full.png",
    type: "image",
    name: "4 Colours - Quadradic",
    icon: "image",
    description: "An image with a deep & often multi point focus.",

    DetailDo: [ "", 
                "", 
                ""],
    DetailDont: [ "", 
                  "", 
                  ""],
  }
];



const DataColours = [
  {
      hero: "assets/image-full.png",
      type: "colour",
      name: "Monochromtic",
      icon: "droplet",
      description: "Any image with the contents extending to all edges of the frame.",

      DetailDo: [ "", 
                  "", 
                  ""],
      DetailDont: [ "", 
                    "", 
                    ""],
    },
    {
      hero: "assets/image-full.png",
      type: "colour",
      name: "Duotone",
      icon: "droplet",
      description: "An image with a clear single point of focus",

      DetailDo: [ "", 
                  "", 
                  ""],
      DetailDont: [ "", 
                    "", 
                    ""],
    },
    {
      hero: "assets/image-full.png",
      type: "colour",
      name: "Triadic",
      icon: "droplet",
      description: "An image with a clear single point of focus",

      DetailDo: [ "", 
                  "", 
                  ""],
      DetailDont: [ "", 
                    "", 
                    ""],
    },
    {
      hero: "assets/image-full.png",
      type: "colour",
      name: "Duotone",
      icon: "droplet",
      description: "An image with a clear single point of focus",

      DetailDo: [ "", 
                  "", 
                  ""],
      DetailDont: [ "", 
                    "", 
                    ""],
    }
  ];
  


  

const DataLogoAspect = [
  {
      hero: "assets/image-full.png",
      type: "image",
      name: "Square",
      icon: "zap",
      description: "Any image with the contents extending to all edges of the frame.",

      DetailDo: [ "", 
                  "", 
                  ""],
      DetailDont: [ "", 
                    "", 
                    ""],
    },
    {
      hero: "assets/image-full.png",
      type: "image",
      name: "Average Landscape",
      icon: "zap",
      description: "An image with a clear single point of focus",

      DetailDo: [ "", 
                  "", 
                  ""],
      DetailDont: [ "", 
                    "", 
                    ""],
    },
    {
      hero: "assets/image-full.png",
      type: "image",
      name: "Extreme Landscape",
      icon: "zap",
      description: "An image with a clear single point of focus",

      DetailDo: [ "", 
                  "", 
                  ""],
      DetailDont: [ "", 
                    "", 
                    ""],
    },
    {
      hero: "assets/image-full.png",
      type: "image",
      name: "Average Portrait",
      icon: "zap",
      description: "An image with a clear single point of focus",

      DetailDo: [ "", 
                  "", 
                  ""],
      DetailDont: [ "", 
                    "", 
                    ""],
    },
    {
      hero: "assets/image-full.png",
      type: "image",
      name: "Extreme Portrait",
      icon: "zap",
      description: "An image with a clear single point of focus",

      DetailDo: [ "", 
                  "", 
                  ""],
      DetailDont: [ "", 
                    "", 
                    ""],
    },
  ];
  

const DataLogoDetail = [
  {
      hero: "assets/image-full.png",
      type: "image",
      name: "Low Detail",
      icon: "zap",
      description: "Any image with the contents extending to all edges of the frame.",
      
      DetailDo: [ "", 
                  "", 
                  ""],
      DetailDont: [ "", 
                    "", 
                    ""],
    },
    {
      hero: "assets/image-full.png",
      type: "image",
      name: "Medium Detail",
      icon: "zap",
      description: "An image with a clear single point of focus",

      DetailDo: [ "", 
                  "", 
                  ""],
      DetailDont: [ "", 
                    "", 
                    ""],
    },
    {
      hero: "assets/image-full.png",
      type: "image",
      name: "High Detail",
      icon: "zap",
      description: "An image with a clear single point of focus",

      DetailDo: [ "", 
                  "", 
                  ""],
      DetailDont: [ "", 
                    "", 
                    ""],
    },
  ];
    
  
const DataType = [
  {
      hero: "assets/image-full.png",
      type: "type",
      name: "Display",
      icon: "type",
      description: "Any image with the contents extending to all edges of the frame.",

      DetailDo: [ "", 
                  "", 
                  ""],
      DetailDont: [ "", 
                    "", 
                    ""],
    },
    {
      hero: "assets/image-full.png",
      type: "type",
      name: "Serif",
      icon: "type",
      description: "An image with a clear single point of focus",

      DetailDo: [ "", 
                  "", 
                  ""],
      DetailDont: [ "", 
                    "", 
                    ""],
    },
    {
    hero: "assets/image-full.png",
    type: "type",
    name: "Sans Serif",
    icon: "type",
    description: "Any image with the contents extending to all edges of the frame.",

      DetailDo: [ "", 
                  "", 
                  ""],
      DetailDont: [ "", 
                    "", 
                    ""],
    },
    {
    hero: "assets/image-full.png",
    type: "type",
    name: "Monospace",
    icon: "type",
    description: "Any image with the contents extending to all edges of the frame.",

      DetailDo: [ "", 
                  "", 
                  ""],
      DetailDont: [ "", 
                    "", 
                    ""],
    },
    {
      hero: "assets/image-full.png",
      type: "type",
      name: "Handwritten",
      icon: "type",
      description: "Any image with the contents extending to all edges of the frame.",

      DetailDo: [ "", 
                  "", 
                  ""],
      DetailDont: [ "", 
                    "", 
                    ""],
      },
  ];
  