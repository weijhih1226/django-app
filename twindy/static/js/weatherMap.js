const DIR_GEOJSON = '/static/geomap/';
const DIR_CWB_OPEN = 'https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/';
const DIR_CWB_OPEN2 = 'https://cwbopendata.s3.ap-northeast-1.amazonaws.com/';
const AUTHORIZATION = 'CWB-D8D93D37-13E2-4637-A854-3EEFCEC990CF';

const ukrainianFlag = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>';
const leafletAttribution = '<a href="https://leafletjs.com" title="Leaflet - 一個互動式地圖的JavaScript函式庫">' + (ukrainianFlag + ' ') + 'Leaflet</a>';
const googleAttribution = '&copy; <a href="https://www.google.com/intl/zh-tw/help/terms_maps.html" target="_blank" title="地圖來源：Google">Google</a>';
const cwbAttribution = '&copy; <a href="https://www.cwb.gov.tw/V8/C/information.html" target="_blank" title="氣象圖資來源：中央氣象局">CWB</a>';
const jtwcAttribution = '&copy; <a href="https://www.metoc.navy.mil/jtwc/jtwc.html?notices" target="_blank" title="氣象圖資來源：美軍聯合颱風警報中心">JTWC</a>';
const osmAttribution = '&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank" title="地圖來源：OpenStreetMap">OpenStreetMap</a>';

const geojsonCountyUrl = `${DIR_GEOJSON}COUNTY_MOI_1090820.json`;
const geojsonTownUrl = `${DIR_GEOJSON}TOWN_MOI_1091016.json`;
const geojsonVillageUrl = `${DIR_GEOJSON}VILLAGE_MOI_1110426.json`;

const xmlStationUrl = `${DIR_CWB_OPEN}O-A0003-001?Authorization=${AUTHORIZATION}&downloadType=WEB&format=XML`;
const xmlAutoStationUrl = `${DIR_CWB_OPEN}O-A0001-001?Authorization=${AUTHORIZATION}&downloadType=WEB&format=XML`;
const xmlGaugeUrl = `${DIR_CWB_OPEN}O-A0002-001?Authorization=${AUTHORIZATION}&downloadType=WEB&format=XML`;
const xmlQPEUrl = `${DIR_CWB_OPEN}O-B0045-001?Authorization=${AUTHORIZATION}&downloadType=WEB&format=XML`;
const xmlQPFUrl = `${DIR_CWB_OPEN}F-B0046-001?Authorization=${AUTHORIZATION}&downloadType=WEB&format=XML`;
const xmlRadarUrl = `${DIR_CWB_OPEN}O-A0059-001?Authorization=${AUTHORIZATION}&downloadType=WEB&format=XML`;
const xmlRainUrl = `${DIR_CWB_OPEN}O-A0040-004?Authorization=${AUTHORIZATION}&downloadType=WEB&format=XML`;
const xmlTempUrl = `${DIR_CWB_OPEN}O-A0038-003?Authorization=${AUTHORIZATION}&downloadType=WEB&format=XML`;
const kmzRainUrl = `${DIR_CWB_OPEN2}DIV2/O-A0040-003.kmz`;
const kmzLtngUrl = `${DIR_CWB_OPEN2}DIV2/O-A0039-001.kmz`;
const kmzTempUrl = `${DIR_CWB_OPEN2}DIV2/O-A0038-002.kmz`;
const kmzSatVISUrl = `${DIR_CWB_OPEN2}MSC/O-B0033-004.kmz`;
const kmzSatIRUrl = `${DIR_CWB_OPEN2}MSC/O-B0033-003.kmz`;
const imgRadarUrl = `${DIR_CWB_OPEN2}MSC/O-A0058-005.png`;
const imgConvUrl = `${DIR_CWB_OPEN2}MSC/O-B0054-001.png`;
const imgQPF12Url = `${DIR_CWB_OPEN2}MFC/F-C0035-015.png`;
const imgQPF24Url = `${DIR_CWB_OPEN2}MFC/F-C0035-017.png`;
const imgSatVISUrl = `${DIR_CWB_OPEN2}MSC/O-C0042-008.jpg`;
const imgSatIRcUrl = `${DIR_CWB_OPEN2}MSC/O-C0042-002.jpg`;
const imgSatIRgUrl = `${DIR_CWB_OPEN2}MSC/O-C0042-004.jpg`;
const imgSatIReUrl = `${DIR_CWB_OPEN2}MSC/O-C0042-006.jpg`;
const kmzTyNewsUrl = `${DIR_CWB_OPEN}W-C0034-002?Authorization=${AUTHORIZATION}&downloadType=WEB&format=KMZ`;
const xmlTyTrackUrl = `${DIR_CWB_OPEN}W-C0034-005?Authorization=${AUTHORIZATION}&downloadType=WEB&format=XML`;
const kmzJTWCUrl = 'https://www.metoc.navy.mil/jtwc/products/wp1222.kmz';
const hdfSat065Url = `${DIR_CWB_OPEN2}DIV4/O-A0043-001.hdf`;
const imgRadarBounds = [[17.72, 114.95], [29.0125, 126.5125]];
const imgQPFBounds = [[21.8, 118.95], [25.8, 122.45]];
const imgSatBounds = [[19.100625745 - 0.05, 115.976888855], [28.29937425 - 0.1, 126.02300114]];

