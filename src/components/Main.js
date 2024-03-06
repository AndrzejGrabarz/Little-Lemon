function Main() {
  return (

    <>
      <section className="section-1">
        <div className="first-section">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.s
            Culpa alias quae quod. Ut
            deleniti doloribus quos veniam
            nostrum reprehenderit non!
          </p>
          <button type="button">
            Reserve a Table
          </button>
        </div>
        <div className="restaurant-image-container">
          <img src="./images/restauranfood.webp" alt="restauranfood" />
        </div>
      </section>

      <section className="section-2">
        <div className="card-grid">
          <h1>This weeks specials!</h1>
          <button type="button">Onlie Menu</button>
        </div>

        <div className="specials-card card-1">
          <figure>
            <img src="./images/greek-salad.webp" alt="greek salad" />
          </figure>
          <div className="header-prize">
            <h3>Greek Salad</h3>
            <p id="padding">$12.25</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
            Culpa alias quae quod. Ut
            deleniti doloribus quos veniam
            nostrum reprehenderit non!
          </p>
          <p className="order">Order a delivery $4</p>
        </div>

        <div className="specials-card card-2">
          <figure>
            <img src="./images/bruchetta.webp" alt="greek salad" />
          </figure>
          <div className="header-prize">
            <h3>Bruchetta</h3>
            <p id="padding">$12.25</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
            Culpa alias quae quod. Ut
            deleniti doloribus quos veniam
            nostrum reprehenderit non!
          </p>
          <p>Order a delivery $2</p>
        </div>
        <div className="specials-card card-3">
          <figure>
            <img src="./images/lemon dessert.jpg" alt="greek salad" />
          </figure>
          <div className="header-prize">
            <h3>Lemon Dessert</h3>
            <p id="padding">$12.25</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
            Culpa alias quae quod. Ut
            deleniti doloribus quos veniam
            nostrum reprehenderit non!
          </p>
          <p className="order">Order a delivery $3</p>
        </div>
      </section>
      <section className="section-3">

        <h2>Testimonials</h2>
        <div className="Profile1">
          <p>Rating</p>
          <div className="profile-card">
            <p>Profile</p>
            <img src="./images/Profil.png" alt="" />
          </div>
          <p>Reviev</p>
        </div>

        <div className="Profile2">
          <p>Rating</p>
          <div className="profile-card">
            <p>Profile</p>
            <img src="./images/Profil.png" alt="" />
          </div>
          <p>Reviev</p>
        </div>

        <div className="Profile3">
          <p>Rating</p>
          <div className="profile-card">
            <p>Profile</p>
            <img src="./images/Profil.png" alt="" />
          </div>
          <p>Reviev</p>
        </div>

        <div className="Profile4">
          <p>Rating</p>
          <div className="profile-card">
            <p>Profile</p>
            <img src="./images/Profil.png" alt="" />
          </div>
          <p>Reviev</p>
        </div>

      </section>
      <section className="section-4">
        <div className="fourh-section">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
            Culpa alias quae quod. Ut
            deleniti doloribus quos veniam
            nostrum reprehenderit non!
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
            Culpa alias quae quod. Ut
            deleniti doloribus quos veniam
            nostrum reprehenderit non!
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
            Culpa alias quae quod. Ut
            deleniti doloribus quos veniam
            nostrum reprehenderit non!
          </p>
        </div>
        <div className="p1">
          <img src="./images/lemon.webp" alt="lemon" />
          <div className="p2">
            <img src="./images/lemon.webp" alt="lemon" />
          </div>
        </div>
      </section>
    </>

  );
}

export default Main;
