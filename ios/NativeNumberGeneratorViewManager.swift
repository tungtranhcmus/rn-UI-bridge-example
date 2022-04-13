//
//  NativeNumberGeneratorViewManager.swift
//  bridge
//
//  Created by tungtran on 10/04/2022.
//

import Foundation
import React
import UIKit

@objc(NativeNumberGeneratorViewManager)
class NativeNumberGeneratorViewManager: RCTViewManager {
  var nativeView: NativeNumberGeneratorView!
  override static func requiresMainQueueSetup() -> Bool {
    return true;
    
  }
  
  override func view() -> UIView! {
    nativeView = NativeNumberGeneratorView()
    return nativeView
  }
  
  @objc public func createAOne(_ node:NSNumber){
    nativeView.createAOne()
    }
}
