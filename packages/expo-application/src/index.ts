import { NativeModulesProxy } from '@unimodules/core';

const { ExpoApplication } = NativeModulesProxy;

export { default as ExpoApplicationView } from './ExpoApplicationView';

export async function someGreatMethodAsync(options: any) {
  return await ExpoApplication.someGreatMethodAsync(options);
}
