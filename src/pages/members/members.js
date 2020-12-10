function Members() {
  return (
  <div> 
    <div class='banner'>
      <img src={process.env.PUBLIC_URL + 'chbc.jpg'} alt=''></img>
    </div>
    <div className="body-text">
      <h2>Members </h2>
      <p>
        This is the members only section that is still being built out! 
        If you've gotten here it means you've logged in successfully.
      </p>
    </div>
  </div>
  );
}

export default Members;