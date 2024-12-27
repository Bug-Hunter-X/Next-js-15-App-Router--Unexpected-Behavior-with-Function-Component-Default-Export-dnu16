```javascript
// pages/index.solution.js
import { Suspense } from 'react';

export default function Home() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <div>
        <h1>Hello, world!</h1>
      </div>
    </Suspense>
  );
}
```