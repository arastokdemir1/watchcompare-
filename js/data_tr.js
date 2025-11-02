// js/data_tr.js

const brands = [
  {
    name: "Seiko",
    history: "Seiko, 1881 yılında Tokyo'da kuruldu ve 1969'da dünyanın ilk kuvars saatini üreterek saatçilikte devrim yarattı.", // TÜRKÇE ÇEVİRİ
    brandImage: "img/logo/seiko-logo-png-transparent.png"
  },
  {
    name: "Tissot",
    history: "1853 yılında İsviçre'de kurulan Tissot, kaliteli mekanik ve kuvars saatleriyle tanınır. Uygun fiyatlı İsviçre yapımı saat pazarının lideridir.", // TÜRKÇE ÇEVİRİ
    brandImage: "img/logo/tissot-1-logo-png-transparent_1.png"
  },
  {
    name: "Casio",
    history: "1946'da Japonya'da kurulan Casio, G-Shock ve hesap makineli saatler gibi dijital saat teknolojilerine öncülük etti.", // TÜRKÇE ÇEVİRİ
    brandImage: "img/logo/casio-logo-svg-vector.svg"
  },
  {
    name: "Citizen",
    history: "Citizen, 1918 yılında Japonya'da kuruldu ve Eco-Drive teknolojisi ile güneş enerjisiyle çalışan saatleri popülerleştirdi.", // TÜRKÇE ÇEVİRİ
    brandImage: "img/logo/citizen_watch-brandlogo.net_-512x512.png"
  },
  {
    name: "Audemars Piguet",
    history: "1875'te kurulan AP, Royal Oak serisiyle ikonikleşti. Yüksek komplikasyonlu mekanizmaları ve lüks tasarımlarıyla öne çıkar.", // TÜRKÇE ÇEVİRİ
    brandImage: "img/logo/audemars-piguet-logo-png-transparent.png"
  },
  {
    name: "Patek Philippe",
    history: "1839'dan beri İsviçre'de lüks saatler üreten Patek Philippe, yüksek komplikasyonlu mekanik saatleriyle tanınır. Nautilus ve Calatrava koleksiyonları prestijin simgeleridir.", // TÜRKÇE ÇEVİRİ
    brandImage: "img/logo/patek-philippe-logo-png-transparent.png"
  },
  {
    name: "Rolex",
    history: "1905'te kurulan Rolex, lüks otomatik saatlerin sembolüdür. Submariner ve Daytona gibi ikonik modelleri dayanıklılık ve prestij sunar.", // TÜRKÇE ÇEVİRİ
    brandImage: "img/logo/rolex-1-logo-png-transparent.png"
  },
  {
    name: "Omega",
    history: "1848'den beri İsviçre'de faaliyet gösteren Omega, Speedmaster (Ay Saati) ve Seamaster serileriyle ünlüdür. Yüksek hassasiyetli kronometreler üretir.", // TÜRKÇE ÇEVİRİ
    brandImage: "img/logo/images.png"
  },
  {
    name: "Orient",
    history: "1950'lerde Japonya'da kurulan Orient, dayanıklı ve uygun fiyatlı mekanik saatler sunar. Bambino gibi klasik tasarımları popülerdir.", // TÜRKÇE ÇEVİRİ
    brandImage: "https://logowik.com/content/uploads/images/318_orient.jpg"
  },
  {
    name: "Longines",
    history: "1832'de İsviçre'de kurulan Longines, zarif ve hassas saatleriyle tanınır. Elegance ve Heritage serileri hem klasik hem de sportif tarzlar sunar.", // TÜRKÇE ÇEVİRİ
    brandImage: "img/logo/longines-1-logo-png-transparent.png"
  },
  {
    name: "Hamilton",
    history: "1892'de kurulan Hamilton, retro ve klasik tasarımlara sahip, uygun fiyatlı mekanik ve otomatik saatler üretir. Film endüstrisinde sıkça kullanılır.", // TÜRKÇE ÇEVİRİ
    brandImage: "img/logo/hamilton-1-logo-svg-vector.svg"
  },
  {
    name: "TAG Heuer",
    history: "1860'ta kurulan TAG Heuer, motor sporları ile özdeşleşmiştir. Carrera ve Monaco serileri ile kronograf saatlerde bir liderdir.", // TÜRKÇE ÇEVİRİ
    brandImage: "img/logo/tag-heuer-2-logo-png-transparent.png"
  },
  {
    name: "Hublot",
    history: "1980'de kurulan Hublot, farklı malzemeleri birleştiren 'Füzyon Sanatı' konseptiyle lüks saat dünyasına yenilik getirdi. Big Bang serisi markanın amiral gemisidir.", // TÜRKÇE ÇEVİRİ
    brandImage: "img/logo/Hublot-logo.png"
  },
  {
    name: "Jaeger-LeCoultre",
    history: "1833'te kurulan JLC, 'Saat Üreticisinin Saat Üreticisi' olarak bilinir. Yenilikçi komplikasyonları ve efsanevi Reverso modeliyle ünlüdür.", // TÜRKÇE ÇEVİRİ
    brandImage: "img/logo/png-clipart-jaeger-lecoultre-watch-jewellery-brand-tourbillon-watch-white-text.png"
  },
  {
    name: "Vacheron Constantin",
    history: "1755'te kurulan Vacheron Constantin, dünyanın kesintisiz üretim yapan en eski saat üreticisidir. Yüksek saatçiliğin (Haute Horlogerie) zirvesini temsil eder.", // TÜRKÇE ÇEVİRİ
    brandImage: "img/logo/vacheron-constantin-logo-png_seeklogo-320127.png"
  }
];

// watches dizisi buraya, data.js'dekiyle AYNI ŞEKİLDE kopyalanmalıdır.
// ... (watches dizisinin tamamı)

