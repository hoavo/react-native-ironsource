//
//  RNIronSourceBanner.swift
//  example
//
//  Created by Loi Relia on 3/21/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

let kBannerDidLoad = "bannerDidLoad";
let kBannerDidFailToLoadWithError = "bannerDidFailToLoadWithError";
let kDidClickBanner = "didClickBanner";
let kBannerWillPresentScreen = "bannerWillPresentScreen";
let kBannerDidDismissScreen = "bannerDidDismissScreen";
let kBannerWillLeaveApplication = "bannerWillLeaveApplication";


@objc(RNIronSourceBanner)
class RNIronSourceBanner: RCTEventEmitter {
    private var bannerView: ISBannerView!
    
    @objc public func initializeBanner() {
        print("RNIronSourceBanner::initializeBanner:: initializeBanner")
        IronSource.setBannerDelegate(self)
        
        NotificationCenter.default.addObserver(self, selector: #selector(orientationChanged), name: UIDevice.orientationDidChangeNotification, object: nil)
    }
    
    @objc public func showBanner(_ placementName: String, bannerSize: String) {
        DispatchQueue.main.async {
            if let viewController = UIApplication.shared.keyWindow!.rootViewController {
                print("RNIronSourceBanner::showBanner:: showBanner", placementName,bannerSize)
                IronSource.loadBanner(with: viewController, size: ISBannerSize(description: bannerSize), placement: placementName)
            }
        }
    }
    
    @objc public func hideBanner() {
        if self.bannerView != nil {
            IronSource.destroyBanner(self.bannerView)
        }
        
    }
    
    @objc private func orientationChanged() {
        DispatchQueue.main.async {
            if self.bannerView != nil {
                if let viewController = UIApplication.shared.keyWindow!.rootViewController {
                    var y = viewController.view.frame.size.height - (self.bannerView.frame.size.height / 2);
                    if #available(iOS 11.0, *) {
                        y -= viewController.view.safeAreaInsets.bottom
                    }
                    self.bannerView.center = CGPoint(x: viewController.view.frame.size.width / 2, y: y);
                }
            }
        }
    }
    
    override func supportedEvents() -> [String]! {
        return [
            kBannerDidLoad,
            kBannerDidFailToLoadWithError,
            kDidClickBanner,
            kBannerWillPresentScreen,
            kBannerDidDismissScreen,
            kBannerWillLeaveApplication
        ]
    }
}

extension RNIronSourceBanner: ISBannerDelegate {
    /**
     Called after a banner ad has been successfully loaded
     */
    func bannerDidLoad(_ bannerView: ISBannerView!) {
        print("RNIronSourceBanner::bannerDidLoad:: bannerView", ISBannerView.description())
        sendEvent(withName: kBannerDidLoad, body: nil)
        DispatchQueue.main.async {
            self.bannerView = bannerView;
            if let viewController = UIApplication.shared.keyWindow!.rootViewController {
                var y = viewController.view.frame.size.height - (self.bannerView.frame.size.height / 2);
                
                if #available(iOS 11.0, *) {
                    y -= viewController.view.safeAreaInsets.bottom
                }
                
                self.bannerView.center = CGPoint(x: viewController.view.frame.size.width / 2, y: y);
                viewController.view.addSubview(self.bannerView)
            }
            
        }
    }
    
    /**
     Called after a banner has attempted to load an ad but failed.
     @param error The reason for the error
     */
    func bannerDidFailToLoadWithError(_ error: Error!) {
        print("RNIronSourceBanner::bannerDidFailToLoadWithError")
        sendEvent(withName: kBannerDidFailToLoadWithError, body: ["error": error])
    }
    /**
     Called after a banner has been clicked.
     */
    func didClickBanner() {
        print("RNIronSourceBanner::didClickBanner")
        sendEvent(withName: kDidClickBanner, body: nil)
    }
    
    /**
     Called when a banner is about to present a full screen content.
     */
    func bannerWillPresentScreen() {
        print("RNIronSourceBanner::bannerWillPresentScreen")
        sendEvent(withName: kBannerWillPresentScreen, body: nil)
    }
    /**
     Called after a full screen content has been dismissed.
     */
    func bannerDidDismissScreen() {
        print("RNIronSourceBanner::bannerDidDismissScreen")
        sendEvent(withName: kBannerDidDismissScreen, body: nil)
    }
    
    /**
     Called when a user would be taken out of the application context.
     */
    func bannerWillLeaveApplication() {
        print("RNIronSourceBanner::bannerWillLeaveApplication")
        sendEvent(withName: kBannerWillLeaveApplication, body: nil)
    }
}
