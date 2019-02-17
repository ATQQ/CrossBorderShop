//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    current: 'homepage',
    inputShowed: false,
    inputVal: "",
    power:1,
    swiperItems:[
      {
        src:'../../source/image/swiper/test1.png'
      },
      {
        src: '../../source/image/swiper/test2.png'
      },
      {
        src: '../../source/image/swiper/test3.png'
      }
    ]
  },
  // 小功能列表
  test:function(res){
    console.log(res.currentTarget.dataset.key);
  }
  ,
  bottomPageChange({ detail }) {
    this.setData({
      current: detail.key
    });
    console.log(detail);
  },
  clickScan:function(res){
    console.log("click scan");
    wx.scanCode({
      success:(res)=>{
        console.log(res);
      }
    })
  },
  // searchBar
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  sureInput: function () {
    var val=this.data.inputVal;
    console.log('确定'+val);
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  //事件处理函数
  onLoad: function () {
   
  }
})
