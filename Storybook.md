# Storybook

## 세팅

```bash
vue add storybook@next
```

```
What do you want to generate?
❯ Initial framework

What storybook version do you want? (Please specify semver range) (^6.4.3)

```

## addon-actions

```
어떤 함수를 호출했는지와, 인자를 알려주는 정보이다.
```

```javascript
import ButtonComp from "./ButtonComp.vue";
import { action } from "@storybook/addon-actions";

export default {
  component: ButtonComp,
  title: "ButtonComp",
  tags: ["autodocs"],
  args: {
    onBtnClick: action("btn-click"),
  },
};

export const Default = {
  args: {
    btnname: "버튼1",
  },
};
```
