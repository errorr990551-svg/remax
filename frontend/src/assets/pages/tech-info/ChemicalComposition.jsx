import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, FileText } from 'lucide-react';
import MetaTags from '../../components/common/MetaTags.jsx';
import usePageSchema, { faqSchema } from '../../components/common/usePageSchema.js';

const stainlessRows = [
  { g: '301', c: '0.15', mn: '2.00', p: '0.045', s: '0.030', si: '1.00', cr: '16.00 - 18.00', ni: '6.00 - 8.00', mo: '-', n: '0.10', other: '-' },
  { g: '304', c: '0.08', mn: '2.00', p: '0.045', s: '0.030', si: '0.75', cr: '18.00 - 20.00', ni: '8.00 - 10.50', mo: '-', n: '0.10', other: '-' },
  { g: '304L', c: '0.030', mn: '2.00', p: '0.045', s: '0.030', si: '0.75', cr: '18.00 - 20.00', ni: '8.00 - 12.00', mo: '-', n: '0.10', other: '-' },
  { g: '310S', c: '0.08', mn: '2.00', p: '0.045', s: '0.030', si: '1.50', cr: '24.00 - 26.00', ni: '19.00 - 22.00', mo: '-', n: '-', other: '-' },
  { g: '316', c: '0.08', mn: '2.00', p: '0.045', s: '0.030', si: '0.75', cr: '16.00 - 18.00', ni: '10.00 - 14.00', mo: '2.00 - 3.00', n: '0.10', other: '-' },
  { g: '316L', c: '0.030', mn: '2.00', p: '0.045', s: '0.030', si: '0.75', cr: '16.00 - 18.00', ni: '10.00 - 14.00', mo: '2.00 - 3.00', n: '0.10', other: '-' },
  { g: '317', c: '0.08', mn: '2.00', p: '0.045', s: '0.030', si: '0.75', cr: '18.00 - 20.00', ni: '11.00 - 14.00', mo: '3.00 - 4.00', n: '0.10', other: '-' },
  { g: '317L', c: '0.030', mn: '2.00', p: '0.045', s: '0.030', si: '0.75', cr: '18.00 - 20.00', ni: '11.00 - 15.00', mo: '3.00 - 4.00', n: '0.10', other: '-' },
  { g: '321', c: '0.08', mn: '2.00', p: '0.045', s: '0.030', si: '0.75', cr: '17.00 - 19.00', ni: '9.00 - 12.00', mo: '-', n: '0.10', other: 'Ti 5×(C+N) min, 0.70 max' },
  { g: '347', c: '0.08', mn: '2.00', p: '0.045', s: '0.030', si: '0.75', cr: '17.00 - 19.00', ni: '9.00 - 13.00', mo: '-', n: '-', other: 'Cb (Nb) 10×C min, 1.00 max' },
  { g: '409', c: '0.08', mn: '1.00', p: '0.040', s: '0.010', si: '1.00', cr: '10.50 - 11.75', ni: '0.50', mo: '-', n: '-', other: 'Ti 6×(C+N) min, 0.70 max' },
  { g: '409M', c: '0.03', mn: '0.80 - 1.20', p: '0.030', s: '0.030', si: '0.40 - 0.75', cr: '11.00 - 12.00', ni: '1.50', mo: '-', n: '-', other: 'Ti 6×C min, 0.70 max' },
  { g: '410S', c: '0.08', mn: '1.00', p: '0.040', s: '0.030', si: '1.00', cr: '11.50 - 13.50', ni: '0.60', mo: '-', n: '-', other: '-' },
  { g: '410', c: '0.15', mn: '1.00', p: '0.040', s: '0.030', si: '1.00', cr: '11.50 - 13.50', ni: '0.75', mo: '-', n: '-', other: '-' },
  { g: '420', c: '0.35', mn: '0.50', p: '0.035', s: '0.015', si: '0.50', cr: '12.00 - 13.00', ni: '0.20 - 0.30', mo: '-', n: '-', other: '-' },
  { g: '430', c: '0.12', mn: '1.00', p: '0.040', s: '0.030', si: '1.00', cr: '16.00 - 18.00', ni: '0.75', mo: '-', n: '-', other: '-' },
  { g: 'JSL AUS', c: '0.08', mn: '7.00 - 8.00', p: '0.070', s: '0.030', si: '0.75', cr: '15.50 - 16.50', ni: '4.25 - 4.75', mo: '-', n: '-', other: 'Cu 0.90 - 1.10' },
  { g: 'JS 203', c: '0.08', mn: '9.25 - 10.25', p: '0.070', s: '0.030', si: '0.75', cr: '14.25 - 15.25', ni: '2.25 - 2.75', mo: '-', n: '-', other: 'Cu 1.60 - 2.00' },
  { g: '301M', c: '0.10', mn: '4.50 - 5.50', p: '0.060', s: '0.030', si: '0.75', cr: '14.50 - 15.50', ni: '6.00 - 7.00', mo: '-', n: '-', other: 'Cu 1.70 - 1.90' },
];

