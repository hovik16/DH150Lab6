var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_wnba_attendance_2024attendance_test_2shp_1 = new ol.format.GeoJSON();
var features_wnba_attendance_2024attendance_test_2shp_1 = format_wnba_attendance_2024attendance_test_2shp_1.readFeatures(json_wnba_attendance_2024attendance_test_2shp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wnba_attendance_2024attendance_test_2shp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wnba_attendance_2024attendance_test_2shp_1.addFeatures(features_wnba_attendance_2024attendance_test_2shp_1);
var lyr_wnba_attendance_2024attendance_test_2shp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wnba_attendance_2024attendance_test_2shp_1, 
                style: style_wnba_attendance_2024attendance_test_2shp_1,
                popuplayertitle: "wnba_attendance_2024 — attendance_test_2.shp",
                interactive: true,
                title: '<img src="styles/legend/wnba_attendance_2024attendance_test_2shp_1.png" /> wnba_attendance_2024 — attendance_test_2.shp'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_wnba_attendance_2024attendance_test_2shp_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_wnba_attendance_2024attendance_test_2shp_1];
lyr_wnba_attendance_2024attendance_test_2shp_1.set('fieldAliases', {'Team': 'Team', 'Num_Games': 'Num_Games', 'Low': 'Low', 'High': 'High', 'Total': 'Total', 'Average': 'Average', 'recogito_l': 'recogito_l', 'recogito_1': 'recogito_1', });
lyr_wnba_attendance_2024attendance_test_2shp_1.set('fieldImages', {'Team': 'TextEdit', 'Num_Games': 'TextEdit', 'Low': 'TextEdit', 'High': 'TextEdit', 'Total': 'TextEdit', 'Average': 'TextEdit', 'recogito_l': 'TextEdit', 'recogito_1': 'TextEdit', });
lyr_wnba_attendance_2024attendance_test_2shp_1.set('fieldLabels', {'Team': 'no label', 'Num_Games': 'no label', 'Low': 'no label', 'High': 'no label', 'Total': 'no label', 'Average': 'no label', 'recogito_l': 'no label', 'recogito_1': 'no label', });
lyr_wnba_attendance_2024attendance_test_2shp_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});