import React from 'react';
import './flames.css';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
  from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function Flames() {
  const navigate = useNavigate()
  let flamesSubmit = async (e) => {
    try {
      e.preventDefault();
      let user = document.getElementById('form1').value
      // console.log("user : ",user);
      if (!user) {
        document.getElementById('user_required').style.display = 'block'
        document.getElementById('form1').style.marginBottom = '0px'
      } else {
        document.getElementById('user_required').style.display = 'none'
        document.getElementById('form1').style.marginBottom = '35px'
      }
      let partner = document.getElementById('form2').value
      // console.log("partner : ",partner);
      if (!partner) {
        document.getElementById('partner_required').style.display = 'block'
        document.getElementById('form2').style.marginBottom = '0px'
      } else {
        document.getElementById('partner_required').style.display = 'none'
        document.getElementById('form2').style.marginBottom = '35px'
      }
      if ((user) && (partner)) {
        // console.log("user",user);
        // console.log("partner",partner);
        const responce = await fetch('http://localhost:8001/flames', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            user: user,
            partner: partner,
          })
        })
        if (responce.status === 200) {
          console.log("responce : ", responce);
          let data = await responce.json()
          console.log("responce : ", data);

          localStorage.setItem('user', JSON.stringify(data));
          if ((data.message).includes('Friends')) {
            navigate('/friend')
            console.log("Friends");
          } else if ((data.message).includes('lovers')) {
            navigate('/lover')
            console.log("lovers");
          } else if ((data.message).includes('affection')) {
            navigate('/affection')
            console.log("affection");
          } else if ((data.message).includes('marriage couples')) {
            navigate('/couple')
            console.log("marriage couples");
          } else if ((data.message).includes('Enemy')) {
            navigate('/enemy')
            console.log("enemy");
          } else if ((data.message).includes('Brother and sister')) {
            navigate('/sister')
            console.log("sister");
          } else {
            navigate('/success')
            console.log("success");
          }

          // console.log("success");
          // console.log("responce is a : ",responce);
          // <Link to="/success">Click to view our about page</Link>
        } else {
          let data = await responce.json()
          console.log("failure");
          alert(`${data.message}`)
        }

        // console.log("user : ",user);

      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <MDBContainer className="container my-5 gradient-form">

      <MDBRow>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                style={{ width: '185px' }} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">We are The FLAMES Team</h4>
            </div>

            <p>Please Enter your name and partner name</p>


            <MDBInput id='form1' placeholder='username' type='text' required />
            <p id='user_required'>user name required</p>

            <MDBInput placeholder='partner name' id='form2' type='text' required />
            <p id='partner_required'>partner name required</p>

            <div className="text-center pt-1 mb-5 pb-1">
              {/* <MDBBtn >Sign in</MDBBtn> */}
              <Button className="mb-1 w-100 gradient-custom-2 signup" variant="primary" onClick={flamesSubmit}>submit</Button>
              <a className="text-muted" href="#!">Forgot password?</a>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <button className="mb-1 w-80 gradient-custom-2 mx-2" color='danger'>
                Danger
              </button>
            </div>

          </div>

        </MDBCol>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 class="mb-4">We are more than just a company</h4>
              <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Flames;