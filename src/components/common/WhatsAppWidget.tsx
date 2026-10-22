import { useState } from 'react';
import { MessageSquare, X, Send, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const primaryPhone = COMPANY_INFO.phones[0];

  const quickMessages = [
    {
      title: 'Structural Steel / Warehouse',
      text: 'Hello Clavel Steel Konstruction Co. Ltd. I need a quotation for a structural steel warehouse / building project in Anambra State.'
    },
    {
      title: 'Filling Station Canopy',
      text: 'Hello Clavel Steel Konstruction Co. Ltd. I would like to enquire about forecourt canopy fabrication and installation for a filling station.'
    },
    {
      title: 'Storage Tanks & Stanchions',
      text: 'Hello Clavel Steel Konstruction Co. Ltd. I need information and pricing on overhead water tank stanchions / underground fuel tanks.'
    },
    {
      title: 'Welding Training Academy',
      text: 'Hello Clavel Steel Konstruction Co. Ltd. I want to enquire about enrollment and curriculum details for the SMAW/GTAW welding training program in Awka.'
    }
  ];

  const handleOpenWhatsApp = (message: string) => {
    const rawNumber = primaryPhone.raw.replace('+', '');
    const url = `https://wa.me/${rawNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Expanded Quick Options Menu */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-[#000C00] border border-[#2DA447] rounded-lg shadow-2xl p-4 animate-fadeIn text-white">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#228940] flex items-center justify-center text-white">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-heading font-bold uppercase tracking-wider text-white">
                  Clavel Engineering Desk
                </p>
                <p className="text-[10px] text-[#D5DD27] font-tech flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2DA447] animate-pulse"></span>
                  Awka Workshop Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-gray-400 hover:text-white rounded"
              aria-label="Close WhatsApp chat drawer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-gray-300 my-3">
            Select a project topic below to start a direct WhatsApp conversation with our Awka team:
          </p>

          <div className="space-y-2">
            {quickMessages.map((m, idx) => (
              <button
                key={idx}
                onClick={() => handleOpenWhatsApp(m.text)}
                className="w-full text-left p-2.5 rounded bg-[#032C16] hover:bg-[#054423] border border-white/5 hover:border-[#2DA447] transition-all text-xs flex items-center justify-between group cursor-pointer"
              >
                <span className="font-semibold text-gray-200 group-hover:text-[#D5DD27]">
                  {m.title}
                </span>
                <Send className="w-3.5 h-3.5 text-[#2DA447] opacity-80 group-hover:translate-x-0.5 transition-transform" />
              </button>
            ))}
          </div>

          <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
            <span>Direct Call:</span>
            <a 
              href={`tel:${primaryPhone.raw}`}
              className="text-[#D5DD27] font-semibold hover:underline flex items-center gap-1"
            >
              <PhoneCall className="w-3 h-3" /> {primaryPhone.number}
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 px-4 py-3 bg-[#228940] hover:bg-[#2DA447] text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 border-2 border-white/20 cursor-pointer"
        aria-label="Chat on WhatsApp with Clavel Steel"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D5DD27] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D5DD27]"></span>
        </span>
        <MessageSquare className="w-5 h-5" />
        <span className="text-xs font-bold font-tech uppercase tracking-wider hidden sm:inline-block">
          WhatsApp Chat
        </span>
      </button>
    </div>
  );
}
