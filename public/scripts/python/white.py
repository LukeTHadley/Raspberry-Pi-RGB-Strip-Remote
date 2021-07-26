#Python Program to set the colours of the RGB strip on for white

import pigpio

RED_PIN = 17
GREEN_PIN = 22
BLUE_PIN = 24

pi = pigpio.pi()

#Set all colours on for white
pi.set_PWM_dutycycle(GREEN_PIN, 255)
pi.set_PWM_dutycycle(BLUE_PIN, 255)
pi.set_PWM_dutycycle(RED_PIN, 255)