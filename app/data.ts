export interface DepartmentTarget {
  university: string;
  department: string;
  city: string;
  baseRank: number;
}

export interface YksResult {
  year: number;
  estimatedRank: number;
  score: number;
  targetUniversities: DepartmentTarget[];
}

export function calculateDetailedYksRank(
  field: string,
  tytTurkce: number,
  tytSosyal: number,
  tytMat: number,
  tytFen: number,
  ayt1: number, // Sayısal: Mat, EA: Mat, Sözel: Edebiyat vb.
  ayt2: number  // Sayısal: Fizik/Kimya/Biyo, EA: Tarih/Coğrafya vb.
): YksResult[] {
  // Ders netlerine göre ağırlıklı ham puan simülasyonu
  const tytTotal = (tytTurkce * 3.3) + (tytSosyal * 3.4) + (tytMat * 3.3) + (tytFen * 3.4);
  const aytTotal = (ayt1 * 3.0) + (ayt2 * 3.0);
  const rawScore = Math.min(500, Math.max(100, (tytTotal * 0.4) + (aytTotal * 0.6) + 100));

  const sampleDb: Record<string, DepartmentTarget[]> = {
    "Sayısal": [
      { university: "İTÜ", department: "Bilgisayar Mühendisliği", city: "İstanbul", baseRank: 1200 },
      { university: "ODTÜ", department: "Endüstri Mühendisliği", city: "Ankara", baseRank: 4500 },
      { university: "Hacettepe", department: "Tıp", city: "Ankara", baseRank: 2100 },
      { university: "Yıldız Teknik", department: "Yazılım Mühendisliği", city: "İstanbul", baseRank: 12500 },
      { university: "Ege Üniversitesi", department: "Makine Mühendisliği", city: "İzmir", baseRank: 38000 },
      { university: "Gazi Üniversitesi", department: "Elektrik-Elektronik Müh.", city: "Ankara", baseRank: 28000 },
    ],
    "Eşit Ağırlık": [
      { university: "Boğaziçi", department: "İktisat", city: "İstanbul", baseRank: 800 },
      { university: "Galatasaray", department: "Hukuk", city: "İstanbul", baseRank: 1100 },
      { university: "Ankara Üniversitesi", department: "Hukuk", city: "Ankara", baseRank: 4200 },
      { university: "Marmara", department: "İşletme (İngilizce)", city: "İstanbul", baseRank: 18000 },
      { university: "İstanbul Üniversitesi", department: "Psikoloji", city: "İstanbul", baseRank: 25000 },
    ],
    "Sözel": [
      { university: "Boğaziçi", department: "Tarih", city: "İstanbul", baseRank: 1500 },
      { university: "İstanbul Üniversitesi", department: "Radyo, TV ve Sinema", city: "İstanbul", baseRank: 12000 },
      { university: "Marmara", department: "Özel Eğitim Öğretmenliği", city: "İstanbul", baseRank: 8500 },
    ],
    "Dil": [
      { university: "Boğaziçi", department: "İngiliz Dili ve Edebiyatı", city: "İstanbul", baseRank: 900 },
      { university: "Hacettepe", department: "Mütercim Tercümanlık", city: "Ankara", baseRank: 2400 },
    ]
  };

  const departments = sampleDb[field] || sampleDb["Sayısal"];

  const yearsConfig = [
    { year: 2024, mult: 1100, scoreOffset: 0 },
    { year: 2023, mult: 1250, scoreOffset: -6 },
    { year: 2022, mult: 1050, scoreOffset: +4 },
  ];

  return yearsConfig.map(({ year, mult, scoreOffset }) => {
    const calcScore = Math.min(500, Math.max(100, Math.round(rawScore + scoreOffset)));
    const estimatedRank = Math.max(100, Math.round((500 - calcScore) * mult));
    const targets = departments.filter(d => d.baseRank >= estimatedRank * 0.5);

    return {
      year,
      estimatedRank,
      score: calcScore,
      targetUniversities: targets.length > 0 ? targets : departments.slice(-3)
    };
  });
}