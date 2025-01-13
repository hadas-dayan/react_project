function Home() {
  return (
      <>
          <div className="allPic"> 
              <div className="mainPic">
                  <img src="/imeges/home.png" alt="Main destination"/>
              </div>
              <div className="popular"> 
                  <div className="textP">
                      <h1>מוצרים מובילים</h1>
                  </div>
                  <div className="imgp">
                      <img src="/imeges/git1.webp" alt="Popular destination 1"/>
                      <img src="/imeges/git2.webp" alt="Popular destination 2"/>
                      <img src="/imeges/git3.webp" alt="Popular destination 3"/>
                      <img src="/imeges/git4.webp" alt="Popular destination 4"/>
                      <img src="/imeges/git5.webp" alt="Popular destination 5"/>
                  </div>
              </div>

              {/* <div className="fevorite">
                  <div className="textF">
                      <h1>שריין עכשיו לעונה האהובה עליך</h1>
                  </div>
                  <div className="imgF">
                      <img src="/imeges/sesone1.png" alt="Seasonal offer 1"/>
                      <img src="/imeges/sesone2.png" alt="Seasonal offer 2"/>
                      <img src="/imeges/sesone3.png" alt="Seasonal offer 3"/>
                      <img src="/imeges/sesone4.png" alt="Seasonal offer 4"/>
                  </div>
              </div> */}
          </div>
      </>
  );
}

export default Home;
