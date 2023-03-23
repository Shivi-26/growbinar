import React from 'react';
import './App.css';
import Phone from './phone';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import img1 from './images/search2.jpg';
import img2 from './images/slide.png';
import img3 from './images/satya.png';
export default function App() {
    return (
        <div>
            <div className='contain'>
                <nav className='d-flex'>
                    <img src="https://media.licdn.com/dms/image/D560BAQEQ-KGYhPajJQ/company-logo_200_200/0/1666896719984?e=1687392000&v=beta&t=ahggY_4x-h4jXPIdU5OJ42n96L8IXjRq5Am5tNhY0DQ" className='ms-5 mt-3' height="37" width="40" alt="" />
                    <h4 className='text-primary mt-3'>Grow</h4>
                    <h4 className='mt-3'>binar.</h4>
                    <form className='form-group'>
                        <div className="input-group d-flex mt-2">
                            <input type="text" className="form-control" placeholder="Search event,course,mentor" />
                            <img src={img1} height="20" weight="30" className="search" alt="search icon" />
                        </div>
                    </form>
                    <li class="nav-item list-inline mt-3 ms-5">
                        <a class="nav-link text-dark" href="/"><b>Home</b></a>
                    </li>
                    <li class="nav-item list-inline mt-3">
                        <a class="nav-link ms-5" href="/Features"><b>Events</b></a>
                    </li>
                    <li class="nav-item list-inline mt-3">
                        <a class="nav-link ms-5" href="/Layouts"><b>Be a Mentor</b></a>
                    </li>
                    <div className=''>
                        <button className='btn btn-outline-primary ms-5 mt-2'>Log in</button>
                        <button className='btn btn-primary mt-2 but'>Sign UP</button>
                    </div>
                </nav>

                <div className='bits'>
                    <div className='b'>
                        <div className='container mt-3 d-flex'>
                            <div className='mt-5'>
                                <h1 className='fs-2 ms-5 mt-5'><b>Get a career GPS with the help from top mentors around the globe.</b></h1>
                                <p className='fs-6 ms-5 text-primary mt-2'>Get started to grow your career with mentorship from the experienced people from the world's top organizations.  </p>
                                <button className='btn-hover color-3 ms-5 mt-3'>Explore by Expertise</button>
                            </div>
                            <div class="container ms-5 mt-5">
                                <div class="row">
                                    <div className='col-md-6 ms-5 awadh'>
                                        <img src="https://media.licdn.com/dms/image/C5622AQEyUyhJ6F8zlA/feedshare-shrink_800/0/1678077369679?e=2147483647&v=beta&t=cWg3PutQRsVB_iO5ul3y_1zzxTKP59NRofz9XB9lZ6Q" height="120" width="210" className=' ms-5 rounded-top rounded-bottom' alt="" />
                                    </div>
                                    <div className='col-md-2 mt-5 ms-5 awadh'>
                                        <img src="https://media.licdn.com/dms/image/C5622AQEYUJwIrCgBMQ/feedshare-shrink_800/0/1678500689460?e=1681948800&v=beta&t=5ENw8I-R7HMkh6HLZL1KSkO_bdqP3D8btvL484moyu4" height="130" width="210" className='ms-5 rounded-top rounded-bottom' alt="" />
                                    </div>
                                    <div className='col-md-6 ms-5 awadh'>
                                        <img src="https://media.licdn.com/dms/image/C4D22AQHCjT7moNCZRg/feedshare-shrink_800/0/1675934759319?e=1680739200&v=beta&t=vR-l5WZvANINCWAl-SNJDcOJ3oI_hIinaA7c0lrXHgY" height="140" width="230" className='ms-5 rounded-top rounded-bottom' alt="" />
                                    </div>
                                    <div className='col-md-2 mt-5 ms-5 awadh'>
                                        <img src="https://media.licdn.com/dms/image/C5622AQH23v2OSiwzLQ/feedshare-shrink_800/0/1669276262143?e=2147483647&v=beta&t=KD7cXfnPUbY19kCSLwttQp3rIofkTZZTUVK1WNf4wfA" height="140" width="230" className='ms-5 rounded-top rounded-bottom' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className='navbar-light bg-light shadow-lg'>
                    <p className='text-center mt-3'><b>Mentors from top Organizations</b></p>
                    <div className='d-flex justify-content-center'>
                        <img src="https://aniportalimages.s3.amazonaws.com/media/details/PAYUAYYAAYAJAJJAA20220805073246.jpg" height="53" width="75" className='ms-2' alt="" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" height="50" width="65" className='ms-5' alt="" />
                        <img src="https://static.dezeen.com/uploads/2021/11/meta-facebook-rebranding-name-news_dezeen_2364_col_hero2.jpg" height="55" width="82" className='ms-5' alt="" />
                        <img src="https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg" height="60" width="89" className='ms-5' alt="" />
                        <img src="https://worldgbc.s3.eu-west-2.amazonaws.com/wp-content/uploads/2022/08/08145403/Deloitte_Logo.png" height="50" width="90" className='ms-5' alt="" />
                        <img src="http://coursera-university-assets.s3.amazonaws.com/3d/5b6b32681044ec8f55baa5531c10a2/Acc_Logo_Black_Purple_RGB.png" height="65" width="96" className='ms-5' alt="" />
                        <img src="https://1000logos.net/wp-content/uploads/2017/09/Uber-logo.jpg" height="43" width="65" className='ms-5' alt="" />
                        <img src="https://www.tata.com/content/dam/tata/images/home-page/desktop/logo_card_desktop_362x362.jpg" height="55" width="79" className='ms-5' alt="" />
                        <img src="https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png" height="74" width="130" className='ms-5' alt="" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/EY_logo_2019.svg/1200px-EY_logo_2019.svg.png" height="30" width="35" className='ms-5' alt="" />
                    </div>
                </nav>
                <div className='d-flex galaxy'>
                    <div className='container mt-5 ms-5'>
                        <h1><b>it was never this</b></h1>
                        <h1 className='text-primary'><b>Easy</b></h1>
                        <p className='mt-5'><b>Match with your mentor based on <br />your goal and just started to<br /> the journey of your growth.</b></p>
                        <button className='btn-hover color-3 mt-2'>Get Started</button>
                    </div>

                    <div className='card h-100 w-50 border-primary rounded-top rounded-bottom'>
                        <p className='text-center'>Hi, Mayank I wanted your help with my</p>
                        <p className='text-primary text-center'>Design portfolio feedback.</p>
                    </div>

                    <div class="container mt-2 second">
                        <div class="row">
                            <div class="col-md-2">
                                <img src="https://img.freepik.com/premium-photo/teenager-student-girl-yellow-pointing-finger-side_1368-40175.jpg" alt="test" height="200" width="180" class="img-responsive rounded-top rounded-bottom" />
                                <div class="carousel slide">
                                    <div class="carousel-caption">
                                        <p className='d-flex'><b>Mayuri Shah</b></p>
                                        <p className='me-5'>Student</p>
                                    </div>
                                    <img src={img2} height="300" width="450" className='img-responsive rounded-top rounded-bottom slide ' alt="" />
                                    <img src={img3} height="200" width="180" className='img-responsive alexa' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card h-100 w-50 bg-primary tech-card'>
                        <p className='text-center text-white'>Yeah Sure, Lets's have a meet</p>
                    </div>
                </div>
            </div>
            <Phone />
        </div>

    )
}