const optionsXmlGrd = {fillOpacity: 0.5 , attribution: cwbAttribution};
const optionsXmlSation = {color: '#ff6363' , fillOpacity: 1 , radius: 2.5 , attribution: cwbAttribution};
const optionsXmlGauge = {color: 'blue' , fillOpacity: 1 , radius: 2.5 , attribution: cwbAttribution};
const optionsPic = {opacity: 0.5 , attribution: cwbAttribution};
const optionsPicQPF = {opacity: 0.7 , attribution: cwbAttribution};
const optionsTyTrack = {weightLine: 2 , weightOut: 1 , weightIn: 1 , 
    colorTD: '#3388ff' , colorS: 'green' , colorM: 'yellow' , colorL: 'red' , 
    colorPastOut: '#fff' , colorPastIn: '#fff' , colorFcstOut: 'yellow' , colorFcstIn: 'red' , 
    opacityPast: .1 , opacityObs: 1 , opacityFcst: 1 , 
    fillOpacityPast: .1 , fillOpacityObs: .1 , fillOpacityFcst: .2 , attribution: cwbAttribution}
const optionsJTWC = {attribution: jtwcAttribution}
const optionsBnd = {
    style: {
        interactive: false,
        color: 'white',
        weight: 1,
        fillOpacity: 0,
    }
}

const setRequestHeader = {header: 'X-Requested-With', value: 'XMLHttpRequest'};
const setRequestHeaderTy = {header: 'Content-Type', value: 'application/x-www-form-urlencoded'};

// const data = [{format: 'xmlGrd' , type: 'radar' , id: '#rdr1' , name: '雷達-整合回波' , url: xmlRadarUrl , bounds: null , product: radar , options: optionsXmlGrd} , {}]

var opts = {
    opacityBaseControl: {
        options: {
            sliderImageUrl: "https://unpkg.com/leaflet-transparency@0.0.6/images/opacity-slider2.png",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            opacity: 1,
            position: 'topright',
        }
    },
    opacityOverlayControl: {
        options: {
            sliderImageUrl: "https://unpkg.com/leaflet-transparency@0.0.6/images/opacity-slider2.png",
            backgroundColor: "rgba(229, 227, 223, 0.9)",
            opacity: 0.75,
            position: 'topright',
        }
    },
};

let overlays_bound = {};
let latlng;

