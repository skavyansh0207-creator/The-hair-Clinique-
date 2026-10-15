export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  duration: string;
  startingPrice: string;
  category: string;
  featured?: boolean;
}

export interface ServiceCategory {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  services: ServiceItem[];
}

export const SALON_INFO = {
  name: "The Hair Clinique",
  tagline: "Premium Unisex Salon & Aesthetic Studio",
  rating: "4.8",
  reviewCount: "788+",
  phone: "9877123797",
  phoneFormatted: "+91 98771 23797",
  whatsappUrl: "https://wa.me/919877123797",
  address: "SCO 74, Sector 40 C, Chandigarh - 160036",
  hours: "Monday – Sunday: 10:00 AM – 8:30 PM",
  googleMapsUrl: "https://maps.google.com/?q=SCO+74,+Sector+40+C,+Chandigarh+-+160036",
  heroImage: "https://i.ibb.co/XkCXnC2p/Screenshot-2026-10-15-17-07-39-886-com-google-android-googlequicksearchbox-edit.jpg",
  galleryImage1: "https://i.ibb.co/Y4CTCpgf/Screenshot-2026-10-15-17-07-58-283-com-google-android-googlequicksearchbox-edit.jpg",
  galleryImage2: "https://i.ibb.co/8LRzpB4c/Screenshot-2026-10-15-17-08-27-973-com-google-android-googlequicksearchbox-edit.jpg",
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "hair-studio",
    name: "Hair Studio & Treatments",
    subtitle: "Couture Cuts, Keratin & Texturizing",
    description: "Personalized hair architecture, intense restorative protein infusions, and artisan styling designed for individual hair texture.",
    services: [
      {
        id: "keratin-treatment",
        name: "Keratin Treatments",
        description: "Intense smoothing and frizz-defense therapy with rich botanical keratin and argan moisture sealing for up to 5 months of glass-like shine.",
        duration: "120 - 150 min",
        startingPrice: "From ₹3,499",
        category: "hair-studio",
        featured: true,
      },
      {
        id: "precision-haircuts",
        name: "Precision Haircuts",
        description: "Bespoke scissor and razor architectural haircutting matched to facial geometry, hair density, and lifestyle maintenance.",
        duration: "45 min",
        startingPrice: "From ₹450",
        category: "hair-studio",
        featured: true,
      },
      {
        id: "perms-texturizing",
        name: "Perms & Body Waves",
        description: "Modern soft-wave perm or structured curl defining treatments using gentle, low-ammonia cysteamine formulations.",
        duration: "90 - 120 min",
        startingPrice: "From ₹2,799",
        category: "hair-studio",
      },
      {
        id: "curly-hair-styling",
        name: "Curly Hair Styling",
        description: "Dedicated curl-by-curl shaping, hydration bath, diffused drying, and curl-retention styling for 2A to 4C curl patterns.",
        duration: "60 min",
        startingPrice: "From ₹850",
        category: "hair-studio",
      },
      {
        id: "updos-event-styling",
        name: "Luxury Updos & Red-Carpet Styling",
        description: "Sophisticated red-carpet chignons, sleek architectural buns, Hollywood waves, and braided cocktail updos for formal events.",
        duration: "60 - 75 min",
        startingPrice: "From ₹1,199",
        category: "hair-studio",
      },
      {
        id: "braiding-studio",
        name: "Artisan Braiding",
        description: "Intricate crown braids, Dutch and French fishtails, bohemian loose braids, and festival-ready accent braids with decorative accessories.",
        duration: "45 - 60 min",
        startingPrice: "From ₹750",
        category: "hair-studio",
      },
      {
        id: "childrens-cuts",
        name: "Children's Cuts",
        description: "Patient, gentle, and trendy styling for toddlers and young teens in a calm and welcoming environment.",
        duration: "30 min",
        startingPrice: "From ₹350",
        category: "hair-studio",
      },
    ],
  },
  {
    id: "mens-grooming",
    name: "Men's Grooming",
    subtitle: "Tailored Barbering & Spa Therapy",
    description: "Refined grooming rituals for gentlemen, combining timeless Italian barbering techniques with modern scalp and beard therapy.",
    services: [
      {
        id: "luxury-hot-towel-shaving",
        name: "Luxury Hot Towel Shaving",
        description: "Traditional straight-razor shave with pre-shave aromatic oils, steamed herbal towels, cooling alum block, and post-shave balm.",
        duration: "45 min",
        startingPrice: "From ₹450",
        category: "mens-grooming",
        featured: true,
      },
      {
        id: "beard-trim-sculpt",
        name: "Beard Trim & Sculpting",
        description: "Jawline-contouring clipper work, perimeter straight-edge lineup, thinning control, and organic beard oil treatment.",
        duration: "30 min",
        startingPrice: "From ₹350",
        category: "mens-grooming",
        featured: true,
      },
      {
        id: "mens-hair-styling",
        name: "Men's Signature Hair Styling",
        description: "Custom consultation, detox wash, precision scissor-over-comb crop or textured fade, completed with matte paste or pomade styling.",
        duration: "40 min",
        startingPrice: "From ₹450",
        category: "mens-grooming",
      },
      {
        id: "gentlemans-detox-scalp",
        name: "Gentleman's Scalp Detox & Spa",
        description: "Tea-tree clarifying scrub, stimulating acupressure scalp massage, warm vapor infusion, and follicle strengthening tonic.",
        duration: "45 min",
        startingPrice: "From ₹999",
        category: "mens-grooming",
      },
    ],
  },
  {
    id: "nails-brows-lashes",
    name: "Nails, Brows & Lashes",
    subtitle: "Lash Artistry & Precision Nail Sculpting",
    description: "High-definition brows, featherweight lash extensions, and hygienic nail enhancements crafted with sterile hospital-grade tools.",
    services: [
      {
        id: "acrylic-nails",
        name: "Acrylic Nails & Sculpted Extensions",
        description: "Custom acrylic tips or sculpting forms, French ombre, chrome, encapsulated glitter, or custom nail art with long-lasting gel topcoat.",
        duration: "75 - 90 min",
        startingPrice: "From ₹1,499",
        category: "nails-brows-lashes",
        featured: true,
      },
      {
        id: "eyelash-extensions",
        name: "Eyelash Extensions (Classic & Volume)",
        description: "Medical-grade adhesive with weightless synthetic mink fibers applied lash-by-lash for natural fluff or glamorous Russian volume.",
        duration: "90 - 120 min",
        startingPrice: "From ₹1,999",
        category: "nails-brows-lashes",
        featured: true,
      },
      {
        id: "eyebrow-threading-shaping",
        name: "Eyebrow Threading & Precision Shaping",
        description: "Organic cotton threading guided by golden ratio facial mapping for clean, sharp, and symmetrically balanced arches.",
        duration: "20 min",
        startingPrice: "From ₹120",
        category: "nails-brows-lashes",
      },
      {
        id: "eyebrow-beautification",
        name: "Eyebrow Beautification & Tinting",
        description: "Hybrid stain tinting, brow lamination, botanical nourishing serum, and shaping for fuller, brushed-up model brows.",
        duration: "45 min",
        startingPrice: "From ₹799",
        category: "nails-brows-lashes",
      },
    ],
  },
  {
    id: "skin-aesthetics",
    name: "Skin & Aesthetics",
    subtitle: "Clinical Hydration & Derma Care",
    description: "Targeted clinical skincare and full-body aesthetic wellness performed by trained aesthetic therapists using imported European dermatological formulations.",
    services: [
      {
        id: "advanced-skin-care",
        name: "Advanced Skin Care & Hydro-Glow",
        description: "Deep ultrasonic pore cleansing, lactic peel resurfacing, hyaluronic infusion, and chilled cryo-globe soothing for luminous glass skin.",
        duration: "60 - 75 min",
        startingPrice: "From ₹1,799",
        category: "skin-aesthetics",
        featured: true,
      },
      {
        id: "luxury-facials",
        name: "Luxury Glow Facials",
        description: "Collagen-stimulating facial ritual with botanical vitamins, gold serum lymphatic drainage massage, and antioxidant peel-off rubber mask.",
        duration: "60 min",
        startingPrice: "From ₹1,499",
        category: "skin-aesthetics",
        featured: true,
      },
      {
        id: "permanent-hair-removal",
        name: "Permanent Hair Removal (Triple Wavelength)",
        description: "Next-generation sapphire ice-contact cooling diode and triple-wavelength painless hair reduction for face, underarms, or full body.",
        duration: "30 - 90 min",
        startingPrice: "From ₹1,199 / session",
        category: "skin-aesthetics",
      },
      {
        id: "spa-pedicure",
        name: "Aesthetic Spa Pedicure",
        description: "Epsom salt & rose petal foot soak, enzymatic callus smoothing, organic apricot scrub, warm candle wax massage, and clean polish.",
        duration: "50 min",
        startingPrice: "From ₹699",
        category: "skin-aesthetics",
      },
      {
        id: "tanning-de-tan",
        name: "Dermatological De-Tan & Tan Control",
        description: "Gentle alpha-arbutin and kojic acid botanical therapy that dissolves sun pigmentation and restores natural skin radiance.",
        duration: "45 min",
        startingPrice: "From ₹799",
        category: "skin-aesthetics",
      },
    ],
  },
  {
    id: "bridal-studio",
    name: "Bridal Studio",
    subtitle: "Complete Luxury Bridal & Event Packages",
    description: "A private sanctuary dedicated to brides and groom entourage with airbrush HD makeup, bespoke hairstyling, and pre-wedding bridal glow regimens.",
    services: [
      {
        id: "complete-luxury-bridal-package",
        name: "Complete Luxury Bridal Package",
        description: "Signature HD or Airbrush bridal makeup, luxury couture hairstyling with jewelry placement, dupatta/sari draping, and pre-bridal skin therapy.",
        duration: "3 - 4 hours",
        startingPrice: "From ₹14,999",
        category: "bridal-studio",
        featured: true,
      },
      {
        id: "pre-bridal-grooming-regime",
        name: "Pre-Bridal Radiance Bootcamp (2-4 Weeks)",
        description: "Curated series of full-body polishing, organic de-tan rituals, brightening facial treatments, hair spa therapy, and deluxe mani-pedi.",
        duration: "Multiple Sessions",
        startingPrice: "From ₹8,999",
        category: "bridal-studio",
        featured: true,
      },
      {
        id: "cocktail-reception-look",
        name: "Engagement, Sangeet & Reception Glam",
        description: "Modern soft-glam or dramatic smokey eye aesthetics paired with red carpet waves, textured updos, and accessory setting.",
        duration: "2 - 2.5 hours",
        startingPrice: "From ₹5,499",
        category: "bridal-studio",
      },
      {
        id: "grooms-wedding-package",
        name: "Groom's Wedding Day Styling & Glow",
        description: "Beard sculpting, skin detox facial, precision hair architecture, and imperceptible photo-ready HD matte skin perfecting.",
        duration: "90 min",
        startingPrice: "From ₹3,499",
        category: "bridal-studio",
      },
    ],
  },
];

