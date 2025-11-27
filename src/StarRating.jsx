import { range } from "./util"

function StarRating({ rating }) {
  /*
    Here's the markup for a single star:

    <img
      alt=""
      className="gold-star"
      // src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
      src="/star.svg"
    />

    Your job is to repeat this element
    based on the `rating` prop.
    If the rating is 4, we need 4 copies.
  */

    const StarRender = ()=> {
      return range(rating).map(item => {
        return (
          <img key={crypto.randomUUID}
          alt="Rating"
          className="gold-star"
          src="/star.svg"
          />
        )
      })
    }

  return (
    <div className="star-wrapper">
      <StarRender/>
    </div>
  )
}

export default StarRating
