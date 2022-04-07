import React from 'react'
import { Link } from 'react-router-dom'
 import "./home.css";
// import "./home.scss";


export default function Home() {
    return (
        <div className="text-center">
             <div>
        {/* Designined by CodingLab | www.youtube.com/codinglabyt */}
        <meta charSet="UTF-8" />
        {/*<title> Responsiive Admin Dashboard | CodingLab </title>*/}
        <link rel="stylesheet" href="style.css" />
        {/* Boxicons CDN Link */}
        {/* <link href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet" /> */}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <div className="sidebar">
          <div className="logo-details">
            <i className="bx bxl-c-plus-plus" />
            <span className="logo_name">code</span>
          </div>
          <ul className="nav-links">
            <li>
              <a href="/" className="active">
                <i className="bx bx-grid-alt" />
                <span className="links_name">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="bx bx-box" />
                <span className="links_name">Product</span>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="bx bx-list-ul" />
                <span className="links_name">Order list</span>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="bx bx-pie-chart-alt-2" />
                <span className="links_name">Analytics</span>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="bx bx-coin-stack" />
                <span className="links_name">Stock</span>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="bx bx-book-alt" />
                <span className="links_name">Total order</span>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="bx bx-user" />
                <span className="links_name">Team</span>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="bx bx-message" />
                <span className="links_name">Messages</span>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="bx bx-heart" />
                <span className="links_name">Favrorites</span>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="bx bx-cog" />
                <span className="links_name">Setting</span>
              </a>
            </li>
            <li className="log_out">
              <a href="/">
                <i className="bx bx-log-out" />
                <span className="links_name">Log out</span>
              </a>
            </li>
          </ul>
        </div>
        <section className="home-section">
          <nav>
            <div className="sidebar-button">
              <i className="bx bx-menu sidebarBtn" />
              <span className="dashboard">Dashboard</span>
            </div>
            <div className="search-box">
              <input type="text" placeholder="Search..." />
              <i className="bx bx-search" />
            </div>
            <div className="profile-details">
              {/*<img src="images/profile.jpg" alt="">*/}
              <span className="admin_name">vishal kuamr</span>
              <i className="bx bx-chevron-down" />
            </div>
          </nav>
          <div className="col-md-10">
        <table className="table table-stripped">
          <tbody>
            <tr>
              <td><input type="checkbox" /></td>
              <td><i className="fa fa-star" /></td>
              <td><b>Mozilla</b></td>
              <td><b>In celebration of women and girls everywhere</b></td>
              <td />
              <td>Mar 10</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td><i className="fa fa-star-o" /></td>
              <td>Dan Glenn</td>
              <td>[ptcuser-announcements] - PTC/USER Expert Speaker Series Webinar March 9, 2017 11AM (EST)</td>
              <td><i className="fa fa-paperclip" /></td>
              <td>Mar 10</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td><i className="fa fa-star-o" /></td>
              <td>Jetpack</td>
              <td>Announcing some highly requested improvements and our new affiliate program</td>
              <td />
              <td>Mar 08</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td><i className="fa fa-star-o" /></td>
              <td>Jetpack</td>
              <td>Announcing some highly requested improvements and our new affiliate program</td>
              <td />
              <td>Mar 08</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td><i className="fa fa-star-o" /></td>
              <td>Jetpack</td>
              <td>Announcing some highly requested improvements and our new affiliate program</td>
              <td />
              <td>Mar 08</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td><i className="fa fa-star-o" /></td>
              <td>Jetpack</td>
              <td>Announcing some highly requested improvements and our new affiliate program</td>
              <td />
              <td>Mar 08</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td><i className="fa fa-star-o" /></td>
              <td>Jetpack</td>
              <td>Announcing some highly requested improvements and our new affiliate program</td>
              <td />
              <td>Mar 08</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td><i className="fa fa-star-o" /></td>
              <td>Jetpack</td>
              <td>Announcing some highly requested improvements and our new affiliate program</td>
              <td />
              <td>Mar 08</td>
            </tr>
          </tbody>
        </table>
      </div>
        </section>
      </div>

            
                <button className="primary-button">Log out</button>
            
        </div>
    );
}
