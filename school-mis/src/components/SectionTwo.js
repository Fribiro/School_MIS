import React from 'react'
import styled from 'styled-components'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const SectionTwoWrapper = styled.div
`
/*-------course -----*/
.course{
    width: 100%;
    margin: auto;
    text-align: center;
    padding-top: 100px;
    background-color: #2c3e50;
    color:#ddd;
    display: block;
    justify-content: center;
    align-items: center;
   
}
h2{
    font-size: 36px;
    font-weight: 600px;
    color: #b6cb58;

}

.cardp{
    color: wheat;
    font-size: 14px;
    font-weight: 300;
    line-height: 22px;
    padding: 10px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 14rem;
}
p{
    color: gray;
    font-size: 14px;
    font-weight: 300;
    line-height: 22px;
    padding: 10px;

}

.card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.row{
    margin: 1rem 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 75%;
}
.course-col{
    background: #fff3f3;
    border-radius: 10px;
    margin: 1rem 1rem;
    width: 33%;
    padding: 20px 12px;
    box-sizing: border-box;
    transition: 0.5s;
}
h3{
    text-align: center;
    font-weight: 600;
    margin: 10px 0;
    color: #333;
}
.course-col:hover{
    box-shadow: 0 0 20px 0px rgba(0,0,0,0.2);
}
@media(max-width:700px){
    .row{
        flex-direction: column;
    }
}

/*---- news ----*/
.facilities{
    


    
}

/*----------slider-----*/
.facilities{
margin: auto;
text-align: center;
padding-top: 100px;
width: 100%;
margin: auto;
text-align: center;
padding-top: 100px;
background-color: #2c3e50;
color:#ddd;
display: block;
justify-content: center;
align-items: center;

}
.slider{
width: 100%;
margin: auto;
padding: 20px 12px;
box-sizing: border-box;
font-family: 'Poppins',sans-serif;
max-width : 1150px;
display: flex;


}
html,body{
    display: grid;
    height: 100%;
    margin:0;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.8em;
    color: #666;
    place-items: center;
    text-align: center;
    background: #f2f2f2;
}
.slider .card{
    background: #fff;
    flex: 1;
    margin: 0 10px;
}
.slider .card .img{
    height: 200px;
    width: 100%;

}
.slider .card .img img{
    height:100%;
    width: 100%;
    object-fit: cover;
}
.slider .card .content{
    padding: 10px 20px;
}
.card .content .title{
    font-size: 25px;
    font-weight: 600;
}
.card .content .sub-title{
    font-size: 20px;
    font-weight: 600;
    color: #b6cb58;
    line-height: 20px;
}
.card .content p{
    text-align: justify;
    margin: 10px 0;
}
.card .content .btn{
    display: block;
    text-align: left;
    margin: 10px 0;
}
.card .content .btn button{
    background: #b6cb58;
    color: #fff;
    border: none;
    outline: none;
    font-size: 17px;
    padding: 5px 8px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s;
}
.card .content .btn button:hover{
    transform: scale(0.9);
}

  .pimg1,.pimg2{
      position: relative;
      opacity: 0.70;
      background-position: center;
      background-size: cover;
      background-repeat:no-repeat ;

      background-attachment: fixed;
  }

  .pimg1{
      background: url(./images/school_4.jpg);
      height: 30vh;
  }
  .pimg2{
      background: url(./images/school_4.jpg);
      height: 40vh;
  }
`

const SectionTwo = () => {
    // $(".slider").owlCarousel({

    // })

    return (
        <SectionTwoWrapper>
            <div class="pimg1">
                <div class="ptext">
                    <span class="border">

                    </span>
                </div>
            </div>

            <section class="course">

                <h2>Courses We Offer</h2>
                <p class="cardp">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="card-container">
                    <div class="row">
                        <div class="course-col">

                            <h3>
                                intermediate
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div class="course-col">

                            <h3>
                                Academy
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div class="course-col">

                            <h3>
                                Secondary
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>

            </section>

            <div class="pimg2">
                <div class="ptext">
                    <span class="border">

                    </span>
                </div>
            </div>

            <section class="facilities">
                <h2> Our News</h2>
                <p class="cardp">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <OwlCarousel class="slider owl-carousel owl-theme">
                    <div class="card item">
                        <div class="img"><img src="../assets/images/pictures/111.jpg" alt="" /></div>
                        <div class="content">
                            <div class="title"> Trial</div>
                            <div class="sub-title"> Dev trial</div>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <div class="btn">
                                <button><a href="https://www.w3schools.com/" target="_blank">Read more!</a></button>
                            </div>
                        </div>
                    </div>
                    <div class="card item">
                        <div class="img"><img src="pictures/111.jpg" alt="" /></div>
                        <div class="content">
                            <div class="title"> Trial</div>
                            <div class="sub-title"> Dev trial</div>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <div class="btn">
                                <button><a href="https://www.w3schools.com/" target="_blank">Read more!</a></button>
                            </div>
                        </div>

                    </div>
                    <div class="card item">
                        <div class="img"><img src="pictures/111.jpg" alt="" /></div>
                        <div class="content">
                            <div class="title"> Trial</div>
                            <div class="sub-title"> Dev trial</div>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <div class="btn">
                                <button><a href="https://www.w3schools.com/" target="_blank">Read more!</a></button>
                            </div>
                        </div>

                    </div>
                    <div class="card item">
                        <div class="img"><img src="pictures/111.jpg" alt="" /></div>
                        <div class="content">
                            <div class="title"> Trial</div>
                            <div class="sub-title"> Dev trial</div>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <div class="btn">
                                <button><a href="https://www.w3schools.com/" target="_blank">Read more!</a></button>
                            </div>
                        </div>

                    </div>
                    <div class="card item">
                        <div class="img"><img src="pictures/111.jpg" alt="" /></div>
                        <div class="content">
                            <div class="title"> Trial</div>
                            <div class="sub-title"> Dev trial</div>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <div class="btn">
                                <button><a href="https://www.w3schools.com/" target="_blank">Read more!</a></button>
                            </div>
                        </div>

                    </div>
                    <div class="card item">
                        <div class="img"><img src="pictures/111.jpg" alt="" /></div>
                        <div class="content">
                            <div class="title"> Trial</div>
                            <div class="sub-title"> Dev trial</div>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <div class="btn">
                                <button><a href="https://www.w3schools.com/" target="_blank">Read more!</a></button>
                            </div>
                        </div>

                    </div>
                </OwlCarousel>
                {/* <script>
            $(".slider").owlCarousel({
                loop : true,
                autoplay : true,
                autoplayTimeout : 3000,
                autoplayHoverPause : true,
            })
        </script> */}
            </section>

        </SectionTwoWrapper>
    )
}

export default SectionTwo