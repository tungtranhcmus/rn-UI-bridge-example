package com.bridge;

import android.content.Context;
import android.view.View;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;

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
    }
}
