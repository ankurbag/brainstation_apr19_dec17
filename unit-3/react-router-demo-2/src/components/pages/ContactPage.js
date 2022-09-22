function ContactPage() {
  return (
    <>
      <h1>Contact Page</h1>

      <div>
        <label for="fname">Email:</label>
        <br />
        <input type="text" value="abc@gmail.com" readonly />
        <br />
        <br />
        <label for="lname">Phone Number:</label>
        <br />
        <input type="text" value="+1 236 888 8888" readonly />
        <br />
      </div>
    </>
  );
}

export default ContactPage;
