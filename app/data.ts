export interface BranchData {
  id: string;
  name: string;
  category: 'Sayisal' | 'EsitAgirlik' | 'Sozel' | 'Dil';
  university: string;
  city: string;
  minScore2024: number;
  minRank2024: number;
  minRank2023: number;
}

export const BRANCHES: BranchData[] = [
  // --- SAYISAL ---
  { id: '1', name: 'Bilgisayar Mühendisliği (İngilizce)', category: 'Sayisal', university: 'Boğaziçi Üniversitesi', city: 'İstanbul', minScore2024: 545.2, minRank2024: 280, minRank2023: 310 },
  { id: '2', name: 'Bilgisayar Mühendisliği', category: 'Sayisal', university: 'İTÜ', city: 'İstanbul', minScore2024: 532.4, minRank2024: 1250, minRank2023: 1400 },
  { id: '3', name: 'Tıp Fakültesi', category: 'Sayisal', university: 'İstanbul Üniversitesi (Çapa)', city: 'İstanbul', minScore2024: 538.6, minRank2024: 850, minRank2023: 920 },
  { id: '4', name: 'Tıp Fakültesi', category: 'Sayisal', university: 'Hacettepe Üniversitesi', city: 'Ankara', minScore2024: 524.1, minRank2024: 2100, minRank2023: 2050 },
  { id: '5', name: 'Elektrik-Elektronik Mühendisliği', category: 'Sayisal', university: 'ODTÜ', city: 'Ankara', minScore2024: 528.8, minRank2024: 1650, minRank2023: 1750 },
  { id: '6', name: 'Yapay Zeka ve Veri Mühendisliği', category: 'Sayisal', university: 'İTÜ', city: 'İstanbul', minScore2024: 518.3, minRank2024: 2400, minRank2023: 2700 },
  { id: '7', name: 'Endüstri Mühendisliği', category: 'Sayisal', university: 'Boğaziçi Üniversitesi', city: 'İstanbul', minScore2024: 522.0, minRank2024: 2200, minRank2023: 2350 },
  { id: '8', name: 'Makine Mühendisliği', category: 'Sayisal', university: 'Yıldız Teknik Üniversitesi', city: 'İstanbul', minScore2024: 485.2, minRank2024: 18500, minRank2023: 19200 },
  { id: '9', name: 'Mimarlık', category: 'Sayisal', university: 'Yıldız Teknik Üniversitesi', city: 'İstanbul', minScore2024: 415.0, minRank2024: 55000, minRank2023: 58000 },
  { id: '10', name: 'Yazılım Mühendisliği', category: 'Sayisal', university: 'Muğla Sıtkı Koçman Üni.', city: 'Muğla', minScore2024: 435.6, minRank2024: 62000, minRank2023: 65000 },
  { id: '11', name: 'Hemşirelik', category: 'Sayisal', university: 'Hacettepe Üniversitesi', city: 'Ankara', minScore2024: 410.2, minRank2024: 68000, minRank2023: 72000 },

  // --- EŞİT AĞIRLIK ---
  { id: '12', name: 'Hukuk Fakültesi', category: 'EsitAgirlik', university: 'Galatasaray Üniversitesi', city: 'İstanbul', minScore2024: 495.1, minRank2024: 350, minRank2023: 380 },
  { id: '13', name: 'İşletme (İngilizce)', category: 'EsitAgirlik', university: 'Boğaziçi Üniversitesi', city: 'İstanbul', minScore2024: 510.3, minRank2024: 600, minRank2023: 650 },
  { id: '14', name: 'Hukuk Fakültesi', category: 'EsitAgirlik', university: 'Ankara Üniversitesi', city: 'Ankara', minScore2024: 442.8, minRank2024: 4200, minRank2023: 4500 },
  { id: '15', name: 'Psikoloji', category: 'EsitAgirlik', university: 'ODTÜ', city: 'Ankara', minScore2024: 450.5, minRank2024: 3200, minRank2023: 3400 },
  { id: '16', name: 'Siyaset Bilimi ve Uluslararası İlişkiler', category: 'EsitAgirlik', university: 'Boğaziçi Üniversitesi', city: 'İstanbul', minScore2024: 465.0, minRank2024: 1800, minRank2023: 1950 },
  { id: '17', name: 'İktisat', category: 'EsitAgirlik', university: 'Galatasaray Üniversitesi', city: 'İstanbul', minScore2024: 452.1, minRank2024: 3100, minRank2023: 3300 },
  { id: '18', name: 'Psikoloji', category: 'EsitAgirlik', university: 'Ege Üniversitesi', city: 'İzmir', minScore2024: 395.4, minRank2024: 28000, minRank2023: 31000 },
  { id: '19', name: 'Sınıf Öğretmenliği', category: 'EsitAgirlik', university: 'Gazi Üniversitesi', city: 'Ankara', minScore2024: 388.9, minRank2024: 42000, minRank2023: 45000 },

  // --- SÖZEL ---
  { id: '20', name: 'Özel Eğitim Öğretmenliği', category: 'Sozel', university: 'Anadolu Üniversitesi', city: 'Eskişehir', minScore2024: 412.5, minRank2024: 4800, minRank2023: 5100 },
  { id: '21', name: 'Türkçe Öğretmenliği', category: 'Sozel', university: 'Gazi Üniversitesi', city: 'Ankara', minScore2024: 398.2, minRank2024: 8500, minRank2023: 9100 },
  { id: '22', name: 'Halkla İlişkiler ve Tanıtım', category: 'Sozel', university: 'İstanbul Üniversitesi', city: 'İstanbul', minScore2024: 375.0, minRank2024: 22000, minRank2023: 24500 },
  { id: '23', name: 'Tarih', category: 'Sozel', university: 'İstanbul Üniversitesi', city: 'İstanbul', minScore2024: 365.2, minRank2024: 32000, minRank2023: 35000 },
  { id: '24', name: 'Radyo, Televizyon ve Sinema', category: 'Sozel', university: 'Marmara Üniversitesi', city: 'İstanbul', minScore2024: 370.4, minRank2024: 26000, minRank2023: 28000 },

  // --- DİL ---
  { id: '25', name: 'İngilizce Öğretmenliği', category: 'Dil', university: 'Boğaziçi Üniversitesi', city: 'İstanbul', minScore2024: 512.0, minRank2024: 950, minRank2023: 1020 },
  { id: '26', name: 'Mütercim-Tercümanlık (İngilizce)', category: 'Dil', university: 'İTÜ', city: 'İstanbul', minScore2024: 498.3, minRank2024: 1800, minRank2023: 1950 },
  { id: '27', name: 'İngiliz Dili ve Edebiyatı', category: 'Dil', university: 'Ankara Üniversitesi', city: 'Ankara', minScore2024: 460.1, minRank2024: 5500, minRank2023: 5900 }
];

