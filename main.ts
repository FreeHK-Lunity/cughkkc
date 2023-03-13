function Face_following_mode () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        xcenter = huskylens.readeBox(1, Content1.xCenter)
        if (xcenter < 80) {
            Turn_Left()
        }
        if (xcenter >= 80 && xcenter <= 80) {
            Move_Foward()
        }
        if (xcenter > 240) {
            Trun_Right()
        }
    } else {
        CUHK_JC_iCar.carStop()
    }
}
function Move_Foward () {
    CUHK_JC_iCar.carCtrlSpeed(CUHK_JC_iCar.CarState.Forward, 80)
}
function Trun_Right () {
    CUHK_JC_iCar.singleTurn(CUHK_JC_iCar.LRstate.Right, CUHK_JC_iCar.direction.Forward, 80)
}
function Turn_Left () {
    CUHK_JC_iCar.singleTurn(CUHK_JC_iCar.LRstate.Left, CUHK_JC_iCar.direction.Forward, 80)
}
let xcenter = 0
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    Face_following_mode()
})
