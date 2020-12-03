function Home() {
  return (
  <div>
    <div class="banner">
      <img src={process.env.PUBLIC_URL + "chbc.jpg"} alt=""></img>
    </div>
    <div class="body-text">
      <h4>
        Welcome to CapBap Web! This resource is here for you to learn about 
        the church and access any materials to strengthen your faith.
      </h4>

      <h4>Announcements</h4>
      <p> Main Sunday Service
      11:00am either under the Skating Pavilion or in a field at Anacostia Park, rain or shine
      1900 Anacostia Dr, Washington, DC 20020
      Logistics guide and bulletin for our service.
      Masks are required.
      </p>
      
      <p>
      Sunday Evening Service
      View livestream at 5:00pm here.
      Download the bulletin.
      </p>
      
      <p>
      Core Seminars
      9:00am on Sundays at our church building (525 A St NE).
      Classes Offered: Membership Matters, Old Testament Overview, How to Grow, Church History, and Biblical Manhood and Womanhood.
      Register Here if you would like to attend.
      </p>

      <p>
      Wednesday Night Bible Study
      7:00pm in Main Hall at our building (525 A St NE)
      Register here if you would like to attend.
      View Zoom Livestream here.
      </p>
    </div>

  </div>
  );
};

export default Home;