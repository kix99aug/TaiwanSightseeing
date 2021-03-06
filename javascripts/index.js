let taiwan_svg = document.querySelector('svg#taiwan')
taiwan_svg.setAttribute('width', window.innerWidth * 0.75)
taiwan_svg.setAttribute('height', window.innerHeight * 0.75)

document.body.onresize = () => {
    taiwan_svg.setAttribute('width', window.innerWidth * 0.75)
    taiwan_svg.setAttribute('height', window.innerHeight * 0.75)
}

document.querySelector('#mobile-menu').onclick = () => {
    document.querySelector('#menu').toggleAttribute('hidden')
}

document.querySelectorAll('path').forEach(ele => {
    console.log(ele.id)
    ele.onclick = async () => {
        await fetch(`./images/viewpoints/${ele.id}/01.txt`)
            .then(response => response.text())
            .then(text => {
                document.querySelectorAll('.modal .text')[0].innerText = text
                document.querySelectorAll('.modal img')[0].src = `./images/viewpoints/${ele.id}/01.jpg`
            })
        await fetch(`./images/viewpoints/${ele.id}/02.txt`)
            .then(response => response.text())
            .then(text => {
                document.querySelectorAll('.modal .text')[1].innerText = text
                document.querySelectorAll('.modal img')[1].src = `./images/viewpoints/${ele.id}/02.jpg`
            })
        document.querySelector('.modal #close').onclick = () => {
            document.querySelector('.modal-back').hidden = true
        }
        document.querySelector('.modal-back').hidden = false
        document.querySelector('.modal').scrollTo(0, 0)
    }
})
//hanson's code
var path = document.querySelector('#taichung_city')
path.addEventListener('mouseover', show_taichung_city)

function show_taichung_city() {
    console.log('有選到歐!')
    var path = document.querySelector('#city_txt')
    path.innerText = '台中市'
}

var path_2 = document.querySelector('#keelung_city')
path_2.addEventListener('mouseover', show_keelung_city)

function show_keelung_city() {
    console.log('有選到歐!')
    var path = document.querySelector('#city_txt')
    path.innerText = '基隆市'
}

var path_3 = document.querySelector('#pingtung_country')
path_3.addEventListener('mouseover', show_pingtung_country)

function show_pingtung_country() {
    console.log('有選到歐!')
    var path = document.querySelector('#city_txt')
    path.innerText = '屏東市'
}

var path_4 = document.querySelector('#taipei_city')
path_4.addEventListener('mouseover', show_taipei_city)

function show_taipei_city() {
    console.log('有選到歐!')
    var path = document.querySelector('#city_txt')
    path.innerText = '台北市'
}

var path_5 = document.querySelector('#new_taipei_city')
path_5.addEventListener('mouseover', show_new_taipei_city)

function show_new_taipei_city() {
    console.log('有選到歐!')
    var path = document.querySelector('#city_txt')
    path.innerText = '新北市'
}

var path_6 = document.querySelector('#yilan_country')
path_6.addEventListener('mouseover', show_yilan_country)

function show_yilan_country() {
    console.log('有選到歐!')
    var path = document.querySelector('#city_txt')
    path.innerText = '宜蘭市'
}

var path_7 = document.querySelector('#taoyuan_country')
path_7.addEventListener('mouseover', show_taoyuan_country)

function show_taoyuan_country() {
    console.log('有選到歐!')
    var path = document.querySelector('#city_txt')
    path.innerText = '桃園市'
}

var path_8 = document.querySelector('#hsinchu_country')
path_8.addEventListener('mouseover', show_hsinchu_country)

function show_hsinchu_country() {
    console.log('有選到歐!')
    var path = document.querySelector('#city_txt')
    path.innerText = '新竹縣市'
}

var path_9 = document.querySelector('#miaoli_country')
path_9.addEventListener('mouseover', show_miaoli_country)

function show_miaoli_country() {
    console.log('有選到歐!')
    var path = document.querySelector('#city_txt')
    path.innerText = '苗栗市'
}

var path_10 = document.querySelector('#changhua_country')
path_10.addEventListener('mouseover', show_changhua_country)

function show_changhua_country() {
    console.log('有選到歐!')
    var path = document.querySelector('#city_txt')
    path.innerText = '彰化市'
}

var path_11 = document.querySelector('#yunlin_country')
path_11.addEventListener('mouseover', show_yunlin_country)

function show_yunlin_country() {
    console.log('有選到歐!')
    var path = document.querySelector('#city_txt')
    path.innerText = '雲林市'
}

var path_12 = document.querySelector('#chiayi_country')
path_12.addEventListener('mouseover', show_chiayi_country)

function show_chiayi_country() {
    console.log('有選到歐!')
    var path = document.querySelector('#city_txt')
    path.innerText = '嘉義縣市'
}

var path_13 = document.querySelector('#hualien_country')
path_13.addEventListener('mouseover', show_hualien_country)

function show_hualien_country() {
    console.log('有選到歐!')
    var path = document.querySelector('#city_txt')
    path.innerText = '花蓮市'
}

var path_14 = document.querySelector('#nantou_country')
path_14.addEventListener('mouseover', show_nantou_country)

function show_nantou_country() {
    console.log('有選到歐!')
    var path = document.querySelector('#city_txt')
    path.innerText = '南投市'
}

var path_15 = document.querySelector('#taitung_country')
path_15.addEventListener('mouseover', show_taitung_country)

function show_taitung_country() {
    console.log('有選到歐!')
    var path = document.querySelector('#city_txt')
    path.innerText = '台東市'
}

var path_16 = document.querySelector('#tainan_city')
path_16.addEventListener('mouseover', show_tainan_city)

function show_tainan_city() {
    console.log('有選到歐!')
    var path = document.querySelector('#city_txt')
    path.innerText = '台南市'
}

var path_17 = document.querySelector('#kaohsiung_city')
path_17.addEventListener('mouseover', show_kaohsiung_city)

function show_kaohsiung_city() {
    console.log('有選到歐!')
    var path = document.querySelector('#city_txt')
    path.innerText = '高雄市'
}

var path_18 = document.querySelector('#kinmen_country')
path_18.addEventListener('mouseover', show_kinmen_country)

function show_kinmen_country() {
    console.log('有選到歐!')
    var path = document.querySelector('#city_txt')
    path.innerText = '金門縣'
}

var path_19 = document.querySelector('#lienchiang_country')
path_19.addEventListener('mouseover', show_lienchiang_country)

function show_lienchiang_country() {
    console.log('有選到歐!')
    var path = document.querySelector('#city_txt')
    path.innerText = '連江縣'
}

var path_20 = document.querySelector('#penghu_country')
path_20.addEventListener('mouseover', show_penghu_country)

function show_penghu_country() {
    console.log('有選到歐!')
    var path = document.querySelector('#city_txt')
    path.innerText = '澎湖縣'
}