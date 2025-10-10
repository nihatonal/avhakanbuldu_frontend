import { Gavel, Landmark, Home, Building2 } from "lucide-react";

export const practicesData = [
  {
    icon: Gavel,
    title: "Ceza Hukuku Danışmanlığı",
    slug: "ceza-hukuku",
    description:
      "Ceza hukuku konularında bilgi ve danışmanlık hizmeti sunuyorum. Haklarınız ve süreçler hakkında kapsamlı rehberlik sağlıyorum.",
    services: [
      "Ceza hukuku süreçleri hakkında bilgilendirme",
      "Hak ve yükümlülüklerin açıklanması",
      "Olası hukuki adımların rehberliği",
      "Hukuki sorulara yanıt ve yönlendirme",
    ],
    experience: "10+ yıl hukuk bilgisi ve danışmanlık deneyimi",
    detailTitle: "Ceza Hukuku Hakkında Detaylı Bilgilendirme",
    detailDescription:
      "Ceza hukuku konularında kapsamlı bilgi sağlıyorum. Tutuklama, gözaltı, suç tipleri ve olası hukuki süreçler hakkında danışmanlık veriyorum. Davalar için aktif temsil hizmeti sunulmamaktadır.",
    detailedServices: [
      {
        title: "Ceza Hukuku Süreçleri",
        description:
          "Tutuklama, gözaltı, soruşturma ve kovuşturma süreçlerinin nasıl işlediğini detaylı şekilde açıklıyorum.",
      },
      {
        title: "Haklar ve Yükümlülükler",
        description:
          "Şüpheli ve mağdur hakları, savunma hakları ve yasal prosedürler hakkında bilgilendirme yapıyorum.",
      },
      {
        title: "Danışmanlık ve Sorular",
        description:
          "Her türlü hukuki sorunuz için rehberlik sağlıyor, alternatif çözüm yollarını açıklıyorum.",
      },
    ],
    faq: [
      {
        question: "Gözaltına alındığımda neler yapmalıyım?",
        answer:
          "Hukuki haklarınızı bilmek çok önemlidir. Kimlik bilgilerinizi doğrulamak, avukat talep etmek ve ifadelerinizi kayda geçirmek kritik adımlardır.",
      },
      {
        question: "Tutuklama süreci ne kadar sürer?",
        answer:
          "Tutuklama süresi olayın niteliğine göre değişir. Süreç ve haklar hakkında detaylı bilgi almak için danışmanlık sağlayabilirim.",
      },
      {
        question: "Ceza hukuku ile ilgili sorularımı nasıl iletebilirim?",
        answer:
          "Telefon veya e-posta aracılığıyla sorularınızı iletebilir, hızlı ve doğru bilgiler alabilirsiniz.",
      },
    ],
    examples: [
      {
        case: "Bir kişi gözaltına alındığında haklarını bilmiyordu. Danışmanlık ile hakları anlatıldı, süreç adım adım açıklanarak kişi bilinçlendirildi.",
      },
      {
        case: "Suç isnadı ile ilgili bilgi almak isteyen bir müvekkil, süreçlerin nasıl ilerlediğini ve olası sonuçları danışmanlık ile öğrendi.",
      },
    ],
  },
  {
    icon: Landmark,
    title: "İdare Hukuku Danışmanlığı",
    slug: "idare-hukuku",
    description:
      "İdare hukuku ile ilgili bilgi ve danışmanlık sağlıyorum. İdari işlemler, kararlar ve haklarınız hakkında rehberlik sunuyorum.",
    services: [
      "İdari işlemler ve süreçler hakkında bilgilendirme",
      "Haklarınız ve yükümlülükler hakkında açıklama",
      "Dilekçe, itiraz ve başvuru süreçlerinin rehberliği",
      "Hukuki sorulara yanıt ve yönlendirme",
    ],
    experience: "9+ yıl hukuk bilgisi ve danışmanlık deneyimi",
    detailTitle: "İdare Hukuku Hakkında Detaylı Bilgilendirme",
    detailDescription:
      "İdare hukuku alanında kararlar, idari işlemler ve itiraz mekanizmaları hakkında detaylı bilgi sağlıyorum. Henüz dava veya temsil hizmeti sunulmamaktadır.",
    detailedServices: [
      {
        title: "İdari İşlemler ve Kararlar",
        description:
          "İdarenin aldığı kararlar ve yaptıkları işlemler hakkında kapsamlı bilgilendirme yapıyorum.",
      },
      {
        title: "Haklar ve Yükümlülükler",
        description:
          "İdari haklarınız, başvuru ve itiraz yolları hakkında rehberlik sağlıyorum.",
      },
      {
        title: "Danışmanlık ve Soru-Cevap",
        description:
          "Sorularınızı alıyor ve size en doğru bilgilendirmeyi sunuyorum.",
      },
    ],
    faq: [
      {
        question: "İdari itiraz nasıl yapılır?",
        answer:
          "İtirazın süresi, formatı ve içeriği kanunda belirtilmiştir. Danışmanlık ile adım adım yönlendirme sağlayabilirim.",
      },
      {
        question: "Ruhsat iptali durumunda haklarım nelerdir?",
        answer:
          "Ruhsat iptali ve benzeri kararlar karşısında haklarınızı anlamak kritik önemdedir. Detaylı bilgi için danışmanlık talep edebilirsiniz.",
      },
      {
        question: "İdari süreçler ne kadar sürer?",
        answer:
          "Süreçler olayın niteliğine göre değişiklik gösterir. Süreç takibi ve rehberlik sağlayabilirim.",
      },
    ],
    examples: [
      {
        case: "Bir müvekkil ruhsat iptali işlemi ile karşılaştı. Danışmanlık ile sürecin adımları ve hakları detaylı şekilde açıklandı.",
      },
      {
        case: "İdari başvuru yapmak isteyen kişi, hangi belgelerin gerekli olduğunu ve sürecin nasıl işlediğini danışmanlık ile öğrendi.",
      },
    ],
  },
  {
    icon: Building2,
    title: "İş Hukuku Danışmanlığı",
    slug: "is-hukuku",
    description:
      "İş hukuku alanında bilgilendirme ve danışmanlık sağlıyorum. İş sözleşmeleri, işten çıkarılma ve iş uyuşmazlıkları hakkında rehberlik sunuyorum.",
    services: [
      "İş hukuku süreçleri ve haklar hakkında bilgilendirme",
      "İş sözleşmeleri ve işten çıkarılma prosedürleri hakkında rehberlik",
      "İş uyuşmazlıkları ve hak talepleri hakkında danışmanlık",
      "Hukuki sorulara yanıt ve çözüm önerileri",
    ],
    experience: "7+ yıl hukuk bilgisi ve danışmanlık deneyimi",
    detailTitle: "İş Hukuku Hakkında Detaylı Bilgilendirme",
    detailDescription:
      "İş hukuku konularında bilgilendirme sağlıyorum. İş sözleşmeleri, işten çıkarılma, fazla mesai, tazminat hakları gibi konularda rehberlik sunuyorum. Henüz dava veya temsil hizmeti sunulmamaktadır.",
    detailedServices: [
      {
        title: "İş Sözleşmeleri ve Haklar",
        description:
          "Çalışan ve işveren hakları, sözleşme türleri ve iş yerinde uyulması gereken yasal prosedürler hakkında bilgilendirme yapıyorum.",
      },
      {
        title: "İşten Çıkarılma ve Tazminat",
        description:
          "Haksız işten çıkarılma, kıdem ve ihbar tazminatı gibi konularda danışmanlık ve süreç rehberliği sağlıyorum.",
      },
      {
        title: "Danışmanlık ve Sorular",
        description:
          "Her türlü iş hukuku sorusunu alıyor, adım adım çözüm önerileri sunuyorum.",
      },
    ],
    faq: [
      {
        question: "İşten çıkarıldım, haklarım nelerdir?",
        answer:
          "Kıdem ve ihbar tazminatı başta olmak üzere haklarınızı bilmek çok önemlidir. Süreç ve haklar hakkında detaylı bilgi için danışmanlık talep edebilirsiniz.",
      },
      {
        question: "Fazla mesai ücretim ödenmedi, ne yapmalıyım?",
        answer:
          "Fazla mesai hesaplamaları ve yasal haklarınızı açıklıyor, çözüm yollarını sunuyorum.",
      },
      {
        question: "İş sözleşmemi anlamıyorum, ne yapabilirim?",
        answer:
          "Sözleşmenizi adım adım inceleyerek haklarınızı ve yükümlülüklerinizi açıklayabilirim.",
      },
    ],
    examples: [
      {
        case: "Bir çalışan işten çıkarıldı ve tazminat haklarını bilmiyordu. Danışmanlık ile hakları açıklandı ve süreç planlandı.",
      },
      {
        case: "Fazla mesai ücreti konusunda anlaşmazlık yaşayan kişi, haklarını öğrenip işverenle doğru adımları atmak için danışmanlık aldı.",
      },
    ],
  },
  {
    icon: Home,
    title: "Medeni Hukuk Danışmanlığı",
    slug: "medeni-hukuk",
    description:
      "Medeni hukuk konularında bilgilendirme ve danışmanlık sağlıyorum. Miras, sözleşme ve taşınmaz işlemleri hakkında rehberlik sunuyorum.",
    services: [
      "Medeni hukuk süreçleri hakkında bilgilendirme",
      "Sözleşmeler, taşınmaz ve miras konularında rehberlik",
      "Hak ve yükümlülükler hakkında danışmanlık",
      "Hukuki sorulara yanıt ve çözüm önerileri",
    ],
    experience: "10+ yıl hukuk bilgisi ve danışmanlık deneyimi",
    detailTitle: "Medeni Hukuk Hakkında Detaylı Bilgilendirme",
    detailDescription:
      "Medeni hukuk alanında, miras, sözleşme, taşınmaz alım-satım ve aile hukuku konularında bilgilendirme yapıyorum. Henüz dava veya temsil hizmeti sunulmamaktadır.",
    detailedServices: [
      {
        title: "Sözleşmeler ve Taşınmaz İşlemleri",
        description:
          "Alım-satım, kiralama ve diğer taşınmaz işlemlerinde yasal süreçleri açıklıyorum.",
      },
      {
        title: "Miras ve Aile Hukuku",
        description:
          "Miras paylaşımı, vasiyet ve aile hukuku konularında bilgilendirme ve yönlendirme sağlıyorum.",
      },
      {
        title: "Danışmanlık ve Sorular",
        description:
          "Sorularınızı alıyor, her aşamada rehberlik sağlıyor ve hukuki çözüm yollarını anlatıyorum.",
      },
    ],
    faq: [
      {
        question: "Miras paylaşımı nasıl yapılır?",
        answer:
          "Miras paylaşımı ve yasal prosedürler hakkında detaylı bilgi veriyor, haklarınızı açıklıyorum.",
      },
      {
        question: "Taşınmaz alım-satımında nelere dikkat etmeliyim?",
        answer:
          "Tapu işlemleri, sözleşmeler ve olası riskler hakkında bilgilendirme sağlıyorum.",
      },
      {
        question: "Sözleşme hazırlarken nelere dikkat etmeliyim?",
        answer:
          "Sözleşmelerde hak ve yükümlülükleri adım adım açıklıyor, dikkat edilmesi gereken hususları belirtiyorum.",
      },
    ],
    examples: [
      {
        case: "Bir miras paylaşımı sürecinde danışan, haklarını ve yasal prosedürü öğrenerek bilinçli adımlar attı.",
      },
      {
        case: "Taşınmaz alım-satımında sözleşme hazırlamak isteyen kişi, riskler ve haklar konusunda danışmanlık aldı.",
      },
    ],
  },
  // Diğer alanlar (İş Hukuku, Medeni Hukuk) için de aynı mantıkla detaylandırabilirsiniz
];
