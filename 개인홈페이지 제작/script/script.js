(function(){
    class Obj{
        init(){
            this.header();
            this.section1();
            this.section2();
            this.footer();
            this.modal();
        }
        header(){
            
            $('.main-btn').on({
                mouseenter(){
                    $('.sub').stop().slideUp(0);
                    $(this).next().stop().slideDown(200);
                    $('.main-btn').removeClass('on');
                    $(this).addClass('on');
                }
            })
            $('.col').on({
                mouseleave(){
                    $('.sub').stop().slideUp(200);
                    $('.main-btn').removeClass('on');
                }
            })
        }
        section1(){
        
        }
        section2(){
            let cnt=0;
            
            function mainSlide(){
                $('.slide-wrap').stop().animate({top:`${-100*cnt}%`},600, function(){
                    if(cnt>2){cnt=0}
                    $('.slide-wrap').stop().animate({top:`${-100*cnt}%`},0);
                });
            }
            function nextCount(){
                cnt++;
                mainSlide();
            }

            function autoTimer(){
                setInterval(nextCount, 3000);
            }
            autoTimer();
        }
        footer(){
            console.log('.footer');
        }
        modal(){
            // 모달 열기
            $('.notice-btn').on({
                click(e){
                    e.preventDefault();
                    $('.modal').show();
                }
            })
            
            // 모달 닫기
            $('.close-btn').on({
                click(e){
                    e.preventDefault();
                    $('.modal').hide();
                }
            })
        

        }
    }
    obj=new Obj();
    obj.init();

    
})(jQuery);