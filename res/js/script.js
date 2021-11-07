/*$.ajax({
    url: 'https://api.jsonbin.io/b/61846433dfffdf47a4906333',
    type: 'GET',
    dataType: 'json',
    success: function(posts) {
      console.log("great success!!")
      
        //should do something with json here assuming it works
    
    }
  });
  
  */

 $(function() {
    $.get('https://api.jsonbin.io/b/6188175d820eda3cc81947aa/1', function(json_obj) {
      console.log(json_obj)
    for (obj of json_obj) {

      //console.log(obj)
        
      let post =  document.createElement("div");
      post.classList.add("singlebox");

      let posttop =  document.createElement("div");
      posttop.classList.add("posttop");
      console.log(posttop.classList)
            
      let aeg = document.createElement("label");
      aeg.innerText = obj.time;
      let author = document.createElement("label");
      author.innerText = obj.author;

      posttop.appendChild(aeg);
      posttop.appendChild(author);
      post.appendChild(posttop);
      
      let picture = obj.image;
      let postituseSisu =  document.createElement("div");
      postituseSisu.classList.add("postituseSisu");
      /*
      <div class = "postituseSisu">
            <img src="res/images/pilt2.JPG"  class = "postitusePilt"/>
            <label>man's not hot</label>
            <img src="res/images/like.JPG"  class = "like"/>
          </div>*/




      if (picture!=null){
        let pilt = document.createElement("img");
        pilt.src = picture;
        pilt.classList.add("postitusePilt");
        pilt.src
        postituseSisu.appendChild(pilt);
      }

      let sisu = document.createElement("label");
      sisu.innerText = obj.caption;
      postituseSisu.appendChild(sisu);

      let like = document.createElement("img");
      like.src = "res/images/like.JPG";
      like.classList.add("like");
      postituseSisu.appendChild(like);

      post.appendChild(postituseSisu)

      $("#posts_field").append(post)
    }
  })
});
  