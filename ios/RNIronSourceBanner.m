//
//  RNIronSourceBanner.m
//  example
//
//  Created by Loi Relia on 3/21/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(RNIronSourceBanner, NSObject)
+ (BOOL)requiresMainQueueSetup
{
    ; return YES;
}

RCT_EXTERN_METHOD(initializeBanner)
RCT_EXTERN_METHOD(showBanner:(NSString*) placementName bannerSize: (NSString*) bannerSize)
RCT_EXTERN_METHOD(hideBanner)
@end
