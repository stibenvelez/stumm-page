


window.onscroll = function(){
   let uPrincipal = window.pageYOffset;
  if(uPrincipal === 0){
    document.getElementById("menu").style.background = 'transparent';
    document.getElementById("logo-menu").style.display = 'none';
  }else if(uPrincipal > 0){
   document.getElementById("menu").style.background = '#222';
   document.getElementById("logo-menu").style.display = 'flex';
}

  
}
