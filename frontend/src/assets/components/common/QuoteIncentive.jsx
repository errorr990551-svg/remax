// Shared form incentive badge, shown on every quote/contact form.
export default function QuoteIncentive({ className = '' }) {
  return (
    <div data-incentive className={`bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-left ${className}`}>
      <p className="text-sm font-bold text-slate-900">⚡ Written quote in 30 minutes</p>
      <p className="text-sm font-bold text-slate-900">🎁 Free Amazon gift card on every qualified RFQ*</p>
      <p className="text-[11px] text-slate-500 mt-0.5">*Include product, grade, size &amp; quantity. One per company.</p>
    </div>
  );
}
