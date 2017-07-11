var navTpl = new Ext.XTemplate(
    '<div id="main-nav" class="navbar navbar-inverse navbar-fixed-top">'+
      '<div class="nav-top">'+
        '<div class="container">'+
          '<div class="navbar-header">'+
            '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">'+
              '<span class="icon-bar"></span>'+
              '<span class="icon-bar"></span>'+
              '<span class="icon-bar"></span>'+
            '</button>'+

            '<a class="navbar-brand" href="#">'+
              '<img src="app/assets/img/logo.png" alt="">'+
            '</a>'+
            '<a id="change-logo-link" class="change-logo" href="/company/edit"><span class="label label-info" style="font-weight: 200;">{Nav.MY_LOGO}</span></a>'+
          '</div>'+
          '<div class="navbar-collapse collapse navbar-right">'+
            '<ul class="nav navbar-nav">'+
              '<form class="navbar-form navbar-left">'+
                '<div class="form-group">'+
                  '<input type="text" class="form-control" placeholder="{Nav.SEARCH}">'+
                '</div>'+
              '</form>'+

              '<li>'+
                '<a href="#">'+
                  '<span class="glyphicon glyphicon-info-sign" aria-hidden="true" style="margin-right: 3px;"></span>'+
                  '{Nav.HELP}'+
                '</a>'+
              '</li>'+
              '<li>'+
                '<a href="#">'+
                  '<span class="glyphicon glyphicon-headphones" aria-hidden="true" style="margin-right: 3px;"></span>'+
                  '{Nav.SUPPORT}'+
                '</a>'+
              '</li>'+
              '<li>'+
                '<a href="#">'+
                  '<span class="glyphicon glyphicon-cog" aria-hidden="true" style="margin-right: 3px;"></span>'+
                  '{Nav.CONFIGURATION}'+
                '</a>'+
              '</li>'+
              '<li>'+
                '<a href="#">'+
                  '<span class="glyphicon glyphicon-log-out" aria-hidden="true" style="margin-right: 3px;"></span>'+
                  '{Nav.EXIT}'+
                '</a>'+
              '</li>'+
            '</ul>'+

          '</div>'+
        '</div>'+
      '</div>'+

      '<div class="nav-menu clearfix">'+
        '<div class="container">'+
          '<ul>'+
              '<li>'+
                '<a href="index.html">{Nav.HOME}</a>'+
              '</li>'+
              '<li class="mega-menu submenu">'+
                '<a href="#" class="sf-with-ul">{Nav.INCOME}</a>'+
                '<ul style="display: none;">'+
                    '<li><a href="about.html">About Us</a></li>'+
                    '<li><a href="prices.html">Prices</a></li>'+
                    '<li><a href="services.html">Services</a></li>'+
                    '<li><a href="faq.html">FAQ</a></li>'+
                    '<li><a href="gallery.html">Gallery</a></li>'+
                    '<li><a href="login.html">Login Page</a></li>'+
                    '<li><a href="sign-up.html">Sign Up</a></li>'+
                    '<li><a href="page-404.html">Page 404</a></li>'+
                    '<li><a href="page-500.html">Page 500</a></li>'+
                    '<li><a href="search-result.html">Search Result</a></li>'+
                    '<li><a href="contact.html">Contact Us</a></li>'+
                '</ul>'+
              '</li>'+
              '<li class="submenu">'+
                '<a href="#" class="sf-with-ul">{Nav.EXPENSES}</a>'+
                '<ul style="display: none;">'+
                    '<li><a href="about.html">About Us</a></li>'+
                    '<li><a href="prices.html">Prices</a></li>'+
                    '<li><a href="services.html">Services</a></li>'+
                    '<li><a href="faq.html">FAQ</a></li>'+
                    '<li><a href="gallery.html">Gallery</a></li>'+
                    '<li><a href="login.html">Login Page</a></li>'+
                    '<li><a href="sign-up.html">Sign Up</a></li>'+
                    '<li><a href="page-404.html">Page 404</a></li>'+
                    '<li><a href="page-500.html">Page 500</a></li>'+
                    '<li><a href="search-result.html">Search Result</a></li>'+
                    '<li><a href="contact.html">Contact Us</a></li>'+
                '</ul>'+
              '</li>'+
              '<li class="active submenu">'+
                '<a href="#" class="sf-with-ul">{Nav.CONTACT}</a>'+
                '<ul style="display: none;">'+
                    '<li><a href="portfolio-4.html">Portfolio 4</a></li>'+
                    '<li><a href="portfolio-3.html">Portfolio 3</a></li>'+
                    '<li><a href="portfolio-2.html">Portfolio 2</a></li>'+
                '</ul>'+
              '</li>'+
              '<li class="submenu">'+
                '<a href="#" class="sf-with-ul">{Nav.INVENTORY}</a>'+
                '<ul class="menu-right-position" style="display: none;">'+
                    '<li><a href="blog-page.html">Blog Page</a></li>'+
                    '<li><a href="blog-item.html">Blog Item</a></li>'+
                '</ul>'+
              '</li>'+
              '<li class="submenu">'+
                '<a href="#" class="sf-with-ul">{Nav.BANKS}</a>'+
                '<ul class="menu-right-position" style="display: none;">'+
                    '<li><a href="blog-page.html">Blog Page</a></li>'+
                    '<li><a href="blog-item.html">Blog Item</a></li>'+
                '</ul>'+
              '</li>'+
              '<li class="submenu">'+
                '<a href="#" class="sf-with-ul">{Nav.CATEGORIES}</a>'+
                '<ul class="menu-right-position" style="display: none;">'+
                    '<li><a href="blog-page.html">Blog Page</a></li>'+
                    '<li><a href="blog-item.html">Blog Item</a></li>'+
                '</ul>'+
              '</li>'+
              '<li class="submenu">'+
                '<a href="#" class="sf-with-ul">{Nav.REPORTS}</a>'+
                '<ul class="menu-right-position" style="display: none;">'+
                    '<li><a href="blog-page.html">Blog Page</a></li>'+
                    '<li><a href="blog-item.html">Blog Item</a></li>'+
                '</ul>'+
              '</li>'+
          '</ul>'+

          '<ul class="navbar-right">'+
            '<li class="dropdown">'+
              '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{Nav.NEW} <span class="caret"></span></a>'+
              '<ul class="dropdown-menu">'+
                '<li>'+
                  '<a href="#">'+
                    '<span class="glyphicon glyphicon-usd" aria-hidden="true"></span>'+
                    ' {Nav.INCOME}'+
                  '</a>'+
                '</li>'+
                '<li>'+
                  '<a href="#">'+
                    '<span class="glyphicon glyphicon-usd" aria-hidden="true"></span>'+
                    ' {Nav.EXPENSES}'+
                  '</a>'+
                '</li>'+
                '<li role="separator" class="divider"></li>'+
                '<li>'+
                  '<a href="#">'+
                    '<span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span>'+
                    ' {Nav.SALES_INVOICE}'+
                  '</a>'+
                '</li>'+
                '<li>'+
                  '<a href="#">'+
                    '<span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span>'+
                    ' {Nav.REMISSION}'+
                  '</a>'+
                '</li>'+
                '<li>'+
                  '<a href="#">'+
                    '<span class="glyphicon glyphicon-book" aria-hidden="true"></span>'+
                    ' {Nav.SUPPLIER_INVOICE}'+
                  '</a>'+
                '</li>'+
                '<li>'+
                  '<a href="#">'+
                    '<span class="glyphicon glyphicon-book" aria-hidden="true"></span>'+
                    ' {Nav.PURCHASE_ORDER}'+
                  '</a>'+
                '</li>'+
                '<li role="separator" class="divider"></li>'+
                '<li>'+
                  '<a href="#">'+
                    '<span class="glyphicon glyphicon-tags" aria-hidden="true"></span>'+
                    ' {Nav.SALES_ITEM}'+
                  '</a>'+
                '</li>'+
                '<li role="separator" class="divider"></li>'+
                '<li>'+
                  '<a href="#">'+
                    '<span class="glyphicon glyphicon-user" aria-hidden="true"></span>'+
                    ' {Nav.CONTACT}'+
                  '</a>'+
                '</li>'+
                '<li>'+
                  '<a href="#">'+
                    '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>'+
                    ' {Nav.QUOTATION}'+
                  '</a>'+
                '</li>'+
                '<li role="separator" class="divider"></li>'+
                '<li>'+
                  '<a href="#">'+
                    '<span class="glyphicon glyphicon-th-list" aria-hidden="true"></span>'+
                    ' {Nav.OTHERS}'+
                  '</a>'+
                '</li>'+
              '</ul>'+
            '</li>'+
          '</ul>'+
        '</div>'+
      '</div>'+
    '</div>'
);
