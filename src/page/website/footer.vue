<template>
    <div class="footer">
        <div class="footerl">
            <p class="p1">中国&nbsp;&nbsp;&nbsp;&nbsp;杭州</p>
            <p class="p2"><b><router-link to="/map">我们的位置</router-link></b></p>
        </div>
        <div class="footerr">
            <p>
                版权所有：浙江工业大学信息工程学院&nbsp;&nbsp;&nbsp;&nbsp;地址：杭州市西湖区留和路288号&nbsp;&nbsp;|&nbsp;&nbsp;<a
                    class="btn btn-primary" href="http://119.23.22.99/manage2">管理登录</a><br>
                邮编:310023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;联系电话：0571-85290582&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;传真：0571-85290570<br>E-mail:xxxyyb@zjut.edu.cn
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                a: 'a'
            }
        }
    }
</script>

<style scoped>
    /*-----------尾部---------*/
    .footer{
        border-top: 5px solid #809bc8;
        font-size: 14px;
        clear: both;
        margin: auto;
        height:90px;
        width:100%;
    }
    .footerl{
        float:left;
        width:200px;
        border-right:1px #999 solid;
        margin:10px;
        padding: 10px;
        height:50px;
        background: url(img/map.gif) no-repeat 0 0;
    }
    .p1{margin:0px;padding:0 0 0 35px;text-align:left;}
    .p2{margin:5px 0 0 0;padding:0 0 0 35px;text-align:left;color: #809bc8;}
    .footerr{
        float:right;
        width: 650px;
        color: #000;
    }
    .footerr p{margin:0;text-align:left;line-height:20px;padding: 15px;}
    .footerr a{
        float: right;
        opacity: 0 !important;
        font-size:10px;
    }
    .footerr a:hover{
        float: right;
        opacity: 1 !important;
    }
    .btn {
        display: inline-block;
        padding: 6px 12px;
        margin-bottom: 0;
        font-size: 14px;
        font-weight: normal;
        line-height: 1.42857143;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        background-image: none;
        border: 1px solid transparent;
        border-radius: 4px;
    }
    .btn:focus,
    .btn:active:focus{
        outline: 5px auto -webkit-focus-ring-color;
        outline-offset: -2px;
    }
    .btn:hover,
    .btn:focus{
        color: #333;
        text-decoration: none;
    }
    .btn:active{
        background-image: none;
        outline: 0;
        -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
        box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
    }
    .btn-primary {
        color: #fff;
        background-color: #337ab7;
        border-color: #2e6da4;
    }
    .btn-primary:focus,
    .btn-primary.focus {
        color: #fff;
        background-color: #286090;
        border-color: #122b40;
    }
    .btn-primary:hover {
        color: #fff;
        background-color: #286090;
        border-color: #204d74;
    }
    .btn-primary:active,
    .btn-primary.active,
    .open > .dropdown-toggle.btn-primary {
        color: #fff;
        background-color: #286090;
        border-color: #204d74;
    }
    .btn-primary:active:hover,
    .btn-primary.active:hover,
    .open > .dropdown-toggle.btn-primary:hover,
    .btn-primary:active:focus,
    .btn-primary.active:focus,
    .open > .dropdown-toggle.btn-primary:focus,
    .btn-primary:active.focus,
    .btn-primary.active.focus,
    .open > .dropdown-toggle.btn-primary.focus {
        color: #fff;
        background-color: #204d74;
        border-color: #122b40;
    }
    .btn-primary:active,
    .btn-primary.active,
    .open > .dropdown-toggle.btn-primary {
        background-image: none;
    }
    .btn-primary.disabled:hover,
    .btn-primary[disabled]:hover,
    fieldset[disabled] .btn-primary:hover,
    .btn-primary.disabled:focus,
    .btn-primary[disabled]:focus,
    fieldset[disabled] .btn-primary:focus,
    .btn-primary.disabled.focus,
    .btn-primary[disabled].focus,
    fieldset[disabled] .btn-primary.focus {
        background-color: #337ab7;
        border-color: #2e6da4;
    }
    .btn-primary .badge {
        color: #337ab7;
        background-color: #fff;
    }
</style>