<template>
    <div class="check" >
        <h3>{{msg}}</h3>
        <div class="input">
            <input type="text" v-input v-focus><span>{{msg1}}</span>
        </div>
        <div class="input">
            <input type="text" v-input v-required><span>{{msg2}}</span>
        </div>
        <div class="input">
            <!-- required：true/false 表示这个是必填项 -->
            <input type="text" v-input v-checked="{required:true,}"><span>{{msg3}}</span>
        </div>
        <div class="input">
            <!-- <input type="text" v-input v-validate="'required|email|phone|min(5)|max(15)|minlength(6)|maxlength(12)|regex(/^[0-9]*$/)'">
            required  验证是否是必填项
            email 验证是否是邮箱
            phone 验证是否是电话号码
            min(5) 验证最小值
            max(3) 验证最大值
            minlength(6) 验证最小长度
            maxlength(12) 验证最大长度
            regex(/^[0-9]*$/) 进行正则验证
            -->
            <input type="text" v-input
                   v-validate="'required|min(5)|max(15)|minlength(6)|maxlength(12)|regex(/^[0-9]*$/)'" placeholder="多选验证">
        </div>
        <div class="input">
            <!--
            验证必须是数字：/^[0-9]*$/
            验证由26个英文字母组成的字符串：/^[A-Za-z]+$/
            验证手机号： /^[1][3,4,5,7,8][0-9]{9}$/;
            验证邮箱：/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
            -->
            <input type="text"  v-validate="'required|phone'" placeholder="验证手机号码">
        </div>
        <div class="input">
            <input type="text" v-input v-validate="'required|email'" placeholder="验证邮箱">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'check',
        data() {
            return {
                msg: '指令',
                tipsBorderColor: 'red',
                msg1: '最简单的指令',
                msg2: '验证不能为空的指令',
                msg3: '进行正则验证',
                tipsMsg: '',
            }
        },

        directives: {
            // 修饰input框的指令
            input: {
                // 当被绑定的元素插入到DOM上的时候
                inserted: function (el) {
                    el.style.width = "300px";
                    el.style.height = "35px";
                    el.style.lineHeight = "35px";
                    el.style.background = "#ddd";
                    el.style.fontSize = "16px";
                    el.style.border = "1px solid #eee";
                    el.style.textIndent = "5px";
                    el.style.textIndent = "8px";
                    el.style.borderRadius = "5px";
                }
            },
            // input框默认选中的指令
            focus: {
                inserted: function (el) {
                    el.focus();
                }
            },
            // 不能为空的指令
            required: {
                inserted: function (el) {
                    el.addEventListener('blur', function () {
                        if (el.value == '' || el.value == null) {
                            el.style.border = "1px solid red";
                            console.log('我不能为空');
                        }

                    })
                }
            },
            // 验证指令
            checked: {
                inserted: function (el) {
                    return el
                }
            },
            // 验证
            validate: {
                inserted: function (el, validateStr) {
                    // 将验证规则拆分为验证数组
                    let validateRuleArr = validateStr.value.split("|");
                    // 监听失去焦点的时候
                    el.addEventListener('blur', function () {
                        //失去焦点进行验证
                        checkedfun();
                    });

                    // 循环进行验证
                    function checkedfun() {
                        for (var i = 0; i < validateRuleArr.length; ++i) {
                            let requiredRegex = /^required$/; // 判断设置了required
                            let emailRegex = /^email$/; // 判断设置了email
                            let phoneRegex = /^phone$/; // 判断设置了 phone
                            let minRegex = /min\(/; //判断设置了min 最小值
                            let maxRegex = /max\(/; //判断设置了max 最大值
                            let minlengthRegex = /minlength\(/; //判断设置了 minlength 最大长度
                            let maxlengthRegex = /maxlength\(/; //判断设置了 maxlength 最大长度
                            let regexRegex = /regex\(/;
                            // 判断设置了required
                            if (requiredRegex.test(validateRuleArr[i])) {
                                if (!required()) {
                                    break;
                                } else {
                                    removeTips();
                                }

                            }

                            // 判断设置了email
                            if (emailRegex.test(validateRuleArr[i])) {
                                if (!email()) {
                                    break;
                                } else {
                                    removeTips();
                                }

                            }

                            // 判断设置了 phone
                            if (phoneRegex.test(validateRuleArr[i])) {
                                if (!phone()) {
                                    break;
                                } else {
                                    removeTips();
                                }

                            }

                            // 判断是否设置了最小值
                            if (minRegex.test(validateRuleArr[i])) {
                                if (!eval(validateRuleArr[i])) {
                                    break;
                                } else {
                                    removeTips();
                                }

                            }

                            // 判断是否设置了最大值
                            if (maxRegex.test(validateRuleArr[i])) {
                                if (!eval(validateRuleArr[i])) {
                                    break;
                                } else {
                                    removeTips();
                                }

                            }

                            // 判断设置了最小长度
                            if (minlengthRegex.test(validateRuleArr[i])) {
                                if (!eval(validateRuleArr[i])) {
                                    break;
                                } else {
                                    removeTips();
                                }

                            }

                            // 判断设置了最大长度
                            if (maxlengthRegex.test(validateRuleArr[i])) {
                                if (!eval(validateRuleArr[i])) {
                                    break;
                                } else {
                                    removeTips();
                                }

                            }

                            // 判断测试正则表达式
                            if (regexRegex.test(validateRuleArr[i])) {
                                if (!eval(validateRuleArr[i])) {
                                    break;
                                } else {
                                    removeTips();
                                }

                            }

                        }

                    }

                    // 验证是否是必填项
                    function required() {
                        if (el.value == '' || el.value == null) {
                            // console.log("不能为空");
                            tipMsg("不能为空");
                            return false;
                        }

                        return true;
                    }

                    // 验证是否是邮箱
                    function email() {
                        let emailRule = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
                        if (!emailRule.test(el.value)) {
                            tipMsg("请输入正确的邮箱地址");
                            return false;
                        }

                        return true;
                    }

                    // 验证是否是手机号码
                    function phone() {
                        let phoneRule = /^[1][3,4,5,7,8][0-9]{9}$/;
                        if (!phoneRule.test(el.value)) {
                            tipMsg("请输入正确的手机号码");
                            return false;
                        }

                        return true;
                    }

                    // 最小值验证
                    function min(num) {
                        if (el.value < num) {
                            tipMsg("最小值不能小于" + num);
                            //console.log('最小值不能小于'+num);
                            return false;
                        }

                        return true;
                    }

                    // 最大值验证
                    function max(num) {
                        if (el.value > num) {
                            tipMsg("最大值不能大于" + num);
                            //console.log('最大值不能大于'+num);
                            return false;
                        }

                        return true;
                    }

                    // 最小长度验证
                    function minlength(length) {
                        if (el.value.length < length) {
                            //console.log('最小长度不能小于'+length);
                            tipMsg("最小长度不能小于" + length);
                            return false;
                        }

                        return true;
                    }

                    // 最大长度进行验证
                    function maxlength(length) {
                        if (el.value.length > length) {
                            //console.log('最大长度不能大于'+length);
                            tipMsg("最大长度不能大于" + length);
                            return false;
                        }
                        return true;
                    }

                    // 进行正则表达式的验证
                    function regex(rules) {
                        if (!rules.test(el.value)) {
                            tipMsg("请输入正确的格式");
                            return false;
                        }
                        return true;
                    }

                    // 添加提示信息
                    function tipMsg(msg) {
                        removeTips();
                        let tipsDiv = document.createElement('div');
                        let curDate = Date.parse(new Date());
                        tipsDiv.innerText = msg;
                        tipsDiv.className = "tipsDiv";
                        tipsDiv.id = curDate;
                        tipsDiv.style.position = "absolute";
                        tipsDiv.style.top = el.offsetTop + 45 + 'px';
                        tipsDiv.style.left = el.offsetLeft + 'px';
                        document.body.appendChild(tipsDiv);
                        //setTimeout(function(){
                        //  document.getElementById(curDate).remove();
                        //},2000);
                    }

                    // 移除提示信息
                    function removeTips() {
                        if (document.getElementsByClassName('tipsDiv')[0]) {
                           
                            document.getElementsByClassName('tipsDiv')[0].remove();
                        }

                    }
                },
            }
        }
    }
</script>

<style>

    .input {
        padding-bottom: 20px;
        float: left;
        clear: both;
        margin-left: 500px;
        display: block;

    }

    .check input {
        width: 300px;
        height: 35px;
        outline: none;
        background: #ddd;
    }

    .check span {
        padding-left: 20px;
    }

    .tipsDiv {
        height: 27px;
        line-height: 25px;
        border: 1px solid #333;
        background: #333;
        padding: 0px 5px;
        border-radius: 4px;
        color: #fff;
        font-size: 16px;
    }

    .tipsDiv:before {
        content: '';
        display: block;
        border-width: 0 5px 8px;
        border-style: solid;
        border-color: transparent transparent #000;
        position: absolute;
        top: -9px;
        left: 6px;
    }
</style>