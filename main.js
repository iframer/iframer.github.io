function move() {
    const link = document.getElementById("linkInput").value;

    if (link.startsWith("http://") || link.startsWith("https://")) {
        location.href = `load.html?src=${btoa(link)}`;
    } else {
        alert("Please enter a valid link starting with http:// or https://");
    }
}

function setIframe() {
    const urlParams = new URLSearchParams(window.location.search);
    
    let url = urlParams.get('src');
    url = atob(url);
    
    const urlBuilt = new URL(url);

    document.title = urlBuilt.hostname;
    document.getElementById("iframe").src = url;
}