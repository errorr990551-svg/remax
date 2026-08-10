import React, { useState } from 'react';
import { Download, FileText, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import TrustBar from '../../components/common/TrustBar.jsx';

const PipeDimensions = () => {
  const [search, setSearch] = useState('');

  const pipeData = [
    { nps: '1/8"', odMm: 10.3, odInch: 0.405, sch10: 1.24, sch40: 1.73, sch80: 2.41, sch160: '—', xxs: '—' },
    { nps: '1/4"', odMm: 13.7, odInch: 0.540, sch10: 1.65, sch40: 2.24, sch80: 3.02, sch160: '—', xxs: '—' },
    { nps: '3/8"', odMm: 17.1, odInch: 0.675, sch10: 1.65, sch40: 2.31, sch80: 3.20, sch160: '—', xxs: '—' },
    { nps: '1/2"', odMm: 21.3, odInch: 0.840, sch10: 2.11, sch40: 2.77, sch80: 3.73, sch160: 4.78, xxs: 7.47 },
    { nps: '3/4"', odMm: 26.7, odInch: 1.050, sch10: 2.11, sch40: 2.87, sch80: 3.91, sch160: 5.56, xxs: 7.82 },
    { nps: '1"', odMm: 33.4, odInch: 1.315, sch10: 2.77, sch40: 3.38, sch80: 4.55, sch160: 6.35, xxs: 9.09 },
    { nps: '1-1/4"', odMm: 42.2, odInch: 1.660, sch10: 2.77, sch40: 3.56, sch80: 4.85, sch160: 6.35, xxs: 9.70 },
    { nps: '1-1/2"', odMm: 48.3, odInch: 1.900, sch10: 2.77, sch40: 3.68, sch80: 5.08, sch160: 7.14, xxs: 10.15 },
    { nps: '2"', odMm: 60.3, odInch: 2.375, sch10: 2.77, sch40: 3.91, sch80: 5.54, sch160: 8.74, xxs: 11.07 },
    { nps: '2-1/2"', odMm: 73.0, odInch: 2.875, sch10: 3.05, sch40: 5.16, sch80: 7.01, sch160: 9.53, xxs: 14.02 },
    { nps: '3"', odMm: 88.9, odInch: 3.500, sch10: 3.05, sch40: 5.49, sch80: 7.62, sch160: 11.13, xxs: 15.24 },
    { nps: '4"', odMm: 114.3, odInch: 4.500, sch10: 3.05, sch40: 6.02, sch80: 8.56, sch160: 13.49, xxs: 17.12 },
    { nps: '6"', odMm: 168.3, odInch: 6.625, sch10: 3.40, sch40: 7.11, sch80: 10.97, sch160: 18.26, xxs: 21.95 },
    { nps: '8"', odMm: 219.1, odInch: 8.625, sch10: 3.76, sch40: 8.18, sch80: 12.70, sch160: 22.23, xxs: 22.23 },
    { nps: '10"', odMm: 273.1, odInch: 10.750, sch10: 4.19, sch40: 9.27, sch80: 15.09, sch160: 28.58, xxs: 25.40 },
    { nps: '12"', odMm: 323.8, odInch: 12.750, sch10: 4.57, sch40: 10.31, sch80: 17.48, sch160: 33.32, xxs: 25.40 },
    { nps: '14"', odMm: 355.6, odInch: 14.000, sch10: 6.35, sch40: 11.13, sch80: 19.05, sch160: 35.71, xxs: '—' },
    { nps: '16"', odMm: 406.4, odInch: 16.000, sch10: 6.35, sch40: 12.70, sch80: 21.44, sch160: 40.49, xxs: '—' },
    { nps: '18"', odMm: 457.0, odInch: 18.000, sch10: 6.35, sch40: 14.27, sch80: 23.83, sch160: 45.24, xxs: '—' },
    { nps: '24"', odMm: 610.0, odInch: 24.000, sch10: 6.35, sch40: 17.48, sch80: 30.96, sch160: 59.54, xxs: '—' }
  ];

  const filtered = pipeData.filter(row => row.nps.toLowerCase().includes(search.toLowerCase()) || row.odMm.toString().includes(search));

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-16 px-4 font-sans text-slate-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-200 mb-8">
          <span className="text-[#D71920] font-bold text-xs uppercase tracking-widest block mb-2">
            ASME B36.10M / B36.19M Specification
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
            Steel Pipe Dimensions & Schedule Wall Thickness Chart
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            Comprehensive reference chart for Nominal Pipe Size (NPS 1/8" to 24"), Outer Diameter (OD in mm & inches), and nominal wall thickness across Schedule 10, Sch 40/STD, Sch 80/XH, Sch 160, and XXS.
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="relative w-full max-w-xs">
              <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
              <input
                type="text"
                placeholder="Filter by NPS size (e.g. 2 in, 4 in, 8 in)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs border border-slate-300 rounded-xl outline-none focus:border-[#D71920]"
              />
            </div>

            <Link
              to="/brochure/"
              className="bg-[#D71920] hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-md flex items-center gap-2"
            >
              <Download className="w-4 h-4" /> Download Complete Dimension PDF
            </Link>
          </div>
        </div>

        <TrustBar className="mb-8" />

        {/* Data Table */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#0F172A] text-white">
                  <th className="p-4 font-bold">NPS Size</th>
                  <th className="p-4 font-bold">Outside Dia (mm)</th>
                  <th className="p-4 font-bold">Outside Dia (inch)</th>
                  <th className="p-4 font-bold">Sch 10 (mm)</th>
                  <th className="p-4 font-bold bg-red-950/40 text-red-300">Sch 40 / STD (mm)</th>
                  <th className="p-4 font-bold bg-slate-800 text-slate-200">Sch 80 / XH (mm)</th>
                  <th className="p-4 font-bold">Sch 160 (mm)</th>
                  <th className="p-4 font-bold">XXS (mm)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {filtered.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                    <td className="p-4 font-bold text-slate-900">{row.nps}</td>
                    <td className="p-4">{row.odMm} mm</td>
                    <td className="p-4">{row.odInch}"</td>
                    <td className="p-4">{row.sch10}</td>
                    <td className="p-4 font-bold text-[#D71920] bg-red-50/30">{row.sch40}</td>
                    <td className="p-4 font-bold text-slate-900 bg-slate-100/50">{row.sch80}</td>
                    <td className="p-4">{row.sch160}</td>
                    <td className="p-4">{row.xxs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-white p-8 rounded-3xl border border-slate-200 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Looking for Flange Dimension Charts?</h3>
          <p className="text-xs text-slate-500 mb-4">
            View ASME B16.5 and B16.47 flange bolt circle, raised face, and hub dimensions.
          </p>
          <Link
            to="/tech-info/dimensions/"
            className="inline-flex items-center gap-2 text-[#D71920] font-bold text-xs uppercase tracking-wider hover:underline"
          >
            Switch to Flange Dimension Charts <FileText className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default PipeDimensions;
