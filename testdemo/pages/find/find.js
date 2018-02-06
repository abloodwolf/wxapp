var app = getApp()
var util = require('../../utils/util')

Page({
  onShareAppMessage: function () {
    return {
      title: '分享快乐',
      desc: '热爱生活',
    }
  },
  data: {
    lis: ["推荐", "原创", "优创+", "视频", "快报", "游记", "图片", "行情", "新闻", "说客", "测评", "导购", "用车", "技术", "文化", "改装"],
    imgUrls: [
      {
        news: {
          image: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2422967864,1039374380&fm=200&gp=0.jpg",
          id: "001",
          country:"意大利圣亚加塔·波隆尼（Sant'Agata Bolognese）",
          title: "兰博基尼"
        }
      },
      {
        news: {
          image: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1422786824,3787378274&fm=27&gp=0.jpg",
          id: "002",
          country: "意大利马拉内罗（Maranello）",
          title: "法拉利"
        }
      },
      {
        news: {
          image: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2250083710,1998791635&fm=27&gp=0.jpg",
          id: "003",
          country: "瑞典",
          title: "科尼塞克"
        }
      },
      {
        news: {
          image: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3264386907,970533287&fm=27&gp=0.jpg",
          id: "004",
          country: "意大利小镇摩德纳（Modena）",
          title: "帕加尼"
        }
      },
      {
        news: {
          image: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2907532541,1180607236&fm=27&gp=0.jpg",
          id: "005",
          country: "美国的华盛顿",
          title: "西尔贝"
        }
      }
    ],
    cars: [],
    time: '',
    sale: false,
    indicatorDots: false,
    autoplay: true,
    interval: 2500,
    duration: 1000,
    circular: true,
    num:4,
  },
  loadmore: function () {
    var _this = this;
    this.setData({
      num: this.data.num + 4
    });
    console.log(55555 + this.data.num)
    this.onLoad();
    _this.setData({
      hidden: !this.data.hidden
    });
  },
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    var _this = this;
    _this.setData({
      hidden:!this.data.hidden
    });
    wx.request({
      url: 'https://db.auto.sohu.com/api/autohomepc/recommend/model/list?cityCode=110000&limit=' + this.data.num+'&lastModelId=-1&guidePrice=30-1000', //仅为示例，并非真实的接口地址
      data: {  },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        _this.setData({
          cars:res.data.result
          
        })
        const length = _this.data.cars.length
        for (let i = 0; i < length; ++i) {
          const temp = _this.data.cars[i].downPay
          _this.data.cars[i].downPay = (temp/10000).toFixed(2);
        }
        _this.setData({
          cars: _this.data.cars
        })
      }
    })
    
  },
  

})