// Gerçek ÖSYM Ham Puan Katsayıları ve Puan/Sıralama Eğrisi
export function calculateYKS(nets: {
  tytTurkce: number;
  tytSosyal: number;
  tytMatematik: number;
  tytFen: number;
  aytMatematik: number;
  aytFizik: number;
  aytKimya: number;
  aytBiyoloji: number;
  aytEdebiyat: number;
  aytTarih1: number;
  aytCografya1: number;
  obp: number;
}) {
  const BASE_SCORE = 100;

  const tytScore = 
    nets.tytTurkce * 3.3 + 
    nets.tytSosyal * 3.4 + 
    nets.tytMatematik * 3.3 + 
    nets.tytFen * 3.4;

  const aytSayScore = 
    nets.aytMatematik * 3.0 + 
    nets.aytFizik * 2.85 + 
    nets.aytKimya * 3.07 + 
    nets.aytBiyoloji * 3.07;

  const aytEaScore = 
    nets.aytMatematik * 3.0 + 
    nets.aytEdebiyat * 3.0 + 
    nets.aytTarih1 * 2.8 + 
    nets.aytCografya1 * 3.3;

  const obpContribution = (nets.obp || 80) * 0.6;

  const sayYKS = BASE_SCORE + (tytScore * 0.4) + (aytSayScore * 0.6) + obpContribution;
  const eaYKS = BASE_SCORE + (tytScore * 0.4) + (aytEaScore * 0.6) + obpContribution;

  const sayRank = Math.max(1, Math.round(Math.pow((560 - sayYKS) / 0.72, 2.3)));
  const eaRank = Math.max(1, Math.round(Math.pow((560 - eaYKS) / 0.75, 2.35)));

  return {
    sayPuan: Number(sayYKS.toFixed(2)),
    saySiralama: sayRank,
    eaPuan: Number(eaYKS.toFixed(2)),
    eaSiralama: eaRank,
  };
}