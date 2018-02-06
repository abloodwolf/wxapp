//index.js
//获取应用实例
var multipleData = require('../../data/multiple');
var app = getApp();
var a = 0;
function shuffle(amount = 100) {
  const copy = Array.prototype.slice.call(multipleData)
  const result = []
  while (amount--) {
    const rnd = Math.ceil(Math.random() * copy.length)
    const item = copy.splice(rnd, 1)[0]
    result.push(item)
  }
  return result
}
var multiples = {
  displayData: shuffle(2),
  correctIds: []
}
Page({
  data: {
    // topic: shuffle(1),
    color: "#88C5F1",
    hint: true,
    i:0,
    temp: []
  },
  next: function () {
     a += 1;
    this.setData({ i: a })
    if (a == 12) {
      a = 0;
      this.setData({ i: a })
      // temp = "{ 结束 }";
    } else {
      let cData = [];
      cData.push(multiples.displayData[a]);
      this.setData({ temp: cData })
    }
    // console.log(i);
    // this.setData({ topic: temp, color: this.getNextColor() });
  },
  radioChange: function (e) {
    let key = `temp[${e.target.dataset.index}].selected`
    this.setData({ [key]: e.detail.value });
    multiples.displayData[this.data.i].selected = e.detail.value;
    
  },
 
  onShow() {
    let correctIds = multiples.correctIds;
    let wrongs = this.data.temp.filter(function (row, index) {
      if (correctIds.indexOf(index) === -1) {
        row.selected = null
        return true
      }
    })
    this.setData({ temp: wrongs })
  },
  onLoad() {
    wx.showLoading({ title: '解析数据中中', mask: true })
    let cData = [];
    cData.push(multiples.displayData[0]);
    this.setData({temp: cData},function(){
      wx.hideLoading()
    })
    // setInterval(this.next(), 10000);
    console.log(this.data.temp)
  },
  submit: function () {
    const data = multiples.displayData
    const correctIds = []
    data.forEach(function (row, index) {
      if (row.selected === null) return
      if (row.ans === +row.selected) correctIds.push(index)
    })
    app.multiples = {
      displayData: data,
      correctIds
    }
    wx.navigateTo({
      url: `../result/result?type=multiples`
    })
  },
})




