require([
  'esri/Map',
  'esri/views/MapView',
  'esri/Graphic',
  'esri/layers/GraphicsLayer',
], function (Map, MapView, Graphic, GraphicsLayer) {
  const map = new Map({
    basemap: 'topo-vector',
  });

  const view = new MapView({
    container: 'viewDiv',
    map: map,
    zoom: 15,
    center: [105.78719459612842, 10.383366440757024],
  });
  const graphicsLayer = new GraphicsLayer();

  // Quốc lộ 30

  const polylineThirtiethHighway = {
    type: 'polyline',
    paths: [
      [105.89018327367175, 10.319394565114521],
      [105.42657143571675, 10.965583895628813],
    ],
  };
  const ThirtiethHighwayLineSymbol = {
    type: 'simple-line',
    color: [226, 119, 40], // Orange
    width: 2,
  };

  const ThirtiethHighwayPopupTemplate = {
    title: 'Quốc lộ 30',
    content: ThirtiethHighwayInfo,
  };

  function ThirtiethHighwayInfo() {
    const div = document.createElement('div');
    div.innerHTML = `
      <h4>Thông tin:</h4>
        <ul>
          <li>Chiều dài: 119,64 km</li>
          <li>Các tỉnh, thành phố đi qua: Tiền Giang, Đồng Tháp</li>
        </ul>    
    `;
    return div;
  }

  const ThirtiethHighwayPolylineGraphic = new Graphic({
    geometry: polylineThirtiethHighway,
    symbol: ThirtiethHighwayLineSymbol,
    popupTemplate: ThirtiethHighwayPopupTemplate,
  });

  graphicsLayer.add(ThirtiethHighwayPolylineGraphic);

  //Quốc lộ 91C

  const polylineNinetiethOneCHighway = {
    type: 'polyline',
    paths: [
      [105.7520658127596, 10.030539942103431],
      [105.72123352447771, 9.299072713812093],
    ],
  };
  const NinetiethOneCHighwayLineSymbol = {
    type: 'simple-line',
    color: [226, 119, 40], // Orange
    width: 2,
  };

  const NinetiethOneCHighwayPopupTemplate = {
    title: 'Quốc lộ 91C (Đường Nam Sông Hậu)',
    content: NinetiethOneCHighwayInfo,
  };

  function NinetiethOneCHighwayInfo() {
    const div = document.createElement('div');
    div.innerHTML = `
      <h4>Thông tin:</h4>
        <ul>
          <li>Chiều dài: 147 km</li>
          <li>Các tỉnh, thành phố đi qua: Cần Thơ, Hậu Giang, Sóc Trăng, Bạc Liêu</li>
        </ul>    
    `;
    return div;
  }

  const ThirtiethHighWayPolylineGraphic = new Graphic({
    geometry: polylineNinetiethOneCHighway,
    symbol: NinetiethOneCHighwayLineSymbol,
    popupTemplate: NinetiethOneCHighwayPopupTemplate,
  });

  graphicsLayer.add(ThirtiethHighWayPolylineGraphic);

  //Đường Quản Lộ - Phụng Hiệp:
  const polylineQuanLoPhungHiepHighway = {
    type: 'polyline',
    paths: [
      [105.82886606815572, 9.80097164818413],
      [105.16315691827772, 9.184939352307767],
    ],
  };
  const QuanLoPhungHiepHighwayLineSymbol = {
    type: 'simple-line',
    color: [226, 119, 40], // Orange
    width: 2,
  };

  const QuanLoPhungHiepHighwayPopupTemplate = {
    title: 'Đường Quản Lộ - Phụng Hiệp',
    content: QuanLoPhungHiepHighwayInfo,
  };

  function QuanLoPhungHiepHighwayInfo() {
    const div = document.createElement('div');
    div.innerHTML = `
      <h4>Thông tin:</h4>
        <ul>
          <li>Chiều dài: 119,3 km</li>
          <li>Các tỉnh, thành phố đi qua: Hậu Giang, Sóc Trăng, Bạc Liêu và Cà Mau</li>
        </ul>    
    `;
    return div;
  }

  const QuanLoPhungHiepHighwayPolylineGraphic = new Graphic({
    geometry: polylineQuanLoPhungHiepHighway,
    symbol: QuanLoPhungHiepHighwayLineSymbol,
    popupTemplate: QuanLoPhungHiepHighwayPopupTemplate,
  });

  graphicsLayer.add(QuanLoPhungHiepHighwayPolylineGraphic);

  //Quốc lộ 63:
  const polylineSixtyThreeHighway = {
    type: 'polyline',
    paths: [
      [105.16050079951394, 9.902310768445044],
      [105.16236186610165, 9.203565679996776],
    ],
  };
  const SixtyThreeHighwayLineSymbol = {
    type: 'simple-line',
    color: [226, 119, 40], // Orange
    width: 2,
  };

  const SixtyThreeHighwayPopupTemplate = {
    title: 'Quốc lộ 63',
    content: SixtyThreeHighwayInfo,
  };

  function SixtyThreeHighwayInfo() {
    const div = document.createElement('div');
    div.innerHTML = `
      <h4>Thông tin:</h4>
        <ul>
          <li>Chiều dài: 100 km</li>
          <li>Các tỉnh, thành phố đi qua: Kiên Giang và Cà Mau</li>
        </ul>    
    `;
    return div;
  }

  const SixtyThreeHighwayPolylineGraphic = new Graphic({
    geometry: polylineSixtyThreeHighway,
    symbol: SixtyThreeHighwayLineSymbol,
    popupTemplate: SixtyThreeHighwayPopupTemplate,
  });

  graphicsLayer.add(SixtyThreeHighwayPolylineGraphic);

  //Quốc lộ 61B

  const polylineSixtyOneBHighway = {
    type: 'polyline',
    paths: [
      [105.57567590961538, 9.737374639476654],
      [105.74706653838732, 9.430628007881198],
    ],
  };
  const SixtyOneBHighwayLineSymbol = {
    type: 'simple-line',
    color: [226, 119, 40], // Orange
    width: 2,
  };

  const SixtyOneBHighwayPopupTemplate = {
    title: 'Quốc lộ 61B',
    content: SixtyOneBHighwayInfo,
  };

  function SixtyOneBHighwayInfo() {
    const div = document.createElement('div');
    div.innerHTML = `
      <h4>Thông tin:</h4>
        <ul>
          <li>Chiều dài: 41 km</li>
          <li>Các tỉnh, thành phố đi qua: Hậu Giang và Sóc Trăng</li>
        </ul>    
    `;
    return div;
  }

  const SixtyOneBHighwayPolylineGraphic = new Graphic({
    geometry: polylineSixtyOneBHighway,
    symbol: SixtyOneBHighwayLineSymbol,
    popupTemplate: SixtyOneBHighwayPopupTemplate,
  });

  graphicsLayer.add(SixtyOneBHighwayPolylineGraphic);

  // Quốc lộ 50
  const polylineFiftyHighway = {
    type: 'polyline',
    paths: [
      [106.65617369547257, 10.741178831475422],
      [106.33912838651304, 10.387990672127518],
    ],
  };
  const FiftyHighwayLineSymbol = {
    type: 'simple-line',
    color: [226, 119, 40], // Orange
    width: 2,
  };

  const FiftyHighwayPopupTemplate = {
    title: 'Quốc lộ 50',
    content: FiftyHighwayInfo,
  };

  function FiftyHighwayInfo() {
    const div = document.createElement('div');
    div.innerHTML = `
      <h4>Thông tin:</h4>
        <ul>
          <li>Chiều dài: 95,2 km</li>
          <li>Các tỉnh, thành phố đi qua: Thành phố Hồ Chí Minh, Tiền Giang</li>
        </ul>    
    `;
    return div;
  }

  const FiftyHighwayPolylineGraphic = new Graphic({
    geometry: polylineFiftyHighway,
    symbol: FiftyHighwayLineSymbol,
    popupTemplate: FiftyHighwayPopupTemplate,
  });

  graphicsLayer.add(FiftyHighwayPolylineGraphic);

  // Xa lộ Hà Nội
  const polylineXaLoHaNoi = {
    type: 'polyline',
    paths: [
      [106.73344605099413, 10.800061360104769],
      [106.81307544540692, 10.879133510466067],
    ],
  };
  const XaLoHaNoiLineSymbol = {
    type: 'simple-line',
    color: [226, 119, 40], // Orange
    width: 2,
  };

  const XaLoHaNoiPopupTemplate = {
    title: 'Xa lộ Hà Nội',
    content: XaLoHaNoiInfo,
  };

  function XaLoHaNoiInfo() {
    const div = document.createElement('div');
    div.innerHTML = `
      <h4>Thông tin:</h4>
        <ul>
          <li>Chiều dài: 31 km</li>
          <li>Các tỉnh, thành phố đi qua: Thành phố Hồ Chí Minh, Đồng Nai</li>
        </ul>    
    `;
    return div;
  }

  const XaLoHaNoiPolylineGraphic = new Graphic({
    geometry: polylineXaLoHaNoi,
    symbol: XaLoHaNoiLineSymbol,
    popupTemplate: XaLoHaNoiPopupTemplate,
  });

  graphicsLayer.add(XaLoHaNoiPolylineGraphic);

  //Quốc lộ 53

  const polylineQuocLo53 = {
    type: 'polyline',
    paths: [
      [106.25968279298968, 9.73835421008346],
      [105.98735482080899, 10.231716273334825],
    ],
  };
  const QuocLo53LineSymbol = {
    type: 'simple-line',
    color: [226, 119, 40], // Orange
    width: 2,
  };

  const QuocLo53PopupTemplate = {
    title: 'Quốc lộ 53',
    content: QuocLo53Info,
  };

  function QuocLo53Info() {
    const div = document.createElement('div');
    div.innerHTML = `
      <h4>Thông tin:</h4>
        <ul>
          <li>Chiều dài: 168 km</li>
          <li>Các tỉnh, thành phố đi qua: Vĩnh Long, Trà Vinh</li>
        </ul>    
    `;
    return div;
  }

  const QuocLo53PolylineGraphic = new Graphic({
    geometry: polylineQuocLo53,
    symbol: QuocLo53LineSymbol,
    popupTemplate: QuocLo53PopupTemplate,
  });

  graphicsLayer.add(QuocLo53PolylineGraphic);

  //Quốc lộ 51:
  const polylineQuocLo51 = {
    type: 'polyline',
    paths: [
      [107.1567601356533, 10.411061416631542],
      [106.8487851883398, 10.905635638725608],
    ],
  };
  const QuocLo51LineSymbol = {
    type: 'simple-line',
    color: [226, 119, 40], // Orange
    width: 2,
  };

  const QuocLo51PopupTemplate = {
    title: 'Quốc lộ 51',
    content: QuocLo51Info,
  };

  function QuocLo51Info() {
    const div = document.createElement('div');
    div.innerHTML = `
      <h4>Thông tin:</h4>
        <ul>
          <li>Chiều dài: 86 km</li>
          <li>Các tỉnh, thành phố đi qua: Đồng Nai, Bà Rịa - Vũng Tàu</li>
        </ul>    
    `;
    return div;
  }

  const QuocLo51PolylineGraphic = new Graphic({
    geometry: polylineQuocLo51,
    symbol: QuocLo51LineSymbol,
    popupTemplate: QuocLo51PopupTemplate,
  });

  graphicsLayer.add(QuocLo51PolylineGraphic);

  // Quốc lộ 54:
  const polylineQuocLo54 = {
    type: 'polyline',
    paths: [
      [105.4961345152844, 10.341423830978174],
      [106.34333802174574, 9.894492595581685],
    ],
  };
  const QuocLo54LineSymbol = {
    type: 'simple-line',
    color: [226, 119, 40], // Orange
    width: 2,
  };

  const QuocLo54PopupTemplate = {
    title: 'Quốc lộ 54',
    content: QuocLo54Info,
  };

  function QuocLo54Info() {
    const div = document.createElement('div');
    div.innerHTML = `
      <h4>Thông tin:</h4>
        <ul>
          <li>Chiều dài: 155 km</li>
          <li>Các tỉnh, thành phố đi qua: Đồng Tháp, Vĩnh Long và Trà Vinh.</li>
        </ul>    
    `;
    return div;
  }

  const QuocLo54PolylineGraphic = new Graphic({
    geometry: polylineQuocLo54,
    symbol: QuocLo54LineSymbol,
    popupTemplate: QuocLo54PopupTemplate,
  });

  graphicsLayer.add(QuocLo54PolylineGraphic);

  map.add(graphicsLayer);
});
