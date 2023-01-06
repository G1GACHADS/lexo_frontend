import { Text, ScrollView } from "react-native"
import styled from "styled-components/native"
export default function Main({content}){
  return(
    <ScrollViewContainer>
      {content?<Text>{content}
      <Text>hi</Text>
            <Text style={{ fontWeight:'bold' }}>T </Text>
            <Text style={{ fontWeight:'bold' }}>he </Text>
            <Text>Mouse</Text>
      </Text>
      :<Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nesciunt, autem porro optio aperiam accusamus tempore! Nulla est repudiandae magnam consequatur, deleniti fugiat perspiciatis, facilis qui quas harum minus quasi!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quo iusto aliquam numquam? Debitis unde soluta minima a tempore voluptate numquam porro, placeat est illum, deleniti necessitatibus optio culpa temporibus!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsa recusandae iure aspernatur. Aliquid quis consectetur quo doloremque eos corporis consequatur, ipsa quos id dolore dolores magni voluptates obcaecati veniam?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ducimus? Perferendis quaerat fuga dolor nobis ipsum quis, harum velit fugit, molestias eum voluptatibus maiores porro modi architecto! Vitae, dolor! Similique.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia asperiores qui saepe illum earum, reprehenderit nesciunt id nostrum ea expedita exercitationem sed nisi eaque natus tenetur excepturi in, fugiat et!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae aliquid earum explicabo! Pariatur architecto animi odit quis eius libero veritatis accusantium reiciendis vel error, quasi molestiae delectus autem necessitatibus amet.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nesciunt, autem porro optio aperiam accusamus tempore! Nulla est repudiandae magnam consequatur, deleniti fugiat perspiciatis, facilis qui quas harum minus quasi!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quo iusto aliquam numquam? Debitis unde soluta minima a tempore voluptate numquam porro, placeat est illum, deleniti necessitatibus optio culpa temporibus!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsa recusandae iure aspernatur. Aliquid quis consectetur quo doloremque eos corporis consequatur, ipsa quos id dolore dolores magni voluptates obcaecati veniam?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ducimus? Perferendis quaerat fuga dolor nobis ipsum quis, harum velit fugit, molestias eum voluptatibus maiores porro modi architecto! Vitae, dolor! Similique.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia asperiores qui saepe illum earum, reprehenderit nesciunt id nostrum ea expedita exercitationem sed nisi eaque natus tenetur excepturi in, fugiat et!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae aliquid earum explicabo! Pariatur architecto animi odit quis eius libero veritatis accusantium reiciendis vel error, quasi molestiae delectus autem necessitatibus amet.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nesciunt, autem porro optio aperiam accusamus tempore! Nulla est repudiandae magnam consequatur, deleniti fugiat perspiciatis, facilis qui quas harum minus quasi!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quo iusto aliquam numquam? Debitis unde soluta minima a tempore voluptate numquam porro, placeat est illum, deleniti necessitatibus optio culpa temporibus!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsa recusandae iure aspernatur. Aliquid quis consectetur quo doloremque eos corporis consequatur, ipsa quos id dolore dolores magni voluptates obcaecati veniam?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ducimus? Perferendis quaerat fuga dolor nobis ipsum quis, harum velit fugit, molestias eum voluptatibus maiores porro modi architecto! Vitae, dolor! Similique.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia asperiores qui saepe illum earum, reprehenderit nesciunt id nostrum ea expedita exercitationem sed nisi eaque natus tenetur excepturi in, fugiat et!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae aliquid earum explicabo! Pariatur architecto animi odit quis eius libero veritatis accusantium reiciendis vel error, quasi molestiae delectus autem necessitatibus amet.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nesciunt, autem porro optio aperiam accusamus tempore! Nulla est repudiandae magnam consequatur, deleniti fugiat perspiciatis, facilis qui quas harum minus quasi!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quo iusto aliquam numquam? Debitis unde soluta minima a tempore voluptate numquam porro, placeat est illum, deleniti necessitatibus optio culpa temporibus!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsa recusandae iure aspernatur. Aliquid quis consectetur quo doloremque eos corporis consequatur, ipsa quos id dolore dolores magni voluptates obcaecati veniam?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ducimus? Perferendis quaerat fuga dolor nobis ipsum quis, harum velit fugit, molestias eum voluptatibus maiores porro modi architecto! Vitae, dolor! Similique.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia asperiores qui saepe illum earum, reprehenderit nesciunt id nostrum ea expedita exercitationem sed nisi eaque natus tenetur excepturi in, fugiat et!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae aliquid earum explicabo! Pariatur architecto animi odit quis eius libero veritatis accusantium reiciendis vel error, quasi molestiae delectus autem necessitatibus amet.
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