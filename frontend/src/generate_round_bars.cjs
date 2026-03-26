const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'assets', 'pages', 'products', 'roundBar');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const products = [
  {
    name: 'Stainless Steel Bar',
    title: 'Stainless Steel Round Bar',
    component: 'StainlessSteelBar',
    features: [
      "Excellent corrosion resistance",
      "High strength and durability",
      "Suitable for industrial and structural applications"
    ],
    description: `REMAX FORGE & FITTINGS is a leading manufacturer and supplier of high-quality Stainless Steel Round Bars. These bars are manufactured using premium-grade stainless steel and advanced production technology to ensure superior strength, corrosion resistance, and long service life. Stainless Steel Round Bars are widely used in industries such as construction, marine, chemical processing, and engineering applications.

REMAX FORGE & FITTINGS supplies Stainless Steel Round Bars across the globe and maintains strict quality standards during manufacturing. Our bars are produced in compliance with international standards and are available in various sizes and grades to meet customer requirements. Custom specifications and finishes are also available based on client needs.`,
    specs: [
      { label: "Type", value: "Stainless Steel Round Bar" },
      { label: "Standard", value: "ASTM A276, ASTM A479, ASTM A182" },
      { label: "Material", value: "Stainless Steel" },
      { label: "Grades", value: "304, 304L, 316, 316L, 310, 321, 347, 904L" },
      { label: "Size", value: "3mm to 500mm Diameter" },
      { label: "Length", value: "3m – 6m or Custom" },
      { label: "Finish", value: "Black, Bright Polished, Rough Turned" },
      { label: "Form", value: "Round" }
    ]
  },
  {
    name: 'Carbon Steel Bar',
    title: 'Carbon Steel Round Bar',
    component: 'CarbonSteelBar',
    features: [
      "High tensile strength",
      "Excellent machinability",
      "Suitable for heavy-duty industrial use"
    ],
    description: `REMAX FORGE & FITTINGS offers premium quality Carbon Steel Round Bars designed for various industrial and engineering applications. These bars are manufactured using high-grade carbon steel to provide excellent strength, durability, and performance in demanding environments.

Carbon Steel Round Bars supplied by REMAX FORGE & FITTINGS are produced according to international quality standards. They are widely used in construction, automotive components, machinery parts, and structural applications. Our bars are available in multiple grades, sizes, and finishes to suit diverse industrial requirements.`,
    specs: [
      { label: "Type", value: "Carbon Steel Round Bar" },
      { label: "Standard", value: "ASTM A105, ASTM A36, ASTM A350" },
      { label: "Material", value: "Carbon Steel" },
      { label: "Grades", value: "A105, A350 LF2, A36" },
      { label: "Size", value: "6mm to 500mm Diameter" },
      { label: "Length", value: "3m – 6m or Custom" },
      { label: "Finish", value: "Black, Bright, Polished" },
      { label: "Form", value: "Round" }
    ]
  },
  {
    name: 'Alloy Steel Bar',
    title: 'Alloy Steel Round Bar',
    component: 'AlloySteelBar',
    features: [
      "High mechanical strength",
      "Superior heat resistance",
      "Suitable for high-temperature applications"
    ],
    description: `REMAX FORGE & FITTINGS manufactures and supplies high-performance Alloy Steel Round Bars used in demanding industrial environments. These bars are produced using advanced alloy steel compositions that provide improved strength, wear resistance, and thermal stability.

Alloy Steel Round Bars from REMAX FORGE & FITTINGS are widely used in power plants, oil and gas industries, automotive components, and heavy engineering sectors. They are manufactured according to international standards and are available in different grades and sizes to meet specific application requirements.`,
    specs: [
      { label: "Type", value: "Alloy Steel Round Bar" },
      { label: "Standard", value: "ASTM A182, ASTM A335" },
      { label: "Material", value: "Alloy Steel" },
      { label: "Grades", value: "F5, F9, F11, F22, F91" },
      { label: "Size", value: "6mm to 500mm Diameter" },
      { label: "Length", value: "3m – 6m or Custom" },
      { label: "Finish", value: "Black, Bright, Rough Turned" },
      { label: "Form", value: "Round" }
    ]
  },
  {
    name: 'Duplex Steel Bar',
    title: 'Duplex Steel Round Bar',
    component: 'DuplexSteelBar',
    features: [
      "High corrosion resistance",
      "Excellent strength and toughness",
      "Ideal for marine and chemical environments"
    ],
    description: `REMAX FORGE & FITTINGS supplies premium Duplex Steel Round Bars known for their excellent combination of strength and corrosion resistance. Duplex steel contains a balanced microstructure of austenite and ferrite, which enhances mechanical properties and resistance to stress corrosion cracking.

These bars are widely used in chemical processing, offshore platforms, desalination plants, and marine industries. REMAX FORGE & FITTINGS ensures that all Duplex Steel Round Bars meet international quality standards and are available in multiple sizes and grades.`,
    specs: [
      { label: "Type", value: "Duplex Steel Round Bar" },
      { label: "Standard", value: "ASTM A276, ASTM A479" },
      { label: "Material", value: "Duplex Stainless Steel" },
      { label: "Grades", value: "UNS S31803, S32205" },
      { label: "Size", value: "6mm to 500mm Diameter" },
      { label: "Length", value: "3m – 6m or Custom" },
      { label: "Finish", value: "Black, Bright Polished" },
      { label: "Form", value: "Round" }
    ]
  },
  {
    name: 'Nickel Alloy Bar',
    title: 'Nickel Alloy Round Bar',
    component: 'NickelAlloyBar',
    features: [
      "Excellent heat resistance",
      "Superior corrosion protection",
      "Suitable for extreme environments"
    ],
    description: `REMAX FORGE & FITTINGS manufactures high-quality Nickel Alloy Round Bars designed for applications requiring exceptional corrosion resistance and high-temperature strength. Nickel alloys are widely used in aerospace, marine, chemical processing, and power generation industries.

Nickel Alloy Round Bars offered by REMAX FORGE & FITTINGS are produced in accordance with international standards and undergo strict quality inspection. These bars are available in different grades, sizes, and finishes to meet specialized industrial requirements.`,
    specs: [
      { label: "Type", value: "Nickel Alloy Round Bar" },
      { label: "Standard", value: "ASTM B160, ASTM B164" },
      { label: "Material", value: "Nickel Alloy" },
      { label: "Grades", value: "Monel 400, Inconel 600, Inconel 625, Hastelloy C276" },
      { label: "Size", value: "6mm to 500mm Diameter" },
      { label: "Length", value: "3m – 6m or Custom" },
      { label: "Finish", value: "Black, Bright Polished" },
      { label: "Form", value: "Round" }
    ]
  }
];

