import React from "react";
import Navbar from "../Nav Bar/Navbar";
import Footer from "./Footer";
import "./Terms.css";

export default function Terms() {
  return (
    <>
      <Navbar />
      <div className="container-terms">
        <div className="container-infoterms">
          <div className="card-terms">
            <h1>
              <b className="title-terms">
                Terms and Conditions for Blockbuster
              </b>
            </h1>

            <label className="subtitle">
              {" "}
              <b>Introduction</b>
            </label>

            <p>
              These Website Standard Terms and Conditions written on this
              webpage shall manage your use of our website, Blockbuster
              accessible at https://blockbuster-pf.vercel.app/.
            </p>

            <p>
              These Terms will be applied fully and affect to your use of this
              Website. By using this Website, you agreed to accept all terms and
              conditions written in here. You must not use this Website if you
              disagree with any of these Website Standard Terms and Conditions.
            </p>

            <p>
              Minors or people below 18 years old are not allowed to use this
              Website.
            </p>

            <label className="subtitle">
              {" "}
              <b> INTELLECTUAL PROPERTY RIGHTS</b>
            </label>

            <p>
              Other than the content you own, under these Terms, Blockbuster
              and/or its licensors own all the intellectual property rights and
              materials contained in this Website.
            </p>

            <p>
              You are granted limited license only for purposes of viewing the
              material contained on this Website.
            </p>

            <label className="subtitle">
              {" "}
              <b>RESTRICTIONS</b>
            </label>

            <p>You are specifically restricted from all of the following:</p>

            <ul>
              <li className="li">
                publishing any Website material in any other media;
              </li>
              <li className="li">
                selling, sublicensing and/or otherwise commercializing any
                Website material;
              </li>
              <li className="li">
                publicly performing and/or showing any Website material;
              </li>
              <li className="li">
                using this Website in any way that is or may be damaging to this
                Website;
              </li>
              <li className="li">
                using this Website in any way that impacts user access to this
                Website;
              </li>
              <li className="li">
                using this Website contrary to applicable laws and regulations,
                or in any way may cause harm to the Website, or to any person or
                business entity;
              </li>
              <li className="li">
                engaging in any data mining, data harvesting, data extracting or
                any other similar activity in relation to this Website;
              </li>
              <li className="li">
                using this Website to engage in any advertising or marketing.
              </li>
            </ul>

            <p>
              Certain areas of this Website are restricted from being access by
              you and Blockbuster may further restrict access by you to any
              areas of this Website, at any time, in absolute discretion. Any
              user ID and password you may have for this Website are
              confidential and you must maintain confidentiality as well.
            </p>

            <label className="subtitle">
              {" "}
              <b>YOUR COUNTENT</b>
            </label>

            <p>
              In these Website Standard Terms and Conditions, "Your Content"
              shall mean any audio, video text, images or other material you
              choose to display on this Website. By displaying Your Content, you
              grant Blockbuster a non-exclusive, worldwide irrevocable, sub
              licensable license to use, reproduce, adapt, publish, translate
              and distribute it in any and all media.
            </p>

            <p>
              Your Content must be your own and must not be invading any
              third-party’s rights. Blockbuster reserves the right to remove any
              of Your Content from this Website at any time without notice.
            </p>

            <label className="subtitle">
              {" "}
              <b>YOUR PRIVACY</b>
            </label>

            <p>
              Please read{" "}
              <a href="https://blockbuster-pf.vercel.app/privacy">
                Privacy Policy
              </a>
              .
            </p>

            <label className="subtitle">
              {" "}
              <b>NO WARRANTIES</b>
            </label>

            <p>
              This Website is provided "as is," with all faults, and Blockbuster
              express no representations or warranties, of any kind related to
              this Website or the materials contained on this Website. Also,
              nothing contained on this Website shall be interpreted as advising
              you.
            </p>

            <label className="subtitle">
              {" "}
              <b>LIMITATION OF LIABILITY</b>
            </label>
            <p>
              In no event shall Blockbuster, nor any of its officers, directors
              and employees, shall be held liable for anything arising out of or
              in any way connected with your use of this Website whether such
              liability is under contract.  Blockbuster, including its officers,
              directors and employees shall not be held liable for any indirect,
              consequential or special liability arising out of or in any way
              related to your use of this Website.
            </p>

            <label className="subtitle">
              {" "}
              <b>INDEMNIFICATION</b>
            </label>

            <p>
              You hereby indemnify to the fullest extent Blockbuster from and
              against any and/or all liabilities, costs, demands, causes of
              action, damages and expenses arising in any way related to your
              breach of any of the provisions of these Terms.
            </p>

            <label className="subtitle">
              {" "}
              <b>SEVERABILITY</b>
            </label>

            <p>
              If any provision of these Terms is found to be invalid under any
              applicable law, such provisions shall be deleted without affecting
              the remaining provisions herein.
            </p>

            <label className="subtitle">
              {" "}
              <b>SEVERABILITY</b>
            </label>

            <p>
              Blockbuster is permitted to revise these Terms at any time as it
              sees fit, and by using this Website you are expected to review
              these Terms on a regular basis.
            </p>

            <label className="subtitle">
              {" "}
              <b>ASSIGMENT</b>
            </label>

            <p>
              The Blockbuster is allowed to assign, transfer, and subcontract
              its rights and/or obligations under these Terms without any
              notification. However, you are not allowed to assign, transfer, or
              subcontract any of your rights and/or obligations under these
              Terms.
            </p>

            <label className="subtitle">
              {" "}
              <b>ENTIRE AGREEMENT</b>
            </label>

            <p>
              These Terms constitute the entire agreement between Blockbuster
              and you in relation to your use of this Website, and supersede all
              prior agreements and understandings.
            </p>

            <label className="subtitle">
              {" "}
              <b>GOVERNING LAW & JURISDICTION</b>
            </label>

            <p>
              These Terms will be governed by and interpreted in accordance with
              the laws of the State of ar, and you submit to the non-exclusive
              jurisdiction of the state and federal courts located in ar for the
              resolution of any disputes.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}