const watches = [
  // --- SEIKO MODELS (10 Pieces) ---
  { 
    id: "s1", brand: "Seiko", model: "Presage SRPB43 'Cocktail Time'", movement: "Otomatik", diameter: "40.5mm", waterResistance: "50m", weight: "140g", price: "430€", image: "img/seiko/SRPB43J1.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Hardlex (Domed)", power_reserve: "41 Saat", lug_width: "20mm", is_chronograph: "No", thickness: "11.8mm", movement_calibre: "4R35", jewels: "23", frequency_vph: "21600", crown_type: "Çek/Bırak", strap_material: "Deri", has_date: "Var", bezel_function: "Sabit"
  },
  { 
    id: "s2", brand: "Seiko", model: "5 Sports SSK035K1 (GMT)", movement: "Otomatik (GMT)", diameter: "42.5mm", waterResistance: "100m", weight: "159.0g", price: "490€", image: "img/seiko/shopping.jpeg",
    case_material: "Paslanmaz Çelik", crystal_type: "Hardlex", power_reserve: "41 Saat", lug_width: "22mm", is_chronograph: "No", thickness: "13.6mm", movement_calibre: "4R34", jewels: "24", frequency_vph: "21600", crown_type: "Çek/Bırak", strap_material: "Çelik Bilezik", has_date: "Var", bezel_function: "GMT (24 Hour)"
  },
  { 
    id: "s3", brand: "Seiko", model: "Prospex SPB143J (62MAS Reinterpretation)", movement: "Otomatik", diameter: "40mm", waterResistance: "200m", weight: "180.0g", price: "1400€", image: "img/seiko/spb143j.jpg",
    case_material: "Paslanmaz Çelik (Diashield)", crystal_type: "Safir (Domed)", power_reserve: "70 Saat", lug_width: "20mm", is_chronograph: "No", thickness: "13.1mm", movement_calibre: "6R35", jewels: "24", frequency_vph: "21600", crown_type: "Vidalı", strap_material: "Çelik Bilezik", has_date: "Var", bezel_function: "Dalgıç (Tek Yönlü)"
  },
  { 
    id: "s4", brand: "Seiko", model: "King Seiko SJE113", movement: "Otomatik", diameter: "39.4mm", waterResistance: "50m", weight: "126.0g", price: "3200€", image: "img/seiko/SJE113.jpeg",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir (Box-Shaped)", power_reserve: "70 Saat", lug_width: "19mm", is_chronograph: "No", thickness: "9.9mm", movement_calibre: "6R31", jewels: "24", frequency_vph: "21600", crown_type: "Çek/Bırak", strap_material: "Deri", has_date: "Yok", bezel_function: "Sabit"
  },
  { 
    id: "s5", brand: "Seiko", model: "Prospex Speedtimer SSC911P1", movement: "Solar Quartz Chrono", diameter: "41.4mm", waterResistance: "100m", weight: "150g", price: "690€", image: "img/seiko/speedtimer.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "Solar (6 ay)", lug_width: "20mm", is_chronograph: "Evet", thickness: "13.3mm", movement_calibre: "V192", jewels: "N/A", frequency_vph: "N/A", crown_type: "Çek/Bırak", strap_material: "Çelik Bilezik", has_date: "Var", bezel_function: "Takimetre"
  },
  { 
    id: "s6", brand: "Seiko", model: "Prospex Turtle SRPE93 (PADI)", movement: "Otomatik", diameter: "45mm", waterResistance: "200m", weight: "195g", price: "450€", image: "img/seiko/turtle.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Hardlex", power_reserve: "41 Saat", lug_width: "22mm", is_chronograph: "No", thickness: "13.4mm", movement_calibre: "4R36", jewels: "24", frequency_vph: "21600", crown_type: "Vidalı", strap_material: "Silikon", has_date: "Var", bezel_function: "Dalgıç (Tek Yönlü)"
  },
  { 
    id: "s7", brand: "Seiko", model: "Alpinist SPB197J1", movement: "Otomatik", diameter: "39.5mm", waterResistance: "200m", weight: "150g", price: "790€", image: "img/seiko/alpinist.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "70 Saat", lug_width: "20mm", is_chronograph: "No", thickness: "13.2mm", movement_calibre: "6R35", jewels: "24", frequency_vph: "21600", crown_type: "Vidalı", strap_material: "Deri", has_date: "Var", bezel_function: "Compass (Inner)"
  },
  { 
    id: "s8", brand: "Seiko", model: "Prospex Marine Master SBDX023", movement: "Otomatik (Hi-Beat)", diameter: "44mm", waterResistance: "300m", weight: "209g", price: "3000€", image: "img/seiko/marinemaster.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "50 Saat", lug_width: "20mm", is_chronograph: "No", thickness: "15.4mm", movement_calibre: "8L35", jewels: "26", frequency_vph: "28800", crown_type: "Vidalı", strap_material: "Çelik Bilezik", has_date: "Var", bezel_function: "Dalgıç (Tek Yönlü)"
  },
  { 
    id: "s9", brand: "Seiko", model: "5 Sports SKX Style SRPE55K1", movement: "Otomatik", diameter: "40mm", waterResistance: "100m", weight: "140g", price: "300€", image: "img/seiko/srpe.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Hardlex", power_reserve: "41 Saat", lug_width: "20mm", is_chronograph: "No", thickness: "11.5mm", movement_calibre: "4R36", jewels: "24", frequency_vph: "21600", crown_type: "Çek/Bırak", strap_material: "Çelik Bilezik", has_date: "Var", bezel_function: "Sabit"
  },
  { 
    id: "s10", brand: "Seiko", model: "Panda Chronograph SSC813", movement: "Solar Quartz Chrono", diameter: "39mm", waterResistance: "100m", weight: "120g", price: "600€", image: "img/seiko/panda.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "Solar (6 ay)", lug_width: "20mm", is_chronograph: "Evet", thickness: "12.3mm", movement_calibre: "V192", jewels: "N/A", frequency_vph: "N/A", crown_type: "Çek/Bırak", strap_material: "Çelik Bilezik", has_date: "Var", bezel_function: "Takimetre"
  },


  // --- TISSOT MODELS (10 Pieces) ---
  { 
    id: "t1", brand: "Tissot", model: "PRX Powermatic 80", movement: "Otomatik", diameter: "40mm", waterResistance: "100m", weight: "138g", price: "690€", image: "img/tissot/tissot-prx-powermatic-80.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "80 Saat", lug_width: "12mm (Integrated)", is_chronograph: "No", thickness: "10.9mm", movement_calibre: "Powermatic 80.111", jewels: "23", frequency_vph: "21600", crown_type: "Çek/Bırak", strap_material: "Çelik Bilezik", has_date: "Var", bezel_function: "Sabit"
  },
  { 
    id: "t2", brand: "Tissot", model: "PRX Quartz Chronograph", movement: "Quartz", diameter: "42mm", waterResistance: "100m", weight: "145g", price: "550€", image: "img/tissot/prx-quartz-chrono.jpg",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "N/A (Quartz)", lug_width: "12mm (Integrated)", is_chronograph: "Evet", thickness: "11.6mm", movement_calibre: "G10.212", jewels: "4", frequency_vph: "N/A", crown_type: "Çek/Bırak", strap_material: "Çelik Bilezik", has_date: "Var", bezel_function: "Sabit"
  },
  { 
    id: "t3", brand: "Tissot", model: "Le Locle Powermatic 80", movement: "Otomatik", diameter: "39.3mm", waterResistance: "30m", weight: "75g", price: "590€", image: "img/tissot/le-locle.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "80 Saat", lug_width: "20mm", is_chronograph: "No", thickness: "9.8mm", movement_calibre: "Powermatic 80.111", jewels: "23", frequency_vph: "21600", crown_type: "Çek/Bırak", strap_material: "Deri", has_date: "Var", bezel_function: "Sabit"
  },
  { 
    id: "t4", brand: "Tissot", model: "Seastar 1000 Powermatic 80", movement: "Otomatik", diameter: "43mm", waterResistance: "300m", weight: "140g", price: "750€", image: "img/tissot/seastar.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "80 Saat", lug_width: "21mm", is_chronograph: "No", thickness: "12.7mm", movement_calibre: "Powermatic 80.111", jewels: "23", frequency_vph: "21600", crown_type: "Vidalı", strap_material: "Rubber", has_date: "Var", bezel_function: "Dalgıç (Tek Yönlü)"
  },
  { 
    id: "t5", brand: "Tissot", model: "Gentleman Powermatic 80 Silicium", movement: "Otomatik", diameter: "40mm", waterResistance: "100m", weight: "155g", price: "850€", image: "img/tissot/gentleman.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "80 Saat", lug_width: "21mm", is_chronograph: "No", thickness: "11.5mm", movement_calibre: "Powermatic 80.811", jewels: "25", frequency_vph: "21600", crown_type: "Çek/Bırak", strap_material: "Çelik Bilezik", has_date: "Var", bezel_function: "Sabit"
  },
  { 
    id: "t6", brand: "Tissot", model: "V8 Alpine Limited Edition Chrono", movement: "Quartz", diameter: "42.5mm", waterResistance: "100m", weight: "110g", price: "400€", image: "img/tissot/v8.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "N/A (Quartz)", lug_width: "22mm", is_chronograph: "Evet", thickness: "11.1mm", movement_calibre: "ETA G10.212", jewels: "4", frequency_vph: "N/A", crown_type: "Çek/Bırak", strap_material: "Deri", has_date: "Var", bezel_function: "Takimetre"
  },
  { 
    id: "t7", brand: "Tissot", model: "Chemin des Tourelles Powermatic 80", movement: "Otomatik", diameter: "42mm", waterResistance: "50m", weight: "85g", price: "720€", image: "img/tissot/chemin-des-tourelles.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "80 Saat", lug_width: "20mm", is_chronograph: "No", thickness: "10.8mm", movement_calibre: "Powermatic 80.111", jewels: "23", frequency_vph: "21600", crown_type: "Çek/Bırak", strap_material: "Deri", has_date: "Var", bezel_function: "Sabit"
  },
  { 
    id: "t8", brand: "Tissot", model: "Supersport Chrono T1256173305100", movement: "Quartz", diameter: "45.5mm", waterResistance: "100m", weight: "180g", price: "450€", image: "img/tissot/supersport-chrono.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "N/A (Quartz)", lug_width: "22mm", is_chronograph: "Evet", thickness: "11.9mm", movement_calibre: "ETA G10.212", jewels: "4", frequency_vph: "N/A", crown_type: "Çek/Bırak", strap_material: "Çelik Bilezik", has_date: "Var", bezel_function: "Sabit"
  },
  { 
    id: "t9", brand: "Tissot", model: "T-Race MotoGP Quartz Chrono", movement: "Quartz", diameter: "43mm", waterResistance: "100m", weight: "120g", price: "620€", image: "img/tissot/t-race-moto.png",
    case_material: "Paslanmaz Çelik (PVD Coating)", crystal_type: "Safir", power_reserve: "N/A (Quartz)", lug_width: "20mm", is_chronograph: "Evet", thickness: "12mm", movement_calibre: "ETA G10.212", jewels: "4", frequency_vph: "N/A", crown_type: "Çek/Bırak", strap_material: "Silikon", has_date: "Var", bezel_function: "Takimetre"
  },
  { 
    id: "t10", brand: "Tissot", model: "Ballade Powermatic 80 COSC", movement: "Otomatik (COSC)", diameter: "41mm", waterResistance: "50m", weight: "150g", price: "990€", image: "img/tissot/ballade.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "80 Saat", lug_width: "20mm", is_chronograph: "No", thickness: "10.4mm", movement_calibre: "Powermatic 80.811 COSC", jewels: "25", frequency_vph: "21600", crown_type: "Çek/Bırak", strap_material: "Çelik Bilezik", has_date: "Var", bezel_function: "Sabit"
  },
  { 
    id: "t11", brand: "Tissot", model: "PRX Automatic Chronograph", movement: "Otomatik", diameter: "42mm", waterResistance: "100m", weight: "184g", price: "2000€", image: "img/tissot/tissot-prx-otomatik-kronograf-t137.427.11.091.00-erkek-kol-saati-1.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "60 Saat", lug_width: "12mm (Entegre)", is_chronograph: "Evet", thickness: "14.5mm", movement_calibre: "Valjoux A05.H31", jewels: "27", frequency_vph: "28800", crown_type: "Çek/Bırak", strap_material: "Çelik Bilezik", has_date: "Var", bezel_function: "Sabit"
  },

  // --- CASIO MODELS (10 Pieces) ---
  { 
    id: "c1", brand: "Casio", model: "G-Shock GW-M5610U (Solar/Multiband)", movement: "Tough Solar Quartz", diameter: "43.2mm", waterResistance: "200m", weight: "51g", price: "150€", image: "img/casio/gshock-5610.png",
    case_material: "Resin", crystal_type: "Mineral", power_reserve: "Solar (10 ay)", lug_width: "16mm (Integrated)", is_chronograph: "Evet", thickness: "11.8mm", movement_calibre: "5611", jewels: "N/A", frequency_vph: "N/A", crown_type: "N/A", strap_material: "Resin", has_date: "Var", bezel_function: "Sabit"
  },
  { 
    id: "c2", brand: "Casio", model: "Edifice EQB-1000D (Solar/Bluetooth)", movement: "Tough Solar Quartz", diameter: "45.6mm", waterResistance: "100m", weight: "130g", price: "350€", image: "img/casio/edifice-eqb.jpg",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "Solar (5 ay)", lug_width: "22mm", is_chronograph: "Evet", thickness: "8.9mm", movement_calibre: "5601", jewels: "N/A", frequency_vph: "N/A", crown_type: "Çek/Bırak", strap_material: "Çelik Bilezik", has_date: "Var", bezel_function: "Sabit"
  },
  { 
    id: "c3", brand: "Casio", model: "F-91W", movement: "Quartz", diameter: "35.2mm", waterResistance: "30m", weight: "21g", price: "15€", image: "img/casio/f91w.png",
    case_material: "Resin", crystal_type: "Resin", power_reserve: "7 year battery life", lug_width: "18mm (Integrated)", is_chronograph: "Evet", thickness: "8.5mm", movement_calibre: "593", jewels: "N/A", frequency_vph: "N/A", crown_type: "N/A", strap_material: "Resin", has_date: "Var", bezel_function: "Sabit"
  },
  { 
    id: "c4", brand: "Casio", model: "G-Shock GM-2100-1A (CasiOak Metal)", movement: "Quartz", diameter: "44.4mm", waterResistance: "200m", weight: "72g", price: "200€", image: "img/casio/gm-2100.png",
    case_material: "Resin/Metal Bezel", crystal_type: "Mineral", power_reserve: "3 year battery life", lug_width: "16mm (Integrated)", is_chronograph: "Evet", thickness: "11.8mm", movement_calibre: "5613", jewels: "N/A", frequency_vph: "N/A", crown_type: "N/A", strap_material: "Resin", has_date: "Var", bezel_function: "Sabit"
  },
  { 
    id: "c5", brand: "Casio", model: "Vintage A168WA", movement: "Quartz", diameter: "38.6mm", waterResistance: "Splash Resistant", weight: "49g", price: "40€", image: "img/casio/a168wa.png",
    case_material: "Chrome Plated Resin", crystal_type: "Resin", power_reserve: "7 year battery life", lug_width: "18mm (Integrated)", is_chronograph: "Evet", thickness: "8.2mm", movement_calibre: "1275", jewels: "N/A", frequency_vph: "N/A", crown_type: "N/A", strap_material: "Çelik Bilezik", has_date: "Var", bezel_function: "Sabit"
  },
  { 
    id: "c6", brand: "Casio", model: "Lineage LCW-M170D (Solar/Multiband)", movement: "Tough Solar Quartz", diameter: "40mm", waterResistance: "50m", weight: "85g", price: "180€", image: "img/casio/lineage-m170d.png",
    case_material: "Paslanmaz Çelik (Titanium look)", crystal_type: "Safir", power_reserve: "Solar (5 ay)", lug_width: "20mm", is_chronograph: "No", thickness: "9.4mm", movement_calibre: "5161", jewels: "N/A", frequency_vph: "N/A", crown_type: "Çek/Bırak", strap_material: "Çelik Bilezik", has_date: "Var", bezel_function: "Sabit"
  },
  { 
    id: "c7", brand: "Casio", model: "Oceanus OCW-T200S (Solar/Bluetooth)", movement: "Tough Solar Quartz", diameter: "41.4mm", waterResistance: "100m", weight: "130g", price: "400€", image: "img/casio/oceanus-t200s.png",
    case_material: "Titanium", crystal_type: "Safir", power_reserve: "Solar (5 ay)", lug_width: "20mm", is_chronograph: "No", thickness: "10.7mm", movement_calibre: "5595", jewels: "N/A", frequency_vph: "N/A", crown_type: "Çek/Bırak", strap_material: "Titanium Bracelet", has_date: "Var", bezel_function: "Sabit"
  },
  { 
    id: "c8", brand: "Casio", model: "Duro MDV-106 (Marlin)", movement: "Quartz", diameter: "44mm", waterResistance: "200m", weight: "92g", price: "70€", image: "img/casio/duro.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Mineral", power_reserve: "3 year battery life", lug_width: "22mm", is_chronograph: "No", thickness: "12mm", movement_calibre: "2784", jewels: "N/A", frequency_vph: "N/A", crown_type: "Vidalı", strap_material: "Resin", has_date: "Var", bezel_function: "Dalgıç (Tek Yönlü)"
  },
  { 
    id: "c9", brand: "Casio", model: "Vintage CA-53WF (Calculator)", movement: "Quartz", diameter: "43.2mm", waterResistance: "Splash Resistant", weight: "25g", price: "35€", image: "img/casio/calculator.png",
    case_material: "Resin", crystal_type: "Resin", power_reserve: "5 year battery life", lug_width: "18mm (Integrated)", is_chronograph: "Evet", thickness: "8.2mm", movement_calibre: "437", jewels: "N/A", frequency_vph: "N/A", crown_type: "N/A", strap_material: "Resin", has_date: "Var", bezel_function: "Sabit"
  },
  { 
    id: "c10", brand: "Casio", model: "ProTrek PRG-340", movement: "Tough Solar Quartz", diameter: "51.7mm", waterResistance: "100m", weight: "65g", price: "250€", image: "img/casio/protrek-340.png",
    case_material: "Resin (Bio-Based)", crystal_type: "Mineral", power_reserve: "Solar (7 ay)", lug_width: "24mm (Integrated)", is_chronograph: "No", thickness: "15.1mm", movement_calibre: "3491", jewels: "N/A", frequency_vph: "N/A", crown_type: "N/A", strap_material: "Resin", has_date: "Var", bezel_function: "Compass/Altimeter"
  },
  

  // --- ROLEX MODELS (10 Pieces - Completed) ---
  { 
    id: "r1", brand: "Rolex", model: "Submariner Date 126610LN", movement: "Otomatik", diameter: "41mm", waterResistance: "300m", weight: "155g", price: "10500€", image: "img/rolex/submariner.png",
    case_material: "Oyster Çelik", crystal_type: "Safir", power_reserve: "70 Saat", lug_width: "21mm", is_chronograph: "No", thickness: "12.5mm", movement_calibre: "Calibre 3235", jewels: "31", frequency_vph: "28800", crown_type: "Vidalı", strap_material: "Oyster Bilezik", has_date: "Var", bezel_function: "Dalgıç (Tek Yönlü)"
  },
  { 
    id: "r2", brand: "Rolex", model: "Cosmograph Daytona 116500LN", movement: "Otomatik", diameter: "40mm", waterResistance: "100m", weight: "142g", price: "25000€", image: "img/rolex/rolex-daytona-40mm-stainless-steel-white-panda-index-dial-ceramic-bezel-ref-116500ln-948876_1280x.jpg",
    case_material: "Oyster Çelik", crystal_type: "Safir", power_reserve: "72 Saat", lug_width: "20mm", is_chronograph: "Evet", thickness: "12.2mm", movement_calibre: "Calibre 4130", jewels: "44", frequency_vph: "28800", crown_type: "Vidalı", strap_material: "Oyster Bilezik", has_date: "Yok", bezel_function: "Takimetre"
  },
  { 
    id: "r3", brand: "Rolex", model: "GMT-Master II 126710BLRO (Pepsi)", movement: "Otomatik", diameter: "40mm", waterResistance: "100m", weight: "150g", price: "11500€", image: "img/rolex/gmt-master-ii-pepsi.png",
    case_material: "Oyster Çelik", crystal_type: "Safir", power_reserve: "70 Saat", lug_width: "20mm", is_chronograph: "No", thickness: "12.0mm", movement_calibre: "Calibre 3285", jewels: "31", frequency_vph: "28800", crown_type: "Vidalı", strap_material: "Jubilee Bracelet", has_date: "Var", bezel_function: "GMT (Bidirectional)"
  },
  { 
    id: "r4", brand: "Rolex", model: "Oyster Perpetual 41 124300", movement: "Otomatik", diameter: "41mm", waterResistance: "100m", weight: "130g", price: "5700€", image: "img/rolex/op-41.png",
    case_material: "Oyster Çelik", crystal_type: "Safir", power_reserve: "70 Saat", lug_width: "20mm", is_chronograph: "No", thickness: "11.7mm", movement_calibre: "Calibre 3230", jewels: "31", frequency_vph: "28800", crown_type: "Vidalı", strap_material: "Oyster Bilezik", has_date: "Yok", bezel_function: "Sabit"
  },
  { 
    id: "r5", brand: "Rolex", model: "Datejust 36 126234 (Fluted)", movement: "Otomatik", diameter: "36mm", waterResistance: "100m", weight: "120g", price: "8000€", image: "img/rolex/datejust-36.png",
    case_material: "Oyster Çelik/Beyaz Altın", crystal_type: "Safir", power_reserve: "70 Saat", lug_width: "20mm", is_chronograph: "No", thickness: "11.5mm", movement_calibre: "Calibre 3235", jewels: "31", frequency_vph: "28800", crown_type: "Vidalı", strap_material: "Jubilee Bracelet", has_date: "Var", bezel_function: "Sabit"
  },
  { 
    id: "r6", brand: "Rolex", model: "Sea-Dweller Deepsea 136660", movement: "Otomatik", diameter: "44mm", waterResistance: "4000m", weight: "215g", price: "14000€", image: "img/rolex/deepsea.png",
    case_material: "Oyster Çelik", crystal_type: "Safir", power_reserve: "70 Saat", lug_width: "22mm", is_chronograph: "No", thickness: "17.7mm", movement_calibre: "Calibre 3235", jewels: "31", frequency_vph: "28800", crown_type: "Vidalı", strap_material: "Oyster Bilezik", has_date: "Var", bezel_function: "Dalgıç (Tek Yönlü)"
  },
  { 
    id: "r7", brand: "Rolex", model: "Explorer 36 124270", movement: "Otomatik", diameter: "36mm", waterResistance: "100m", weight: "105g", price: "6000€", image: "img/rolex/explorer.png",
    case_material: "Oyster Çelik", crystal_type: "Safir", power_reserve: "70 Saat", lug_width: "19mm", is_chronograph: "No", thickness: "11.6mm", movement_calibre: "Calibre 3230", jewels: "31", frequency_vph: "28800", crown_type: "Vidalı", strap_material: "Oyster Bilezik", has_date: "Yok", bezel_function: "Sabit"
  },
  { 
    id: "r8", brand: "Rolex", model: "Sky-Dweller 326934", movement: "Otomatik", diameter: "42mm", waterResistance: "100m", weight: "170g", price: "14500€", image: "img/rolex/sky-dweller.png",
    case_material: "Oyster Çelik/Beyaz Altın", crystal_type: "Safir", power_reserve: "72 Saat", lug_width: "21mm", is_chronograph: "No", thickness: "14.1mm", movement_calibre: "Calibre 9001", jewels: "40", frequency_vph: "28800", crown_type: "Vidalı", strap_material: "Oyster Bilezik", has_date: "Var", bezel_function: "Annual Calendar/GMT"
  },
  { 
    id: "r9", brand: "Rolex", model: "Yacht-Master 40 126622", movement: "Otomatik", diameter: "40mm", waterResistance: "100m", weight: "140g", price: "10500€", image: "img/rolex/yachtmaster.png",
    case_material: "Rolesium (Steel/Platinum)", crystal_type: "Safir", power_reserve: "70 Saat", lug_width: "20mm", is_chronograph: "No", thickness: "11.7mm", movement_calibre: "Calibre 3235", jewels: "31", frequency_vph: "28800", crown_type: "Vidalı", strap_material: "Oyster Bilezik", has_date: "Var", bezel_function: "Bidirectional"
  },
  { 
    id: "r10", brand: "Rolex", model: "Milgauss 116400GV", movement: "Otomatik", diameter: "40mm", waterResistance: "100m", weight: "157g", price: "8000€", image: "img/rolex/milgauss.png",
    case_material: "Oyster Çelik", crystal_type: "Safir", power_reserve: "48 Saat", lug_width: "20mm", is_chronograph: "No", thickness: "13.5mm", movement_calibre: "Calibre 3131", jewels: "31", frequency_vph: "28800", crown_type: "Vidalı", strap_material: "Oyster Bilezik", has_date: "Yok", bezel_function: "Sabit"
  },


  // --- OMEGA MODELS (10 Pieces - Completed) ---
  { 
    id: "o1", brand: "Omega", model: "Seamaster Diver 300M", movement: "Otomatik", diameter: "42mm", waterResistance: "300m", weight: "190g", price: "5500€", image: "img/omega/seamaster-300m.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "55 Saat", lug_width: "20mm", is_chronograph: "No", thickness: "13.6mm", movement_calibre: "Calibre 8800", jewels: "35", frequency_vph: "25200", crown_type: "Vidalı", strap_material: "Çelik Bilezik", has_date: "Var", bezel_function: "Dalgıç (Tek Yönlü)"
  },
  { 
    id: "o2", brand: "Omega", model: "Speedmaster Professional Moonwatch", movement: "Manual Winding", diameter: "42mm", waterResistance: "50m", weight: "138g", price: "6500€", image: "img/omega/speedmaster-moonwatch.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Hesalite/Safir (Optional)", power_reserve: "50 Saat", lug_width: "20mm", is_chronograph: "Evet", thickness: "13.2mm", movement_calibre: "Calibre 3861", jewels: "26", frequency_vph: "21600", crown_type: "Çek/Bırak", strap_material: "Çelik Bilezik", has_date: "Yok", bezel_function: "Takimetre"
  },
  { 
    id: "o3", brand: "Omega", model: "Constellation Co-Axial Master Chronometer", movement: "Otomatik", diameter: "39mm", waterResistance: "50m", weight: "155g", price: "7000€", image: "img/omega/constellation.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "55 Saat", lug_width: "19mm (Integrated)", is_chronograph: "No", thickness: "12.2mm", movement_calibre: "Calibre 8800", jewels: "35", frequency_vph: "25200", crown_type: "Çek/Bırak", strap_material: "Çelik Bilezik", has_date: "Var", bezel_function: "Sabit"
  },
  { 
    id: "o4", brand: "Omega", model: "Aqua Terra Co-Axial Master Chronometer", movement: "Otomatik", diameter: "41mm", waterResistance: "150m", weight: "145g", price: "5800€", image: "img/omega/aqua-terra.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "60 Saat", lug_width: "20mm", is_chronograph: "No", thickness: "13.2mm", movement_calibre: "Calibre 8900", jewels: "39", frequency_vph: "25200", crown_type: "Vidalı", strap_material: "Rubber", has_date: "Var", bezel_function: "Sabit"
  },
  { 
    id: "o5", brand: "Omega", model: "Speedmaster '57 Chronograph", movement: "Manual Winding", diameter: "40.5mm", waterResistance: "100m", weight: "145g", price: "9000€", image: "img/omega/0021118_omega-speedmaster-57-coaxial-master-chronometer-chronograph-405mm-33210415103001_1250.jpeg",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "60 Saat", lug_width: "20mm", is_chronograph: "Evet", thickness: "12.9mm", movement_calibre: "Calibre 9906", jewels: "54", frequency_vph: "28800", crown_type: "Çek/Bırak", strap_material: "Çelik Bilezik", has_date: "Yok", bezel_function: "Takimetre"
  },
  { 
    id: "o6", brand: "Omega", model: "Seamaster Planet Ocean 600M", movement: "Otomatik", diameter: "43.5mm", waterResistance: "600m", weight: "210g", price: "6500€", image: "img/omega/planet-ocean.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir (Domed)", power_reserve: "60 Saat", lug_width: "21mm", is_chronograph: "No", thickness: "16.0mm", movement_calibre: "Calibre 8900", jewels: "39", frequency_vph: "25200", crown_type: "Vidalı", strap_material: "Çelik Bilezik", has_date: "Var", bezel_function: "Dalgıç (Tek Yönlü)"
  },
  { 
    id: "o7", brand: "Omega", model: "De Ville Trésor Co-Axial Master Chronometer", movement: "Manual Winding", diameter: "40mm", waterResistance: "30m", weight: "70g", price: "10000€", image: "img/omega/de-ville-tresor.png",
    case_material: "Sedna Gold", crystal_type: "Safir (Domed)", power_reserve: "60 Saat", lug_width: "20mm", is_chronograph: "No", thickness: "10.6mm", movement_calibre: "Calibre 8910", jewels: "30", frequency_vph: "25200", crown_type: "Çek/Bırak", strap_material: "Deri", has_date: "Var", bezel_function: "Sabit"
  },
  { 
    id: "o8", brand: "Omega", model: "Speedmaster Racing Co-Axial Chronograph", movement: "Otomatik", diameter: "44.25mm", waterResistance: "100m", weight: "170g", price: "7200€", image: "img/omega/speedmaster-racing.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "60 Saat", lug_width: "21mm", is_chronograph: "Evet", thickness: "14.9mm", movement_calibre: "Calibre 9900", jewels: "54", frequency_vph: "28800", crown_type: "Vidalı", strap_material: "Rubber", has_date: "Var", bezel_function: "Takimetre"
  },
  { 
    id: "o9", brand: "Omega", model: "Seamaster Railmaster Co-Axial Master Chronometer", movement: "Otomatik", diameter: "40mm", waterResistance: "150m", weight: "145g", price: "4500€", image: "img/omega/railmaster.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir (Domed)", power_reserve: "55 Saat", lug_width: "20mm", is_chronograph: "No", thickness: "12.6mm", movement_calibre: "Calibre 8806", jewels: "35", frequency_vph: "25200", crown_type: "Vidalı", strap_material: "Çelik Bilezik", has_date: "Yok", bezel_function: "Sabit"
  },
  { 
    id: "o10", brand: "Omega", model: "Seamaster 300 Master Co-Axial", movement: "Otomatik", diameter: "41mm", waterResistance: "300m", weight: "165g", price: "7200€", image: "img/omega/seamaster-300-heritage.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir (Domed)", power_reserve: "60 Saat", lug_width: "21mm", is_chronograph: "No", thickness: "15.1mm", movement_calibre: "Calibre 8400", jewels: "38", frequency_vph: "25200", crown_type: "Vidalı", strap_material: "Çelik Bilezik", has_date: "Yok", bezel_function: "Dalgıç (Tek Yönlü)"
  },


  // --- AUDEMARS PIGUET MODELS (3 Pieces - Completed) ---
  { 
    id: "ap1", brand: "Audemars Piguet", model: "Royal Oak 'Jumbo' Extra-Thin 16202ST", movement: "Otomatik", diameter: "39mm", waterResistance: "50m", weight: "115g", price: "35000€", image: "img/ap/16202ST.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "55 Saat", lug_width: "20mm (Integrated)", is_chronograph: "No", thickness: "8.1mm", movement_calibre: "Calibre 7121", jewels: "33", frequency_vph: "28800", crown_type: "Vidalı", strap_material: "Çelik Bilezik", has_date: "Var", bezel_function: "Sabit"
  },
  { 
    id: "ap2", brand: "Audemars Piguet", model: "Code 11.59 Chronograph", movement: "Otomatik", diameter: "41mm", waterResistance: "30m", weight: "105g", price: "40000€", image: "img/ap/code-1159.png",
    case_material: "Beyaz Altın", crystal_type: "Safir (Double Domed)", power_reserve: "70 Saat", lug_width: "21mm", is_chronograph: "Evet", thickness: "12.6mm", movement_calibre: "Calibre 4401", jewels: "40", frequency_vph: "28800", crown_type: "Çek/Bırak", strap_material: "Deri", has_date: "Var", bezel_function: "Sabit"
  },
  { 
    id: "ap3", brand: "Audemars Piguet", model: "Royal Oak Offshore Chronograph", movement: "Otomatik", diameter: "42mm", waterResistance: "100m", weight: "180g", price: "30000€", image: "img/ap/offshore-chrono.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "70 Saat", lug_width: "26mm (Integrated)", is_chronograph: "Evet", thickness: "15.3mm", movement_calibre: "Calibre 4404", jewels: "40", frequency_vph: "28800", crown_type: "Vidalı", strap_material: "Rubber", has_date: "Var", bezel_function: "Sabit"
  },


  // --- PATEK PHILIPPE MODELS (3 Pieces - Completed) ---
  { 
    id: "pp1", brand: "Patek Philippe", model: "Nautilus 5711/1A-010 (Blue Dial)", movement: "Otomatik", diameter: "40mm", waterResistance: "120m", weight: "120g", price: "40000€", image: "img/patek/nautilus-5711.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "45 Saat", lug_width: "25mm (Integrated)", is_chronograph: "No", thickness: "8.3mm", movement_calibre: "Calibre 26-330 S C", jewels: "29", frequency_vph: "28800", crown_type: "Vidalı", strap_material: "Çelik Bilezik", has_date: "Var", bezel_function: "Sabit"
  },
  { 
    id: "pp2", brand: "Patek Philippe", model: "Calatrava 5227G (Beyaz Altın)", movement: "Otomatik", diameter: "39mm", waterResistance: "30m", weight: "80g", price: "32000€", image: "img/patek/calatrava-5227g.png",
    case_material: "Beyaz Altın", crystal_type: "Safir", power_reserve: "45 Saat", lug_width: "20mm", is_chronograph: "No", thickness: "9.2mm", movement_calibre: "Calibre 324 S C", jewels: "29", frequency_vph: "28800", crown_type: "Çek/Bırak", strap_material: "Alligator Deri", has_date: "Var", bezel_function: "Sabit"
  },
  { 
    id: "pp3", brand: "Patek Philippe", model: "Aquanaut Travel Time 5164A", movement: "Otomatik", diameter: "40.8mm", waterResistance: "120m", weight: "90g", price: "35000€", image: "img/patek/aquanaut.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "45 Saat", lug_width: "21mm (Integrated)", is_chronograph: "No", thickness: "10.2mm", movement_calibre: "Calibre 324 S C FUS", jewels: "29", frequency_vph: "28800", crown_type: "Vidalı", strap_material: "Rubber", has_date: "Var", bezel_function: "GMT (Travel Time)"
  },


  // --- CITIZEN MODELS (3 Pieces - Completed) ---
  { 
    id: "ci1", brand: "Citizen", model: "Eco-Drive Promaster Diver BN0151", movement: "Eco-Drive (Solar)", diameter: "44mm", waterResistance: "200m", weight: "170g", price: "250€", image: "img/citizen/bn0151.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Mineral", power_reserve: "Solar (6 ay)", lug_width: "20mm", is_chronograph: "No", thickness: "12mm", movement_calibre: "E168", jewels: "N/A", frequency_vph: "N/A", crown_type: "Vidalı", strap_material: "Rubber", has_date: "Var", bezel_function: "Dalgıç (Tek Yönlü)"
  },
  { 
    id: "ci2", brand: "Citizen", model: "Eco-Drive Satellite Wave GPS CC3005", movement: "Eco-Drive (GPS)", diameter: "44mm", waterResistance: "100m", weight: "120g", price: "800€", image: "img/citizen/cc3005.png",
    case_material: "Super Titanium", crystal_type: "Safir", power_reserve: "Solar (7 years)", lug_width: "22mm", is_chronograph: "No", thickness: "13mm", movement_calibre: "F150", jewels: "N/A", frequency_vph: "N/A", crown_type: "Çek/Bırak", strap_material: "Deri", has_date: "Var", bezel_function: "Sabit (GPS)"
  },
  { 
    id: "ci3", brand: "Citizen", model: "Tsuyosa Otomatik NJ0150", movement: "Otomatik", diameter: "40mm", waterResistance: "50m", weight: "135g", price: "280€", image: "img/citizen/nj0150.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "40 Saat", lug_width: "9mm (Integrated)", is_chronograph: "No", thickness: "11.7mm", movement_calibre: "8210", jewels: "21", frequency_vph: "21600", crown_type: "Çek/Bırak", strap_material: "Çelik Bilezik", has_date: "Var", bezel_function: "Sabit"
  },


  // --- HAMILTON MODELS (3 Pieces - Completed) ---
  { 
    id: "h1", brand: "Hamilton", model: "Khaki Field Mechanical H69439931", movement: "Manual Winding", diameter: "38mm", waterResistance: "50m", weight: "50g", price: "450€", image: "img/hamilton/khaki-field-mechanical.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "80 Saat", lug_width: "20mm", is_chronograph: "No", thickness: "9.5mm", movement_calibre: "H-50", jewels: "17", frequency_vph: "21600", crown_type: "Çek/Bırak", strap_material: "NATO Textile", has_date: "Yok", bezel_function: "Sabit"
  },
  { 
    id: "h2", brand: "Hamilton", model: "Jazzmaster Open Heart H32705141", movement: "Otomatik", diameter: "42mm", waterResistance: "50m", weight: "155g", price: "950€", image: "img/hamilton/jazzmaster-open-heart.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "80 Saat", lug_width: "22mm", is_chronograph: "No", thickness: "11.4mm", movement_calibre: "H-10", jewels: "25", frequency_vph: "21600", crown_type: "Çek/Bırak", strap_material: "Çelik Bilezik", has_date: "Yok", bezel_function: "Sabit"
  },
  { 
    id: "h3", brand: "Hamilton", model: "Ventura Elvis80 Auto H24555131", movement: "Otomatik", diameter: "42.5mm", waterResistance: "50m", weight: "100g", price: "1500€", image: "img/hamilton/ventura.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "80 Saat", lug_width: "21mm (Integrated)", is_chronograph: "No", thickness: "11.3mm", movement_calibre: "H-10", jewels: "25", frequency_vph: "21600", crown_type: "Çek/Bırak", strap_material: "Rubber", has_date: "Yok", bezel_function: "Sabit"
  },


  // --- LONGINES MODELS (3 Pieces - Completed) ---
  { 
    id: "l1", brand: "Longines", model: "HydroConquest Otomatik L3.781.4", movement: "Otomatik", diameter: "41mm", waterResistance: "300m", weight: "175g", price: "1200€", image: "img/longines/hydroconquest.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "72 Saat", lug_width: "21mm", is_chronograph: "No", thickness: "11.9mm", movement_calibre: "L888.5", jewels: "21", frequency_vph: "25200", crown_type: "Vidalı", strap_material: "Çelik Bilezik", has_date: "Var", bezel_function: "Dalgıç (Tek Yönlü)"
  },
  { 
    id: "l2", brand: "Longines", model: "Spirit 40mm (COSC)", movement: "Otomatik", diameter: "40mm", waterResistance: "100m", weight: "90g", price: "2200€", image: "img/longines/spirit.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "72 Saat", lug_width: "20mm", is_chronograph: "No", thickness: "12.2mm", movement_calibre: "L888.4 (COSC)", jewels: "21", frequency_vph: "25200", crown_type: "Vidalı", strap_material: "Deri", has_date: "Var", bezel_function: "Sabit"
  },
  { 
    id: "l3", brand: "Longines", model: "Master Collection Moonphase Chronograph", movement: "Otomatik Chrono", diameter: "42mm", waterResistance: "30m", weight: "110g", price: "3500€", image: "img/longines/master-moonphase.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "66 Saat", lug_width: "21mm", is_chronograph: "Evet", thickness: "14.3mm", movement_calibre: "L687 (ETA 7751 based)", jewels: "25", frequency_vph: "28800", crown_type: "Çek/Bırak", strap_material: "Alligator Deri", has_date: "Evet (Pointer)", bezel_function: "Sabit"
  },


  // --- ORIENT MODELS (3 Pieces - Completed) ---
  { 
    id: "or1", brand: "Orient", model: "Bambino V2 FAC00008W0", movement: "Otomatik", diameter: "40.5mm", waterResistance: "30m", weight: "65g", price: "180€", image: "img/orient/bambino-v2.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Mineral (Domed)", power_reserve: "40 Saat", lug_width: "21mm", is_chronograph: "No", thickness: "11.8mm", movement_calibre: "F6724", jewels: "22", frequency_vph: "21600", crown_type: "Çek/Bırak", strap_material: "Deri", has_date: "Var", bezel_function: "Sabit"
  },
  { 
    id: "or2", brand: "Orient", model: "Kamasu Diver RA-AA0004E", movement: "Otomatik", diameter: "41.8mm", waterResistance: "200m", weight: "170g", price: "260€", image: "img/orient/kamasu.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "40 Saat", lug_width: "22mm", is_chronograph: "No", thickness: "12.8mm", movement_calibre: "F6922", jewels: "22", frequency_vph: "21600", crown_type: "Vidalı", strap_material: "Çelik Bilezik", has_date: "Var", bezel_function: "Dalgıç (Tek Yönlü)"
  },
  { 
    id: "or3", brand: "Orient", model: "Star Classic Power Reserve RE-AU0002S", movement: "Otomatik", diameter: "38.7mm", waterResistance: "50m", weight: "140g", price: "550€", image: "img/orient/star-classic.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "50 Saat", lug_width: "20mm", is_chronograph: "No", thickness: "12.5mm", movement_calibre: "F6N44", jewels: "24", frequency_vph: "21600", crown_type: "Çek/Bırak", strap_material: "Çelik Bilezik", has_date: "Var", bezel_function: "Sabit"
  },


  // --- TAG HEUER MODELS (3 Pieces - Completed) ---
  { 
    id: "th1", brand: "TAG Heuer", model: "Carrera Calibre 16 Chronograph", movement: "Otomatik Chronograph", diameter: "41mm", waterResistance: "100m", weight: "155g", price: "4000€", image: "img/tagheuer/carrera.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "42 Saat", lug_width: "20mm", is_chronograph: "Evet", thickness: "16mm", movement_calibre: "Calibre 16 (ETA 7750 based)", jewels: "25", frequency_vph: "28800", crown_type: "Çek/Bırak", strap_material: "Deri", has_date: "Var", bezel_function: "Takimetre"
  },
  { 
    id: "th2", brand: "TAG Heuer", model: "Monaco Calibre 11", movement: "Otomatik Chronograph", diameter: "39x39mm", waterResistance: "100m", weight: "110g", price: "6500€", image: "img/tagheuer/monaco.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "40 Saat", lug_width: "22mm", is_chronograph: "Evet", thickness: "14mm", movement_calibre: "Calibre 11", jewels: "59", frequency_vph: "28800", crown_type: "Çek/Bırak (Left Side)", strap_material: "Deri", has_date: "Var", bezel_function: "Sabit"
  },
  { 
    id: "th3", brand: "TAG Heuer", model: "Aquaracer Professional 300", movement: "Otomatik", diameter: "43mm", waterResistance: "300m", weight: "195g", price: "3000€", image: "img/tagheuer/aquaracer.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "38 Saat", lug_width: "22mm", is_chronograph: "No", thickness: "12mm", movement_calibre: "Calibre 5", jewels: "26", frequency_vph: "28800", crown_type: "Vidalı", strap_material: "Çelik Bilezik", has_date: "Var", bezel_function: "Dalgıç (Tek Yönlü)"
  },


  // --- NEWLY ADDED BRANDS ---
  
  // --- HUBLOT MODELS (3 Pieces) ---
  { 
    id: "hu1", brand: "Hublot", model: "Big Bang Unico Titanium 42mm", movement: "Otomatik Chronograph", diameter: "42mm", waterResistance: "100m", weight: "125g", price: "18500€", image: "img/hublot/bigbang-unico.png",
    case_material: "Titanium", crystal_type: "Safir", power_reserve: "72 Saat", lug_width: "24mm (Integrated)", is_chronograph: "Evet", thickness: "14.5mm", movement_calibre: "HUB1280 (Unico 2)", jewels: "43", frequency_vph: "28800", crown_type: "Vidalı", strap_material: "Rubber", has_date: "Var", bezel_function: "Sabit"
  },
  { 
    id: "hu2", brand: "Hublot", model: "Classic Fusion Titanium 3-Hand", movement: "Otomatik", diameter: "45mm", waterResistance: "50m", weight: "110g", price: "8500€", image: "img/hublot/classic-fusion.png",
    case_material: "Titanium", crystal_type: "Safir", power_reserve: "42 Saat", lug_width: "24mm (Integrated)", is_chronograph: "No", thickness: "10.9mm", movement_calibre: "HUB1112 (Sellita SW300 based)", jewels: "25", frequency_vph: "28800", crown_type: "Çek/Bırak", strap_material: "Alligator/Rubber", has_date: "Var", bezel_function: "Sabit"
  },
  { 
    id: "hu3", brand: "Hublot", model: "Square Bang Unico All Black", movement: "Otomatik Chronograph", diameter: "42mm (Square)", waterResistance: "100m", weight: "135g", price: "25000€", image: "img/hublot/square-bang.png",
    case_material: "Ceramic", crystal_type: "Safir", power_reserve: "72 Saat", lug_width: "24mm (Integrated)", is_chronograph: "Evet", thickness: "15.7mm", movement_calibre: "HUB1280 (Unico 2)", jewels: "43", frequency_vph: "28800", crown_type: "Vidalı", strap_material: "Rubber", has_date: "Var", bezel_function: "Sabit"
  },

  // --- JAEGER-LECOULTRE MODELS (3 Pieces) ---
  { 
    id: "jlc1", brand: "Jaeger-LeCoultre", model: "Reverso Classic Duoface Small Seconds", movement: "Manual Winding", diameter: "47x28.3mm", waterResistance: "30m", weight: "75g", price: "10000€", image: "img/jlc/reverso-duoface.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "42 Saat", lug_width: "20mm", is_chronograph: "No", thickness: "10.3mm", movement_calibre: "Calibre 854A/2", jewels: "19", frequency_vph: "21600", crown_type: "Çek/Bırak", strap_material: "Alligator Deri", has_date: "Yok", bezel_function: "Dual Time Zone"
  },
  { 
    id: "jlc2", brand: "Jaeger-LeCoultre", model: "Master Ultra Thin Moon", movement: "Otomatik", diameter: "39mm", waterResistance: "50m", weight: "65g", price: "12000€", image: "img/jlc/master-ultra-thin-moon.png",
    case_material: "Pink Gold", crystal_type: "Safir", power_reserve: "70 Saat", lug_width: "20mm", is_chronograph: "No", thickness: "9.3mm", movement_calibre: "Calibre 925", jewels: "30", frequency_vph: "28800", crown_type: "Çek/Bırak", strap_material: "Alligator Deri", has_date: "Evet (Moonphase)", bezel_function: "Sabit"
  },
  { 
    id: "jlc3", brand: "Jaeger-LeCoultre", model: "Polaris Otomatik", movement: "Otomatik", diameter: "41mm", waterResistance: "100m", weight: "140g", price: "8000€", image: "img/jlc/polaris-Otomatik.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "70 Saat", lug_width: "21mm", is_chronograph: "No", thickness: "11.2mm", movement_calibre: "Calibre 899", jewels: "32", frequency_vph: "28800", crown_type: "Vidalı", strap_material: "Çelik Bilezik", has_date: "Var", bezel_function: "Inner Rotating Bezel"
  },

  // --- VACHERON CONSTANTIN MODELS (3 Pieces) ---
  { 
    id: "vc1", brand: "Vacheron Constantin", model: "Overseas Otomatik 4500V", movement: "Otomatik", diameter: "41mm", waterResistance: "150m", weight: "150g", price: "22000€", image: "img/vc/overseas-Otomatik.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "60 Saat", lug_width: "22mm (Integrated)", is_chronograph: "No", thickness: "11mm", movement_calibre: "Calibre 5100", jewels: "32", frequency_vph: "28800", crown_type: "Vidalı", strap_material: "Çelik Bilezik", has_date: "Var", bezel_function: "Sabit"
  },
  { 
    id: "vc2", brand: "Vacheron Constantin", model: "Patrimony Otomatik 85180", movement: "Otomatik", diameter: "40mm", waterResistance: "30m", weight: "70g", price: "18000€", image: "img/vc/patrimony-Otomatik.png",
    case_material: "Pink Gold", crystal_type: "Safir", power_reserve: "40 Saat", lug_width: "20mm", is_chronograph: "No", thickness: "8.5mm", movement_calibre: "Calibre 2450 Q6", jewels: "27", frequency_vph: "28800", crown_type: "Çek/Bırak", strap_material: "Alligator Deri", has_date: "Var", bezel_function: "Sabit"
  },
  { 
    id: "vc3", brand: "Vacheron Constantin", model: "FiftySix Complete Calendar", movement: "Otomatik", diameter: "40mm", waterResistance: "30m", weight: "85g", price: "25000€", image: "img/vc/fiftysix-calendar.png",
    case_material: "Paslanmaz Çelik", crystal_type: "Safir", power_reserve: "40 Saat", lug_width: "20mm", is_chronograph: "No", thickness: "11.6mm", movement_calibre: "Calibre 2460 QCL/1", jewels: "27", frequency_vph: "28800", crown_type: "Çek/Bırak", strap_material: "Calf Deri", has_date: "Evet (Complete Calendar)", bezel_function: "Sabit"
  },

];
