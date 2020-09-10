/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Products from 'views/Products';
import Enquiry from 'views/Enquiry';
import ContactUs from 'views/ContactUs';

var routes = [
  {
    path: "/dashboard",
    name: "SILTRON ELECTRONICS",
    icon: "nc-icon nc-layout-11",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/products",
    name: "Products",
    icon: "nc-icon nc-album-2",
    component: Products,
    layout: "/admin",
  },
  {
    path: "/enquiry",
    name: "Enquiry",
    icon: "nc-icon nc-book-bookmark",
    component: Enquiry,
    layout: "/admin",
  },
  {
    path: "/contactus",
    name: "Contact Us",
    icon: "nc-icon nc-email-85",
    component: ContactUs,
    layout: "/admin",
  },
];
export default routes;