document.addEventListener("DOMContentLoaded" , function(){
    const SIDEMENU = document.querySelector('.sidemenu')

    var map = L.map('map' , {   // 放置地圖
        center: [23.8, 121],    // 中心點座標
        zoom: 7,                // 0 - 18
        mapTypeId: 'hybrid',
        mapTypeIds: ['streets', 'satellite', 'hybrid', 'terrain', 'openStreets'],
        preferCanvas: true, // recommended when loading large layers.
        attributionControl: false,
        // markerZoomAnimation: false,
        gestureHandling: false,
        zoomControl: false,
        scaleControl: false,
        pegmanControl: {
            position: 'topleft',
            mutant: {
                attribution: '街景資料: ' + googleAttribution,
                pane: "overlayPane",
                type: null, // Non-image map type (used to force a transparent background)
            },
            pano: {
                enableCloseButton: true,
                fullscreenControl: true,
                imageDateControl: true
            },
        },
        locateControl: false,
        fullscreenControl: false,
        layersControl: {inline: true},
        minimapControl: {
            toggleDisplay: true,
            toggleMapTypes: true, // Automatically switch between "satellite" and "roads" layers.
            mapOptions: {
                mapTypeId: 'streets',
            },
            strings: {
                hideText:"隱藏縮圖",
                showText:"顯示縮圖"
            }
        },
        editInOSMControl: false,
        loadingControl: false,
        searchControl: false,
        disableDefaultUI: false,
        rotateControl: false,
        printControl: false,
        resizerControl: false,
        apiKeys: {thunderforest: '5ecc17cc36d44ed1ac63d35df0fd56e7' , google: 'AIzaSyAxfK5uv5MVnV51Y7THaBzNclplGe_PabA'},
        plugins: [
            "geojson-vt@3.2.1/geojson-vt.js",
            "leaflet.vectorgrid@1.3.0/dist/Leaflet.VectorGrid.js",
        ],

        mapTypes: {         // 設定圖層來源
            streets: {
                name: '地圖',
                url: 'http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}',
                options: {
                    maxZoom: 20,
                    // maxNativeZoom: 7,
                    subdomains:['mt0','mt1','mt2','mt3'],
                    attribution: googleAttribution,
                },
            },
            satellite: {
                name: '衛星',
                url: 'http://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}',
                options: {
                    maxZoom: 20,
                    // maxNativeZoom: 7,
                    subdomains:['mt0','mt1','mt2','mt3'],
                    attribution: googleAttribution,
                },
            },
            hybrid: {
                name: '混合',
                url: 'http://{s}.google.com/vt?lyrs=s,h&x={x}&y={y}&z={z}',
                options: {
                    maxZoom: 20,
                    // maxNativeZoom: 7,
                    subdomains:['mt0','mt1','mt2','mt3'],
                    attribution: googleAttribution,
                },
            },
            terrain: {
                name: '地形',
                url: 'http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',
                options: {
                    maxZoom: 20,
                    // maxNativeZoom: 7,
                    subdomains:['mt0','mt1','mt2','mt3'],
                    attribution: googleAttribution,
                }
            },
            openStreets: {
                name: '開放街圖',
                url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                options: {
                    maxZoom: 24,
                    maxNativeZoom: 19,
                    attribution: osmAttribution,
                },
            },
        },
    });

    map.on('plugins_loaded', function(){
        const overlays = {};
        const cl = new L.Control.Layers(null , overlays , {collapsed: false}).addTo(map);

        document.querySelector('#rdr1').checked = true;
        document.querySelector('#ltng1').checked = true;
        document.querySelector('#ty1').checked = true;
        document.querySelector('#ty2').checked = true;
        document.querySelector('#cbr1').checked = true;
        var radar = addLayer('xmlGrd' , 'radar' , '雷達-整合回波' , xmlRadarUrl , null , null , optionsXmlGrd)
        var ltng = addLayer('kmz' , 'ltng' , '閃電-即時觀測' , kmzLtngUrl , null , null , optionsPic)
        var ty = addLayer('kmzTy' , 'ty' , '颱風-CWB潛勢路徑' , kmzTyNewsUrl , null , null , optionsTyTrack)
        var ty2 = addLayer('xmlTy' , 'ty' , '颱風-CWB路徑資訊' , xmlTyTrackUrl , null , null , optionsTyTrack)
        // var sat = addLayer('kmzTy' , 'sat' , '衛星-可見光' , kmzSatVISUrl , null , null , optionsTyTrack)
        
        // var geojsonCounty = getGeojson(geojsonCountyUrl , optionsBnd)
        // var geojsonTown = getGeojson(geojsonTownUrl , optionsBnd)
        // var geojsonVillage = getGeojson(geojsonVillageUrl , optionsBnd)

        // geojsonCounty.addTo(this);
        // overlays_bound['縣市界'] = geojsonCounty;
        // overlays_bound['鄉鎮區界'] = NULL;
        // overlays_bound['村里界'] = NULL;
        // var overlays_bnd = {
        //     '縣市界': geojsonCounty , 
        //     // '鄉鎮區界': geojsonTown , 
        //     // '村里界': geojsonVillage , 
        // };
        const clb = new L.Control.Layers(null , overlays_bound , {collapsed: false}).addTo(this);
        
        addRemoveLayer('xmlGrd' , 'radar' , '#rdr1' , '雷達-整合回波' , xmlRadarUrl , null , radar , optionsXmlGrd)
        addRemoveLayer('pic' , 'conv' , '#rdr2' , '雷達-對流胞偵測' , imgConvUrl , imgRadarBounds , null , optionsPic)
        addRemoveLayer('xmlGrd' , 'qpe' , '#rdr3' , '雷達-1h QPE' , xmlQPEUrl , null , null , optionsXmlGrd)
        addRemoveLayer('xmlGrd' , 'qpf' , '#rdr4' , '雷達-1h QPF' , xmlQPFUrl , null , null , optionsXmlGrd)
        addRemoveLayer('kmz' , 'ltng' , '#ltng1' , '閃電-即時觀測' , kmzLtngUrl , null , ltng , optionsPic)
        addRemoveLayer('xmlPnt' , 'stn' , '#stn1' , '測站-局屬氣象站' , xmlStationUrl , null , null , optionsXmlSation)
        addRemoveLayer('xmlPnt' , 'stn' , '#stn2' , '測站-自動氣象站' , xmlAutoStationUrl , null , null , optionsXmlSation)
        addRemoveLayer('xmlPnt' , 'stn' , '#stn3' , '測站-自動雨量站' , xmlGaugeUrl , null , null , optionsXmlGauge)
        addRemoveLayer('xmlGrd' , 'rain' , '#stn4' , '測站-日累積雨量圖' , xmlRainUrl , null , null , optionsXmlGrd)
        addRemoveLayer('xmlGrd' , 'temp' , '#stn5' , '測站-氣溫分布圖' , xmlTempUrl , null , null , optionsXmlGrd)
        addRemoveLayer('pic' , 'qpf' , '#qpf1' , 'QPF-0-12h' , imgQPF12Url , imgQPFBounds , null , optionsPicQPF)
        addRemoveLayer('pic' , 'qpf' , '#qpf2' , 'QPF-12-24h' , imgQPF24Url , imgQPFBounds , null , optionsPicQPF)
        addRemoveLayer('pic' , 'sat' , '#sat1' , '衛星-可見光雲圖' , imgSatVISUrl , imgSatBounds , null , optionsPic)
        addRemoveLayer('pic' , 'sat' , '#sat2' , '衛星-IR彩色雲圖' , imgSatIRcUrl , imgSatBounds , null , optionsPic)
        addRemoveLayer('pic' , 'sat' , '#sat3' , '衛星-IR黑白雲圖' , imgSatIRgUrl , imgSatBounds , null , optionsPic)
        addRemoveLayer('pic' , 'sat' , '#sat4' , '衛星-IR色調強化雲圖' , imgSatIReUrl , imgSatBounds , null , optionsPic)
        addRemoveLayer('kmzTy' , 'ty' , '#ty1' , '颱風-CWB潛勢路徑' , kmzTyNewsUrl , null , ty , optionsTyTrack)
        addRemoveLayer('xmlTy' , 'ty' , '#ty2' , '颱風-CWB路徑資訊' , xmlTyTrackUrl , null , ty2 , optionsTyTrack)
        addRemoveLayer('kmzTy' , 'ty' , '#ty3' , '颱風-JTWC潛勢路徑' , kmzJTWCUrl , null , null , optionsJTWC)

        function addLayer(format , type , name , url , bounds , product , options) {
            if (format === 'xmlGrd') {product = L.xmlPicture(url , type , options);}
            else if (format === 'xmlTy') {product = L.xmlTyphoon(url , options);}
            else if (format === 'xmlPnt') {product = L.xmlLayer(url , options);}
            else if (format === 'kmz') {product = L.kmzLayer(url , setRequestHeader , options);}
            else if (format === 'kmzTy') {product = L.kmzLayer(url , setRequestHeaderTy , options);}
            else if (format === 'pic') {product = L.imageOverlay(url , bounds , options);}
            product.addTo(map);
            cl.addOverlay(product , name);
            return product;
        }

        function removeLayer(product) {
            cl.removeLayer(product);
            product.remove();
        }

        function addRemoveLayer(format , type , id , name , url , bounds , product , options) {
            document.querySelector(id).addEventListener('change' , function(){
                if (this.checked) {
                    product = addLayer(format , type , name , url , bounds , product , options);
                } else {
                    removeLayer(product);
                }
            })
        }


        document.querySelector('#rdr1').addEventListener('change' , function(){
            document.querySelector('#cbr1').checked = this.checked;
            document.querySelector('#cbr1').disabled = !this.checked;
            document.querySelector('#cbr1').checked ? legend = new L.Control.RadarDBZColorbar({position: 'bottomleft'}).addTo(map) : legend.remove();
        })
        document.querySelector('#cbr1').addEventListener('change' , function(){
            this.checked ? legend = new L.Control.RadarDBZColorbar({position: 'bottomleft'}).addTo(map) : legend.remove();
        })


        var legend = new L.Control.RadarDBZColorbar({position: 'bottomleft'}).addTo(map);
        // var timeSlider = new L.Control.TimeSlider({position: 'bottomcenter'}).addTo(map);
        // map.addControl(timeSlider)
        // timeSlider.setOpacityLayer(radar);
        // radar.setOpacity(0.5);
        new L.Control.Attribution({position: 'bottomright' , prefix: leafletAttribution}).addTo(map);
        latlng = new L.Control.LatLng({position: 'bottomright'}).addTo(map);
        new L.Control.Scale({position: 'bottomright' , imperial: false}).addTo(map)
        new L.Control.Locate({position: 'bottomright' , strings: {title: "定位"}}).addTo(map)
        new L.Control.FullScreen({position: 'bottomright' , title: '全螢幕' , titleCancel: '關閉全螢幕'}).addTo(map)
        new L.Control.Search({position: 'topleft' , textPlaceholder: "搜尋"}).addTo(map)
        new L.Control.Zoom({position: 'bottomright' , zoomInTitle: '放大' , zoomOutTitle: '縮小'}).addTo(map);
        new L.Control.Loading({position: 'bottomright'}).addTo(map);
        // new L.Control.GroupedLayers(baselayers , overlays , {collapsed: false , groupCheckboxes: true , exclusiveGroups: ["閃電" , "QPF" , "衛星"] , }).addTo(map);
        
        // map.removeControl(z)
    });

    map.on('mousemove', e => {
        latlng._container.innerHTML = LatLngHTML(e);
    });

    // clickProductList(SIDEMENU)
})

