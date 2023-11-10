import * as React from 'react';
import "./Card.css"

export default function MediaCard(props) {
  const { item } = props;
  
  return (
    <section class="light">
	<div class="container py-2">

		<article class="postcard light blue">
			<a class="postcard__img_link" href={`http://localhost:8080/upload/${item.image}`}>
				<img class="postcard__img" src={`http://localhost:8080/upload/${item.image}`} alt={item.image} />
			</a>
			<div class="postcard__text t-dark">
				<h1 class="postcard__title blue">{item.itemName.toUpperCase()}</h1>
				{/* <div class="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					</time>
				</div> */}
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">{item.description}</div>
				<ul class="postcard__tagbox">
					<li class="tag__item"><i class="fas fa-tag mr-2"></i>Contact : {item.mobileno}</li>
					<li class="tag__item"><i class="fas fa-clock mr-2">Location : {item.location}</i></li>
					<li class="tag__item play blue">
						<a href="/"><i class="fas fa-play mr-2">Chat With Us</i></a>
					</li>
				</ul>
			</div>
		</article>
    </div>
</section>
  );
}