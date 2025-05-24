
export const kitchenDesigns = [
  {
    title: "Contemporary Kitchen with Artistic Elements",
    image: "/lovable-uploads/209fa91f-67f6-49b6-84ec-7a6fb826fc56.png",
    description: "Modern kitchen with decorative wall art and sleek design elements"
  },
  {
    title: "Modern L-shaped Kitchen with Premium Finishes",
    image: "/lovable-uploads/277de05e-7d10-4315-a3bc-bd37be4f14b8.png",
    description: "Elegant L-shaped kitchen with wood finish and contemporary lighting"
  },
  {
    title: "Colorful Modular Kitchen Design",
    image: "/lovable-uploads/64b70b14-b9b1-420c-891a-6d06a398b333.png",
    description: "Vibrant blue kitchen with modern appliances and efficient storage"
  }
];

export const serviceCategories = [
  {
    id: "kitchen",
    title: "Kitchen",
    description: "Beautiful and functional kitchen designs that maximize your space",
    items: [
      "Modern modular kitchens",
      "Custom storage solutions",
      "Premium countertops",
      "Efficient layouts",
      "High-quality cabinets"
    ],
    images: kitchenDesigns.map(design => design.image)
  },
  {
    id: "turnkey",
    title: "Turnkey Projects",
    description: "Complete end-to-end interior solutions for your entire home",
    items: [
      "Full home interiors",
      "Project management",
      "Material procurement",
      "Quality control",
      "Timely delivery"
    ],
    images: []
  },
  {
    id: "furniture",
    title: "Furniture",
    description: "Custom-made furniture crafted to your specifications",
    items: [
      "Wardrobes & storage",
      "Beds & side tables",
      "TV units & entertainment",
      "Study & office furniture",
      "Custom seating"
    ],
    images: []
  },
  {
    id: "ceiling",
    title: "Ceiling",
    description: "Creative ceiling designs that transform your space",
    items: [
      "False ceiling designs",
      "Cove lighting solutions",
      "POP designs",
      "Wooden ceiling",
      "Accent lighting"
    ],
    images: []
  },
  {
    id: "electrical",
    title: "Electrical",
    description: "Complete electrical solutions for your home",
    items: [
      "Smart home wiring",
      "Lighting design",
      "Outlet planning",
      "Safety features",
      "Energy efficiency"
    ],
    images: []
  },
  {
    id: "colour",
    title: "Colour & Paint",
    description: "Elevate your spaces with perfect color combinations",
    items: [
      "Color consultations",
      "Texture painting",
      "Wallpaper solutions",
      "Specialty finishes",
      "Eco-friendly options"
    ],
    images: []
  },
  {
    id: "glass",
    title: "Glass Work",
    description: "Elegant glass solutions for modern interiors",
    items: [
      "Shower enclosures",
      "Glass partitions",
      "Mirror designs",
      "Glass railings",
      "Decorative glass"
    ],
    images: []
  },
  {
    id: "civil",
    title: "Civil Work",
    description: "Structural modifications and enhancements for your space",
    items: [
      "Wall modifications",
      "Flooring solutions",
      "Bathroom renovations",
      "Plumbing work",
      "Foundation repairs"
    ],
    images: []
  }
];
