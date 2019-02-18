//index.js
//获取应用实例
const app = getApp()
const { $Toast } = require('../../source/plunge/iview/base/index');
Page({
  data: {
    bottomcurrent:'',
    inputShowed: false,
    inputVal: "",
    power:'',
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
    ],
    notice_text:"测试内容",
    noticeArray:['111','asqee','fdfdg中文'],
    tabscurrent: 'tab1',
    tabscurrent_scroll: 'tab1'
  },
  // 小功能列表
  test:function(res){
    console.log(res.currentTarget.dataset.key);
  },
  tabsChangeScroll({ detail }) {
    this.setData({
      tabscurrent_scroll:detail.key
    })
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
    var that=this;
    var count=0;
    this.setData({
      bottomcurrent: app.globalData.current,
      power:app.globalData.power
    })
    $Toast({
      content: '加载中',
      type: 'loading'
    });
  },
  /**
  * 生命周期函数--监听页面初次渲染完成
  */
  onReady: function () {
    $Toast.hide();
  },
  setNotice:function(index){
    var that=this;

    setTimeout((index)=>{
      that.setData({

      })
    },2000)
  },
  // 底部tabbars
  bottomPageChange({ detail }) {
    this.setData({
      bottomcurrent: detail.key
    });
    switch (detail.key) {
      case 'homepage':
        wx.redirectTo({
          url: '../index/index'
        })
        break;
      case 'message':
        wx.redirectTo({
          url: '../message/message'
        })
        break;
      case 'communicate':
        wx.redirectTo({
          url: '../communicate/communicate'
        })
        break;
      case 'mine':
        wx.redirectTo({
          url: '../mine/mine'
        })
        break;
      default:
        break;
    }
    app.globalData.current = detail.key;
    console.log(app.globalData.current);
  }
})
