Page({
  data: {
    text: 'init data',
    num: 0,
    array: [{ text: 'init data' }],
    object: {
      text: 'init data'
    }
  },
  onLoad: function (){
    this.audioC=wx.createAudioContext('myAudio')
    this.audioC.setSrc('http://ws.stream.qqmusic.qq.com/104133518.m4a?fromtag=46')
    this.audioC.play()
  },
  changeText: function () {
    // this.data.text = 'changed data'  // bad, it can not work
    this.setData({
      text: 'changed data'
    })
  },
  changeNum: function () {
    this.data.num = 1
    this.setData({
      num: this.data.num
    })
  },
  changeItemInArray: function () {
    // you can use this way to modify a danamic data path
    this.setData({
      'array[0].text': 'changed data'
    })
  },
  changeItemInObject: function () {
    this.setData({
      'object.text': 'changed data'
    });
  },
 
  addNewField: function () {
    this.setData({
      'newField.text': 'new data'
    })
  }
})