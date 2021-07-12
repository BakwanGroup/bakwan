//Variabel Global
var ProvValue = [];

$.ajaxSetup({
  headers: { 'Access-Control-Allow-Origin': '*' }
});

$(function () {
    $.get('data/data.json', function (obj) {
        var Prov = ['Bali', 'Banten', 'Jawa Barat', 'Jawa Timur', 'Jakarta', 'Jawa Tengah', 'Yogyakarta'];
        var dictProv = {};
        var ProvList = new Array();

        $.each(obj, function (n, data) {
            $.each(data, function (n, data1) {
                $.each(data1, function (n, data2) {
                    if (Array.isArray(data2.loc)) {
                        ProvList.push(data2.loc[0].prov);
                    } else {
                        ProvList.push(data2.loc.prov);
                    }
                });
            });
        });

        // console.log(ProvList);
        var ProvArr = new Array()

        $.each(Prov, function (n, data) {
            var count = 0;
            $.each(ProvList, function (n, data1) {
                if (data1 == data) {
                    count++;
                }
            });
            ProvArr.push({
                name : data,
                y : count
            })
            ProvValue.push(count);
        });
 
    });
});
/**
 * This demo uses our own method of determining user's location
 * It is not public web service that you can use
 * You'll need to find your own. We recommend http://www.maxmind.com
 */
