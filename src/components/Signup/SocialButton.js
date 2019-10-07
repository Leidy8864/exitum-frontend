import React from 'react'
import SocialLogin from 'react-social-login'
 
const Button = ({ children, triggerLogin, ...props }) => (
  <button onClick={triggerLogin} {...props} cssClass="fab fa-facebook-f">
    { children }
  </button>
)
 
export default SocialLogin(Button)