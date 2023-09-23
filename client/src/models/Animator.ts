import gsap, { Sine, Power2, Elastic, Bounce } from 'gsap';

export interface TimeState {
    hours: number,
    minutes: number,
    seconds: number
}
export enum EndType {
    WIN, GAMEOVER
}
export enum ViewType {
    MINOR, BIG, BOMB
}



function getElement(selector: string): HTMLElement {
    let el: HTMLElement = (document.querySelector(selector) as HTMLElement)
    return el;
}

export function switchView(viewSelector: string) {
    let activeScreen = getElement(".view.active");
    let targetScreen = getElement(`.view.${viewSelector}`);

    let alreadyAnimated = false;
    gsap.to(targetScreen, {
        zIndex: 5,
        scale: 1,
        opacity: 1,
        ease: Elastic.easeOut,
        duration: 1,
        onUpdate: () => {
            if (!alreadyAnimated) {
                switch (viewSelector) {
                    case 'view-win': {
                        animateEndScreen(EndType.WIN, viewSelector);
                        break;
                    }
                    case 'view-gameover': {
                        animateEndScreen(EndType.GAMEOVER, viewSelector);
                        break;
                    }
                    default: {
                        animateCardScreen(viewSelector)
                        break;
                    }
                }
                alreadyAnimated = true;
            }
        },
        onComplete: () => {
            targetScreen.classList.add("active")
        }
    })

    gsap.to(activeScreen, {
        opacity: 0,
        scale: 0.7,
        zIndex: 0,
        duration: 1,
        onComplete: () => {
            activeScreen.classList.remove("active")
        }
    })


}
export function animateEndScreen(mode: EndType, view: string): gsap.Context {
    let ctx = gsap.context(() => {
        gsap.to(`.${view} .chest`, {
            repeat: -1,
            scale: 1.1,
            ease: Elastic.easeOut,
            duration: 1
        })
        gsap.fromTo(`.${view} .splash-text div:not(.prize-div)`, {
            opacity: 0,
            scale: 10
        }, {
            scale: mode == EndType.WIN ? 5 : 3,
            top: "50%",
            ease: Power2.easeIn,
            rotate: "50deg",
            opacity: 0.1,
            duration: 1
        })
        gsap.from(`.${view} .splash-text .prize-div`, {
            scale: 5,
            opacity: 0,
            rotate: "40deg",
            duration: 1
        })
    })
    return ctx;
}

export function animateCardScreen(view: string): gsap.Context {
    let ctx = gsap.context(() => {

        gsap.from(`.view.${view} .info`, {
            backgroundColor: "#2e2a6f",
            ease: Sine.easeIn,
            duration: 0.5
        })
        gsap.from(`.view.${view} .title`, {
            backgroundColor: "#1f1c4a",
            color: "#9490d5",
            ease: Sine.easeIn,
            duration: 0.5
        })
        if (view == "view-bomb") {
            gsap.from(`.${view} .alpha-bomb`, {
                x: "50%",
                y: "-20%",
                rotate: "30deg",
                ease: Bounce.easeOut,
                duration: 2.5
            })
        }
        gsap.from(`.${view} .card .texts:not(.second)`, {
            x: "-50%",
            y: "100%",
            ease: Elastic.easeOut,
            opacity: 0,
            duration: 1.5
        })
        gsap.from(`.${view} .card .texts.second`, {
            x: "50%",
            y: "-100%",
            opacity: 0,
            ease: Elastic.easeOut,
            duration: 1.5
        })
        gsap.from(`.${view} .card img`, {
            scale: 0.5,
            opacity: 0,
            duration: 1.5
        })
    })

    return ctx;
}

export function openMenu() {
    let tl = gsap.timeline();

    let backdrop: HTMLElement = (document.querySelector(".menu .backdrop") as HTMLElement)
    backdrop.onclick = () => {
        tl.reverse();
        gsap.set(".menu", { y: "100%" })
        gsap.set(".menu .drawer", { x: "-100%" })
    }


    gsap.set(".menu", { y: 0 })
    gsap.set(".menu .drawer", { x: "-100%" })


    tl.fromTo(".menu .backdrop", {
        opacity: 0
    }, {
        opacity: 1,
        duration: 0.2
    })
    tl.to(".menu .drawer", {
        x: "0%",
        duration: 0.2
    }, "<0.1")
}

export function updateBombProgress(value: number) {
    gsap.to(".bomb-bar .bar", {
        height: `${value}%`,
        ease: Sine.easeOut,
        duration: 2
    })
}

export function updateModeProgress(value: number) {
    gsap.to(".minor-bar .bar", {
        width: `${value}%`,
        ease: Sine.easeOut,
        duration: 2
    })
}

export function setTimer(time: TimeState) {
    let { hours, minutes, seconds } = time;
    getElement(".time.hour h2").innerText = hours.toString().padStart(2, "0");
    getElement(".time.min h2").innerText = minutes.toString().padStart(2, "0");
    getElement(".time.sec h2").innerText = seconds.toString().padStart(2, "0");

    let interval = setInterval(() => {
        if ((hours > 0) || (minutes > 0) || (seconds > 0)) {
            if (seconds == 0) {
                if (minutes == 0) {
                    if (hours == 0) {
                        console.log("done counting")
                        clearInterval(interval)
                    } else {
                        hours--;
                        seconds = 59;
                        minutes = 59;
                    }
                } else {
                    seconds = 59;
                    minutes--;
                }
            } else {
                seconds--;
            }


            getElement(".time.hour h2").innerText = hours.toString().padStart(2, "0");
            getElement(".time.min h2").innerText = minutes.toString().padStart(2, "0");
            getElement(".time.sec h2").innerText = seconds.toString().padStart(2, "0");
            return;
        }
        console.log("done counting")
        clearInterval(interval)
    }, 1000)
}
