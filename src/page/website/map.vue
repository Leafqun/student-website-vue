<template>
    <div>
        <div class="toolbar">
            <p>position:  {{ lng }}, {{ lat }} </p><p>address: {{ address }}</p>
        </div>
        <div class="amap-page-container">
            <el-amap
                    vid="amapDemo"
                    :center="center"
                    :zoom="zoom"
                    class="amap-demo"
                    :events="events">
                <el-amap-marker :position="marker.position" :events="marker.events" :visible="marker.visible" :draggable="marker.draggable"></el-amap-marker>
                <el-amap-info-window :position="window.position" :content="window.content" :visible="window.visible" :events="window.events"></el-amap-info-window>
            </el-amap>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            let self = this;
            return {
                zoom: 14,
                center: [120.041084, 30.228262],
                address: '',
                events: {
                    init(e){
                        // 这里通过高德 SDK 完成。
                        var geocoder = new AMap.Geocoder({
                            radius: 1000,
                            extensions: "all"
                        });
                        geocoder.getAddress([self.lng ,self.lat], function(status, result) {
                            if (status === 'complete' && result.info === 'OK') {
                                if (result && result.regeocode) {
                                    self.address = result.regeocode.formattedAddress;
                                    self.$nextTick();
                                }
                            }
                        });
                    },
                    click(e) {
                        let { lng, lat } = e.lnglat;
                        self.lng = lng;
                        self.lat = lat;

                        // 这里通过高德 SDK 完成。
                        var geocoder = new AMap.Geocoder({
                            radius: 1000,
                            extensions: "all"
                        });
                        geocoder.getAddress([lng ,lat], function(status, result) {
                            if (status === 'complete' && result.info === 'OK') {
                                if (result && result.regeocode) {
                                    self.address = result.regeocode.formattedAddress;
                                    self.$nextTick();
                                }
                            }
                        });
                    }
                },
                lng: 120.041084,
                lat: 30.228262,
                marker: {
                    position: [120.041084, 30.228262],
                    events: {
                        click: () => {
                            self.window.visible = !self.window.visible;
                        },
                        dragend: (e) => {
                            this.markers[0].position = [e.lnglat.lng, e.lnglat.lat];
                        }
                    },
                    visible: true,
                    draggable: false
                },
                window: {
                    position: [120.041084, 30.228262],
                    content: 'Hi! ZJUT is here!',
                    visible: true,
                    events: {
                        close() {
                            console.log('close infowindow');
                        }
                    }
                }

            }
        }
    }
</script>

<style scoped>
    .amap-demo {
        height: 500px;
    }
    .amap-page-container{
        width:1000px;
        margin-left:10px;
    }
    .toolbar{
        margin-left:10px;
        margin-bottom: 10px;
        font-size: 18px;
    }
</style>