# DeviceProvider

This provider is nested in `KelystyProvider` component. But you can use it separately if you will. Here is a short guide.

### Auth Provider

`DeviceProvider` is a container component that wraps all nested hierarchy into `DeviceContext.Provider` ([read below](#device-context)).
All props are optional, because it has fallbacks within itself. All nested elements would be able to interract with it;

```ts
type DeviceProviderProps = {
  mobileMaxWidth?: number | undefined;
  tabletMaxWidth?: number | undefined;
  children?: ReactNode;
};
```

Default `mobileMaxWidth = 766` and as for `tabletMaxWidth = 1199`; When you pass one of them or both simultaniously they are to be validated and successfully applied.

Please, be careful: **mobile width must be less than tablet one**;

#### example of the use case:

```ts
ReactDOM.createRoot(document.getElementById('root')!).render(
  <DeviceProvider
    mobileMaxWidth={450} // any value
    tabletMaxWidth={900} // in pixels
  >
    <App/>
  </DeviceProvider>
)
```

### Device Context

`DeviceContext` is the real context holder. Here you can see it's value's structure:

```ts
type Device = 'desktop' | 'tablet' | 'mobile';
type IsDevice = boolean;

interface DeviceContextValue {
  device: Device;
  isDesktop: IsDevice;
  isTablet: IsDevice;
  isMobile: IsDevice;
}
```

- `device` - device as a string (ex 'desktop')
- `isDesktop` - the helper providing semantic simplicity
- `isTablet` - the same
- `isMobile` - the same

**isDesktop**, **isTablet** and **isMobile** instances are created by wrapping `DeviceProvider` that stores the device state within itself. What is why it is so convenient to use it.

### useDevice() hook

This is a custom hook that simply returns `DeviceContextValue` structure and you can destruct it like in the example below:

```ts
// import
import {useDevice} from '@kelysty/system';

// destruct
const {device, isDesktop, isTablet, isMobile} = useDevice();

// use example
return (
  <p>
    {
      isDesktop
      ? <DesktopComponent />
      : <MobileComponent />
    }
  </p>
)
```
