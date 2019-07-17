---
title: Application
---

This module provides useful information about the native application, such the bundle ID, app name, and build version.

## Installation

This API is pre-installed in [managed](../../introduction/managed-vs-bare/#managed-workflow) apps. To use it in a [bare](../../introduction/managed-vs-bare/#bare-workflow) React Native app, follow its [installation instructions](https://github.com/expo/expo/tree/master/packages/expo-device).

## API

```js
import * as Application from 'expo-application';
```

### Constants

- `Application.applicationName: string`

  The human-readable name of the application.

  - e.g., `Expo`, `Yelp`, `Instagram`

- `Application.bundleId: string`

  The bundle ID of the application.

  - e.g., `com.cocoacasts.scribbles`, `com.apple.Pages`

- `Application.installReferrer: string | null` (Android only)

  The referrer URL of the installed app.

- `Application.nativeAppVersion: string`

  The `Info.plist` value for `CFBundleShortVersionString` on iOS and the version name set by `version` in app.json on Android at the time the native app was built.

  - e.g., `2.11.0`

- `Application.nativeBuildVersion: string`

  The `Info.plist` value for `CFBundleVersion` on iOS (set with `ios.buildNumber` value in `app.json` in a standalone app) and the version code set by `android.versionCode` in app.json on Android at the time the native app was built.

  - e.g., `2.11.0`

- `Application.androidId: string | null` (Android only)

  A hexademical `string` unique to each combination of app-signing key, user, and device. The value may change if a factory reset is performed on the device or if an APK signing key changes. For more information about how the platform handles ANDROID_ID in Android 8.0 (API level 26) and higher, see [Android 8.0 Behavior Changes.](https://developer.android.com/about/versions/oreo/android-8.0-changes.html#privacy-all)

  Note: In versions of the platform lower than Android 8.0 (API level 26), this value remains constant for the lifetime of the user's device.

  See: https://developer.android.com/reference/android/provider/Settings.Secure.html#ANDROID_ID

  - e.g., `"dd96dec43fb81c97"`

## Methods

### `Application.getIosIdForVenderAsync()` (iOS only)

Gets the iOS identifier for vender [(IDFV)](https://developer.apple.com/documentation/uikit/uidevice/1620059-identifierforvendor) value, an alphanumeric string that uniquely identifies a device to the app’s vendor.

Since this is the IDFV value, its value can change if all apps from the current apps vendor have been uninstalled.

#### Returns

A `Promise` that resolves to a `string` of the IDFV for the app.

**Examples**

```js
await Application.getIosForVenderAsync().then((idfv) => {
    //"FCDBD8EF-62FC-4ECB-B2F5-92C9E79AC7F9"
});
```

### `Application.getFirstInstallTimeAsync()` (Android only)

Gets the first time the app was installed onto the device. Returned time is based on US English Locale (en_US). It is formatted: Month DD, YYYY.

#### Returns

Returns a `Promise` that resolves to a human-readable `string` that represents the first time the app was installed on the device.

**Examples**

```js
await Application.getFirstInstallTimeAsync().then((firstInstallTime) => {
    //
});
```

### `Application.getLastUpdateTimeAsync()` (Android only)

Gets the last time the app was updated from the App store or Play Store.

#### Returns

Returns a `Promise` that resolves to a human-readable `string` that represents the last time the app was updated via the App Store (iOS) or Play Store (Android).

**Examples**

```js
await Application.getLastUpdateTimeAsync().then((lastUpdateTime) => {
    //
});
```
