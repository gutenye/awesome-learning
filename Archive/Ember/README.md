使用方法
--------

Ember + 服务器

```
$ npm install -g nodemon
$ nodemon server.js
$ 浏览器打开 localhost:4000
```

Ember + 浏览器测试数据

```
浏览器打开 fixtures.html
```

教程
------

参考 http://emberjs.com/guides/models/

1. 浏览器打开 fixtures.html
2. `$` 表示 在控制台里面运行命令


```
// 得到数据
$ user.get('name')

// 修改数据
$ user.set('name', 1)

// 新建数据
$ store.createRecord('user', {name: 'bar'})

// 删除
$ user.deleteRecord()
$ user.save()
```


### 定义model

```
App.User = Ember.Model.extend({
  name: DS.attr('string')
  age: DS.attr('number')
})
```

### 数据关系


**一对一**

一个user有一个account, 一个account属于一个user

``` javascript
App.User = Ember.Model.extend({
  account: DS.belongsTo('account')
})

App.Account = Ember.Model.extend({
  user: DS.belongsTo('user')
})
```

**一对多**

一个user有很多posts, 一个post属于一个user

``` javascript
App.User = Ember.Model.extend({
  posts: DS.hasMany('post')
})

App.Post = Ember.Model.extend({
  user: DS.belongsTo('user')
})
```

浏览器打开 `fixtures.html#/users/1`

```
$ user.set('account', account2')
$ user.get('posts').removeObject(post)
$ user.get('posts').addObject(post)
```


### 连接服务器

浏览器打开 `localhost:4000`

```
// GET /users
$ store.find('user').then(function(users) { console.log(users.get('length')) })

// GET /users/1
$ store.find('user', 1).then(function(user) { console.log(user.get('name')) }
```
