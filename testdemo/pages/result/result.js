const app = getApp()

Page({
  data: {
    percent: 0,
    isAllCorrect: false,
    isAllWrong: false,
    type: null
  },
  onLoad(options) {
    const { type } = options
    this.setData({ type })
    const { correctIds, displayData } = app[type]
    if (correctIds.length === displayData.length) this.setData({ isAllCorrect: true })
    if (correctIds.length === 0) this.setData({ isAllWrong: true })
    const percent = Math.round(correctIds.length / displayData.length * 100)
    this.setData({ percent })
  },
  redo() {
    wx.navigateBack()
  },
  back() {
    wx.reLaunch({ url: '../qa/qa' })
  }
})
