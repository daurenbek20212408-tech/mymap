var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_boundary_administrative__1 = new ol.format.GeoJSON();
var features_boundary_administrative__1 = format_boundary_administrative__1.readFeatures(json_boundary_administrative__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_boundary_administrative__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_boundary_administrative__1.addFeatures(features_boundary_administrative__1);
var lyr_boundary_administrative__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_boundary_administrative__1, 
                style: style_boundary_administrative__1,
                popuplayertitle: 'boundary_administrative_Исатайский район',
                interactive: true,
                title: '<img src="styles/legend/boundary_administrative__1.png" /> boundary_administrative_Исатайский район'
            });
var format_boundary_administrative_atyrau_2 = new ol.format.GeoJSON();
var features_boundary_administrative_atyrau_2 = format_boundary_administrative_atyrau_2.readFeatures(json_boundary_administrative_atyrau_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_boundary_administrative_atyrau_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_boundary_administrative_atyrau_2.addFeatures(features_boundary_administrative_atyrau_2);
var lyr_boundary_administrative_atyrau_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_boundary_administrative_atyrau_2, 
                style: style_boundary_administrative_atyrau_2,
                popuplayertitle: 'boundary_administrative_atyrau',
                interactive: true,
                title: '<img src="styles/legend/boundary_administrative_atyrau_2.png" /> boundary_administrative_atyrau'
            });
var format_boundary_administrative_atyrau_3 = new ol.format.GeoJSON();
var features_boundary_administrative_atyrau_3 = format_boundary_administrative_atyrau_3.readFeatures(json_boundary_administrative_atyrau_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_boundary_administrative_atyrau_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_boundary_administrative_atyrau_3.addFeatures(features_boundary_administrative_atyrau_3);
var lyr_boundary_administrative_atyrau_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_boundary_administrative_atyrau_3, 
                style: style_boundary_administrative_atyrau_3,
                popuplayertitle: 'boundary_administrative_atyrau',
                interactive: true,
                title: '<img src="styles/legend/boundary_administrative_atyrau_3.png" /> boundary_administrative_atyrau'
            });
var format_myplaces_4 = new ol.format.GeoJSON();
var features_myplaces_4 = format_myplaces_4.readFeatures(json_myplaces_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_myplaces_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_myplaces_4.addFeatures(features_myplaces_4);
var lyr_myplaces_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_myplaces_4, 
                style: style_myplaces_4,
                popuplayertitle: 'myplaces — Тур по достопримечательностям',
                interactive: true,
                title: 'myplaces — Тур по достопримечательностям'
            });
var format_myplaces_5 = new ol.format.GeoJSON();
var features_myplaces_5 = format_myplaces_5.readFeatures(json_myplaces_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_myplaces_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_myplaces_5.addFeatures(features_myplaces_5);
var lyr_myplaces_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_myplaces_5, 
                style: style_myplaces_5,
                popuplayertitle: 'myplaces — Мои метки',
                interactive: true,
                title: 'myplaces — Мои метки'
            });
var format_myplaces_6 = new ol.format.GeoJSON();
var features_myplaces_6 = format_myplaces_6.readFeatures(json_myplaces_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_myplaces_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_myplaces_6.addFeatures(features_myplaces_6);
var lyr_myplaces_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_myplaces_6, 
                style: style_myplaces_6,
                popuplayertitle: 'myplaces — Мои метки',
                interactive: true,
                title: '<img src="styles/legend/myplaces_6.png" /> myplaces — Мои метки'
            });

