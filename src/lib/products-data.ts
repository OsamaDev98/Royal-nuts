/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ProductData {
  slug: string;
  category: string;
  nameAr: string;
  nameEn: string;
  descAr: string;
  descEn: string;
  featuresAr: string[];
  featuresEn: string[];
  nutritionAr: Record<string, string>;
  nutritionEn: Record<string, string>;
  sizesAr: string[];
  sizesEn: string[];
  usesAr: string[];
  usesEn: string[];
  image: string;
  price: string;
  isFeatured: boolean;
}

export const staticProducts: ProductData[] = [
  {
    slug: "raw-peanuts",
    category: "peanut",
    nameAr: "فول سوداني خام فاخر",
    nameEn: "Premium Raw Peanuts",
    descAr: "فول سوداني خام طازج ومفرز إلكترونياً، غني بالبروتين والزيوت الطبيعية المفيدة، منتقى من أفضل المزارع وخالٍ تماماً من العيوب والشوائب.",
    descEn: "Fresh raw peanuts, electronically sorted and rich in protein and natural oils. Selected from the best farms and completely free from defects and impurities.",
    featuresAr: ["فرز إلكتروني دقيق للغاية", "قيمة غذائية عالية ونسبة زيت مثالية", "حبات متناسقة الحجم والوزن", "طبيعي 100% بدون أي إضافات"],
    featuresEn: ["Highly precise electronic sorting", "High nutritional value and optimal oil content", "Consistent size and weight", "100% natural with no additives"],
    nutritionAr: { "السعرات الحرارية": "567 سعرة", "البروتين": "25.8 جم", "الدهون": "49.2 جم", "الكربوهيدرات": "16.1 جم", "الألياف": "8.5 جم" },
    nutritionEn: { "Calories": "567 kcal", "Protein": "25.8g", "Fat": "49.2g", "Carbs": "16.1g", "Fiber": "8.5g" },
    sizesAr: ["500 جم", "1 كجم", "10 كجم", "25 كجم (عبوة تجارية)"],
    sizesEn: ["500g", "1kg", "10kg", "25kg (Bulk Packaging)"],
    usesAr: ["الحلويات والمشروبات الشرقية والغربية", "صناعة المخبوزات والطهي", "عصر الزيوت الطبيعية والمكملات الغذائية"],
    usesEn: ["Eastern and Western desserts and beverages", "Baking and cooking purposes", "Cold pressing for oils and dietary supplements"],
    image: "/images/raw_peanuts.png",
    price: "حسب الكمية والطلب / Custom Pricing",
    isFeatured: true
  },
  {
    slug: "roasted-peanuts",
    category: "peanut",
    nameAr: "فول سوداني محمص فاخر",
    nameEn: "Premium Roasted Peanuts",
    descAr: "فول سوداني محمص في أحدث أفران الهواء الساخن آلياً بالكامل. تحميص متجانس ومقرمش يحافظ على نكهة الفول الأصلية الغنية، متوفر مملح وغير مملح.",
    descEn: "Fully automated oven-roasted peanuts. Homogeneous and crunchy roasting that preserves the rich original peanut flavor. Available in salted and unsalted options.",
    featuresAr: ["محمص بالهواء الساخن بدون زيوت إضافية", "مقرمش وطازج بشكل دائم", "خالٍ من الحبيبات المحترقة بفضل الفرز الضوئي", "معبأ في بيئة صحية محكمة الإغلاق"],
    featuresEn: ["Hot-air roasted with no extra oils", "Always crunchy and fresh", "No burnt grains thanks to optical sorting", "Packed in a highly hygienic, sealed environment"],
    nutritionAr: { "السعرات الحرارية": "585 سعرة", "البروتين": "24.4 جم", "الدهون": "49.7 جم", "الكربوهيدرات": "21.5 جم", "الألياف": "8.0 جم" },
    nutritionEn: { "Calories": "585 kcal", "Protein": "24.4g", "Fat": "49.7g", "Carbs": "21.5g", "Fiber": "8.0g" },
    sizesAr: ["250 جم", "500 جم", "1 كجم", "25 كجم (عبوة تجارية)"],
    sizesEn: ["250g", "500g", "1kg", "25kg (Bulk Packaging)"],
    usesAr: ["للتناول المباشر كوجبة خفيفة وصحية", "تزيين الحلويات والمخبوزات", "تحضير المقرمشات والصوصات الفاخرة"],
    usesEn: ["Direct consumption as a healthy snack", "Confectionery and bakery topping", "Preparing crunchy appetizers and luxury sauces"],
    image: "/images/roasted_peanuts.png",
    price: "حسب الكمية والطلب / Custom Pricing",
    isFeatured: true
  },
  {
    slug: "peanut-butter",
    category: "butter",
    nameAr: "زبدة فول سوداني طبيعية 100%",
    nameEn: "100% Natural Peanut Butter",
    descAr: "زبدة فول سوداني مصنوعة بالكامل من حبات الفول السوداني الفاخرة المحمصة بعناية. خالية تماماً من الزيوت المهدرجة، السكر المضاف، المواد الحافظة، أو الجلوتين. طعم طبيعي غني وقوام كريمي ناعم.",
    descEn: "100% natural peanut butter made entirely from premium carefully roasted peanuts. Completely free from hydrogenated oils, added sugar, preservatives, or gluten. Rich natural taste with a smooth creamy texture.",
    featuresAr: ["طبيعية 100% بدون أي زيوت مهدرجة", "خالية من السكر المضاف والمواد الحافظة والجلوتين", "غنية بالدهون الصحية والبروتينات للرياضيين", "مصنوعة من فول سوداني مفرز ومعالج بعناية فائقة"],
    featuresEn: ["100% natural with no hydrogenated oils", "No added sugar, preservatives, or gluten", "Rich in healthy fats and protein, ideal for athletes", "Processed from premium sorted peanuts"],
    nutritionAr: { "السعرات الحرارية": "588 سعرة", "البروتين": "25.0 جم", "الدهون": "50.0 جم", "الكربوهيدرات": "20.0 جم", "الألياف": "6.0 جم" },
    nutritionEn: { "Calories": "588 kcal", "Protein": "25.0g", "Fat": "50.0g", "Carbs": "20.0g", "Fiber": "6.0g" },
    sizesAr: ["350 جم (برطمان)", "500 جم (برطمان)", "1 كجم (علبة)", "5 كجم (عبوة تجارية للمخابز)"],
    sizesEn: ["350g (Jar)", "500g (Jar)", "1kg (Tub)", "5kg (Commercial Bucket)"],
    usesAr: ["الفطور والوجبات الخفيفة الصحية", "صناعة العصائر والمشروبات الرياضية عالية السعرات", "صناعة الحلويات والمخبوزات الصحية"],
    usesEn: ["Healthy breakfast and snacks", "High-calorie sports smoothies and shakes", "Confectionery and healthy bakeries"],
    image: "/images/peanut_butter.png",
    price: "حسب الكمية والطلب / Custom Pricing",
    isFeatured: true
  },
  {
    slug: "sesame-tahini",
    category: "tahini",
    nameAr: "طحينة سمسم فاخرة",
    nameEn: "Premium Sesame Tahini",
    descAr: "طحينة سمسم بيضاء نقية 100% مصنوعة من بذور السمسم الفاخرة بعد تنظيفها وتقشيرها وتحميصها بدقة متناهية وعصرها على البارد. بدون إضافة أي دقيق أو زيوت نباتية أخرى.",
    descEn: "100% pure white sesame tahini made from premium sesame seeds after washing, hulling, roasting, and cold-pressing. Free from added flour or vegetable oils.",
    featuresAr: ["سمسم نقي 100% بدون دقيق أو إضافات", "قوام مثالي وطعم سمسم أصيل غني", "طبيعية بدون أي مواد حافظة أو مبيضات", "مصنعة بأحدث خطوط إنتاج الطحينة المغلقة صحياً"],
    featuresEn: ["100% pure sesame, no added flour or starches", "Perfect texture and rich authentic sesame taste", "Natural with no bleaching agents or preservatives", "Produced in a state-of-the-art closed hygienic line"],
    nutritionAr: { "السعرات الحرارية": "595 سعرة", "البروتين": "17.8 جم", "الدهون": "53.7 جم", "الكربوهيدرات": "21.1 جم", "الألياف": "9.3 جم" },
    nutritionEn: { "Calories": "595 kcal", "Protein": "17.8g", "Fat": "53.7g", "Carbs": "21.1g", "Fiber": "9.3g" },
    sizesAr: ["400 جم (عبوة)", "800 جم (عبوة)", "5 كجم", "10 كجم (عبوة تجارية للمطاعم)"],
    sizesEn: ["400g (Pack)", "800g (Pack)", "5kg", "10kg (Commercial Bucket)"],
    usesAr: ["تحضير السلطات والمقبلات الشهية (سلطة الطحينة)", "إعداد الحلاوة الطحينية وصناعة الحلويات", "طبق جانبي مغذي يضاف للعسل والتمور"],
    usesEn: ["Preparing appetizers and dips (Tahini salad, Hummus)", "Halva and sweets manufacturing", "Nutritional side dish added to honey and dates"],
    image: "/images/sesame_tahini.png",
    price: "حسب الكمية والطلب / Custom Pricing",
    isFeatured: true
  },
  {
    slug: "white-sesame",
    category: "sesame",
    nameAr: "سمسم أبيض نقي",
    nameEn: "Pure White Sesame Seeds",
    descAr: "بذور سمسم أبيض مقشرة ونقية بنسبة تفوق 99.9%، تم فرزها وتنظيفها من الشوائب والأتربة بأحدث ماكينات الغربلة والفرز الإلكتروني، جاهزة للتصنيع والمخبوزات.",
    descEn: "Hulled white sesame seeds with a purity exceeding 99.9%. Sorted and cleaned from impurities and dust using advanced sifting and optical machines. Ready for manufacturing and baking.",
    featuresAr: ["نسبة نقاء تزيد عن 99.9%", "مقشر ومغسول ومجفف آلياً بالكامل", "حبات ممتلئة خالية من الحبيبات الضامرة", "طبيعي وخام غير محمص"],
    featuresEn: ["Purity level exceeding 99.9%", "Hulled, washed, and fully machine-dried", "Plump seeds free from shriveled grains", "Natural raw and unroasted"],
    nutritionAr: { "السعرات الحرارية": "573 سعرة", "البروتين": "17.7 جم", "الدهون": "49.7 جم", "الكربوهيدرات": "23.4 جم", "الألياف": "11.8 جم" },
    nutritionEn: { "Calories": "573 kcal", "Protein": "17.7g", "Fat": "49.7g", "Carbs": "23.4g", "Fiber": "11.8g" },
    sizesAr: ["1 كجم", "5 كجم", "25 كجم (شوال تجاري)"],
    sizesEn: ["1kg", "5kg", "25kg (Bulk Sack)"],
    usesAr: ["تزيين المخبوزات والخبز والحلويات", "مادة خام لصناعة الطحينة والحلاوة الطحينية", "إنتاج زيت السمسم على البارد"],
    usesEn: ["Topping for baked goods, bread, and pastries", "Raw material for Tahini and Halva processing", "Cold-pressing for premium sesame oil"],
    image: "/images/white_sesame.png",
    price: "حسب الكمية والطلب / Custom Pricing",
    isFeatured: false
  },
  {
    slug: "roasted-sesame",
    category: "sesame",
    nameAr: "سمسم محمص ذهبي",
    nameEn: "Roasted Golden Sesame Seeds",
    descAr: "بذور سمسم محمصة بعناية فائقة وتجانس تام للحصول على لون ذهبي جميل ورائحة عطرية قوية. يتم تحميصها آلياً وتبريدها مباشرة للحفاظ على الزيوت العطرية بداخلها.",
    descEn: "Sesame seeds roasted with high care and uniformity to achieve a beautiful golden color and a strong aromatic scent. Machine-roasted and cooled immediately to lock in the aromatic oils.",
    featuresAr: ["تحميص متجانس 100% بلون ذهبي مميز", "رائحة نفاثة ونكهة غنية جداً بالزيوت", "خالٍ تماماً من الرطوبة ومفرز إلكترونياً", "معبأ تحت تفريغ هواء لضمان الحفظ"],
    featuresEn: ["100% uniform roasting with distinct golden color", "Strong aromatic scent and rich oil flavor", "Completely moisture-free and optically sorted", "Packed under vacuum to preserve freshness"],
    nutritionAr: { "السعرات الحرارية": "565 سعرة", "البروتين": "17.0 جم", "الدهون": "48.0 جم", "الكربوهيدرات": "25.0 جم", "الألياف": "12.0 جم" },
    nutritionEn: { "Calories": "565 kcal", "Protein": "17.0g", "Fat": "48.0g", "Carbs": "25.0g", "Fiber": "12.0g" },
    sizesAr: ["1 كجم", "5 كجم", "25 كجم (شوال تجاري)"],
    sizesEn: ["1kg", "5kg", "25kg (Bulk Sack)"],
    usesAr: ["تزيين المخبوزات، الكعك، والسمسمية", "يضاف للأطباق والوجبات والمشويات لإعطاء نكهة محمصة مميزة", "صناعة الطحينة الحمراء والحلويات الشرقية"],
    usesEn: ["Decorating baked goods, cookies, and sesame candy bars", "Added to dishes, salads, and grills for a rich roasted flavor", "Manufacturing red tahini and oriental desserts"],
    image: "/images/roasted_sesame.png",
    price: "حسب الكمية والطلب / Custom Pricing",
    isFeatured: false
  },
  {
    slug: "sesame-oil",
    category: "sesame",
    nameAr: "زيت سمسم معصور على البارد",
    nameEn: "Cold-Pressed Sesame Oil",
    descAr: "زيت سمسم بكر صافي 100% معصور على البارد من بذور السمسم الفاخرة بدون تعريضه لحرارة عالية أو مذيبات كيميائية. يحتفظ بكامل فوائده الصحية ومضادات الأكسدة ورائحته القوية.",
    descEn: "100% pure virgin sesame oil cold-pressed from premium sesame seeds without heat or chemical solvents. Retains all its health benefits, antioxidants, and strong aroma.",
    featuresAr: ["عصرة أولى على البارد (بكر ممتاز)", "نقي 100% بدون أي إضافات أو زيوت خلط", "غني بمضادات الأكسدة والأحماض الدهنية غير المشبعة", "معبأ في عبوات معتمة لحمايته من الأكسدة والضوء"],
    featuresEn: ["First cold press (Extra Virgin)", "100% pure with no mixing oils or additives", "Rich in antioxidants and unsaturated fatty acids", "Bottled in dark glass/PET to protect from oxidation and light"],
    nutritionAr: { "السعرات الحرارية": "884 سعرة", "البروتين": "0.0 جم", "الدهون": "100.0 جم", "الكربوهيدرات": "0.0 جم", "الألياف": "0.0 جم" },
    nutritionEn: { "Calories": "884 kcal", "Protein": "0.0g", "Fat": "100.0g", "Carbs": "0.0g", "Fiber": "0.0g" },
    sizesAr: ["250 مل (زجاجة)", "500 مل (زجاجة)", "1 لتر (عبوة)", "5 لتر (عبوة تجارية)"],
    sizesEn: ["250ml (Bottle)", "500ml (Bottle)", "1L (Can)", "5L (Commercial Can)"],
    usesAr: ["الطهي الصحي وتحضير الأكلات الشرقية والآسيوية", "استخدامات طبية وتجميلية للشعر والبشرة", "مكمل غذائي غني بالفيتامينات"],
    usesEn: ["Healthy cooking and preparing Middle Eastern & Asian dishes", "Medicinal and cosmetic uses for hair and skin", "Vitamin-rich dietary supplement"],
    image: "/images/sesame_oil.png",
    price: "حسب الكمية والطلب / Custom Pricing",
    isFeatured: false
  },
  {
    slug: "industrial-bulk-peanuts",
    category: "industrial",
    nameAr: "منتجات الفول والسمسم للمصانع",
    nameEn: "Factory-Specific Bulk Products",
    descAr: "نوفر للمصانع الغذائية الكبرى ومصانع الحلويات والمخابز احتياجاتهم الخاصة من الفول السوداني المقشور أنصاف، الفول السوداني المجروش بأحجام مختلفة، وعجينة الفول السوداني المركزة، وكذلك السمسم الخام والطحينة الصب بكميات ضخمة.",
    descEn: "We supply major food processing plants, confectioneries, and bakeries with their specific needs of hulled halved peanuts, crushed peanuts in various sizes, concentrated peanut paste, raw sesame, and bulk tahini.",
    featuresAr: ["تجهيز حسب المواصفات المطلوبة وحجم الحبيبات", "تعبئة صناعية ضخمة مناسبة لخطوط الإنتاج", "طاقة توريدية ثابتة وموثوقة على مدار العام", "شهادات جودة ومطابقة صحية معتمدة لكل شحنة"],
    featuresEn: ["Processed according to client specifications and grain size", "Heavy duty industrial packaging suitable for production lines", "Stable and reliable supply capacity all year round", "Certified quality and health compliance documents per batch"],
    nutritionAr: { "السعرات الحرارية": "570 سعرة", "البروتين": "25.0 جم", "الدهون": "49.0 جم", "الكربوهيدرات": "18.0 جم", "الألياف": "8.0 جم" },
    nutritionEn: { "Calories": "570 kcal", "Protein": "25.0g", "Fat": "49.0g", "Carbs": "18.0g", "Fiber": "8.0g" },
    sizesAr: ["25 كجم (شوال ورقي مقوى)", "50 كجم (شوال)", "1 طن (جامبو باج)"],
    sizesEn: ["25kg (Multi-wall Paper Bag)", "50kg (Sack)", "1 Ton (Jumbo Bag)"],
    usesAr: ["صناعة الشوكولاتة والحلويات والمقرمشات", "مخابز تصنيع الحلويات والخبز الفاخر", "مصانع البسكويت والأغذية الجاهزة"],
    usesEn: ["Chocolate, confectionery, and snacks manufacturing", "Bakeries producing sweets and premium bread", "Biscuit and ready-made food factories"],
    image: "/images/industrial_peanuts.png",
    price: "أسعار خاصة للمصانع والكميات / Contract Pricing",
    isFeatured: true
  }
];

