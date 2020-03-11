int incoming;
void setup() {
  pinMode(6, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  if (Serial.available() > 0) {
    incoming = Serial.read();
    if (incoming == 'S') {
      tone(6, 131, 250); // C
    }
    else if (incoming == 'D') {
      tone(6, 147, 250); // D
    }
    else if (incoming == 'F') {
      tone(6, 165, 250); // E
    }
    else if (incoming == 'G') {
      tone(6, 175, 250); // F
    }
    else if (incoming == 'H') {
      tone(6, 196, 250); // G
    }
    else if (incoming == 'J') {
      tone(6, 220, 250); // A
    }
    else if (incoming == 'K') {
      tone(6, 247, 250); // B
    }
  }
}
