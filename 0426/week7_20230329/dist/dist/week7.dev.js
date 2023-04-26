"use strict";

var vm = new Vue({
  el: "#app",
  data: {
    keyword: "",
    cards: [{
      title: "410730500呂昇展",
      cover: "https://pic.pimg.tw/iting35/1500815907-2788180835.jpg?v=1500815980",
      address: "號 2 樓, No. 16赤峰街47巷大同區台北市103",
      tel: "02 2550 7288",
      opentime: "今日正常營業，14:00-2130",
      title_url: "https://www.facebook.com/IlluminationBooks/",
      bgimage: "IMG_3741.JPG"
    }, {
      title: "410730500呂昇展",
      cover: "https://pic.pimg.tw/iting35/1500815907-2788180835.jpg?v=1500815980",
      address: "號 2 樓, No. 16赤峰街47巷大同區台北市103",
      tel: "02 2550 7288",
      opentime: "今日正常營業，14:00-2130",
      title_url: "https://www.facebook.com/IlluminationBooks/",
      bgimage: ""
    }, {
      title: "410730500呂昇展",
      cover: "https://pic.pimg.tw/iting35/1500815907-2788180835.jpg?v=1500815980",
      address: "號 2 樓, No. 16赤峰街47巷大同區台北市103",
      tel: "02 2550 7288",
      opentime: "今日正常營業，14:00-2130",
      title_url: "https://www.facebook.com/IlluminationBooks/",
      bgimage: "week7_20230329/image/IMG_3487.JPG"
    }, {
      title: "410730500呂昇展",
      cover: "https://pic.pimg.tw/iting35/1500815907-2788180835.jpg?v=1500815980",
      address: "號 2 樓, No. 16赤峰街47巷大同區台北市103",
      tel: "02 2550 7288",
      opentime: "今日正常營業，14:00-2130",
      title_url: "https://www.facebook.com/IlluminationBooks/",
      bgimage: ""
    }, {
      title: "410730500呂昇展",
      cover: "https://pic.pimg.tw/iting35/1500815907-2788180835.jpg?v=1500815980",
      address: "號 2 樓, No. 16赤峰街47巷大同區台北市103",
      tel: "02 2550 7288",
      opentime: "今日正常營業，14:00-2130",
      title_url: "https://www.facebook.com/IlluminationBooks/",
      bgimage: ""
    }, {
      title: "410730500呂昇展",
      cover: "https://pic.pimg.tw/iting35/1500815907-2788180835.jpg?v=1500815980",
      address: "號 2 樓, No. 16赤峰街47巷大同區台北市103",
      tel: "02 2550 7288",
      opentime: "今日正常營業，14:00-2130",
      title_url: "https://www.facebook.com/IlluminationBooks/",
      bgimage: ""
    }]
  },
  mounted: function mounted() {
    var swiper = new Swiper('.carousel', {
      loop: true,
      effect: 'cube',
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        type: "fraction"
      }
    });
  }
});