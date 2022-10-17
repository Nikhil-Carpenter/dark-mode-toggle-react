import React from 'react'

const Footer = ({myTheme}) => {
  return (
    <footer data-theme={myTheme} className='--text-center'>
        <p>Copyright &copy; 2022, Nikhil Carpenter</p>
    </footer>
  )
}

export default Footer;