let Header = () =>{
    return (
    <section id="nav">
        <nav class="navbar navbar-expand-lg navbar-light  mynav">
            <a class="navbar-brand" href="index.html">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav text-center ml-5 ">
                    <li class="nav-item active">
                        <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="course.html">Courses</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="registration.html">Registration</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="video.html">Videos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact Us</a>
                    </li>
                    <li class="nav-item"  id="login">
                        <a class="nav-link" href="#"><i class="fa fa-graduation-cap"></i>
                            Student login </a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="subtitle">
        <p class="headline mt-5"><span class="line">women online institute for islamic education</span></p>
    </div>

    </section>
    );
};
export default Header;