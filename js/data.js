// js/data.js

const brands = [
  {
    name: "Seiko",
    history: "Seiko was founded in Tokyo in 1881 and produced the world's first quartz watch in 1969.",
    brandImage: "img/seiko-logo-png-transparent.png"
  },
  {
    name: "Tissot",
    history: "Founded in Switzerland in 1853, Tissot is known for its quality mechanical and quartz watches.",
    brandImage: "img/tissot-1-logo-png-transparent_1.png"
  },
  {
    name: "Casio",
    history: "Founded in Japan in 1946, Casio revolutionized digital watch technology.",
    brandImage: "img/casio-logo-svg-vector.svg"
  },
  {
    name: "Citizen",
    history: "Citizen was founded in Japan in 1918 and popularized solar-powered watches with its Eco-Drive technology.",
    brandImage: "img/citizen_watch-brandlogo.net_-512x512.png"
  },
  {
    name: "Audemars Piguet",
    history: "Founded in 1875, AP became iconic with the Royal Oak series. It stands out with highly complicated mechanisms and luxurious designs.",
    brandImage: "img/audemars-piguet-logo-png-transparent.png"
  },
  {
    name: "Patek Philippe",
    history: "Producing luxury watches in Switzerland since 1839, Patek Philippe is known for its highly complicated mechanical watches. The Nautilus and Calatrava collections are symbols of prestige.",
    brandImage: "img/patek-philippe-logo-png-transparent.png"
  },
  {
    name: "Rolex",
    history: "Founded in 1905, Rolex is the symbol of luxury automatic watches. Iconic models like the Submariner and Daytona offer durability and prestige.",
    brandImage: "img/rolex-1-logo-png-transparent.png"
  },
  {
    name: "Omega",
    history: "Operating in Switzerland since 1848, Omega is famous for the Speedmaster and Seamaster. It produces high-precision mechanical and quartz watches.",
    brandImage: "img/images.png"
  },
  {
    name: "Orient",
    history: "Founded in Japan in the 1950s, Orient offers durable and affordable mechanical watches. Classic designs like the Bambino are popular.",
    brandImage: "img/images_1.png"
  },
  {
    name: "Longines",
    history: "Founded in Switzerland in 1832, Longines is known for its elegant and precise watches. The Elegance and Heritage series offer both classic and sporty styles.",
    brandImage: "img/longines-1-logo-png-transparent.png"
  },
  {
    name: "Hamilton",
    history: "Founded in 1892, Hamilton produces affordable mechanical and automatic watches. Its retro and classic designs are frequently used in the film industry.",
    brandImage: "img/hamilton-1-logo-svg-vector.svg"
  },
  {
    name: "TAG Heuer",
    history: "Founded in 1860, TAG Heuer is synonymous with motorsports. It is a leader in chronograph watches, especially with the Carrera and Monaco series.",
    brandImage: "img/tag-heuer-2-logo-png-transparent.png"
  }
];

