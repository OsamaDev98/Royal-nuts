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
    slug: "in-shell-peanuts",
    category: "peanut",
    nameAr: "فول سوداني بقشره فاخر",
    nameEn: "Premium In-Shell Peanuts",
    descAr:
      "فول سوداني طازج بقشرته الكاملة الطبيعية، مفرز ومنظف بعناية فائقة، مثالي للتحميص والتناول المباشر كوجبة خفيفة ومغذية.",
    descEn:
      "Fresh peanuts in their full natural shell, carefully sorted and cleaned. Perfect for roasting and direct consumption as a healthy and nutritious snack.",
    featuresAr: [
      "طبيعي 100% وبدون إضافات",
      "حبات كاملة ومنتقاة بعناية",
      "قشرة نظيفة خالية من الشوائب",
      "غني بالبروتين والمعادن والألياف",
    ],
    featuresEn: [
      "100% natural with no additives",
      "Whole, carefully selected shells",
      "Clean shell free from impurities",
      "Rich in protein, minerals, and fiber",
    ],
    nutritionAr: {
      "السعرات الحرارية": "567 سعرة",
      البروتين: "25.8 جم",
      الدهون: "49.2 جم",
      الكربوهيدرات: "16.1 جم",
      الألياف: "8.5 جم",
    },
    nutritionEn: {
      Calories: "567 kcal",
      Protein: "25.8g",
      Fat: "49.2g",
      Carbs: "16.1g",
      Fiber: "8.5g",
    },
    sizesAr: ["500 جم", "1 كجم", "10 كجم", "25 كجم (عبوة تجارية)"],
    sizesEn: ["500g", "1kg", "10kg", "25kg (Bulk Packaging)"],
    usesAr: [
      "التناول المباشر كوجبة خفيفة ومغذية",
      "التحميص المنزلي والتجاري بمختلف النكهات",
      "تجهيز عبوات التسالي والمكسرات",
    ],
    usesEn: [
      "Direct consumption as a healthy nutritious snack",
      "Home and commercial roasting with various flavors",
      "Preparing snack packs and mixed nuts",
    ],
    image: "/images/in_shell_peanuts.webp",
    price: "حسب الكمية والطلب / Custom Pricing",
    isFeatured: true,
  },
  {
    slug: "peeled-peanuts",
    category: "peanut",
    nameAr: "فول سوداني مقشر فاخر",
    nameEn: "Premium Peeled Peanuts",
    descAr:
      "فول سوداني مقشر طازج ومفرز إلكترونياً، غني بالبروتين والزيوت الطبيعية المفيدة، منتقى من أفضل المزارع وجاهز للاستخدام في المخبوزات والحلويات وصناعة زبدة الفول.",
    descEn:
      "Fresh peeled peanuts, electronically sorted and rich in protein and natural oils. Selected from the best farms and ready for baking, confectionery, and peanut butter making.",
    featuresAr: [
      "فرز إلكتروني دقيق للغاية",
      "قيمة غذائية عالية ونسبة زيت مثالية",
      "حبات متناسقة الحجم والوزن",
      "طبيعي 100% بدون أي إضافات",
    ],
    featuresEn: [
      "Highly precise electronic sorting",
      "High nutritional value and optimal oil content",
      "Consistent size and weight",
      "100% natural with no additives",
    ],
    nutritionAr: {
      "السعرات الحرارية": "567 سعرة",
      البروتين: "25.8 جم",
      الدهون: "49.2 جم",
      الكربوهيدرات: "16.1 جم",
      الألياف: "8.5 جم",
    },
    nutritionEn: {
      Calories: "567 kcal",
      Protein: "25.8g",
      Fat: "49.2g",
      Carbs: "16.1g",
      Fiber: "8.5g",
    },
    sizesAr: ["500 جم", "1 كجم", "10 كجم", "25 كجم (عبوة تجارية)"],
    sizesEn: ["500g", "1kg", "10kg", "25kg (Bulk Packaging)"],
    usesAr: [
      "الحلويات والمشروبات الشرقية والغربية",
      "صناعة المخبوزات والطهي",
      "عصر الزيوت الطبيعية والمكملات الغذائية",
    ],
    usesEn: [
      "Eastern and Western desserts and beverages",
      "Baking and cooking purposes",
      "Cold pressing for oils and dietary supplements",
    ],
    image: "/images/peeled_peanuts.webp",
    price: "حسب الكمية والطلب / Custom Pricing",
    isFeatured: true,
  },
  {
    slug: "roasted-peanuts",
    category: "peanut",
    nameAr: "فول سوداني محمص فاخر",
    nameEn: "Premium Roasted Peanuts",
    descAr:
      "فول سوداني محمص في أحدث أفران الهواء الساخن آلياً بالكامل. تحميص متجانس ومقرمش يحافظ على نكهة الفول الأصلية الغنية، متوفر مملح وغير مملح.",
    descEn:
      "Fully automated oven-roasted peanuts. Homogeneous and crunchy roasting that preserves the rich original peanut flavor. Available in salted and unsalted options.",
    featuresAr: [
      "محمص بالهواء الساخن بدون زيوت إضافية",
      "مقرمش وطازج بشكل دائم",
      "خالٍ من الحبيبات المحترقة بفضل الفرز الضوئي",
      "معبأ في بيئة صحية محكمة الإغلاق",
    ],
    featuresEn: [
      "Hot-air roasted with no extra oils",
      "Always crunchy and fresh",
      "No burnt grains thanks to optical sorting",
      "Packed in a highly hygienic, sealed environment",
    ],
    nutritionAr: {
      "السعرات الحرارية": "585 سعرة",
      البروتين: "24.4 جم",
      الدهون: "49.7 جم",
      الكربوهيدرات: "21.5 جم",
      الألياف: "8.0 جم",
    },
    nutritionEn: {
      Calories: "585 kcal",
      Protein: "24.4g",
      Fat: "49.7g",
      Carbs: "21.5g",
      Fiber: "8.0g",
    },
    sizesAr: ["250 جم", "500 جم", "1 كجم", "25 كجم (عبوة تجارية)"],
    sizesEn: ["250g", "500g", "1kg", "25kg (Bulk Packaging)"],
    usesAr: [
      "للتناول المباشر كوجبة خفيفة وصحية",
      "تزيين الحلويات والمخبوزات",
      "تحضير المقرمشات والصوصات الفاخرة",
    ],
    usesEn: [
      "Direct consumption as a healthy snack",
      "Confectionery and bakery topping",
      "Preparing crunchy appetizers and luxury sauces",
    ],
    image: "/images/roasted_peanuts.webp",
    price: "حسب الكمية والطلب / Custom Pricing",
    isFeatured: true,
  },
  {
    slug: "peanut-butter",
    category: "butter",
    nameAr: "زبدة فول سوداني طبيعية 100%",
    nameEn: "100% Natural Peanut Butter",
    descAr:
      "زبدة فول سوداني مصنوعة بالكامل من حبات الفول السوداني الفاخرة المحمصة بعناية. خالية تماماً من الزيوت المهدرجة، السكر المضاف، المواد الحافظة، أو الجلوتين. طعم طبيعي غني وقوام كريمي ناعم.",
    descEn:
      "100% natural peanut butter made entirely from premium carefully roasted peanuts. Completely free from hydrogenated oils, added sugar, preservatives, or gluten. Rich natural taste with a smooth creamy texture.",
    featuresAr: [
      "طبيعية 100% بدون أي زيوت مهدرجة",
      "خالية من السكر المضاف والمواد الحافظة والجلوتين",
      "غنية بالدهون الصحية والبروتينات للرياضيين",
      "مصنوعة من فول سوداني مفرز ومعالج بعناية فائقة",
    ],
    featuresEn: [
      "100% natural with no hydrogenated oils",
      "No added sugar, preservatives, or gluten",
      "Rich in healthy fats and protein, ideal for athletes",
      "Processed from premium sorted peanuts",
    ],
    nutritionAr: {
      "السعرات الحرارية": "588 سعرة",
      البروتين: "25.0 جم",
      الدهون: "50.0 جم",
      الكربوهيدرات: "20.0 جم",
      الألياف: "6.0 جم",
    },
    nutritionEn: {
      Calories: "588 kcal",
      Protein: "25.0g",
      Fat: "50.0g",
      Carbs: "20.0g",
      Fiber: "6.0g",
    },
    sizesAr: [
      "350 جم (برطمان)",
      "500 جم (برطمان)",
      "1 كجم (علبة)",
      "5 كجم (عبوة تجارية للمخابز)",
    ],
    sizesEn: [
      "350g (Jar)",
      "500g (Jar)",
      "1kg (Tub)",
      "5kg (Commercial Bucket)",
    ],
    usesAr: [
      "الفطور والوجبات الخفيفة الصحية",
      "صناعة العصائر والمشروبات الرياضية عالية السعرات",
      "صناعة الحلويات والمخبوزات الصحية",
    ],
    usesEn: [
      "Healthy breakfast and snacks",
      "High-calorie sports smoothies and shakes",
      "Confectionery and healthy bakeries",
    ],
    image: "/images/peanut_butter.webp",
    price: "حسب الكمية والطلب / Custom Pricing",
    isFeatured: true,
  },
  {
    slug: "sesame-tahini",
    category: "tahini",
    nameAr: "طحينة سمسم فاخرة",
    nameEn: "Premium Sesame Tahini",
    descAr:
      "طحينة سمسم بيضاء نقية 100% مصنوعة من بذور السمسم الفاخرة بعد تنظيفها وتقشيرها وتحميصها بدقة متناهية وعصرها على البارد. بدون إضافة أي دقيق أو زيوت نباتية أخرى.",
    descEn:
      "100% pure white sesame tahini made from premium sesame seeds after washing, hulling, roasting, and cold-pressing. Free from added flour or vegetable oils.",
    featuresAr: [
      "سمسم نقي 100% بدون دقيق أو إضافات",
      "قوام مثالي وطعم سمسم أصيل غني",
      "طبيعية بدون أي مواد حافظة أو مبيضات",
      "مصنعة بأحدث خطوط إنتاج الطحينة المغلقة صحياً",
    ],
    featuresEn: [
      "100% pure sesame, no added flour or starches",
      "Perfect texture and rich authentic sesame taste",
      "Natural with no bleaching agents or preservatives",
      "Produced in a state-of-the-art closed hygienic line",
    ],
    nutritionAr: {
      "السعرات الحرارية": "595 سعرة",
      البروتين: "17.8 جم",
      الدهون: "53.7 جم",
      الكربوهيدرات: "21.1 جم",
      الألياف: "9.3 جم",
    },
    nutritionEn: {
      Calories: "595 kcal",
      Protein: "17.8g",
      Fat: "53.7g",
      Carbs: "21.1g",
      Fiber: "9.3g",
    },
    sizesAr: [
      "400 جم (عبوة)",
      "800 جم (عبوة)",
      "5 كجم",
      "10 كجم (عبوة تجارية للمطاعم)",
    ],
    sizesEn: ["400g (Pack)", "800g (Pack)", "5kg", "10kg (Commercial Bucket)"],
    usesAr: [
      "تحضير السلطات والمقبلات الشهية (سلطة الطحينة)",
      "إعداد الحلاوة الطحينية وصناعة الحلويات",
      "طبق جانبي مغذي يضاف للعسل والتمور",
    ],
    usesEn: [
      "Preparing appetizers and dips (Tahini salad, Hummus)",
      "Halva and sweets manufacturing",
      "Nutritional side dish added to honey and dates",
    ],
    image: "/images/sesame_tahini.png",
    price: "حسب الكمية والطلب / Custom Pricing",
    isFeatured: true,
  },
  {
    slug: "powdered-tahini",
    category: "tahini",
    nameAr: "طحينة بودرة فاخرة",
    nameEn: "Premium Powdered Tahini",
    descAr:
      "طحينة سمسم طبيعية مجففة ومحولة إلى بودرة ناعمة وسهلة الاستخدام. مثالية للمخبوزات، الخلطات الجافة، وتسهيل التحضير السريع مع الحفاظ على كامل طعم وقيمة الطحينة التقليدية.",
    descEn:
      "Natural sesame tahini, dehydrated and turned into a smooth, easy-to-use powder. Perfect for baking, dry mixes, and quick preparation while retaining the full flavor and value of traditional tahini.",
    featuresAr: [
      "سمسم طبيعي 100% بدون إضافات كيميائية",
      "سهلة الذوبان والخلط في السوائل",
      "صلاحية أطول وسهولة فائقة في التخزين",
      "خالية من الجلوتين والمواد الحافظة",
    ],
    featuresEn: [
      "100% natural sesame with no chemical additives",
      "Easy to dissolve and mix in liquids",
      "Longer shelf life and extremely easy to store",
      "Gluten-free and preservative-free",
    ],
    nutritionAr: {
      "السعرات الحرارية": "610 سعرة",
      البروتين: "19.5 جم",
      الدهون: "54.0 جم",
      الكربوهيدرات: "18.0 جم",
      الألياف: "10.0 جم",
    },
    nutritionEn: {
      Calories: "610 kcal",
      Protein: "19.5g",
      Fat: "54.0g",
      Carbs: "18.0g",
      Fiber: "10.0g",
    },
    sizesAr: [
      "250 جم (عبوة)",
      "500 جم (عبوة)",
      "1 كجم",
      "10 كجم (عبوة تجارية)",
    ],
    sizesEn: ["250g (Pack)", "500g (Pack)", "1kg", "10kg (Commercial Bag)"],
    usesAr: [
      "تحضير الطحينة السائلة بإضافة الماء والليمون",
      "إضافتها للمخبوزات والحلويات الجافة",
      "تستخدم في تتبيل اللحوم والدواجن كعامل مكثف",
    ],
    usesEn: [
      "Preparing liquid tahini by adding water and lemon",
      "Baking and dry confectionery ingredient",
      "Used in seasoning meats and poultry as a thickening agent",
    ],
    image: "/images/powdered_tahini.webp",
    price: "حسب الكمية والطلب / Custom Pricing",
    isFeatured: true,
  },
  {
    slug: "white-beans",
    category: "other",
    nameAr: "فاصوليا بيضاء فاخرة",
    nameEn: "Premium White Kidney Beans",
    descAr:
      "فاصوليا بيضاء جافة منتقاة ومفروزة بعناية فائقة، تتميز بحجم حباتها المتناسق وسرعة طهيها وقيمتها الغذائية العالية كأحد أهم مصادر البروتين النباتي.",
    descEn:
      "Carefully selected and sorted dry white kidney beans, characterized by consistent size, fast cooking time, and high nutritional value as a rich source of plant protein.",
    featuresAr: [
      "منقاة ومعبأة آلياً بالكامل",
      "حبات كبيرة ومتجانسة وخالية من العيوب",
      "خالية تماماً من الأتربة والشوائب",
      "نسبة ألياف عالية وبروتين نباتي ممتاز",
    ],
    featuresEn: [
      "Fully automated cleaning and packaging",
      "Large, homogeneous, and defect-free grains",
      "Completely free from dust and impurities",
      "High fiber content and excellent plant protein",
    ],
    nutritionAr: {
      "السعرات الحرارية": "333 سعرة",
      البروتين: "23.4 جم",
      الدهون: "0.8 جم",
      الكربوهيدرات: "60.4 جم",
      الألياف: "15.2 جم",
    },
    nutritionEn: {
      Calories: "333 kcal",
      Protein: "23.4g",
      Fat: "0.8g",
      Carbs: "60.4g",
      Fiber: "15.2g",
    },
    sizesAr: ["500 جم", "1 كجم", "10 كجم", "25 كجم (عبوة تجارية)"],
    sizesEn: ["500g", "1kg", "10kg", "25kg (Bulk Packaging)"],
    usesAr: [
      "الطهي وتحضير اليخنات والشوربات الشرقية",
      "إعداد سلطات البقوليات الباردة والمقبلات",
      "التعليب والصناعات الغذائية المختلفة",
    ],
    usesEn: [
      "Cooking and preparing Eastern stews and soups",
      "Preparing cold bean salads and appetizers",
      "Canning and various food industries",
    ],
    image: "/images/white_beans.webp",
    price: "حسب الكمية والطلب / Custom Pricing",
    isFeatured: true,
  },
  {
    slug: "red-lentils",
    category: "other",
    nameAr: "عدس أحمر مجروش فاخر",
    nameEn: "Premium Split Red Lentils",
    descAr:
      "عدس أحمر مجروش ونظيف 100%، غني بالألياف والبروتين والحديد، مثالي لتحضير شوربة العدس الدافئة والأطباق الشرقية التقليدية.",
    descEn:
      "100% clean split red lentils, rich in fiber, protein, and iron. Ideal for preparing warm lentil soups and traditional Eastern dishes.",
    featuresAr: [
      "نقاء تام وخالٍ من الحبيبات التالفة والأتربة",
      "سريع الطهي ولا يتطلب نقعاً مسبقاً",
      "قيمة غذائية عالية غنية بالحديد والزنك",
      "طبيعي 100% بدون أي ألوان مضافة",
    ],
    featuresEn: [
      "Completely pure and free from damaged grains and dust",
      "Quick to cook and requires no pre-soaking",
      "High nutritional value rich in iron and zinc",
      "100% natural with no artificial colors",
    ],
    nutritionAr: {
      "السعرات الحرارية": "358 سعرة",
      البروتين: "24.6 جم",
      الدهون: "1.1 جم",
      الكربوهيدرات: "63.1 جم",
      الألياف: "10.8 جم",
    },
    nutritionEn: {
      Calories: "358 kcal",
      Protein: "24.6g",
      Fat: "1.1g",
      Carbs: "63.1g",
      Fiber: "10.8g",
    },
    sizesAr: ["500 جم", "1 كجم", "10 كجم", "25 كجم (عبوة تجارية)"],
    sizesEn: ["500g", "1kg", "10kg", "25kg (Bulk Packaging)"],
    usesAr: [
      "تحضير شوربة العدس التقليدية",
      "يدخل في إعداد أطباق الكشري والشوربات المختلفة",
      "حشوات المعجنات والأطباق النباتية المغذية",
    ],
    usesEn: [
      "Preparing traditional lentil soup",
      "Used in preparing Koshary and various soups",
      "Fillings for pastries and nutritious vegetarian dishes",
    ],
    image: "/images/red_lentils.webp",
    price: "حسب الكمية والطلب / Custom Pricing",
    isFeatured: true,
  },
  {
    slug: "yellow-lentils",
    category: "other",
    nameAr: "عدس أصفر فاخر",
    nameEn: "Premium Yellow Lentils",
    descAr:
      "عدس أصفر كامل عالي الجودة ومفرز بعناية، يعد وجبة غنية ومغذية تمد الجسم بالطاقة والنشاط ومثالية لكل الأوقات.",
    descEn:
      "High-quality, carefully sorted whole yellow lentils. A rich and nutritious meal that provides energy and vitality, perfect for all times.",
    featuresAr: [
      "فرز ونظافة بنسبة 100% من الشوائب",
      "طعم أصيل وقوام متماسك عند الطهي",
      "طبيعي وخالٍ تماماً من التعديل الوراثي",
      "غني بالفيتامينات والمعادن الهامة للجسم",
    ],
    featuresEn: [
      "100% sorted and clean from impurities",
      "Authentic taste and firm texture when cooked",
      "Natural and completely Non-GMO",
      "Rich in essential vitamins and minerals",
    ],
    nutritionAr: {
      "السعرات الحرارية": "358 سعرة",
      البروتين: "24.6 جم",
      الدهون: "1.1 جم",
      الكربوهيدرات: "63.1 جم",
      الألياف: "10.8 جم",
    },
    nutritionEn: {
      Calories: "358 kcal",
      Protein: "24.6g",
      Fat: "1.1g",
      Carbs: "63.1g",
      Fiber: "10.8g",
    },
    sizesAr: ["500 جم", "1 كجم", "10 كجم", "25 كجم (عبوة تجارية)"],
    sizesEn: ["500g", "1kg", "10kg", "25kg (Bulk Packaging)"],
    usesAr: [
      "تحضير الأطباق الشرقية وحشو الفطائر",
      "الشوربات المغذية واليخنات",
      "سلطات البقوليات المبتكرة",
    ],
    usesEn: [
      "Preparing Eastern dishes and pastry fillings",
      "Nutritious soups and stews",
      "Innovative legume salads",
    ],
    image: "/images/yellow_lentils.webp",
    price: "حسب الكمية والطلب / Custom Pricing",
    isFeatured: true,
  },
  {
    slug: "sesame-seeds",
    category: "other",
    nameAr: "سمسم أبيض فاخر",
    nameEn: "Premium White Sesame Seeds",
    descAr:
      "بذور سمسم أبيض طبيعية ونقية 100%، تم تنظيفها وغسلها وتجفيفها بأحدث التقنيات. غنية بالكالسيوم والزيوت الصحية، ومثالية للمخابز وصناعة الحلويات.",
    descEn:
      "100% natural and pure white sesame seeds, cleaned, washed, and dried using the latest technology. Rich in calcium and healthy oils, perfect for bakeries and confectionery.",
    featuresAr: [
      "نقاء استثنائي وخالٍ تماماً من الشوائب والأتربة",
      "غني بالكالسيوم والمعادن والزيوت المفيدة",
      "مثالي للاستخدام المباشر أو التحميص",
      "فرز آلي دقيق وحبيبات متناسقة اللون والوزن",
    ],
    featuresEn: [
      "Exceptional purity, completely free from impurities and dust",
      "Rich in calcium, minerals, and beneficial oils",
      "Perfect for direct use or roasting",
      "Precise automated sorting and uniform seeds in color and weight",
    ],
    nutritionAr: {
      "السعرات الحرارية": "573 سعرة",
      البروتين: "17.7 جم",
      الدهون: "49.7 جم",
      الكربوهيدرات: "23.4 جم",
      الألياف: "11.8 جم",
    },
    nutritionEn: {
      Calories: "573 kcal",
      Protein: "17.7g",
      Fat: "49.7g",
      Carbs: "23.4g",
      Fiber: "11.8g",
    },
    sizesAr: ["500 جم", "1 كجم", "10 كجم", "25 كجم (عبوة تجارية)"],
    sizesEn: ["500g", "1kg", "10kg", "25kg (Bulk Packaging)"],
    usesAr: [
      "تزيين المخبوزات والخبز والمعجنات",
      "صناعة الطحينة والحلاوة الطحينية المنزلية",
      "إعداد السمسمية والحلويات الشرقية والغربية",
    ],
    usesEn: [
      "Topping bakery products, bread, and pastries",
      "Homemade tahini and halva manufacturing",
      "Preparing sesame candies and Eastern/Western sweets",
    ],
    image: "/images/sesame_seeds.jpg",
    price: "حسب الكمية والطلب / Custom Pricing",
    isFeatured: true,
  },
  {
    slug: "chickpeas",
    category: "other",
    nameAr: "حمص شام فاخر",
    nameEn: "Premium Chickpeas",
    descAr:
      "حبات حمص شام كبيرة وجافة، ممتازة الحجم وسهلة الطهي بعد النقع. تستخدم في تحضير الفتة، الكشري، المقبلات وطبق الحمص بالطحينة الشهير.",
    descEn:
      "Large, dry chickpeas of premium size, easy to cook after soaking. Used in preparing Fatteh, Koshary, appetizers, and the famous Hummus with Tahini dip.",
    featuresAr: [
      "حبات كبيرة الحجم متناسقة تماماً",
      "سريعة النضج وذات قوام كريمي ناعم بعد الطهي",
      "غني بالألياف والبروتين وحمض الفوليك",
      "طبيعي 100% بدون أي مبيضات أو مواد مضافة",
    ],
    featuresEn: [
      "Perfectly consistent large grains",
      "Quick to tenderize with a smooth creamy texture after cooking",
      "Rich in fiber, protein, and folate",
      "100% natural with no bleaching agents or additives",
    ],
    nutritionAr: {
      "السعرات الحرارية": "364 سعرة",
      البروتين: "19.3 جم",
      الدهون: "6.0 جم",
      الكربوهيدرات: "60.6 جم",
      الألياف: "17.4 جم",
    },
    nutritionEn: {
      Calories: "364 kcal",
      Protein: "19.3g",
      Fat: "6.0g",
      Carbs: "60.6g",
      Fiber: "17.4g",
    },
    sizesAr: ["500 جم", "1 كجم", "10 كجم", "25 كجم (عبوة تجارية)"],
    sizesEn: ["500g", "1kg", "10kg", "25kg (Bulk Packaging)"],
    usesAr: [
      "تحضير طبق الحمص بالطحينة والمسبحة الشهية",
      "إضافته للكشري والفتات والسلطات والمقبلات",
      "صناعة تسالي حمص الشام الدافئة والمقرمشات",
    ],
    usesEn: [
      "Preparing hummus with tahini dip and delicious Msabbaha",
      "Adding to Koshary, Fatteh, salads, and appetizers",
      "Making warm chickpeas drinks and crunchy snacks",
    ],
    image: "/images/chickpeas.jpg",
    price: "حسب الكمية والطلب / Custom Pricing",
    isFeatured: true,
  },
];

export async function getDbProducts() {
  try {
    const { db } = await import("@/lib/db");
    if (!db) return staticProducts; // no valid DB configured
    const products = await db.product.findMany({
      orderBy: { id: "asc" },
    });
    if (products.length > 0) {
      return products.map(
        (p: any): ProductData => ({
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
          isFeatured: p.isFeatured,
        }),
      );
    }
  } catch (error) {
    console.warn(
      "Database query failed, using static fallback products:",
      error,
    );
  }
  return staticProducts;
}

export async function getDbProductBySlug(slug: string) {
  try {
    const { db } = await import("@/lib/db");
    if (!db) return staticProducts.find((p) => p.slug === slug) || null; // no valid DB configured
    const product: any = await db.product.findUnique({
      where: { slug },
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
        isFeatured: product.isFeatured,
      } satisfies ProductData;
    }
  } catch (error) {
    console.warn(
      `Database query for slug ${slug} failed, using static fallback:`,
      error,
    );
  }
  return staticProducts.find((p) => p.slug === slug) || null;
}
