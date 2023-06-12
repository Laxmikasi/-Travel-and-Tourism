export default class contact extends Component {
    constructor(){
      super();
      this.state={
        participate : '',
        email: '',
        message : '',
        password : '',
        number:null
      
        
        
   };
    }
    submitHandler=(event)=>{
    
      alert(`Name : ${this.state.participate}\n Mobile number :${this.state.number}\n Email :${this.state.email}\n Password :${this.state.password}\n Message :${this.state.message}`);
    }
    
    changeHandler=(event)=>{
      let nam=event.target.name;
      let myvalue=event.target.value;
      if(nam==="number") {
          if(!Number(myvalue)) {
              alert("Number Should not be a character");
          } }
          this.setState({[nam]: myvalue});
      }
  
  
  
   render(){
      return(
  <div className='contact' id='contact'>
    <Navbar/>
  <h1 className='heading'>
    <span>C</span>
    <span>O</span>
    <span>N</span>
    <span>T</span>
    <span>A</span>
    <span>C</span>
    <span>T</span>
  </h1>
  <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.77027536353!2d77.51560167382866!3d12.922481215955754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e21c103985b%3A0x7af7b0258b8258fa!2sMatrical%20Technologies!5e0!3m2!1sen!2sin!4v1683559521054!5m2!1sen!2sin" 
  width="100%" height="250"  style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  <div className='row'>
    <div className='contact-info'>
  <div className='bx'>
    <h3><FaHome/>Address</h3>
    <p>Rajarajeshwari Nagar,<br/>
    Bengaluru , <br></br>
    Karnataka  560098</p>
  </div>
  <div className='bx'>
    <h3><FaEnvelope/>email</h3>
    <p>matrical@gmail.com</p>
  </div>
  <div className='bx'>
    <h3><BsTelephoneXFill/>phone</h3>
    <p>9036686725</p>
  </div>
  </div>
  <div className="container">
    <form className='f2' onSubmit={this.submitHandler}>
      <h3>get in touch</h3>
      <div className='inputbox'>
        <input type="text"name="participate" placeholder="full name" required onChange={this.changeHandler}/>
        <input type="mobile number" name="number" placeholder='mobile number' required onChange={this.changeHandler}/>
        <input type="email" name="email"placeholder="email" required onChange={this.changeHandler}/>
        <input type="password" name="password" placeholder='password'required onChange={this.changeHandler}/>
      
      </div>
      <textarea className='textarea'id="ta"cols="30"rows="10" name="message" placeholder="message" onChange={this.changeHandler}></textarea>
      <input type="submit" value="submit"/>
    </form>
  
  </div>
  
  
    </div>
    <Footer/>
  </div>
  
  
      
    )
  }
  }