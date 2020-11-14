import RPi.GPIO as GPIO

print("PYTHON> ON")
GPIO.setmode(GPIO.BOARD)
GPIO.setwarnings(False)
GPIO.setup(21,GPIO.OUT)
GPIO.output(21,1)
print("LED ON")
