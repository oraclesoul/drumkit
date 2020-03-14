alert("Java script is working");

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) 
{   
   
    document.querySelectorAll("button")[i].addEventListener("click",function()
    { 
          var ch=this.innerHTML; 

        switch (ch) 
        {    
        

            case 'a':
                var a = new Audio("sounds/crash.mp3");
                a.play();
                break;
            case 's':
                var s=new Audio("sounds/kick-bass.mp3");
                s.play();
                break;
            case 'd':
                var d=new Audio("sounds/snare.mp3");
                d.play();
                break;
            case 'f':
                var f=new Audio("sounds/tom-1.mp3");
                f.play();
                break;
            case 'g':
                var g=new Audio("sounds/tom-2.mp3");
                g.play();
                break;
            case 'h':
                var h=new Audio("sounds/tom-3.mp3");
                h.play();
                break;
            default:alert("no match");
            break;
            

        }
    })

    document.querySelectorAll(".drum")[i].addEventListener("keypress",function(event)
    {   
        keyboardsound(event.key);
         
    });

    function keyboardsound(key){
           
        switch(key) 
        {    
        

            case 'a':
                var a = new Audio("sounds/crash.mp3");
                a.play();
                break;
            case 's':
                var s=new Audio("sounds/kick-bass.mp3");
                s.play();
                break;
            case 'd':
                var d=new Audio("sounds/snare.mp3");
                d.play();
                break;
            case 'f':
                var f=new Audio("sounds/tom-1.mp3");
                f.play();
                break;
            case 'g':
                var g=new Audio("sounds/tom-2.mp3");
                g.play();
                break;
            case 'h':
                var h=new Audio("sounds/tom-3.mp3");
                h.play();
                break;
            default:alert("no match");
            break;
        }   
    }
}