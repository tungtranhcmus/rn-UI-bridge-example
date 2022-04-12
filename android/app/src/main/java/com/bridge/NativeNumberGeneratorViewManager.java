package com.bridge;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import java.util.Map;

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

    @ReactProp(name ="initNumber")
    public void setInitNumberProps(NativeNumberGeneratorView view, Integer initNumber){
        view.setInitNumber(initNumber);
    }

    public Map getExportedCustomBubblingEventTypeConstants() {
        return MapBuilder.builder().put(
                "onNumberSend",
                MapBuilder.of(
                        "phasedRegistrationNames",
                        MapBuilder.of("bubbled", "onNumberSend")
                )
        ).build();
    }
}
