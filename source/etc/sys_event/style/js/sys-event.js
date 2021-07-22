document.addEventListener("DOMContentLoaded", function(event) { 
    
    // функция обратного отсчёта для цифрового прогресс бара
    let countdown1 = function(data_seconds)
    {
        if(data_seconds >= 0)
        {
            let total_seconds = data_seconds;
            let minutes = parseInt(total_seconds / 60);
            let seconds = total_seconds % 60;

            minutes = minutes.toString().padStart(2, 0);
            seconds = seconds.toString().padStart(2, 0);
            
            document.querySelector("#timer1 .minutes").innerText = minutes;
            document.querySelector("#timer1 .seconds").innerText = seconds;
            
            setTimeout(function(){
                countdown1(parseInt(total_seconds - 1));
            }, 1000);
        }
        else
        {
            // время закончилось
        }      
    }

    // функция обратного отсчёта для прогресс баров фоном и полосой.
    let countdown2 = function(wrapper, data_seconds)
    {
        if(data_seconds >= 0)
        {
            let total_seconds = data_seconds;
            let source_seconds = document.querySelector(wrapper).dataset.seconds;
            let percent = total_seconds / (source_seconds / 100);
            let progress_bar = document.querySelector(wrapper + " .progress_bar");
            
            // начиная с 25% процентов окрашиваем пргресс в красный
            if(percent <= 25)
            {
                progress_bar.style.backgroundColor = "#ff6161";
            }

            progress_bar.style.width = percent + "%";
            progress_bar.style.transition = "all 1.3s ease-out";
            
            // вызов самой себя с уменьшенным значением аргумента
            setTimeout(function(){
                countdown2(wrapper, parseInt(total_seconds - 1));
            }, 1000);
        }
        else
        {
            // время закончилось
        }
    }

    // нажатие на кнопку "поехали"
    document.querySelector(".contest_fixed .start_btn").onclick = () => {

        document.querySelector(".contest_start").classList.add("active");
        document.querySelector(".contest_fixed").classList.add("active");

        // запуск прогресс бара - таймер
        countdown1(parseInt(document.querySelector("#timer1").dataset.seconds));
        // запуск прогресс бара - полоса
        countdown2("#timer2", parseInt(document.querySelector("#timer2").dataset.seconds));
        // запуск прогресс бара - фон
        countdown2(".background_progress", parseInt(document.querySelector(".background_progress").dataset.seconds));
    }

    

    

});