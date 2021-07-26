#Python Program to set the colours of the RGB strip to solid BLUE

import pigpio

RED_PIN = 17
GREEN_PIN = 22
BLUE_PIN = 24

pi = pigpio.pi()

#Set all colours off
pi.set_PWM_dutycycle(GREEN_PIN, 0)
pi.set_PWM_dutycycle(RED_PIN, 0)

#Set BLUE pin on
pi.set_PWM_dutycycle(BLUE_PIN, 255)