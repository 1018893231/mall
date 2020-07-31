;(function(window,$,undefined){function getProvince(regions){return regions['provincesArr'];}
function getCity(regions,provinceName){return regions['provinces'][provinceName]['citiesArr'];}
function getArea(regions,provinceName,cityName){return regions['provinces'][provinceName]['cities'][cityName]['areasArr'];}
var myApp=new Framework7();var s=new Date();var province=getProvince(regions),city=getCity(regions,'北京市'),area=getArea(regions,'北京市','北京市');console.log(getArea(regions,'广东省','中山市')==0)
var e=new Date();console.log(e-s);var provinceSelect='';var pickerLocation=myApp.picker({input:'#location',rotateEffect:true,toolbarTemplate:'<div class="toolbar">\
                            <div class="toolbar-inner">\
                                <div class="left">\
                                    <a href="#" class="link close-picker">取消</a>\
                                </div>\
                                <div class="right">\
                                    <a href="#" class="link close-picker">完成</a>\
                                </div>\
                            </div>\
                        </div>',cols:[{cssClass:'f-s-14',width:'33.33%',textAlign:'left',values:province,onChange:function(picker,province){if(picker.cols[1].replaceValues){provinceSelect=province;city=getCity(regions,province);area=getArea(regions,province,city[0]);picker.cols[1].replaceValues(city);if(area.length!==0){picker.cols[2].replaceValues(area);}else{picker.cols[2].replaceValues(city);}}}},{cssClass:'f-s-14',width:'33.33%',textAlign:'center',values:city,onChange:function(picker,city){if(picker.cols[2].replaceValues){area=getArea(regions,provinceSelect,city);if(area.length!==0){picker.cols[2].replaceValues(area);}else{picker.cols[2].replaceValues([city]);}}}},{cssClass:'f-s-14',width:'33.33%',textAlign:'right',values:area,}]});})(window,jQuery);