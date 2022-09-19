$( document.body ).ready(function() {
    overflowAnimate($(".project-container"));
    $("section").scroll(function(){
        $(".project-container").each(function(i){
            overflowAnimate($(this));
        });
    });
    $(".project-container").click(function(){
        if($(this).hasClass("project-click")){
            $(this).removeClass("project-click");
        }
        else{
            $("section").animate({
                scrollTop: $(this).offset().top//TODO Fix fade out on scroll
            }, 200);            
            $(this).addClass("project-click");
        }
        
    })
});

function overflowAnimate($this){
    if($this.position().top < 150){
        $this.addClass("animate-stage-2");
        $this.removeClass("project-click");
        return $this;
    }
    else if($this.position().top - 1.5* $this.height() > $("section").height()){
        $this.addClass("animate-stage-2");
        $this.removeClass("project-click");
        return $this;
    }
    else{
        $this.addClass("animate-stage-1");
        $this.removeClass("animate-stage-2");
        return $this;
    }
}