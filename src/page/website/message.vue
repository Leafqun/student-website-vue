<template>
    <div>
        <div class="imgshow">
            <img src="./img/img2.gif">
        </div>
        <div class="message">
            <Form :model="formLeft" label-position="right" :label-width="100" id="form">
                <Form-item label="name" style="width:900px;color:black;font-weight: 700">
                    <Input v-model="formLeft.input1" name="stuName"></Input>
                </Form-item>
                <Form-item label="email" style="width:900px;font-weight: 700">
                    <Input v-model="formLeft.input2" name="email"></Input>
                </Form-item>
                <Form-item label="" style="width:900px;font-weight: 700">
                    <editor1 content="" :height="300" @change="updateData"></editor1>
                    <input v-model="formLeft.input3" type="hidden" name="content"></input>
                </Form-item>
                <Button type="success" style="margin-left:450px;" @click="submit">submit</Button>
            </Form>
        </div>
    </div>
</template>

<script>
    import '../../assets/css/iconfont/iconfont.css'
    import vue_html5_editor_config from '../../config/vue-html5-editor-config'
    import VueHtml5Editor from 'vue-html5-editor'
    const editor1 = new VueHtml5Editor(vue_html5_editor_config);
    export default {
        data() {
            return {
                formLeft: {
                    input1: '',
                    input2: '',
                    input3: ''
                }
            }
        },
        components:{
          editor1
        },
        methods:{
            updateData(val){
                this.formLeft.input3 = val;
            },
            submit(){
                let formdata = new FormData(document.getElementById("form"));
                let _self = this;
                if(this.formLeft.input1== ''||this.formLeft.input2 == ''||this.formLeft.input3 == ''){
                    this.$Message.error('Exist an empty input');
                    return false;
                }
                this.axios.post(this.url + "message/insertMessage", formdata).then( response => {
                     if(response.data.msg == 'success') {
                         _self.$Message.success('success');
                     }
                }).catch(error => {
                    console.log(error);
                    this.$Message.error('error');
                });
            }
        }
    }
</script>

<style scoped>
    .imgshow {
        width: 100%;
        margin: 20px auto 10px;
        text-align: center;
    }
    .message{

    }
</style>