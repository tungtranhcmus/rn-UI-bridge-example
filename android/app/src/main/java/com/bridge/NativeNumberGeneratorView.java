package com.bridge;

import android.content.Context;
import android.view.View;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.RCTEventEmitter;

import java.util.Random;

public class NativeNumberGeneratorView extends LinearLayout {
    Context myContext;
    TextView randomNumberLabel;
    Button randomNumberButton;
    Button sendRN;
    Number number = 0;
    public NativeNumberGeneratorView(Context context) {
        super(context);
        myContext = context;
        View.inflate(context, R.layout.generator_layout, this);
        init();
    }
    private void init (){
        randomNumberLabel = findViewById(R.id.randomNumber);
        randomNumberButton = findViewById(R.id.randomButton);
        sendRN = findViewById(R.id.senToRN);
        randomNumberButton.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                Random random =new Random();
                number = random.nextInt(50);
                randomNumberLabel.setText(""+number);
            }
        });
        sendRN.setOnClickListener( new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                WritableMap event = Arguments.createMap();
                event.putString("nativeNumber", String.valueOf(number));
                ReactContext reactContext = (ReactContext)getContext();
                reactContext.getJSModule(RCTEventEmitter.class)
                        .receiveEvent(getId(), "onNumberSend", event);
            }
        });
    }

    public void setInitNumber(Integer initNumber) {
        number = initNumber;
        randomNumberLabel.setText(""+number);
    }
}
