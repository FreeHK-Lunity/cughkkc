def Turn_right():
    CUHK_JC_iCar.car_ctrl_speed(CUHK_JC_iCar.CarState.FORWARD, 80)
def Turn_left():
    CUHK_JC_iCar.car_ctrl_speed(CUHK_JC_iCar.CarState.FORWARD, 80)
def move_forward():
    CUHK_JC_iCar.car_ctrl_speed(CUHK_JC_iCar.CarState.FORWARD, 80)
def Line_Tracking_Mode():
    huskylens.request()
    if huskylens.is_appear(1, HUSKYLENSResultType_t.HUSKYLENS_RESULT_ARROW):
        xcenter = huskylens.reade_arrow(1, Content2.X_ORIGIN)
        if xcenter < 100:
            Turn_left()
        if xcenter >=100 and xcenter <=100:
            move_forward()
        if xcenter >220:
            Turn_right()
    else:
        CUHK_JC_iCar.car_stop()
xcenter2 = 0
huskylens.init_i2c()
huskylens.init_mode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
basic.show_icon(IconNames.YES)

def on_forever():
    pass
basic.forever(on_forever)
