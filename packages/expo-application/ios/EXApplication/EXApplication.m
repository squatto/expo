// Copyright 2018-present 650 Industries. All rights reserved.
#import <UMCore/UMUtilities.h>
#import <EXApplication/EXApplication.h>
#import <EXApplication/EXApplicationUID.h>

@interface EXApplication ()


@end

@implementation EXApplication

UM_EXPORT_MODULE(ExpoApplication);

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

UM_EXPORT_METHOD_AS(getIosIdForVendorAsync, getIosIdForVendorAsyncWithResolver:(UMPromiseResolveBlock)resolve rejecter:(UMPromiseRejectBlock)reject)
{
  NSString* identifierForVendor = [EXApplicationUID uid];
  resolve(identifierForVendor);
}

UM_EXPORT_METHOD_AS(getFirstInstallTimeAsync, getFirstInstallTimeAsyncWithResolver:(UMPromiseResolveBlock)resolve rejecter:(UMPromiseRejectBlock)reject)
{
  NSURL* urlToDocumentsFolder = [[[NSFileManager defaultManager] URLsForDirectory:NSDocumentDirectory inDomains:NSUserDomainMask] lastObject];
  __autoreleasing NSError *error;
  NSDate *installDate = [[[NSFileManager defaultManager] attributesOfItemAtPath:urlToDocumentsFolder.path error:&error] objectForKey:NSFileCreationDate];
  NSDateFormatter *dateFormatter = [[NSDateFormatter alloc] init];
  dateFormatter.dateStyle = NSDateFormatterMediumStyle;
  dateFormatter.timeStyle = NSDateFormatterNoStyle;
  // US English Locale (en_US)
  dateFormatter.locale = [[NSLocale alloc] initWithLocaleIdentifier:@"en_US"];
  NSString *installDateStr = [dateFormatter stringFromDate: installDate];
  resolve(installDateStr);
}

- (NSString *) applicationName
{
  return [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleDisplayName"] ?: [NSNull null];
}

- (NSString *) bundleId
{
  return [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleIdentifier"] ?: [NSNull null];
}

- (NSString *) appVersion
{
  return [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleShortVersionString"];
}

- (NSString *) buildVersion
{
  return [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleVersion"];
}

- (NSDictionary *)constantsToExport
{
  return @{
           @"applicationName": [self applicationName],
           @"bundleId": [self bundleId],
           @"nativeAppVersion": [self appVersion],
           @"nativeBuildVersion": [self buildVersion],
           };
}

@end
