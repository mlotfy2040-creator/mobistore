let head1 = document.getElementsByTagName("header")[0];
window.onscroll=scrol;

function scrol(){

    if (document.documentElement.scrollTop > 100) {
        head1.style.backgroundColor="#031117";
        head1.style.position=" fixed;";
        head1.style.width=" 100%;";
        head1.style.top="0";
        head1.style.zIndex="1000";
      }
       else {
        document.getElementById("myP").className = "";
      }

      header {
        position: fixed;
        top: 0;
        width: 100%;
        background-color: #fff; /* أو أي لون يناسب تصميمك */
        z-index: 1000; /* علشان يفضل فوق أي عناصر تانية */
      }
      

    
    
}