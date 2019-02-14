//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    current: 'homepage'
  },
  bottomPageChange({ detail }) {
    this.setData({
      current: detail.key
    });
    console.log(detail);
  },
  //事件处理函数
  onLoad: function () {
   
  }
})