const duplexRows = [
  { g: 'F51 (2205)', uns: 'S31803', c: '0.030', mn: '2.00', p: '0.030', s: '0.020', si: '1.00', cr: '21.0 - 23.0', ni: '4.5 - 6.5', mo: '2.5 - 3.5', n: '0.08 - 0.20', other: '-', pren: '30.5' },
  { g: 'F60 (2205)', uns: 'S32205', c: '0.030', mn: '2.00', p: '0.030', s: '0.020', si: '1.00', cr: '22.0 - 23.0', ni: '4.5 - 6.5', mo: '3.0 - 3.5', n: '0.14 - 0.20', other: '-', pren: '34.1' },
  { g: 'F53 (2507)', uns: 'S32750', c: '0.030', mn: '1.20', p: '0.035', s: '0.020', si: '0.80', cr: '24.0 - 26.0', ni: '6.0 - 8.0', mo: '3.0 - 5.0', n: '0.24 - 0.32', other: 'Cu 0.50', pren: '37.7' },
  { g: 'F55 (Zeron 100)', uns: 'S32760', c: '0.030', mn: '1.00', p: '0.030', s: '0.010', si: '1.00', cr: '24.0 - 26.0', ni: '6.0 - 8.0', mo: '3.0 - 4.0', n: '0.20 - 0.30', other: 'Cu 0.50 - 1.00, W 0.50 - 1.00', pren: '37.1' },
];

const carbonRows = [
  { g: 'A105', spec: 'ASTM A105 forgings', c: '0.35', mn: '0.60 - 1.05', p: '0.035', s: '0.040', si: '0.10 - 0.35', other: 'Cu 0.40, Ni 0.40, Cr 0.30, Mo 0.12, V 0.08 max' },
  { g: 'A350 LF2', spec: 'ASTM A350 low-temperature forgings', c: '0.30', mn: '0.60 - 1.35', p: '0.035', s: '0.040', si: '0.15 - 0.30', other: 'Ni 0.40, Cr 0.30, Mo 0.12, Cu 0.40, V 0.08, Nb 0.02 max' },
  { g: 'A234 WPB', spec: 'ASTM A234 butt weld fittings', c: '0.30', mn: '0.29 - 1.06', p: '0.050', s: '0.058', si: '0.10 min', other: 'Cr 0.40, Mo 0.15, Ni 0.40, Cu 0.40, V 0.08 max' },
];

const alloyRows = [
  { g: 'F5', uns: 'K41545', c: '0.15', mn: '0.30 - 0.60', p: '0.030', s: '0.030', si: '0.50', cr: '4.0 - 6.0', mo: '0.44 - 0.65', other: 'Ni 0.50' },
  { g: 'F9', uns: 'K90941', c: '0.15', mn: '0.30 - 0.60', p: '0.030', s: '0.030', si: '0.50 - 1.00', cr: '8.0 - 10.0', mo: '0.90 - 1.10', other: '-' },
  { g: 'F11 Cl.2', uns: 'K11572', c: '0.10 - 0.20', mn: '0.30 - 0.80', p: '0.040', s: '0.040', si: '0.50 - 1.00', cr: '1.00 - 1.50', mo: '0.44 - 0.65', other: '-' },
  { g: 'F22 Cl.3', uns: 'K21590', c: '0.05 - 0.15', mn: '0.30 - 0.60', p: '0.040', s: '0.040', si: '0.50', cr: '2.00 - 2.50', mo: '0.87 - 1.13', other: '-' },
  { g: 'F91 Type 1', uns: 'K90901', c: '0.08 - 0.12', mn: '0.30 - 0.60', p: '0.020', s: '0.010', si: '0.20 - 0.50', cr: '8.0 - 9.5', mo: '0.85 - 1.05', other: 'V 0.18 - 0.25, Nb 0.06 - 0.10, N 0.03 - 0.07, Ni 0.40, Al 0.02' },
];

