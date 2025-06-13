import styles from "./page.module.css";
import CustomAppBar from "./component/CustomAppBar";

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles["section-header"]}>
        <CustomAppBar />
      </section>
      <div className={styles["presentation-wrapper"]}>
        <div className={styles["beautiful-presentation"]}>
          <h1 className={styles["presentation-title"]}>
            Beautiful <br /> presentations
          </h1>

          <span className={styles["presentation-description"]}>
            Captivate helps you create beautiful, branded presentation decks and
            experiences to engage your audience and potential customers.
          </span>

          <button className={styles["presentation-button"]}>Button Text</button>
        </div>

        <img
          src="/img/halfWeb.png"
          alt="half-web"
          className={styles["presentation-image"]}
        />
      </div>
      <div className={styles["logo-row"]}>
        <img src="/svg/ApertureLogo.svg" alt="Aperture Logo" />
        <img src="/svg/NorthStarLogo.svg" alt="NorthStar Logo" />
        <img src="/svg/TriadLogo.svg" alt="Triad Logo" />
        <img src="/svg/TransferMediaLogo.svg" alt="Transfer Media Logo" />
        <img src="/svg/CubicLogo.svg" alt="Cubic Logo" />
      </div>
      <div className={styles["features-section"]}>
        <div className={styles["features-header"]}>
          <div>
            <h1>Features</h1>
          </div>
          <div>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor in
              <br /> laoreet justo lectus a eget vitae. Tellus id pretium.
            </span>
          </div>
        </div>

        <div className={styles["features-content"]}>
          <div className={styles["left-card"]}>
            <div className={styles["left-card-content"]}>
              <img src="/img/oneWeb.png" alt="One Web" />
              <div className={styles["left-card-text"]}>
                <div>
                  <button className={styles["gradient-button"]}>
                    ALL-IN-ONE
                  </button>
                </div>
                <div>
                  <h1>Everything you need</h1>
                </div>
                <div>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles["right-card"]}>
            <div className={styles["right-card-content"]}>
              <div className={styles["right-card-block"]}>
                <div>
                  <button className={styles["gradient-button"]}>DESIGN</button>
                </div>
                <div>
                  <h1>Branding</h1>
                </div>
                <div>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </div>
              </div>
              <div>
                <img
                  className={styles["branding-img"]}
                  src="/img/branding.png"
                  alt="Branding"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles["template-container"]}>
          <div className={styles["template-content"]}>
            <div className={styles["template-text-section"]}>
              <div>
                <button className={styles["gradient-button"]}>TEMPLATES</button>
              </div>
              <div>
                <h1 className={styles["template-heading"]}>
                  Create a beautiful <br /> presentation in minutes
                </h1>
              </div>
              <div>
                <span className={styles["template-description"]}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  purus eu, non velit ut nisl. Arcu orci id aliquet elementum
                  in.
                </span>
              </div>
            </div>

            <div className={styles["template-img-container"]}>
              <img
                className={styles["template-img"]}
                src="/img/template.png"
                alt="Template Img"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles["feature-container"]}>
        <div className={styles["feature-card"]}>
          <div className={styles["feature-img-right"]}>
            <img src="/img/livestream.png" alt="Livestream" />
          </div>
          <div className={styles["feature-content-left"]}>
            <button className={styles["gradient-button"]}>LIVESTREAM</button>
            <h1 className={styles["feature-heading"]}>
              Broadcast to the world
            </h1>
            <span className={styles["feature-description"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </div>
        </div>

        <div className={styles["feature-card"]}>
          <div className={styles["feature-content-right"]}>
            <button className={styles["gradient-button"]}>ANALYTICS</button>
            <h1 className={styles["feature-heading"]}>
              Track your performance
            </h1>
            <span className={styles["feature-description"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </div>
          <div className={styles["feature-img-center"]}>
            <img src="/img/Analytics.png" alt="Analytics" />
          </div>
        </div>
      </div>
      <div className={styles["button-wrapper-main"]}>
        <div className={styles["button-wrapper"]}>
          <div className={styles["button-container"]}>
            <button className={styles["custom-button"]}>
              <img
                src="/svg/Magnet.svg"
                alt="magnet"
                className={styles["button-icon"]}
              />
              Pitch Decks
            </button>
            <button className={styles["custom-button"]}>
              <img
                src="/svg/Bank.svg"
                alt="Bank"
                className={styles["button-icon"]}
              />
              Financial Reports
            </button>
            <button className={styles["custom-button"]}>
              <img
                src="/svg/Presentation.svg"
                alt="Presentation"
                className={styles["button-icon"]}
              />
              Presentation Decks
            </button>
            <button className={styles["custom-button"]}>
              <img
                src="/svg/ThunderBolt.svg"
                alt="ThunderBolt"
                className={styles["button-icon"]}
              />
              Earnings
            </button>
            <button className={styles["custom-button"]}>
              <img
                src="/svg/Webinar.svg"
                alt="Webinar"
                className={styles["button-icon"]}
              />
              Webinars
            </button>
          </div>
        </div>
      </div>

      <div className={styles["presentationContainer"]}>
        <div className={styles["presentationLeft"]}>
          <div className={styles["presentationTitle"]}>
            <h1 className={styles["presentationHeading"]}>
              The perfect presentation
            </h1>
          </div>

          <div className={styles["presentationDescription"]}>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
              aliquam lectus duis feugiat maecenas penatibus.
            </span>
          </div>

          <div className={styles["checkList"]}>
            <div className={styles["checkItem"]}>
              <img src="/svg/Checkmark.svg" alt="Checkmark" />
              <span className={styles["checkText"]}>
                Lorem ipsum dolor sit amet
              </span>
            </div>
            <div className={styles["checkItem"]}>
              <img src="/svg/Checkmark.svg" alt="Checkmark" />
              <span className={styles["checkText"]}>Lorem ipsum dolor</span>
            </div>
            <div className={styles["checkItem"]}>
              <img src="/svg/Checkmark.svg" alt="Checkmark" />
              <span className={styles["checkText"]}>Lorem ipsum dolor sit</span>
            </div>
          </div>
        </div>

        <div className={styles["presentationImage"]}>
          <img src="/img/WomanSmiling.png" alt="Woman Smiling" />
        </div>
      </div>

      <div className={styles["platform-container"]}>
        <div className={styles["platform-image"]}>
          <img src="/img/WorkingSpace.png" alt="WorkSpace" />
        </div>

        <div className={styles["platform-content"]}>
          <div className={styles["platform-heading"]}>
            <h1 style={{ fontSize: 36 }}>All-in-one platform</h1>
          </div>

          <div className={styles["platform-subtext"]}>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
              aliquam lectus duis feugiat maecenas penatibus.
            </span>
          </div>

          <div className={styles["platform-checklist"]}>
            <div className={styles["check-item"]}>
              <img src="/svg/Checkmark.svg" alt="Checkmark" />
              <span>Lorem ipsum dolor sit amet</span>
            </div>
            <div className={styles["check-item"]}>
              <img src="/svg/Checkmark.svg" alt="Checkmark" />
              <span>Lorem ipsum dolor</span>
            </div>
            <div className={styles["check-item"]}>
              <img src="/svg/Checkmark.svg" alt="Checkmark" />
              <span>Lorem ipsum dolor sit</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["pricing-header-container"]}>
        <div>
          <h1 className={styles["pricing-title"]}>Pricing</h1>
        </div>
        <div>
          <span className={styles["pricing-description"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor in
            <br />
            laoreet justo lectus a eget vitae. Tellus id pretium.
          </span>
        </div>
      </div>

      <div className={styles["pricing-card-container"]}>
        <div className={styles["pricing-card"]}>
          <div className={styles["pricing-card-inner"]}>
            <h1 className={styles["pricing-card-title"]}>Starter</h1>
            <div className={styles["pricing-card-price-row"]}>
              <h2 className={styles["pricing-card-price"]}>$24</h2>
              <span className={styles["pricing-card-month"]}>/MONTH</span>
            </div>
            <span className={styles["pricing-card-description"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
              orci penatibus sed donec consequat.
            </span>
            <div>
              <span className={styles["pricing-card-included-label"]}>
                WHAT'S INCLUDED
              </span>
            </div>
            <div className={styles["pricing-card-feature"]}>
              <img src="/svg/Checkmark.svg" alt="Checkmark" />
              <span>Lorem ipsum dolor sit amet consectetur</span>
            </div>
            <div className={styles["pricing-card-feature"]}>
              <img src="/svg/Checkmark.svg" alt="Checkmark" />
              <span>Lorem ipsum dolor sit amet</span>
            </div>
            <div className={styles["pricing-card-feature"]}>
              <img src="/svg/Checkmark.svg" alt="Checkmark" />
              <span>Lorem ipsum dolor sit amet consectetur</span>
            </div>
            <div className={styles["pricing-card-feature"]}>
              <img
                src="/svg/Checkmark.svg"
                alt="Checkmark"
                className="low-opacity"
              />
              <span>Lorem ipsum dolor sit</span>
            </div>
            <button className={styles["pricing-card-button"]}>
              GET STARTED
            </button>
          </div>
        </div>

        <div className={styles["pricing-card"]}>
          <div className={styles["pricing-card-inner"]}>
            <h1 className={styles["pricing-card-title"]}>Business</h1>
            <div className={styles["pricing-card-price-row"]}>
              <h2 className={styles["pricing-card-price"]}>$72</h2>
              <span className={styles["pricing-card-month"]}>/MONTH</span>
            </div>
            <span className={styles["pricing-card-description"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
              orci penatibus sed donec consequat.
            </span>
            <div>
              <span className={styles["pricing-card-included-label"]}>
                WHAT'S INCLUDED
              </span>
            </div>
            <div className={styles["pricing-card-feature"]}>
              <img src="/svg/Checkmark.svg" alt="Checkmark" />
              <span>Lorem ipsum dolor sit amet consectetur</span>
            </div>
            <div className={styles["pricing-card-feature"]}>
              <img src="/svg/Checkmark.svg" alt="Checkmark" />
              <span>Lorem ipsum dolor sit amet</span>
            </div>
            <div className={styles["pricing-card-feature"]}>
              <img src="/svg/Checkmark.svg" alt="Checkmark" />
              <span>Lorem ipsum dolor sit amet consectetur</span>
            </div>
            <div className={styles["pricing-card-feature"]}>
              <img src="/svg/Checkmark.svg" alt="Checkmark" />
              <span>Lorem ipsum dolor sit</span>
            </div>
            <button className={styles["pricing-card-button"]}>
              GET STARTED
            </button>
          </div>
        </div>
      </div>

      <div className={styles["faq-main-container"]}>
        <div className={styles["faq-container"]}>
          <h1 className={styles["faq-title"]}>Frequent question</h1>

          {[
            "Is Captivate easy to use for a beginner?",
            "How is it different than PowerPoint?",
            "How much does it cost to use Captivate?",
            "Is Captivate right for my team?",
            "How do I add members to our plan?",
            "How do I contact support?",
          ].map((question, index) => (
            <div className={styles["faq-item"]} key={index}>
              <h3>{question}</h3>
              <img
                src="/svg/PlusIcon.svg"
                alt="Plus Icon"
                className={styles["faq-icon"]}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles["testimonial-main-container"]}>
        <div className={styles["testimonial-container"]}>
          <div>
            <img
              className={styles["testimonial-logo"]}
              src="/svg/ApertureLogo.svg"
              alt="Aperture Logo"
            />
          </div>

          <div>
            <h3 className={styles["testimonial-text"]}>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
              mauris, libero tellus nec tortor libero arcu, sapien. Venenatis
              sit morbi ac amet amet.”
            </h3>
          </div>

          <div>
            <span className={styles["testimonial-author"]}>
              Mikayla Smith, Marketing Director
            </span>
          </div>
        </div>
      </div>

      <div className={styles["get-started-main-container"]}>
        <div className={styles["get-started-container"]}>
          <h1 className={styles["get-started-heading"]}>Get started today</h1>

          <p className={styles["get-started-paragraph"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et
            netus enim pellentesque pharetra semper at faucibus neque ac
            suspendisse.
          </p>

          <div className={styles["get-started-form"]}>
            <input
              className={styles["get-started-input"]}
              type="email"
              placeholder="Email address"
            />
            <button className={styles["get-started-button"]}>Sign up</button>
          </div>
        </div>
      </div>

      <div className={styles["others-main-container"]}>
        <div className={styles["others-container"]}>
          <div className={styles["others-logo"]}>
            <img src="/svg/CaptivateLogo.svg" alt="Captivate Logo" />
          </div>

          <div className={styles["others-content"]}>
            <div className={styles["others-section"]}>
              <h4 className={styles["others-heading"]}>LANDING PAGES</h4>
              <div className={styles["others-columns"]}>
                <div className={styles["others-column"]}>
                  <span>Landing page V1</span>
                  <span>Landing page V2</span>
                  <span>Landing page V3</span>
                </div>
                <div className={styles["others-column"]}>
                  <span>Landing page V4</span>
                  <span>Landing page V5</span>
                </div>
              </div>
            </div>

            <div className={styles["others-section"]}>
              <h4 className={styles["others-heading"]}>UTILITY PAGES</h4>
              <div className={styles["others-columns"]}>
                <div className={styles["others-column"]}>
                  <span>Log in</span>
                  <span>Sign up</span>
                  <span>Privacy policy</span>
                </div>
                <div className={styles["others-column"]}>
                  <span>Password</span>
                  <span>404</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles["footer-main"]}>
          <div className={styles["footer-content"]}>
            <div className={styles["footer-icons"]}>
              <img src="/svg/Facebook.svg" alt="facebook" />
              <img src="/svg/Twiter.svg" alt="twiter" />
              <img src="/svg/Instagram.svg" alt="instagram" />
              <img src="/svg/LinkedIn.svg" alt="LinkedIn" />
            </div>
            <p>© 2025. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
