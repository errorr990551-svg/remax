import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  ChevronRight, 
  Download, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  ExternalLink, 
  Copy, 
  Check, 
  Eye, 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle,
  FileCheck2,
  Lock,
  ArrowRight
} from 'lucide-react';
import SEOManager from '../components/common/SEOManager';

const Certification = () => {
  const [copiedGst, setCopiedGst] = useState(false);
  const [activePreview, setActivePreview] = useState(null); // 'gst' | 'udyam' | null

  const handleCopyGst = () => {
    navigator.clipboard.writeText('27FFLPP0007K1ZA');
    setCopiedGst(true);
    setTimeout(() => setCopiedGst(false), 2500);
  };

  const certificates = [
    {
      id: 'gst',
      title: 'Goods and Services Tax (GST) Registration Certificate',
      shortTitle: 'GST Registration Certificate',
      formType: 'Form GST REG-06',
      authority: 'Government of India · CBIC',
      regNumber: '27FFLPP0007K1ZA',
      legalName: 'VIKAS REVARAM PUROHIT',
      tradeName: 'REMAX FORGE & FITTINGS',
      constitution: 'Proprietorship',
      jurisdiction: 'Mumbai, Maharashtra',
      issueDate: '03 September 2025',
      pdfUrl: '/Remax GST Certificate.pdf',
      fileSize: '120 KB',
      verificationUrl: 'https://services.gst.gov.in/services/searchtp',
      highlights: [
        'Officially registered with CBIC & Maharashtra Commercial Taxes',
        'Valid for 18% IGST interstate dispatches across India',
        'Direct GST e-way bill generation for industrial consignments',
        'Mandatory tax-invoice enclosed with every commercial dispatch'
      ]
    },
    {
      id: 'udyam',
      title: 'Ministry of MSME Udyam Registration Certificate',
      shortTitle: 'Udyam MSME Certificate',
      formType: 'Udyam Registration',
      authority: 'Ministry of Micro, Small and Medium Enterprises',
      regNumber: 'Registered Enterprise',
      legalName: 'REMAX FORGE & FITTINGS',
      tradeName: 'Remax Forge & Fittings',
      constitution: 'Micro & Small Manufacturing Enterprise',
      jurisdiction: 'Mumbai, Maharashtra Works',
      issueDate: 'Active Official Registration',
      pdfUrl: '/Udyam.pdf',
      fileSize: '1.1 MB',
      verificationUrl: 'https://udyamregistration.gov.in/',
      highlights: [
        'Recognized Indian Manufacturer of Forged Flanges & Butt Weld Fittings',
        'National Industrial Classification (NIC): Metal Forging & Pipe Fittings',
        'Eligible for Public Procurement Policy & Government EPC vendor approvals',
        'Manufacturing unit at C.P Tank Road, Marine Lines, Mumbai'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <SEOManager 
        title="Accreditation & Certificates | Remax Forge & Fittings"
        description="Official Government Accreditations, GSTIN 27FFLPP0007K1ZA, Ministry of MSME Udyam Registration, and ISO Quality Certifications for Remax Forge & Fittings."
        canonicalUrl="https://remaxforge.com/certification/"
      />

      {/* Breadcrumb Header */}
      <div className="bg-slate-900 text-white pt-24 pb-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-xs text-slate-400 flex-wrap">
              <li>
                <Link to="/" className="hover:text-[#D71920] transition-colors flex items-center gap-1">
                  <Home size={13} />
                  <span>Home</span>
                </Link>
              </li>
              <ChevronRight size={12} className="text-slate-600" />
              <li aria-current="page" className="text-red-400 font-semibold">
                Accreditations & Certificates
              </li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 bg-[#D71920]/20 border border-[#D71920]/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-red-200 tracking-wide uppercase mb-4">
            <ShieldCheck size={14} className="text-[#D71920]" />
            Official Government Accreditations · 100% Tax & Legal Compliance
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Accreditations & Certificates
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Remax Forge & Fittings operates under full statutory compliance with the Government of India, 
            Ministry of MSME, and the Central Board of Indirect Taxes and Customs (CBIC). Review, verify, 
            and download our official registration documents below.
          </p>
        </div>
      </div>

      {/* Trust Highlights Bar */}
      <div className="bg-white border-b border-slate-200 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-2 border-r border-slate-100 last:border-none">
              <span className="text-xs text-slate-500 uppercase tracking-wider block font-semibold">GSTIN Status</span>
              <span className="text-sm font-bold text-green-700 flex items-center justify-center gap-1 mt-0.5">
                <CheckCircle size={14} /> Active & Verified
              </span>
            </div>
            <div className="p-2 border-r border-slate-100 last:border-none">
              <span className="text-xs text-slate-500 uppercase tracking-wider block font-semibold">Enterprise Type</span>
              <span className="text-sm font-bold text-slate-800 mt-0.5 block">
                MSME Registered Maker
              </span>
            </div>
            <div className="p-2 border-r border-slate-100 last:border-none">
              <span className="text-xs text-slate-500 uppercase tracking-wider block font-semibold">Quality Policy</span>
              <span className="text-sm font-bold text-slate-800 mt-0.5 block">
                ISO 9001:2015 Compliant
              </span>
            </div>
            <div className="p-2">
              <span className="text-xs text-slate-500 uppercase tracking-wider block font-semibold">MTC Documentation</span>
              <span className="text-sm font-bold text-slate-800 mt-0.5 block">
                EN 10204 3.1 / 3.2 Standard
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Certificates Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D71920] block mb-1">
            Verified Documentation
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
            Primary Government Registrations & Statutory Certificates
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Click on any certificate to view high-resolution PDF scans or download certified copies for vendor onboarding and procurement dossiers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {certificates.map((cert) => (
            <div 
              key={cert.id} 
              className="bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Card Header */}
              <div className="p-6 sm:p-7 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <span className="inline-flex items-center gap-1.5 bg-slate-900 text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">
                    <Award size={13} className="text-yellow-400" />
                    {cert.formType}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                    PDF · {cert.fileSize}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug mb-2">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-[#D71920] uppercase tracking-wide">
                  Issuing Authority: {cert.authority}
                </p>
              </div>

              {/* Card Body - Registration Details */}
              <div className="p-6 sm:p-7 flex-1 space-y-4 text-sm text-slate-700">
                
                {/* Registration Number Highlight Box */}
                {cert.id === 'gst' ? (
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-xs text-slate-500 font-semibold block uppercase">GSTIN / Registration No.</span>
                      <span className="text-lg font-mono font-extrabold text-slate-900 tracking-wider">
                        {cert.regNumber}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyGst}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-300 hover:border-slate-400 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-900 shadow-sm transition"
                      title="Copy GSTIN to clipboard"
                    >
                      {copiedGst ? (
                        <>
                          <Check size={14} className="text-green-600" />
                          <span className="text-green-600">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} className="text-slate-500" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                ) : (
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <span className="text-xs text-slate-500 font-semibold block uppercase">Classification</span>
                    <span className="text-base font-bold text-slate-900">
                      {cert.constitution}
                    </span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                  <div>
                    <span className="text-slate-500 block font-medium">Enterprise Name:</span>
                    <span className="font-bold text-slate-800">{cert.tradeName}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block font-medium">Operating Location:</span>
                    <span className="font-bold text-slate-800">{cert.jurisdiction}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block font-medium">Legal Ownership:</span>
                    <span className="font-bold text-slate-800">{cert.legalName}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block font-medium">Status / Date:</span>
                    <span className="font-bold text-green-700">{cert.issueDate}</span>
                  </div>
                </div>

                {/* Scope & Highlights */}
                <div className="pt-2 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-2">
                    Key Compliance Highlights:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {cert.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 size={13} className="text-[#D71920] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer - Action Buttons */}
              <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center gap-3">
                <a
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 bg-[#D71920] hover:bg-red-700 text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl shadow transition"
                >
                  <Eye size={15} />
                  <span>View Certificate</span>
                </a>

                <a
                  href={cert.pdfUrl}
                  download
                  className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-xl shadow-sm transition"
                >
                  <Download size={15} />
                  <span>Download PDF</span>
                </a>

                <button
                  type="button"
                  onClick={() => setActivePreview(activePreview === cert.id ? null : cert.id)}
                  className="inline-flex items-center justify-center gap-1.5 text-slate-600 hover:text-slate-900 font-semibold text-xs py-2.5 px-3 rounded-xl border border-slate-200 hover:border-slate-300 bg-white transition"
                >
                  {activePreview === cert.id ? 'Close Preview' : 'Inline Preview'}
                </button>
              </div>

              {/* Inline PDF Preview Accordion */}
              {activePreview === cert.id && (
                <div className="border-t border-slate-200 bg-slate-100 p-4">
                  <div className="bg-white rounded-lg shadow border border-slate-300 overflow-hidden">
                    <div className="p-2 bg-slate-200 flex items-center justify-between text-xs text-slate-700 font-medium">
                      <span>Document Preview ({cert.shortTitle})</span>
                      <a href={cert.pdfUrl} target="_blank" rel="noopener noreferrer" className="text-[#D71920] font-bold hover:underline flex items-center gap-1">
                        Open in Full Window <ExternalLink size={11} />
                      </a>
                    </div>
                    <iframe
                      src={`${cert.pdfUrl}#toolbar=0&navpanes=0`}
                      title={cert.title}
                      className="w-full h-96 border-none"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quality Management & Testing Rigor Section */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm mb-16">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D71920] block mb-1">
              Quality Assurance Framework
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              Standard Testing Protocols & Mill Test Certification
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Every forging and pipe fitting dispatched from Remax Forge & Fittings complies with stringent ASME, ASTM, DIN, and EN specifications. Complete material inspection documentation is issued with every consignment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <div className="w-10 h-10 bg-red-100 text-[#D71920] rounded-lg flex items-center justify-center mb-3">
                <FileCheck2 size={20} />
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">EN 10204 3.1 & 3.2 MTC</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Comprehensive mill test certificates validating original melt heat number, ladle chemical analysis, tensile strength, yield point, and elongation.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <div className="w-10 h-10 bg-red-100 text-[#D71920] rounded-lg flex items-center justify-center mb-3">
                <ShieldCheck size={20} />
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">Non-Destructive Testing (NDT)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                100% Positive Material Identification (PMI), Ultrasonic Testing (UT) for subsurface soundess, Dye Penetrant (DP), and Brinell hardness testing.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <div className="w-10 h-10 bg-red-100 text-[#D71920] rounded-lg flex items-center justify-center mb-3">
                <Building2 size={20} />
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">Third-Party Inspection (TPI)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Client-nominated third-party agencies including Bureau Veritas, TUV, DNV, SGS, and Lloyds are accommodated for raw material, forging, and hydrostatic witnessing.
              </p>
            </div>
          </div>
        </div>

        {/* Vendor Enlistment CTA */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-red-400 block mb-1">
              Procurement & Vendor Registration
            </span>
            <h3 className="text-2xl font-extrabold mb-2 text-white">
              Need Verified Vendor Onboarding Documents?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              If your EPC project, refinery turnaround, or municipal pipeline tender requires signed supplier declaration dossiers, bank account verification, or factory profile packages, contact our engineering desk.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <Link
              to="/market-area/"
              className="inline-flex items-center justify-center gap-2 bg-[#D71920] hover:bg-red-700 text-white font-bold text-sm py-3 px-6 rounded-xl shadow-lg transition"
            >
              <span>Explore Supply Areas</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Certification;