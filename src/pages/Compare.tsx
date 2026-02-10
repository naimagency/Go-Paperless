import { Link } from 'react-router-dom';

export default function Compare() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-xl w-full border border-[#C8A24A]/30 rounded-2xl p-8 shadow-sm">
        <h1 className="text-3xl font-light text-gray-900 mb-3">Naim Templates Preview</h1>
        <p className="text-gray-600 mb-6">Open each template route to compare visuals.</p>
        <div className="space-y-3">
          <Link to="/template-a" className="block w-full text-center bg-[#C8A24A] text-white rounded-lg py-3 hover:bg-[#b8942a] transition">Open Template A</Link>
          <Link to="/template-b" className="block w-full text-center border border-[#C8A24A] text-[#C8A24A] rounded-lg py-3 hover:bg-[#fff8e8] transition">Open Template B</Link>
        </div>
      </div>
    </div>
  );
}
