let navigation = document.getElementById("navigation");

navigation.innerHTML += `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<div class="container px-5">
    <a class="navbar-brand" href="index.html">IODump</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation"><span
            class="navbar-toggler-icon"></span></button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
            <li class="nav-item"><a class="nav-link" href="gallery.html">Gallery</a></li>
            <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
            <li class="nav-item"><a class="nav-link" href="faq.html">FAQ</a></li>
        </ul>
    </div>
</div>
</nav>`;



let footer = document.getElementById("footer");

footer.innerHTML += `<footer class="bg-dark py-4 mt-auto">
<div class="container px-5">
    <div class="row align-items-center justify-content-between flex-column flex-sm-row">
        <div class="col-auto">
            <div class="small m-0 text-white">Copyright &copy; IODump 2022</div>
        </div>
        <div class="col-auto">
            <a class="link-light small" href="contact.html">Contact</a>
        </div>
    </div>
</div>
</footer>`;
