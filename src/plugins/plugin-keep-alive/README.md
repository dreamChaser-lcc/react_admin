# @umijs/plugin-keep-alive

## Usage

1. Install

    ```bash
    npm install @umijs/plugin-keep-alive --save
    # or
    yarn add @umijs/plugin-keep-alive
    ```

2. export `KeepAlive` from umi and wrap any component you want to be keeped  

    ```javascript
    import { useState } from 'react'
    import { KeepAlive } from 'umi'

    function Counter() {
      const [count, setCount] = useState(0)

      return (
        <div>
          <p>count: {count}</p>
          <button onClick={() => setCount(count => count + 1)}>add</button>
        </div>
      )
    }

    export default function() {
      const [show, setShow] = useState(true)

      return (
        <div>
          <h1>Page index</h1>
          {show && (
            <KeepAlive>
              <Counter />
            </KeepAlive>
          )}
          <button onClick={() => setShow(show => !show)}>toggle</button>
        </div>
      )
    }
    ```

## Options

TODO

## Documentation

All function of react-activation can be completely imported from umi

```javascript
import {
  KeepAlive,
  useActivate, 
  useUnactivate, 
  withActivation,
  withAliveScope, 
  useAliveController
} from 'umi'
```
