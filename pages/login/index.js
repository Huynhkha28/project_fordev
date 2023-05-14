
import React from 'react';
import { useRouter } from 'next/router';
import Header from "../../components/Header/Header";
export default function Login() {

  const router = useRouter();


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      Name: e.target.elements.Name.value,
      Password: e.target.elements.Password.value
    };

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
        console.log('Response:', data);
        
        

      if (response.ok) {
        // Redirect to the homepage
        router.push('/');
      } else {
        // Handle error
        console.error('Error:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
    };
    

  return (
    <>
      <Header/>
      <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login" onSubmit={handleSubmit}>
            
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input type="text" className="login__input" placeholder="User name / Email" name="Name" />
                      </div>
                      

            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input type="password" className="login__input" placeholder="Password" name="Password" />
                      </div>
                      

            <button className="button login__submit" type="submit">
              <span className="button__text">Log In Now</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
          <div className="social-login">
            <h3>log in via</h3>
            <div className="social-icons">
              <a href="#" className="social-login__icon fab fa-instagram"></a>
              <a href="#" className="social-login__icon fab fa-facebook"></a>
              <a href="#" className="social-login__icon fab fa-twitter"></a>
            </div>
          </div>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
    </>
  );
}


