Page({
  data: {
    Height: 1334,
    scale: 18,
    latitude: "39.9905700000",
    longitude: "116.4947300000",
    markers: [{
      iconPath: "/images/mapmarkred.png",
      id: 0,
      latitude: 39.9905700000,
      longitude: 116.4947300000,
      title:"国际恒通创新园C9",
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 116.4923715591,
        latitude: 39.9887936575 
      }, {
          longitude: 116.4810419083,
          latitude: 39.9959612207 
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    circles:[{
      latitude:' 39.9905700000',
      longitude: '116.4947300000',
      color: '#FF0000DD',
      fillColor: '#7cb5ec88',
      radius:300,
      // strokeWidth: 1
    }],
    controls: [{
      id: 1,
      iconPath: '/images/minus1.png',
      position: {
        left: 320,
        top: 100 - 50,
        width: 20,
        height: 20
      },
      clickable: true
    },
    {
      id: 2,
      iconPath: '/images/add1.png',
      position: {
        left: 340,
        top: 100 - 50,
        width: 20,
        height: 20
      },
      clickable: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
    var that = this;
    console.log("scale===" + this.data.scale)
    if (e.controlId === 1) {
      // if (this.data.scale === 13) {
      that.setData({
        scale: --this.data.scale
      })
      // }
    } else {
      //  if (this.data.scale !== 13) {
      that.setData({
        scale: ++this.data.scale
      })
      // }
    }
  },
  onLoad: function () {
    var _this = this;

    wx.getSystemInfo({
      success: function (res) {
        console.log(res)
        //设置map高度，根据当前设备宽高满屏显示
        // _this.setData({
        //   Height: res.screenHeight

        // })



      }
    })
  }
})