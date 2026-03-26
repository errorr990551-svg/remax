import React from 'react';
import { Home, ChevronRight, Calculator, RefreshCw } from 'lucide-react';

const WeightChart = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20 font-sans">
      {/* Breadcrumb Header */}
      <div className="bg-[#0F172A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <a href="/" className="hover:text-[#D71920] transition-colors"><Home size={14} /></a>
            <ChevronRight size={14} />
            <span className="text-slate-400">Tech Info</span>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium">Weight Chart</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Weight Chart & Formulas</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Intro Text */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 mb-10">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-4 flex items-center gap-2">
            <Calculator className="text-[#D71920]" /> Introduction
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            The weight chart provides standard calculation formulas to determine the theoretical weight of various metal products used in industrial and engineering applications. It covers stainless steel, carbon steel, copper, lead, and aluminium in different forms such as pipes, tubes, sheets, plates, circles, blanks, rounds, hexagonal rods, and square bars.
          </p>
          <p className="text-slate-600 leading-relaxed">
            These formulas are based on material density and dimensional parameters like outside diameter, wall thickness, length, width, and thickness, enabling quick and accurate estimation of weight per meter or per sheet. In addition, the chart includes a tensile strength conversion table to convert between Kg/mm², N/mm² (MPa), PSI, and KSI, helping engineers and fabricators ensure consistency across international material specifications and standards.
          </p>
        </div>

        {/* Formulas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
                { title: "Stainless Steel Pipes & Tubes", formula: "OD (mm) - W.T. (mm) x W.T. (mm) x 0.02466 = Kg per meter" },
                { title: "Sheet Width for Rolled & Welded Pipes", formula: "OD (mm) - THK (mm) x 3.14 = Sheet Width" },
                { title: "Stainless Steel Sheets", formula: "Length (mtr) x Width (mtr) x Thk (mm) x 8 = Kg per sheet" },
                { title: "Stainless Steel Circle & Blanks", formula: "OD (mm) x OD (mm) x Thk (mm) / 160 / 1000 = Kg per piece" },
                { title: "Stainless Steel Rounds", formula: "Dia (mm) x Dia (mm) x 0.00623 = Kg per meter" },
                { title: "Stainless Steel Hexagonal Rods", formula: "Dia (mm) x Dia (mm) x 0.00679 = Kg per meter" },
                { title: "Stainless Steel Square Bars", formula: "Dia (mm) x Dia (mm) x 0.00787 = Kg per meter" },
                { title: "Carbon Steel Pipes & Tubes", formula: "Dia (mm) - W.T. (mm) x W.T. (mm) x 0.02466 = Kg per meter" },
                { title: "Carbon Steel Sheets & Plates", formula: "Length (mtr) x Width (mtr) x Thk (mm) x 7.85 = Kg per sheet" },
                { title: "Copper Pipes", formula: "OD (mm) - W.T. (mm) x W.T. (mm) x 0.0256 = Kg per meter" },
                { title: "Lead Pipes (approx.)", formula: "OD (mm) - W.T. (mm) x W.T. (mm) x 0.0345 = Kg per meter" },
                { title: "Lead Sheets (approx.)", formula: "Length (mtr) x Width (mtr) x Thk (mm) x 11.2 = Kg per sheet" },
                { title: "Aluminium Pipes (approx.)", formula: "OD (mm) - W.T. (mm) x W.T. (mm) x 0.0082 = Kg per meter" },
                { title: "Aluminium Sheets (approx.)", formula: "Length (mtr) x Width (mtr) x Thk (mm) x 2.66 = Kg per sheet" }
            ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:border-[#D71920] transition-colors">
                    <h3 className="font-bold text-[#0F172A] mb-2">{item.title}</h3>
                    <div className="bg-slate-50 p-3 rounded text-slate-700 font-mono text-sm border border-slate-200">
                        {item.formula}
                    </div>
                </div>
            ))}
        </div>

        {/* Tensile Strength Conversion Table */}
        <div className="bg-[#0F172A] rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <RefreshCw className="text-[#D71920]" /> Tensile Strength Conversion Table
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/10">
                    <p className="text-sm text-slate-300 mb-1">Kg/mm² to MPa</p>
                    <p className="font-mono font-bold text-lg">Kg/mm² x 9.81 = N/mm² (MPa)</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/10">
                    <p className="text-sm text-slate-300 mb-1">PSI to Kg/mm²</p>
                    <p className="font-mono font-bold text-lg">PSI x 0.0007 = Kg/mm²</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/10">
                    <p className="text-sm text-slate-300 mb-1">KSI to PSI</p>
                    <p className="font-mono font-bold text-lg">KSI x 1000 = PSI</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/10">
                    <p className="text-sm text-slate-300 mb-1">Kg/mm² to KSI</p>
                    <p className="font-mono font-bold text-lg">Kg/mm² x 1.422 = KSI</p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default WeightChart;