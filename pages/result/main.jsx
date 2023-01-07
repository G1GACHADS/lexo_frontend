import { Text, ScrollView,Linking } from "react-native"
import styled from "styled-components/native"
import Markdown from 'react-native-markdown-package';
const text = `
# This is Heading 1
## This is Heading 2
1. List1
2. List2
  This is a \`description\`  for List2 .\n
  * test
  * test
3. List3
4. List4.


You can also put some url as a link [like This](https://www.google.com) or write it as a plain text:
  https://www.google.com
  <mailme@gmail.com>

---

This text should be printed between horizontal rules

---

The following code is an example for codeblock:

    const a = function() {
      runSomeFunction()
    };

Below is some example to print blockquote

> Test block Quote
> Another  block Quote

this is _italic_
this is **strong**
Some *really* ~~basic~~ **Markdown**.


| # | Name   | Age
|---|--------|-----|
| 1 | John   | 19  |
| 2 | Sally  | 18  |
| 3 | Stream | 20  |


this is an example for adding picture:

![Screen Shot 2019-10-05 at 3 19 33 AM](https://user-images.githubusercontent.com/26213148/66237659-d11f4280-e71f-11e9-91e3-7a3f08659d89.png)


`


export default function Main({content}){
  return(
    <ScrollViewContainer contentInsetAdjustmentBehavior="automatic">
      {content?
      <Markdown
        styles={markdownStyle.collectiveMd}
      >
        {content}
      </Markdown>
      :<Text>
        There is no result
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, ipsam nisi ea explicabo officia nihil veritatis! Corrupti quod sed pariatur, sequi ex itaque ducimus obcaecati corporis quisquam, delectus tempora eveniet.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident sit in ducimus? Nobis amet placeat autem unde dolore aliquid cumque, facilis eius quasi commodi dolor ab, aspernatur voluptatibus deleniti doloremque!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos nesciunt, alias corrupti accusamus quos magni facilis reprehenderit reiciendis, possimus voluptatem quisquam. Provident, porro? Temporibus repellendus enim vero consequuntur mollitia possimus?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non laborum velit magni maiores similique voluptatem ad error dolore quibusdam aliquam, labore, quo ipsum quidem nulla ipsam. Delectus aliquam natus cum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vitae impedit mollitia officiis neque labore eligendi obcaecati reprehenderit eos voluptatibus, rerum doloremque nisi similique incidunt architecto accusamus excepturi reiciendis ut!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus tenetur, quod distinctio, odit harum vitae deleniti, cum tempore iste consequatur velit explicabo laboriosam voluptas qui dolorum enim doloremque obcaecati sequi.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio porro illo distinctio, tempore sint deleniti, modi veritatis molestias corrupti vero quibusdam placeat consequatur, tempora quis perspiciatis. Ipsum facilis hic est.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi rerum, ut at aut pariatur adipisci maxime libero fugiat voluptatum nemo! Debitis sapiente sit facilis fugiat doloremque dolorum facere libero quod.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum accusantium quis saepe repellat, incidunt tempore aliquid unde quod praesentium totam odio in error earum, quaerat reiciendis, id sint reprehenderit libero.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio molestiae voluptatem aliquam expedita temporibus perspiciatis tenetur voluptate repellendus quos, saepe, eius dolores est, alias quaerat possimus placeat. Iure, voluptatem perferendis!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat reprehenderit eos, veniam nobis laboriosam, doloribus deleniti est obcaecati reiciendis magni similique consequuntur quidem! Expedita, cum amet? Laborum magnam reprehenderit praesentium.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste eveniet, blanditiis fugiat sed soluta ratione voluptas suscipit minima perspiciatis aliquam unde corporis quisquam libero voluptate cum dolore quasi, dolores nisi.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, aliquid? Tempore rerum accusamus odit in cupiditate cum nobis ut veniam dolor sequi nisi animi dolores, minima nostrum recusandae provident autem!
        
      </Text>}
    </ScrollViewContainer>
  )
}

const ScrollViewContainer = styled.ScrollView`
  flex: 1;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`
const markdownStyle = {
  collectiveMd: {
    body:{
      color: 'black',
    }
  }
}