// function addBound(){
//     overlays_bnd.push({

//     })
// }

function clickProductList(menu){
    let lis = menu.querySelectorAll('.m-li');
    lis.forEach(li => {
        li.onclick = () => {
            li.querySelector('input').checked = !li.querySelector('input').checked;
        }
    })
}

// function actionCheck(id){
//     document.querySelector(id).addEventListener('click' , function(){
//         if (this.checked) {
//             console.log('checked')
//         } else {
//             console.log('not checked')
//         }
//     })
// }

// function checkAll(grp) {
//     grp.querySelector('a>input').addEventListener('change' , function(){

//     });
// }

function getGeojson(url , options) {
    var xhr = new XMLHttpRequest()
    xhr.open('get' , url , false)
    xhr.send(null)
    var data = L.geoJSON(JSON.parse(xhr.responseText) , options);
    return data;
}

function Lng2deg(lng) {
    if (lng <= 180) return (lng > -180) ? lng : Lng2deg(lng + 360);
    else return Lng2deg(lng - 360);
}

function LatLngHTML(e) {
    lat = e.latlng.lat;
    lng = Lng2deg(e.latlng.lng);
    latAbs = Math.abs(lat).toFixed(2);
    lngAbs = Math.abs(lng).toFixed(2);
    return '<div class="lnglat">' +
           lngAbs + '&#176;' + (lng >= 0 ? 'E' : 'W') + ', ' + 
           latAbs + '&#176;' + (lat >= 0 ? 'N' : 'S') + '</div>';
}

