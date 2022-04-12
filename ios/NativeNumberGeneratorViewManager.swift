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
  override static func requiresMainQueueSetup() -> Bool {
    return true;
    
  }
  
  override func view() -> UIView! {
    return NativeNumberGeneratorView()
  }
}

class NativeNumberGeneratorView: UIView {
  @objc var onNumberSend: RCTDirectEventBlock?
  
  @objc var initNumber: NSNumber = 0{
    didSet {
      number = Int(truncating: initNumber)
    }
  }
  
  var number: Int = 0{
    didSet{
      randomNumberLabel.text = String(describing: number)
    }
  }
  
  var randomNumberLabel: UILabel!
  var randomNumberButton: UIButton!
  var sendToRN: UIButton!
  
  override init(frame: CGRect){
    super.init(frame: frame)
    setupView()
  }
  required init?(coder aDecoder: NSCoder) {
    super.init(coder: aDecoder)
    setupView()
  }
  
  private func setupView () {
    randomNumberLabel = UILabel()
    randomNumberLabel.font = .systemFont(ofSize: 40)
    randomNumberLabel.translatesAutoresizingMaskIntoConstraints = false
    randomNumberLabel.textAlignment = .right
    randomNumberLabel.text = "0"
    self.addSubview(randomNumberLabel)
    
    randomNumberButton = UIButton(type: .system)
    randomNumberButton.translatesAutoresizingMaskIntoConstraints = false
    randomNumberButton.setTitle("Generate", for: .normal)
    randomNumberButton.addTarget(self, action: #selector(self.getRandomNumberAction(_:)), for: .touchUpInside)
    self.addSubview(randomNumberButton)
    
    sendToRN = UIButton(type: .system)
    sendToRN.translatesAutoresizingMaskIntoConstraints = false
    sendToRN.setTitle("Send To RN", for: .normal)
    sendToRN.addTarget(self, action: #selector(self.sendToRNAction(_:)), for: .touchUpInside)
    self.addSubview(sendToRN)
    
    NSLayoutConstraint.activate([
      randomNumberLabel.topAnchor.constraint(equalTo: self.centerYAnchor),
      randomNumberLabel.centerXAnchor.constraint(equalTo: self.centerXAnchor),
      
      randomNumberButton.topAnchor.constraint(equalTo: randomNumberLabel.bottomAnchor, constant: 16),
      randomNumberButton.centerXAnchor.constraint(equalTo: randomNumberLabel.centerXAnchor),
      
      sendToRN.topAnchor.constraint(equalTo:  randomNumberButton.bottomAnchor, constant: 16),
      sendToRN.centerXAnchor.constraint(equalTo: randomNumberButton.centerXAnchor)
    ])
  }
  
  @IBAction func getRandomNumberAction( _ sender: UIButton){
    number = Int.random(in: 0...50)
  }
  
  @IBAction func sendToRNAction( _ sender: UIButton){
    if onNumberSend != nil {
      onNumberSend!(["nativeNumber": initNumber])
    }
  }
  
}
