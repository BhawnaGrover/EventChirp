import groupSection from "../assets/Groupsection.png";
import eventIcon from "../assets/eventsicon.png";
import friendIcon from "../assets/friendsicon.png";
function MainContent() {
  return (
    <div className="main_content">
      <p className="whitecontent para1">
        Just moved to a new city or have you outgrown old friends? <br></br>Need
        to find some friends, curate your tribe?
      </p>
      <p className="whitecontent para2">
        <strong>eChirp</strong> helps find those who share your{" "}
        <strong>passions, interests</strong> to build a{" "}
        <strong>real-life squad.</strong> C o m i n g s o o n to cities,
        neighborhoods near you. A social connector app where you can join
        concert goers, find a pickup game of cards or sport, or meet other
        knitting lovers all the while seeing who{" "}
        <strong>might be 1st, 2nd and 3rd degree friends</strong> to avoid the
        awkward stranger vibe. You're amongst friends at eChirp...let's make
        some new ones!
      </p>
      <div className="white_box">
        <h2>Why eChirp?</h2>
        <div className="divisions">
          <div className="division1">
            <img src={friendIcon} alt="icon"></img>
            <h3>1st, 2nd and 3rd degree friends!</h3>
            <p>
              eChirp helps find people who you may be connected with in some way
              already so you're not fully amongst strangers.
            </p>
          </div>
          <div className="division2">
            <img src={eventIcon} alt="icon"></img>
            <h3>Create Events, Find a Group!</h3>
            <p>
              Just moved to a new city? Need to find a new friend or want to
              curate your own tribe? eChirp helps find those who share your
              passions,interests to build a real-life squad.
            </p>
          </div>
        </div>
        <img src={groupSection} className="imgcenter" alt="branding"></img>
      </div>
    </div>
  );
}
export default MainContent;
