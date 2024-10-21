import { Col, Container, Row } from "react-bootstrap";
import pic1 from "../../../Assets/Projects/bannerEnigma.png";
import flashingPic from "../../../Assets/Projects/flashing.png";
import readingPic from "../../../Assets/Projects/reading.png";

function Enigma() {
  return (
    <Container fluid className="project-about">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <div>
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                About <strong className="purple">ENIGMA</strong>
              </h1>
            </div>
            <div
              style={{
                flexGrow: 1,
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              The problem that this tools wants to solve is the fact that for
              cold wallets we are pushed to store our seeds in cardboard pieces
              or carve them on a metallic plate. When this offers advantages
              over hacking and in case of the metallic plates, over time and
              humid environment, they are unreliable as solutions and exposed to
              be stolen.
              <br />
              So the idea is to take seeds, encrypt them (this encryption will
              be done by a password that only you decide and have) and flash
              this encrypted message onto a NTAG (NFC chip in any form). ENIGMA
              can also read messages from NTAGs and offer you the possibility of
              try to decrypt them (if you have the correct password).
              <br />
              So, what this offers is two layers of security: The fact that
              maybe nobody will know that a ring, sticker, or any of the
              available NTAG forms contains any kind of information. The second
              one is that, even if anybody knows, and read that information,
              only the person with the password will be able to decrypt it.
              <br />
              Alright, but why would I use the app? I do not really trust
              ENIGMA. For this reason, enigma is a only-client application. It
              does not access any resource outside of your phone. Technically,
              you could buy a brand new phone, download the app, disconnect
              internet and any other external connection to the internet and use
              the application. After this, delete the application and reset the
              mobile so you make sure no data has been cached (this is for you
              to have proof, the app does not cache anything). Whenever you need
              to read, repeat the process and just ready the info instead of
              flash.
            </div>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={pic1} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <div>
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                About <strong className="purple">flashing feature</strong>
              </h1>
            </div>
            <div
              style={{
                flexGrow: 1,
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              Flashing is the process that involves encrypting your message and
              flashing (writing it) onto a NTAG. You will need to provide the
              message, the private key (password) ENIGMA will use to encrypt
              (using AES) and then, flash. And what do I do with the password?
              Well, personally I use a password that I can remember, because I
              have enough layers of security. Whereas before I have a piece of
              cardboard, now I have my seeds in a NTAG in my ring. Only me knows
              (and now you) that I stored them there, now I need ENIGMA and my
              PK (password) to decrypt it. When reading, the content will not
              change. And you can read as many times as you need.
              <br />
              The information inside the NTAG after flashed is not LOCKED by
              default. You can do this with any other NFC utility app or wait
              for the update of ENIGMA to do it (we working on it). This means,
              that if you are playing with your NTAG and flash something else,
              you will lose the information you had in frist place.
            </div>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={flashingPic} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <div>
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                About <strong className="purple">reading feature</strong>
              </h1>
            </div>
            <div
              style={{
                flexGrow: 1,
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              Go to read mode, scan the NTAG and after this, ENIGMA will ask you
              for your PK. Only the one that decrypts the message will reveal
              the content.
            </div>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={readingPic} alt="about" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Enigma;
