import  { CaMau }  from "./CaMau.js";
import  { BacLieu }  from "./BacLieu.js";
import { KienGiang } from "./KienGiang.js";
import { SocTrang } from "./SocTrang.js";
import { HauGiang } from "./HauGiang.js";
import { AnGiang } from "./AnGiang.js";
import { TraVinh } from "./TraVinh.js";
import { BenTre } from "./BenTre.js";
import { CanTho } from "./CanTho.js";
import { DongThap } from "./DongThap.js";
import { VinhLong } from "./VinhLong.js";
import { TienGiang } from "./TienGiang.js";
import { LongAn } from "./LongAn.js";
import { HCM } from "./HCM.js";
import { TayNinh } from "./TayNinh.js";
import { BinhDuong } from "./BinhDuong.js";
import { BRVT } from "./BRVT.js";
import { DongNai } from "./DongNai.js";
import { BinhPhuoc } from "./BinhPhuoc.js";

require(["esri/Map", "esri/views/MapView", "esri/Graphic", "esri/layers/GraphicsLayer"], (Map, MapView, Graphic, GraphicsLayer) => {
    const map = new Map({
        basemap: "topo-vector"
    });

    const view = new MapView({
        container: "viewDiv",
        map: map,
        zoom: 9,
        center: [106.797552, 10.7721569] // longitude, latitude
    });

    const graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);

    const simpleFillSymbol = {
        type: "simple-fill",
        color: [207, 197, 17, 0.5],
        outline: {
            color: [0, 255, 0],
            width: 1
        }
    }

    const CaMauGraphic = new Graphic({
        geometry: CaMau,
        symbol: simpleFillSymbol,
        // attributes: attributes,
        // popupTemplate: popupTemplate
    })
    graphicsLayer.add(CaMauGraphic)

    const BacLieuGraphic = new Graphic({
        geometry: BacLieu,
        symbol: simpleFillSymbol,
        // attributes: attributes,
        // popupTemplate: popupTemplate
    })
    graphicsLayer.add(BacLieuGraphic)

    const KienGiangGraphic = new Graphic({
        geometry: KienGiang,
        symbol: simpleFillSymbol,
        // attributes: attributes,
        // popupTemplate: popupTemplate
    })
    graphicsLayer.add(KienGiangGraphic);

    const SocTrangGraphic = new Graphic({
        geometry: SocTrang,
        symbol: simpleFillSymbol,
        // attributes: attributes,
        // popupTemplate: popupTemplate
    })
    graphicsLayer.add(SocTrangGraphic);

    const HauGiangGraphic = new Graphic({
        geometry: HauGiang,
        symbol: simpleFillSymbol,
        // attributes: attributes,
        // popupTemplate: popupTemplate
    })
    graphicsLayer.add(HauGiangGraphic);

    const AnGiangGraphic = new Graphic({
        geometry: AnGiang,
        symbol: simpleFillSymbol,
        // attributes: attributes,
        // popupTemplate: popupTemplate
    })
    graphicsLayer.add(AnGiangGraphic);

    const TraVinhGraphic = new Graphic({
        geometry: TraVinh,
        symbol: simpleFillSymbol,
        // attributes: attributes,
        // popupTemplate: popupTemplate
    })
    graphicsLayer.add(TraVinhGraphic);

    const BenTreGraphic = new Graphic({
        geometry: BenTre,
        symbol: simpleFillSymbol,
        // attributes: attributes,
        // popupTemplate: popupTemplate
    })
    graphicsLayer.add(BenTreGraphic);

    const CanThoGraphic = new Graphic({
        geometry: CanTho,
        symbol: simpleFillSymbol,
        // attributes: attributes,
        // popupTemplate: popupTemplate
    })
    graphicsLayer.add(CanThoGraphic);

    const DongThapGraphic = new Graphic({
        geometry: DongThap,
        symbol: simpleFillSymbol,
        // attributes: attributes,
        // popupTemplate: popupTemplate
    })
    graphicsLayer.add(DongThapGraphic);

    const VinhLongGraphic = new Graphic({
        geometry: VinhLong,
        symbol: simpleFillSymbol,
        // attributes: attributes,
        // popupTemplate: popupTemplate
    })
    graphicsLayer.add(VinhLongGraphic);

    const TienGiangGraphic = new Graphic({
        geometry: TienGiang,
        symbol: simpleFillSymbol,
        // attributes: attributes,
        // popupTemplate: popupTemplate
    })
    graphicsLayer.add(TienGiangGraphic);

    const LongAnGraphic = new Graphic({
        geometry: LongAn,
        symbol: simpleFillSymbol,
        // attributes: attributes,
        // popupTemplate: popupTemplate
    })
    graphicsLayer.add(LongAnGraphic);

    const HCMGraphic = new Graphic({
        geometry: HCM,
        symbol: simpleFillSymbol,
        // attributes: attributes,
        // popupTemplate: popupTemplate
    })
    graphicsLayer.add(HCMGraphic);

    const TayNinhGraphic = new Graphic({
        geometry: TayNinh,
        symbol: simpleFillSymbol,
        // attributes: attributes,
        // popupTemplate: popupTemplate
    })
    graphicsLayer.add(TayNinhGraphic);

    const BinhDuongGraphic = new Graphic({
        geometry: BinhDuong,
        symbol: simpleFillSymbol,
        // attributes: attributes,
        // popupTemplate: popupTemplate
    })
    graphicsLayer.add(BinhDuongGraphic);

    const BRVTGraphic = new Graphic({
        geometry: BRVT,
        symbol: simpleFillSymbol,
        // attributes: attributes,
        // popupTemplate: popupTemplate
    })
    graphicsLayer.add(BRVTGraphic);

    const DongNaiGraphic = new Graphic({
        geometry: DongNai,
        symbol: simpleFillSymbol,
        // attributes: attributes,
        // popupTemplate: popupTemplate
    })
    graphicsLayer.add(DongNaiGraphic);

    const BinhPhuocGraphic = new Graphic({
        geometry: BinhPhuoc,
        symbol: simpleFillSymbol,
        // attributes: attributes,
        // popupTemplate: popupTemplate
    })
    graphicsLayer.add(BinhPhuocGraphic);
});