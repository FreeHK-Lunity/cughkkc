function Turn_right() {
    CUHK_JC_iCar.carCtrlSpeed(CUHK_JC_iCar.CarState.Forward, 80)
}

function Turn_left() {
    CUHK_JC_iCar.carCtrlSpeed(CUHK_JC_iCar.CarState.Forward, 80)
}

function move_forward() {
    CUHK_JC_iCar.carCtrlSpeed(CUHK_JC_iCar.CarState.Forward, 80)
}

function Line_Tracking_Mode() {
    let xcenter: number;
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultArrow)) {
        xcenter = huskylens.readeArrow(1, Content2.xOrigin)
        if (xcenter < 100) {
            Turn_left()
        }
        
        if (xcenter >= 100 && xcenter <= 100) {
            move_forward()
        }
        
        if (xcenter > 220) {
            Turn_right()
        }
        
    } else {
        CUHK_JC_iCar.carStop()
    }
    
}

let xcenter2 = 0
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
basic.showIcon(IconNames.Yes)
basic.forever(function on_forever() {
    
})