jQuery.getJSON( "https://services.amcharts.com/ip/?v=xz6Z", function( geo ) {

  var defaultMap = "usaLow";
  var countryMaps = {
    "AF": [ "afghanistanLow" ],
    "AL": [ "albaniaLow" ],
    "DZ": [ "algeriaLow" ],
    "AD": [ "andorraLow" ],
    "AO": [ "angolaLow" ],
    "AR": [ "argentinaLow" ],
    "AM": [ "armeniaLow" ],
    "AU": [ "australiaLow" ],
    "AT": [ "austriaLow" ],
    "AZ": [ "azerbaijanLow" ],
    "BS": [ "bahamasLow" ],
    "BH": [ "bahrainLow" ],
    "BD": [ "bangladeshLow" ],
    "BY": [ "belarusLow" ],
    "BE": [ "belgiumLow" ],
    "BZ": [ "belizeLow" ],
    "BT": [ "bhutanLow" ],
    "BO": [ "boliviaLow" ],
    "BA": [ "bosniaHerzegovinaCantonsLow" ],
    "BW": [ "botswanaLow" ],
    "BR": [ "brazilLow" ],
    "BN": [ "bruneiDarussalamLow" ],
    "BG": [ "bulgariaLow" ],
    "BF": [ "burkinaFasoLow" ],
    "BI": [ "burundiLow" ],
    "KH": [ "cambodiaLow" ],
    "CM": [ "cameroonLow" ],
    "CA": [ "canadaLow" ],
    "CV": [ "capeVerdeLow" ],
    "CF": [ "centralAfricanRepublicLow" ],
    "TD": [ "chadLow" ],
    "CL": [ "chileLow" ],
    "CN": [ "chinaLow" ],
    "CO": [ "colombiaLow" ],
    "CD": [ "congoDRLow" ],
    "CG": [ "congoLow" ],
    "CR": [ "costaRicaLow" ],
    "HR": [ "croatiaLow" ],
    "CU": [ "cubaLow" ],
    "CY": [ "cyprusLow" ],
    "UN": [ "cyprusNorthernCyprusLow" ],
    "GB": [ "unitedKingdomLow" ],
    "CZ": [ "czechRepublicLow" ],
    "DK": [ "denmarkLow" ],
    "DJ": [ "djiboutiLow" ],
    "DO": [ "dominicanRepublicLow" ],
    "EC": [ "ecuadorLow" ],
    "EG": [ "egyptLow" ],
    "SV": [ "elSalvadorLow" ],
    "EE": [ "estoniaLow" ],
    "FI": [ "finlandLow" ],
    "FR": [ "france2016Low" ],
    "GE": [ "georgiaLow" ],
    "DE": [ "germanyLow" ],
    "GR": [ "greeceLow" ],
    "GT": [ "guatemalaLow" ],
    "GN": [ "guineaLow" ],
    "GY": [ "guyanaLow" ],
    "HT": [ "haitiLow" ],
    "HN": [ "hondurasLow" ],
    "HK": [ "hongKongLow" ],
    "HU": [ "hungaryLow" ],
    "GL": [ "icelandLow" ],
    "IS": [ "icelandLow" ],
    "IN": [ "indiaLow" ],
    "ID": [ "indonesiaLow" ],
    "MY": [ "malaysiaLow" ],
    "IR": [ "iranLow" ],
    "IQ": [ "iraqLow" ],
    "IE": [ "irelandLow" ],
    "IL": [ "israelLow" ],
    "PS": [ "palestineLow" ],
    "VA": [ "italyLow" ],
    "SM": [ "sanMarinoLow" ],
    "MT": [ "italyLow" ],
    "IT": [ "italyLow" ],
    "JM": [ "jamaicaLow" ],
    "JP": [ "japanLow" ],
    "KZ": [ "kazakhstanLow" ],
    "KE": [ "kenyaLow" ],
    "XK": [ "kosovoLow" ],
    "KG": [ "kyrgyzstanLow" ],
    "LA": [ "laosLow" ],
    "LV": [ "latviaLow" ],
    "LT": [ "lithuaniaLow" ],
    "LU": [ "luxembourgLow" ],
    "MK": [ "macedoniaLow" ],
    "ML": [ "maliLow" ],
    "MX": [ "mexicoLow" ],
    "MD": [ "moldovaLow" ],
    "MN": [ "mongoliaLow" ],
    "ME": [ "montenegroLow" ],
    "MA": [ "moroccoLow" ],
    "MM": [ "myanmarLow" ],
    "NP": [ "nepalLow" ],
    "NL": [ "netherlandsLow" ],
    "NZ": [ "newZealandLow" ],
    "NI": [ "nicaraguaLow" ],
    "NG": [ "nigeriaLow" ],
    "NO": [ "norwayLow" ],
    "AE": [ "unitedArabEmiratesLow" ],
    "OM": [ "omanLow" ],
    "PK": [ "pakistanLow" ],
    "PA": [ "panamaLow" ],
    "PY": [ "paraguayLow" ],
    "PE": [ "peruLow" ],
    "PH": [ "philippinesLow" ],
    "PL": [ "polandLow" ],
    "PT": [ "portugalLow" ],
    "PR": [ "puertoRicoLow" ],
    "US": [ "usaLow" ],
    "QA": [ "qatarLow" ],
    "RO": [ "romaniaLow" ],
    "RW": [ "rwandaLow" ],
    "SA": [ "saudiArabiaLow" ],
    "RS": [ "serbiaLow" ],
    "SG": [ "singaporeLow" ],
    "SK": [ "slovakiaLow" ],
    "SI": [ "sloveniaLow" ],
    "LS": [ "southAfricaLow" ],
    "ZA": [ "southAfricaLow" ],
    "KR": [ "southKoreaLow" ],
    "ES": [ "spainLow" ],
    "LK": [ "sriLankaLow" ],
    "SR": [ "surinameLow" ],
    "SE": [ "swedenLow" ],
    "CH": [ "switzerlandLow" ],
    "SY": [ "syriaLow" ],
    "TW": [ "taiwanLow" ],
    "TJ": [ "tajikistanLow" ],
    "TH": [ "thailandLow" ],
    "TR": [ "turkeyLow" ],
    "UG": [ "ugandaLow" ],
    "UA": [ "ukraineLow" ],
    "GG": [ "unitedKingdomLow" ],
    "JE": [ "unitedKingdomLow" ],
    "IM": [ "unitedKingdomLow" ],
    "UY": [ "uruguayLow" ],
    "UZ": [ "uzbekistanLow" ],
    "VE": [ "venezuelaLow" ],
    "VN": [ "vietnamLow" ],
    "YE": [ "yemenLow" ]
  };

  // calculate which map to be used
  var currentMap = defaultMap;
  var titles = [];
  if ( countryMaps[ geo.country_code ] !== undefined ) {
    currentMap = countryMaps[ geo.country_code ][ 0 ];
    // add country title
    if ( geo.country_name ) {
      titles.push( {
        "text": geo.country_name
      } );
    }
  }

  var map = AmCharts.makeChart( "Maps1", {
    "type": "map",
    "theme": "datavis",
    "colorSteps": 10,
    "dataProvider": {
      "mapURL": "Java & Bali.svg",
      "getAreasFromMap": true,
      "zoomLevel": 0.9,
      "areas": []
    },
    "areasSettings": {
      "autoZoom": true,
      "balloonText": "[[title]]: <strong>[[value]]</strong>"
    },
    "valueLegend": {
      "right": 10,
      "minValue": "Sedikit",
      "maxValue": "Banyak"
    },
    "zoomControl": {
      "minZoomLevel": 0.9
    },
    "titles": [{
      "text": "Pulau Jawa dan Bali"
    }],
    "listeners": [ {
      "event": "init",
      "method": updateHeatmap
    } ]
  } );

  function updateHeatmap( event ) {
    var map = event.chart;
    if ( map.dataGenerated )
      return;
    if ( map.dataProvider.areas.length === 0 ) {
      setTimeout( updateHeatmap, 100 );
      return;
    }

    for ( var i = 0; i < map.dataProvider.areas.length; i++ ) {
      map.dataProvider.areas[i].value = ProvValue[i];
    }
    map.dataGenerated = true;
    map.validateNow();
  }
  
});