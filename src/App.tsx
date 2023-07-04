import { useState } from "react";
import arrow from "./assets/images/icon-arrow.svg";
import { calculateDifference } from "./helpers/calculateDifference";

function App() {
  /* let errorDay: boolean = false;
  let errorMonth: boolean = false;
  let errorYear: boolean = false;
  let emptyDay: boolean = false;
  let emptyMonth: boolean = false;
  let emptyYear: boolean = false; */

  const [age, setAge] = useState(["--", "--", "--"]);
  const [validDay, setValidDay] = useState(true);
  const [validMonth, setValidMonth] = useState(true);
  const [validYear, setValidYear] = useState(true);
  const [emptyDay, setEmptyDay] = useState(false);
  const [emptyMonth, setEmptyMonth] = useState(false);
  const [emptyYear, setEmptyYear] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const today: Date = new Date();

    const formElement = event.target as HTMLFormElement;

    let day = formElement.day.value;
    let month = formElement.month.value;
    let year = formElement.year.value;

    /* Check days */
    if (day == "") {
      setEmptyDay(true);
      setValidDay(true);
      day = "--";
    } else if (day <= 0 || day > 31) {
      setValidDay(false);
      setEmptyDay(false);
      day = "--";
    } else {
      setValidDay(true);
      setEmptyDay(false);
    }

    /* Check months */
    if (month == "") {
      setEmptyMonth(true);
      setValidMonth(true);
      month = "--";
    } else if (month <= 0 || month > 12) {
      setValidMonth(false);
      setEmptyMonth(false);
      month = "--";
    } else {
      setValidMonth(true);
      setEmptyMonth(false);
    }

    /* Check years */
    if (year == "") {
      setEmptyYear(true);
      setValidYear(true);
      year = "--";
    } else if (year > today.getFullYear()) {
      setValidYear(false);
      setEmptyYear(false);
      year = "--";
    } else {
      setValidYear(true);
      setEmptyYear(false);
    }

    setAge(calculateDifference(day, month, year));
  }

  return (
    <main>
      <form action="" onSubmit={handleSubmit} className="date-section">
        <section className="input-grid">
          <div className="custom-input">
            <label htmlFor="">{"Day"}</label>
            <input type="number" placeholder={"DD"} name="day" />
            <span className="error-message">
              {validDay ? null : "Must be a valid day"}
            </span>
            <span className="empty-message">
              {emptyDay ? "The field is required" : null}
            </span>
          </div>
          <div className="custom-input">
            <label htmlFor="">{"Month"}</label>
            <input type="number" placeholder={"MM"} name="month" />
            <span className="error-message">
              {validMonth ? null : "Must be a valid month"}
            </span>
            <span className="empty-message">
              {emptyMonth ? "The field is required" : null}
            </span>
          </div>
          <div className="custom-input">
            <label htmlFor="">{"Year"}</label>
            <input type="number" placeholder={"YYYY"} name="year" />
            <span className="error-message">
              {validYear ? null : "Must be in the past"}
            </span>
            <span className="empty-message">
              {emptyYear ? "The field is required" : null}
            </span>
          </div>
        </section>

        <section className="separation">
          <hr />
          <button type="submit">
            <img className="arrow" src={arrow} alt="" />
          </button>
        </section>
      </form>

      <section className="result-section">
        <div>
          <span className="result">{age[2] == "--" ? "--" : age[2]}</span>
          <span className="description">years</span>
        </div>
        <div>
          <span className="result">{age[1] == "--" ? "--" : age[1]}</span>
          <span className="description">months</span>
        </div>
        <div>
          <span className="result">{age[0] == "--" ? "--" : age[0]}</span>
          <span className="description">days</span>
        </div>
      </section>
      {/* <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div> */}
    </main>
  );
}

export default App;
