var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_soluongchua_huyen_1 = new ol.format.GeoJSON();
var features_soluongchua_huyen_1 = format_soluongchua_huyen_1.readFeatures(json_soluongchua_huyen_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_soluongchua_huyen_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_soluongchua_huyen_1.addFeatures(features_soluongchua_huyen_1);
var lyr_soluongchua_huyen_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_soluongchua_huyen_1, 
                style: style_soluongchua_huyen_1,
                popuplayertitle: 'soluongchua_huyen',
                interactive: true,
                title: '<img src="styles/legend/soluongchua_huyen_1.png" /> soluongchua_huyen'
            });
var format_soctrang_huyen_2 = new ol.format.GeoJSON();
var features_soctrang_huyen_2 = format_soctrang_huyen_2.readFeatures(json_soctrang_huyen_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_soctrang_huyen_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_soctrang_huyen_2.addFeatures(features_soctrang_huyen_2);
var lyr_soctrang_huyen_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_soctrang_huyen_2, 
                style: style_soctrang_huyen_2,
                popuplayertitle: 'soctrang_huyen',
                interactive: true,
    title: 'soctrang_huyen<br />\
    <img src="styles/legend/soctrang_huyen_2_0.png" /> Châu Thành<br />\
    <img src="styles/legend/soctrang_huyen_2_1.png" /> Cù Lao Dung<br />\
    <img src="styles/legend/soctrang_huyen_2_2.png" /> Kế Sách<br />\
    <img src="styles/legend/soctrang_huyen_2_3.png" /> Long Phú<br />\
    <img src="styles/legend/soctrang_huyen_2_4.png" /> Mỹ Tú<br />\
    <img src="styles/legend/soctrang_huyen_2_5.png" /> Mỹ Xuyên<br />\
    <img src="styles/legend/soctrang_huyen_2_6.png" /> Ngã Năm<br />\
    <img src="styles/legend/soctrang_huyen_2_7.png" /> Sóc Trăng<br />\
    <img src="styles/legend/soctrang_huyen_2_8.png" /> Thạnh Trị<br />\
    <img src="styles/legend/soctrang_huyen_2_9.png" /> Trần Đề<br />\
    <img src="styles/legend/soctrang_huyen_2_10.png" /> Vĩnh Châu<br />\
    <img src="styles/legend/soctrang_huyen_2_11.png" /> <br />' });
var format_phncp_3 = new ol.format.GeoJSON();
var features_phncp_3 = format_phncp_3.readFeatures(json_phncp_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_phncp_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_phncp_3.addFeatures(features_phncp_3);
var lyr_phncp_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_phncp_3, 
                style: style_phncp_3,
                popuplayertitle: 'phân cấp',
                interactive: true,
    title: 'phân cấp<br />\
    <img src="styles/legend/phncp_3_0.png" /> cong trinh chua xep hang<br />\
    <img src="styles/legend/phncp_3_1.png" /> cong trinh chua xep hang
<br />\
    <img src="styles/legend/phncp_3_2.png" /> Di tich kien truc nghe thuat cap quoc gia
<br />\
    <img src="styles/legend/phncp_3_3.png" /> Di tich kien truc nghe thuat cap tinh
<br />\
    <img src="styles/legend/phncp_3_4.png" /> Di tich lich su cach mang cap tinh<br />\
    <img src="styles/legend/phncp_3_5.png" /> Di tich lich su cach mang cap tinh
<br />\
    <img src="styles/legend/phncp_3_6.png" /> Di tich lich su van hoa cach mang cap tinh
<br />\
    <img src="styles/legend/phncp_3_7.png" /> Di tich lich su van hoa cap tinh
<br />\
    <img src="styles/legend/phncp_3_8.png" /> <br />' });
var format_huyn_4 = new ol.format.GeoJSON();
var features_huyn_4 = format_huyn_4.readFeatures(json_huyn_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_huyn_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_huyn_4.addFeatures(features_huyn_4);
var lyr_huyn_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_huyn_4, 
                style: style_huyn_4,
                popuplayertitle: 'huyện',
                interactive: true,
    title: 'huyện<br />\
    <img src="styles/legend/huyn_4_0.png" /> Huyện Châu Thành<br />\
    <img src="styles/legend/huyn_4_1.png" /> Huyện cù lao Dung<br />\
    <img src="styles/legend/huyn_4_2.png" /> Huyện Kế Sách<br />\
    <img src="styles/legend/huyn_4_3.png" /> Huyện Long Phú<br />\
    <img src="styles/legend/huyn_4_4.png" /> Huyện Mỹ Tú<br />\
    <img src="styles/legend/huyn_4_5.png" /> Huyện Mỹ Xuyên<br />\
    <img src="styles/legend/huyn_4_6.png" /> Huyện Ngã Năm<br />\
    <img src="styles/legend/huyn_4_7.png" /> Huyện Thạnh Trị<br />\
    <img src="styles/legend/huyn_4_8.png" /> Huyện trần Đề<br />\
    <img src="styles/legend/huyn_4_9.png" /> Thành Phố Sốc Trăng<br />\
    <img src="styles/legend/huyn_4_10.png" /> Thị Xã Vĩnh Châu<br />\
    <img src="styles/legend/huyn_4_11.png" /> <br />' });
