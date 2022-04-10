package com.bridge;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

public class NativeNumberGeneratorViewManager extends SimpleViewManager<NativeNumberGeneratorView> {
    public static final String REACT_CLASS = "RCTRandomNumberView";
    ReactApplicationContext mCallerContext;

    public NativeNumberGeneratorViewManager(ReactApplicationContext reactContext) {
        mCallerContext = reactContext;
    }

    @NonNull
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @NonNull
    @Override
    protected NativeNumberGeneratorView createViewInstance(@NonNull ThemedReactContext reactContext) {
        return new NativeNumberGeneratorView(reactContext);
    }

}
