require([
  "esri/Map",
  "esri/views/MapView",
  "esri/Graphic",
  "esri/layers/GraphicsLayer",
  "esri/symbols/PictureMarkerSymbol",
], (Map, MapView, Graphic, GraphicsLayer, PictureMarkerSymbol) => {
  const map = new Map({
    basemap: "topo-vector",
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    zoom: 14,
    center: [106.797552, 10.7721569], // longitude, latitude
  });

  const graphicsLayer = new GraphicsLayer();
  map.add(graphicsLayer);

  // Thêm hình 10 trường đại học
  const schoolMarkerSymbol = {
    type: "picture-marker",
    url: "./images/school-symbol.jpg",
    width: "48px",
    height: "48px"
  }

  // 1. Truong DH CNTT
  const TruongDHCNTT = {
    //Create a point
    type: "point",
    longitude: 106.80111395648,
    latitude: 10.87858169754406
  };
  const DH1Graphic = new Graphic({
    geometry: TruongDHCNTT,
    symbol: schoolMarkerSymbol,
  });
  graphicsLayer.add(DH1Graphic);

  // 2. Truong DH Cong Nghiep
  const TruongDHCN = {
    //Create a point
    type: "point",
    longitude:106.68875065369579,
    latitude: 10.822327453081124
  };
  const DH2Graphic = new Graphic({
    geometry: TruongDHCN,
    symbol: schoolMarkerSymbol,
  });
  graphicsLayer.add(DH2Graphic);

  // 3. Truong DH Ngan Hang **
  const TruongDH3 = {
    //Create a point
    type: "point",
    longitude:106.78752144729627,
    latitude: 10.86195006680119
  };
  const DH3Graphic = new Graphic({
    geometry: TruongDH3,
    symbol: schoolMarkerSymbol,
  });
  graphicsLayer.add(DH3Graphic);

  // 4. Truong DH tra vinh
  const TruongDH4 = {
    //Create a point
    type: "point",
    longitude: 106.29504966615391,
    latitude: 9.957365840772155
  };
  const DH4Graphic = new Graphic({
    geometry: TruongDH4,
    symbol: schoolMarkerSymbol,
  });
  graphicsLayer.add(DH4Graphic);

  // 5. Truong DH can tho
  const TruongDH5 = {
    //Create a point
    type: "point",
    longitude: 106.33695747161549,
    latitude: 10.372190920018417
  };
  const DH5Graphic = new Graphic({
    geometry: TruongDH5,
    symbol: schoolMarkerSymbol,
  });
  graphicsLayer.add(DH5Graphic);

  // 6. Truong DH Kinh Te
  const TruongDH6 = {
    //Create a point
    type: "point",
    longitude:106.66397439787193,
    latitude: 10.788968973849185
  };
  const DH6Graphic = new Graphic({
    geometry: TruongDH6,
    symbol: schoolMarkerSymbol,
  });
  graphicsLayer.add(DH6Graphic);

  // 7. Truong DH Tien Giang
  const TruongDH7 = {
    //Create a point
    type: "point",
    longitude: 105.90865992494192,
    latitude: 10.224215622595182
  };
  const DH7Graphic = new Graphic({
    geometry: TruongDH7,
    symbol: schoolMarkerSymbol,
  });
  graphicsLayer.add(DH7Graphic);

  // 8. Truong DH Hong Bang
  const TruongDH8 = {
    //Create a point
    type: "point",
    longitude: 106.65815122045238,
    latitude: 10.77794369003803
  };
  const DH8Graphic = new Graphic({
    geometry: TruongDH8,
    symbol: schoolMarkerSymbol,
  });
  graphicsLayer.add(DH8Graphic);

  // 9. Truong DH Nong Lam
  const TruongDH9 = {
    //Create a point
    type: "point",
    longitude: 106.79420807915406,
    latitude: 10.874721971877795
  };
  const DH9Graphic = new Graphic({
    geometry: TruongDH9,
    symbol: schoolMarkerSymbol,
  });
  graphicsLayer.add(DH9Graphic);

  // 10. Truong DH Kien Giang
  const TruongDH10 = {
    //Create a point
    type: "point",
    longitude: 105.13989268835007,
    latitude: 10.049284463244792
  };
  const DH10Graphic = new Graphic({
    geometry: TruongDH10,
    symbol: schoolMarkerSymbol,
  });
  graphicsLayer.add(DH10Graphic);
  //Het 10 truong dai hoc

  // Thêm 10 viện bảo tàng
  const museumMarkerSymbol = {
    type: "picture-marker",
    url: "./images/museum-symbol.png",
    width: "48px",
    height: "48px"
  }

  // 1. Bao tang Dinh Doc Lap
  const BaoTang1 = {
    //Create a point
    type: "point",
    longitude:  106.69611539185948,
    latitude: 10.778236390132715
  };
  const BT1Graphic = new Graphic({
    geometry: BaoTang1,
    symbol: museumMarkerSymbol,
  });
  graphicsLayer.add(BT1Graphic);

  // 2. Bao tang Y Hoc Co Truyen
  const BaoTang2 = {
    //Create a point
    type: "point",
    longitude:  106.67172656487215,
    latitude: 10.776224450852643
  };
  const BT2Graphic = new Graphic({
    geometry: BaoTang2,
    symbol: museumMarkerSymbol,
  });
  graphicsLayer.add(BT2Graphic);

  // 3. Bao tang Artinus 3D Art Museum
  const BaoTang3 = {
    //Create a point
    type: "point",
    longitude: 106.69481385692296,
    latitude: 10.742973806792573
  };
  const BT3Graphic = new Graphic({
    geometry: BaoTang3,
    symbol: museumMarkerSymbol,
  });
  graphicsLayer.add(BT3Graphic);

  // 4. Bao tang Fine Arts Museum
  const BaoTang4 = {
    //Create a point
    type: "point",
    longitude: 106.69927605322661,
    latitude: 10.769860792325964
  };
  const BT4Graphic = new Graphic({
    geometry: BaoTang4,
    symbol: museumMarkerSymbol,
  });
  graphicsLayer.add(BT4Graphic);

  // 5. Bảo Tàng Lịch Sử Việt Nam
  const BaoTang5 = {
    //Create a point
    type: "point",
    longitude: 106.70469468206231,
    latitude: 10.788163159001275
  };
  const BT5Graphic = new Graphic({
    geometry: BaoTang5,
    symbol: museumMarkerSymbol,
  });
  graphicsLayer.add(BT5Graphic);

  // 6. Bao tang The Factory Contemporary Arts Centre
  const BaoTang6 = {
    //Create a point
    type: "point",
    longitude:  106.74339525507519,
    latitude: 10.806313926957003
  };
  const BT6Graphic = new Graphic({
    geometry: BaoTang6,
    symbol: museumMarkerSymbol,
  });
  graphicsLayer.add(BT6Graphic);

  // 7. Bao tang Phòng Tranh Couleurs d'Asie by Réhahn
  const BaoTang7 = {
    //Create a point
    type: "point",
    longitude: 106.70317406856866,
    latitude: 10.776063724793385
  };
  const BT7Graphic = new Graphic({
    geometry: BaoTang7,
    symbol: museumMarkerSymbol,
  });
  graphicsLayer.add(BT7Graphic);

  // 8. Bao tang Ho Chi Minh City Museum
  const BaoTang8 = {
    //Create a point
    type: "point",
    longitude: 106.69960691089771,
    latitude: 10.776231822871756
  };
  const BT8Graphic = new Graphic({
    geometry: BaoTang8,
    symbol: museumMarkerSymbol,
  });
  graphicsLayer.add(BT8Graphic);

  // 9. Bao tang Vietnam Silver House
  const BaoTang9 = {
    //Create a point
    type: "point",
    longitude:  106.67535951274584,
    latitude: 10.75326620332634
  };
  const BT9Graphic = new Graphic({
    geometry: BaoTang9,
    symbol: museumMarkerSymbol,
  });
  graphicsLayer.add(BT9Graphic);

  // 10. Bao tang Ao Dai Museum
  const BaoTang10 = {
    //Create a point
    type: "point",
    longitude: 106.85304614001143,
    latitude: 10.808657454784967
  };
  const BT10Graphic = new Graphic({
    geometry: BaoTang10,
    symbol: museumMarkerSymbol,
  });
  graphicsLayer.add(BT10Graphic);


// Thêm 10 cây cầu
  const bridgeMarkerSymbol = {
    type: "picture-marker",
    url: "data:image/png;base64,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",
    width: "48px",
    height: "48px",
  };

  // Khu vực Nam Bộ
  //10 cây cầu
  //   1.
  const CauTrangCu = {
    //Create a point
    type: "point",
    longitude: 106.67093631064765,
    latitude: 10.79497296969897,
  };
  const CauTrangCuGraphic = new Graphic({
    geometry: CauTrangCu,
    symbol: bridgeMarkerSymbol,
  });
  graphicsLayer.add(CauTrangCuGraphic);

  //   2.
  const CauSo1 = {
    //Create a point
    type: "point",
    longitude: 106.65857669231693,
    latitude: 10.801717837997774,
  };
  const CauSo1Graphic = new Graphic({
    geometry: CauSo1,
    symbol: bridgeMarkerSymbol,
  });
  graphicsLayer.add(CauSo1Graphic);

  // 3.
  const CauNgang = {
    //Create a point
    type: "point",
    longitude: 106.61154147811372,
    latitude: 10.812846539461395,
  };
  const CauNgangGraphic = new Graphic({
    geometry: CauNgang,
    symbol: bridgeMarkerSymbol,
  });
  graphicsLayer.add(CauNgangGraphic);

  // 4.
  const CauAnLoc = {
    //Create a point
    type: "point",
    longitude: 106.6784894107387,
    latitude: 10.85836874226351,
  };
  const CauAnLocGraphic = new Graphic({
    geometry: CauAnLoc,
    symbol: bridgeMarkerSymbol,
  });
  graphicsLayer.add(CauAnLocGraphic);

  //   5.
  const CauQuang = {
    //Create a point
    type: "point",
    longitude: 106.5955526841798,
    latitude: 10.894403893680538,
  };
  const CauQuangGraphic = new Graphic({
    geometry: CauQuang,
    symbol: bridgeMarkerSymbol,
  });
  graphicsLayer.add(CauQuangGraphic);

  //   6.
  const Cau824 = {
    //Create a point
    type: "point",
    longitude: 106.44012833628057,
    latitude: 10.731293625358198,
  };
  const Cau824Graphic = new Graphic({
    geometry: Cau824,
    symbol: bridgeMarkerSymbol,
  });
  graphicsLayer.add(Cau824Graphic);

  //   7.
  const CauThamLuong = {
    //Create a point
    type: "point",
    longitude: 106.6292990559409,
    latitude: 10.830433135366718,
  };
  const CauThamLuongGraphic = new Graphic({
    geometry: CauThamLuong,
    symbol: bridgeMarkerSymbol,
  });
  graphicsLayer.add(CauThamLuongGraphic);

  //   8.
  const CauMoCay = {
    //Create a point
    type: "point",
    longitude: 106.3298805061036,
    latitude: 10.146361954458651,
  };
  const CauMoCayGraphic = new Graphic({
    geometry: CauMoCay,
    symbol: bridgeMarkerSymbol,
  });
  graphicsLayer.add(CauMoCayGraphic);

  //   9.
  const CauBinhThuy = {
    //Create a point
    type: "point",
    longitude: 105.28905887210401,
    latitude: 10.564539529456876,
  };
  const CauBinhThuyGraphic = new Graphic({
    geometry: CauBinhThuy,
    symbol: bridgeMarkerSymbol,
  });
  graphicsLayer.add(CauBinhThuyGraphic);

  //   10.
  const CauLungDong_8Tan = {
    //Create a point
    type: "point",
    longitude: 105.94736001538068,
    latitude: 10.14230688564937,
  };
  const CauLungDong_8TanGraphic = new Graphic({
    geometry: CauLungDong_8Tan,
    symbol: bridgeMarkerSymbol,
  });
  graphicsLayer.add(CauLungDong_8TanGraphic);

  const parkMarkerSymbol = {
    type: "picture-marker",
    url: "data:image/png;base64,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",
    width: "48px",
    height: "48px",
  };

  // 10 công viên
  // 1.
  const CVXanh_QTH = {
    //Create a point
    type: "point",
    longitude: 105.1718449174375,
    latitude: 9.245638331914991,
  };
  const CVXanh_QTHGraphic = new Graphic({
    geometry: CVXanh_QTH,
    symbol: parkMarkerSymbol,
  });
  graphicsLayer.add(CVXanh_QTHGraphic);

  // 2.
  const CVDanChu = {
    //Create a point
    type: "point",
    longitude: 106.18808023237047,
    latitude: 9.871287066240416,
  };
  const CVDanChuGraphic = new Graphic({
    geometry: CVDanChu,
    symbol: parkMarkerSymbol,
  });
  graphicsLayer.add(CVDanChuGraphic);

  // 3.
  const CVTrungTam = {
    //Create a point
    type: "point",
    longitude: 105.72665448187054,
    latitude: 10.147174189973146,
  };
  const CVTrungTamGraphic = new Graphic({
    geometry: CVTrungTam,
    symbol: parkMarkerSymbol,
  });
  graphicsLayer.add(CVTrungTamGraphic);

  // 4.
  const CVChienThang = {
    //Create a point
    type: "point",
    longitude: 105.46847577982692,
    latitude: 9.855051162000404,
  };
  const CVChienThangGraphic = new Graphic({
    geometry: CVChienThang,
    symbol: parkMarkerSymbol,
  });
  graphicsLayer.add(CVChienThangGraphic);
  
  // 5.
  const CVDaNhat = {
    //Create a point
    type: "point",
    longitude: 106.58647271180773,
    latitude: 10.861339796535775,
  };
  const CVDaNhatGraphic = new Graphic({
    geometry: CVDaNhat,
    symbol: parkMarkerSymbol,
  });
  graphicsLayer.add(CVDaNhatGraphic);

  // 6.
  const CVAnSuong = {
    //Create a point
    type: "point",
    longitude: 106.62355156795229,
    latitude: 10.844817887645666,
  };
  const CVAnSuongGraphic = new Graphic({
    geometry: CVAnSuong,
    symbol: parkMarkerSymbol,
  });
  graphicsLayer.add(CVAnSuongGraphic);
  
  // 7.
  const CVPhuNhuan = {
    //Create a point
    type: "point",
    longitude: 106.56810494542583,
    latitude: 10.821213576768734,
  };
  const CVPhuNhuanGraphic = new Graphic({
    geometry: CVPhuNhuan,
    symbol: parkMarkerSymbol,
  });
  graphicsLayer.add(CVPhuNhuanGraphic);
  
  // 8.
  const CVMauThan = {
    //Create a point
    type: "point",
    longitude: 105.9606238806202,
    latitude: 10.2409058281096,
  };
  const CVMauThanGraphic = new Graphic({
    geometry: CVMauThan,
    symbol: parkMarkerSymbol,
  });
  graphicsLayer.add(CVMauThanGraphic);
  
  // 9.
  const CVPhuong2 = {
    //Create a point
    type: "point",
    longitude: 106.11717905100835,
    latitude: 10.470562227833621,
  };
  const CVPhuong2Graphic = new Graphic({
    geometry: CVPhuong2,
    symbol: parkMarkerSymbol,
  });
  graphicsLayer.add(CVPhuong2Graphic);
  
  // 10.
  const CVGiaDinh = {
    //Create a point
    type: "point",
    longitude: 106.67386589012163,
    latitude: 10.817813878121408,
  };
  const CVGiaDinhGraphic = new Graphic({
    geometry: CVGiaDinh,
    symbol: parkMarkerSymbol,
  });
  graphicsLayer.add(CVGiaDinhGraphic);
});

