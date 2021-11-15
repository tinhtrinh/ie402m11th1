import  { CaMau, cmAttributes }  from "./CaMau.js";
import  { BacLieu, blAttributes }  from "./BacLieu.js";
import { KienGiang, kgAttributes } from "./KienGiang.js";
import { SocTrang, stAttributes } from "./SocTrang.js";
import { HauGiang, hgAttributes } from "./HauGiang.js";
import { AnGiang, agAttributes } from "./AnGiang.js";
import { TraVinh, tvAttributes } from "./TraVinh.js";
import { BenTre, btAttributes } from "./BenTre.js";
import { CanTho, ctAttributes } from "./CanTho.js";
import { DongThap, dtAttributes } from "./DongThap.js";
import { VinhLong, vlAttributes } from "./VinhLong.js";
import { TienGiang, tgAttributes } from "./TienGiang.js";
import { LongAn, laAttributes } from "./LongAn.js";
import { HCM, hcmAttributes } from "./HCM.js";
import { TayNinh, tnAttributes } from "./TayNinh.js";
import { BinhDuong, bdAttributes } from "./BinhDuong.js";
import { BRVT, brvtAttributes } from "./BRVT.js";
import { DongNai, dnAttributes } from "./DongNai.js";
import { BinhPhuoc, bpAttributes } from "./BinhPhuoc.js";

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

    const popupTemplate = {
        title: "{Name}",
        content: "{Description}"
     }

    const CaMauGraphic = new Graphic({
        geometry: CaMau,
        symbol: simpleFillSymbol,
        attributes: cmAttributes,
        popupTemplate: popupTemplate
    })
    graphicsLayer.add(CaMauGraphic)

    const BacLieuGraphic = new Graphic({
        geometry: BacLieu,
        symbol: simpleFillSymbol,
        attributes: blAttributes,
        popupTemplate: popupTemplate
    })
    graphicsLayer.add(BacLieuGraphic)

    const KienGiangGraphic = new Graphic({
        geometry: KienGiang,
        symbol: simpleFillSymbol,
        attributes: kgAttributes,
        popupTemplate: popupTemplate
    })
    graphicsLayer.add(KienGiangGraphic);

    const SocTrangGraphic = new Graphic({
        geometry: SocTrang,
        symbol: simpleFillSymbol,
        attributes: stAttributes,
        popupTemplate: popupTemplate
    })
    graphicsLayer.add(SocTrangGraphic);

    const HauGiangGraphic = new Graphic({
        geometry: HauGiang,
        symbol: simpleFillSymbol,
        attributes: hgAttributes,
        popupTemplate: popupTemplate
    })
    graphicsLayer.add(HauGiangGraphic);

    const AnGiangGraphic = new Graphic({
        geometry: AnGiang,
        symbol: simpleFillSymbol,
        attributes: agAttributes,
        popupTemplate: popupTemplate
    })
    graphicsLayer.add(AnGiangGraphic);

    const TraVinhGraphic = new Graphic({
        geometry: TraVinh,
        symbol: simpleFillSymbol,
        attributes: tvAttributes,
        popupTemplate: popupTemplate
    })
    graphicsLayer.add(TraVinhGraphic);

    const BenTreGraphic = new Graphic({
        geometry: BenTre,
        symbol: simpleFillSymbol,
        attributes: btAttributes,
        popupTemplate: popupTemplate
    })
    graphicsLayer.add(BenTreGraphic);

    const CanThoGraphic = new Graphic({
        geometry: CanTho,
        symbol: simpleFillSymbol,
        attributes: ctAttributes,
        popupTemplate: popupTemplate
    })
    graphicsLayer.add(CanThoGraphic);

    const DongThapGraphic = new Graphic({
        geometry: DongThap,
        symbol: simpleFillSymbol,
        attributes: dtAttributes,
        popupTemplate: popupTemplate
    })
    graphicsLayer.add(DongThapGraphic);

    const VinhLongGraphic = new Graphic({
        geometry: VinhLong,
        symbol: simpleFillSymbol,
        attributes: vlAttributes,
        popupTemplate: popupTemplate
    })
    graphicsLayer.add(VinhLongGraphic);

    const TienGiangGraphic = new Graphic({
        geometry: TienGiang,
        symbol: simpleFillSymbol,
        attributes: tgAttributes,
        popupTemplate: popupTemplate
    })
    graphicsLayer.add(TienGiangGraphic);

    const LongAnGraphic = new Graphic({
        geometry: LongAn,
        symbol: simpleFillSymbol,
        attributes: laAttributes,
        popupTemplate: popupTemplate
    })
    graphicsLayer.add(LongAnGraphic);

    const HCMGraphic = new Graphic({
        geometry: HCM,
        symbol: simpleFillSymbol,
        attributes: hcmAttributes,
        popupTemplate: popupTemplate
    })
    graphicsLayer.add(HCMGraphic);

    const TayNinhGraphic = new Graphic({
        geometry: TayNinh,
        symbol: simpleFillSymbol,
        attributes: tnAttributes,
        popupTemplate: popupTemplate
    })
    graphicsLayer.add(TayNinhGraphic);

    const BinhDuongGraphic = new Graphic({
        geometry: BinhDuong,
        symbol: simpleFillSymbol,
        attributes: bdAttributes,
        popupTemplate: popupTemplate
    })
    graphicsLayer.add(BinhDuongGraphic);

    const BRVTGraphic = new Graphic({
        geometry: BRVT,
        symbol: simpleFillSymbol,
        attributes: brvtAttributes,
        popupTemplate: popupTemplate
    })
    graphicsLayer.add(BRVTGraphic);

    const DongNaiGraphic = new Graphic({
        geometry: DongNai,
        symbol: simpleFillSymbol,
        attributes: dnAttributes,
        popupTemplate: popupTemplate
    })
    graphicsLayer.add(DongNaiGraphic);

    const BinhPhuocGraphic = new Graphic({
        geometry: BinhPhuoc,
        symbol: simpleFillSymbol,
        attributes: bpAttributes,
        popupTemplate: popupTemplate
    })

    graphicsLayer.add(BinhPhuocGraphic);
});