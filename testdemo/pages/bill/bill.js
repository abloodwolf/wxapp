//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    path: '',
    showPage:false
  },
  tapName: function (event) {
    console.log(event);
    this.setData({
      showPage: true
    })
  },
  loadMap:function(){
    wx.switchTab({
      url: '../find/find'
    })
  }
  
})
