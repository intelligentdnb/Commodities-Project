const categories = [
  {name: "Agriculture", subcategories: ["Coffee", "Corn", "Rice", "Soybeans", "Sugar"]},
  {name: "Energy", subcategories: ["Gasoline", "Heating Fuel", "Natural Gas", "Petroleum"]},
  {name: "Livestock", subcategories: ["Beef Cattle", "Chicken Cattle", "Pig Cattle"]},
  {name: "Metals", subcategories: ["Copper", "Gold", "Platinum", "Silver"]},
];

const api = [
  {
    name: {
      first: "Vijay",
      last: "Vossebeld"
    },
    location: {
      country: "Netherlands"
    },
    email: "vijay.vossebeld@example.com",
    phone: "(0927) 247952",
    picture: {
      large: "https://randomuser.me/api/portraits/men/86.jpg"
    }
  },
  {
    name: {
      first: "ملینا",
      last: "کامروا"
    },
    location: {
      country: "Iran"
    },
    email: "mlyn.khmrw@example.com",
    phone: "033-95048749",
    picture: {
      large: "https://randomuser.me/api/portraits/women/28.jpg"
    }
  },
  {
    name: {
      first: "Sol",
      last: "Sogn"
    },
    location: {
      country: "Norway"
    },
    email: "sol.sogn@example.com",
    phone: "76666405",
    picture: {
      large: "https://randomuser.me/api/portraits/women/40.jpg"
    }
  },
  {
    name: {
      first: "Oleg",
      last: "Cuppen"
    },
    location: {
      country: "Netherlands"
    },
    email: "oleg.cuppen@example.com",
    phone: "(0410) 397622",
    picture: {
      large: "https://randomuser.me/api/portraits/men/3.jpg"
    }
  },
  {
    name: {
      first: "Patrick",
      last: "Wood"
    },
    location: {
      country: "USA"
    },
    email: "patrick.wood@example.com",
    phone: "(658)-915-7088",
    picture: {
      large: "https://randomuser.me/api/portraits/men/93.jpg"
    }
  },
  {
    name: {
      first: "آرش",
      last: "کوتی"
    },
    location: {
      country: "Iran"
    },
    email: "arsh.khwty@example.com",
    phone: "049-31750607",
    picture: {
      large: "https://randomuser.me/api/portraits/men/18.jpg"
    }
  },
  {
    name: {
      first: "Gloria",
      last: "Ryan"
    },
    location: {
      country: "Australia"
    },
    email: "gloria.ryan@example.com",
    phone: "07-6721-9149",
    picture: {
      large: "https://randomuser.me/api/portraits/women/49.jpg"
    }
  },
  {
    name: {
      first: "Alberto",
      last: "Meyer"
    },
    location: {
      country: "United Kingdom"
    },
    email: "alberto.meyer@example.com",
    phone: "023 4017 3178",
    picture: {
      large: "https://randomuser.me/api/portraits/men/12.jpg"
    }
  },
  {
    name: {
      first: "Pablo2",
      last: "Barbero"
    },
    location: {
      country: "Argentina"
    },
    email: "irene.galindo@example.com",
    phone: "(661) 978 1714",
    picture: {
      large : "loquesea"
    },
  },
  {
    name: {
      first: "Dhruv",
      last: "Shenoy"
    },
    location: {
      country: "India"
    },
    email: "dhruv.shenoy@example.com",
    phone: "8672994375",
    picture: {
      large: "https://randomuser.me/api/portraits/men/6.jpg"
    }
  }

];

// const posts = [
//   {title: "Offering the best Agricultural products", description: "I can offer you the best Soybeans on the market", sell: "true", shipping: ["CIF"], payment: ["SBLC"],subCategory: "Soybeans", image:"https://duckduckgo.com/?q=soybeans%20picture&iax=images&ia=images&iai=https://www.world-grain.com/ext/resources/Article-Images/2018/09-September/Soybean_photo-cred-adobestock_E.jpg?1540910410", categoryName: "Agriculture", userId: "2" },
//   {title: "Need Natural Gas", description: "I ma looking for a shipp of liquified Natural Gas", sell: "false", shipping: ["FOB"], payment: ["LC"],subCategory: "Natural Gas", image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Y3ghC2gdhmfOBHzsavjsxwHaJ4%26pid%3DApi&f=1", categoryName: "Energy", userId: "5" },
//   {title: "I"d like to buy Metals", description: "I am looking for the best quality of Platinum medical grade A5", sell: "false", shipping: ["CIF", "FOB"], payment: ["LC", "SBLC"],subCategory: "Platinum", image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.aD1u54dbaES-tATEJ83s-QHaFj%26pid%3DApi&f=1", categoryName: "Metals", userId: "9" },
//   {title: "Selling livestock", description: "I have the best farmers of Argentina", sell: "true", shipping: ["FOB"], payment: ["TT"],subCategory: "Beef Cattle", image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.86Jg8wl8d4oB6C1lIkwTQAHaEJ%26pid%3DApi&f=1", categoryName: "Livestock", userId: "3" }
// ]

