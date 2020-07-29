import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state={
      isRedirect: false
    }
  }
  isChange=(event)=>{
    /**
     * Lấy ra cả mảng gồm tên trường của input và giá trị của nó
     */
    const {name, value}=event.target
    /**
     * Khi lấy được rồi ta lưu vào state bằng cú pháp trong react lưu hết tất cả các trường và giá trị của từng input
     * vào: this.setState({[name]:value}) mà ta không cần phải khai báo các biến ở state trên constructor đáng ra ta phải khai báo trước là
     * this.state({fName:'',fEmail:'',fPhone:'', fMess:''}) rồi trong hàm này mới setState({fName: event.target.value, viết tương tự})
     * nhưng react cung cấp cú pháp [name]:value là có thể lấy hết từng trường input trong form và giá trị tương ưng
     * rồi lưu hết vào state mà k cần khai báo như trên cũng có trong state các trường là fName, fEmail...
     */
    this.setState({[name]:value})
  }
  /**
   * 
   * @param {*} event 
   * Thêm phần submitForm để khi nhấn submit sẽ không chuyển trang mà sẽ redirect sang một trang khác.
   */
  submitForm(event){
    event.preventDefault();
    this.setState({
      isRedirect: true
    })
  }
  render() {
    if(this.state.isRedirect===true){
      console.log(this.state)
      return <Redirect to="/"/>
    }
    return (
      <section className="page-section" id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Contact Us</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <form id="contactForm" name="sentMessage" noValidate="novalidate">
            <div className="row align-items-stretch mb-5">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" name="fName" id="name" type="text"  onChange={(event)=>this.isChange(event)} placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
                  <p className="help-block text-danger" />
                </div>
                <div className="form-group">
                  {/* 
                    Biến event là biến sự kiện xảy ra. Lưu trữ tên của trường xảy ra sự kiện
                    và giá trị của trường đó. muốn lấy ra tên trường: event.target.name, lấy giá trị event.target.value
                   */}
                  <input className="form-control" id="email" name="fEmail" type="email"  onChange={(event)=>this.isChange(event)} placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                  <p className="help-block text-danger" />
                </div>
                <div className="form-group mb-md-0">
                  <input className="form-control" id="phone" name="fPhone" type="tel"  onChange={(event)=>this.isChange(event)} placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
                  <p className="help-block text-danger" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-group-textarea mb-md-0">
                  <textarea className="form-control" id="message" name="fMess" onChange={(event)=>this.isChange(event)} placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                  <p className="help-block text-danger" />
                </div>
              </div>
            </div>
            <div className="text-center">
              <div id="success" />
              <button className="btn btn-primary btn-xl text-uppercase" onClick={(event)=>this.submitForm(event)} id="sendMessageButton" type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </section>
    )
  }
}
