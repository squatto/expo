import { Platform, UnavailabilityError } from '@unimodules/core';
import ExpoApplication from './ExpoApplication';

export const nativeAppVersion = ExpoApplication ? ExpoApplication.nativeAppVersion : null;
export const nativeBuildVersion = ExpoApplication ? ExpoApplication.nativeBuildVersion : null;
export const applicationName = ExpoApplication ? ExpoApplication.applicationName : null;
export const bundleId = ExpoApplication ? ExpoApplication.bundleId : null;
export const installReferrer = ExpoApplication ? ExpoApplication.installReferrer : null;
if(Platform.OS === 'ios'){
  
}
export const androidId = ExpoApplication ? ExpoApplication.androidId : null;

export async function getIosIdForVendorAsync(): Promise<string> {
  if (!ExpoApplication.getIosIdForVendorAsync) {
    throw new UnavailabilityError('expo-application', 'getIosIdForVendorAsync');
  }
  return await ExpoApplication.getIosIdForVendorAsync();
}

export async function getFirstInstallTimeAsync(): Promise<number> {
  if (!ExpoApplication.getFirstInstallTimeAsync) {
    throw new UnavailabilityError('expo-application', 'getFirstInstallTimeAsync');
  }
  return await ExpoApplication.getFirstInstallTimeAsync();
}

export async function getLastUpdateTimeAsync(): Promise<number> {
  if (!ExpoApplication.getLastUpdateTimeAsync) {
    throw new UnavailabilityError('expo-application', 'getLastUpdateTimeAsync');
  }
  return await ExpoApplication.getLastUpdateTimeAsync();
}
