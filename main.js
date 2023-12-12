
// $(window).on("load", function () {
//     alert("生日快樂");
// })

const Year = document.querySelector(".year");
const Answer = document.querySelector(".answer");
const Confirm = document.querySelector(".confirm");
const Title = document.querySelector(".title");
const Content = document.querySelector(".content");
const Icon = document.querySelector(".icon");

$(".box").hide();

let Arr = [
    "方便對軸",
    "看到錢包就要撿起來看吧",
    "這是我們第一次見面的<span class='red'>車票</span>... ...",
    "還記得第一次見面時你說了什麼嗎?<div>我想我們 _ _ _ 了(三個字)</div>",
    "第一次見面就是... ...",
    "去看看<span class='red'>裙子</span>",
    "去看看<span class='red'>娃娃</span>",
    "打開筆電，會給你一些提示...",
    "還記得把那隻卡比... ...",
    "熊熊對我來說... ...你有騎摩托車載我們出去玩，去找看看吧。",
    "這年開始我們更常出去玩... ...你還記得我們都去哪裡，還有順序嗎？(提示：在櫃子那邊)",
    "6/1我們在台中玩... ...<br>這些<span class='red'>照片</span>、紀念品真的... ...",
    "這張票代表很重要的東西，注意看上面寫了些什麼。",
    "我不知道你還記不記得... ...",
    "你還記得這是什麼嗎(看照片)",
    "今年真的很辛苦... ...鑰匙是補足缺失的部分(<span class='red'>看圖片</span>)... ...",
    "去看窗外... ...",
    "最快樂的日子就是... ...",
    "是交往紀念日... ...你可以看看冰箱。啊！支線任務想要解完要先解喔。"
]


Confirm.addEventListener("click", function (item) {

    if (Answer.value == "手機") {
        Title.innerHTML = ("錢包")
        Content.innerHTML = ("看到錢包就要撿起來看吧");
        $("#i1").show();
    }

    else if (Answer.value == "20190308") {
        $(".filter").addClass("filter_out")
        Title.innerHTML = ("20190308")
        Content.innerHTML = (Arr[2]);
        Year.style.opacity = "100%"
        $("#i2").show();
    }

    else if (Answer.value == "車票") {
        Title.innerHTML = ("支線任務出現:尋找<span class='red'>標籤機</span>")
        Content.innerHTML = ("對喔是真的要去找標籤機");
    }

    else if (Answer.value == "標籤機") {
        Title.innerHTML = ("支線任務:第一次的回憶")
        Content.innerHTML = (Arr[3]);
        $("#i3").show();
    }

    else if (Answer.value == "三個字") {
        Title.innerHTML = ("支線任務達成:第一次的回憶")
        Content.innerHTML = (Arr[4]);
        $("#i4").show();
    }

    else if (Answer.value == "20190809") {
        Year.innerHTML = (2020)
        Title.innerHTML = ("20190809")
        Content.innerHTML = (Arr[5]);
        $("#i5").show();
    }

    else if (Answer.value == "SKIRT") {
        Title.innerHTML = ("SKIRT")
        Content.innerHTML = (Arr[6]);
        $("#i6").show();
    }

    else if (Answer.value == "娃娃") {
        Year.innerHTML = (2021)
        Title.innerHTML = ("娃娃們")
        Content.innerHTML = ("說到回憶，我們這四年多來也有很多隻能夠當作紀念的娃娃，裡面有一隻算是我最喜歡的，你猜猜看是哪一隻。");
    }

    else if (Answer.value == "201903") {
        Title.innerHTML = ("201903")
        Content.innerHTML = ("他叫做熊頭，是你送我的生日禮物，他超棒的，但是有點破破的了，肯定是你對他不夠愛護!不過他是你最好的枕頭。");
    }
    else if (Answer.value == "202001") {
        Title.innerHTML = ("202001")
        Content.innerHTML = ("他叫做大胖胖拉拉，是坐飛機來的，胖胖的很可愛，但是抱久了會起毛球，都不太敢碰他。");
    }
    else if (Answer.value == "202103") {
        Title.innerHTML = ("202103")
        Content.innerHTML = ("他叫做熊熊......");
    }
    else if (Answer.value == "202109") {
        Title.innerHTML = ("202109")
        Content.innerHTML = ("他叫做普普羅，在我家有一個雙胞胎，抱起來都一樣舒服，還記得是在夾娃娃店拿到的，但好像真的是正版欸。");
    }
    else if (Answer.value == "202212") {
        Title.innerHTML = ("202212")
        Content.innerHTML = ("他是高貴拉拉，我想不說你也知道為甚麼，他的腳好短好可愛，很值得拍打。");
    }
    else if (Answer.value == "202308") {
        Title.innerHTML = ("202308")
        Content.innerHTML = ("他叫做大大拉拉，只要五百塊?反正就是超便宜，不過跟小狗一樣會掉毛，到底是麼意思?");
    }

    else if (Answer.value == "卡比") {
        Title.innerHTML = ("支線任務出現：心碎的回憶")
        Content.innerHTML = (Arr[7]);
        $("#i7").show();
    }

    else if (Answer.value == "第二") {
        Title.innerHTML = ("支線任務達成:心碎的回憶")
        Content.innerHTML = (Arr[8]);
        $("#i8").show();
    }

    else if (Answer.value == "熊熊") {
        Title.innerHTML = ("熊熊")
        Content.innerHTML = (Arr[9]);
        $("#i9").show();
    }

    else if (Answer.value == "鑰匙") {
        Year.innerHTML = (2022)
        Title.innerHTML = ("鑰匙")
        Content.innerHTML = (Arr[10]);
        $("#i10").show();
    }

    else if (Answer.value == "SEPIL") {
        Title.innerHTML = ("SEP17")
        Content.innerHTML = (Arr[11]);
        $("#i11").show();
    }

    else if (Answer.value == "媽的多重宇宙") {
        Title.innerHTML = ("支線任務:那些重修舊好的回憶")
        Content.innerHTML = (Arr[12]);
        $("#i12").show();
    }

    else if (Answer.value == "貝果") {
        Title.innerHTML = ("支線任務達成:那些重修舊好的回憶")
        Content.innerHTML = (Arr[13]);
        $("#i13").show();
    }

    else if (Answer.value == "照片") {
        Year.innerHTML = (2023)
        Title.innerHTML = ("照片")
        Content.innerHTML = (Arr[14]);
        $("#i14").show();
    }

    else if (Answer.value == "蝦子") {
        Title.innerHTML = ("蝦子")
        Content.innerHTML = (Arr[15]);
        $("#i15").show();
    }

    else if (Answer.value == "圖片") {
        Title.innerHTML = ("支線任務:最快樂的回憶")
        Content.innerHTML = (Arr[16]);
        $("#i16").show();
    }

    else if (Answer.value == "第四") {
        Title.innerHTML = ("支線任務達成:那些重修舊好的回憶")
        Content.innerHTML = (Arr[17]);
        const Cq = Content.innerHTML
        $("#i17").show();
    }

    else if (Answer.value == "0311") {
        Title.innerHTML = ("0311")
        Content.innerHTML = (Arr[18]);
        const Cr = Content.innerHTML
        $("#i18").show();
    }

    else {
        Title.innerHTML = ("錯誤")
        Content.innerHTML = ("... ...");
    }


    Answer.value = ""
})