const watches = [
  // --- SEIKO MODELS (10 Pieces) ---
  { 
    id: "s1", brand: "Seiko", model: "Presage SRPB43 'Cocktail Time'", movement: "Automatic", diameter: "40.5mm", waterResistance: "50m", weight: "140g", price: "430€", image: "img/seiko/SRPB43J1.png",
    case_material: "Stainless Steel", crystal_type: "Hardlex (Domed)", power_reserve: "41 hours", lug_width: "20mm", is_chronograph: "No", thickness: "11.8mm", movement_calibre: "4R35", jewels: "23", frequency_vph: "21600", crown_type: "Push/Pull", strap_material: "Leather", has_date: "Yes", bezel_function: "Fixed"
  },
  { 
    id: "s2", brand: "Seiko", model: "5 Sports SSK035K1 (GMT)", movement: "Automatic (GMT)", diameter: "42.5mm", waterResistance: "100m", weight: "159.0g", price: "490€", image: "img/seiko/shopping.jpeg",
    case_material: "Stainless Steel", crystal_type: "Hardlex", power_reserve: "41 hours", lug_width: "22mm", is_chronograph: "No", thickness: "13.6mm", movement_calibre: "4R34", jewels: "24", frequency_vph: "21600", crown_type: "Push/Pull", strap_material: "Steel Bracelet", has_date: "Yes", bezel_function: "GMT (24 Hour)"
  },
  { 
    id: "s3", brand: "Seiko", model: "Prospex SPB143J (62MAS Reinterpretation)", movement: "Automatic", diameter: "40mm", waterResistance: "200m", weight: "180.0g", price: "1400€", image: "img/seiko/spb143j.jpg",
    case_material: "Stainless Steel (Diashield)", crystal_type: "Sapphire (Domed)", power_reserve: "70 hours", lug_width: "20mm", is_chronograph: "No", thickness: "13.1mm", movement_calibre: "6R35", jewels: "24", frequency_vph: "21600", crown_type: "Screw-down", strap_material: "Steel Bracelet", has_date: "Yes", bezel_function: "Diver's (Unidirectional)"
  },
  { 
    id: "s4", brand: "Seiko", model: "King Seiko SJE113", movement: "Automatic", diameter: "39.4mm", waterResistance: "50m", weight: "126.0g", price: "3200€", image: "img/seiko/SJE113.jpeg",
    case_material: "Stainless Steel", crystal_type: "Sapphire (Box-Shaped)", power_reserve: "70 hours", lug_width: "19mm", is_chronograph: "No", thickness: "9.9mm", movement_calibre: "6R31", jewels: "24", frequency_vph: "21600", crown_type: "Push/Pull", strap_material: "Leather", has_date: "No", bezel_function: "Fixed"
  },
  { 
    id: "s5", brand: "Seiko", model: "Prospex Speedtimer SSC911P1", movement: "Solar Quartz Chrono", diameter: "41.4mm", waterResistance: "100m", weight: "150g", price: "690€", image: "img/seiko/speedtimer.png",
    case_material: "Stainless Steel", crystal_type: "Sapphire", power_reserve: "Solar (6 months)", lug_width: "20mm", is_chronograph: "Yes", thickness: "13.3mm", movement_calibre: "V192", jewels: "N/A", frequency_vph: "N/A", crown_type: "Push/Pull", strap_material: "Steel Bracelet", has_date: "Yes", bezel_function: "Tachymeter"
  },
  { 
    id: "s6", brand: "Seiko", model: "Prospex Turtle SRPE93 (PADI)", movement: "Automatic", diameter: "45mm", waterResistance: "200m", weight: "195g", price: "450€", image: "img/seiko/turtle.png",
    case_material: "Stainless Steel", crystal_type: "Hardlex", power_reserve: "41 hours", lug_width: "22mm", is_chronograph: "No", thickness: "13.4mm", movement_calibre: "4R36", jewels: "24", frequency_vph: "21600", crown_type: "Screw-down", strap_material: "Silicone", has_date: "Yes", bezel_function: "Diver's (Unidirectional)"
  },
  { 
    id: "s7", brand: "Seiko", model: "Alpinist SPB197J1", movement: "Automatic", diameter: "39.5mm", waterResistance: "200m", weight: "150g", price: "790€", image: "img/seiko/alpinist.png",
    case_material: "Stainless Steel", crystal_type: "Sapphire", power_reserve: "70 hours", lug_width: "20mm", is_chronograph: "No", thickness: "13.2mm", movement_calibre: "6R35", jewels: "24", frequency_vph: "21600", crown_type: "Screw-down", strap_material: "Leather", has_date: "Yes", bezel_function: "Compass (Inner)"
  },
  { 
    id: "s8", brand: "Seiko", model: "Prospex Marine Master SBDX023", movement: "Automatic (Hi-Beat)", diameter: "44mm", waterResistance: "300m", weight: "209g", price: "3000€", image: "img/seiko/marinemaster.png",
    case_material: "Stainless Steel", crystal_type: "Sapphire", power_reserve: "50 hours", lug_width: "20mm", is_chronograph: "No", thickness: "15.4mm", movement_calibre: "8L35", jewels: "26", frequency_vph: "28800", crown_type: "Screw-down", strap_material: "Steel Bracelet", has_date: "Yes", bezel_function: "Diver's (Unidirectional)"
  },
  { 
    id: "s9", brand: "Seiko", model: "5 Sports SKX Style SRPE55K1", movement: "Automatic", diameter: "40mm", waterResistance: "100m", weight: "140g", price: "300€", image: "img/seiko/srpe.png",
    case_material: "Stainless Steel", crystal_type: "Hardlex", power_reserve: "41 hours", lug_width: "20mm", is_chronograph: "No", thickness: "11.5mm", movement_calibre: "4R36", jewels: "24", frequency_vph: "21600", crown_type: "Push/Pull", strap_material: "Steel Bracelet", has_date: "Yes", bezel_function: "Fixed"
  },
  { 
    id: "s10", brand: "Seiko", model: "Panda Chronograph SSC813", movement: "Solar Quartz Chrono", diameter: "39mm", waterResistance: "100m", weight: "120g", price: "600€", image: "img/seiko/panda.png",
    case_material: "Stainless Steel", crystal_type: "Sapphire", power_reserve: "Solar (6 months)", lug_width: "20mm", is_chronograph: "Yes", thickness: "12.3mm", movement_calibre: "V192", jewels: "N/A", frequency_vph: "N/A", crown_type: "Push/Pull", strap_material: "Steel Bracelet", has_date: "Yes", bezel_function: "Tachymeter"
  },


  // --- TISSOT MODELS (10 Pieces) ---
  { 
    id: "t1", brand: "Tissot", model: "PRX Powermatic 80", movement: "Automatic", diameter: "40mm", waterResistance: "100m", weight: "138g", price: "690€", image: "img/tissot-prx-powermatic-80-t137407110410-495e-b.png",
    case_material: "Stainless Steel", crystal_type: "Sapphire", power_reserve: "80 hours", lug_width: "12mm (Integrated)", is_chronograph: "No", thickness: "10.9mm", movement_calibre: "Powermatic 80.111", jewels: "23", frequency_vph: "21600", crown_type: "Push/Pull", strap_material: "Steel Bracelet", has_date: "Yes", bezel_function: "Fixed"
  },
  { 
    id: "t2", brand: "Tissot", model: "PRX Quartz Chronograph", movement: "Quartz", diameter: "42mm", waterResistance: "100m", weight: "145g", price: "550€", image: "img/tissot/prx-quartz-chrono.jpg",
    case_material: "Stainless Steel", crystal_type: "Sapphire", power_reserve: "N/A (Quartz)", lug_width: "12mm (Integrated)", is_chronograph: "Yes", thickness: "11.6mm", movement_calibre: "G10.212", jewels: "4", frequency_vph: "N/A", crown_type: "Push/Pull", strap_material: "Steel Bracelet", has_date: "Yes", bezel_function: "Fixed"
  },
  { 
    id: "t3", brand: "Tissot", model: "Le Locle Powermatic 80", movement: "Automatic", diameter: "39.3mm", waterResistance: "30m", weight: "75g", price: "590€", image: "img/tissot/le-locle.png",
    case_material: "Stainless Steel", crystal_type: "Sapphire", power_reserve: "80 hours", lug_width: "20mm", is_chronograph: "No", thickness: "9.8mm", movement_calibre: "Powermatic 80.111", jewels: "23", frequency_vph: "21600", crown_type: "Push/Pull", strap_material: "Leather", has_date: "Yes", bezel_function: "Fixed"
  },
  { 
    id: "t4", brand: "Tissot", model: "Seastar 1000 Powermatic 80", movement: "Automatic", diameter: "43mm", waterResistance: "300m", weight: "140g", price: "750€", image: "img/tissot/seastar.png",
    case_material: "Stainless Steel", crystal_type: "Sapphire", power_reserve: "80 hours", lug_width: "21mm", is_chronograph: "No", thickness: "12.7mm", movement_calibre: "Powermatic 80.111", jewels: "23", frequency_vph: "21600", crown_type: "Screw-down", strap_material: "Rubber", has_date: "Yes", bezel_function: "Diver's (Unidirectional)"
  },
  { 
    id: "t5", brand: "Tissot", model: "Gentleman Powermatic 80 Silicium", movement: "Automatic", diameter: "40mm", waterResistance: "100m", weight: "155g", price: "850€", image: "img/tissot/gentleman.png",
    case_material: "Stainless Steel", crystal_type: "Sapphire", power_reserve: "80 hours", lug_width: "21mm", is_chronograph: "No", thickness: "11.5mm", movement_calibre: "Powermatic 80.811", jewels: "25", frequency_vph: "21600", crown_type: "Push/Pull", strap_material: "Steel Bracelet", has_date: "Yes", bezel_function: "Fixed"
  },
  { 
    id: "t6", brand: "Tissot", model: "V8 Alpine Limited Edition Chrono", movement: "Quartz", diameter: "42.5mm", waterResistance: "100m", weight: "110g", price: "400€", image: "img/tissot/v8.png",
    case_material: "Stainless Steel", crystal_type: "Sapphire", power_reserve: "N/A (Quartz)", lug_width: "22mm", is_chronograph: "Yes", thickness: "11.1mm", movement_calibre: "ETA G10.212", jewels: "4", frequency_vph: "N/A", crown_type: "Push/Pull", strap_material: "Leather", has_date: "Yes", bezel_function: "Tachymeter"
  },
  { 
    id: "t7", brand: "Tissot", model: "Chemin des Tourelles Powermatic 80", movement: "Automatic", diameter: "42mm", waterResistance: "50m", weight: "85g", price: "720€", image: "img/tissot/tourelles.png",
    case_material: "Stainless Steel", crystal_type: "Sapphire", power_reserve: "80 hours", lug_width: "21mm", is_chronograph: "No", thickness: "11.1mm", movement_calibre: "Powermatic 80.111", jewels: "23", frequency_vph: "21600", crown_type: "Push/Pull", strap_material: "Leather", has_date: "Yes", bezel_function: "Fixed"
  },
  { 
    id: "t8", brand: "Tissot", model: "Heritage Visodate Powermatic 80", movement: "Automatic", diameter: "42mm", waterResistance: "30m", weight: "82g", price: "590€", image: "img/tissot/visodate.png",
    case_material: "Stainless Steel", crystal_type: "Sapphire", power_reserve: "80 hours", lug_width: "20mm", is_chronograph: "No", thickness: "12.1mm", movement_calibre: "Powermatic 80.121", jewels: "25", frequency_vph: "21600", crown_type: "Push/Pull", strap_material: "Leather", has_date: "Yes", bezel_function: "Fixed"
  },
  { 
    id: "t9", brand: "Tissot", model: "Supersport Chrono", movement: "Quartz", diameter: "45.5mm", waterResistance: "100m", weight: "120g", price: "350€", image: "img/tissot/supersport.png",
    case_material: "Stainless Steel", crystal_type: "Sapphire", power_reserve: "N/A (Quartz)", lug_width: "22mm", is_chronograph: "Yes", thickness: "11.9mm", movement_calibre: "ETA G10.212", jewels: "4", frequency_vph: "N/A", crown_type: "Push/Pull", strap_material: "Leather", has_date: "Yes", bezel_function: "Tachymeter"
  },
  { 
    id: "t10", brand: "Tissot", model: "Sideral S Powermatic 80", movement: "Automatic", diameter: "41mm", waterResistance: "300m", weight: "60g", price: "900€", image: "img/tissot/sideral.png",
    case_material: "Forged Carbon", crystal_type: "Sapphire", power_reserve: "80 hours", lug_width: "20mm", is_chronograph: "No", thickness: "14.4mm", movement_calibre: "Powermatic 80.111", jewels: "23", frequency_vph: "21600", crown_type: "Push/Pull", strap_material: "Rubber", has_date: "Yes", bezel_function: "Diver's (Unidirectional)"
  },

  // --- CASIO MODELS (10 Pieces) ---
  { 
    id: "c1", brand: "Casio", model: "G-Shock GA-2100 'CasiOak'", movement: "Quartz", diameter: "45mm", waterResistance: "200m", weight: "51g", price: "100€", image: "img/casio/casio-gshock-ga2100.jpg",
    case_material: "Carbon/Resin", crystal_type: "Mineral", power_reserve: "2 year battery life", lug_width: "26mm (Integrated)", is_chronograph: "Yes", thickness: "11.8mm", movement_calibre: "5611", jewels: "N/A", frequency_vph: "N/A", crown_type: "N/A", strap_material: "Resin", has_date: "Yes", bezel_function: "Fixed"
  },
  { 
    id: "c2", brand: "Casio", model: "Edifice EQB-1000D (Solar/Bluetooth)", movement: "Tough Solar Quartz", diameter: "45.6mm", waterResistance: "100m", weight: "130g", price: "350€", image: "img/casio/edifice-eqb.jpg",
    case_material: "Stainless Steel", crystal_type: "Sapphire", power_reserve: "Solar (5 months)", lug_width: "22mm", is_chronograph: "Yes", thickness: "8.9mm", movement_calibre: "5601", jewels: "N/A", frequency_vph: "N/A", crown_type: "Push/Pull", strap_material: "Steel Bracelet", has_date: "Yes", bezel_function: "Fixed"
  },
  { 
    id: "c3", brand: "Casio", model: "F-91W", movement: "Quartz", diameter: "35.2mm", waterResistance: "30m", weight: "21g", price: "15€", image: "img/casio/f91w.png",
    case_material: "Resin", crystal_type: "Resin", power_reserve: "7 year battery life", lug_width: "18mm (Integrated)", is_chronograph: "Yes", thickness: "8.5mm", movement_calibre: "593", jewels: "N/A", frequency_vph: "N/A", crown_type: "N/A", strap_material: "Resin", has_date: "Yes", bezel_function: "Fixed"
  },
  { 
    id: "c4", brand: "Casio", model: "G-Shock GW-M5610U-1ER (Solar/Atomic)", movement: "Tough Solar Quartz (Radio Controlled)", diameter: "43.2mm", waterResistance: "200m", weight: "51g", price: "150€", image: "img/casio/5610u.png",
    case_material: "Resin", crystal_type: "Mineral", power_reserve: "Solar (10 months)", lug_width: "16mm (Integrated)", is_chronograph: "Yes", thickness: "12.7mm", movement_calibre: "3495", jewels: "N/A", frequency_vph: "N/A", crown_type: "N/A", strap_material: "Resin", has_date: "Yes", bezel_function: "Fixed"
  },
  { 
    id: "c5", brand: "Casio", model: "A168WA-1YES", movement: "Quartz", diameter: "38.6mm", waterResistance: "30m", weight: "49g", price: "30€", image: "img/casio/a168.png",
    case_material: "Chrome Plated Resin", crystal_type: "Resin", power_reserve: "7 year battery life", lug_width: "18mm (Integrated)", is_chronograph: "Yes", thickness: "8.2mm", movement_calibre: "1275", jewels: "N/A", frequency_vph: "N/A", crown_type: "N/A", strap_material: "Steel Bracelet", has_date: "Yes", bezel_function: "Fixed"
  },
  { 
    id: "c6", brand: "Casio", model: "Edifice EFR-S108D-1AVUEF", movement: "Quartz", diameter: "40mm", waterResistance: "100m", weight: "110g", price: "120€", image: "img/casio/edifice-efr.png",
    case_material: "Stainless Steel", crystal_type: "Sapphire", power_reserve: "3 year battery life", lug_width: "20mm (Integrated)", is_chronograph: "No", thickness: "8.3mm", movement_calibre: "5585", jewels: "N/A", frequency_vph: "N/A", crown_type: "Push/Pull", strap_material: "Steel Bracelet", has_date: "Yes", bezel_function: "Fixed"
  },
  { 
    id: "c7", brand: "Casio", model: "G-Shock MTG-B2000B-1A2ER", movement: "Tough Solar Quartz (Radio Controlled)", diameter: "51mm", waterResistance: "200m", weight: "127g", price: "900€", image: "img/casio/mtg.png",
    case_material: "Carbon/Stainless Steel", crystal_type: "Sapphire", power_reserve: "Solar (5 months)", lug_width: "28mm (Integrated)", is_chronograph: "Yes", thickness: "14.2mm", movement_calibre: "5636", jewels: "N/A", frequency_vph: "N/A", crown_type: "Screw-down", strap_material: "Resin", has_date: "Yes", bezel_function: "World Time"
  },
  { 
    id: "c8", brand: "Casio", model: "Duro MDV-106 (Marlin)", movement: "Quartz", diameter: "44mm", waterResistance: "200m", weight: "92g", price: "80€", image: "img/casio/duro.png",
    case_material: "Stainless Steel", crystal_type: "Mineral", power_reserve: "3 year battery life", lug_width: "22mm", is_chronograph: "No", thickness: "12mm", movement_calibre: "2784", jewels: "N/A", frequency_vph: "N/A", crown_type: "Screw-down", strap_material: "Resin", has_date: "Yes", bezel_function: "Diver's (Unidirectional)"
  },
  { 
    id: "c9", brand: "Casio", model: "Vintage CA-53WF (Calculator)", movement: "Quartz", diameter: "43.2mm", waterResistance: "Splash Resistant", weight: "25g", price: "35€", image: "img/casio/calculator.png",
    case_material: "Resin", crystal_type: "Resin", power_reserve: "5 year battery life", lug_width: "18mm (Integrated)", is_chronograph: "Yes", thickness: "8.2mm", movement_calibre: "437", jewels: "N/A", frequency_vph: "N/A", crown_type: "N/A", strap_material: "Resin", has_date: "Yes", bezel_function: "Fixed"
  },
  { 
    id: "c10", brand: "Casio", model: "ProTrek PRG-340", movement: "Tough Solar Quartz", diameter: "51.7mm", waterResistance: "100m", weight: "65g", price: "250€", image: "img/casio/protrek.png",
    case_material: "Resin (Bio-based)", crystal_type: "Mineral", power_reserve: "Solar (7 months)", lug_width: "24mm (Integrated)", is_chronograph: "Yes", thickness: "14.8mm", movement_calibre: "3513", jewels: "N/A", frequency_vph: "N/A", crown_type: "N/A", strap_material: "Resin", has_date: "Yes", bezel_function: "Compass (Bidirectional)"
  },
  
  // --- CITIZEN MODELS (3 Pieces) ---
  { 
    id: "ci1", brand: "Citizen", model: "Eco-Drive Promaster Diver BN0151", movement: "Eco-Drive Quartz (Solar)", diameter: "44mm", waterResistance: "200m", weight: "105g", price: "290€", image: "img/citizen/promaster-eco-drive.jpg",
    case_material: "Stainless Steel", crystal_type: "Mineral", power_reserve: "Unlimited (Solar)", lug_width: "20mm", is_chronograph: "No", thickness: "12mm", movement_calibre: "E168", jewels: "N/A", frequency_vph: "N/A", crown_type: "Screw-down", strap_material: "Polyurethane", has_date: "Yes", bezel_function: "Diver's (Unidirectional)"
  },
  { 
    id: "ci2", brand: "Citizen", model: "Tsuno Chrono Racer AV0070", movement: "Eco-Drive Quartz (Solar) Chrono", diameter: "45mm", waterResistance: "200m", weight: "190g", price: "650€", image: "img/citizen/tsuno-chrono.jpg",
    case_material: "Stainless Steel", crystal_type: "Sapphire", power_reserve: "Solar (8 months)", lug_width: "24mm", is_chronograph: "Yes", thickness: "14.5mm", movement_calibre: "E210", jewels: "N/A", frequency_vph: "N/A", crown_type: "Push/Pull", strap_material: "Steel Bracelet", has_date: "Yes", bezel_function: "Fixed"
  },
  { 
    id: "ci3", brand: "Citizen", model: "Eco-Drive World Time AT8110", movement: "Eco-Drive Quartz (Radio Controlled)", diameter: "43mm", waterResistance: "100m", weight: "95g", price: "450€", image: "img/citizen/world-time.png",
    case_material: "Stainless Steel", crystal_type: "Sapphire", power_reserve: "Solar (6 months)", lug_width: "22mm", is_chronograph: "Yes", thickness: "11mm", movement_calibre: "H804", jewels: "N/A", frequency_vph: "N/A", crown_type: "Push/Pull", strap_material: "Leather", has_date: "Yes", bezel_function: "World Time"
  },
  
  // --- ROLEX MODELS (10 Pieces) ---
  { 
    id: "r1", brand: "Rolex", model: "Submariner Date 126610LN", movement: "Automatic", diameter: "41mm", waterResistance: "300m", weight: "155g", price: "12000€", image: "img/rolex/Buyuk2.jpg",
    case_material: "Oystersteel", crystal_type: "Sapphire (with Cyclops)", power_reserve: "70 hours", lug_width: "20mm", is_chronograph: "No", thickness: "13mm", movement_calibre: "Calibre 3235", jewels: "31", frequency_vph: "28800", crown_type: "Screw-down (Triplock)", strap_material: "Oyster Bracelet", has_date: "Yes", bezel_function: "Diver's (Unidirectional)"
  },
  { 
    id: "r2", brand: "Rolex", model: "Cosmograph Daytona 116500LN", movement: "Automatic", diameter: "40mm", waterResistance: "100m", weight: "142g", price: "25000€", image: "img/rolex/rolex-daytona-40mm-stainless-steel-white-panda-index-dial-ceramic-bezel-ref-116500ln-948876_1280x.jpg",
    case_material: "Oystersteel", crystal_type: "Sapphire", power_reserve: "72 hours", lug_width: "20mm", is_chronograph: "Yes", thickness: "12.2mm", movement_calibre: "Calibre 4130", jewels: "44", frequency_vph: "28800", crown_type: "Screw-down (Triplock)", strap_material: "Oyster Bracelet", has_date: "No", bezel_function: "Tachymeter"
  },
  { 
    id: "r3", brand: "Rolex", model: "GMT-Master II 126710BLRO (Pepsi)", movement: "Automatic", diameter: "40mm", waterResistance: "100m", weight: "150g", price: "11500€", image: "img/rolex/gmt-pepsi.png",
    case_material: "Oystersteel", crystal_type: "Sapphire (with Cyclops)", power_reserve: "70 hours", lug_width: "20mm", is_chronograph: "No", thickness: "12.1mm", movement_calibre: "Calibre 3285", jewels: "31", frequency_vph: "28800", crown_type: "Screw-down", strap_material: "Jubilee Bracelet", has_date: "Yes", bezel_function: "GMT (Bidirectional)"
  },
  { 
    id: "r4", brand: "Rolex", model: "Datejust 41 126334", movement: "Automatic", diameter: "41mm", waterResistance: "100m", weight: "135g", price: "9500€", image: "img/rolex/datejust.png",
    case_material: "Oystersteel / White Gold", crystal_type: "Sapphire (with Cyclops)", power_reserve: "70 hours", lug_width: "20mm", is_chronograph: "No", thickness: "11.7mm", movement_calibre: "Calibre 3235", jewels: "31", frequency_vph: "28800", crown_type: "Screw-down", strap_material: "Jubilee Bracelet", has_date: "Yes", bezel_function: "Fixed"
  },
  { 
    id: "r5", brand: "Rolex", model: "Explorer 124270 (36mm)", movement: "Automatic", diameter: "36mm", waterResistance: "100m", weight: "120g", price: "7000€", image: "img/rolex/explorer.png",
    case_material: "Oystersteel", crystal_type: "Sapphire", power_reserve: "70 hours", lug_width: "19mm", is_chronograph: "No", thickness: "11.5mm", movement_calibre: "Calibre 3230", jewels: "31", frequency_vph: "28800", crown_type: "Screw-down", strap_material: "Oyster Bracelet", has_date: "No", bezel_function: "Fixed"
  },
  { 
    id: "r6", brand: "Rolex", model: "Sea-Dweller 126600", movement: "Automatic", diameter: "43mm", waterResistance: "1220m", weight: "215g", price: "13500€", image: "img/rolex/seadweller.png",
    case_material: "Oystersteel", crystal_type: "Sapphire", power_reserve: "70 hours", lug_width: "22mm", is_chronograph: "No", thickness: "15mm", movement_calibre: "Calibre 3235", jewels: "31", frequency_vph: "28800", crown_type: "Screw-down (Triplock)", strap_material: "Oyster Bracelet", has_date: "Yes", bezel_function: "Diver's (Unidirectional)"
  },
  { 
    id: "r7", brand: "Rolex", model: "Oyster Perpetual 41 124300", movement: "Automatic", diameter: "41mm", waterResistance: "100m", weight: "130g", price: "5500€", image: "img/rolex/oyster-perpetual.png",
    case_material: "Oystersteel", crystal_type: "Sapphire", power_reserve: "70 hours", lug_width: "21mm", is_chronograph: "No", thickness: "11.7mm", movement_calibre: "Calibre 3230", jewels: "31", frequency_vph: "28800", crown_type: "Screw-down", strap_material: "Oyster Bracelet", has_date: "No", bezel_function: "Fixed"
  },
  { 
    id: "r8", brand: "Rolex", model: "Sky-Dweller 326934", movement: "Automatic", diameter: "42mm", waterResistance: "100m", weight: "165g", price: "15000€", image: "img/rolex/sky-dweller.png",
    case_material: "Oystersteel / White Gold", crystal_type: "Sapphire (with Cyclops)", power_reserve: "72 hours", lug_width: "21mm", is_chronograph: "No", thickness: "14.1mm", movement_calibre: "Calibre 9001", jewels: "40", frequency_vph: "28800", crown_type: "Screw-down", strap_material: "Oyster Bracelet", has_date: "Yes", bezel_function: "Annual Calendar/GMT"
  },
  { 
    id: "r9", brand: "Rolex", model: "Yacht-Master 40 126622", movement: "Automatic", diameter: "40mm", waterResistance: "100m", weight: "140g", price: "10500€", image: "img/rolex/yachtmaster.png",
    case_material: "Rolesium (Steel/Platinum)", crystal_type: "Sapphire (with Cyclops)", power_reserve: "70 hours", lug_width: "20mm", is_chronograph: "No", thickness: "11.7mm", movement_calibre: "Calibre 3235", jewels: "31", frequency_vph: "28800", crown_type: "Screw-down", strap_material: "Oyster Bracelet", has_date: "Yes", bezel_function: "Bidirectional"
  },
  { 
    id: "r10", brand: "Rolex", model: "Milgauss 116400GV", movement: "Automatic", diameter: "40mm", waterResistance: "100m", weight: "157g", price: "8000€", image: "img/rolex/milgauss.png",
    case_material: "Oystersteel", crystal_type: "Sapphire (Green Glass)", power_reserve: "48 hours", lug_width: "20mm", is_chronograph: "No", thickness: "13.5mm", movement_calibre: "Calibre 3131", jewels: "31", frequency_vph: "28800", crown_type: "Screw-down", strap_material: "Oyster Bracelet", has_date: "No", bezel_function: "Fixed"
  },

  // --- OMEGA MODELS (10 Pieces) ---
  { 
    id: "o1", brand: "Omega", model: "Seamaster Diver 300M", movement: "Automatic", diameter: "42mm", waterResistance: "300m", weight: "185g", price: "5500€", image: "img/omega/0011240_omega-seamaster-diver-300m-omega-co-axial-master-chronometer-42-mm-21030422003001_625.jpeg",
    case_material: "Stainless Steel", crystal_type: "Sapphire (Domed)", power_reserve: "55 hours", lug_width: "20mm", is_chronograph: "No", thickness: "13.6mm", movement_calibre: "Calibre 8800 (Co-Axial)", jewels: "35", frequency_vph: "25200", crown_type: "Screw-down", strap_material: "Steel Bracelet", has_date: "Yes", bezel_function: "Diver's (Unidirectional)"
  },
  { 
    id: "o2", brand: "Omega", model: "Speedmaster Moonwatch", movement: "Manual Winding", diameter: "42mm", waterResistance: "50m", weight: "140g", price: "7000€", image: "img/omega/0015717_omega-speedmaster-moonwatch-professional-co-axial-master-chronometer-chronograph-42-mm-3103042500100.jpeg",
    case_material: "Stainless Steel", crystal_type: "Hesalite", power_reserve: "50 hours", lug_width: "20mm", is_chronograph: "Yes", thickness: "13.2mm", movement_calibre: "Calibre 3861 (Co-Axial)", jewels: "26", frequency_vph: "21600", crown_type: "Push/Pull", strap_material: "Steel Bracelet", has_date: "No", bezel_function: "Tachymeter"
  },
  { 
    id: "o3", brand: "Omega", model: "Seamaster Aqua Terra 150M", movement: "Automatic", diameter: "41mm", waterResistance: "150m", weight: "155g", price: "5200€", image: "img/omega/aqua-terra.png",
    case_material: "Stainless Steel", crystal_type: "Sapphire", power_reserve: "60 hours", lug_width: "20mm", is_chronograph: "No", thickness: "13.2mm", movement_calibre: "Calibre 8900 (Co-Axial)", jewels: "39", frequency_vph: "25200", crown_type: "Push/Pull", strap_material: "Steel Bracelet", has_date: "Yes", bezel_function: "Fixed"
  },
  { 
    id: "o4", brand: "Omega", model: "Constellation Co-Axial Master Chronometer", movement: "Automatic", diameter: "39mm", waterResistance: "50m", weight: "110g", price: "6000€", image: "img/omega/constellation.png",
    case_material: "Stainless Steel", crystal_type: "Sapphire", power_reserve: "60 hours", lug_width: "20mm", is_chronograph: "No", thickness: "12mm", movement_calibre: "Calibre 8800", jewels: "35", frequency_vph: "25200", crown_type: "Push/Pull", strap_material: "Steel Bracelet", has_date: "Yes", bezel_function: "Fixed"
  },
  { 
    id: "o5", brand: "Omega", model: "Speedmaster '57 Chronograph", movement: "Manual Winding", diameter: "40.5mm", waterResistance: "100m", weight: "145g", price: "9000€", image: "img/omega/0021118_omega-speedmaster-57-coaxial-master-chronometer-chronograph-405mm-33210415103001_1250.jpeg",
    case_material: "Stainless Steel", crystal_type: "Sapphire", power_reserve: "60 hours", lug_width: "20mm", is_chronograph: "Yes", thickness: "12.9mm", movement_calibre: "Calibre 9906", jewels: "54", frequency_vph: "28800", crown_type: "Push/Pull", strap_material: "Steel Bracelet", has_date: "No", bezel_function: "Tachymeter"
  },
  { 
    id: "o6", brand: "Omega", model: "Seamaster Planet Ocean 600M", movement: "Automatic", diameter: "43.5mm", waterResistance: "600m", weight: "210g", price: "6500€", image: "img/omega/planet-ocean.png",
    case_material: "Stainless Steel", crystal_type: "Sapphire (Domed)", power_reserve: "60 hours", lug_width: "21mm", is_chronograph: "No", thickness: "16.04mm", movement_calibre: "Calibre 8900", jewels: "39", frequency_vph: "25200", crown_type: "Screw-down", strap_material: "Rubber", has_date: "Yes", bezel_function: "Diver's (Unidirectional)"
  },
  { 
    id: "o7", brand: "Omega", model: "Seamaster Railmaster", movement: "Automatic", diameter: "40mm", waterResistance: "150m", weight: "150g", price: "4500€", image: "img/omega/railmaster.png",
    case_material: "Stainless Steel", crystal_type: "Sapphire", power_reserve: "60 hours", lug_width: "20mm", is_chronograph: "No", thickness: "12.1mm", movement_calibre: "Calibre 8806", jewels: "35", frequency_vph: "25200", crown_type: "Push/Pull", strap_material: "Fabric", has_date: "No", bezel_function: "Fixed"
  },
  { 
    id: "o8", brand: "Omega", model: "De Ville Trésor Co-Axial", movement: "Manual Winding", diameter: "40mm", waterResistance: "30m", weight: "70g", price: "10000€", image: "img/omega/tresor.png",
    case_material: "Sedna Gold", crystal_type: "Sapphire (Domed)", power_reserve: "60 hours", lug_width: "20mm", is_chronograph: "No", thickness: "10.1mm", movement_calibre: "Calibre 8910", jewels: "30", frequency_vph: "25200", crown_type: "Push/Pull", strap_material: "Leather", has_date: "Yes", bezel_function: "Fixed"
  },
  { 
    id: "o9", brand: "Omega", model: "Speedmaster Dark Side of the Moon", movement: "Automatic Chronograph", diameter: "44.25mm", waterResistance: "50m", weight: "99g", price: "12500€", image: "img/omega/dsotm.png",
    case_material: "Black Ceramic", crystal_type: "Sapphire", power_reserve: "60 hours", lug_width: "21mm", is_chronograph: "Yes", thickness: "16.03mm", movement_calibre: "Calibre 9300", jewels: "54", frequency_vph: "28800", crown_type: "Push/Pull", strap_material: "Leather", has_date: "Yes", bezel_function: "Tachymeter"
  },
  { 
    id: "o10", brand: "Omega", model: "Seamaster 300 Master Co-Axial", movement: "Automatic", diameter: "41mm", waterResistance: "300m", weight: "150g", price: "6000€", image: "img/omega/seamaster300.png",
    case_material: "Stainless Steel", crystal_type: "Sapphire", power_reserve: "60 hours", lug_width: "21mm", is_chronograph: "No", thickness: "14.6mm", movement_calibre: "Calibre 8912", jewels: "39", frequency_vph: "25200", crown_type: "Screw-down", strap_material: "Steel Bracelet", has_date: "No", bezel_function: "Diver's (Unidirectional)"
  },

  // --- AUDEMARS PIGUET MODELS (1 Piece) ---
  // The entry was incomplete and has been translated and completed based on the model reference.
  { 
    id: "ap1", brand: "Audemars Piguet", model: "Royal Oak 'Jumbo' 16202ST", movement: "Automatic", diameter: "39mm", waterResistance: "50m", weight: "115g", price: "35000€", image: "img/ap/16202ST.png",
    case_material: "Stainless Steel", crystal_type: "Sapphire", power_reserve: "55 hours", lug_width: "20mm (Integrated)", is_chronograph: "No", thickness: "8.1mm", movement_calibre: "Calibre 7121", jewels: "33", frequency_vph: "28800", crown_type: "Screw-down", strap_material: "Steel Bracelet", has_date: "Yes", bezel_function: "Fixed"
  },
  { 
    id: "ap2", brand: "Audemars Piguet", model: "Code 11.59 Chronograph", movement: "Automatic", diameter: "41mm", waterResistance: "30m", weight: "105g", price: "40000€", image: "img/ap/code-1159.png",
    case_material: "White Gold", crystal_type: "Sapphire (Double Domed)", power_reserve: "70 hours", lug_width: "21mm", is_chronograph: "Yes", thickness: "12.6mm", movement_calibre: "Calibre 4401", jewels: "40", frequency_vph: "28800", crown_type: "Push/Pull", strap_material: "Leather", has_date: "Yes", bezel_function: "Fixed"
  },
  { 
    id: "ap3", brand: "Audemars Piguet", model: "Royal Oak Offshore Chrono", movement: "Automatic", diameter: "42mm", waterResistance: "100m", weight: "240g", price: "32000€", image: "img/ap/offshore.png",
    case_material: "Stainless Steel", crystal_type: "Sapphire", power_reserve: "50 hours", lug_width: "Integrated", is_chronograph: "Yes", thickness: "15.2mm", movement_calibre: "Calibre 3126/3840", jewels: "59", frequency_vph: "21600", crown_type: "Screw-down", strap_material: "Rubber", has_date: "Yes", bezel_function: "Fixed"
  },


  // --- PATEK PHILIPPE MODELS (3 Items) ---
  { 
    id: "pp1", brand: "Patek Philippe", model: "Nautilus 5711/1A", movement: "Automatic", diameter: "40mm", waterResistance: "120m", weight: "125g", price: "30000€", image: "img/pp/nautilus.png",
    case_material: "Stainless Steel", crystal_type: "Sapphire", power_reserve: "45 hours", lug_width: "Integrated", is_chronograph: "No", thickness: "8.3mm", movement_calibre: "Calibre 26-330 S C", jewels: "29", frequency_vph: "28800", crown_type: "Screw-down", strap_material: "Integrated Bracelet", has_date: "Yes", bezel_function: "Fixed"
  },
  { 
    id: "pp2", brand: "Patek Philippe", model: "Calatrava 6119R", movement: "Manual-Winding", diameter: "39mm", waterResistance: "30m", weight: "80g", price: "28000€", image: "img/pp/calatrava.png",
    case_material: "Rose Gold", crystal_type: "Sapphire", power_reserve: "65 hours", lug_width: "20mm", is_chronograph: "No", thickness: "8.08mm", movement_calibre: "Calibre 30-255 PS", jewels: "27", frequency_vph: "28800", crown_type: "Push/Pull", strap_material: "Leather", has_date: "No", bezel_function: "Fixed"
  },
  { 
    id: "pp3", brand: "Patek Philippe", model: "Aquanaut Travel Time 5164A", movement: "Automatic (GMT)", diameter: "40.8mm", waterResistance: "120m", weight: "100g", price: "45000€", image: "img/pp/aquanaut.png",
    case_material: "Stainless Steel", crystal_type: "Sapphire", power_reserve: "45 hours", lug_width: "Integrated", is_chronograph: "No", thickness: "10.2mm", movement_calibre: "Calibre 324 S C FUS", jewels: "29", frequency_vph: "28800", crown_type: "Screw-down", strap_material: "Rubber", has_date: "Yes", bezel_function: "Fixed"
  },

  // --- LONGINES MODELS (4 Items) ---
  { 
    id: "l1", brand: "Longines", model: "HydroConquest", movement: "Automatic", diameter: "41mm", waterResistance: "300m", weight: "150g", price: "1500€", image: "img/longines/hydroconquest.png",
    case_material: "Stainless Steel", crystal_type: "Sapphire", power_reserve: "72 hours", lug_width: "21mm", is_chronograph: "No", thickness: "11.9mm", movement_calibre: "L888", jewels: "21", frequency_vph: "25200", crown_type: "Screw-down", strap_material: "Steel Bracelet", has_date: "Yes", bezel_function: "Diver (Unidirectional)"
  },
  { 
    id: "l2", brand: "Longines", model: "Spirit 40mm (COSC)", movement: "Automatic", diameter: "40mm", waterResistance: "100m", weight: "90g", price: "2200€", image: "img/longines/spirit.png",
    case_material: "Stainless Steel", crystal_type: "Sapphire", power_reserve: "72 hours", lug_width: "20mm", is_chronograph: "No", thickness: "12.2mm", movement_calibre: "L888.4 (COSC)", jewels: "21", frequency_vph: "25200", crown_type: "Screw-down", strap_material: "Leather", has_date: "Yes", bezel_function: "Fixed"
  },
  { 
    id: "l3", brand: "Longines", model: "Master Collection Chrono", movement: "Automatic Chronograph", diameter: "40mm", waterResistance: "30m", weight: "135g", price: "2800€", image: "img/longines/master-chrono.png",
    case_material: "Stainless Steel", crystal_type: "Sapphire", power_reserve: "66 hours", lug_width: "21mm", is_chronograph: "Yes", thickness: "14.3mm", movement_calibre: "L688", jewels: "27", frequency_vph: "28800", crown_type: "Push/Pull", strap_material: "Leather", has_date: "Yes", bezel_function: "Fixed"
  },
  { 
    id: "l4", brand: "Longines", model: "DolceVita Quartz", movement: "Quartz", diameter: "23.3x37mm", waterResistance: "30m", weight: "60g", price: "1200€", image: "img/longines/dolcevita.png",
    case_material: "Stainless Steel", crystal_type: "Sapphire", power_reserve: "None (Quartz)", lug_width: "17mm", is_chronograph: "No", thickness: "7.2mm", movement_calibre: "L176", jewels: "13", frequency_vph: "None", crown_type: "Push/Pull", strap_material: "Steel Bracelet", has_date: "No", bezel_function: "Fixed"
  },

  // --- ORIENT MODELS (2 Items) ---
  { 
    id: "or1", brand: "Orient", model: "Bambino (Gen 2 V3)", movement: "Automatic", diameter: "40.5mm", waterResistance: "30m", weight: "65g", price: "250€", image: "img/orient/bambino.png",
    case_material: "Stainless Steel", crystal_type: "Mineral (Domed)", power_reserve: "40 hours", lug_width: "21mm", is_chronograph: "No", thickness: "11.8mm", movement_calibre: "F6724", jewels: "22", frequency_vph: "21600", crown_type: "Push/Pull", strap_material: "Leather", has_date: "Yes", bezel_function: "Fixed"
  },
  { 
    id: "or2", brand: "Orient", model: "Kamasu AA0004E19B", movement: "Automatic", diameter: "41.8mm", waterResistance: "200m", weight: "175g", price: "350€", image: "img/orient/kamasu.png",
    case_material: "Stainless Steel", crystal_type: "Sapphire", power_reserve: "40 hours", lug_width: "22mm", is_chronograph: "No", thickness: "12.8mm", movement_calibre: "F6922", jewels: "22", frequency_vph: "21600", crown_type: "Screw-down", strap_material: "Steel Bracelet", has_date: "Yes", bezel_function: "Diver (Unidirectional)"
  },

  // --- TAG HEUER MODELS (3 Items) ---
  { 
    id: "th1", brand: "TAG Heuer", model: "Carrera Calibre 16 Chrono", movement: "Automatic Chronograph", diameter: "41mm", waterResistance: "100m", weight: "155g", price: "4000€", image: "img/tagheuer/carrera.png",
    case_material: "Stainless Steel", crystal_type: "Sapphire", power_reserve: "42 hours", lug_width: "20mm", is_chronograph: "Yes", thickness: "16mm", movement_calibre: "Calibre 16 (ETA 7750 tabanlı)", jewels: "25", frequency_vph: "28800", crown_type: "Push/Pull", strap_material: "Leather", has_date: "Yes", bezel_function: "Tachymeter"
  },
  { 
    id: "th2", brand: "TAG Heuer", model: "Monaco Calibre 11", movement: "Automatic Chronograph", diameter: "39x39mm", waterResistance: "100m", weight: "110g", price: "6500€", image: "img/tagheuer/monaco.png",
    case_material: "Stainless Steel", crystal_type: "Sapphire", power_reserve: "40 hours", lug_width: "22mm", is_chronograph: "Yes", thickness: "14mm", movement_calibre: "Calibre 11", jewels: "59", frequency_vph: "28800", crown_type: "Push/Pull (Left Side)", strap_material: "Leather", has_date: "Yes", bezel_function: "Fixed"
  },
  { 
    id: "th3", brand: "TAG Heuer", model: "Aquaracer Professional 300", movement: "Automatic", diameter: "43mm", waterResistance: "300m", weight: "175g", price: "3500€", image: "img/tagheuer/aquaracer.png",
    case_material: "Stainless Steel", crystal_type: "Sapphire", power_reserve: "38 hours", lug_width: "22mm", is_chronograph: "No", thickness: "12mm", movement_calibre: "Calibre 5 (ETA 2824 tabanlı)", jewels: "25", frequency_vph: "28800", crown_type: "Screw-down", strap_material: "Steel Bracelet", has_date: "Yes", bezel_function: "Diver (Unidirectional)"
  }
]; 
