// Slug Generator
export const createSlug = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export const productData = [
  {
    category: "Flanges",
    subcategories: [
      "Slip On Flange", "Weld Neck Flange", "Blind Flange", "Socket Weld Flange",
      "Threaded Flange", "Lap Joint Flange", "Long Weld Neck Flange", "Spectacle Blind Flange"
    ]
  },
  {
    category: "Buttweld Fittings",
    subcategories: [
      "Butt Weld Elbow Fittings", "180-Elbow", "90-Elbow", "45-Elbow",
      "Butt Weld Bends Fittings", "Butt Weld Tee Fittings", "Reducing Tee", "Straight Tee",
      "Butt Weld Reducers Fittings", "Concentric Reducer", "Eccentric Reducer", "Oval Caps"
    ]
  },
  {
    category: "Socket Weld Fittings",
    subcategories: [
      "Socket weld Coupling Fittings",
      "Socket weld Union Fittings",
      "Socket weld Elbow Fittings",
      "Socket weld Tee Fittings",
      "Socket weld Lateral Tee Fittings",
      "Socket weld Cross Fittings",
      "Socket weld Cap Fittings",
      "Socket weld Reducer Insert Fittings",
      "Socket weld Nipple Fittings",
      "Socket weld Bushing Fittings",
      "Socket weld Plug Fittings"
    ]
  },
  {
    category: "Pipes",
    subcategories: [
      "Stainless Steel Pipes",
      "Carbon Steel Pipes",
      "Alloy Steel Pipes",
      "Duplex Steel Superduplex Steel Pipe",
      "Nickel Pipe",
      "Hastelloy Pipes",
      "Incoloy Pipe",
      "Monel Pipe",
      "Titanium Pipe",
      "Tantalum Pipe",
      "Aluminium Pipe",
      "Mild Steel Pipes",
      "Copper Pipes",
      "Brass Pipes"
    ]
  },
  {
    category: "Tubes",
    subcategories: [
      "Stainless Steel Tubes",
      "Carbon Steel Tubes",
      "Alloy Steel Tube",
      "Duplex Steel Super Duplex Steel Tube",
      "Nickel Tube",
      "Hastelloy Tubes",
      "Incoloy Tubes",
      "Monel Tubes",
      "Titanium Tubes",
      "Tantalum Tubes",
      "Aluminium Tubes",
      "Copper Tube",
      "Brass Tube"
    ]
  },
  {
    category: "Plates",
    subcategories: [
      "Hardox Plate",
      "Corten Steel Plate",
      "Boiler Quality Plate",
      "Manganese Plate",
      "Nickel Alloy Plate",
      "Chrome Moly Plate",
      "Pressure Vessel Plate",
      "Stainless Steel Plate",
      "Carbon Steel Plate",
      "Offshore Steel Plate",
      "Quend Plate",
      "Quard Plate",
      "Aluminium Plate",
      "Chequered Plate"
    ]
  },
  {
    category: "Round Bar",
    subcategories: [
      "Stainless Steel Bar",
      "Carbon Steel Bar",
      "Alloy Steel Bar",
      "Duplex Steel Bar",
      "Nickel Alloy Bar"
    ]
  }
];
