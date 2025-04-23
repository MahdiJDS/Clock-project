//داک های تایم
let clock = document.querySelector('.showTime');
let dater = document.querySelector('.showDate');

//نشانگر تایم
function time(){ setTimeout(()=>{
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    // let secondF = second.toString().padStart(2 , '0');
    clock.innerHTML = hour+":"+minute+":"+second;
    dater.innerHTML = date;
})
};

setInterval(time,1000);




//داک های تایمر
let start = document.querySelector('.btnstart');
let end = document.querySelector('.btnend');
let secondTimerId = null;
let minuteTimerId = null;
let hourTimerId = null;
let ti = 0 ;

//شروع تایمر
function timer() {
    let countsecond = 0;
    let countminute = 0;
    let counthour = 0;

    start.disabled = true;
    end.disabled = false;

    // مقدار اولیه را قبل از شروع تایمرها نمایش دهید تا تاحیر تایمی نداشته باشیم
    document.querySelector('#second').innerHTML = countsecond.toString().padStart(2, '0');
    document.querySelector('#minute').innerHTML = countminute.toString().padStart(2, '0');
    document.querySelector('#hour').innerHTML = counthour.toString().padStart(2, '0');

    // تایمر ثانیه
    secondTimerId = setInterval(() => {
        countsecond += 1;
        if (countsecond > 59) {
            countsecond = 0;
        }
        document.querySelector('#second').innerHTML = countsecond.toString().padStart(2, '0');
        ti += 1;
    }, 1000);

    // تایمر دقیقه
    minuteTimerId = setInterval(() => {
        countminute += 1;
        if (countminute > 59) {
            countminute = 0;
        }
        document.querySelector('#minute').innerHTML = countminute.toString().padStart(2, '0');
    }, 60000);

    // تایمر ساعت
    hourTimerId = setInterval(() => {
        counthour += 1;
        document.querySelector('#hour').innerHTML = counthour.toString().padStart(2, '0');
    }, 3600000);
}

start.addEventListener('click',timer);

function TimerEnd(){

    end.disabled = true ;

    clearInterval(secondTimerId);
    clearInterval(minuteTimerId);
    clearInterval(hourTimerId);
}

//پایان تایمر
end.addEventListener('click',TimerEnd)

//again 
let again = document.querySelector('.btnagain');

again.addEventListener('click',()=>{

    start.disabled = false;
    
    alert(`تایمر در ثانیه ${ti} اتمام یافت`);
    ti = 0 ;

    document.querySelector('#second').innerHTML = '00';
    document.querySelector('#minute').innerHTML = '00';
    document.querySelector('#hour').innerHTML = '00';

    TimerEnd();

})


//مشخص کردن منو
let text1 = document.querySelector('.timeA');

text1.addEventListener('click',()=>{
    text2.style = "";
    text3.style = "";
    // text2.removeAttribute("style");
   text1.style.cssText = `
   font-size: 30px;
   text-shadow: 0px 0px 10px 10px;
    text-decoration:underline;
    transition: all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
   `
});




let text2 = document.querySelector('.timerA');

text2.addEventListener('click',()=>{
    // text1.style = "";
   text1.removeAttribute("style");
   text3.removeAttribute("style");
   text2.style.cssText = `
   font-size: 30px;
   text-shadow: 0px 0px 10px 10px;
    text-decoration:underline;
    transition: all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
   `
});


let text3 = document.querySelector('.stoper');

text3.addEventListener('click',()=>{
    // text1.style = "";
   text1.removeAttribute("style");
   text2.removeAttribute("style");
   text3.style.cssText = `
   font-size: 30px;
   text-shadow: 0px 0px 10px 10px;
    text-decoration:underline;
    transition: all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
   `
});

// تعریف مشاهده‌گر تقاطع
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            text2.style = "";
            text3.style = "";
   
            text1.style.cssText = `
                font-size: 30px;
                text-shadow: 0px 0px 10px 10px;
                text-decoration:underline;
                transition: all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                 `
        }
        else {
            text1.removeAttribute("style");
            // text2.style.cssText = `
            //      font-size: 30px;
            //      text-shadow: 0px 0px 10px 10px;
            //      text-decoration:underline;
            //      transition: all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            //       `
        }
    });
});



// اعمال مشاهده‌گر به عنصر
observer.observe(clock);

// تعریف مشاهده‌گر تقاطع
const observer1 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            text1.style = "";
            text3.style = "";
   
            text2.style.cssText = `
                font-size: 30px;
                text-shadow: 0px 0px 10px 10px;
                text-decoration:underline;
                transition: all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                 `
        }
        else {
            text2.removeAttribute("style");
            // text2.style.cssText = `
            //      font-size: 30px;
            //      text-shadow: 0px 0px 10px 10px;
            //      text-decoration:underline;
            //      transition: all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            //       `
        }
    });
});

