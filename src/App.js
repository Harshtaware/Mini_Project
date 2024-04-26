import React from 'react'
import Image1 from './images/anne.jpg';
import Image2 from './images/barca.jpg';
import Image3 from './images/ci.jpg';
import Image4 from './images/cover.jpg';
import Image5 from './images/dive.jpg';
import Image6 from './images/galgadot.webp';
import Image7 from './images/goa.jpg';
import Image8 from './images/hiking.jpg';
import Image9 from './images/hill.jpg';
import Image10 from './images/hima.jpg';
import Image12 from './images/london.jpg';
import Image13 from './images/mad.jpg';
import Image14 from './images/mal.jpg';
import Image15 from './images/night.jpg';
import Image16 from './images/russia.webp';
import Image17 from './images/speed.jpg';
import Image18 from './images/sydney.webp';
import Image19 from './images/time.avif';
import Image20 from './images/tokyo.jpg';
import Image21 from './images/tom-cruise-oblivion-brazil-premiere-19.jpg';
import Image22 from './images/varkala.jpg';
import Image23 from './images/vini.jpg';
import Image24 from './images/virat.webp';
function App() {
  return (
    <div>
      <header class="header">
      <nav>
        <div class="nav__logo"><a href="#">TRIPIIGO</a></div>
        <ul class="nav__links">
          <li class="link"><a href="#home">Home</a></li>
          <li class="link"><a href="#trending">Trending</a></li>
          <li class="link"><a href="#destination">Destinations</a></li>
          <li class="link"><a href="#guide">Guide</a></li>
          <li class="link"><a href="#client">Client</a></li>
        </ul>
      </nav>
      <div class="section__container header__container" id="home">
        <h1>Explore the beauty of nature Discover the new you</h1>
        <div class="header__form">
          <form action="/">
            <div class="input__group">
              <label for="destination">Where do you want to go?</label>
              <input type="text" placeholder="Country, ZIP" />
            </div>
            <div class="input__group">
              <label for="checkIn">Check In</label>
              <input type="text" placeholder="Choose a date" />
            </div>
            <div class="input__group">
              <label for="CheckOut">Check Out</label>
              <input type="text" placeholder="Choose a date" />
            </div>
            <div class="input__group">
              <label for="guests">Guests</label>
              <input type="text" placeholder="Number of guests" />
            </div>
            <button class="btn">CHECK AVAILABILITY</button>
          </form>
        </div>
      </div>
    </header>
    <section class="section__container trending__container" id="trending">
      <div class="section__header">
        <h2 class="section__title">Trending 2023</h2>
        <div class="section__nav">
          <span><i class="ri-arrow-left-s-line"></i></span>
          <span><i class="ri-arrow-right-s-line"></i></span>
        </div>
      </div>
      <div class="trending__grid">
        <div class="trending__card">
          <img src={Image8} alt="trending" />
          <h1>Mountain Hiking Tour</h1>
          <p>Hiking Our | Stoke On Trent</p>
          <div class="trending__details">
            <div class="price">
              <p>From</p>
              <h3>Rs. 25,750</h3>
              <p>*Price varies</p>
            </div>
            <div class="trending__ratings">
              <div>
                <span><i class="ri-star-fill"></i></span>
                <span><i class="ri-star-fill"></i></span>
                <span><i class="ri-star-fill"></i></span>
                <span><i class="ri-star-half-fill"></i></span>
                <span><i class="ri-star-line"></i></span>
              </div>
              <p>4.8 (10)</p>
            </div>
          </div>
          <h5>
            <span><i class="ri-time-line"></i></span> 7 days
          </h5>
          <p>
            <span><i class="ri-check-line"></i></span> Free Cancellation
          </p>
        </div>
        <div class="trending__card">
          <img src={Image5} alt="trending" />
          <h1>Skydiving</h1>
          <p>Adventure Journey | Group Tour</p>
          <div class="trending__details">
            <div class="price">
              <p>From</p>
              <h3>RS. 50,050</h3>
              <p>*Price varies</p>
            </div>
            <div class="trending__ratings">
              <div>
                <span><i class="ri-star-fill"></i></span>
                <span><i class="ri-star-fill"></i></span>
                <span><i class="ri-star-fill"></i></span>
                <span><i class="ri-star-half-fill"></i></span>
                <span><i class="ri-star-line"></i></span>
              </div>
              <p>4.2 (25)</p>
            </div>
          </div>
          <h5>
            <span><i class="ri-time-line"></i></span> 3 days
          </h5>
          <p>
            <span><i class="ri-check-line"></i></span> Free Cancellation
          </p>
        </div>
        <div class="trending__card">
          <img src={Image22} alt="trending" />
          <h1>Beach Life</h1>
          <p>Scenic Beauty | Adrenaline Rush</p>
          <div class="trending__details">
            <div class="price">
              <p>From</p>
              <h3>RS. 74,500</h3>
              <p>*Price varies</p>
            </div>
            <div class="trending__ratings">
              <div>
                <span><i class="ri-star-fill"></i></span>
                <span><i class="ri-star-fill"></i></span>
                <span><i class="ri-star-fill"></i></span>
                <span><i class="ri-star-half-fill"></i></span>
                <span><i class="ri-star-line"></i></span>
              </div>
              <p>4.5 (15)</p>
            </div>
          </div>
          <h5>
            <span><i class="ri-time-line"></i></span> 6 days
          </h5>
          <p>
            <span><i class="ri-check-line"></i></span> Free Cancellation
          </p>
        </div>
      </div>
    </section>

    <section class="section__container destination__container" id="destination">
      <div class="section__header">
        <h2 class="section__title">Top Destinations</h2>
        <div class="section__nav">
          <span><i class="ri-arrow-left-s-line"></i></span>
          <span><i class="ri-arrow-right-s-line"></i></span>
        </div>
      </div>
      <div class="destination__grid">
        <div class="destination__card">
          <img src={Image10} alt="destination" />
          <div class="badge">4.7</div>
          <div class="destination__details">
            <h4>Himalayas</h4>
            <p>Mountains</p>
          </div>
        </div>
        <div class="destination__card">
          <img src={Image2} alt="destination" />
          <div class="badge">4.5</div>
          <div class="destination__details">
            <h4>Barcalona</h4>
            <p>Beauty</p>
          </div>
        </div>
        <div class="destination__card">
          <img src={Image20} alt="destination" />
          <div class="badge">4.3</div>
          <div class="destination__details">
            <h4>Tokyo</h4>
            <p>Tradition</p>
          </div>
        </div>
        <div class="destination__card">
          <img src={Image14} alt="destination" />
          <div class="badge">4.8</div>
          <div class="destination__details">
            <h4>Maldivies</h4>
            <p>Water City</p>
          </div>
        </div>
        <div class="destination__card">
          <img src={Image19} alt="destination" />
          <div class="badge">4.2</div>
          <div class="destination__details">
            <h4>Sydney</h4>
            <p>Waterfall</p>
          </div>
        </div>
        <div class="destination__card">
          <img src={Image12} alt="destination" />
          <div class="badge">4.7</div>
          <div class="destination__details">
            <h4>London</h4>
            <p>Peace</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section__container seller__container" id="seller">
      <div class="section__header">
        <h2 class="section__title">Best Seller</h2>
        <div class="section__btn">
          <button class="btn">Check All</button>
        </div>
      </div>
      <div class="seller__grid">
        <div class="seller__card">
          <div class="seller__image">
            <img src={Image9} alt="seller" />
            <div class="seller__image__content">
              <div class="badge">30%</div>
              <div class="seller__image__footer">
                <div class="seller__price">
                  <p>10 Days | 09 Nights</p>
                  <h4>$75,550</h4>
                </div>
                <button class="btn">Explore</button>
              </div>
            </div>
          </div>
          <div class="seller__details">
            <h4>HILL STATIONS</h4>
            <p>Embark on a scenic hill stations around the globe</p>
          </div>
        </div>
        <div class="seller__card">
          <div class="seller__image">
            <img src={Image7} alt="seller" />
            <div class="seller__image__content">
              <div class="badge">20%</div>
              <div class="seller__image__footer">
                <div class="seller__price">
                  <p>05 Days | 06 Nights</p>
                  <h4>$38,550</h4>
                </div>
                <button class="btn">Explore</button>
              </div>
            </div>
          </div>
          <div class="seller__details">
            <h4>Sea Nature View</h4>
            <p>Where the ocean's beauty meets your soul's serenity</p>
          </div>
        </div>
        <div class="seller__card">
          <div class="seller__image">
            <img src={Image18} alt="seller" />
            <div class="seller__image__content">
              <div class="badge">25%</div>
              <div class="seller__image__footer">
                <div class="seller__price">
                  <p>07 Days | 06 Nights</p>
                  <h4>$25,500</h4>
                </div>
                <button class="btn">Explore</button>
              </div>
            </div>
          </div>
          <div class="seller__details">
            <h4>Times Square</h4>
            <p>Busiest circle</p>
          </div>
        </div>
      </div>
    </section>

    <section class="tour">
      <div class="section__container tour__container">
        <h4>Watch Our Video Tour</h4>
        <div class="video__container">
          <video src="/webproject/vid.mp4" autoplay loop muted></video>
        </div>
      </div>
    </section>

    <section class="section__container guide__container" id="guide">
      <div class="section__header">
        <h2 class="section__title">Tour Guide</h2>
        <div class="section__nav">
          <span><i class="ri-arrow-left-s-line"></i></span>
          <span><i class="ri-arrow-right-s-line"></i></span>
        </div>
      </div>
      <div class="guide__grid">
        <div class="guide__card">
          <div class="guide__image">
            <img src={Image3} alt="guide" />
            <div class="guide__socials">
              <div>
                <span>
                  <a href="#"><i class="ri-linkedin-fill"></i></a>
                </span>
                <span>
                  <a href="#"><i class="ri-instagram-line"></i></a>
                </span>
                <span>
                  <a href="#"><i class="ri-facebook-fill"></i></a>
                </span>
              </div>
              <button class="btn">Follow me</button>
            </div>
          </div>
          <div class="guide__content">
            <div class="guide__details">
              <h4>Chris Evans</h4>
              <p>Forest Guide</p>
            </div>
            <p>
              With a deep passion for forests, our experts are committed to
              craft immersive experiences to connect with the wilderness.
            </p>
          </div>
        </div>
        <div class="guide__card">
          <div class="guide__image">
            <img src={Image21} alt="guide" />
            <div class="guide__socials">
              <div>
                <span>
                  <a href="#"><i class="ri-linkedin-fill"></i></a>
                </span>
                <span>
                  <a href="#"><i class="ri-instagram-line"></i></a>
                </span>
                <span>
                  <a href="#"><i class="ri-facebook-fill"></i></a>
                </span>
              </div>
              <button class="btn">Follow me</button>
            </div>
          </div>
          <div class="guide__content">
            <div class="guide__details">
              <h4>Tom Cruise</h4>
              <p>Ocean Guide</p>
            </div>
            <p>
              Join us as we embark on a journey of inspiring encounters in the
              ocean's surface where secrets become your unforgettable memories.
            </p>
          </div>
        </div>
        <div class="guide__card">
          <div class="guide__image">
            <img src={Image6} alt="guide" />
            <div class="guide__socials">
              <div>
                <span>
                  <a href="#"><i class="ri-linkedin-fill"></i></a>
                </span>
                <span>
                  <a href="#"><i class="ri-instagram-line"></i></a>
                </span>
                <span>
                  <a href="#"><i class="ri-facebook-fill"></i></a>
                </span>
              </div>
              <button class="btn">Follow me</button>
            </div>
          </div>
          <div class="guide__content">
            <div class="guide__details">
              <h4>Gal Gadot</h4>
              <p>City Guide</p>
            </div>
            <p>
              With a passion for travel and a commitment to excellence, we
              curate memorable experiences that go beyond the ordinary.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section__container client__container" id="client">
      <div class="section__header">
        <h2 class="section__title">Clients Feedback</h2>
        <div class="section__nav">
          <span><i class="ri-arrow-left-s-line"></i></span>
          <span><i class="ri-arrow-right-s-line"></i></span>
        </div>
      </div>
      <div class="client__grid">
        <div class="client__card">
          <div class="client__card__header">
            <span><i class="ri-double-quotes-r"></i></span>
            <div class="ratings">
              <span><i class="ri-star-fill"></i></span>
              <span><i class="ri-star-fill"></i></span>
              <span><i class="ri-star-fill"></i></span>
              <span><i class="ri-star-half-fill"></i></span>
              <span><i class="ri-star-line"></i></span>
            </div>
          </div>
          <p>
            I had the most incredible experience using this tour and travel
            website. From booking my flights and accommodations to discovering
            unique local activities, everything was seamless and well-organized.
            It made my trip stress-free and unforgettable. I can't wait to plan
            my next adventure with them!
          </p>
          <div class="client__card__footer">
            <img src={Image23} alt="client" />
            <div class="client__details">
              <h4>Vinicius Jr</h4>
              <p>Footballer</p>
            </div>
          </div>
        </div>
        <div class="client__card">
          <div class="client__card__header">
            <span><i class="ri-double-quotes-r"></i></span>
            <div class="ratings">
              <span><i class="ri-star-fill"></i></span>
              <span><i class="ri-star-fill"></i></span>
              <span><i class="ri-star-fill"></i></span>
              <span><i class="ri-star-fill"></i></span>
              <span><i class="ri-star-fill"></i></span>
            </div>
          </div>
          <p>
            As a frequent traveler, I've used various tour and travel websites,
            but this one stands out for its attention to detail and personalized
            recommendations. The itineraries they offer are thoughtfully
            curated, and the insider tips on their blog were a game-changer for
            my recent trip. Highly recommended! Thanks to them.
          </p>
          <div class="client__card__footer">
            <img src={Image24} alt="client" />
            <div class="client__details">
              <h4>Virat Kohli</h4>
              <p>Cricketer</p>
            </div>
          </div>
        </div>
        <div class="client__card">
          <div class="client__card__header">
            <span><i class="ri-double-quotes-r"></i></span>
            <div class="ratings">
              <span><i class="ri-star-fill"></i></span>
              <span><i class="ri-star-fill"></i></span>
              <span><i class="ri-star-fill"></i></span>
              <span><i class="ri-star-fill"></i></span>
              <span><i class="ri-star-line"></i></span>
            </div>
          </div>
          <p>
            I'm not an experienced traveler, but this website made me feel like
            a pro. The customer support team was incredibly helpful in guiding
            me through the planning process, and their city guides provided
            valuable insights. Thanks to them, I had a fantastic time exploring
            a new city with confidence. I can't thank them enough!
          </p>
          <div class="client__card__footer">
            <img src={Image17} alt="client" />
            <div class="client__details">
              <h4>Ishowspeed</h4>
              <p>Content creator</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="subscribe">
      <div class="section__container subscribe__container">
        <h4>Subscribe and be Updated</h4>
        <form action="/">
          <input type="text" placeholder="Please enter your email address" />
          <button class="btn">Subscribe</button>
        </form>
      </div>
    </section>

    <footer>
      <div class="section__container footer__container">
        <div class="footer__col">
          <h5>TRIPIIGO</h5>
          <p>
            Welcome to TRIPIIGO, our tour and travel website is your gateway
            to a world of wanderlust-inducing experiences.
          </p>
        </div>
        <div class="footer__col">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#destination">Destinations</a>
          <a href="#subscribe">Write to Us</a>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div class="footer__col">
          <h4>Features</h4>
          <a href="#">Vacation Package</a>
          <a href="#">List of Tours</a>
          <a href="#">Gallery</a>
          <a href="#">Travel on a Budget</a>
        </div>
        <div class="footer__col">
          <h4>Follow Us</h4>
          <div class="footer__socials">
            <span>
              <a href="#"><i class="ri-twitter-fill"></i></a>
            </span>
            <span>
              <a href="#"><i class="ri-linkedin-fill"></i></a>
            </span>
            <span>
              <a href="#"><i class="ri-instagram-line"></i></a>
            </span>
            <span>
              <a href="#"><i class="ri-facebook-fill"></i></a>
            </span>
          </div>
        </div>
      </div>
      <div class="footer__bar">
        ©2024 Harsh and Preethika.
      </div>
    </footer>
    </div>
  )
}

export default App