var format_giaothong_ST_5 = new ol.format.GeoJSON();
var features_giaothong_ST_5 = format_giaothong_ST_5.readFeatures(json_giaothong_ST_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_giaothong_ST_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_giaothong_ST_5.addFeatures(features_giaothong_ST_5);
var lyr_giaothong_ST_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_giaothong_ST_5, 
                style: style_giaothong_ST_5,
                popuplayertitle: 'giaothong_ST',
                interactive: true,
                title: '<img src="styles/legend/giaothong_ST_5.png" /> giaothong_ST'
            });
var format_songchinh_6 = new ol.format.GeoJSON();
var features_songchinh_6 = format_songchinh_6.readFeatures(json_songchinh_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_songchinh_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_songchinh_6.addFeatures(features_songchinh_6);
var lyr_songchinh_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_songchinh_6, 
                style: style_songchinh_6,
                popuplayertitle: 'songchinh',
                interactive: true,
                title: '<img src="styles/legend/songchinh_6.png" /> songchinh'
            });
var format_chua_2_7 = new ol.format.GeoJSON();
var features_chua_2_7 = format_chua_2_7.readFeatures(json_chua_2_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_chua_2_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_chua_2_7.addFeatures(features_chua_2_7);
var lyr_chua_2_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_chua_2_7, 
                style: style_chua_2_7,
                popuplayertitle: 'chua_2',
                interactive: true,
    title: 'chua_2<br />\
    <img src="styles/legend/chua_2_7_0.png" /> <50
<br />\
    <img src="styles/legend/chua_2_7_1.png" /> >800
<br />\
    <img src="styles/legend/chua_2_7_2.png" /> 100-300
<br />\
    <img src="styles/legend/chua_2_7_3.png" /> 300- 500<br />\
    <img src="styles/legend/chua_2_7_4.png" /> 300-500
<br />\
    <img src="styles/legend/chua_2_7_5.png" /> 50-100
<br />\
    <img src="styles/legend/chua_2_7_6.png" /> 500-800
<br />' });
var format_tui_8 = new ol.format.GeoJSON();
var features_tui_8 = format_tui_8.readFeatures(json_tui_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tui_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tui_8.addFeatures(features_tui_8);
var lyr_tui_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tui_8, 
                style: style_tui_8,
                popuplayertitle: 'tuổi',
                interactive: true,
                title: '<img src="styles/legend/tui_8.png" /> tuổi'
            });

