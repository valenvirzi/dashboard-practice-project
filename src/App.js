import "./App.css";

function App() {
  const FAVOURITE = "https://www.svgrepo.com/show/486858/star-add.svg";
  const WATCH = "https://www.svgrepo.com/show/487361/eye-plus.svg";
  const SHARE = "https://www.svgrepo.com/show/506746/share-2.svg";
  return (
    <div className="App">
      <body className="body">
        <aside className="aside-bar">
          <div className="aside__logo">
            <img
              className="logo__img"
              src="https://www.svgrepo.com/show/459911/dashboard.svg"
              alt="Dashboard icon"
            ></img>
            <h1 className="logo__title">Dashboard</h1>
          </div>
          <ul className="aside-list">
            <li className="aside__item">
              <img
                className="item__img"
                src="https://www.svgrepo.com/show/491253/home.svg"
                alt="Home icon"
              ></img>
              <h2 className="item__h2">Home</h2>
            </li>
            <li className="aside__item">
              <img
                className="item__img"
                src="https://www.svgrepo.com/show/131886/profile.svg"
                alt="Profile icon"
              ></img>
              <h2 className="item__h2">Profile</h2>
            </li>
            <li className="aside__item">
              <img
                className="item__img"
                src="https://www.svgrepo.com/show/360570/message-f.svg"
                alt="Messages icon"
              ></img>
              <h2 className="item__h2">Messages</h2>
            </li>
            <li className="aside__item">
              <img
                className="item__img"
                src="https://www.svgrepo.com/show/513392/clock.svg"
                alt="History icon"
              ></img>
              <h2 className="item__h2">History</h2>
            </li>
            <li className="aside__item">
              <img
                className="item__img"
                src="https://www.svgrepo.com/show/372111/tasks.svg"
                alt="Tasks icon"
              ></img>
              <h2 className="item__h2">Tasks</h2>
            </li>
            <li className="aside__item">
              <img
                className="item__img"
                src="https://www.svgrepo.com/show/391873/group.svg"
                alt="Communities icon"
              ></img>
              <h2 className="item__h2">Communities</h2>
            </li>
          </ul>
          <ul className="aside-list">
            <li className="aside__item">
              <img
                className="item__img"
                src="https://www.svgrepo.com/show/488369/settings.svg"
                alt="Settings icon"
              ></img>
              <h2 className="item__h2">Settings</h2>
            </li>
            <li className="aside__item">
              <img
                className="item__img"
                src="https://www.svgrepo.com/show/344335/question-square-fill.svg"
                alt="Support icon"
              ></img>
              <h2 className="item__h2">Support</h2>
            </li>
            <li className="aside__item">
              <img
                className="item__img"
                src="https://www.svgrepo.com/show/442713/shield-done.svg"
                alt="Privacy icon"
              ></img>
              <h2 className="item__h2">Privacy</h2>
            </li>
          </ul>
        </aside>
        <main className="main">
          <header className="header">
            <div className="header__div">
              <button className="icon-btn">
                <img
                  className="icon-btn__img"
                  src="https://www.svgrepo.com/show/379067/magnifier-left.svg"
                  alt="Search icon"
                ></img>
              </button>
              <input className="header__search-bar" type="text"></input>
              <button className="icon-btn">
                <img
                  className="icon-btn__img"
                  src="https://www.svgrepo.com/show/521509/bell-ringing.svg"
                  alt="Notification icon"
                ></img>
              </button>
              <div className="header__user-div">
                <img
                  className="user-div__img"
                  src="https://img.freepik.com/free-vector/cute-cat-playing-yarn-ball-cartoon-illustration_138676-3256.jpg?w=740&t=st=1703634210~exp=1703634810~hmac=0024b1aa26596e5e9f1d02603c207c794ae21beea4bd3b9552ac4d72c790b5ed"
                  alt="Profile pic"
                ></img>
                <h2 className="user-div__name">Morgan Oakley</h2>
              </div>
            </div>
            <div className="header__div">
              <div className="header-div__welcome-div">
                <img
                  className="welcome-div__user-img"
                  src="https://img.freepik.com/free-vector/cute-cat-playing-yarn-ball-cartoon-illustration_138676-3256.jpg?w=740&t=st=1703634210~exp=1703634810~hmac=0024b1aa26596e5e9f1d02603c207c794ae21beea4bd3b9552ac4d72c790b5ed"
                  alt="Profile pic"
                ></img>
                <div className="welcome-div__text">
                  <p className="welcome-div__p">Hi there,</p>
                  <h2 className="welcome-div__h2">
                    Morgan Oakley{" "}
                    <span className="welcome-div__span">(@morgan)</span>
                  </h2>
                </div>
              </div>
              <div className="welcome-div__buttons">
                <button className="welcome-div__btn">New</button>
                <button className="welcome-div__btn">Upload</button>
                <button className="welcome-div__btn">Share</button>
              </div>
            </div>
          </header>
          <section className="main__projects">
            <h2 className="section__title">Your Projects</h2>
            <ul className="projects-list">
              <li className="projects__item">
                <div className="projects-item__color"></div>
                <div className="projects-item__body">
                  <div className="projects-item__text">
                    <h4 className="projects-item__title">Super Cool Project</h4>
                    <p className="projects-item__desc">
                      Integer sed turpis urna. Maecenas ac mattis ipsum. Duis in
                      lectus odio. Etiam malesuada vulputate.
                    </p>
                  </div>
                  <div className="projects-item__buttons">
                    <button className="icon-btn">
                      <img
                        className="icon-btn__img"
                        src={FAVOURITE}
                        alt="Add favourite"
                      ></img>
                    </button>
                    <button className="icon-btn">
                      <img
                        className="icon-btn__img"
                        src={WATCH}
                        alt="Add watch list"
                      ></img>
                    </button>
                    <button className="icon-btn">
                      <img
                        className="icon-btn__img"
                        src={SHARE}
                        alt="Share"
                      ></img>
                    </button>
                  </div>
                </div>
              </li>
              <li className="projects__item">
                <div className="projects-item__color"></div>
                <div className="projects-item__body">
                  <div className="projects-item__text">
                    <h4 className="projects-item__title">Less Cool Project</h4>
                    <p className="projects-item__desc">
                      Vestibulum non ex tellus. Donec libero elit, varius
                      ultrices ex vitae, efficitur luctus est. Pellentesque nec
                      elit at orci gravida porttitor. Ut eros nibh, eleifend
                      vitae.
                    </p>
                  </div>
                  <div className="projects-item__buttons">
                    <button className="icon-btn">
                      <img
                        className="icon-btn__img"
                        src={FAVOURITE}
                        alt="Add favourite"
                      ></img>
                    </button>
                    <button className="icon-btn">
                      <img
                        className="icon-btn__img"
                        src={WATCH}
                        alt="Add watch list"
                      ></img>
                    </button>
                    <button className="icon-btn">
                      <img
                        className="icon-btn__img"
                        src={SHARE}
                        alt="Share"
                      ></img>
                    </button>
                  </div>
                </div>
              </li>
              <li className="projects__item">
                <div className="projects-item__color"></div>
                <div className="projects-item__body">
                  <div className="projects-item__text">
                    <h4 className="projects-item__title">Impossible App</h4>
                    <p className="projects-item__desc">
                      Vivamus ut accumsan mi. Class aptent taciti sociosqu ad
                      litora torquent per conubia nostra.
                    </p>
                  </div>
                  <div className="projects-item__buttons">
                    <button className="icon-btn">
                      <img
                        className="icon-btn__img"
                        src={FAVOURITE}
                        alt="Add favourite"
                      ></img>
                    </button>
                    <button className="icon-btn">
                      <img
                        className="icon-btn__img"
                        src={WATCH}
                        alt="Add watch list"
                      ></img>
                    </button>
                    <button className="icon-btn">
                      <img
                        className="icon-btn__img"
                        src={SHARE}
                        alt="Share"
                      ></img>
                    </button>
                  </div>
                </div>
              </li>
              <li className="projects__item">
                <div className="projects-item__color"></div>
                <div className="projects-item__body">
                  <div className="projects-item__text">
                    <h4 className="projects-item__title">Easy Peasy App</h4>
                    <p className="projects-item__desc">
                      Curabitur neque risus, ultrices ut sapien et, auctor
                      accumsan leo. Vivamus sed consequat quam, et sagittis
                      turpis. Praesent efficitur ac lacus vel.
                    </p>
                  </div>
                  <div className="projects-item__buttons">
                    <button className="icon-btn">
                      <img
                        className="icon-btn__img"
                        src={FAVOURITE}
                        alt="Add favourite"
                      ></img>
                    </button>
                    <button className="icon-btn">
                      <img
                        className="icon-btn__img"
                        src={WATCH}
                        alt="Add watch list"
                      ></img>
                    </button>
                    <button className="icon-btn">
                      <img
                        className="icon-btn__img"
                        src={SHARE}
                        alt="Share"
                      ></img>
                    </button>
                  </div>
                </div>
              </li>
              <li className="projects__item">
                <div className="projects-item__color"></div>
                <div className="projects-item__body">
                  <div className="projects-item__text">
                    <h4 className="projects-item__title">Ad Blocker</h4>
                    <p className="projects-item__desc">
                      Aliquam ut velit id nulla dictum mattis non eget nulla.
                      Aliquam quis magna leo. Maecenas dui orci, condimentum.
                    </p>
                  </div>
                  <div className="projects-item__buttons">
                    <button className="icon-btn">
                      <img
                        className="icon-btn__img"
                        src={FAVOURITE}
                        alt="Add favourite"
                      ></img>
                    </button>
                    <button className="icon-btn">
                      <img
                        className="icon-btn__img"
                        src={WATCH}
                        alt="Add watch list"
                      ></img>
                    </button>
                    <button className="icon-btn">
                      <img
                        className="icon-btn__img"
                        src={SHARE}
                        alt="Share"
                      ></img>
                    </button>
                  </div>
                </div>
              </li>
              <li className="projects__item">
                <div className="projects-item__color"></div>
                <div className="projects-item__body">
                  <div className="projects-item__text">
                    <h4 className="projects-item__title">Money Maker</h4>
                    <p className="projects-item__desc">
                      Vivamus dignissim rhoncus felis, eu interdum mi efficitur
                      at. Integer mattis nulla eros, sed malesuada ex semper in.
                      Pellentesque eu lorem sed ante.
                    </p>
                  </div>
                  <div className="projects-item__buttons">
                    <button className="icon-btn">
                      <img
                        className="icon-btn__img"
                        src={FAVOURITE}
                        alt="Add favourite"
                      ></img>
                    </button>
                    <button className="icon-btn">
                      <img
                        className="icon-btn__img"
                        src={WATCH}
                        alt="Add watch list"
                      ></img>
                    </button>
                    <button className="icon-btn">
                      <img
                        className="icon-btn__img"
                        src={SHARE}
                        alt="Share"
                      ></img>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </section>
          <aside className="main__aside">
            <section className="main-aside__section">
              <h3 className="section__title">Announcements</h3>
              <ul className="aside-section__wrapper">
                <li className="announcements__item">
                  <h4 className="announcements__item-title">
                    Site Maintenance
                  </h4>
                  <p className="announcements__item-p">
                    In vestibulum, nisi vel iaculis elementum, mauris massa
                    fermentum enim, aliquam placerat lorem...
                  </p>
                </li>
                <hr className="announcements__hr"></hr>
                <li className="announcements__item">
                  <h4 className="announcements__item-title">
                    Community Share Day
                  </h4>
                  <p className="announcements__item-p">
                    Phasellus rhoncus vehicula vehicula. Fusce nec justo a ipsum
                    tincidunt feugiat. Etiam mollis...
                  </p>
                </li>
                <hr className="announcements__hr"></hr>
                <li className="announcements__item">
                  <h4 className="announcements__item-title">
                    Updated Privacy Policy
                  </h4>
                  <p className="announcements__item-p">
                    In convallis dolor et maximus dignissim. Vivamus ut arcu
                    lorem. Praesent metus purus, vulputate sit amet...
                  </p>
                </li>
              </ul>
            </section>
            <section className="main-aside__section">
              <h3 className="section__title">Trending</h3>
              <ul className="aside-section__wrapper trending-wrapper">
                <li className="trending__item">
                  <img
                    className="trending__item-img"
                    src="https://img.freepik.com/premium-vector/dog-standing-side-view-vector-doodle-illustration_514903-626.jpg?w=740"
                    alt="Profile pic"
                  ></img>
                  <div className="trending__item-text">
                    <h2 className="trending__item-user">@tegan</h2>
                    <p className="trending__item-desc">World Peace Builder</p>
                  </div>
                </li>
                <li className="trending__item">
                  <img
                    className="trending__item-img"
                    src="https://img.freepik.com/free-vector/cute-cat-playing-yarn-ball-cartoon-illustration_138676-3256.jpg?w=740&t=st=1703634210~exp=1703634810~hmac=0024b1aa26596e5e9f1d02603c207c794ae21beea4bd3b9552ac4d72c790b5ed"
                    alt="Profile pic"
                  ></img>
                  <div className="trending__item-text">
                    <h2 className="trending__item-user">@morgan</h2>
                    <p className="trending__item-desc">Super Cool Project</p>
                  </div>
                </li>
                <li className="trending__item">
                  <img
                    className="trending__item-img"
                    src="https://i.pinimg.com/564x/cc/35/13/cc35139a1e84ce860f2c627e1d6c232c.jpg"
                    alt="Profile pic"
                  ></img>
                  <div className="trending__item-text">
                    <h2 className="trending__item-user">@kendall</h2>
                    <p className="trending__item-desc">Life Changing App</p>
                  </div>
                </li>
                <li className="trending__item">
                  <img
                    className="trending__item-img"
                    src="https://img.freepik.com/premium-vector/vector-penguin-hat-scarf_505913-42.jpg?w=740"
                    alt="Profile pic"
                  ></img>
                  <div className="trending__item-text">
                    <h2 className="trending__item-user">@alex</h2>
                    <p className="trending__item-desc">No Traffic Maker</p>
                  </div>
                </li>
              </ul>
            </section>
          </aside>
        </main>
      </body>
    </div>
  );
}

export default App;
