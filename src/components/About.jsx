import React from "react";
import './/mystyle.module.css';
function About() {
  return (
    <div className="article">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-6">
            <h1 class="font-weight-light"><strong>Scheduling Major Articles</strong></h1>
            <div>
              <form>
                <label>Keywords
                  <input type="text" />
                </label>
                <label>Mail Title:
                  <input type="text" />
                </label>
                <label>Reference:
                  <input type="text" />
                </label>
                <label>To_Reference:
                  <input type="text" />
                </label>
                <label>Deadline
                  <input type="date" />
                </label>
                <br></br>
                <div className="radio">Distinguished by:
                <label>
                  <input type="radio" />General Search
                </label>
                <label >
                  <input type="radio" />Advanced Search
                </label>
                </div>
                <div className="radio">Search Option:
                <label>
                  <input type="radio" />Naver
                </label>
                <label >
                  <input type="radio" />Google
                </label>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div>
          <button>Search</button>
        </div>
        <div>
              <h1 class="font-weight-light">Scheduling Registration Status</h1>
              <table>
              <tr>
                <th>Keywords</th>
                <th>Mail Title</th>
                <th>To:</th>
                <th>Reference</th>
                </tr>
                <tr>
                <td>UBIST, UBIST2, 000</td>
                <td>Pharamecuticals are rising on the years</td>
                <td>Ali</td>
                <td>ali@daewoong.kr</td>
                </tr>
                <tr>
                <td>UBIST, UBIST2, 000</td>
                <td>Medicine are rising on the years</td>
                <td>Ali2</td>
                <td>ali2@daewoong.kr</td>
                </tr>
                <tr>
                <td>UBIST, UBIST2, 000</td>
                <td>Pharmacies are rising on the years</td>
                <td>Ali3</td>
                <td>ali3@daewoong.kr</td>
                </tr>
                <tr>
                <td>Daewoong</td>
                <td>UBISTS are rising on the years</td>
                <td>Ali4</td>
                <td>ali4@daewoong.kr</td>
                </tr>
              </table>
              <div class="flex-container">
              <button>Recommendation</button>
              <button>Modify</button>
              <button>Subscription</button>
        </div>
              </div>
              <div>
              </div>
      </div>
    </div>
  );
}

export default About;