lyr_OSMStandard_0.setVisible(true);lyr_soluongchua_huyen_1.setVisible(true);lyr_soctrang_huyen_2.setVisible(true);lyr_phncp_3.setVisible(true);lyr_huyn_4.setVisible(true);lyr_giaothong_ST_5.setVisible(true);lyr_songchinh_6.setVisible(true);lyr_chua_2_7.setVisible(true);lyr_tui_8.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_soluongchua_huyen_1,lyr_soctrang_huyen_2,lyr_phncp_3,lyr_huyn_4,lyr_giaothong_ST_5,lyr_songchinh_6,lyr_chua_2_7,lyr_tui_8];
lyr_soluongchua_huyen_1.set('fieldAliases', {'QuocGia': 'QuocGia', 'TenTinh': 'TenTinh', 'TenHuyen': 'TenHuyen', 'TenHuyen_E': 'TenHuyen_E', 'Loai_H': 'Loai_H', 'Loai_H_E': 'Loai_H_E', 'count': 'count', });
lyr_soctrang_huyen_2.set('fieldAliases', {'QuocGia': 'QuocGia', 'TenTinh': 'TenTinh', 'TenHuyen': 'TenHuyen', 'TenHuyen_E': 'TenHuyen_E', 'Loai_H': 'Loai_H', 'Loai_H_E': 'Loai_H_E', });
lyr_phncp_3.set('fieldAliases', {'STT': 'STT', 'Tên Chùa': 'Tên Chùa', 'Tên Khmer': 'Tên Khmer', 'Tên Việ': 'Tên Việ', 'Năm Xây': 'Năm Xây', 'Địa Ch�': 'Địa Ch�', 'X': 'X', 'Y': 'Y', 'link': 'link', 'ảnh': 'ảnh', 'Huyện, T': 'Huyện, T', 'Năm XD': 'Năm XD', 'So_chua': 'So_chua', 'Phân cấ': 'Phân cấ', 'Tuổi tă': 'Tuổi tă', });
lyr_huyn_4.set('fieldAliases', {'STT': 'STT', 'Tên Chùa': 'Tên Chùa', 'Tên Khmer': 'Tên Khmer', 'Tên Việ': 'Tên Việ', 'Năm Xây': 'Năm Xây', 'Địa Ch�': 'Địa Ch�', 'X': 'X', 'Y': 'Y', 'link': 'link', 'ảnh': 'ảnh', 'Huyện, T': 'Huyện, T', 'Năm XD': 'Năm XD', 'So_chua': 'So_chua', 'Phân cấ': 'Phân cấ', 'Tuổi tă': 'Tuổi tă', });
lyr_giaothong_ST_5.set('fieldAliases', {'gid': 'gid', 'ma': 'ma', 'ten': 'ten', 'loai_duong': 'loai_duong', 'cap_duong': 'cap_duong', 'chieu_dai': 'chieu_dai', 'map_id': 'map_id', });
lyr_songchinh_6.set('fieldAliases', {'fclass': 'fclass', 'name': 'name', });
lyr_chua_2_7.set('fieldAliases', {'STT': 'STT', 'Tên Chùa': 'Tên Chùa', 'Tên Khmer': 'Tên Khmer', 'Tên Việ': 'Tên Việ', 'Năm Xây': 'Năm Xây', 'Địa Ch�': 'Địa Ch�', 'X': 'X', 'Y': 'Y', 'link': 'link', 'ảnh': 'ảnh', 'Huyện, T': 'Huyện, T', 'Năm XD': 'Năm XD', 'So_chua': 'So_chua', 'Phân cấ': 'Phân cấ', 'Tuổi tă': 'Tuổi tă', });
lyr_tui_8.set('fieldAliases', {'STT': 'STT', 'Tên Chùa': 'Tên Chùa', 'Tên Khmer': 'Tên Khmer', 'Tên Việ': 'Tên Việ', 'Năm Xây': 'Năm Xây', 'Địa Ch�': 'Địa Ch�', 'X': 'X', 'Y': 'Y', 'link': 'link', 'ảnh': 'ảnh', 'Huyện, T': 'Huyện, T', 'Năm XD': 'Năm XD', 'So_chua': 'So_chua', 'Phân cấ': 'Phân cấ', 'Tuổi tă': 'Tuổi tă', });
lyr_soluongchua_huyen_1.set('fieldImages', {'QuocGia': 'TextEdit', 'TenTinh': 'TextEdit', 'TenHuyen': 'TextEdit', 'TenHuyen_E': 'TextEdit', 'Loai_H': 'TextEdit', 'Loai_H_E': 'TextEdit', 'count': 'TextEdit', });
lyr_soctrang_huyen_2.set('fieldImages', {'QuocGia': 'TextEdit', 'TenTinh': 'TextEdit', 'TenHuyen': 'TextEdit', 'TenHuyen_E': 'TextEdit', 'Loai_H': 'TextEdit', 'Loai_H_E': 'TextEdit', });
lyr_phncp_3.set('fieldImages', {'STT': 'TextEdit', 'Tên Chùa': 'TextEdit', 'Tên Khmer': 'TextEdit', 'Tên Việ': 'TextEdit', 'Năm Xây': 'TextEdit', 'Địa Ch�': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'link': 'TextEdit', 'ảnh': 'TextEdit', 'Huyện, T': 'TextEdit', 'Năm XD': 'Range', 'So_chua': 'TextEdit', 'Phân cấ': 'TextEdit', 'Tuổi tă': 'TextEdit', });
lyr_huyn_4.set('fieldImages', {'STT': 'TextEdit', 'Tên Chùa': 'TextEdit', 'Tên Khmer': 'TextEdit', 'Tên Việ': 'TextEdit', 'Năm Xây': 'TextEdit', 'Địa Ch�': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'link': 'TextEdit', 'ảnh': 'TextEdit', 'Huyện, T': 'TextEdit', 'Năm XD': 'Range', 'So_chua': 'TextEdit', 'Phân cấ': 'TextEdit', 'Tuổi tă': 'TextEdit', });
lyr_giaothong_ST_5.set('fieldImages', {'gid': '', 'ma': '', 'ten': '', 'loai_duong': '', 'cap_duong': '', 'chieu_dai': '', 'map_id': '', });
lyr_songchinh_6.set('fieldImages', {'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_chua_2_7.set('fieldImages', {'STT': 'TextEdit', 'Tên Chùa': 'TextEdit', 'Tên Khmer': 'TextEdit', 'Tên Việ': 'TextEdit', 'Năm Xây': 'TextEdit', 'Địa Ch�': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'link': 'TextEdit', 'ảnh': 'TextEdit', 'Huyện, T': 'TextEdit', 'Năm XD': 'Range', 'So_chua': 'TextEdit', 'Phân cấ': 'TextEdit', 'Tuổi tă': 'TextEdit', });
lyr_tui_8.set('fieldImages', {'STT': '', 'Tên Chùa': '', 'Tên Khmer': '', 'Tên Việ': '', 'Năm Xây': '', 'Địa Ch�': '', 'X': '', 'Y': '', 'link': '', 'ảnh': '', 'Huyện, T': '', 'Năm XD': '', 'So_chua': '', 'Phân cấ': '', 'Tuổi tă': '', });
lyr_soluongchua_huyen_1.set('fieldLabels', {'QuocGia': 'no label', 'TenTinh': 'no label', 'TenHuyen': 'no label', 'TenHuyen_E': 'no label', 'Loai_H': 'no label', 'Loai_H_E': 'no label', 'count': 'no label', });
lyr_soctrang_huyen_2.set('fieldLabels', {'QuocGia': 'no label', 'TenTinh': 'no label', 'TenHuyen': 'no label', 'TenHuyen_E': 'no label', 'Loai_H': 'no label', 'Loai_H_E': 'no label', });
lyr_phncp_3.set('fieldLabels', {'STT': 'no label', 'Tên Chùa': 'no label', 'Tên Khmer': 'no label', 'Tên Việ': 'no label', 'Năm Xây': 'no label', 'Địa Ch�': 'no label', 'X': 'no label', 'Y': 'no label', 'link': 'no label', 'ảnh': 'no label', 'Huyện, T': 'no label', 'Năm XD': 'no label', 'So_chua': 'no label', 'Phân cấ': 'no label', 'Tuổi tă': 'no label', });
lyr_huyn_4.set('fieldLabels', {'STT': 'no label', 'Tên Chùa': 'no label', 'Tên Khmer': 'no label', 'Tên Việ': 'no label', 'Năm Xây': 'no label', 'Địa Ch�': 'no label', 'X': 'no label', 'Y': 'no label', 'link': 'no label', 'ảnh': 'no label', 'Huyện, T': 'no label', 'Năm XD': 'no label', 'So_chua': 'no label', 'Phân cấ': 'no label', 'Tuổi tă': 'no label', });
lyr_giaothong_ST_5.set('fieldLabels', {'gid': 'no label', 'ma': 'no label', 'ten': 'no label', 'loai_duong': 'no label', 'cap_duong': 'no label', 'chieu_dai': 'no label', 'map_id': 'no label', });
lyr_songchinh_6.set('fieldLabels', {'fclass': 'no label', 'name': 'no label', });
lyr_chua_2_7.set('fieldLabels', {'STT': 'no label', 'Tên Chùa': 'no label', 'Tên Khmer': 'no label', 'Tên Việ': 'no label', 'Năm Xây': 'no label', 'Địa Ch�': 'no label', 'X': 'no label', 'Y': 'no label', 'link': 'no label', 'ảnh': 'no label', 'Huyện, T': 'no label', 'Năm XD': 'no label', 'So_chua': 'no label', 'Phân cấ': 'no label', 'Tuổi tă': 'no label', });
lyr_tui_8.set('fieldLabels', {'STT': 'inline label - always visible', 'Tên Chùa': 'inline label - always visible', 'Tên Khmer': 'inline label - always visible', 'Tên Việ': 'inline label - always visible', 'Năm Xây': 'no label', 'Địa Ch�': 'no label', 'X': 'no label', 'Y': 'no label', 'link': 'no label', 'ảnh': 'no label', 'Huyện, T': 'no label', 'Năm XD': 'no label', 'So_chua': 'no label', 'Phân cấ': 'no label', 'Tuổi tă': 'no label', });
lyr_tui_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});