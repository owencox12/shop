window.addEventListener("load", function(){
    let timer1 = new Timer(".timer", 20, 1000)
    let timer2 = new Timer(".timer2", 50, 500)
    let timer3 = new TimerComponent(".timer3", 4000, 1000)
    timer1.start();
    timer2.start();
    timer3.start();
    let btnTimer = document.querySelector(".timer_button")
    btnTimer.addEventListener("click", function(){
        timer1.stop();
        btnTimer.disabled = true;
        btnTimer.innerText = "Скидка Ваша!"
        timer2.stop();
        timer3.stop();
    })
    const resh = {
        plus: function(num1, num2) {return num1 + num2},
        minus: function(num1, num2) {return num1 - num2},
        delenie: function(num1, num2) {return num1 / num2},
        umnojenie: function(num1, num2) {return num1 * num2}
    }
    let btn = document.querySelector(".btn")
    let num1 = document.querySelector(".number1")
    let num2 = document.querySelector(".number2")
    let znak = document.querySelector(".select")
    let result = document.querySelector(".result")
    const form = document.querySelector('form')
    let batton = document.getElementById("btnj")
    let p = document.getElementById("paragraph")
    btnj.addEventListener("click", function(){
        for(let i = 0; i < 100; i++) {
            p.innerHTML += i
        }
    })
    
    btn.addEventListener('click', function(){
        num1 = parseInt(num1.value)
        num2 = parseInt(num2.value)
        let mor = znak.value
        fn = resh[mor]
        let res = fn(num1, num2)
    
        result.innerHTML = res
        btn.disabled = true;
        if(isNaN(res)) {
            result.innerHTML = "Error"
        }
        form.addEventListener("input", function(e){
            btn.disabled = false;
        })
    })
    let buttonS = document.querySelector(".btn2")
    let text = document.querySelector(".text")
    
    let state = {
        text: "Успешная авторизация!",
        onText: false,
        Error: "Введите пароль для входа!",
        Exit: "Успешный выход!",
        Password: [
            "Admin", "qwer567", "admin"
        ]
    }
    let exitBtn = document.querySelector(".descr_btn2")
    let descr = document.querySelector(".descr")
    let descrResult = document.querySelector(".descr_result")
    
    exitBtn.addEventListener("click", function(){
        buttonS.disabled = false;
        descr.value = ""
        exitBtn.disabled = true;
        text.innerHTML = state.Exit
    })
    exitBtn.disabled = true;
    
    buttonS.addEventListener("click", function(e){
        e.preventDefault()
        if (descr.value ===  state.Password[0]) {
            buttonS.disabled = true;
            exitBtn.disabled = false;
            state.onText = !state.onText
            text.innerHTML = state.onText ? state.text : null
        }
        else {
            text.innerHTML = state.Error
        }
        
    })
})
class Timer {
    constructor(selector, number, sec) {
        this.timer = document.querySelector(selector)
        this.i = number
        this.sec = sec
        let interval;
    }
    render() {
        this.timer.innerHTML = "Скидка кончится через:" + this.i
    }
    start() {
        this.interval = setInterval(() => {
            this.i--
            this.render();
            if (this.i <= 0) {
                clearInterval(this.interval)
            }
        }, this.sec)  
        
    }
    stop() {
        clearInterval(this.interval)
    }
}

class TimerComponent extends Timer {
    render() {
        let h = parseInt(this.i / 3600);
		let hs = this.i % 3600;
		let m = parseInt(hs /  60);
		let s = hs % 60;
		this.timer.innerHTML = `${h}:${m}:${s}`;
    }
}