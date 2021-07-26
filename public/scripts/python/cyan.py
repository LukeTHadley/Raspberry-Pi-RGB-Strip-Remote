#Python Program to set the colours of the RGB strip to solid CYAN

import pigpio

RED_PIN = 17
GREEN_PIN = 22
BLUE_PIN = 24

pi = pigpio.pi()

#Set RED off in case it is on
pi.set_PWM_dutycycle(RED_PIN, 0)

#Set GREEN and BLUE on
pi.set_PWM_dutycycle(GREEN_PIN, 255)
pi.set_PWM_dutycycle(BLUE_PIN, 255)