const elements = [
  { el: 'C', name: 'Carbon', role: 'Raises strength and hardness. In stainless steel, high carbon forms chromium carbides during welding, which causes intergranular corrosion. That is why L grades (C ≤ 0.030%) are used for welded parts.' },
  { el: 'Cr', name: 'Chromium', role: 'Forms the passive oxide film that makes steel "stainless" (at least 10.5%). In Cr-Mo alloy steels (F11, F22, F91), it adds oxidation resistance and creep strength at high temperature.' },
  { el: 'Ni', name: 'Nickel', role: 'Stabilises the austenitic structure, giving toughness down to cryogenic temperatures and better resistance to reducing acids.' },
  { el: 'Mo', name: 'Molybdenum', role: 'Improves resistance to pitting and crevice corrosion in chlorides (316 vs 304) and raises high temperature strength in Cr-Mo steels.' },
  { el: 'N', name: 'Nitrogen', role: 'Strengthens austenitic and duplex grades and strongly improves pitting resistance; it is counted 16× in the PREN formula.' },
  { el: 'Mn', name: 'Manganese', role: 'Deoxidiser and strengthener. In 200-series grades (JSL AUS, JS 203), it partly replaces nickel to lower cost.' },
  { el: 'Si', name: 'Silicon', role: 'Deoxidiser. Higher silicon (310S) improves scaling resistance at high temperature.' },
  { el: 'P / S', name: 'Phosphorus & Sulphur', role: 'Impurities that are kept low because they reduce toughness and weldability.' },
  { el: 'Ti / Nb', name: 'Titanium & Niobium (Columbium)', role: 'Stabilisers in 321 and 347. They tie up carbon so chromium carbides cannot form during welding or service at 425–815°C.' },
  { el: 'V', name: 'Vanadium', role: 'Together with Nb and N, forms fine precipitates that give F91 its high creep strength.' },
];

const faqs = [
  { q: 'What is the chemical composition of SS 304?', a: 'Per ASTM A240, type 304 contains 18.0–20.0% chromium, 8.0–10.5% nickel, up to 0.08% carbon, 2.00% manganese, 0.75% silicon, 0.045% phosphorus, 0.030% sulphur and 0.10% nitrogen. 304L is the same but with carbon limited to 0.030% and nickel 8.0–12.0%.' },
  { q: 'What is the difference between 316 and 316L composition?', a: 'Both contain 16.0–18.0% Cr, 10.0–14.0% Ni and 2.0–3.0% Mo. 316 allows up to 0.08% carbon, while 316L is limited to 0.030% carbon. The lower carbon prevents chromium carbide formation during welding, so 316L is preferred for welded flanges and fittings. Dual-certified 316/316L meets both.' },
  { q: 'What is the chemical composition of ASTM A105?', a: 'ASTM A105 carbon steel forgings contain up to 0.35% carbon, 0.60–1.05% manganese, 0.10–0.35% silicon, 0.035% phosphorus and 0.040% sulphur, with residual Cu, Ni, Cr, Mo and V limited (their total must not exceed 1.00%).' },
  { q: 'What is PREN and how is it calculated?', a: 'PREN (Pitting Resistance Equivalent Number) ranks resistance to pitting corrosion in chlorides: PREN = %Cr + 3.3 × %Mo + 16 × %N. Typical values are about 24 for 316L, 34–38 for 2205 duplex and 40 or more for super duplex (F53 / F55), which is why super duplex is used for seawater service.' },
  { q: 'What is the difference between F11 and F22 alloy steel?', a: 'F11 is a 1¼Cr-½Mo steel (Cr 1.00–1.50%, Mo 0.44–0.65%) and F22 is a 2¼Cr-1Mo steel (Cr 2.00–2.50%, Mo 0.87–1.13%). The higher chromium and molybdenum give F22 better creep strength and oxidation resistance at higher temperatures in power and refinery service.' },
  { q: 'How do I verify the chemical composition of a flange?', a: 'The EN 10204 3.1 mill test certificate reports the heat analysis for the heat number stamped on the flange. On site, positive material identification (PMI) with XRF or OES confirms the alloying elements. Note that XRF cannot measure carbon, so OES is needed to tell L grades from standard grades.' },
];

