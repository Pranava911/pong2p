namespace SpriteKind {
    export const boundary = SpriteKind.create()
    export const bouncy = SpriteKind.create()
    export const ball = SpriteKind.create()
}
function Ball (Direction: string) {
    ball_direction = Direction
}
function Game_Over () {
    da_ball.setVelocity(0, 0)
    animation.runImageAnimation(
    da_ball,
    [img`
        . . . . . b b b b b b . . . . . 
        . . . b b 9 9 9 9 9 9 b b . . . 
        . . b b 9 9 9 9 9 9 9 9 b b . . 
        . b b 9 d 9 9 9 9 9 9 9 9 b b . 
        . b 9 d 9 9 9 9 9 1 1 1 9 9 b . 
        b 9 d d 9 9 9 9 9 1 1 1 9 9 9 b 
        b 9 d 9 9 9 9 9 9 1 1 1 9 9 9 b 
        b 9 3 9 9 9 9 9 9 9 9 9 1 9 9 b 
        b 5 3 d 9 9 9 9 9 9 9 9 9 9 9 b 
        b 5 3 3 9 9 9 9 9 9 9 9 9 d 9 b 
        b 5 d 3 3 9 9 9 9 9 9 9 d d 9 b 
        . b 5 3 3 3 d 9 9 9 9 d d 5 b . 
        . b d 5 3 3 3 3 3 3 3 d 5 b b . 
        . . b d 5 d 3 3 3 3 5 5 b b . . 
        . . . b b 5 5 5 5 5 5 b b . . . 
        . . . . . b b b b b b . . . . . 
        `,img`
        . . . . . . . . b b . . . . . . 
        . . . . . . . b 9 1 b . . . . . 
        . . b b . . . b 9 9 b . . . . . 
        . b 9 1 b . . b b b . . b b b . 
        . b 3 9 b . b b b b . b 9 9 1 b 
        . b b b b b 9 9 1 1 b b 3 9 9 b 
        . . . . b 9 d 9 1 1 b b b b b . 
        . . . . b 5 3 9 9 9 b . . . . . 
        . . b b b 5 3 3 d 9 b . . . . . 
        . b 5 1 b b 5 5 9 b b b b . . . 
        . b 5 5 b b b b b b 3 9 9 3 . . 
        . b b b b b b b . b 9 1 1 9 b . 
        . . . b 5 5 1 b . b 9 1 1 9 b . 
        . . . b 5 5 5 b . b 3 9 9 3 b . 
        . . . . b b b . . . b b b b . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . b b . . . . . 
        . . . . . . . . b 9 1 b . . . . 
        . . . b b b b b b 9 9 b . . . . 
        . . b 9 9 d 9 9 1 1 d b b b b . 
        . . . b d 9 9 9 1 1 9 9 d 9 1 b 
        . . b 9 d 9 9 9 9 9 9 9 d 9 9 b 
        . . b 9 3 3 9 9 9 9 9 d b b b . 
        . b 5 d 9 3 3 3 d d b b b b . . 
        b 5 5 5 b b b b b b b 9 9 1 b . 
        b 5 5 b . . . . . . b 3 9 9 b . 
        . b b . . . . . . . . b b b . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 1 1 1 . . . 
        . . . 1 1 . . . . . 1 1 1 . . . 
        . . . 1 1 . . 1 1 . 1 1 1 . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 1 . . . . 
        . . . . 1 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    300,
    false
    )
    pause(1500)
    if (info.score() < 20) {
        game.over(false, effects.melt)
    } else {
        game.over(true, effects.confetti)
    }
}
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    pongplayer1.setVelocity(0, -100)
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Released, function () {
    pongplayer1.setVelocity(0, 0)
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    pongplayer2.setVelocity(0, 100)
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Released, function () {
    pongplayer2.setVelocity(0, 100)
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Released, function () {
    pongplayer2.setVelocity(0, 0)
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    pongplayer2.setVelocity(0, -100)
})
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Released, function () {
    pongplayer1.setVelocity(0, 0)
})
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    pongplayer1.setVelocity(0, 100)
})
let ball_direction = ""
let da_ball: Sprite = null
let pongplayer2: Sprite = null
let pongplayer1: Sprite = null
scene.setBackgroundColor(15)
pongplayer1 = sprites.create(img`
    9 5 9 
    5 9 5 
    9 5 9 
    5 9 5 
    9 5 9 
    5 9 5 
    9 5 9 
    5 9 5 
    9 5 9 
    5 9 5 
    9 5 9 
    5 9 5 
    9 5 9 
    5 9 5 
    9 5 9 
    5 9 5 
    9 5 9 
    5 9 5 
    9 5 9 
    5 9 5 
    9 5 9 
    5 9 5 
    9 5 9 
    5 9 5 
    9 5 9 
    5 9 5 
    9 5 9 
    5 9 5 
    9 5 9 
    5 9 5 
    . . . 
    `, SpriteKind.Player)
pongplayer1.setPosition(7, 60)
pongplayer2 = sprites.create(img`
    2 5 2 
    5 2 5 
    2 5 2 
    5 2 5 
    2 5 2 
    5 2 5 
    2 5 2 
    5 2 5 
    2 5 2 
    5 2 5 
    2 5 2 
    5 2 5 
    2 5 2 
    5 2 5 
    2 5 2 
    5 2 5 
    2 5 2 
    5 2 5 
    2 5 2 
    5 2 5 
    2 5 2 
    5 2 5 
    2 5 2 
    5 2 5 
    2 5 2 
    5 2 5 
    2 5 2 
    5 2 5 
    2 5 2 
    5 2 5 
    2 5 2 
    `, SpriteKind.Player)
pongplayer2.setPosition(153, 60)
let boundary_left = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.boundary)
boundary_left.setPosition(0, 60)
let boundary_right = sprites.create(img`
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    fff
    `, SpriteKind.boundary)
boundary_right.setPosition(160, 60)
let Top_Border = sprites.create(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `, SpriteKind.Player)
Top_Border.setPosition(80, 0)
let Bottom_Border = sprites.create(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `, SpriteKind.Player)
Bottom_Border.setPosition(80, 120)
da_ball = sprites.create(img`
    . . . . . b b b b b b . . . . . 
    . . . b b 9 9 9 9 9 9 b b . . . 
    . . b b 9 9 9 9 9 9 9 9 b b . . 
    . b b 9 d 9 9 9 9 9 9 9 9 b b . 
    . b 9 d 9 9 9 9 9 1 1 1 9 9 b . 
    b 9 d d 9 9 9 9 9 1 1 1 9 9 9 b 
    b 9 d 9 9 9 9 9 9 1 1 1 9 9 9 b 
    b 9 3 9 9 9 9 9 9 9 9 9 1 9 9 b 
    b 5 3 d 9 9 9 9 9 9 9 9 9 9 9 b 
    b 5 3 3 9 9 9 9 9 9 9 9 9 d 9 b 
    b 5 d 3 3 9 9 9 9 9 9 9 d d 9 b 
    . b 5 3 3 3 d 9 9 9 9 d d 5 b . 
    . b d 5 3 3 3 3 3 3 3 d 5 b b . 
    . . b d 5 d 3 3 3 3 5 5 b b . . 
    . . . b b 5 5 5 5 5 5 b b . . . 
    . . . . . b b b b b b . . . . . 
    `, SpriteKind.ball)
info.setScore(0)
let ballside = randint(1, 4)
pongplayer1.setStayInScreen(true)
pongplayer2.setStayInScreen(true)
animation.runImageAnimation(
da_ball,
[img`
    . . . . . b b b b b b . . . . . 
    . . . b b 9 9 9 9 9 9 b b . . . 
    . . b b 9 9 9 9 9 9 9 9 b b . . 
    . b b 9 d 9 9 9 9 9 9 9 9 b b . 
    . b 9 d 9 9 9 9 9 1 1 1 9 9 b . 
    b 9 d d 9 9 9 9 9 1 1 1 9 9 9 b 
    b 9 d 9 9 9 9 9 9 1 1 1 9 9 9 b 
    b 9 3 9 9 9 9 9 9 9 9 9 1 9 9 b 
    b 5 3 d 9 9 9 9 9 9 9 9 9 9 9 b 
    b 5 3 3 9 9 9 9 9 9 9 9 9 d 9 b 
    b 5 d 3 3 9 9 9 9 9 9 9 d d 9 b 
    . b 5 3 3 3 d 9 9 9 9 d d 5 b . 
    . b d 5 3 3 3 3 3 3 3 d 5 b b . 
    . . b d 5 d 3 3 3 3 5 5 b b . . 
    . . . b b 5 5 5 5 5 5 b b . . . 
    . . . . . b b b b b b . . . . . 
    `,img`
    . . . . . b b b b b b . . . . . 
    . . . b b 5 5 5 9 9 9 b b . . . 
    . . b d 5 d 3 3 3 d d 9 b b . . 
    . b d 5 3 3 3 d 9 9 d d 9 b b . 
    . b 5 3 3 3 9 9 9 9 9 9 d 9 b . 
    b 5 d 3 3 9 9 9 9 9 9 9 9 9 9 b 
    b 5 3 3 d 9 9 9 9 9 9 9 9 9 9 b 
    b 5 3 3 9 9 9 9 9 9 9 9 9 9 9 b 
    b 5 3 3 9 9 9 9 9 9 9 9 9 9 9 b 
    b 5 3 3 9 9 9 9 9 1 1 1 9 9 9 b 
    b 5 5 3 9 9 9 9 9 1 1 1 9 9 9 b 
    . b 5 d d 9 9 9 9 1 1 1 9 9 b . 
    . b b 5 d d 9 9 1 9 9 9 9 b b . 
    . . b b 5 d d 9 9 9 9 9 b b . . 
    . . . b b 9 9 9 9 9 9 b b . . . 
    . . . . . b b b b b b . . . . . 
    `,img`
    . . . . . b b b b b b . . . . . 
    . . . b b 5 5 5 5 5 5 b b . . . 
    . . b b 5 5 3 3 3 3 d 5 d b . . 
    . b b 5 d 3 3 3 3 3 3 3 5 d b . 
    . b 5 d d 9 9 9 9 d 3 3 3 5 b . 
    b 9 d d 9 9 9 9 9 9 9 3 3 d 5 b 
    b 9 d 9 9 9 9 9 9 9 9 9 3 3 5 b 
    b 9 9 9 9 9 9 9 9 9 9 9 d 3 5 b 
    b 9 9 1 9 9 9 9 9 9 9 9 9 3 9 b 
    b 9 9 9 1 1 1 9 9 9 9 9 9 d 9 b 
    b 9 9 9 1 1 1 9 9 9 9 9 d d 9 b 
    . b 9 9 1 1 1 9 9 9 9 9 d 9 b . 
    . b b 9 9 9 9 9 9 9 9 d 9 b b . 
    . . b b 9 9 9 9 9 9 9 9 b b . . 
    . . . b b 9 9 9 9 9 9 b b . . . 
    . . . . . b b b b b b . . . . . 
    `,img`
    . . . . . b b b b b b . . . . . 
    . . . b b 9 9 9 9 9 9 b b . . . 
    . . b b 9 9 9 9 9 d d 5 b b . . 
    . b b 9 9 9 9 1 9 9 d d 5 b b . 
    . b 9 9 1 1 1 9 9 9 9 d d 5 b . 
    b 9 9 9 1 1 1 9 9 9 9 9 3 5 5 b 
    b 9 9 9 1 1 1 9 9 9 9 9 3 3 5 b 
    b 9 9 9 9 9 9 9 9 9 9 9 3 3 5 b 
    b 9 9 9 9 9 9 9 9 9 9 9 3 3 5 b 
    b 9 9 9 9 9 9 9 9 9 9 d 3 3 5 b 
    b 9 9 9 9 9 9 9 9 9 9 3 3 d 5 b 
    . b 9 d 9 9 9 9 9 9 3 3 3 5 b . 
    . b b 9 d d 9 9 d 3 3 3 5 d b . 
    . . b b 9 d d 3 3 3 d 5 d b . . 
    . . . b b 9 9 9 5 5 5 b b . . . 
    . . . . . b b b b b b . . . . . 
    `],
100,
true
)
da_ball.setBounceOnWall(true)
if (ballside == 1) {
    // Right Down
    da_ball.setVelocity(randint(50, 70), randint(50, 70))
    Ball("Right Down")
} else if (ballside == 2) {
    // Right Up
    da_ball.setVelocity(randint(50, 70), randint(-50, -70))
    Ball("Right Up")
} else if (ballside == 3) {
    // Left Down
    da_ball.setVelocity(randint(-50, -70), randint(50, 70))
    Ball("Left Down")
} else {
    // Left Up
    da_ball.setVelocity(randint(-50, -70), randint(-50, -70))
    Ball("Left Up")
}
forever(function () {
    if (da_ball.overlapsWith(pongplayer1)) {
        info.changeScoreBy(1)
        if (ball_direction == "Left Down") {
            // Right Down
            da_ball.setVelocity(randint(50, 70), randint(50, 70))
            Ball("Right Down")
        }
        if (ball_direction == "Left Up") {
            // Right Down
            da_ball.setVelocity(randint(50, 70), randint(-50, -70))
            Ball("Right Up")
        }
        pause(500)
    } else if (da_ball.overlapsWith(pongplayer2)) {
        info.changeScoreBy(1)
        if (ball_direction == "Right Down") {
            // Left Down
            da_ball.setVelocity(randint(-50, -70), randint(50, 70))
            Ball("Left Down")
        }
        if (ball_direction == "Right Up") {
            // Left Up
            da_ball.setVelocity(randint(-50, -70), randint(-50, -70))
            Ball("Left Up")
        }
        pause(500)
    } else if (da_ball.overlapsWith(boundary_left)) {
        Game_Over()
    } else if (da_ball.overlapsWith(boundary_right)) {
        Game_Over()
    } else if (da_ball.overlapsWith(Top_Border)) {
        if (ball_direction == "Left Up") {
            Ball("Left Down")
        } else if (ball_direction == "Right Up") {
            Ball("Right Down")
        }
    } else if (da_ball.overlapsWith(Bottom_Border)) {
        if (ball_direction == "Left Down") {
            Ball("Left Up")
        } else if (ball_direction == "Right Down") {
            Ball("Right Up")
        }
    }
})
