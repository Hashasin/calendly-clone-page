import React from "react";
import "./Page.css";

function Page() {
  return (
    <div className="page">
      <div className="body">
        <a
          href="https://calendly.com/?utm_campaign=sign_up&utm_medium=badge&utm_source=invitee"
          className="sidebar"
          target="_blank"
        >
          <div className="sidebar_logo" data-id="branding">
            <div className="sidebar_logo1">powered by</div>
            <div className="sidebar_logo2">Calendly</div>
          </div>
        </a>
        <div className="page_starting">
          <img
            className="page_images"
            src="https://d3v0px0pttie1i.cloudfront.net/uploads/user/avatar/11175808/9a785e42.jpg"
            alt="image"
          ></img>

          <div className="page_header">
            <h1>Rose Watson</h1>
          </div>
          <div className="page_para">
            Welcome to my scheduling page. Please follow the instructions to add
            an event to my calendar.
          </div>
        </div>
        <div className="box">
          <a
            href="https://calendly.com/rw-uk/entain-ladbrokes-coral-stockton-thirsk-interview-invite?back=1&month=2022-03"
            data-id="event-type"
            className="box_initial"
          >
            <div className="box_initial1">
              <div className="box_initial2" data-id="event-type-maker"></div>
              <div className="box_initial3" data-id="event-type-header-title">
                Entain - l LadbrokesCoral - Interview Invite **ee6
              </div>
              <div className="box_initial4" data-id="event-type-arrow"></div>
            </div>
            <div className="box_initial5" data-id="event-type-description">
              You will need to be over the age of 18 to be successful in this
              role. During this call I will be discussing the details of the
              vacancy and answer any questions wh…
            </div>
          </a>
          <a
            className="box_starting"
            href="https://calendly.com/rw-uk/entain-ladbrokes-coral-nottingham-invites?back=1&month=2022-03"
            data-id="event-type"
          >
            <div className="box_starting1">
              <div className="box_starting2" data-id="event-type-maker"></div>
              <div className="box_starting3" data-id="event-type-header-title">
                Entain - Ladbrokes Coral - Nottingham invites
              </div>
              <div className="box_starting4" data-id="event-type-arrow"></div>
            </div>
            <div className="box_starting5" data-id="event-type-description">
              You will need to be over the age of 18 to be successful in this
              role. During this call I will be discussing the details of the
              vacancy and answer any questions wh…
            </div>
          </a>
          <a
            className="box_secondary"
            data-id="event-type"
            href="https://calendly.com/rw-uk/peterborough-interviews?back=1&month=2022-03"
          >
            <div className="box_secondary1">
              <div className="box_secondary2" data-id="event-type-maker"></div>
              <div className="box_secondary3" data-id="event-type-header-title">
                Entain - Ladbrokes Coral - Peterborough Invites
              </div>
              <div className="box_secondary4" data-id="event-type-arrow"></div>
            </div>
            <div className="box_secondary5" data-id="event-type-description">
              You will need to be over the age of 18 to be successful in this
              role. During this call I will be discussing the details of the
              vacancy and answer any questions wh…
            </div>
          </a>
          <a
            className="box_final"
            data-id="event-type"
            href="https://calendly.com/rw-uk/15?back=1&month=2022-03"
          >
            <div className="box_final1">
              <div className="box_final2" data-id="event-type-maker"></div>
              <div className="box_final3" data-id="event-type-header-title">
                Entain (Retail) - Quick Chat
              </div>
              <div className="box_final4" data-id="event-type-arrow"></div>
            </div>
            <div className="box_final5" data-id="event-type-description">
              Let's discuss the role and yourself a little bit! Please choose a
              microsoft teams call for the best quality connection, otherwise
              I'll call you on the phone numbe…
            </div>
          </a>
        </div>
        <button className="done" type="button">Cookie settings</button>
      </div>
    </div>
  );
}

export default Page;