const generateComponent = (p) => \`import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Home } from 'lucide-react';

const \${p.component} = () => {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'technical', label: 'Technical Specification' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20 font-sans">
      {/* Breadcrumb Header */}
      <div className="bg-[#0F172A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <a href="/" className="hover:text-[#D71920] transition-colors"><Home size={14} /></a>
            <ChevronRight size={14} />
            <a href="/products" className="hover:text-[#D71920] transition-colors">Products</a>
            <ChevronRight size={14} />
            <span className="text-slate-400">Round Bar</span>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium">\${p.title}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">\${p.title}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section: Image & Side Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          
          {/* Left Column: Image Placeholder */}
          <div className="rounded-lg overflow-hidden shadow-2xl border border-slate-200 bg-white h-[400px] flex items-center justify-center relative group">
             <img 
               src="https://images.unsplash.com/photo-1533613220915-609f661a6fe1?auto=format&fit=crop&q=80&w=800"
               alt="\${p.title}" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>

          {/* Right Column: Side Description */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Key Features</h2>
            <div className="space-y-6">\${p.features.map(f => \`
              <div className="flex gap-4">
                <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                  <CheckCircle2 size={24} className="text-[#D71920]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">\${f}</h3>
                </div>
              </div>\`).join('')}
            </div>
            
            <div className="mt-10 flex gap-4">
               <button className="px-8 py-3 rounded font-bold text-white bg-[#D71920] hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-2">
                 Request Quote <ArrowRight size={18} />
               </button>
            </div>
          </div>
        </div>

        {/* Bottom Section: Tabs & Content */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          {/* Tab Headers */}
          <div className="flex border-b border-slate-200 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={\`px-8 py-4 font-bold text-sm md:text-base whitespace-nowrap transition-colors relative \${
                  activeTab === tab.id 
                    ? 'text-[#D71920] bg-red-50/50' 
                    : 'text-slate-600 hover:text-[#0F172A] hover:bg-slate-50'
                }\`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[#D71920]"></span>
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8 md:p-12">
            
            {/* DESCRIPTION TAB */}
            {activeTab === 'description' && (
              <div className="space-y-6 text-slate-600 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-500">
                \${p.description.split('\\n\\n').map(para => \`<p>\${para}</p>\`).join('\\n                ')}
              </div>
            )}

            {/* TECHNICAL SPECIFICATION TAB */}
            {activeTab === 'technical' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left border-collapse">
                    <tbody>\${p.specs.map((row, idx) => \`
                      <tr className="border-b border-slate-200 \${${idx} % 2 === 0 ? 'bg-slate-50' : 'bg-white'}">
                        <td className="px-6 py-4 font-bold text-[#0F172A] w-1/3 align-top border-r border-slate-200">
                          \${row.label}
                        </td>
                        <td className="px-6 py-4 text-slate-600 align-top leading-relaxed">
                          \${row.value}
                        </td>
                      </tr>\`).join('')}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default \${p.component};
\`;

products.forEach(p => {
  fs.writeFileSync(path.join(dir, \`\${p.component}.jsx\`), generateComponent(p));
});

console.log('Generated all 5 products successfully.');
