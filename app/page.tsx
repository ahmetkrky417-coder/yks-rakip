"use client";

import { useState } from "react";
import { calculateDetailedYksRank, YksResult } from "./data";

export default function Home() {
  const [field, setField] = useState<string>("Sayısal");
  
  // TYT Netleri
  const [tytTurkce, setTytTurkce] = useState<number | "">(30);
  const [tytSosyal, setTytSosyal] = useState<number | "">(12);
  const [tytMat, setTytMat] = useState<number | "">(25);
  const [tytFen, setTytFen] = useState<number | "">(10);

  // AYT Netleri
  const [ayt1, setAyt1] = useState<number | "">(25); // Örn: Matematik / Edebiyat
  const [ayt2, setAyt2] = useState<number | "">(20); // Örn: Fen / Tarih-Coğrafya

  const [results, setResults] = useState<YksResult[] | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const res = calculateDetailedYksRank(
      field,
      Number(tytTurkce) || 0,
      Number(tytSosyal) || 0,
      Number(tytMat) || 0,
      Number(tytFen) || 0,
      Number(ayt1) || 0,
      Number(ayt2) || 0
    );
    setResults(res);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 md:p-12 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Başlık */}
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold text-blue-400">YKS Rakip & Branş Analiz Sistemi</h1>
          <p className="text-slate-400">
            Ders ders netlerinizi girin; geçmiş yılların yığılmalarına göre detaylı sıralamanızı ve hedef üniversiteleri görün.
          </p>
        </header>

        {/* Form Alanı */}
        <form onSubmit={handleCalculate} className="bg-slate-800 p-6 rounded-xl border border-slate-700 space-y-6">
          
          {/* Alan Seçimi */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-slate-300">Puan Türü / Alanınız</label>
            <select
              value={field}
              onChange={(e) => setField(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="Sayısal">Sayısal</option>
              <option value="Eşit Ağırlık">Eşit Ağırlık</option>
              <option value="Sözel">Sözel</option>
              <option value="Dil">Dil</option>
            </select>
          </div>

          {/* TYT Kısmı */}
          <div>
            <h2 className="text-lg font-bold text-blue-300 mb-3 border-b border-slate-700 pb-1">TYT Netleri</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Türkçe (Max 40)</label>
                <input
                  type="number" step="0.25" min="0" max="40"
                  value={tytTurkce}
                  onChange={(e) => setTytTurkce(e.target.value === "" ? "" : Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Sosyal (Max 20)</label>
                <input
                  type="number" step="0.25" min="0" max="20"
                  value={tytSosyal}
                  onChange={(e) => setTytSosyal(e.target.value === "" ? "" : Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Matematik (Max 40)</label>
                <input
                  type="number" step="0.25" min="0" max="40"
                  value={tytMat}
                  onChange={(e) => setTytMat(e.target.value === "" ? "" : Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Fen (Max 20)</label>
                <input
                  type="number" step="0.25" min="0" max="20"
                  value={tytFen}
                  onChange={(e) => setTytFen(e.target.value === "" ? "" : Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white outline-none focus:border-blue-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* AYT Kısmı */}
          <div>
            <h2 className="text-lg font-bold text-blue-300 mb-3 border-b border-slate-700 pb-1">AYT Netleri</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-400 mb-1">
                  {field === "Sayısal" ? "AYT Matematik (Max 40)" : field === "Eşit Ağırlık" ? "AYT Matematik (Max 40)" : field === "Sözel" ? "Türk Dili ve Edebiyatı (Max 24)" : "Yabancı Dil (Max 80)"}
                </label>
                <input
                  type="number" step="0.25" min="0" max="80"
                  value={ayt1}
                  onChange={(e) => setAyt1(e.target.value === "" ? "" : Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">
                  {field === "Sayısal" ? "AYT Fen Bilimleri (Max 40)" : field === "Eşit Ağırlık" ? "AYT Tarih-Coğrafya (Max 40)" : "Sosyal Bilimler-2 (Max 33)"}
                </label>
                <input
                  type="number" step="0.25" min="0" max="80"
                  value={ayt2}
                  onChange={(e) => setAyt2(e.target.value === "" ? "" : Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white outline-none focus:border-blue-500"
                  required
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 rounded-lg transition-colors shadow-lg shadow-blue-600/20 text-lg"
          >
            Detaylı Rakiplerimi ve Sıralamamı Hesapla
          </button>
        </form>

        {/* Sonuç Kartları */}
        {results && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-200">Yıllara Göre Tahmini Sonuçlar</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {results.map((res) => (
                <div key={res.year} className="bg-slate-800 p-6 rounded-xl border border-slate-700 space-y-4">
                  <div className="flex justify-between items-center border-b border-slate-700 pb-3">
                    <span className="text-lg font-bold text-blue-400">{res.year} Simülasyonu</span>
                    <span className="text-xl font-extrabold text-green-400">
                      ~{res.estimatedRank.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">Simüle Edilen Ham Puan: <span className="text-white font-bold">{res.score}</span></p>

                  <div>
                    <h3 className="text-xs font-semibold text-slate-400 mb-2">Hedeflenebilecek Bölümler:</h3>
                    <ul className="space-y-2 text-xs">
                      {res.targetUniversities.map((uni, idx) => (
                        <li key={idx} className="flex justify-between bg-slate-900 p-2 rounded border border-slate-800">
                          <span>{uni.university} ({uni.department})</span>
                          <span className="text-slate-400">{uni.baseRank.toLocaleString()}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}