/**
 Algorithm

 1) Run Rabbit with speed = 2, Turtle speed = 1
 2) If Rabbit reach null, then there is no loop. The end;
 3) When Rabbit reach Turtle then
    Move Rabbit to the begin
    Change Rabbit speed = 1;
    Turtle still has old speed = 1
 4) When Rabbit reach turtle then
    stop Rabbit
    Turtle still has old speed = 1
 5) When Turtle.next = Rabbit, this is begin of loop.
    Just set Turtle.next = null
 */

/**
 * Finds loop in linkedList, split loop and returns result true if was looped
 * @param {Cell} firstCell
 * @return {Boolean} isWasLooped
 */
const splitLoopedListByRabbitAndTurtle = (firstCell) => {
    let turtle = firstCell,
        rabbit = firstCell;

    // Rabbit reaches null or Turtle
    while (rabbit.next !== null) {
        turtle = turtle.next;
        rabbit = rabbit.next;

        if (rabbit) {
            rabbit = rabbit.next;

            if (rabbit === turtle) {
                break;
            }
        }
    }

    if (rabbit.next === null) {
        return false;
    }

    // Move Rabbit to thr begin
    rabbit = firstCell;

    // Rabbit reaches Turtle (4)
    while (rabbit !== turtle) {
        turtle = turtle.next;
        rabbit = rabbit.next;
    }

    // Turtle.next reached Rabbit (5)
    while (turtle.next !== rabbit) {
        turtle = turtle.next;
    }

    turtle.next = null;

    return true;
}

module.exports = splitLoopedListByRabbitAndTurtle;
