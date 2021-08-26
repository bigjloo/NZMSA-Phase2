import image_1 from "./Lazy_Cat_with_fishes_transparent_by_Icons8.gif"
import image_2 from "./Lazy_Cat_Spinning_cat_transparent_by_Icons8.gif"
import image_3 from "./Lazy_Cat_in_hands_transparent_by_Icons8.gif"

// Images credit to www.icons8.com
const images = [image_1, image_2, image_3]
const randomImage = images[Math.floor(Math.random() * images.length)]

export default randomImage