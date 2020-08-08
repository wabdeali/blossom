function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  const openPopup = () => {
    target = '#popupauto'
    document.querySelector(target).style.display = 'flex';

  }

  function clickcontact(id){
    target = '#popup' + id;
    document.querySelector(target).style.display = 'flex';
    //document.body.style.overflow="hidden" --- no need of this but its up to you i used fixed in the position of div popup
  }

  
  function clickclose(id){
    target = '#popup' + id;
    document.querySelector(target).style.display = 'none';
  }

  setTimeout(openPopup, 3000);