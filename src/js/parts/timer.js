function timer(){
    
   let deadline = '2019-12-29';
   
   function gettime(endtime){
       let t = Date.parse(endtime) - Date.parse(new Date()),
           s = Math.floor((t/1000)% 60),
           m = Math.floor((t/1000/60)%60),
           h = Math.floor((t/(1000 * 60 * 60)));

           return {
               'total': t,
                'hours': h,
                'min': m,
                'sec': s
           };
   }
    function setClock(id,endtime){
        let timer =document.getElementById(id),
            h = timer.querySelector('.hours'),
            m = timer.querySelector('.minutes'),
            s = timer.querySelector('.seconds');
            setInterval = setInterval(update,1000);

            function update(){
            let tt = gettime(endtime);

                function zero(value){
                    if(value <= 9){
                       return '0' + value;
                    } return value;
                }    

                h.textContent = zero(tt.hours - 3);
                // if (h.textContent.length == 1){
                //     h.textContent = '0' + tt.hours;
                // } else { h.textContent = tt.hours;}

                m.textContent = zero(tt.min);
                // if (m.textContent.length == 1){
                //     m.textContent = '0' + tt.min;
                // } else { m.textContent = tt.min;}
                
                s.textContent = zero(tt.sec);
                // if (s.textContent.length == 1){
                //     s.textContent = '0' + tt.sec;
                // } else { s.textContent = tt.sec;}
            
                if(tt.total <= 0){
                    clearInterval(setInterval);
                    s.textContent = '00';
                    m.textContent = '00';
                    h.textContent = '00';
                }
        }
    }
    setClock('timer',deadline);
}

module.exports  = timer;
