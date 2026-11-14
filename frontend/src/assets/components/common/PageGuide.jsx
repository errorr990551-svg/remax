import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { pageGuides } from '../../data/pageGuides.js';

// Extra written guide sections for one page, keyed by canonical path in pageGuides.js.
const PageGuide = ({ path, bare = false }) => {
  const guide = pageGuides[path];
  if (!guide) return null;
  const body = (
    <div className="space-y-8 not-prose">
      {guide.sections.map((sec) => (
        <div key={sec.h2} className="space-y-4">
          <h2 className="text-2xl font-bold text-[#0F172A]">{sec.h2}</h2>
          {(sec.paras || []).map((p) => <p key={p} className="text-slate-700 leading-relaxed">{p}</p>)}
          {sec.table && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-slate-200">
                <thead className="bg-slate-100 text-slate-900"><tr>{sec.table.head.map((h) => <th key={h} className="p-3 text-left">{h}</th>)}</tr></thead>
                <tbody>{sec.table.rows.map((r) => <tr key={r[0]} className="border-t border-slate-200 align-top">{r.map((c, i) => <td key={i} className={`p-3 ${i === 0 ? 'font-semibold text-slate-900' : 'text-slate-700'}`}>{c}</td>)}</tr>)}</tbody>
              </table>
            </div>
          )}
          {sec.list && (
            <ul className="space-y-2">
              {sec.list.map((li) => <li key={li} className="flex items-start gap-2 text-slate-700"><CheckCircle2 size={18} className="text-[#D71920] mt-0.5 shrink-0" />{li}</li>)}
            </ul>
          )}
        </div>
      ))}
      {guide.faqs && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[#0F172A]">Common questions</h2>
          {guide.faqs.map((f) => (
            <div key={f.q} className="border-t border-slate-200 pt-3">
              <h3 className="font-semibold text-slate-900">{f.q}</h3>
              <p className="text-slate-700 leading-relaxed mt-1">{f.a}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
  if (bare) return body;
  return <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-10 shadow-sm my-12">{body}</section>;
};

export default PageGuide;
