//
//  NativeNumberGenerator.m
//  bridge
//
//  Created by tungtran on 10/04/2022.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTViewManager.h>
#import <React/RCTUIManager.h>
#import <React/RCTLog.h>

@interface RCT_EXTERN_MODULE(NativeNumberGeneratorViewManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(initNumber, NSNumber)
RCT_EXPORT_VIEW_PROPERTY(onNumberSend, RCTDirectEventBlock)
RCT_EXTERN_METHOD(createAOne:(nonnull NSNumber *)node)

@end
