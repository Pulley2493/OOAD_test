var prod_info_arr = [
		{
			img_url : "images/s-l225.jpg",
			head1 : "For Xiaomi Mi A1 Slim Soft Transparent Bumper Back Cover Case" ,
			head2 : "Best Quality Fitting ★ INDIAN VERSION ★ Lowest Price ★" ,
			inr_s : "Rs. 99.00",
			inr_e : "Rs.299.00",
			ext : "Buy it Now",
			ship : "Free Shipping"
		},
		{
			img_url : "images/s-l226.jpg",
			head1 : "For 10.or E Back Cover Transparent Soft Silicon Case / Tempered Glass" ,
			head2 : "Shipping From Bluedart/Fedex/Aramex/IndianPost" ,
			inr_s : "Rs.159.00",
			inr_e : "Rs.239.00",
			ext : "Buy it Now",
			ship : "Free Shipping"  
		}
];
document.getElementById("image").innerHTML = `
	${prod_info_arr.map(function(prod) {
	  return `
	  <li class="list-group-item">
  						<div class="row">
  							<div class = "col-sm-4">
  								<img   src=${prod.img_url} alt="product">
  							</div>
  							<div id = "detail" class = "col-sm-8">
  								<h4><a class="hover" href="#">${prod.head1}</a></h4>
  								<h5 style="color:grey">${prod.head2}</h5>
  								<h5 style="color:grey">Brand New</h5>
  								<h4><br><strong>${prod.inr_s} <font size="2">to</font> ${prod.inr_e}</strong></h4>
  								<h5 style="color:grey">${prod.ext}<button type="button" style = "float:right" class="btn btn-primary">Buy Now</button></h5>
  								<h5 style="color:grey">${prod.ship}</h5>
  							</div>
  						</div>
  						</li>
  	`
	}).join('')}`
	
	
	
	
	
