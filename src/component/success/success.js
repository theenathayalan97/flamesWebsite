import React from "react";
import "./success.css";
import DateCountdown from "react-date-countdown-timer";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
// import { useNavigate } from "react-router-dom";

export default function Success() {
  const { width, height } = useWindowSize();
  // const navigate = useNavigate()
  let user = localStorage.getItem('user')
  let parsedUser = JSON.parse(user);

  let message = parsedUser.message;
  // console.log("user is ",user);
  // console.log(" the value is : ", JSON.parse(user));
  return (
    <div className="App">
      <Confetti width={width} height={height} numberOfPieces={100} />
      <img
        alt="bg-img"
        className="bg-img"
        src="https://annapimenta.pl/wp-content/uploads/2019/09/Where_to_buy_an_engagement_ring_in_Cracow_photographer_surprise_proposal-9-1000x550.jpg"
      />
      <div className="bg-color"> </div>
      <div className="container">
        <h1>{message}</h1>
        <span className="desc">
          This is how long you have left to engage <br />
          <small>and anyone else</small>
        </span>
        <DateCountdown
          dateTo="September 18, 2020 16:00:00 UTC+03:00"
          callback={() => console.log("you did it")}
        />
        <p>
          made with love by
          {/* <a href="https://github.com/osamaakb" target={"_blank"}>
            Osama
          </a> */}
          ❤️
        </p>
      </div>
    </div>
  );
}
