function loadPage(page) {
    var user =  localStorage.getItem('username');
    if(user === null){
        window.location.href = "index.html";
    }else{
        switch (page) {
            case 'dashboard':
                window.location.href = "dashboard.html";
                break;
            case 'reports':
                window.location.href = "reports.html";
                break;
            default:
                window.location.href = "index.html";
                break;
        }
    }
   
}