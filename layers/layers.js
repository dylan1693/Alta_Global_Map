var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Southwest_Asia_mining_Facilitiesswa_mining_facilities_of_int_1 = new ol.format.GeoJSON();
var features_Southwest_Asia_mining_Facilitiesswa_mining_facilities_of_int_1 = format_Southwest_Asia_mining_Facilitiesswa_mining_facilities_of_int_1.readFeatures(json_Southwest_Asia_mining_Facilitiesswa_mining_facilities_of_int_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Southwest_Asia_mining_Facilitiesswa_mining_facilities_of_int_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Southwest_Asia_mining_Facilitiesswa_mining_facilities_of_int_1.addFeatures(features_Southwest_Asia_mining_Facilitiesswa_mining_facilities_of_int_1);
var lyr_Southwest_Asia_mining_Facilitiesswa_mining_facilities_of_int_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Southwest_Asia_mining_Facilitiesswa_mining_facilities_of_int_1, 
                style: style_Southwest_Asia_mining_Facilitiesswa_mining_facilities_of_int_1,
                popuplayertitle: 'Southwest_Asia_mining_Facilities — swa_mining_facilities_of_int',
                interactive: true,
                title: '<img src="styles/legend/Southwest_Asia_mining_Facilitiesswa_mining_facilities_of_int_1.png" /> Southwest_Asia_mining_Facilities — swa_mining_facilities_of_int'
            });
var group_Southwest_Asia = new ol.layer.Group({
                                layers: [lyr_Southwest_Asia_mining_Facilitiesswa_mining_facilities_of_int_1,],
                                fold: 'open',
                                title: 'Southwest_Asia'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Southwest_Asia_mining_Facilitiesswa_mining_facilities_of_int_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_Southwest_Asia];
lyr_Southwest_Asia_mining_Facilitiesswa_mining_facilities_of_int_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FeatureUID': 'FeatureUID', 'Label1': 'Label1', 'Country': 'Country', 'FeatureNam': 'FeatureNam', 'FeatureTyp': 'FeatureTyp', 'DsgAttr01': 'DsgAttr01', 'DsgAttr02': 'DsgAttr02', 'DsgAttr03': 'DsgAttr03', 'DsgAttr04': 'DsgAttr04', 'DsgAttr05': 'DsgAttr05', 'DsgAttr06': 'DsgAttr06', 'DsgAttr07': 'DsgAttr07', 'DsgAttr08': 'DsgAttr08', 'DsgAttr10': 'DsgAttr10', 'DsgAttr09': 'DsgAttr09', 'LocOpStat': 'LocOpStat', 'MemoLoc': 'MemoLoc', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'LocConfid': 'LocConfid', 'LocSource1': 'LocSource1', 'InfSource1': 'InfSource1', 'OperateNam': 'OperateNam', 'OwnerName1': 'OwnerName1', 'OwnerName2': 'OwnerName2', 'OwnerName3': 'OwnerName3', 'OwnerName4': 'OwnerName4', 'ADM1': 'ADM1', });
lyr_Southwest_Asia_mining_Facilitiesswa_mining_facilities_of_int_1.set('fieldImages', {'fid': '', 'OBJECTID': '', 'FeatureUID': '', 'Label1': '', 'Country': '', 'FeatureNam': '', 'FeatureTyp': '', 'DsgAttr01': '', 'DsgAttr02': '', 'DsgAttr03': '', 'DsgAttr04': '', 'DsgAttr05': '', 'DsgAttr06': '', 'DsgAttr07': '', 'DsgAttr08': '', 'DsgAttr10': '', 'DsgAttr09': '', 'LocOpStat': '', 'MemoLoc': '', 'Latitude': '', 'Longitude': '', 'LocConfid': '', 'LocSource1': '', 'InfSource1': '', 'OperateNam': '', 'OwnerName1': '', 'OwnerName2': '', 'OwnerName3': '', 'OwnerName4': '', 'ADM1': '', });
lyr_Southwest_Asia_mining_Facilitiesswa_mining_facilities_of_int_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'FeatureUID': 'no label', 'Label1': 'no label', 'Country': 'no label', 'FeatureNam': 'no label', 'FeatureTyp': 'no label', 'DsgAttr01': 'no label', 'DsgAttr02': 'no label', 'DsgAttr03': 'no label', 'DsgAttr04': 'no label', 'DsgAttr05': 'no label', 'DsgAttr06': 'no label', 'DsgAttr07': 'no label', 'DsgAttr08': 'no label', 'DsgAttr10': 'no label', 'DsgAttr09': 'no label', 'LocOpStat': 'no label', 'MemoLoc': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'LocConfid': 'no label', 'LocSource1': 'no label', 'InfSource1': 'no label', 'OperateNam': 'no label', 'OwnerName1': 'no label', 'OwnerName2': 'no label', 'OwnerName3': 'no label', 'OwnerName4': 'no label', 'ADM1': 'no label', });
lyr_Southwest_Asia_mining_Facilitiesswa_mining_facilities_of_int_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});