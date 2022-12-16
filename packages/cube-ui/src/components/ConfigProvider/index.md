---
order: 1
group:
  path: /config
  title: 全局配置
  order: 100
---

## 国际化

中文:

```tsx
import React from 'react';
import { ConfigProvider } from 'cube-ui';

export default () => <ConfigProvider lang="zh" />;
```

英文:

```tsx
import React from 'react';
import { ConfigProvider } from 'cube-ui';

export default () => <ConfigProvider lang="en" />;
```
