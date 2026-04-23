import React from 'react'
import './contacts.css'

function contacts() {
  return (
    <div className='table'>
      <table>
        <tr>
          <td><h2>Name </h2></td>
          <td><h3>Kavidharan S</h3></td>
        </tr>
        <tr>
          <td><h2>Age</h2></td>
          <td><h3>22</h3></td>
        </tr>
        <tr>
          <td><h2>Address</h2></td>
          <td><h3>Panchanathipuran,Ammaiyandi,Peravurani,
            Thanjavur,Tamilnadu,614 623</h3></td>
        </tr>
        <tr>
          <td><h2>Phone No</h2></td>
          <td><h3>6369126491</h3></td>
        </tr>
        <tr>
          <td><h2>Email</h2></td>
          <td><h3>Kavidharan496@gmail.com</h3></td>
        </tr>
        <tr>
          <td><h2>Linkedin</h2></td>
          <td><a href="https://www.linkedin.com/in/kavidharan-s/"><h3>https://www.linkedin.com/in/kavidharan-s</h3></a></td>
        </tr>
        <tr>
          <td><h2>Github</h2></td>
          <td><a href="https://github.com/Kavidharan"><h3>https://github.com/Kavidharan</h3></a></td>
        </tr>
      </table>
    </div>
  )
}

export default contacts