export async function getDbProducts() {
  try {
    const { db } = await import('@/lib/db');
    if (!db) return staticProducts; // no valid DB configured
    const products = await db.product.findMany({
      orderBy: { id: 'asc' }
    });
    if (products.length > 0) {
      return products.map((p: any): ProductData => ({
        slug: p.slug,
        category: p.category,
        nameAr: p.nameAr,
        nameEn: p.nameEn,
        descAr: p.descAr,
        descEn: p.descEn,
        featuresAr: p.featuresAr,
        featuresEn: p.featuresEn,
        nutritionAr: p.nutritionAr as Record<string, string>,
        nutritionEn: p.nutritionEn as Record<string, string>,
        sizesAr: p.sizesAr,
        sizesEn: p.sizesEn,
        usesAr: p.usesAr,
        usesEn: p.usesEn,
        image: p.image,
        price: p.price,
        isFeatured: p.isFeatured
      }));
    }
  } catch (error) {
    console.warn("Database query failed, using static fallback products:", error);
  }
  return staticProducts;
}

export async function getDbProductBySlug(slug: string) {
  try {
    const { db } = await import('@/lib/db');
    if (!db) return staticProducts.find(p => p.slug === slug) || null; // no valid DB configured
    const product: any = await db.product.findUnique({
      where: { slug }
    });
    if (product) {
      return {
        slug: product.slug,
        category: product.category,
        nameAr: product.nameAr,
        nameEn: product.nameEn,
        descAr: product.descAr,
        descEn: product.descEn,
        featuresAr: product.featuresAr,
        featuresEn: product.featuresEn,
        nutritionAr: product.nutritionAr as Record<string, string>,
        nutritionEn: product.nutritionEn as Record<string, string>,
        sizesAr: product.sizesAr,
        sizesEn: product.sizesEn,
        usesAr: product.usesAr,
        usesEn: product.usesEn,
        image: product.image,
        price: product.price,
        isFeatured: product.isFeatured
      } satisfies ProductData;
    }
  } catch (error) {
    console.warn(`Database query for slug ${slug} failed, using static fallback:`, error);
  }
  return staticProducts.find(p => p.slug === slug) || null;
}