// console.log($('#ia>img').attr('alt'))
$(".icon div").on("click", function () {

    let IdNum = $(this).attr('id')
    let num = IdNum.substring(1)
    console.log(num)
    if (num == "1") {
        // Title.innerHTML = (`$("id ${num}"")`)
        let iconName = ($(`#i${num}>img`).attr('alt'));
        Title.innerHTML = (iconName);
        Content.innerHTML = ("<img src='./image/錢包位置.png' alt='錢包位置'>");
    }

    else if (num == "14") {
        let iconName = ($(`#i${num}>img`).attr('alt'));
        Title.innerHTML = ("神秘物體照片");
        Content.innerHTML = ("<div id='long_pic'></div> ");
        // <img src='./image/神秘物體.jpg' alt='神秘物體'>
    }

    else if (num == "15") {
        let iconName = ($(`#i${num}>img`).attr('alt'));
        Title.innerHTML = ("蝦子");
        Content.innerHTML = ("<img src='./image/鑰匙-07.png' alt='鑰匙'>");
    }

    else if (num == "16") {
        let iconName = ($(`#i${num}>img`).attr('alt'));
        Title.innerHTML = ("CHIIKAWA");
        Content.innerHTML = ("<div class='picc'><div class='bar'><img src='./image/1_縮小.png'><img src='./image/2_放大.png'><img src='./image/3_關閉.png'></div><img src='./image/拍貼.png' alt='拍貼機' id='chiicawa'>");
    }

    else {
        // Title.innerHTML = (`$("id ${num}"")`)
        let iconName = ($(`#i${num}>img`).attr('alt'));
        Title.innerHTML = (iconName);
        // let Con = 'C'+num
        Content.innerHTML = (Arr[`${num}`]);
        // console.log(Cb)
    }


})