# H5lock

## 微信小程序的手势密码

-----

[项目介绍](http://www.see-source.com/weixinwidget/detail.html?wid=87)




## Demo

<img width="375" height="667" src="https://raw.githubusercontent.com/guntertien/H5lock/master/image/p1.jpeg" />
<img width="375" height="667" src="https://raw.githubusercontent.com/guntertien/H5lock/master/image/p2.jpeg" />
<img width="375" height="667" src="https://raw.githubusercontent.com/guntertien/H5lock/master/image/p3.jpeg" />

## How to use?

```
<script type="text/javascript" src="src/H5lock.publish.js"></script>
var opt = {
  chooseType: 3, // 3 , 4 , 5,
  width: 300, // lock wrap width
  height: 300, // lock wrap height
  container: 'element', // the id attribute of element
  inputEnd: function(psw){} // when draw end param is password string
}
var lock = new H5lock(opt);
lock.init();
```

## Option method

```
lock.drawStatusPoint('notright') // draw the last notright circle

lock.drawStatusPoint('right') // draw the last right circle

lock.reset() // reset the lock
```
## Support Vue

```
> Address[vue-lock](https://github.com/guntertien/vue-lock)

```

