}export interface BranchData {
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
  // Sayısal
  { id: '1', name: 'Bilgisayar Mühendisliği', category: 'Sayisal', university: 'İTÜ', city: 'İstanbul', minScore2024: 532.4, minRank2024: 1250, minRank2023: 1400 },
  { id: '2', name: 'Tıp', category: 'Sayisal', university: 'Hacettepe Üniversitesi', city: 'Ankara', minScore2024: 524.1, minRank2024: 2100, minRank2023: 2050 },
  { id: '3', name: 'Elektrik-Elektronik Mühendisliği', category: 'Sayisal', university: 'ODTÜ', city: 'Ankara', minScore2024: 528.8, minRank2024: 1650, minRank2023: 1750 },
  { id: '4', name: 'Makine Mühendisliği', category: 'Sayisal', university: 'Yıldız Teknik Üniversitesi', city: 'İstanbul', minScore2024: 485.2, minRank2024: 18500, minRank2023: 19200 },
  { id: '5', name: 'Yazılım Mühendisliği', category: 'Sayisal', university: 'Muğla Sıtkı Koçman Üni.', city: 'Muğla', minScore2024: 435.6, minRank2024: 62000, minRank2023: 65000 },
  
  // Eşit Ağırlık
  { id: '6', name: 'Hukuk', category: 'EsitAgirlik', university: 'Galatasaray Üniversitesi', city: 'İstanbul', minScore2024: 495.1, minRank2024: 350, minRank2023: 380 },
  { id: '7', name: 'Hukuk', category: 'EsitAgirlik', university: 'Ankara Üniversitesi', city: 'Ankara', minScore2024: 442.8, minRank2024: 4200, minRank2023: 4500 },
  { id: '8', name: 'İşletme', category: 'EsitAgirlik', university: 'Boğaziçi Üniversitesi', city: 'İstanbul', minScore2024: 510.3, minRank2024: 600, minRank2023: 650 },
  { id: '9', name: 'Psikoloji', category: 'EsitAgirlik', university: 'Ege Üniversitesi', city: 'İzmir', minScore2024: 395.4, minRank2024: 28000, minRank2023: 31000 },
  
  // Sözel
  { id: '10', name: 'Özel Eğitim Öğretmenliği', category: 'Sozel', university: 'Anadolu Üniversitesi', city: 'Eskişehir', minScore2024: 412.5, minRank2024: 4800, minRank2023: 5100 },
  { id: '11', name: 'Tarih', category: 'Sozel', university: 'İstanbul Üniversitesi', city: 'İstanbul', minScore2024: 365.2, minRank2024: 32000, minRank2023: 35000 }
];

// Gerçek ÖSYM Ham Puan Katsayıları ve Tabut Sıralama Eğrisi
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
  // ÖSYM Taban Puanı (Her adaya verilen 100 puan)
  const BASE_SCORE = 100;

  // TYT Katsayıları (ÖSYM standart ağırlıkları)
  const tytScore = 
    nets.tytTurkce * 3.3 + 
    nets.tytSosyal * 3.4 + 
    nets.tytMatematik * 3.3 + 
    nets.tytFen * 3.4;

  // AYT Katsayıları
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

  // OBP Katkısı (Diploma Notu * 5 * 0.6)
  const obpContribution = (nets.obp || 80) * 0.6;

  // Toplam Puanlar (TYT %40 + AYT %60 + OBP)
  const sayYKS = BASE_SCORE + (tytScore * 0.4) + (aytSayScore * 0.6) + obpContribution;
  const eaYKS = BASE_SCORE + (tytScore * 0.4) + (aytEaScore * 0.6) + obpContribution;

  // Puan-Sıralama Algoritması Simülasyonu
  const sayRank = Math.max(1, Math.round(Math.pow((560 - sayYKS) / 0.72, 2.3)));
  const eaRank = Math.max(1, Math.round(Math.pow((560 - eaYKS) / 0.75, 2.35)));

  return {
    sayPuan: Number(sayYKS.toFixed(2)),
    saySiralama: sayRank,
    eaPuan: Number(eaYKS.toFixed(2)),
    eaSiralama: eaRank,
  };
}