lyr_OSMStandard_0.setVisible(true);lyr_boundary_administrative__1.setVisible(true);lyr_boundary_administrative_atyrau_2.setVisible(true);lyr_boundary_administrative_atyrau_3.setVisible(true);lyr_myplaces_4.setVisible(true);lyr_myplaces_5.setVisible(true);lyr_myplaces_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_boundary_administrative__1,lyr_boundary_administrative_atyrau_2,lyr_boundary_administrative_atyrau_3,lyr_myplaces_4,lyr_myplaces_5,lyr_myplaces_6];
lyr_boundary_administrative__1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'boundary': 'boundary', 'seasonal': 'seasonal', 'name:hy': 'name:hy', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'boat': 'boat', 'maritime': 'maritime', 'border_type': 'border_type', 'waterway': 'waterway', 'int_name': 'int_name', 'description:de': 'description:de', 'description': 'description', 'source:boundary': 'source:boundary', 'name:zh': 'name:zh', 'name:uz': 'name:uz', 'name:uk': 'name:uk', 'name:ug': 'name:ug', 'name:tr': 'name:tr', 'name:tk': 'name:tk', 'name:th': 'name:th', 'name:tg': 'name:tg', 'name:sv': 'name:sv', 'name:sr': 'name:sr', 'name:sk': 'name:sk', 'name:si': 'name:si', 'name:ru': 'name:ru', 'name:ro': 'name:ro', 'name:pt': 'name:pt', 'name:pl': 'name:pl', 'name:no': 'name:no', 'name:nl': 'name:nl', 'name:mt': 'name:mt', 'name:ms': 'name:ms', 'name:mn': 'name:mn', 'name:lv': 'name:lv', 'name:lt': 'name:lt', 'name:ko': 'name:ko', 'name:kk': 'name:kk', 'name:ka': 'name:ka', 'name:ja': 'name:ja', 'name:it': 'name:it', 'name:is': 'name:is', 'name:id': 'name:id', 'name:hu': 'name:hu', 'name:fi': 'name:fi', 'name:fa': 'name:fa', 'name:et': 'name:et', 'name:es': 'name:es', 'name:en': 'name:en', 'name:de': 'name:de', 'name:da': 'name:da', 'name:cs': 'name:cs', 'name:be': 'name:be', 'name:az': 'name:az', 'name:ar': 'name:ar', 'name': 'name', 'admin_level': 'admin_level', });
lyr_boundary_administrative_atyrau_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'boundary': 'boundary', 'old_name': 'old_name', 'name:yue': 'name:yue', 'name:xmf': 'name:xmf', 'name:wuu': 'name:wuu', 'name:ur': 'name:ur', 'name:tt': 'name:tt', 'name:tl': 'name:tl', 'name:sq': 'name:sq', 'name:sn': 'name:sn', 'name:sh': 'name:sh', 'name:pnb': 'name:pnb', 'name:pms': 'name:pms', 'name:pa': 'name:pa', 'name:or': 'name:or', 'name:nn': 'name:nn', 'name:mwl': 'name:mwl', 'name:mr': 'name:mr', 'name:ml': 'name:ml', 'name:la': 'name:la', 'name:ku': 'name:ku', 'name:kaa': 'name:kaa', 'name:hsb': 'name:hsb', 'name:hi': 'name:hi', 'name:fy': 'name:fy', 'name:fr': 'name:fr', 'name:el': 'name:el', 'name:cu': 'name:cu', 'name:bn': 'name:bn', 'name:bh': 'name:bh', 'name:bg': 'name:bg', 'name:ba': 'name:ba', 'name:azb': 'name:azb', 'name:arz': 'name:arz', 'seasonal': 'seasonal', 'name:hy': 'name:hy', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'boat': 'boat', 'maritime': 'maritime', 'border_type': 'border_type', 'waterway': 'waterway', 'int_name': 'int_name', 'description:de': 'description:de', 'description': 'description', 'source:boundary': 'source:boundary', 'name:zh': 'name:zh', 'name:uz': 'name:uz', 'name:uk': 'name:uk', 'name:ug': 'name:ug', 'name:tr': 'name:tr', 'name:tk': 'name:tk', 'name:th': 'name:th', 'name:tg': 'name:tg', 'name:sv': 'name:sv', 'name:sr': 'name:sr', 'name:sk': 'name:sk', 'name:si': 'name:si', 'name:ru': 'name:ru', 'name:ro': 'name:ro', 'name:pt': 'name:pt', 'name:pl': 'name:pl', 'name:no': 'name:no', 'name:nl': 'name:nl', 'name:mt': 'name:mt', 'name:ms': 'name:ms', 'name:mn': 'name:mn', 'name:lv': 'name:lv', 'name:lt': 'name:lt', 'name:ko': 'name:ko', 'name:kk': 'name:kk', 'name:ka': 'name:ka', 'name:ja': 'name:ja', 'name:it': 'name:it', 'name:is': 'name:is', 'name:id': 'name:id', 'name:hu': 'name:hu', 'name:fi': 'name:fi', 'name:fa': 'name:fa', 'name:et': 'name:et', 'name:es': 'name:es', 'name:en': 'name:en', 'name:de': 'name:de', 'name:da': 'name:da', 'name:cs': 'name:cs', 'name:be': 'name:be', 'name:az': 'name:az', 'name:ar': 'name:ar', 'name': 'name', 'admin_level': 'admin_level', });
lyr_boundary_administrative_atyrau_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'boundary': 'boundary', 'name:kaa': 'name:kaa', 'alt_name:en': 'alt_name:en', 'timezone': 'timezone', 'population': 'population', 'name:zh': 'name:zh', 'name:war': 'name:war', 'name:vi': 'name:vi', 'name:uz': 'name:uz', 'name:ur': 'name:ur', 'name:ug': 'name:ug', 'name:tr': 'name:tr', 'name:tg': 'name:tg', 'name:ta': 'name:ta', 'name:sv': 'name:sv', 'name:sr': 'name:sr', 'name:sco': 'name:sco', 'name:sah': 'name:sah', 'name:ro': 'name:ro', 'name:pt': 'name:pt', 'name:pnb': 'name:pnb', 'name:pl': 'name:pl', 'name:os': 'name:os', 'name:no': 'name:no', 'name:nn': 'name:nn', 'name:nl': 'name:nl', 'name:ms': 'name:ms', 'name:mr': 'name:mr', 'name:mk': 'name:mk', 'name:lv': 'name:lv', 'name:lt': 'name:lt', 'name:ky': 'name:ky', 'name:ko': 'name:ko', 'name:kk-Latn': 'name:kk-Latn', 'name:ka': 'name:ka', 'name:ja': 'name:ja', 'name:it': 'name:it', 'name:is': 'name:is', 'name:id': 'name:id', 'name:hr': 'name:hr', 'name:hi': 'name:hi', 'name:he': 'name:he', 'name:frr': 'name:frr', 'name:fr': 'name:fr', 'name:fi': 'name:fi', 'name:fa': 'name:fa', 'name:eu': 'name:eu', 'name:et': 'name:et', 'name:es': 'name:es', 'name:el': 'name:el', 'name:de': 'name:de', 'name:cs': 'name:cs', 'name:crh': 'name:crh', 'name:ceb': 'name:ceb', 'name:ca': 'name:ca', 'name:bg': 'name:bg', 'name:be-tarask': 'name:be-tarask', 'name:be': 'name:be', 'name:azb': 'name:azb', 'name:az': 'name:az', 'name:ast': 'name:ast', 'name:ar': 'name:ar', 'name:ace': 'name:ace', 'is_in:country_code': 'is_in:country_code', 'is_in:country': 'is_in:country', 'ISO3166-2': 'ISO3166-2', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'type': 'type', 'name:uk': 'name:uk', 'name:ru': 'name:ru', 'name:kk': 'name:kk', 'name:en': 'name:en', 'name': 'name', 'int_name': 'int_name', 'admin_level': 'admin_level', 'addr:region': 'addr:region', 'addr:country': 'addr:country', });
lyr_myplaces_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_myplaces_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_myplaces_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_boundary_administrative__1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'boundary': '', 'seasonal': '', 'name:hy': '', 'wikipedia': '', 'wikidata': '', 'boat': '', 'maritime': '', 'border_type': '', 'waterway': '', 'int_name': '', 'description:de': '', 'description': '', 'source:boundary': '', 'name:zh': '', 'name:uz': '', 'name:uk': '', 'name:ug': '', 'name:tr': '', 'name:tk': '', 'name:th': '', 'name:tg': '', 'name:sv': '', 'name:sr': '', 'name:sk': '', 'name:si': '', 'name:ru': '', 'name:ro': '', 'name:pt': '', 'name:pl': '', 'name:no': '', 'name:nl': '', 'name:mt': '', 'name:ms': '', 'name:mn': '', 'name:lv': '', 'name:lt': '', 'name:ko': '', 'name:kk': '', 'name:ka': '', 'name:ja': '', 'name:it': '', 'name:is': '', 'name:id': '', 'name:hu': '', 'name:fi': '', 'name:fa': '', 'name:et': '', 'name:es': '', 'name:en': '', 'name:de': '', 'name:da': '', 'name:cs': '', 'name:be': '', 'name:az': '', 'name:ar': '', 'name': '', 'admin_level': '', });
lyr_boundary_administrative_atyrau_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'boundary': '', 'old_name': '', 'name:yue': '', 'name:xmf': '', 'name:wuu': '', 'name:ur': '', 'name:tt': '', 'name:tl': '', 'name:sq': '', 'name:sn': '', 'name:sh': '', 'name:pnb': '', 'name:pms': '', 'name:pa': '', 'name:or': '', 'name:nn': '', 'name:mwl': '', 'name:mr': '', 'name:ml': '', 'name:la': '', 'name:ku': '', 'name:kaa': '', 'name:hsb': '', 'name:hi': '', 'name:fy': '', 'name:fr': '', 'name:el': '', 'name:cu': '', 'name:bn': '', 'name:bh': '', 'name:bg': '', 'name:ba': '', 'name:azb': '', 'name:arz': '', 'seasonal': '', 'name:hy': '', 'wikipedia': '', 'wikidata': '', 'boat': '', 'maritime': '', 'border_type': '', 'waterway': '', 'int_name': '', 'description:de': '', 'description': '', 'source:boundary': '', 'name:zh': '', 'name:uz': '', 'name:uk': '', 'name:ug': '', 'name:tr': '', 'name:tk': '', 'name:th': '', 'name:tg': '', 'name:sv': '', 'name:sr': '', 'name:sk': '', 'name:si': '', 'name:ru': '', 'name:ro': '', 'name:pt': '', 'name:pl': '', 'name:no': '', 'name:nl': '', 'name:mt': '', 'name:ms': '', 'name:mn': '', 'name:lv': '', 'name:lt': '', 'name:ko': '', 'name:kk': '', 'name:ka': '', 'name:ja': '', 'name:it': '', 'name:is': '', 'name:id': '', 'name:hu': '', 'name:fi': '', 'name:fa': '', 'name:et': '', 'name:es': '', 'name:en': '', 'name:de': '', 'name:da': '', 'name:cs': '', 'name:be': '', 'name:az': '', 'name:ar': '', 'name': '', 'admin_level': '', });
lyr_boundary_administrative_atyrau_3.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'boundary': 'TextEdit', 'name:kaa': 'TextEdit', 'alt_name:en': 'TextEdit', 'timezone': 'TextEdit', 'population': 'TextEdit', 'name:zh': 'TextEdit', 'name:war': 'TextEdit', 'name:vi': 'TextEdit', 'name:uz': 'TextEdit', 'name:ur': 'TextEdit', 'name:ug': 'TextEdit', 'name:tr': 'TextEdit', 'name:tg': 'TextEdit', 'name:ta': 'TextEdit', 'name:sv': 'TextEdit', 'name:sr': 'TextEdit', 'name:sco': 'TextEdit', 'name:sah': 'TextEdit', 'name:ro': 'TextEdit', 'name:pt': 'TextEdit', 'name:pnb': 'TextEdit', 'name:pl': 'TextEdit', 'name:os': 'TextEdit', 'name:no': 'TextEdit', 'name:nn': 'TextEdit', 'name:nl': 'TextEdit', 'name:ms': 'TextEdit', 'name:mr': 'TextEdit', 'name:mk': 'TextEdit', 'name:lv': 'TextEdit', 'name:lt': 'TextEdit', 'name:ky': 'TextEdit', 'name:ko': 'TextEdit', 'name:kk-Latn': 'TextEdit', 'name:ka': 'TextEdit', 'name:ja': 'TextEdit', 'name:it': 'TextEdit', 'name:is': 'TextEdit', 'name:id': 'TextEdit', 'name:hr': 'TextEdit', 'name:hi': 'TextEdit', 'name:he': 'TextEdit', 'name:frr': 'TextEdit', 'name:fr': 'TextEdit', 'name:fi': 'TextEdit', 'name:fa': 'TextEdit', 'name:eu': 'TextEdit', 'name:et': 'TextEdit', 'name:es': 'TextEdit', 'name:el': 'TextEdit', 'name:de': 'TextEdit', 'name:cs': 'TextEdit', 'name:crh': 'TextEdit', 'name:ceb': 'TextEdit', 'name:ca': 'TextEdit', 'name:bg': 'TextEdit', 'name:be-tarask': 'TextEdit', 'name:be': 'TextEdit', 'name:azb': 'TextEdit', 'name:az': 'TextEdit', 'name:ast': 'TextEdit', 'name:ar': 'TextEdit', 'name:ace': 'TextEdit', 'is_in:country_code': 'TextEdit', 'is_in:country': 'TextEdit', 'ISO3166-2': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'type': 'TextEdit', 'name:uk': 'TextEdit', 'name:ru': 'TextEdit', 'name:kk': 'TextEdit', 'name:en': 'TextEdit', 'name': 'TextEdit', 'int_name': 'TextEdit', 'admin_level': 'TextEdit', 'addr:region': 'TextEdit', 'addr:country': 'TextEdit', });
lyr_myplaces_4.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_myplaces_5.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_myplaces_6.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_boundary_administrative__1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'boundary': 'no label', 'seasonal': 'no label', 'name:hy': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'boat': 'no label', 'maritime': 'no label', 'border_type': 'no label', 'waterway': 'no label', 'int_name': 'no label', 'description:de': 'no label', 'description': 'no label', 'source:boundary': 'no label', 'name:zh': 'no label', 'name:uz': 'no label', 'name:uk': 'no label', 'name:ug': 'no label', 'name:tr': 'no label', 'name:tk': 'no label', 'name:th': 'no label', 'name:tg': 'no label', 'name:sv': 'no label', 'name:sr': 'no label', 'name:sk': 'no label', 'name:si': 'no label', 'name:ru': 'no label', 'name:ro': 'no label', 'name:pt': 'no label', 'name:pl': 'no label', 'name:no': 'no label', 'name:nl': 'no label', 'name:mt': 'no label', 'name:ms': 'no label', 'name:mn': 'no label', 'name:lv': 'no label', 'name:lt': 'no label', 'name:ko': 'no label', 'name:kk': 'no label', 'name:ka': 'no label', 'name:ja': 'no label', 'name:it': 'no label', 'name:is': 'no label', 'name:id': 'no label', 'name:hu': 'no label', 'name:fi': 'no label', 'name:fa': 'no label', 'name:et': 'no label', 'name:es': 'no label', 'name:en': 'no label', 'name:de': 'no label', 'name:da': 'no label', 'name:cs': 'no label', 'name:be': 'no label', 'name:az': 'no label', 'name:ar': 'no label', 'name': 'no label', 'admin_level': 'no label', });
lyr_boundary_administrative_atyrau_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'boundary': 'no label', 'old_name': 'no label', 'name:yue': 'no label', 'name:xmf': 'no label', 'name:wuu': 'no label', 'name:ur': 'no label', 'name:tt': 'no label', 'name:tl': 'no label', 'name:sq': 'no label', 'name:sn': 'no label', 'name:sh': 'no label', 'name:pnb': 'no label', 'name:pms': 'no label', 'name:pa': 'no label', 'name:or': 'no label', 'name:nn': 'no label', 'name:mwl': 'no label', 'name:mr': 'no label', 'name:ml': 'no label', 'name:la': 'no label', 'name:ku': 'no label', 'name:kaa': 'no label', 'name:hsb': 'no label', 'name:hi': 'no label', 'name:fy': 'no label', 'name:fr': 'no label', 'name:el': 'no label', 'name:cu': 'no label', 'name:bn': 'no label', 'name:bh': 'no label', 'name:bg': 'no label', 'name:ba': 'no label', 'name:azb': 'no label', 'name:arz': 'no label', 'seasonal': 'no label', 'name:hy': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'boat': 'no label', 'maritime': 'no label', 'border_type': 'no label', 'waterway': 'no label', 'int_name': 'no label', 'description:de': 'no label', 'description': 'no label', 'source:boundary': 'no label', 'name:zh': 'no label', 'name:uz': 'no label', 'name:uk': 'no label', 'name:ug': 'no label', 'name:tr': 'no label', 'name:tk': 'no label', 'name:th': 'no label', 'name:tg': 'no label', 'name:sv': 'no label', 'name:sr': 'no label', 'name:sk': 'no label', 'name:si': 'no label', 'name:ru': 'no label', 'name:ro': 'no label', 'name:pt': 'no label', 'name:pl': 'no label', 'name:no': 'no label', 'name:nl': 'no label', 'name:mt': 'no label', 'name:ms': 'no label', 'name:mn': 'no label', 'name:lv': 'no label', 'name:lt': 'no label', 'name:ko': 'no label', 'name:kk': 'no label', 'name:ka': 'no label', 'name:ja': 'no label', 'name:it': 'no label', 'name:is': 'no label', 'name:id': 'no label', 'name:hu': 'no label', 'name:fi': 'no label', 'name:fa': 'no label', 'name:et': 'no label', 'name:es': 'no label', 'name:en': 'no label', 'name:de': 'no label', 'name:da': 'no label', 'name:cs': 'no label', 'name:be': 'no label', 'name:az': 'no label', 'name:ar': 'no label', 'name': 'no label', 'admin_level': 'no label', });
lyr_boundary_administrative_atyrau_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'boundary': 'no label', 'name:kaa': 'no label', 'alt_name:en': 'no label', 'timezone': 'no label', 'population': 'no label', 'name:zh': 'no label', 'name:war': 'no label', 'name:vi': 'no label', 'name:uz': 'no label', 'name:ur': 'no label', 'name:ug': 'no label', 'name:tr': 'no label', 'name:tg': 'no label', 'name:ta': 'no label', 'name:sv': 'no label', 'name:sr': 'no label', 'name:sco': 'no label', 'name:sah': 'no label', 'name:ro': 'no label', 'name:pt': 'no label', 'name:pnb': 'no label', 'name:pl': 'no label', 'name:os': 'no label', 'name:no': 'no label', 'name:nn': 'no label', 'name:nl': 'no label', 'name:ms': 'no label', 'name:mr': 'no label', 'name:mk': 'no label', 'name:lv': 'no label', 'name:lt': 'no label', 'name:ky': 'no label', 'name:ko': 'no label', 'name:kk-Latn': 'no label', 'name:ka': 'no label', 'name:ja': 'no label', 'name:it': 'no label', 'name:is': 'no label', 'name:id': 'no label', 'name:hr': 'no label', 'name:hi': 'no label', 'name:he': 'no label', 'name:frr': 'no label', 'name:fr': 'no label', 'name:fi': 'no label', 'name:fa': 'no label', 'name:eu': 'no label', 'name:et': 'no label', 'name:es': 'no label', 'name:el': 'no label', 'name:de': 'no label', 'name:cs': 'no label', 'name:crh': 'no label', 'name:ceb': 'no label', 'name:ca': 'no label', 'name:bg': 'no label', 'name:be-tarask': 'no label', 'name:be': 'no label', 'name:azb': 'no label', 'name:az': 'no label', 'name:ast': 'no label', 'name:ar': 'no label', 'name:ace': 'no label', 'is_in:country_code': 'no label', 'is_in:country': 'no label', 'ISO3166-2': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'type': 'no label', 'name:uk': 'no label', 'name:ru': 'no label', 'name:kk': 'no label', 'name:en': 'no label', 'name': 'no label', 'int_name': 'no label', 'admin_level': 'no label', 'addr:region': 'no label', 'addr:country': 'no label', });
lyr_myplaces_4.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_myplaces_5.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_myplaces_6.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_myplaces_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});