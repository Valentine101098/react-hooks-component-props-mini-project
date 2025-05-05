import React from "react";

const Article = ({ title, date = "January 1, 1970", preview, minutes}) => {
    let emojiDisplay = "";
    if (minutes < 30) {
      const cups = Math.ceil(minutes / 5);
      emojiDisplay = "☕".repeat(cups);
    } else {
      const bentos = Math.ceil(minutes / 10);
      emojiDisplay = "🍱".repeat(bentos);
    }
    return <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
        <p>{emojiDisplay} {minutes} min read</p>
    </article>
}
export default Article;