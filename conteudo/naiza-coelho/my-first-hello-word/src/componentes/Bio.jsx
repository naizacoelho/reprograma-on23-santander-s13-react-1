import Text from "./Text";
import Image from "./Image";
import minhaFoto from "../assets/fotogithub.jpeg"


function Bio() {
    return (
        <>
        <div>
            <Image image={minhaFoto} class="minha-foto"></Image>
            <Text>🌼Olá todes, me chamo Naíza Coelho e vou compartilhar um pouco sobre algumas coisas favoritas minhas.🌼 </Text>
        </div>
        </>
    )
}

export default Bio;
