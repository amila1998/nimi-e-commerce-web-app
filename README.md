<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/nimi-e-commerce-web-app">
    <h3 align="center">NIMI e-Commerce Web Application</h3>
  </a>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
   
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This is MERN Stack simple e-commerce web application. There is two roles as Customer and Admin.
<p>
* Customer can view the all products and search products. <br/>
* Before buy or add to the cart customer must login or register to the system.<br/>
* After the add to the cart customer can place an order.<br/>
</p>

<p>
 * Admin must login to the system (if you want to be an Admin you should register as a customer and go to your mongodb database --> user collection --> edite the role attribute as 1 [role:'1']).<br/>
  * Admin can create update delete categories.<br/>
  * Admin can create update delete products.<br/>
  * Admin can conform the customer's orders.<br/>
</p>


<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [MongoDB](https://www.mongodb.com/) - MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. 
* [Express.js](https://expressjs.com/) - Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.
* [React.js](https://reactjs.org/) - React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.
* [Node.js](https://nodejs.org/en/) - Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.
<br/><br/>
Other used Packages<br/><br/>
  server side:<br/>
    * bcrypt<br/>
    * cloudinary<br/>
    * concurrently<br/>
    * cookie-parser<br/>
    * jsonwebtoken<br/>
    * express-fileupload<br/>
    * cors<br/><br/>

  client side:<br/>
    * react-toastify<br/>
    * axios<br/>
    * react-router-dom<br/><br/>

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

1. Must have an Installed [Node.js](https://nodejs.org/en/) to your local machine
2. Must have a [MongoDB](https://www.mongodb.com/) Account
3. Must have a [Cloudanary](https://www.cloudimage.io/en/home) Account

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/amila1998/nimi-e-commerce-web-app.git
   ```
3. Install NPM packages
   ```sh
     npm run install-all
   ```
4. Create `.env` file inside the server folder and Enter Following Keys
   ```.env
      MONGODB_URL = (your mongoDB Url)

      ACCESS_TOKEN_SECRET = adasdhasdhauiqwbqw0+ajdakjdhasd
      REFRESH_TOKEN_SECRET = ajdasdadwuiqwjhasvdasdajdahdka

      CLOUD_NAME=(Your Cloudanary Name)
      CLOUD_API_KEY=(Your Cloudanary Api Key)
      CLOUD_API_SECRET=(Your Cloudanary SECRET Key)
   ```
 5. To Run the Application
    ```sh
      npm run dev
     ```
     
     or to run the Server only
     
      ```sh
       npm run server
     ```
     
     and to run the client
      ```sh
       npm run client
     ```
     
     Server Running on http://localhost:5000 <br/>
     Default Client Runnig on http://localhost:3000

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

<h3>Customer</h3>

<div align="center">
  <img src="ReadmeDocs/images/productListCustomer.png" alt="Girl in a jacket" width="500" height="300">
  <img src="ReadmeDocs/images/login.png" alt="Girl in a jacket" width="500" height="300">
  <img src="ReadmeDocs/images/CustomerReg.png" alt="Girl in a jacket" width="500" height="300">
  <img src="ReadmeDocs/images/CartItems.png" alt="Girl in a jacket" width="500" height="300"><br/>
</div>
  <h3>Admin</h3>
 
<div align="center">
  <img src="ReadmeDocs/images/orderedList.png" alt="Girl in a jacket" width="500" height="200">
  <img src="ReadmeDocs/images/orderedItemsDetails.png" alt="Girl in a jacket" width="500" height="200">
  <img src="ReadmeDocs/images/createCategory.png" alt="Girl in a jacket" width="500" height="200">
  <img src="ReadmeDocs/images/createProduct.png" alt="Girl in a jacket" width="500" height="300">
  <img src="ReadmeDocs/images/productAdminView.png" alt="Girl in a jacket" width="500" height="300">
</div>

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/amila1998/nimi-e-commerce-web-app/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch 
3. Commit your Changes 
4. Push to the Branch 
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Your Name - [@real_amiladevin](https://twitter.com/real_amiladevin) - amiladevin@gmail.com

Project Link: [(https://github.com/amila1998/nimi-e-commerce-web-app](https://github.com/amila1998/nimi-e-commerce-web-app)

<p align="right">(<a href="#top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/amila1998/nimi-e-commerce-web-app.svg?style=for-the-badge
[contributors-url]: https://github.com/amila1998/nimi-e-commerce-web-app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/amila1998/nimi-e-commerce-web-app.svg?style=for-the-badge
[forks-url]: https://github.com/amila1998/nimi-e-commerce-web-app/network/members
[stars-shield]: https://img.shields.io/github/stars/amila1998/nimi-e-commerce-web-app.svg?style=for-the-badge
[stars-url]: https://github.com/amila1998/nimi-e-commerce-web-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/amila1998/nimi-e-commerce-web-app.svg?style=for-the-badge
[issues-url]: https://github.com/amila1998/nimi-e-commerce-web-app/issues
[license-shield]: https://img.shields.io/github/license/amila1998/nimi-e-commerce-web-app.svg?style=for-the-badge
[license-url]: https://github.com/amila1998/nimi-e-commerce-web-app/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/amila-devin-37811b83/

