import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appBlogOC';

  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, tellus suscipit. Purus proin velit, sed tellus, arcu auctor nunc. Quisque eu, proin enim. Quis suspendisse, sed turpis pellentesque, accumsan a. Diam eget. Ullamcorper ipsum vitae, sed nisl ornare. Malesuada diam ultricies. Vel ullamcorper integer, condimentum ligula, praesent duis. Lobortis fermentum.',
      loveIts: 3,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Sodales quis vel, ac purus lorem. At volutpat tempor. Netus amet augue, mi pulvinar, pellentesque quis ac. A dui. Maecenas in at, maecenas cum, libero velit aliquam. Elementum dolor, neque risus aenean. Sed venenatis. Mollis dui, laoreet eu erat, lacus reprehenderit. Nunc placerat. Lectus vel.',
      loveIts: -2,
      created_at: new Date()
    },
    {
      title: 'Mon troisième post',
      content: 'Est vivamus. Magni auctor. Sagittis quam, et elementum, mus nec magna. Aliquam per eleifend, semper egestas, risus a eget. Dapibus eget.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon quatrième post',
      content: 'Tellus justo integer, nibh tellus arcu, nec porta. Itaque nunc sagittis, suscipit orci quisque, mauris volutpat. Pharetra erat posuere, ut justo aenean. Quisque non, massa suspendisse justo. At donec quam. Ac hendrerit adipiscing. A mauris. Pellentesque nec etiam, nesciunt non, veniam ut ligula. Massa vitae vestibulum, ut pulvinar nam, eros ad. Per quis, sed nonummy nec, suscipit per suspendisse.',
      loveIts: 1,
      created_at: new Date()
    },
  ];
}
