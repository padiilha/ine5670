

int sensor = 2, buzzer = 3, verde = 6, vermelho = 7, button = 9;
int state = HIGH;

void setup() {
  pinMode(sensor, INPUT);
  pinMode(button, INPUT);
  pinMode(buzzer, OUTPUT);
  pinMode(verde, OUTPUT);
  pinMode(vermelho, OUTPUT);
}

void loop() {  
  if (digitalRead(sensor) == state)
  {
    tone(buzzer, 440);
    digitalWrite(vermelho, LOW);
    digitalWrite(verde, HIGH);
  }
  else
  {
    digitalWrite(verde, LOW);
    digitalWrite(vermelho, HIGH);
    noTone(buzzer);
  }

  if (digitalRead(button) == HIGH)
  {
    state = !state;
  }
  delay(150);
}