export const TESTIMONIALS = [
  {
    id: "1",
    name: "Dr. Simran Kaur",
    role: "Verified Google Reviewer",
    rating: 5,
    date: "1 week ago",
    comment: "The Hair Clinique in Sector 40 is undoubtedly the best salon experience in Chandigarh. I had the Keratin treatment and haircut — my hair feels like silk! Super clean, luxurious atmosphere, and the staff is exceptionally courteous.",
  },
  {
    id: "2",
    name: "Harmanjot Singh",
    role: "Verified Google Reviewer",
    rating: 5,
    date: "2 weeks ago",
    comment: "Outstanding men's grooming! The hot towel shave and beard trim were executed with barber perfection. Best place in Chandigarh for gentlemen who value clean technique and punctuality.",
  },
  {
    id: "3",
    name: "Pooja Sharma",
    role: "Verified Google Reviewer",
    rating: 5,
    date: "3 weeks ago",
    comment: "Booked my bridal package here and I couldn't be happier. The makeup was natural yet glowing, stayed flawless all night through tears and dancing. Truly a 5-star salon with 788+ genuine reviews for a reason!",
  },
  {
    id: "4",
    name: "Amanpreet Virdi",
    role: "Verified Google Reviewer",
    rating: 5,
    date: "1 month ago",
    comment: "Got acrylic nail extensions and lash extensions done. Immaculate hygiene, top brand products, and the nail artist was so patient with my custom nail art request. Highly recommend!",
  },
];

export const SALON_FAQS = [
  {
    q: "How can I book an appointment at The Hair Clinique?",
    a: "You can book directly via WhatsApp at +91 98771 23797 or call us at 9877123797. You can also use our quick booking form on this website to select your service, date, and preferred time slot.",
  },
  {
    q: "Where is The Hair Clinique located?",
    a: "We are centrally located in Chandigarh at SCO 74, Sector 40 C, Chandigarh - 160036. Dedicated parking is available right in front of the SCO.",
  },
  {
    q: "Is The Hair Clinique a unisex salon?",
    a: "Yes, The Hair Clinique is a premium unisex salon and aesthetic studio providing dedicated hair styling, barbering, skin care, nail extensions, and bridal packages for both women and men.",
  },
  {
    q: "What brands and products do you use for hair and skin treatments?",
    a: "We use strictly dermatologically approved, international professional brands including Olaplex, L'Oréal Professionnel, Kérastase, Casmara, and medical-grade hypoallergenic skin solutions.",
  },
  {
    q: "Do you offer pre-bridal and groom wedding packages?",
    a: "Yes! We specialize in comprehensive bridal transformations, engagement glam, sangeet looks, and groom grooming packages tailored 2 to 4 weeks before your special day.",
  },
];