L.Control.LatLng = L.Control.extend({
    onAdd: function(opts) {
        var ll = L.DomUtil.create('div', 'leaflet-control-lnglat leaflet-control');
        ll.style.width = '100px';
        // ll.style.border = '2px solid #888';
        ll.style.margin = '0';
        ll.style.padding = '0 4px';
        ll.style.backgroundColor = 'rgba(255, 255, 255, .5)';
        ll.style.color = '#333';
        ll.style.textAlign = 'center'
        ll.innerHTML = '<div class="lnglat"> ---.-- &#176;E, --.-- &#176;N </div>'; 
        return ll;
    },
  
    onRemove: function(map) {
      // Nothing to do here
    }
});
L.control.latLng = function(opts) {
    return new L.Control.LatLng(opts);
}

L.Map.include({
    _initControlPos: function () {
        var corners = this._controlCorners = {},
        l = 'leaflet-',
        container = this._controlContainer = L.DomUtil.create('div', l + 'control-container', this._container);
  
        function createCorner(vSide, hSide) {
            var className = l + vSide + ' ' + l + hSide;
            corners[vSide + hSide] = L.DomUtil.create('div', className, container);
        }
  
        createCorner('top', 'left');
        createCorner('top', 'right');
        createCorner('bottom', 'left');
        createCorner('bottom', 'right');
    
        createCorner('top', 'center');
        createCorner('middle', 'center');
        createCorner('middle', 'left');
        createCorner('middle', 'right');
        createCorner('bottom', 'center');
    }
});

function mutationObserver(img , zoomLk , zoomImg){
    new MutationObserver(muts => {
        muts.forEach(mut => {
            if (mut.type === 'attributes') zoomLk.href = zoomImg.src = img.src;
        })
    }).observe(img , {attributes: true});
}