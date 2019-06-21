import Vue from 'vue'

  Vue.filter('dateFormatter',function(data,pattern=""){//pattern=""  如果没有传参数就是undefined ,用toLowerCase的时候就会报错，这样表示没有参数就是空字符串
        var dt=new Date(data);
        var y=dt.getFullYear();
        //ES6-----padStart 用法string.padStart(补齐的最大位数，‘用什么补齐’)----往前补齐
        //padEnd   向后补齐
        var m=(dt.getMonth()+1).toString().padStart(2,"0");
        var d=dt.getDate().toString().padStart(2,"0");

          if(pattern.toLowerCase()=='yyyy-mm-dd'){
              return `${y}-${m}-${d}`;
          }else{
            var hh=dt.getHours().toString().padStart(2,"0");
            var mm=dt.getMinutes().toString().padStart(2,"0");
            var ss=dt.getSeconds().toString().padStart(2,"0");
            return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
          }
      })




