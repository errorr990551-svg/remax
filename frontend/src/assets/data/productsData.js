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
      "Butt Weld Elbow Fittings", "180° Elbow", "90° Elbow", "45° Elbow",
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
  }
];
