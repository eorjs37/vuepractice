# vuepractice

# 환경상태

### Node : 16.18.1
### npm : 8.19.2

# 실행 명령어
```bash
npm run serve
```

# vue 문법 및 directive

## data
```
템플릿에서 사용되는 data들이다.
```

```html
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ text }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      /* 사용하고자 하는 data 선언 */
      text: "안녕하세요"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

```

## v-model
```
양방향 바인딩을 제공해주는 directive
```


```html
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ text }}</h2>
    <!-- v-model을 이용한 양뱡향 바인딩 -->
    <input type="text" v-model="text">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      /* 사용하고자 하는 data 선언 */
      text: "안녕하세요"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

```

## v-bind
```
단방향 바인딩으로써 데이터를 수정해도 실제 데이터는 바뀌지 않는다.  
:value를 이용하여 단방향 데이터 선언가능
```

```html
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ text }}</h2>
    <input type="text" v-model="text">
    <!-- 1.단방향 데이터 선언 -->
    <input type="text" :value="oneway">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      text: "안녕하세요",
      oneway: 'Hello <br/> World'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

```

## methods

## computed

## watch

## vuex

## Props



# 추가적으로 알아야 할것.

## git flow(https://techblog.woowahan.com/2553/)

## eslint
```
문법 체크 해주는 도구
```

## prettier
```
라인 정렬을 알아서 맞춰주는것.
```