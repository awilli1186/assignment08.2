var $aside = $('.aside');
var $name = $('.name');
var $info = $('.info');
var $counter = $('.counter');
var $image = $('.image');
var $header = $('header');
var $buttons = $('.buttons');
var url ='https://api.github.com/users/awilli1186';
var urlRepo ='https://api.github.com/users/awilli1186/repos';


$.ajax(url, {
  method:"GET",

  error: function(){
    $aside.text("Oooops! " + error);
  },
  success: function(data, textStatus, xhr){
    var profile = data;
    var avatar = profile.avatar_url;

    $buttons.append('<img src="' + profile.avatar_url +'">' + '<span class="octicon octicon-triangle-down"></span>');

    $img = $('<img>').attr('src', avatar);
    $image.append($img);

    $h3 = $('<h3>').text(profile.name);
    $name.append($h3);

    $p = $('<p>').text(profile.login);
    $name.append($p);

    $info.append('<span class="octicon octicon-link"></span>' + '<a href="https://medium.com/@awilli1186">' +  profile.blog + '</a>');

    $info.append('<p>' + '<span class="octicon octicon-location"></span>' + profile.location + '</p>');

    $info.append('<p>' + '<span class="octicon octicon-clock"></span>' + 'Joined ' + moment(profile.created_at).fromNow() + '</p>');

    $p = $('<li class="numbers">').text(profile.followers);
    $counter.append($p);

    $p = $('<li class="numbers">').text(0);
    $counter.append($p);

    $p = $('<li class="numbers">').text(profile.following);
    $counter.append($p);

    $counter.append('<li class="titles"><a href="'+ profile.followers_url +'">' + "Followers" + '</li>');
    $counter.append('<li class="titles"><a href="'+ profile.starred_url +'">' + "Starred" + '</li>');
    $counter.append('<li class="titles"><a href="'+ profile.followers_url +'">' + "Following" + '</li>');


    console.log(profile);
  }
});

$.ajax(urlRepo, {
  method:"GET",
  error: function(){
    $aside.text("Oooops! " + error);
  },
  success: function(repos, textStatus, xhr){
    var $repos = $('.repos');
    repos.forEach(function(repo){
      $repos.append('<h3><a href="'+ repo.html_url +'">' + repo.name + '</a></h3>');
      $repos.append('<p>' +  moment(repo.updated_at).fromNow() + '</p>');
      $repos.append('<p class="lang"><a href="'+ repo.forks_url +'">' + '<span class="octicon octicon-git-branch"></span>' + repo.forks + '</p>');
      $repos.append('<p class="lang"><a href="'+ repo.stargazers_url +'">' + '<span class="octicon octicon-star"></span>' + repo.stargazers_count + '</p>');
      $repos.append('<p class="lang">' + repo.language + '</p>');

    });
}
});