// اعمال مشاهده‌گر به عنصر
observer1.observe(start);


// تعریف مشاهده‌گر تقاطع
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            text2.style = "";
            text1.style = "";
   
            text3.style.cssText = `
                font-size: 30px;
                text-shadow: 0px 0px 10px 10px;
                text-decoration:underline;
                transition: all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                 `
        }
        else {
            text3.removeAttribute("style");
            // text2.style.cssText = `
            //      font-size: 30px;
            //      text-shadow: 0px 0px 10px 10px;
            //      text-decoration:underline;
            //      transition: all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            //       `
        }
    });
});
let obs = document.querySelector('.timeSlop');
// اعمال مشاهده‌گر به عنصر
observer2.observe(obs);

//زمان سنج
let inpstart = document.querySelector('.inpstart');
let inpend = document.querySelector('.inpend');
let inpagain = document.querySelector('.inpagain');
let timerId = null;
function timeStop() {
    let inpsecond = parseInt(document.querySelector('.inpsecond').value) || 0;
    let inpminute = parseInt(document.querySelector('.inpminute').value) || 0;
    let inphour = parseInt(document.querySelector('.inphour').value) || 0;

    inpstart.disabled = true;
    inpend.disabled = false;

    // مقدار اولیه
    document.querySelector('#secondS').innerHTML = inpsecond.toString().padStart(2, '0');
    document.querySelector('#minuteS').innerHTML = inpminute.toString().padStart(2, '0');
    document.querySelector('#hourS').innerHTML = inphour.toString().padStart(2, '0');

    //اعتبار سنجی
    if (
        isNaN(inpsecond) || inpsecond < 0 || inpsecond > 59 ||
        isNaN(inpminute) || inpminute < 0 || inpminute > 59 ||
        isNaN(inphour) || inphour < 0
    ) {
        alert('Please enter valid numbers:\n- Seconds and minutes must be between 0 and 59.\n- Hours must be 0 or greater.');
        return; 
    }
    // تایمر
     timerId = setInterval(() => {
        inpsecond -= 1;
      
        if (inpsecond < 0) {
            inpsecond = 59;
            inpminute -= 1;

            if (inpminute < 0) {
                inpminute = 59;
                inphour -= 1;

                if (inphour < 0) {
                    inphour = 0;
                    inpminute = 0;
                    inpsecond = 0;
                    clearInterval(timerId); // تایمر را متوقف کنید
                    alert("timer is End!!");
                    document.querySelector('.contact3').classList.add("togle");
                }
            
            }
        }

        // به‌روزرسانی نمایش
        document.querySelector('#secondS').innerHTML = inpsecond.toString().padStart(2, '0');
        document.querySelector('#minuteS').innerHTML = inpminute.toString().padStart(2, '0');
        document.querySelector('#hourS').innerHTML = inphour.toString().padStart(2, '0');
    }, 1000);
}

inpstart.addEventListener('click', timeStop);


function TimerEndS(){

    inpend.disabled = true ;

    clearInterval(timerId);
}

//پایان تایمر
inpend.addEventListener('click',TimerEndS);

inpagain.addEventListener('click',()=>{

    inpstart.disabled = false;
    
    document.querySelector('.inpsecond').value = 0;  
    document.querySelector('.inpminute').value = 0;  
    document.querySelector('.inphour').value = 0;    
    document.querySelector('#secondS').innerHTML = '00';
    document.querySelector('#minuteS').innerHTML = '00';
    document.querySelector('#hourS').innerHTML = '00';
    
    document.querySelector('.contact3').classList.remove("togle");
    TimerEndS();

});

// analog

function analog(){
    const nowA = new Date();
    const hourA = nowA.getHours() % 12;
    const minuteA = nowA.getMinutes();
    const secondA = nowA.getSeconds();

    const hourdeg = (hourA * 30) + (0.5 * minuteA);
    const minutedeg = (minuteA * 6) + (0.1 * secondA);
    const seconddeg = (secondA * 6);
    console.log(hourdeg);

    document.getElementById('houre-hand').style.transform = `translateX(-50%) rotate(${hourdeg}deg)`;
    document.getElementById('minute-hand').style.transform = `translateX(-50%) rotate(${minutedeg}deg)`;
    document.getElementById('second-hand').style.transform = `translateX(-50%) rotate(${seconddeg}deg)`;

    
}
setInterval(analog,1000);