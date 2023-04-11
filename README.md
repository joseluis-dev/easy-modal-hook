# Easy-Modal-Hook
<!-- [![SWR](https://assets.vercel.com/image/upload/v1572289618/swr/banner.png)](https://swr.vercel.app) -->

<p align="center">
  <a aria-label="joseluis-dev logo" href="https://joseluis-dev.vercel.app/">
    <img src="https://res.cloudinary.com/jl-img-store/image/upload/v1661997155/Portafolio/jose_icon_adaptive_fore_enjr9l.png">
  </a>
  <br/>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/easy-modal-hook">
    <img alt="" src="https://badgen.net/npm/v/easy-modal-hook">
  </a>
  <a aria-label="Package size" href="https://bundlephobia.com/result?p=easy-modal-hook">
    <img alt="" src="https://badgen.net/bundlephobia/minzip/easy-modal-hook">
  </a>
  <!-- <a aria-label="License" href="https://github.com/vercel/swr/blob/main/LICENSE">
    <img alt="" src="https://badgen.net/npm/license/swr">
  </a> -->
</p>

## Introduction

**Easy-Modal-Hook** is a **simple React Modal Hook** that can be attached to any html element

---

<br/>

## Quick Start

**Install from:**
```cmd
npm install easy-modal-hook
```

```js
import { useModal } from 'easy-modal-hook'

function App(): JSX.Element {
  const { Modal, open } = useModal({
    // Specify any html element id to attach the modal
    root: 'any-id',
    // Specify a custom icon to the close button (Default: Close)
    closeIcon: <SvgClose />
  })

  return (
    <div>
      <button onClick={open}>Open</button>
      <Modal>
        <>Hello World!</>
      </Modal>
    </div>
  )
}
```

<br/>

<!-- ## Authors

This library is created by the team behind [Next.js](https://nextjs.org), with contributions from our community:

- Shu Ding ([@shuding\_](https://twitter.com/shuding_)) - [Vercel](https://vercel.com)
- Guillermo Rauch ([@rauchg](https://twitter.com/rauchg)) - [Vercel](https://vercel.com)
- Joe Haddad ([@timer150](https://twitter.com/timer150)) - [Vercel](https://vercel.com)
- Paco Coursey ([@pacocoursey](https://twitter.com/pacocoursey)) - [Vercel](https://vercel.com)

[Contributors](https://github.com/vercel/swr/graphs/contributors)

<br/> -->

## License

The MIT License.