// Copyright 2016-present 650 Industries. All rights reserved.

#import <EXApplication/EXApplicationView.h>
#import <EXApplication/EXApplicationViewManager.h>

@interface EXApplicationViewManager ()

@property (nonatomic, weak) EXModuleRegistry *moduleRegistry;

@end

@implementation EXApplicationViewManager

EX_EXPORT_MODULE(ExpoApplicationViewManager);

- (UIView *)view
{
  return [[EXApplicationView alloc] initWithModuleRegistry:_moduleRegistry];
}

- (NSString *)viewName
{
  return @"ExpoApplicationView";
}

- (NSArray<NSString *> *)supportedEvents
{
  return @[@"onSomethingHappened"];
}

- (void)setModuleRegistry:(EXModuleRegistry *)moduleRegistry
{
  _moduleRegistry = moduleRegistry;
}

@end