const thClass = 'px-3 py-3 border-r border-slate-200 whitespace-nowrap';
const tdClass = 'px-3 py-2 text-slate-700 border-r border-slate-200';

const TableCard = ({ title, note, children }) => (
  <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden mb-10">
    <div className="px-6 py-4 bg-[#0F172A] border-b border-slate-700">
      <h3 className="text-lg font-bold text-white">{title}</h3>
    </div>
    <div className="overflow-x-auto">{children}</div>
    {note && <div className="p-4 bg-slate-50 text-xs text-slate-500 italic">{note}</div>}
  </div>
);

const ChemicalComposition = () => {
  usePageSchema([faqSchema(faqs)]);

  return (
    <div className="min-h-screen bg-slate-50 pt-20 font-sans">
      <MetaTags
        title="Steel Chemical Composition Chart: SS, Duplex, A105, F22"
        description="Chemical composition of stainless steel 304/316L/321, duplex F51/F53/F55, A105, A350 LF2, A234 WPB and alloy F11/F22/F91, with PREN and element guide."
      />
      {/* Breadcrumb Header */}
      <div className="bg-[#0F172A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-slate-400">
              <li><Link to="/" aria-label="Home" className="hover:text-[#D71920] transition-colors"><Home size={14} /></Link></li>
              <li aria-hidden="true"><ChevronRight size={14} /></li>
              <li><Link to="/tech-info/dimension-chart/" className="hover:text-[#D71920] transition-colors">Tech Info</Link></li>
              <li aria-hidden="true"><ChevronRight size={14} /></li>
              <li aria-current="page" className="text-[#D71920] font-medium">Chemical Composition</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Steel Chemical Composition Chart</h1>
          <p className="mt-4 max-w-3xl text-slate-300 text-sm md:text-base leading-relaxed">
            Chemical composition limits (weight %) for stainless steel, duplex and super duplex, carbon steel and chrome-moly alloy steel grades used for flanges, fittings and plate. Values are maximums unless a range or "min" is shown.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Intro Text */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 mb-10">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-4 flex items-center gap-2">
            <FileText className="text-[#D71920]" /> How to Use This Chart
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            A grade's chemical composition sets its corrosion resistance, strength, weldability and temperature limits. Chromium and nickel give stainless steels their corrosion resistance and toughness, molybdenum and nitrogen add pitting resistance, and low-carbon "L" grades avoid carbide precipitation during welding.
          </p>
          <p className="text-slate-600 leading-relaxed">
            The limits below are summarised from ASTM A240 (stainless plate and sheet), A182 (alloy and stainless forgings), A105, A350 and A234. Always check against the specification edition in your purchase order, and use the{' '}
            <Link to="/tech-info/mechanical-properties/" className="text-[#D71920] font-semibold hover:underline">mechanical properties chart</Link> for tensile and yield values.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-sm">
            {[['stainless', 'Stainless Steel'], ['duplex', 'Duplex & Super Duplex'], ['carbon', 'Carbon Steel'], ['alloy', 'Alloy Steel (Cr-Mo)'], ['elements', 'What Each Element Does'], ['faq', 'FAQs']].map(([id, label]) => (
              <a key={id} href={`#${id}`} className="px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-700 font-semibold hover:border-[#D71920] hover:text-[#D71920] transition-colors">{label}</a>
            ))}
          </div>
        </div>

        {/* Stainless */}
        <section id="stainless" className="scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-6">Stainless Steel Chemical Composition</h2>
          <TableCard title="Stainless steel sheet & plate grades — chemical composition (%)" note="300-series and 400-series limits per ASTM A240. JSL AUS, JS 203 and 301M are Indian 200-series (Cr-Mn) grades; 409M is a modified ferritic grade.">
            <table className="w-full text-sm text-center">
              <thead className="bg-slate-100 text-[#0F172A]">
                <tr>
                  {['Grade', 'C', 'Mn', 'P', 'S', 'Si', 'Cr', 'Ni', 'Mo', 'N', 'Cu / Others'].map((h) => <th key={h} className={thClass}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {stainlessRows.map((row, idx) => (
                  <tr key={row.g} className={`border-b border-slate-200 hover:bg-slate-50 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                    <td className="px-3 py-2 font-bold text-[#D71920] border-r border-slate-200 whitespace-nowrap">{row.g}</td>
                    {[row.c, row.mn, row.p, row.s, row.si, row.cr, row.ni, row.mo, row.n].map((v, i) => <td key={i} className={tdClass}>{v}</td>)}
                    <td className="px-3 py-2 text-slate-700">{row.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableCard>
          <p className="text-slate-600 text-sm leading-relaxed mb-12">
            For forged flanges and fittings, the equivalent ASTM A182 grades are F304 / F304L, F316 / F316L, F321 and F347; silicon is limited to 1.00% instead of 0.75%. See our{' '}
            <Link to="/materials/stainless-steel-304-flanges/" className="text-[#D71920] font-semibold hover:underline">SS 304</Link>,{' '}
            <Link to="/materials/stainless-steel-316-flanges/" className="text-[#D71920] font-semibold hover:underline">SS 316</Link> and{' '}
            <Link to="/materials/stainless-steel-321-347-flanges/" className="text-[#D71920] font-semibold hover:underline">SS 321 / 347</Link> flange pages, or the{' '}
            <Link to="/blogs/stainless-steel-grades-explained/" className="text-[#D71920] font-semibold hover:underline">stainless steel grades guide</Link>.
          </p>
        </section>

        {/* Duplex */}
        <section id="duplex" className="scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-6">Duplex & Super Duplex Chemical Composition</h2>
          <TableCard title="ASTM A182 duplex grades — chemical composition (%)" note="PREN = %Cr + 3.3 × %Mo + 16 × %N, calculated here at the minimum of each range. Super duplex (F53, F55) is normally ordered with PREN ≥ 40.">
            <table className="w-full text-sm text-center">
              <thead className="bg-slate-100 text-[#0F172A]">
                <tr>
                  {['Grade', 'UNS', 'C', 'Mn', 'P', 'S', 'Si', 'Cr', 'Ni', 'Mo', 'N', 'Others', 'PREN (min)'].map((h) => <th key={h} className={thClass}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {duplexRows.map((row, idx) => (
                  <tr key={row.uns} className={`border-b border-slate-200 hover:bg-slate-50 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                    <td className="px-3 py-2 font-bold text-[#D71920] border-r border-slate-200 whitespace-nowrap">{row.g}</td>
                    {[row.uns, row.c, row.mn, row.p, row.s, row.si, row.cr, row.ni, row.mo, row.n, row.other].map((v, i) => <td key={i} className={tdClass}>{v}</td>)}
                    <td className="px-3 py-2 font-bold text-slate-800">{row.pren}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableCard>
          <p className="text-slate-600 text-sm leading-relaxed mb-12">
            Related: <Link to="/materials/duplex-2205-flanges/" className="text-[#D71920] font-semibold hover:underline">duplex 2205 flanges</Link>,{' '}
            <Link to="/materials/super-duplex-2507-flanges/" className="text-[#D71920] font-semibold hover:underline">super duplex 2507 flanges</Link> and{' '}
            <Link to="/blogs/duplex-vs-super-duplex/" className="text-[#D71920] font-semibold hover:underline">duplex vs super duplex</Link>.
          </p>
        </section>

        {/* Carbon */}
        <section id="carbon" className="scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-6">Carbon Steel Chemical Composition</h2>
          <TableCard title="Carbon steel forgings & fittings — chemical composition (%)" note="For A105, the sum of Cu, Ni, Cr, Mo and V must not exceed 1.00%, and Cr + Mo must not exceed 0.32%. A350 LF2 is impact tested at -46°C (Class 1).">
            <table className="w-full text-sm text-center">
              <thead className="bg-slate-100 text-[#0F172A]">
                <tr>
                  {['Grade', 'Specification', 'C', 'Mn', 'P', 'S', 'Si', 'Residual Elements'].map((h) => <th key={h} className={thClass}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {carbonRows.map((row, idx) => (
                  <tr key={row.g} className={`border-b border-slate-200 hover:bg-slate-50 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                    <td className="px-3 py-2 font-bold text-[#D71920] border-r border-slate-200 whitespace-nowrap">{row.g}</td>
                    {[row.spec, row.c, row.mn, row.p, row.s, row.si].map((v, i) => <td key={i} className={tdClass}>{v}</td>)}
                    <td className="px-3 py-2 text-slate-700">{row.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableCard>
          <p className="text-slate-600 text-sm leading-relaxed mb-12">
            Related: <Link to="/materials/carbon-steel-flanges/" className="text-[#D71920] font-semibold hover:underline">carbon steel flanges</Link> and{' '}
            <Link to="/blogs/a105-vs-a350-lf2/" className="text-[#D71920] font-semibold hover:underline">A105 vs A350 LF2</Link>.
          </p>
        </section>

        {/* Alloy */}
        <section id="alloy" className="scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-6">Alloy Steel (Chrome-Moly) Chemical Composition</h2>
          <TableCard title="ASTM A182 Cr-Mo alloy forgings — chemical composition (%)" note="F11 Class 2 and F22 Class 3 are the classes most used for flanges in power and refinery service. F91 Type 1 limits are shown.">
            <table className="w-full text-sm text-center">
              <thead className="bg-slate-100 text-[#0F172A]">
                <tr>
                  {['Grade', 'UNS', 'C', 'Mn', 'P', 'S', 'Si', 'Cr', 'Mo', 'Others'].map((h) => <th key={h} className={thClass}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {alloyRows.map((row, idx) => (
                  <tr key={row.uns} className={`border-b border-slate-200 hover:bg-slate-50 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                    <td className="px-3 py-2 font-bold text-[#D71920] border-r border-slate-200 whitespace-nowrap">{row.g}</td>
                    {[row.uns, row.c, row.mn, row.p, row.s, row.si, row.cr, row.mo].map((v, i) => <td key={i} className={tdClass}>{v}</td>)}
                    <td className="px-3 py-2 text-slate-700">{row.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableCard>
          <p className="text-slate-600 text-sm leading-relaxed mb-12">
            Related: <Link to="/materials/alloy-steel-f11-f22-flanges/" className="text-[#D71920] font-semibold hover:underline">F11 / F22 flanges</Link>,{' '}
            <Link to="/materials/alloy-steel-f91-flanges/" className="text-[#D71920] font-semibold hover:underline">F91 flanges</Link> and the{' '}
            <Link to="/blogs/alloy-steel-power-gen-guide/" className="text-[#D71920] font-semibold hover:underline">alloy steel for power generation guide</Link>.
          </p>
        </section>

        {/* Elements */}
        <section id="elements" className="scroll-mt-24 bg-white p-8 rounded-2xl shadow-sm border border-slate-200 mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-6">What Each Alloying Element Does</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {elements.map((item) => (
              <div key={item.el} className="flex items-start gap-4 bg-slate-50 border border-slate-200 rounded-xl p-4">
                <span className="min-w-12 h-12 px-2 bg-[#0F172A] rounded-lg flex items-center justify-center text-white font-extrabold text-sm shrink-0">{item.el}</span>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">{item.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-24 bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-6">Chemical Composition FAQs</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-8">
            Every flange and fitting we supply comes with an EN 10204 3.1 certificate showing the actual heat analysis. Read{' '}
            <Link to="/blogs/mtc-en10204-explained/" className="text-[#D71920] font-semibold hover:underline">how to read an EN 10204 MTC</Link>.
          </p>
        </section>

      </div>
    </div>
  );
};

export default ChemicalComposition;
