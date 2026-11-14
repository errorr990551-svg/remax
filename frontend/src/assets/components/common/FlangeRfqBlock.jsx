import React from 'react';
import { CheckCircle, Send } from 'lucide-react';
import { useQuotePopup } from '../../context/QuotePopupContext.jsx';
import { RFQ_CHECKLIST } from '../../data/exportShared.js';

/**
 * Transactional block: what we supply for this standard/topic, the RFQ checklist
 * and a Get Quote button (opens the quote popup; no contact details here).
 * supply: { title, intro, items: [{ label, value }] }
 */
const FlangeRfqBlock = ({ supply, productName = '' }) => {
  const { openQuotePopup } = useQuotePopup();
  if (!supply) return null;

  return (
    <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 not-prose">
      <h2 className="text-2xl font-bold text-slate-900 mb-3">{supply.title}</h2>
      {supply.intro && <p className="text-slate-600 text-sm leading-relaxed mb-5">{supply.intro}</p>}

      {supply.items?.length > 0 && (
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-slate-200">
            <tbody>
              {supply.items.map((row, idx) => (
                <tr key={idx} className={idx % 2 ? 'bg-slate-50' : 'bg-white'}>
                  <th scope="row" className="text-left align-top font-semibold text-slate-800 p-3 border-b border-slate-200 w-1/3">{row.label}</th>
                  <td className="text-slate-600 p-3 border-b border-slate-200">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <h3 className="text-lg font-bold text-slate-900 mb-3">RFQ checklist: what to send for an accurate quote</h3>
      <ul className="space-y-2 mb-6">
        {RFQ_CHECKLIST.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
            <CheckCircle className="w-4 h-4 text-[#D71920] mt-0.5 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => openQuotePopup(productName)}
        className="inline-flex items-center gap-2 bg-[#D71920] hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl transition-colors"
      >
        <Send className="w-4 h-4" /> Get Quote
      </button>
    </section>
  );
};

export default FlangeRfqBlock;
