

const DataImageFull = [
  {
    hero: "assets/image-full.png",
    type: "image",
    icon: "image",
    name: "Full Image",
    description: "Any image with the contents filling all areas of the frame.",
      DetailDo: [   "Display using fill or cover.", 
                    "Define the image focus area is possible. Use the <a href=\"#\">background position</a> technique.", 
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
                  "Consider fading the image & content background to draw more attention to the point of focus."],
    DetailDont: [ "Child Tag A", 
                  "Child Tag B", 
                  "Child Tag C"],

    examples: "assets/image-full.png"
  },
  {
    hero: "assets/image-full.png",
    type: "image",
    name: "Multi Point Focus",
    icon: "image",
    description: "An image with multiple points of focus.",

    DetailDo: ["Child Tag A", "Child Tag B", "Child Tag C"],
    DetailDont: ["Child Tag A", "Child Tag B", "Child Tag C"],

    examples: "assets/image-full.png"
  },
  {
    hero: "assets/image-full.png",
    type: "image",
    name: "Texture",
    icon: "image",
    description: "A close us image of a texture or surface.",

    DetailDo: ["Multi Point", "Child Tag B", "Child Tag C"],
    DetailDont: ["Child Tag A", "Child Tag B", "Child Tag C"],

    examples: "assets/image-full.png"
  },
  {
    hero: "assets/image-full.png",
    type: "image",
    name: "Deep Focus",
    icon: "image",
    description: "An image with a deep & often multi point focus.",

    DetailDo: ["Multi Point", "Child Tag B", "Child Tag C"],
    DetailDont: ["Child Tag A", "Child Tag B", "Child Tag C"],

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
  },
  {
    hero: "assets/image-full.png",
    type: "image",
    name: "Bleeds 1 Edge",
    icon: "image",
    description: "An image with a clear single point of focus",
  },
  {
    hero: "assets/image-full.png",
    type: "image",
    name: "Bleeds 2 Connected Edges",
    icon: "image",
    description: "An image with multiple points of focus.",
  },
  {
    hero: "assets/image-full.png",
    type: "image",
    name: "Bleeds 2 Opposed Edges",
    icon: "image",
    description: "A close us image of a texture or surface.",
  },
  {
    hero: "assets/image-full.png",
    type: "image",
    name: "Bleeds 3 Edges",
    icon: "image",
    description: "An image with a deep & often multi point focus.",
  }
];



const DataImageColour = [
  {
    hero: "assets/image-full.png",
    type: "image",
    name: "Full Colour",
    icon: "image",
    description: "Any image with the contents extending to all edges of the frame.",
  },
  {
    hero: "assets/image-full.png",
    type: "image",
    name: "Black & White",
    icon: "image",
    description: "An image with a clear single point of focus",
  },
  {
    hero: "assets/image-full.png",
    type: "image",
    name: "Desaturated",
    icon: "image",
    description: "An image with multiple points of focus.",
  },
  {
    hero: "assets/image-full.png",
    type: "image",
    name: "2 Colour - Monochromatic",
    icon: "image",
    description: "A close us image of a texture or surface.",
  },
  {
    hero: "assets/image-full.png",
    type: "image",
    name: "3 Colours - Triadic",
    icon: "image",
    description: "An image with a deep & often multi point focus.",
  },
  {
    hero: "assets/image-full.png",
    type: "image",
    name: "4 Colours - Quadradic",
    icon: "image",
    description: "An image with a deep & often multi point focus.",
  }
];



const DataColours = [
  {
      hero: "assets/image-full.png",
      type: "colour",
      name: "Monochromtic",
      icon: "droplet",
      description: "Any image with the contents extending to all edges of the frame.",
    },
    {
      hero: "assets/image-full.png",
      type: "colour",
      name: "Duotone",
      icon: "droplet",
      description: "An image with a clear single point of focus",
    },
    {
      hero: "assets/image-full.png",
      type: "colour",
      name: "Triadic",
      icon: "droplet",
      description: "An image with a clear single point of focus",
    },
    {
      hero: "assets/image-full.png",
      type: "colour",
      name: "Duotone",
      icon: "droplet",
      description: "An image with a clear single point of focus",
    }
  ];
  


  

const DataLogoAspect = [
  {
      hero: "assets/image-full.png",
      type: "image",
      name: "Square",
      icon: "zap",
      description: "Any image with the contents extending to all edges of the frame.",
    },
    {
      hero: "assets/image-full.png",
      type: "image",
      name: "Average Landscape",
      icon: "zap",
      description: "An image with a clear single point of focus",
    },
    {
      hero: "assets/image-full.png",
      type: "image",
      name: "Extreme Landscape",
      icon: "zap",
      description: "An image with a clear single point of focus",
    },
    {
      hero: "assets/image-full.png",
      type: "image",
      name: "Average Portrait",
      icon: "zap",
      description: "An image with a clear single point of focus",
    },
    {
      hero: "assets/image-full.png",
      type: "image",
      name: "Extreme Portrait",
      icon: "zap",
      description: "An image with a clear single point of focus",
    },
  ];
  

  const DataLogoDetail = [
    {
        hero: "assets/image-full.png",
        type: "image",
        name: "Low Detail",
        icon: "zap",
        description: "Any image with the contents extending to all edges of the frame.",
      },
      {
        hero: "assets/image-full.png",
        type: "image",
        name: "Medium Detail",
        icon: "zap",
        description: "An image with a clear single point of focus",
      },
      {
        hero: "assets/image-full.png",
        type: "image",
        name: "High Detail",
        icon: "zap",
        description: "An image with a clear single point of focus",
      },
    ];
    
  
const DataType = [
  {
      hero: "assets/image-full.png",
      type: "type",
      name: "Display",
      icon: "type",
      description: "Any image with the contents extending to all edges of the frame.",
    },
    {
      hero: "assets/image-full.png",
      type: "type",
      name: "Serif",
      icon: "type",
      description: "An image with a clear single point of focus",
    },
    {
    hero: "assets/image-full.png",
    type: "type",
    name: "Sans Serif",
    icon: "type",
    description: "Any image with the contents extending to all edges of the frame.",
    },
    {
    hero: "assets/image-full.png",
    type: "type",
    name: "Monospace",
    icon: "type",
    description: "Any image with the contents extending to all edges of the frame.",
    },
    {
      hero: "assets/image-full.png",
      type: "type",
      name: "Handwritten",
      icon: "type",
      description: "Any image with the contents extending to all edges of the frame.",
      },
  ];
  