function Contact() {
  return (
  <div>
    <div class='banner'>
      <img src={process.env.PUBLIC_URL + 'chbc.jpg'} alt=''></img>
    </div>
    <div className='body-text'>
      <h2>Contact Us</h2>
      <p>
        We welcome your questions or comments!
      </p>
      <p>
        Address: 525 A Street NE; Washington, DC 20002
      </p>
      <p>
        Phone: (202) 543-6111
      </p>
      <p>
        Fax: (202) 543-6113
      </p>
      <p>
        Email:  chbc@capbap.org
      </p>
      <p>
        Webmaster:  webmaster@capbap.org
      </p>
    </div>
  </div>
)};

export default Contact; 