const posts = [
  //GOLD
  {
     title: "Looking for gold supplier",
     description: "We are looking for Gold suppliers for our buyer in UAE. Qty: 150 kg per month",
     sell: false,
     shipping: ["CIF"],
     payment: ["DLC"],
     categoryName: "Metals",
     subCategory: "Gold",
     userId: 1,
     country:"Argentina"
   },
   {
     title: "Suppliers of Gold",
     description: "We sell Non Refined Alluvial Gold Dore Bars for Gold Refinery. We can supply (One Thousand) kilo every month.",
     sell: true,
     shipping:[ "FOB"],
     payment: ["LC"],
     categoryName: "Metals",
     subCategory: "Gold",
     userId: 2,
     country:"South Africa"
   },
   {
     title: "Buying Gold",
     description: "We want to buy Raw Gold Bars. Please contact us as soon as possible.",
     sell: false,
     shipping: ["CIF"],
     payment: ["SBLC"],
     categoryName: "Metals",
     subCategory: "Gold",
     userId: 3,
     country:"Argentina"
   },
   {
     title: "Gold sellers",
     description: "Gold Bars. Qty: 50 kg per month",
     sell: true,
     shipping: ["FOB"],
     payment: ["LC"],
     categoryName: "Metals",
     subCategory: "Gold",
     userId: 4,
     country:"UAE"
   },
   //COPPER
   {
     title: "Copper Suppliers",
     description: "Brass Ingots, Billets and Scraps. Grade 58% copper",
     sell: true,
     shipping: ["CIF"],
     payment: ["LC"],
     categoryName: "Metals",
     subCategory: "Copper",
     userId: 5,
     country:"Serbia"
   },
   {
     title: "Copper sellers",
     description: "1. Copper Cathodes international standard Cu-CATH-1 - 2. Copper Rod 8 mm ASTM (America) or EN (EU) or ASTM B49-17 3. Wire Rod Grades CU-ETP (?11040) and Cu-ETP1 (CW003A) Monthly Volume 500 - 2000 tons",
     sell: true,
     shipping: ["FOB"],
     payment: ["DLC"],
     categoryName: "Metals",
     subCategory: "Copper",
     userId: 6,
     country:"Russia"
   },
   {
     title: "Looking Copper",
     description: "We want to buy Copper Ores and Concentrate. Qty: 2000MT/ Trail Order - Consumption Qty : 20000MT for 12 Months",
     sell: false,
     shipping: ["FOB"],
     payment: ["LC"],
     categoryName: "Metals",
     subCategory: "Copper",
     userId: 7,
     country:"Colombia"
   },
   {
     title: "Copper buyer",
     description: "1. Steam Coal - 2. Rhodium Concentrate -3. iron Ores -4. Copper -5. Copper Ores, Concentrate Millberry Cathode, Metals-Minerals. Ores.",
     sell: false,
     shipping: ["CIF"],
     payment: ["SBLC"],
     categoryName: "Metals",
     subCategory: "Copper",
     userId: 8,
     country:"Colombia"
   },
   //PLATINUM
   {
     title: "Platinum seller",
     description: "Platinum concentrate fron Belgium",
     sell: true,
     shipping: ["CIF"],
     payment: ["SBLC"],
     categoryName: "Metals",
     subCategory: "Platinum",
     userId: 9,
     country:"Belgium"
   },
   {
     title: "Platinum suppliers",
     description: "Platinum concentrate and indicted",
     sell: true,
     shipping: ["FOB"],
     payment: ["DLC"],
     categoryName: "Metals",
     subCategory: "Platinum",
     userId: 10,
     country:"Congo"
   },
   {
     title: "Wanting Platinum",
     description: "Platinum concentrate 100%. 50 Tons",
     sell: false,
     shipping: ["CIF"],
     payment: ["LC"],
     categoryName: "Metals",
     subCategory: "Platinum",
     userId: 1,
     country:"Chile"
   },
   {
     title: "Looking Platinum from Africa",
     description: "300 Tons, contract x 12 months",
     sell: false,
     shipping: ["FOB"],
     payment: ["LC"],
     categoryName: "Metals",
     subCategory: "Platinum",
     userId: 2,
     country:"Germany"
   },
   //SILVER
   {
     title: "Sellers of Silver",
     description: " 99.9%, silver colour. Large quantitys per month.",
     sell: true,
     shipping: ["CIF"],
     payment: ["DLC"],
     categoryName: "Metals",
     subCategory: "Silver",
     userId: 3,
     country:"China"
   },
   {
     title: "Silver suppliers",
     description: "Silver Ingots Quantity: 10.000-50.000 kilos×4 times per month.",
     sell: true,
     shipping: ["CIF"],
     payment: ["SBLC"],
     categoryName: "Metals",
     subCategory: "Silver",
     userId: 4,
     country:"Portugal"
   },
   {
     title: "Need silver",
     description: "We have a requirement of Silver Bars. Qty: 200 MT. Origin: any. Packing in boxes.",
     sell: false,
     shipping: ["FOB"],
     payment: ["LC"],
     categoryName: "Metals",
     subCategory: "Silver",
     userId: 5,
     country:"India"
   },
   {
     title: "Looking for a serious supplier of Silver",
     description: "We need to enquire about Silver Bar or Coins with 999.9 purity. Please contact us at the earliest possibility.",
     sell: false,
     shipping: ["FOB"],
     payment: ["SBLC"],
     categoryName: "Metals",
     subCategory: "Silver",
     userId: 6,
     country:"England"
   },
   //SOYBEANS
   {
     title: "Suppliers of LATAM Soybeans",
     description: "Quality: 1st Grade, 2nd Grade, food/feed Grade Packing: In Bulk or PP Bags p/50kg Season: All year round Origin: Argentina / Brazil Annual production volume: 250000ton Container capacity: 25ton",
     sell: true,
     shipping: ["CIF"],
     payment: ["DLC"],
     categoryName: "Agriculture",
     subCategory: "Soybeans",
     userId: 7,
     country:"Paraguay"
   },
   {
     title: "Sellers of Soybeans",
     description: "Package: 25/50 kg pp bags SPECIFICATION: Moisture: 12% max Foreign matter: 2% max Oil Content: 18% min Protein: 32% min",
     sell: true,
     shipping: ["CIF"],
     payment: ["SBLC"],
     categoryName: "Agriculture",
     subCategory: "Soybeans",
     userId: 8,
     country:"Ukraine"
   },
   {
     title: "Looking for supplier of Soybeans",
     description: "Buyer is interested to receive quotations for the following RFQ - Quantity Required : 10000 - 50000 tons per 12/m",
     sell: false,
     shipping: ["FOB"],
     payment: ["DLC"],
     categoryName: "Agriculture",
     subCategory: "Soybeans",
     userId: 9,
     country:"India"
   },
   {
     title: "Wanted soybeans",
     description: "Please quote for the following wholesale product requirement. Specifications : Type: GMO 1 Year Contract Quantity Required : 25000 Metric Ton/Metric Tons ",
     sell: false,
     shipping: ["FOB"],
     payment: ["DLC"],
     categoryName: "Agriculture",
     subCategory: "Soybeans",
     userId: 10,
     country:"England"
   },
//SUGAR
   {
     title: "Suppliers for Sugar",
     description: "We supply best quality ICUMSA 45 and Icumsa 150 Origin Brazil or India or Thailand Specification White Refined Cane sugar - Polarization : 99.80% Min Ash content : 0.04% Max Suphateash Content : 00.04% Maximum Moisture : 0.04% Max Solubility : 100% dry",
     sell: true,
     shipping: ["CIF"],
     payment: ["LC"],
     categoryName: "Agriculture",
     subCategory: "Sugar",
     userId: 1,
     country:"EEUU"
   },
   {
     title: "Looking for Sugar",
     description: "We need to buy White Sugar. Origin: Europe. Destination: Romania Quantity: 1000 MT for 12 months of one year contract",
     sell: false,
     shipping: ["CIF"],
     payment: ["DLC"],
     categoryName: "Agriculture",
     subCategory: "Sugar",
     userId: 2,
     country:"France"
   },
   {
     title: "Looking for Sugar",
     description: "We want to buy Sugar Icumsa 45 from Lome ( Togo ). Quantity: 50000 Tonnes",
     sell: false,
     shipping: ["CIF"],
     payment: ["SBLC"],
     categoryName: "Agriculture",
     subCategory: "Sugar",
     userId: 3,
     country:"Burkina Faso"
   },
   {
     title: "Sugar suppliers",
     description: "Sugar Grades Available Grades : ICUMSA 45, 100,150 , 600 -1200",
     sell: true,
     shipping: ["CIF"],
     payment: ["DLC"],
     categoryName: "Agriculture",
     subCategory: "Sugar",
     userId: 4,
     country:"Brazil"
   },
   //RICE
   {
     title: "Rice Like Basmati Rice",
     description: "Please provide a quotation to the following requirement from importer - Product Name: Rice Specifications : Colour: Natural Colour Texture: Soft Kind: Basmati Rice Variety: Long-Grain Rice Style: Fresh Cultivation Type: Organic",
     sell: false,
     shipping: ["FOB"],
     payment: ["SBLC"],
     categoryName: "Agriculture",
     subCategory: "Rice",
     userId:5 ,
     country:"EEUU"
   },
   {
     title: "White Rice",
     description: "The buyer would like to receive quotations for - Product Name: White Rice Packaging Terms : Customized Quantity Required : 50000 Metric Ton/Metric Tons",
     sell: false,
     shipping: ["CIF"],
     payment: ["LC"],
     categoryName: "Agriculture",
     subCategory: "Rice",
     userId: 6,
     country:"Mexico"
   },
   {
     title: "Rice",
     description: "Product of origin : Thailand Product Description : - Hommali rice -Long grain White Rice - Parboil rice",
     sell: true,
     shipping: ["FOB"],
     payment: ["DLC"],
     categoryName: "Agriculture",
     subCategory: "Rice",
     userId: 7,
     country:"Thailand"
   },
   {
     title: "Rice from India",
     description: "We are processor and exporter of Rice. This is the type of rice which is used to cook different sorts of traditional rice dishes and our product is appreciated for its unmatched quality and tempting aromatic fragrance, long grain, non-sticky after cooking.",
     sell: true,
     shipping: ["CIF"],
     payment: ["SBLC"],
     categoryName: "Agriculture",
     subCategory: "Rice",
     userId: 8,
     country:"India"
   },
   //CORN
     {
     title: "Wanted yellow Corn",
     description: "Buyer is interested to receive quotations for the following RFQ -  Specifications : Variety: SU or SE Quantity Required : 10000 - 15000 Kilogram/Kilograms ",
     sell: false,
     shipping: ["CIF"],
     payment: ["SBLC"],
     categoryName: "Agriculture",
     subCategory: "Corn",
     userId: 9,
     country:"Canada"
   },
   {
     title: "Looking form Popcorn",
     description: "Buyer is interested to receive quotations for the following RFQ - Product Name: Corn Specifications : Type: Popcorn Quantity Required : 1 Forty-Foot Container",
     sell: false,
     shipping: ["FOB"],
     payment: ["DLC"],
     categoryName: "Agriculture",
     subCategory: "Corn",
     userId: 10,
     country:"EEUU"
   },
   {
     title: "Multiple corns supplier",
     description: "We can supply huge quantity of Corn/Maize of Ukranian , Brazalian and Malasiyan Origin. For price and other details please contact us with LOI and company profile",
     sell: true,
     shipping: ["CIF"],
     payment: ["SBLC"],
     categoryName: "Agriculture",
     subCategory: "Corn",
     userId: 1,
     country:"India"
   },
   {
     title: "Corn seeds",
     description: "We trade corn seeds. This is very popular for multiple uses. World wide we supply this grain",
     sell: true,
     shipping: ["FOB"],
     payment: ["LC"],
     categoryName: "Agriculture",
     subCategory: "Corn",
     userId: 2,
     country:"Pakistan"
   },
   //COFFEE
   {
     title: "Buying coffee",
     description: "Please provide a quotation to the following requirement from importer - Specifications: Brands: Bru & Nestle From: Powder Style: Dried Packaging",
     sell: false,
     shipping: ["FOB"],
     payment: ["DLC"],
     categoryName: "Agriculture",
     subCategory: "Coffee",
     userId: 3,
     country:"Italy"
   },
   {
     title: "Coffee capsules",
     description: "Specifications : Lavazza Coffee- Beans, Capsules Type: Organic Quantity Required : 1 Twenty-Foot Container",
     sell: false,
     shipping: ["CIF"],
     payment: ["SBLC"],
     categoryName: "Agriculture",
     subCategory: "Coffee",
     userId: 4,
     country:"Israel"
   },
   {
     title: "Coffee",
     description: "Coffee from Indonesia. Arabika, Robusta, Peaberry bean all are available. We can do the coffee roasting and pack as per your request. We also able to supply you with Spried Dried Instant coffee (100% Lampung Robusta)",
     sell: true,
     shipping: ["FOB"],
     payment: ["SBLC"],
     categoryName: "Agriculture",
     subCategory: "Coffee",
     userId: 5,
     country:"Indonesia"
   },
   {
     title: "Supplier of Coffee from Brazil",
     description: "the Roasted and ground coffe san sebas has it origin with sowing Arabic coffee plants, In Cariamanga , inLoja Ecuador. San Sebas carries out a thorough in the selection of coffee beans , making sure to use heathy grains previously classified by , density and color",
     sell: true,
     shipping: ["CIF"],
     payment: ["LC"],
     categoryName: "Agriculture",
     subCategory: "Coffee",
     userId: 6,
     country:"Brazil"
   },
 //GASOLINE
   {
     title: "Gasoline 89 Octanes",
     description: " Quantity MIN 50,000MT x 12 months - Origin: Russian Federation",
     sell: true,
     shipping: ["CIF"],
     payment: ["LC"],
     categoryName: "Energy",
     subCategory: "Gasoline",
     userId: 7,
     country:"England"
   },
   {
     title: "Gasoline",
     description: "SCOPE PEGASO SN SCOPE PEGASO Fully Synthetic Oil has been formulated for latest on-road, high-performance and turbo-charged, inter-cooled direct injection high performance gasoline and diesel engines with normal SAPS passenger car portfolio.",
     sell: true,
     shipping: ["FOB"],
     payment: ["DLC"],
     categoryName: "Energy",
     subCategory: "Gasoline",
     userId: 8,
     country:"UAE"
   },
   {
     title: "Need Gasoline 95oct",
     description: "Gasoline 95 Octane Quantity Required : 50000 Metric Ton/Metric Tons",
     sell: false,
     shipping: ["FOB"],
     payment: ["SBLC"],
     categoryName: "Energy",
     subCategory: "Gasoline",
     userId: 9,
     country:""
   },
   {
     title: "Looking for Gasoline",
     description: "AGO And Gasoline Specifications : 1) AGO: Below 10ppm Of Sulfur 2) Gasoline: Unleaded + Above RON 94 Quantity Required : 45000 Metric Ton/Metric Tons Monthly",
     sell: false,
     shipping: ["CIF"],
     payment: ["LC"],
     categoryName: "Energy",
     subCategory: "Gasoline",
     userId: 10,
     country:"South Korea"
   },
   //HEATING FUEL
   {
     title: "Heat Exchanger",
     description: "Heat Exchanger Quantity Required : 1 Twenty-Foot Container ",
     sell: false,
     shipping: ["CIF"],
     payment: ["DLC"],
     categoryName: "Energy",
     subCategory: "Heating Fuel",
     userId: 1,
     country:"France"
   },
   {
     title: "Food Healing Fuel",
     description: "DEG Chafing Fuel With Wick Can Material:Tin plate Liquid: DEG fuel Burning time: 6Hours Label: could provide customer's own label.",
     sell: true,
     shipping: ["FOB"],
     payment: ["LC"],
     categoryName: "Energy",
     subCategory: "Heating Fuel",
     userId: 2,
     country:"China"
   },
   {
     title: "Tubular Heat Exchanger",
     description: "Stainless Steel Customizable Industrial Tubular Heat Exchanger Product Description : 1) Specification: 2LQFW or 2LQF6W: Heat Exchanger area = 0.5 - 16 sq. meter, Heat Transfer coefficient 348 -407 W/m2*K 2) Specification: 2LQF1W: Heat Exchanger area = 19 - 290 sq. meter, Heat Transfer coefficient 348 -407 W/m2* 3)",
     sell: true,
     shipping: ["SBLC"],
     payment: ["CIF"],
     categoryName: "Energy",
     subCategory: "Heating Fuel",
     userId: 3,
     country:"Canada"
   },
   {
     title: "Insulation Tube",
     description: "Insulation Tube Heat Shrink Specification: Insulation Use Various colors and sizes as per req. Specification standard Quantity Required : 12 Twenty-Foot Container",
     sell: false,
     shipping: ["CIF"],
     payment: ["LC"],
     categoryName: "Energy",
     subCategory: "Heating Fuel",
     userId: 4,
     country:"Poland"
   },
   //NATURAL GAS
   {
     title: "Gas Natural from Australia",
     description: "Liquified Natural Gas LNG Quantity Required : 40000 Metric Ton/Metric Tons",
     sell: true,
     shipping: ["FOB"],
     payment: ["SBLC"],
     categoryName: "Energy",
     subCategory: "Natural Gas",
     userId: 5,
     country:"Australia"
   },
   {
     title: "LNG Suppliers",
     description: "LNG is a colorless, odorless, non-toxic, non- corrosive, cryogenic liquid. LNG has a low flammability level due to low oxygen levels in its liquid state. If spilled, LNG turns into a vapor and leaves no residue. Origin :- Oman, Russia , Qatar",
     sell: true,
     shipping: ["CIF"],
     payment: ["LC"],
     categoryName: "Energy",
     subCategory: "Natural Gas",
     userId: 6,
     country:"India"
   },
   {
     title: "Need a supplier of Liquified Natural Gas",
     description: "Quantity Required : 200000 Metric Ton/Metric Tons Monthly",
     sell: false,
     shipping: ["CIF"],
     payment: ["DLC"],
     categoryName: "Energy",
     subCategory: "Natural Gas",
     userId: 7,
     country:"Paraguay"
   },
   {
     title: "Need LNG",
     description: "Liquified Natural Gas (LNG) Quantity Required : 100000 Metric Ton/Metric Tons. Destination Port : Taiwan",
     sell: false,
     shipping: ["CIF"],
     payment: ["DLC"],
     categoryName: "Energy",
     subCategory: "Natural Gas",
     userId: 8,
     country:"Taiwan"
   },

 //PETROLEUM
   {
     title: "Petroleum",
     description: "Jet fuel, diesel, base oil, lng, lpg, gas oil, rebco, espo, lco, crude oil, petroleoum coke",
     sell: true,
     shipping: ["FOB"],
     payment: ["SBLC"],
     categoryName: "Energy",
     subCategory: "Petroleum",
     userId: 9,
     country:"Russia"
   },
   {
     title: "Best product of Texas",
     description: "The best Oil from our glorious Republic of Texas. Large quantitys.",
     sell: true,
     shipping: ["CIF"],
     payment: ["LC"],
     categoryName: "Energy",
     subCategory: "Petroleum",
     userId: 10,
     country:"EEUU"
   },
   {
     title: "I need Petroleum from USA",
     description: "Please quote for the following wholesale product requirement: We are looking at Diesel En 590 / 10 ppm purchase in Dubai.",
     sell: false,
     shipping: ["FOB"],
     payment: ["DLC"],
     categoryName: "Energy",
     subCategory: "Petroleum",
     userId: 1,
     country:"UAE"
   },
   {
     title: "Looking for Petroleum",
     description: "We are looking for a supplier of Petroleum Products. Please send us your quotations in details.",
     sell: false,
     shipping: ["CIF"],
     payment: ["SBLC"],
     categoryName: "Energy",
     subCategory: "Petroleum",
     userId: 3,
     country:"Spain"
   },
   //pig cattle
   {
     title: "need cattle pig",
     description: "Wet Salted Pig Skins And Cattle Hides Packaging Terms : palletizinP Quantity Required : 1 Twenty-Foot Container",
     sell: false,
     shipping: ["CIF"],
     payment: ["DLC"],
     categoryName: "Livestock",
     subCategory: "Pig Cattle",
     userId: 2,
     country:"Venezuela"
   },
   {
     title: "Looking for pig meat",
     description: "Canned Pork Quantity Required : 1 Twenty-Foot Container",
     sell: false,
     shipping: ["FOB"],
     payment: ["SBLC"],
     categoryName: "Livestock",
     subCategory: "Pig Cattle",
     userId: 4,
     country:"Chile"
   },
   {
     title: "Canned pig",
     description: "Canned meat like canned beef, pork. Contact for more details",
     sell: true,
     shipping: ["CIF"],
     payment: ["LC"],
     categoryName: "Livestock",
     subCategory: "Pig Cattle",
     userId: 4,
     country:"Indonesia"
   },
   {
     title: "Frozen Pork",
     description: "Frozen Pork. Largue Quantitys.",
     sell: true,
     shipping: ["FOB"],
     payment: ["SBLC"],
     categoryName: "Livestock",
     subCategory: "Pig Cattle",
     userId: 5,
     country:"USA"
   },
   //BEEF CATTLE
   {
     title: "Beef Cattle Supplier",
     description: "Beef in Housings, in Channel, Cuts 4 and 6 Parts. Cuts Up to 24 Parts. Cif Aswp Prices. Aqsiq, Sgs, Other Documents of the Export. Icpo + Bcl or Wra / Fco or Spa, Pop. Meat of Brazil Branangus.",
     sell: true,
     shipping: ["CIF"],
     payment: ["DLC"],
     categoryName: "Livestock",
     subCategory: "Beef Cattle",    
     userId: 6,
     country:"Brazil"
   },
   {
     title: "Beef from Argentina",
     description: "Meat Products Fresh Beef",
     sell: true,
     shipping: ["FOB"],
     payment: ["SBLC"],
     categoryName: "Livestock",
     subCategory: "Beef Cattle",    
     userId: 5,
     country:"Argentina"
   },
   {
     title: "Beef meat",
     description: "Type:Beef cuts for canning Quantity Required : 3 - 4 Twenty-Foot Container ",
     sell: false,
     shipping: ["CIF"],
     payment: ["LC"],
     categoryName: "Livestock",
     subCategory: "Beef Cattle",    
     userId: 7,
     country:"Perú"
   },
   {
     title: "Looking fresh meet beef",
     description: "Frozen Beef: Frozen Halal Beef Frozen Beef, Veal, Cuts And Offal: Prime Grade Quantity Required : 60000 Metric Ton/Metric Tons",
     sell: false,
     shipping: ["FOB"],
     payment: ["DLC"],
     categoryName: "Livestock",
     subCategory: "Beef Cattle",
     userId: 8,
     country:"Uzbekistan"
   },
   // Chicken Cattle
   {
     title: "Loocking Chicken meet",
     description: " Frozen Chicken Wings And Chicken Feet Specifications : Quantity : 2000 tons of chicken feets and 2000 tons of chicken wings Quantity Required : 2000 Ton/Tons",
     sell: false,
     shipping: ["CIF"],
     payment: ["DLC"],
     categoryName: "Livestock",
     subCategory: "Chicken Cattle",
     userId: 8,
     country:"France"
   },
   {
     title: "Brazilian Chicken",
     description: "Brazilian Frozen Chicken Quantity Required : 5000 Carton/Cartons ",
     sell: false,
     shipping: ["CIF"],
     payment: ["DLC"],
     categoryName: "Livestock",
     subCategory: "Chicken Cattle",
     userId: 9,
     country:"UAE"
   },
   {
     title: "Chicken HALAL",
     description: "We supply best quality Frozen HALAL chicken feet and other chicken parts like whole chicken, paws, wings, leg, breast, drumsticks.",
     sell: true,
     shipping: ["FOB"],
     payment: ["SBLC"],
     categoryName: "Livestock",
     subCategory: "Chicken Cattle",
     userId: 10,
     country:"Thailand"
   },
   {
     title: "Chicken eggs",
     description: "We are capable to supply our chicken egg as follows: Grade D (50 - 54.99g) Grade E (45 - 49.99g) Grade F (40 - 44.99g)",
     sell: true,
     shipping: ["FOB"],
     payment: ["LC"],
     categoryName: "Livestock",
     subCategory: "Chicken Cattle",
     userId: 10,
     country:"Malaysia"
   },
   ]

module.exports ={ api, categories, posts }; 