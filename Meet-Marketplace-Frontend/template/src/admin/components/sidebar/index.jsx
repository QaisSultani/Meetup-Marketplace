import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";

class SidebarNav extends Component {
    constructor(props){
      super(props);
      this.state={
        show: null
      }
    }

  componentDidMount() {
        let $slimScrolls = $('.slimscroll');

        if($slimScrolls.length > 0) {
          $slimScrolls.slimScroll({
            height: 'auto',
            width: '100%',
            position: 'right',
            size: '7px',
            color: '#ccc',
            allowPageScroll: false,
            wheelStep: 10,
            touchScrollStep: 100
          });
          let wHeight = $(window).height() - 60;
          $slimScrolls.height(wHeight);
          $('.sidebar .slimScrollDiv').height(wHeight);
          $(window).resize(function() {
            let rHeight = $(window).height() - 60;
            $slimScrolls.height(rHeight);
            $('.sidebar .slimScrollDiv').height(rHeight);
          });
        }

        $('#sidebar-menu a').on('click', function(e) {
          if($(this).parent().hasClass('submenu')) {
            e.preventDefault();
          }
          if(!$(this).hasClass('subdrop')) {
            $('ul', $(this).parents('ul:first')).slideUp(350);
            $('a', $(this).parents('ul:first')).removeClass('subdrop');
            $(this).next('ul').slideDown(350);
            $(this).addClass('subdrop');
          } else if($(this).hasClass('subdrop')) {
            $(this).removeClass('subdrop');
            $(this).next('ul').slideUp(350);
          }
        });
        $('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');
  }

  handleShow(id){
    this.setState({
        show: id
    })
  }
  
  render() {
   
    const {  location } = this.props
    let pathname = location.pathname

   return (
    <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title"> 
                <span>Main</span>
              </li>
              <li className={pathname === '/admin' ?"active" :""}> 
                <Link to="/admin"><i className="fe fe-home" /> <span>Dashboard</span></Link>
              </li>
              <li className={pathname.includes('appointment-list') ?"active" :""}> 
                <Link to="/admin/appointment-list"><i className="fe fe-layout" /> <span>Appointments</span></Link>
              </li>
              <li className={pathname.includes('specialities') ?"active" :""}> 
                <Link to="/admin/specialities"><i className="fe fe-users" /> <span>Specialities</span></Link>
              </li>
              <li className={pathname.includes('doctor-list') ?"active" :""}> 
                <Link to="/admin/doctor-list"><i className="fe fe-user-plus" /> <span>Doctors</span></Link>
              </li>
              <li className={pathname.includes('patient-list') ?"active" :""}> 
                <Link to="/admin/patient-list"><i className="fe fe-user" /> <span>Patients</span></Link>
              </li>
              <li className={pathname.includes('reviews') ?"active" :""}> 
                <Link to="/admin/reviews"><i className="fe fe-star-o" /> <span>Reviews</span></Link>
              </li>
              <li className={pathname.includes('transactions-list') ?"active" :""}> 
                <Link to="/admin/transactions-list"><i className="fe fe-activity" /> <span>Transactions</span></Link>
              </li>
              <li className={pathname.includes('settings') ?"active" :""}> 
                <Link to="/admin/settings"><i className="fe fe-vector" /> <span>Settings</span></Link>
              </li>
              <li className="submenu">
                <a href="#"><i className="fe fe-document" /> <span> Reports</span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><Link to="/admin/invoice-report" className={pathname.includes('invoice-report') ?"active" :""}>Invoice Reports</Link></li>
                </ul>
              </li>
              <li className="menu-title"> 
                <span>Pages</span>
              </li>
              <li className="submenu">
                <a href="#"><i className="fe fe-document" /> <span> Blog </span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><Link to="/admin/blog" className={pathname === '/admin/blog' ?"active" :""}> Blog </Link></li>
                  <li><Link to="/admin/blog-details" className={pathname.includes('blog-details') ?"active" :""}> Blog Details</Link></li>
                  <li><Link to="/admin/add-blog" className={pathname.includes('add-blog') ?"active" :""}> Add Blog </Link></li>
                  <li><Link to="/admin/edit-blog" className={pathname.includes('edit-blog') ?"active" :""}> Edit Blog </Link></li>
                </ul>
              </li>
              <li className={pathname.includes('product-list') ?"active" :""}><Link to="/admin/product-list"><i className="fe fe-layout" /> <span>Product List</span></Link></li>
              <li className={pathname.includes('pharmacy-list') ?"active" :""}><Link to="/admin/pharmacy-list"><i className="fe fe-vector" /> <span>Pharmacy List</span></Link></li>
              <li className={pathname.includes('profile') ?"active" :""}> 
                <Link to="/admin/profile"><i className="fe fe-user-plus" /> <span>Profile</span></Link>
              </li>
              <li className="submenu">
                <a href="#"><i className="fe fe-document" /> <span> Authentication </span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><Link to="/admin/login"> Login </Link></li>
                  <li><Link to="/admin/register"> Register </Link></li>
                  <li><Link to="/admin/forgotPassword"> Forgot Password </Link></li>
                  <li><Link to="/admin/lockscreen"> Lock Screen </Link></li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#"><i className="fe fe-warning" /> <span> Error Pages </span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><Link to="/admin/404">404 Error </Link></li>
                  <li><Link to="/admin/500">500 Error </Link></li>
                </ul>
              </li>
              <li> 
                <Link to="/admin/blank-page"><i className="fe fe-file" /> <span>Blank Page</span></Link>
              </li>
              <li className="menu-title"> 
                <span>UI Interface</span>
              </li>
              <li> 
                <Link to="/admin/components"><i className="fe fe-vector" /> <span>Components</span></Link>
              </li>
              <li className="submenu">
                <a href="#"><i className="fe fe-layout" /> <span> Forms </span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><Link to="/admin/basic-input">Basic Inputs </Link></li>
                  <li><Link to="/admin/form-input-group">Input Groups </Link></li>
                  <li><Link to="/admin/form-horizontal">Horizontal Form </Link></li>
                  <li><Link to="/admin/form-vertical"> Vertical Form </Link></li>
                  <li><Link to="/admin/form-mask"> Form Mask </Link></li>
                  <li><Link to="/admin/form-validation"> Form Validation </Link></li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#"><i className="fe fe-table" /> <span> Tables </span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><Link to="/admin/tables-basic">Basic Tables </Link></li>
                  <li><Link to="/admin/data-tables">Data Table </Link></li>
                </ul>
              </li>
              <li className="submenu">
                <a href=""><i className="fe fe-code" /> <span>Multi Level</span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li className="submenu">
                    <a href=""> <span>Level 1</span> <span className="menu-arrow" /></a>
                    <ul style={{display: 'none'}}>
                      <li><a href=""><span>Level 2</span></a></li>
                      <li className="submenu">
                        <a href=""> <span> Level 2</span> <span className="menu-arrow" /></a>
                        <ul style={{display: 'none'}}>
                          <li><a href="">Level 3</a></li>
                          <li><a href="">Level 3</a></li>
                        </ul>
                      </li>
                      <li><a href=""> <span>Level 2</span></a></li>
                    </ul>
                  </li>
                  <li>
                    <a href=""> <span>Level 1</span></a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
}
}

export default withRouter(SidebarNav);
