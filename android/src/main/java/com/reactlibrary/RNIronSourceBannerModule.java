package com.reactlibrary;

import android.app.Activity;
import android.support.annotation.Nullable;
import android.view.View;
import android.widget.FrameLayout;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.ironsource.mediationsdk.ISBannerSize;
import com.ironsource.mediationsdk.IronSource;
import com.ironsource.mediationsdk.IronSourceBannerLayout;
import com.ironsource.mediationsdk.logger.IronSourceError;
import com.ironsource.mediationsdk.sdk.BannerListener;

public class RNIronSourceBannerModule extends ReactContextBaseJavaModule {
    private static final String TAG = "RNIronSourceBanner";
    private final ReactApplicationContext reactContext;
    private IronSourceBannerLayout banner;
 

    public RNIronSourceBannerModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return TAG;
    }


    @ReactMethod
    public void initializeBanner() {

    }

    @ReactMethod
    public void showBanner(String placementName, String bannerSize) {
        Activity activity =  reactContext.getCurrentActivity();
        banner = IronSource.createBanner(activity, new ISBannerSize(bannerSize));
        banner.setBannerListener(new BannerListener() {
            @Override
            public void onBannerAdLoaded() {
                FrameLayout bannerContainer = new FrameLayout(reactContext);
                FrameLayout.LayoutParams layoutParams = new FrameLayout.LayoutParams(FrameLayout.LayoutParams.MATCH_PARENT,
                        FrameLayout.LayoutParams.WRAP_CONTENT);
                bannerContainer.addView(banner, 0, layoutParams);
                reactContext.getCurrentActivity().addContentView(bannerContainer,layoutParams);
            }

            @Override
            public void onBannerAdLoadFailed(IronSourceError error) {
            }

            @Override
            public void onBannerAdClicked() {
            }

            @Override
            public void onBannerAdScreenPresented() {
            }

            @Override
            public void onBannerAdScreenDismissed() {
            }

            @Override
            public void onBannerAdLeftApplication() {
            }
        });
        IronSource.loadBanner(banner,placementName);
    }

    @ReactMethod
    public void hideBanner() {
        if(banner != null) {
            banner.removeBannerListener();
            IronSource.destroyBanner(banner);
        }

    }

    private void sendEvent(String eventName, @Nullable WritableMap params) {
        getReactApplicationContext().getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(eventName, params);
    }
}

