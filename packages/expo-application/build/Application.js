import { Platform, UnavailabilityError } from '@unimodules/core';
import ExpoApplication from './ExpoApplication';
export const nativeAppVersion = ExpoApplication ? ExpoApplication.nativeAppVersion : null;
export const nativeBuildVersion = ExpoApplication ? ExpoApplication.nativeBuildVersion : null;
export const applicationName = ExpoApplication ? ExpoApplication.applicationName : null;
export const bundleId = ExpoApplication ? ExpoApplication.bundleId : null;
export let installReferrer;
export let androidId;
if (Platform.OS === 'ios') {
    androidId = null;
    installReferrer = null;
}
else {
    androidId = ExpoApplication ? ExpoApplication.androidId : null;
    installReferrer = ExpoApplication ? ExpoApplication.installReferrer : null;
}
export async function getIosIdForVendorAsync() {
    if (!ExpoApplication.getIosIdForVendorAsync) {
        throw new UnavailabilityError('expo-application', 'getIosIdForVendorAsync');
    }
    return await ExpoApplication.getIosIdForVendorAsync();
}
export async function getFirstInstallTimeAsync() {
    if (!ExpoApplication.getFirstInstallTimeAsync) {
        throw new UnavailabilityError('expo-application', 'getFirstInstallTimeAsync');
    }
    return await ExpoApplication.getFirstInstallTimeAsync();
}
export async function getLastUpdateTimeAsync() {
    if (!ExpoApplication.getLastUpdateTimeAsync) {
        throw new UnavailabilityError('expo-application', 'getLastUpdateTimeAsync');
    }
    return await ExpoApplication.getLastUpdateTimeAsync();
}
//# sourceMappingURL=Application.js.map