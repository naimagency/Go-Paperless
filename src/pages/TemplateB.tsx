import { FileText, Smartphone, Shield, ChevronDown, List, GraduationCap, Phone } from 'lucide-react';
import { useState } from 'react';
import beforeImg from '@/assets/before-paperwork.jpg';
import afterImg from '@/assets/after-digital.jpg';
import naimLogo from '@/assets/naim-logo.png';

const WHATSAPP_NUMBER = '27696133396';
const WHATSAPP_DISPLAY = '+27 696 133 396';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Naim%20Agency%20I%20want%20to%20go%20paperless`;
const EMAIL = 'tech@naiminvestments.com';
const CTA_BUTTON_CLASS = 'inline-flex items-center justify-center gap-2 rounded-full border border-[#C8A24A] bg-white px-8 py-3 text-[#C8A24A] font-light tracking-wide hover:bg-[#fff8e8] transition-all';

const whatYouGetItems = [
  { icon: Smartphone, text: 'Custom Digital Form (Booking/Registration/Invoice)' },
  { icon: FileText, text: 'Automatic Branded PDF Output' },
  { icon: List, text: 'Simple Searchable List of Client Records' },
  { icon: GraduationCap, text: 'Short Training so you can run it yourself' },
];

export default function TemplateB() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  const faqs = [
    {
      q: 'How much does this cost?',
      a: "Pricing is project-based for the initial setup, with a monthly subscription for maintenance, updates, and support. We'll provide an exact quote based on the size and complexity of your project.",
    },
    {
      q: 'How long does setup take?',
      a: 'Setup timelines depend on the number and complexity of forms required. Most projects are delivered within a reasonable implementation window, and we confirm a realistic timeline after reviewing your exact needs.',
    },
    {
      q: 'Do I need a Computer or Special Software?',
      a: 'No. Everything works on your smartphone. You just need a modern phone with internet access.',
    },
    {
      q: "What if my staff don't know how to use it?",
      a: 'We provide a short training session that covers everything. The forms are designed to be simple and intuitive.',
    },
    {
      q: 'Is my client data safe?',
      a: 'Yes. We use secure, POPIA-compliant systems. Your data is encrypted, access-controlled, and stored safely.',
    },
  ];

  return (
    <div className="template-b min-h-screen bg-white text-gray-800">
      <style>{`
        .template-b, .template-b * { font-family: var(--font-body) !important; }
        @keyframes dissolveOut { 0%, 45% { opacity: 1; filter: blur(0px); } 55%, 100% { opacity: 0; filter: blur(1.5px); } }
        @keyframes dissolveIn { 0%, 45% { opacity: 0; filter: blur(1.5px); } 55%, 100% { opacity: 1; filter: blur(0px); } }
      `}</style>
      <header className="bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-5">
          {/* Mobile layout */}
          <div className="sm:hidden">
            <div className="flex items-center justify-between">
              <img src={naimLogo} alt="Naim Agency logo" className="h-24 w-24 object-contain" />
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={`${CTA_BUTTON_CLASS} px-4 py-2.5 text-sm`}>
                Book Now
              </a>
            </div>
            <div className="mt-1 text-center">
              <h1 className="text-2xl font-light text-gray-900">Go <span className="text-[#C8A24A]">Paperless</span></h1>
            </div>
          </div>

          {/* Tablet/Desktop layout */}
          <div className="hidden sm:grid grid-cols-[1fr_auto_1fr] items-center">
            <div className="justify-self-start">
              <img src={naimLogo} alt="Naim Agency logo" className="h-28 w-28 object-contain" />
            </div>
            <h1 className="text-3xl font-light text-gray-900 text-center justify-self-center">Go <span className="text-[#C8A24A]">Paperless</span></h1>
            <div className="flex items-center gap-6 justify-self-end">
              <a href="#contact" className="text-gray-600 hover:text-[#C8A24A] transition-colors font-light">Contact</a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={`${CTA_BUTTON_CLASS} px-8 py-3 text-base`}>
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-2 sm:py-4 text-center">
        <div className="sr-only">Go Paperless</div>

        <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-light text-center text-gray-900 mb-8">From Chaos <span className="text-[#C8A24A]">&rarr;</span> <span className="text-[#C8A24A]">Clean</span></h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8 text-left">
            <div className="bg-white rounded-2xl p-8 border border-[#C8A24A]/20 shadow-md">
              <div className="w-full h-72 rounded-lg mb-4 overflow-hidden"><img src={beforeImg} alt="Before messy paperwork" className="w-full h-full object-cover" loading="lazy" /></div>
              <h3 className="text-2xl font-light text-gray-900 mb-2">Before</h3>
              <p className="text-gray-600 font-light">Messy paperwork</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border-2 border-[#C8A24A] shadow-lg">
              <div className="w-full h-72 rounded-lg mb-4 overflow-hidden"><img src={afterImg} alt="After clean digital workflow" className="w-full h-full object-cover" loading="lazy" /></div>
              <h3 className="text-2xl font-light text-gray-900 mb-2">After</h3>
              <p className="text-[#C8A24A] font-light">Phone form + PDF generated</p>
            </div>
          </div>
          <p className="text-center text-gray-600 font-light text-lg">Same business. Less stress. Everything on your phone.</p>
        </div>

        <h1 className="text-2xl sm:text-3xl font-light text-gray-900 mb-5 leading-tight">
          Turn Paperwork from <span>Chaos</span> into <span className="text-[#C8A24A]">Clean</span> forms on your phone &mdash;<br />
          <span className="text-[#C8A24A]">and get instant PDFs</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          We help South African small businesses stop wasting time on admin.<br />
          We build mobile forms that save client details neatly and generate PDFs automatically.
        </p>

        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={`${CTA_BUTTON_CLASS} w-full sm:w-auto text-lg`}>
          Book Appointment
        </a>
        <p className="text-sm text-gray-500 mt-4 font-light italic">No pressure. If you don’t need this, We’ll tell you.</p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-light text-center text-gray-900 mb-16">What <span className="text-[#C8A24A]">You Get</span></h2>
        <div className="bg-white rounded-2xl p-10 border border-[#C8A24A]/30 shadow-lg mb-8">
          <ul className="space-y-5">
            {whatYouGetItems.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3 rounded-lg border border-[#C8A24A]/20 bg-white p-4 sm:p-5 shadow-sm text-left">
                <Icon className="mt-0.5 h-5 w-5 sm:h-6 sm:w-6 shrink-0 text-[#C8A24A]" />
                <span className="text-base sm:text-lg leading-snug text-gray-700 font-light">
                  {text.includes('(Booking/Registration/Invoice)') ? (
                    <>
                      Custom Digital Form{' '}
                      <span className="block sm:inline -ml-5 sm:ml-0">(Booking/Registration/Invoice)</span>
                    </>
                  ) : (
                    text
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-center text-gray-500 text-sm font-light italic">Optional Add-Ons: Reminders, Follow-ups, Google Sheets Sync</p>


      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-light text-center text-gray-900 mb-16">How It <span className="text-[#C8A24A]">Works</span></h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { n: '1', icon: Phone, t: 'Book Appointment', d: 'Consultation booked to understand your needs' },
              { n: '2', icon: Smartphone, t: 'We build your form + PDF', d: 'Custom designed for your business' },
              { n: '3', icon: FileText, t: 'You go paperless', d: 'Start using it with confidence' },
            ].map((s) => (
              <div key={s.n} className="text-center">
                <div className="w-24 h-24 rounded-full bg-[#C8A24A]/10 flex items-center justify-center mx-auto mb-6 border border-[#C8A24A]/30">
                  <s.icon className="w-10 h-10 text-[#C8A24A]" />
                </div>
                <div className="text-[#C8A24A] text-6xl font-light mb-4">{s.n}</div>
                <h3 className="text-lg sm:text-xl font-light text-gray-700 mb-2">{s.t}</h3>
                <p className="text-base text-gray-700 font-light">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-white rounded-2xl p-10 border border-[#C8A24A]/20 shadow-md text-center">
          <Shield className="w-12 h-12 text-[#C8A24A] mx-auto mb-6" />
          <h2 className="text-2xl font-light text-gray-900 mb-4">Your Data is Protected</h2>
          <p className="text-gray-600 font-light leading-relaxed">
            We only collect what you need, protect access, and keep client data private.<br />
            Your business stays compliant with South African data protection laws.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-light text-center text-gray-900 mb-16">Common <span className="text-[#C8A24A]">Questions</span></h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-[#C8A24A] transition-colors">
              <button onClick={() => toggleFaq(i)} className="w-full px-8 py-6 flex items-center justify-between text-left">
                <span className="text-lg font-light text-gray-900">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-[#C8A24A] transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === i && <div className="px-8 pb-6 text-gray-600 font-light leading-relaxed">{faq.a}</div>}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">Ready to <span className="text-[#C8A24A]">Go Paperless?</span></h2>
          <p className="text-lg text-gray-600 font-light mb-10 max-w-2xl mx-auto">Book your appointment today.<br />No commitment, just honest advice.</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={`${CTA_BUTTON_CLASS} text-lg mb-10`}>Book Appointment</a>

          <div className="grid md:grid-cols-[220px,1fr] gap-8 items-center text-left max-w-3xl mx-auto">
            <div className="flex justify-center md:justify-start">
              <img src={naimLogo} alt="Naim Agency logo" className="w-44 h-44 object-contain" />
            </div>
            <div className="space-y-3 text-gray-600 font-light">
              <p>WhatsApp: <a href={WHATSAPP_LINK} className="text-[#C8A24A] hover:underline">{WHATSAPP_DISPLAY}</a></p>
              <p>Email: <a href={`mailto:${EMAIL}`} className="text-[#C8A24A] hover:underline break-all">{EMAIL}</a></p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-[#C8A24A]/20">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <p className="text-gray-500 text-sm font-light">© {new Date().getFullYear()} Naim Agency. All rights reserved. South Africa.</p>
        </div>
      </footer>
    </div>
  );
}



